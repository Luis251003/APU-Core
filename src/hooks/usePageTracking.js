import { useEffect, useRef } from 'react';
import { PAGES } from '../lib/routes.js';
import { applySeo } from '../lib/seo.js';
import { track, setCurrentPage, EVENTS } from '../lib/analytics.js';

const CASES = { 'caso-telecom': 'Telecomunicaciones', 'caso-ecom': 'E-commerce', 'caso-ops': 'Productos internos' };

export function usePageTracking(page) {
  const last = useRef(null);
  useEffect(() => {
    if (!page || last.current === page) return;
    last.current = page;
    const p = PAGES[page] || PAGES.inicio;
    applySeo(page);
    setCurrentPage(p.name);
    track(EVENTS.PAGE_VIEW, { page_title: p.title, page_location: window.location.href, page_path: p.path });
    if (CASES[page]) track(EVENTS.CASE_STUDY_VIEW, { case_name: CASES[page], section_name: 'case_page' });
  }, [page]);
}
