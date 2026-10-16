import { useEffect } from 'react';
import { track } from '../lib/analytics.js';
import { sectionNameFor, normalizeName } from '../lib/sections.js';

const PARAM = { service_view: 'service_name', case_study_view: 'case_name', team_profile_view: 'profile_name' };

// Envía un evento de "vista" una sola vez por página cuando un elemento [data-view]
// queda al menos 50% visible (o cubre al menos media pantalla si es muy alto).
export function useViewTracking(page) {
  useEffect(() => {
    if (!page || typeof IntersectionObserver === 'undefined') return undefined;
    const seen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const visibleEnough = entry.intersectionRatio >= 0.5 || entry.intersectionRect.height >= window.innerHeight * 0.5;
        if (!entry.isIntersecting || !visibleEnough) return;
        const el = entry.target;
        const ev = el.getAttribute('data-view');
        const name = normalizeName(el.getAttribute('data-view-name') || '');
        const key = ev + '|' + name;
        io.unobserve(el);
        if (seen.has(key)) return;
        seen.add(key);
        track(ev, { [PARAM[ev] || 'item_name']: name, section_name: sectionNameFor(el) });
      });
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('[data-view]').forEach((el) => io.observe(el));
    });
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [page]);
}
