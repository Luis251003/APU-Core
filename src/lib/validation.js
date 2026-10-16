// Validación compartida entre el formulario (frontend) y la API (/api/contact).
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const LIMITS = { nombre: 120, correo: 200, empresa: 160, mensaje: 5000 };

export function validateContact(data) {
  const d = data || {};
  const errors = {};
  const nombre = String(d.nombre || '').trim();
  const correo = String(d.correo || '').trim();
  const mensaje = String(d.mensaje || '').trim();
  const empresa = String(d.empresa || '').trim();
  if (!nombre) errors.nombre = 'Ingresa tu nombre.';
  else if (nombre.length > LIMITS.nombre) errors.nombre = 'El nombre es demasiado largo.';
  if (!correo) errors.correo = 'Ingresa tu correo.';
  else if (!EMAIL_RE.test(correo) || correo.length > LIMITS.correo) errors.correo = 'Ingresa un correo válido.';
  if (!mensaje) errors.mensaje = 'Cuéntanos sobre tu proyecto.';
  else if (mensaje.length > LIMITS.mensaje) errors.mensaje = 'El mensaje es demasiado largo.';
  if (empresa.length > LIMITS.empresa) errors.empresa = 'El nombre de la empresa es demasiado largo.';
  return errors;
}
