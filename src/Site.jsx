import React from 'react';
import Layout from './Layout.jsx';
import { pageFromPath, pathForPage } from './lib/routes.js';
import { track, EVENTS } from './lib/analytics.js';
import { validateContact } from './lib/validation.js';
import { CONTACT_EMAIL, whatsappUrl } from './lib/site.js';

// Estado y lógica del sitio. La maqueta vive en ./components y ./pages.
const ICONS = {
  search: 'M9 3a6 6 0 1 0 3.7 10.7l3.6 3.6 1.4-1.4-3.6-3.6A6 6 0 0 0 9 3Zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z',
  bulb: 'M10 2.5a5 5 0 0 0-3 9v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a5 5 0 0 0-3-9Zm-1.6 14.8h3.2',
  code: 'M7.4 6.6 3.6 10l3.8 3.4M12.6 6.6 16.4 10l-3.8 3.4',
  chart: 'M3.6 16.4h12.8M5.6 13.4V9.8M9.4 13.4V6.4M13.2 13.4v-5',
  cycle: 'M4 8.6A6 6 0 0 1 15.4 7M16 11.4A6 6 0 0 1 4.6 13M14.4 4.2v3h-3M5.6 15.8v-3h3',
  user: 'M10 3.2a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8ZM3.6 17c.6-3.2 3.2-4.9 6.4-4.9s5.8 1.7 6.4 4.9',
  pen: 'M13.4 3.2 16.8 6.6 7.4 16H4v-3.4L13.4 3.2Z',
  gauge: 'M3.4 15.4a7.4 7.4 0 1 1 13.2 0M10 11.6l3.2-3.4',
  arrowUp: 'M10 16.4V4.6M5.4 9.2 10 4.6l4.6 4.6',
  antenna: 'M6.4 13.6a5 5 0 0 1 0-7.2M13.6 6.4a5 5 0 0 1 0 7.2M3.9 16.1a8.6 8.6 0 0 1 0-12.2M16.1 3.9a8.6 8.6 0 0 1 0 12.2M10 8.8v0',
  cart: 'M2.4 3.2h2l1.7 8.2h8.2l1.5-5.8H5.6M7.6 15.4h0M13.4 15.4h0',
  stack: 'M10 3.2c3.2 0 5.8.9 5.8 2s-2.6 2-5.8 2-5.8-.9-5.8-2 2.6-2 5.8-2ZM4.2 5.2v4.4c0 1.1 2.6 2 5.8 2s5.8-.9 5.8-2V5.2M4.2 9.6V14c0 1.1 2.6 2 5.8 2s5.8-.9 5.8-2V9.6'
};

