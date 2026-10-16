import React from 'react';
import Header from './components/Header.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Inicio from './pages/Inicio.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Soluciones from './pages/Soluciones.jsx';
import CasoTelecom from './pages/CasoTelecom.jsx';
import CasoEcommerce from './pages/CasoEcommerce.jsx';
import CasoProductosInternos from './pages/CasoProductosInternos.jsx';
import AppsMobile from './pages/AppsMobile.jsx';
import PlataformasWeb from './pages/PlataformasWeb.jsx';
import Contacto from './pages/Contacto.jsx';
import Footer from './components/Footer.jsx';

export default function Layout({ v }) {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", overflowX: "clip" }}>
      <Header v={v} />
      {v.menuOpen ? <MobileMenu v={v} /> : null}
      {v.isInicio ? <Inicio v={v} /> : null}
      {v.isNosotros ? <Nosotros v={v} /> : null}
      {v.isCasos ? <Soluciones v={v} /> : null}
      {v.isCasoTelecom ? <CasoTelecom v={v} /> : null}
      {v.isCasoEcom ? <CasoEcommerce v={v} /> : null}
      {v.isCasoOps ? <CasoProductosInternos v={v} /> : null}
      {v.isApps ? <AppsMobile v={v} /> : null}
      {v.isWeb ? <PlataformasWeb v={v} /> : null}
      {v.isContacto ? <Contacto v={v} /> : null}
      <Footer v={v} />
    </div>
  );
}
