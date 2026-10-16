// Función serverless (Vercel) que envía el formulario de contacto por correo con Resend.
// Las credenciales se leen de variables de entorno del servidor; nunca llegan al navegador.
import { validateContact, LIMITS } from '../src/lib/validation.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'invalid_json' }); }
  }

  // Honeypot: los bots completan el campo oculto "website".
  if (body.website) return res.status(200).json({ ok: true });

  const errors = validateContact(body);
  if (Object.keys(errors).length) return res.status(400).json({ error: 'validation', fields: errors });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'APU CORE Web <onboarding@resend.dev>';
  if (!apiKey || !to) {
    console.error('[contact] Faltan RESEND_API_KEY o CONTACT_TO_EMAIL');
    return res.status(500).json({ error: 'server_not_configured' });
  }

  const nombre = String(body.nombre).trim().slice(0, LIMITS.nombre);
  const correo = String(body.correo).trim().slice(0, LIMITS.correo);
  const empresa = String(body.empresa || '').trim().slice(0, LIMITS.empresa);
  const mensaje = String(body.mensaje).trim().slice(0, LIMITS.mensaje);

  const rows = [['Nombre', nombre], ['Correo', correo], ...(empresa ? [['Empresa', empresa]] : []), ['Mensaje', mensaje]];
  const html = '<h2 style="font-family:sans-serif">Nuevo mensaje desde apucore</h2>' +
    rows.map(([k, val]) => '<p style="font-family:sans-serif"><strong>' + k + ':</strong><br>' + esc(val).replace(/\n/g, '<br>') + '</p>').join('');
  const text = rows.map(([k, val]) => k + ': ' + val).join('\n\n');

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: correo,
        subject: 'Nuevo contacto web — ' + nombre,
        html,
        text
      })
    });
    if (!r.ok) {
      console.error('[contact] Resend respondió', r.status, await r.text());
      return res.status(502).json({ error: 'send_failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] Error de red', err);
    return res.status(502).json({ error: 'send_failed' });
  }
}
