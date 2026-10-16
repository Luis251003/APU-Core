
import { validateContact, LIMITS } from '../../src/lib/validation.js';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c]));

const json = (data, status = 200) =>
  Response.json(data, { status });

export async function onRequestPost({ request, env }) {
  let body;

  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return json({ error: 'invalid_json' }, 400);
  }

  // Honeypot: los bots pueden completar el campo oculto "website".
  if (body.website) {
    return json({ ok: true });
  }

  const errors = validateContact(body);

  if (Object.keys(errors).length) {
    return json({ error: 'validation', fields: errors }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  const to = env.CONTACT_TO_EMAIL;
  const from = env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error('[contact] Faltan variables de entorno');
    return json({ error: 'server_not_configured' }, 500);
  }

  const nombre = String(body.nombre).trim().slice(0, LIMITS.nombre);
  const correo = String(body.correo).trim().slice(0, LIMITS.correo);
  const empresa = String(body.empresa || '').trim().slice(0, LIMITS.empresa);
  const mensaje = String(body.mensaje).trim().slice(0, LIMITS.mensaje);

  const rows = [
    ['Nombre', nombre],
    ['Correo', correo],
    ...(empresa ? [['Empresa', empresa]] : []),
    ['Mensaje', mensaje],
  ];

  const html =
    '<h2 style="font-family:sans-serif">Nuevo mensaje desde APU-Core</h2>' +
    rows.map(([key, value]) =>
      '<p style="font-family:sans-serif"><strong>' +
      key +
      ':</strong><br>' +
      esc(value).replace(/\n/g, '<br>') +
      '</p>'
    ).join('');

  const text = rows
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: correo,
        subject: `Nuevo contacto web — ${nombre}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      console.error(
        '[contact] Resend respondió',
        response.status,
        await response.text()
      );
      return json({ error: 'send_failed' }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error('[contact] Error de red', error);
    return json({ error: 'send_failed' }, 502);
  }
}
