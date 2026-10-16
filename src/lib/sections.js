// Obtiene un nombre de sección legible para los eventos.
export function sectionNameFor(el) {
  if (!el || !el.closest) return '';
  if (el.closest('#apu-mobile-menu')) return 'mobile_menu';
  if (el.closest('header')) return 'header';
  if (el.closest('footer')) return 'footer';
  const sec = el.closest('section');
  const heading = sec && sec.querySelector('h1, h2, h3');
  if (heading) return (heading.innerText || heading.textContent).replace(/\s+/g, ' ').trim().slice(0, 80);
  const main = el.closest('[data-screen-label]');
  return main ? main.getAttribute('data-screen-label') : '';
}

// "TELECOMUNICACIONES" → "Telecomunicaciones"
export function normalizeName(s) {
  const t = String(s || '').trim();
  return t && t === t.toUpperCase() ? t.charAt(0) + t.slice(1).toLowerCase() : t;
}

export function labelFor(el) {
  const img = el.querySelector && el.querySelector('img[alt]');
  const text = (el.getAttribute('aria-label') || el.textContent.trim() || (img && img.alt) || '').replace(/\s+/g, ' ').trim();
  return text.slice(0, 80);
}
