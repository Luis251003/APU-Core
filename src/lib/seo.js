import { PAGES } from './routes.js';

function setMeta(attr, key, content) {
  let el = document.head.querySelector('meta[' + attr + '="' + key + '"]');
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', content);
}

// Actualiza title, description, canonical y Open Graph al cambiar de página.
export function applySeo(page) {
  const p = PAGES[page] || PAGES.inicio;
  const base = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/+$/, '');
  const url = base + p.path;
  document.title = p.title;
  setMeta('name', 'description', p.description);
  setMeta('property', 'og:title', p.title);
  setMeta('property', 'og:description', p.description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', base + '/images/og-image.png');
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
  link.href = url;
}