function svgIcon(path, opts) {
  const o = opts || {};
  return React.createElement('svg', { width: '100%', height: '100%', viewBox: '0 0 20 20', fill: 'none' },
    React.createElement('path', {
      d: path,
      stroke: 'currentColor',
      strokeWidth: o.w || 1.4,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
}

export default class Site extends React.Component {
  state = {
    page: pageFromPath(typeof window !== 'undefined' ? window.location.pathname : '/'),
    nombre: '',
    correo: '',
    mensaje: '',
    servicios: [],
    status: 'idle',
    errors: {},
    errorMsg: '',
    website: '',
    hoverRail: -1,
    lbCat: -1,
    lbIndex: 0,
    hoverWRail: -1,
    wlbCat: -1,
    wlbIndex: 0,
    solOpen: false,
    menuOpen: false
  };

  rails = {};
  wrails = {};

  onKeyDown = (e) => {
    if (this.state.wlbCat >= 0) {
      if (e.key === 'Escape') this.setState({ wlbCat: -1 });
      if (e.key === 'ArrowRight') this.wlbStep(1);
      if (e.key === 'ArrowLeft') this.wlbStep(-1);
      return;
    }
    if (this.state.lbCat < 0) return;
    if (e.key === 'Escape') this.setState({ lbCat: -1 });
    if (e.key === 'ArrowRight') this.lbStep(1);
    if (e.key === 'ArrowLeft') this.lbStep(-1);
  };

  wlbStep = (d) => {
    this.setState(s => ({ wlbIndex: (s.wlbIndex + d + 6) % 6 }));
  };

  scrollWRail = (i, d) => {
    const el = this.wrails[i];
    if (!el) return;
    el.scrollBy({ left: d * Math.round(el.clientWidth * 0.7), behavior: 'smooth' });
  };

  lbStep = (d) => {
    const total = 6;
    this.setState(s => ({ lbIndex: (s.lbIndex + d + total) % total }));
  };

  scrollRail = (i, d) => {
    const el = this.rails[i];
    if (!el) return;
    el.scrollBy({ left: d * Math.round(el.clientWidth * 0.7), behavior: 'smooth' });
  };

  formStarted = false;

  onPopState = () => {
    const page = pageFromPath(window.location.pathname);
    this.setState({ page, menuOpen: false, lbCat: -1, wlbCat: -1 });
    if (this.props.onNavigate) this.props.onNavigate(page);
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('popstate', this.onPopState);
    const canonical = pathForPage(this.state.page);
    if (window.location.pathname !== canonical) window.history.replaceState(null, '', canonical + window.location.search + window.location.hash);
    if (this.props.onNavigate) this.props.onNavigate(this.state.page);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('popstate', this.onPopState);
  }

  go = (page) => {
    if (page !== this.state.page) window.history.pushState(null, '', pathForPage(page));
    this.setState({ page, lbCat: -1, wlbCat: -1 });
    window.scrollTo(0, 0);
    if (this.props.onNavigate) this.props.onNavigate(page);
  };

  onFormStart = () => {
    if (this.formStarted) return;
    this.formStarted = true;
    track(EVENTS.CONTACT_FORM_START, { section_name: 'contact_form' });
  };

  onField = (field) => (e) => {
    const value = e.target.value;
    this.onFormStart();
    this.setState(s => ({
      [field]: value,
      status: s.status === 'loading' ? 'loading' : 'idle',
      errorMsg: s.status === 'loading' ? s.errorMsg : '',
      errors: { ...s.errors, [field]: undefined }
    }));
  };

  enviar = async () => {
    const st = this.state;
    if (st.status === 'loading') return;
    const data = { nombre: st.nombre.trim(), correo: st.correo.trim(), mensaje: st.mensaje.trim(), website: st.website };
    const errors = validateContact(data);
    if (Object.keys(errors).length) {
      this.setState({ errors, status: 'error', errorMsg: 'Revisa los campos marcados.' });
      track(EVENTS.CONTACT_FORM_ERROR, { section_name: 'contact_form', error_type: 'validation', error_fields: Object.keys(errors).join(',') });
      return;
    }
    this.setState({ status: 'loading', errors: {}, errorMsg: '' });
    track(EVENTS.CONTACT_FORM_SUBMIT, { section_name: 'contact_form' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      this.setState({ status: 'success', nombre: '', correo: '', mensaje: '' });
      this.formStarted = false;
      track(EVENTS.CONTACT_FORM_SUCCESS, { section_name: 'contact_form' });
    } catch (err) {
      this.setState({ status: 'error', errorMsg: 'No pudimos enviar tu mensaje. Inténtalo nuevamente o escríbenos a ' + CONTACT_EMAIL + '.' });
      track(EVENTS.CONTACT_FORM_ERROR, { section_name: 'contact_form', error_type: 'network' });
    }
  };

  render() {
    return <Layout v={this.renderVals()} />;
  }

  toggleServicio = (id) => {
    this.setState(s => ({
      servicios: s.servicios.indexOf(id) >= 0 ? s.servicios.filter(x => x !== id) : s.servicios.concat([id])
    }));
  };

  renderVals() {
    const st = this.state;
    const stepDefs = [
      ['01', 'Descubrimos', 'Entendemos tu negocio, usuarios y oportunidades.', 'Más claridad', '/images/card-01.png', ICONS.search, '115.3% 149.5%', '51.1% 21.5%'],
      ['02', 'Diseñamos', 'Convertimos insights en soluciones útiles.', 'Mejores experiencias', '/images/card-02.png', ICONS.bulb, '104.8% 134.0%', '50.0% 18.1%'],
      ['03', 'Desarrollamos', 'Construimos productos escalables y confiables.', 'Soluciones reales', '/images/card-03.png', ICONS.code, '114.6% 132.8%', '50.4% 47.0%'],
      ['04', 'Medimos', 'Analizamos su desempeño con datos reales.', 'Decisiones informadas', '/images/card-04.png', ICONS.chart, '110.4% 114.5%', '51.1% 37.8%'],
      ['05', 'Iteramos', 'Optimizamos y escalamos para un mayor impacto.', 'Resultados continuos', '/images/card-05.png', ICONS.cycle, '110.1% 141.4%', '48.9% 22.9%']
    ];

    const pillarDefs = [
      ['01', 'Entender\nantes de construir', 'Nos enfocamos en las personas, sus necesidades reales y el contexto del negocio.', ICONS.user],
      ['02', 'Diseñar\ncon propósito', 'Convertimos ideas en experiencias simples, útiles y memorables.', ICONS.pen],
      ['03', 'Medir\npara decidir', 'Usamos datos para validar, aprender y tomar mejores decisiones.', ICONS.gauge],
      ['04', 'Mejorar\ncontinuamente', 'Iteramos, optimizamos y escalamos lo que genera impacto.', ICONS.arrowUp]
    ];

    const servicioDefs = [
      ['dev', 'Desarrollo Digital', 'Web, apps y plataformas', ICONS.code],
      ['design', 'Diseño de Producto', 'Experiencia y optimización', ICONS.pen],
      ['data', 'Data & Growth', 'Medición y crecimiento', ICONS.chart]
    ];

    const appCats = [
      ['E-commerce', 'Experiencias móviles para descubrir, comprar y gestionar productos.'],
      ['Telecomunicaciones', 'Aplicaciones para contratar, gestionar y autogestionar servicios.'],
      ['Servicios', 'Aplicaciones que conectan personas con servicios y operaciones en tiempo real.'],
      ['Seller Center', 'Productos móviles que conectan compradores, vendedores y servicios.']
    ];

    const WEB_IMGS = { '3': ['/images/web-ecom-01.png','/images/web-ecom-02.png','/images/web-ecom-03.png','/images/web-ecom-04.png','/images/web-ecom-05.png','/images/web-ecom-06.png'], '1': ['/images/web-telecom-new-01.png','/images/web-telecom-new-02.png','/images/web-telecom-new-03.png','/images/web-telecom-new-04.png','/images/web-telecom-new-05.png','/images/web-telecom-new-06.png'], '2': ['/images/web-serv-00.png','/images/web-serv-01.png','/images/web-serv-02.png','/images/web-serv-03.png','/images/web-serv-04.png','/images/web-serv-05.png'], '0': ['/images/web-market-01b.png','/images/web-market-02.png','/images/web-market-03.png','/images/web-market-04.png','/images/web-market-05.png','/images/web-market-06.png'] };
    const APP_IMGS = { '3': ['/images/app-seller-01.png','/images/app-seller-02.png','/images/app-seller-03.png','/images/app-seller-04.png','/images/app-seller-05.png','/images/app-seller-06.png'], '0': ['/images/app-ecom-01.png','/images/app-ecom-02.png','/images/app-ecom-03.png','/images/app-ecom-04.png','/images/app-ecom-05.png','/images/app-ecom-06.png'], '1': ['/images/app-telecom-n01.png','/images/app-telecom-n02.png','/images/app-telecom-n03.png','/images/app-telecom-n04.png','/images/app-telecom-n05.png','/images/app-telecom-n06.png'], '2': ['/images/app-serv-01.png','/images/app-serv-03.png','/images/app-serv-04.png','/images/app-serv-05.png','/images/app-serv-06.png','/images/app-serv-07.png'] };
    const imgAt = (map, ci, si) => (map[ci] && map[ci][si]) || '';

    const webCatDefs = [
      ['E-commerce', 'Productos que conectan compradores, vendedores y operaciones digitales.'],
      ['Telecomunicaciones', 'Productos digitales para contratar, gestionar y autogestionar servicios.'],
      ['Servicios', 'Plataformas que conectan usuarios, operaciones y servicios en un mismo producto.'],
      ['Market Delivery', 'Experiencias digitales para descubrir, comprar y gestionar productos.']
    ];

    const casoDefs = [
      {
        num: '01', sector: 'TELECOMUNICACIONES', img: '/images/caso-01b.png', icon: ICONS.antenna, page: 'caso-telecom',
        title: 'Simplifica experiencias\nde alta complejidad',
        desc: 'Diseñamos journeys digitales claros para productos con múltiples reglas, validaciones, integraciones y procesos de autogestión.',
        results: [['↓', 'fricción'], ['↑', 'autogestión'], ['↑', 'activación']]
      },
      {
        num: '02', sector: 'E-COMMERCE', img: '/images/caso-02b.png', icon: ICONS.cart, page: 'caso-ecom',
        title: 'Convierte comportamiento\nen crecimiento',
        desc: 'Analizamos dónde se pierden oportunidades dentro del funnel y diseñamos productos orientados a mejorar conversión, experiencia y rentabilidad.',
        results: [['↑', 'conversión'], ['↑', 'revenue'], ['·', 'Decisiones basadas en datos']]
      },
      {
        num: '03', sector: 'PRODUCTOS INTERNOS', img: '/images/caso-03b.png', icon: ICONS.stack, page: 'caso-ops',
        title: 'Convierte procesos\nen eficiencia',
        desc: 'Digitalizamos procesos, centralizamos información y construimos herramientas que permiten operar, medir y tomar mejores decisiones.',
        results: [['↓', 'tiempo operativo'], ['↓', 'costos'], ['↑', 'productividad']]
      }
    ];

    return {
      isInicio: st.page === 'inicio',
      isNosotros: st.page === 'nosotros',
      isCasos: st.page === 'casos',
      pasoConcepto: [
        'Antes de construir, entendemos qué está ocurriendo y qué necesita realmente mejorar.',
        'Convertimos información, necesidades y datos en oportunidades concretas de producto.',
        'Evaluamos alternativas y priorizamos lo que genera mayor valor para el negocio y los usuarios.',
        'Transformamos la decisión en un producto digital funcional, usable y escalable.',
        'Definimos cómo medir el producto, analizamos resultados y encontramos nuevas oportunidades de mejora.'
      ][st.paso || 0],
      enter0: () => this.setState({ paso: 0 }),
      enter1: () => this.setState({ paso: 1 }),
      enter2: () => this.setState({ paso: 2 }),
      enter3: () => this.setState({ paso: 3 }),
      enter4: () => this.setState({ paso: 4 }),
      isCasoTelecom: st.page === 'caso-telecom',
      isCasoEcom: st.page === 'caso-ecom',
      isCasoOps: st.page === 'caso-ops',
      isApps: st.page === 'apps',
      goApps: () => this.go('apps'),
      isWeb: st.page === 'web',
      goWeb: () => this.go('web'),
      menuOpen: !!st.menuOpen,
      toggleMenu: () => this.setState(s => ({ menuOpen: !s.menuOpen })),
      closeMenu: () => this.setState({ menuOpen: false }),
      mApps: () => { this.setState({ menuOpen: false }); this.go('apps'); },
      mWeb: () => { this.setState({ menuOpen: false }); this.go('web'); },
      mNosotros: () => { this.setState({ menuOpen: false }); this.go('nosotros'); },
      mCasos: () => { this.setState({ menuOpen: false }); this.go('casos'); },
      mContacto: () => { this.setState({ menuOpen: false }); this.go('contacto'); },
      nosColor: st.page === 'nosotros' ? 'rgb(25,193,157)' : 'rgb(226,232,240)',
      casosColor: st.page === 'casos' ? 'rgb(25,193,157)' : 'rgb(226,232,240)',
      contactoColor: st.page === 'contacto' ? 'rgb(25,193,157)' : 'rgb(226,232,240)',
      appsColor: st.page === 'apps' ? 'rgb(25,193,157)' : 'rgb(226,232,240)',
      webColor: st.page === 'web' ? 'rgb(25,193,157)' : 'rgb(226,232,240)',
      goCasoTelecom: () => this.go('caso-telecom'),

      discovery: [
        ['Entrevistas', 'M10 3.4a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM4.6 16.6c.5-2.8 2.8-4.2 5.4-4.2s4.9 1.4 5.4 4.2'],
        ['Analytics', 'M3.6 16.4h12.8M5.6 13.4V9.8M9.4 13.4V6.4M13.2 13.4v-5'],
        ['Benchmark', 'M3 3.4h14v13.2H3zM3 8h14M8 8v8.6M12.6 8v8.6'],
        ['Workshops', 'M10 2.8v3M10 14.2v3M3.4 10h3M13.6 10h3M5.4 5.4 7.5 7.5M12.5 12.5l2.1 2.1M14.6 5.4 12.5 7.5M5.4 14.6l2.1-2.1M10 8.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z'],
        ['Research', 'M9.2 3.4a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Zm0 3a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8ZM13.4 13.4 17 17']
      ].map(d => ({ label: d[0], icon: svgIcon(d[1], { w: 1.2 }) })),

      medicion: [
        ['GA4', 'M4 16.4V11M9.4 16.4V7M14.8 16.4V4'],
        ['Clarity', 'M4.4 16.4V9.4M9.4 16.4v-4.6M14.4 16.4V6.4M3 3.6h14'],
        ['Research', 'M9.2 3.4a5.4 5.4 0 1 0 0 10.8 5.4 5.4 0 0 0 0-10.8Zm0 3a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8ZM13.4 13.4 17 17'],
        ['Business Data', 'M3.4 3.4h13.2v13.2H3.4zM3.4 8h13.2M8 8v8.6']
      ].map(d => ({ label: d[0], icon: svgIcon(d[1], { w: 1.2 }) })),

      priorizacion: [
        { op: 'Simplificar journey', impacto: 'Alto', esfuerzo: 'Medio', esfuerzoColor: 'rgb(232,183,58)', decision: 'Priorizar', decisionColor: 'rgb(25,193,157)' },
        { op: 'Autogestión eSIM', impacto: 'Alto', esfuerzo: 'Alto', esfuerzoColor: 'rgb(203,213,225)', decision: 'Priorizar', decisionColor: 'rgb(25,193,157)' },
        { op: 'Nuevos servicios', impacto: 'Medio', esfuerzo: 'Medio', esfuerzoColor: 'rgb(203,213,225)', decision: 'Después', decisionColor: 'rgb(148,163,184)' }
      ],
      isContacto: st.page === 'contacto',
      goInicio: () => this.go('inicio'),
      goNosotros: () => this.go('nosotros'),
      goCasos: () => this.go('casos'),
      goContacto: () => this.go('contacto'),

      casos: casoDefs.map(c => ({
        num: c.num, sector: c.sector, title: c.title, desc: c.desc, img: c.img,
        icon: svgIcon(c.icon),
        results: c.results.map(r => ({ arrow: r[0], label: r[1] })),
        open: c.page ? () => this.go(c.page) : () => this.go('contacto')
      })),

      steps: stepDefs.map(d => ({ num: d[0], title: d[1], desc: d[2], label: d[3], img: d[4], size: d[6], pos: d[7], icon: svgIcon(d[5]) })),
      pillars: pillarDefs.map(d => ({ num: d[0], title: d[1], desc: d[2], icon: svgIcon(d[3]) })),

      servicios: servicioDefs.map(d => {
        const on = st.servicios.indexOf(d[0]) >= 0;
        return {
          id: d[0], title: d[1], desc: d[2], icon: svgIcon(d[3]),
          bg: on ? 'rgba(0,60,50,0.5)' : 'rgba(0,0,0,0.45)',
          ring: on ? 'inset 0 0 0 1.4px rgb(25,193,157), 0 0 18px rgba(0,223,162,0.18)' : 'inset 0 0 0 1px rgb(24,54,46)',
          toggle: () => this.toggleServicio(d[0])
        };
      }),

      cats: appCats.map((d, ci) => ({
        num: String(ci + 1).padStart(2, '0'),
        name: d[0],
        desc: d[1],
        countLabel: '06 pantallas',
        arrowOpacity: st.hoverRail === ci ? 1 : 0,
        hoverOn: () => this.setState({ hoverRail: ci }),
        hoverOff: () => this.setState({ hoverRail: -1 }),
        railRef: (el) => { this.rails[ci] = el; },
        prev: () => this.scrollRail(ci, -1),
        next: () => this.scrollRail(ci, 1),
        shots: Array.from({ length: 6 }, (_, si) => ({
          idLabel: String(ci + 1).padStart(2, '0') + '.' + String(si + 1).padStart(2, '0'),
          hasImg: !!imgAt(APP_IMGS, ci, si),
          noImg: !imgAt(APP_IMGS, ci, si),
          bg: 'url(' + imgAt(APP_IMGS, ci, si) + ')',
          open: () => this.setState({ lbCat: ci, lbIndex: si })
        }))
      })),
      webCats: webCatDefs.map((d, ci) => ({
        num: String(ci + 1).padStart(2, '0'),
        name: d[0],
        desc: d[1],
        countLabel: '06 pantallas',
        arrowOpacity: st.hoverWRail === ci ? 1 : 0,
        hoverOn: () => this.setState({ hoverWRail: ci }),
        hoverOff: () => this.setState({ hoverWRail: -1 }),
        railRef: (el) => { this.wrails[ci] = el; },
        prev: () => this.scrollWRail(ci, -1),
        next: () => this.scrollWRail(ci, 1),
        shots: Array.from({ length: 6 }, (_, si) => ({
          idLabel: String(ci + 1).padStart(2, '0') + '.' + String(si + 1).padStart(2, '0'),
          hasImg: !!imgAt(WEB_IMGS, ci, si),
          noImg: !imgAt(WEB_IMGS, ci, si),
          bg: 'url(' + imgAt(WEB_IMGS, ci, si) + ')',
          open: () => this.setState({ wlbCat: ci, wlbIndex: si })
        }))
      })),
      wlbOpen: st.wlbCat >= 0,
      wlbCatName: st.wlbCat >= 0 ? webCatDefs[st.wlbCat][0] : '',
      wlbCounter: String(st.wlbIndex + 1).padStart(2, '0') + ' / 06',
      wlbId: st.wlbCat >= 0 ? String(st.wlbCat + 1).padStart(2, '0') + '.' + String(st.wlbIndex + 1).padStart(2, '0') : '',
      wlbHasImg: !!imgAt(WEB_IMGS, st.wlbCat, st.wlbIndex),
      wlbNoImg: !imgAt(WEB_IMGS, st.wlbCat, st.wlbIndex),
      wlbBg: 'url(' + imgAt(WEB_IMGS, st.wlbCat, st.wlbIndex) + ')',
      wlbClose: () => this.setState({ wlbCat: -1 }),
      wlbStop: (e) => { e.stopPropagation(); },
      wlbPrev: (e) => { e.stopPropagation(); this.wlbStep(-1); },
      wlbNext: (e) => { e.stopPropagation(); this.wlbStep(1); },

      lbOpen: st.lbCat >= 0,
      lbCatName: st.lbCat >= 0 ? appCats[st.lbCat][0] : '',
      lbCounter: String(st.lbIndex + 1).padStart(2, '0') + ' / 06',
      lbId: st.lbCat >= 0 ? String(st.lbCat + 1).padStart(2, '0') + '.' + String(st.lbIndex + 1).padStart(2, '0') : '',
      lbHasImg: !!imgAt(APP_IMGS, st.lbCat, st.lbIndex),
      lbNoImg: !imgAt(APP_IMGS, st.lbCat, st.lbIndex),
      lbBg: 'url(' + imgAt(APP_IMGS, st.lbCat, st.lbIndex) + ')',
      lbClose: () => this.setState({ lbCat: -1 }),
      lbStop: (e) => { e.stopPropagation(); },
      lbPrev: (e) => { e.stopPropagation(); this.lbStep(-1); },
      lbNext: (e) => { e.stopPropagation(); this.lbStep(1); },

      nombre: st.nombre,
      correo: st.correo,
      mensaje: st.mensaje,
      onNombre: this.onField('nombre'),
      onCorreo: this.onField('correo'),
      onMensaje: this.onField('mensaje'),
      onWebsite: (e) => this.setState({ website: e.target.value }),
      website: st.website,
      onFormStart: this.onFormStart,
      status: st.status,
      sending: st.status === 'loading',
      errors: st.errors,
      errorMsg: st.errorMsg,
      submitLabel: st.status === 'loading' ? 'Enviando…' : st.status === 'success' ? '¡Gracias! Te escribimos pronto' : 'Enviar proyecto',
      enviar: this.enviar,
      whatsappUrl: whatsappUrl()
    };
  }
}
