// Capa de medición: GA4 (gtag) o Google Tag Manager + Microsoft Clarity.
// Si VITE_GTM_ID está definido se usa GTM (y GA4 se configura dentro de GTM) para evitar
// cargar GA4 dos veces. Si no, se carga GA4 directo con VITE_GA_MEASUREMENT_ID.
export { EVENTS } from './events.js';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GTM_ID = import.meta.env.VITE_GTM_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;
const DEBUG = import.meta.env.DEV || import.meta.env.VITE_ANALYTICS_DEBUG === 'true';

let currentPage = '';

function loadScript(src) {
  if (document.querySelector('script[src="' + src + '"]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function initAnalytics() {
  if (typeof window === 'undefined' || window.__apuAnalyticsInit) return;
  window.__apuAnalyticsInit = true;
  window.dataLayer = window.dataLayer || [];

  if (GTM_ID) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    loadScript('https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID));
  } else if (GA_ID) {
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    // page_view se envía manualmente en cada cambio de ruta (SPA) para no duplicarlo.
    window.gtag('config', GA_ID, { send_page_view: false });
    loadScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID));
  }

  if (CLARITY_ID && !window.clarity) {
    window.clarity = function clarity() { (window.clarity.q = window.clarity.q || []).push(arguments); };
    loadScript('https://www.clarity.ms/tag/' + encodeURIComponent(CLARITY_ID));
  }
}

export function getDeviceType() {
  const w = window.innerWidth;
  return w < 768 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop';
}

export function setCurrentPage(name) {
  currentPage = name;
  if (window.clarity) window.clarity('set', 'page_name', name);
}

export function track(eventName, params) {
  if (typeof window === 'undefined') return;
  const payload = { page_name: currentPage, device_type: getDeviceType(), ...(params || {}) };
  if (GTM_ID) window.dataLayer.push({ event: eventName, ...payload });
  else if (GA_ID && window.gtag) window.gtag('event', eventName, payload);
  if (window.clarity && eventName !== 'page_view') window.clarity('event', eventName);
  if (DEBUG) console.debug('[analytics]', eventName, payload);
}
