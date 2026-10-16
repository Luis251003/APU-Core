// Datos de contacto públicos (no son secretos).
export const CONTACT_EMAIL = 'apucore.peru@gmail.com';

const WA_NUMBER = String(import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');
const WA_MESSAGE = import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola APU CORE, quiero conversar sobre un proyecto.';

export function whatsappUrl() {
  if (!WA_NUMBER) {
    if (import.meta.env.DEV) console.warn('[APU CORE] Falta VITE_WHATSAPP_NUMBER en .env — el botón de WhatsApp no abrirá una conversación.');
    return 'https://wa.me/';
  }
  return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_MESSAGE);
}
