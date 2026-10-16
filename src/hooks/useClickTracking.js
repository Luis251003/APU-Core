import { useEffect } from 'react';
import { track, EVENTS } from '../lib/analytics.js';
import { sectionNameFor, labelFor, normalizeName } from '../lib/sections.js';

// Handlers internos que no son CTAs (menú, carruseles, lightbox, formulario).
const IGNORE = /^(toggleMenu|closeMenu|lb|wlb|cat\.(prev|next)|enviar|s\.toggle)/;

export function useClickTracking() {
  useEffect(() => {
    const onClick = (e) => {
      const target = e.target;
      if (!target || !target.closest) return;
      const a = target.closest('a[href]');
      if (a) {
        const href = a.getAttribute('href') || '';
        const base = { link_url: href, section_name: sectionNameFor(a) };
        if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/.test(href)) track(EVENTS.WHATSAPP_CLICK, base);
        else if (href.startsWith('mailto:')) track(EVENTS.EMAIL_CLICK, base);
        else if (/^https?:\/\//.test(href) && new URL(href).host !== window.location.host) track(EVENTS.EXTERNAL_LINK_CLICK, base);
        return;
      }
      const el = target.closest('[data-cta]');
      if (!el) return;
      const handler = el.getAttribute('data-cta');
      if (IGNORE.test(handler)) return;
      const section_name = sectionNameFor(el);
      if (handler === 'c.open' || /^goCaso[A-Z]/.test(handler)) {
        track(EVENTS.CASE_STUDY_CLICK, { case_name: normalizeName(el.getAttribute('data-case') || labelFor(el)), section_name });
      } else if (handler === 'shot.open') {
        track(EVENTS.SERVICE_CLICK, { service_name: el.getAttribute('data-service') || '', section_name, cta_name: labelFor(el) });
      } else {
        track(EVENTS.CTA_CLICK, { cta_name: labelFor(el), cta_target: handler, section_name });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
}
