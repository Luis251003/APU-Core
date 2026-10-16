import React from 'react';
import { onActivate } from '../lib/a11y.js';

export default function MobileMenu({ v }) {
  return (
    <>
    <div id="apu-mobile-menu">
      <div onClick={v.closeMenu} style={{ position: "fixed", inset: "0", zIndex: "80", background: "rgba(0,0,0,0.62)", animation: "apuFade 200ms ease both" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Cerrar menú" data-cta="closeMenu" />
      <div style={{ position: "fixed", top: "0", right: "0", bottom: "0", zIndex: "81", width: "min(312px, 84vw)", background: "#05100e", boxShadow: "-24px 0 60px rgba(0,0,0,0.65), inset 1px 0 0 rgba(0,223,162,0.16)", padding: "18px clamp(18px, 5vw, 26px) 26px", display: "flex", flexDirection: "column", animation: "apuSlideIn 280ms cubic-bezier(.22,.7,.2,1) both" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <span style={{ fontSize: "10.5px", fontWeight: "600", letterSpacing: "2.8px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
            {"Menú"}
          </span>
          <div className="apu-h2" onClick={v.closeMenu} style={{ width: "34px", height: "34px", borderRadius: "9999px", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Cerrar menú" data-cta="closeMenu">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 3l8 8M11 3l-8 8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div onClick={v.mApps} style={{ padding: "15px 2px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "15px", fontWeight: "500", color: v.appsColor, cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="mApps">
          {"Apps Mobile"}
        </div>
        <div onClick={v.mWeb} style={{ padding: "15px 2px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "15px", fontWeight: "500", color: v.webColor, cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="mWeb">
          {"Plataformas Web"}
        </div>
        <div onClick={v.mNosotros} style={{ padding: "15px 2px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "15px", fontWeight: "500", color: v.nosColor, cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="mNosotros">
          {"Nosotros"}
        </div>
        <div onClick={v.mCasos} style={{ padding: "15px 2px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "15px", fontWeight: "500", color: v.casosColor, cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="mCasos">
          {"Qué mejorar"}
        </div>
        <div onClick={v.mContacto} style={{ padding: "15px 2px", fontSize: "15px", fontWeight: "500", color: v.contactoColor, cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="mContacto">
          {"Contacto"}
        </div>
        <div onClick={v.mContacto} style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "15px 22px", borderRadius: "9999px", background: "rgb(25,193,157)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="mContacto">
          <span style={{ fontSize: "14px", fontWeight: "600", color: "#04120f" }}>
            {"Cuéntanos tu proyecto"}
          </span>
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
            <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="#04120f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}
