// Rutas públicas del sitio. Agregar aquí nuevas páginas.
export const PAGES = {
  inicio: { path: '/', name: 'Inicio', title: 'APU CORE — Producto, Data & Growth', description: 'Diseñamos, desarrollamos y medimos productos digitales: apps mobile, plataformas web y productos internos que generan impacto.' },
  apps: { path: '/apps-mobile', name: 'Apps Mobile', title: 'Apps Mobile — APU CORE', description: 'Aplicaciones móviles diseñadas y desarrolladas por el talento de APU CORE: e-commerce, telecomunicaciones, servicios y seller center.' },
  web: { path: '/plataformas-web', name: 'Plataformas Web', title: 'Plataformas Web — APU CORE', description: 'Productos web, experiencias e interfaces desarrolladas por profesionales que hoy forman parte de APU CORE.' },
  casos: { path: '/soluciones', name: 'Soluciones', title: 'Soluciones de producto — APU CORE', description: 'Cómo abordamos productos de telecomunicaciones, e-commerce y plataformas internas.' },
  'caso-telecom': { path: '/soluciones/telecomunicaciones', name: 'Caso Telecomunicaciones', title: 'Telecomunicaciones — APU CORE', description: 'Journeys digitales claros para productos con múltiples reglas, validaciones e integraciones.' },
  'caso-ecom': { path: '/soluciones/e-commerce', name: 'Caso E-commerce', title: 'E-commerce — APU CORE', description: 'Productos orientados a mejorar conversión, experiencia y rentabilidad.' },
  'caso-ops': { path: '/soluciones/productos-internos', name: 'Caso Productos Internos', title: 'Productos internos — APU CORE', description: 'Herramientas internas que digitalizan procesos y centralizan información.' },
  nosotros: { path: '/nosotros', name: 'Nosotros', title: 'Nosotros — APU CORE', description: 'Conoce al equipo y el enfoque de APU CORE.' },
  contacto: { path: '/contacto', name: 'Contacto', title: 'Contacto — APU CORE', description: 'Cuéntanos tu proyecto y conversemos.' }
};

export function pageFromPath(pathname) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';
  const hit = Object.keys(PAGES).find(k => PAGES[k].path === clean);
  return hit || 'inicio';
}

export function pathForPage(page) {
  return (PAGES[page] || PAGES.inicio).path;
}
