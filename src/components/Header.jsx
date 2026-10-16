import React from 'react';
import { onActivate } from '../lib/a11y.js';

export default function Header({ v }) {
  return (
    <>
    <header style={{ position: "sticky", top: "0", zIndex: "60", background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1720px", margin: "0 auto", padding: "14px clamp(16px, 3.4vw, 64px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px clamp(16px, 2vw, 32px)" }}>
        <div onClick={v.goInicio} style={{ display: "flex", alignItems: "center", gap: "14px", cursor: "pointer", flexShrink: "0" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goInicio">
          <img src="/images/logo-tree.png" alt="APU Core" style={{ width: "clamp(118px, 13vw, 152px)", height: "42px", objectFit: "contain", objectPosition: "left" }} fetchpriority="high" decoding="async" />
        </div>
        <nav id="apu-nav" style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 1.6vw, 32px)", flex: "0 1 auto", flexWrap: "nowrap", justifyContent: "flex-start", minWidth: "0", overflowX: "auto", scrollbarWidth: "none" }}>
          <div onClick={v.goApps} style={{ position: "relative", padding: "4px 0", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goApps">
            <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px", whiteSpace: "nowrap", color: "rgb(203,213,225)" }}>
              {"Apps Mobile"}
            </span>
            {v.isApps ? (
              <>
                <div style={{ position: "absolute", left: "50%", bottom: "-2px", transform: "translateX(-50%)", width: "28px", height: "2px", borderRadius: "9999px", background: "rgb(0,134,116)", boxShadow: "0 0 8px 0 rgb(0,223,154)" }} />
              </>
            ) : null}
          </div>
          <div onClick={v.goWeb} style={{ position: "relative", padding: "4px 0", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goWeb">
            <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px", whiteSpace: "nowrap", color: "rgb(203,213,225)" }}>
              {"Plataformas Web"}
            </span>
            {v.isWeb ? (
              <>
                <div style={{ position: "absolute", left: "50%", bottom: "-2px", transform: "translateX(-50%)", width: "28px", height: "2px", borderRadius: "9999px", background: "rgb(0,134,116)", boxShadow: "0 0 8px 0 rgb(0,223,154)" }} />
              </>
            ) : null}
          </div>
          <div onClick={v.goNosotros} style={{ position: "relative", padding: "4px 0", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goNosotros">
            <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px", color: "rgb(203,213,225)" }}>
              {"Nosotros"}
            </span>
            {v.isNosotros ? (
              <>
                <div style={{ position: "absolute", left: "50%", bottom: "-2px", transform: "translateX(-50%)", width: "28px", height: "2px", borderRadius: "9999px", background: "rgb(0,134,116)", boxShadow: "0 0 8px 0 rgb(0,223,154)" }} />
              </>
            ) : null}
          </div>
          <div onClick={v.goCasos} style={{ position: "relative", padding: "4px 0", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goCasos">
            <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px", whiteSpace: "nowrap", color: "rgb(203,213,225)" }}>
              {"Qué mejorar"}
            </span>
            {v.isCasos ? (
              <>
                <div style={{ position: "absolute", left: "50%", bottom: "-2px", transform: "translateX(-50%)", width: "28px", height: "2px", borderRadius: "9999px", background: "rgb(0,134,116)", boxShadow: "0 0 8px 0 rgb(0,223,154)" }} />
              </>
            ) : null}
          </div>
          <div onClick={v.goContacto} style={{ position: "relative", padding: "4px 0", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
            <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px", color: "rgb(203,213,225)" }}>
              {"Contacto"}
            </span>
            {v.isContacto ? (
              <>
                <div style={{ position: "absolute", left: "50%", bottom: "-2px", transform: "translateX(-50%)", width: "28px", height: "2px", borderRadius: "9999px", background: "rgb(0,134,116)", boxShadow: "0 0 8px 0 rgb(0,223,154)" }} />
              </>
            ) : null}
          </div>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 24px)", flexShrink: "0" }}>
          <div id="apu-lang" style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.4" stroke="rgb(148,163,184)" strokeWidth="1.1" />
              <path d="M1.7 8h12.6M8 1.6c1.7 1.7 2.6 4 2.6 6.4S9.7 12.7 8 14.4C6.3 12.7 5.4 10.4 5.4 8S6.3 3.3 8 1.6Z" stroke="rgb(148,163,184)" strokeWidth="1.1" />
            </svg>
            <span style={{ fontSize: "12px", fontWeight: "500", lineHeight: "16px", color: "rgb(203,213,225)" }}>
              {"ES"}
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 4.5 6 7.8l3.5-3.3" stroke="rgb(148,163,184)" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
          </div>
          <div className="apu-h1" onClick={v.goContacto} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 10px 10px 20px", borderRadius: "9999px", background: "rgb(13,18,17)", boxShadow: "inset 0 0 0 1px rgba(0,240,168,0.4)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
            <span style={{ fontSize: "12px", fontWeight: "600", lineHeight: "16px", color: "#fff", whiteSpace: "nowrap" }}>
              {"Hablemos"}
            </span>
            <span style={{ width: "24px", height: "24px", borderRadius: "9999px", background: "rgb(0,145,125)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="rgb(8,10,10)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          <div id="apu-burger" onClick={v.toggleMenu} style={{ display: "none", width: "40px", height: "40px", borderRadius: "10px", alignItems: "center", justifyContent: "center", background: "rgb(13,18,17)", boxShadow: "inset 0 0 0 1px rgba(0,240,168,0.32)", cursor: "pointer", flexShrink: "0" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Abrir menú" data-cta="toggleMenu">
            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ display: "block", width: "17px", height: "1.6px", borderRadius: "2px", background: "#fff" }} />
              <span style={{ display: "block", width: "17px", height: "1.6px", borderRadius: "2px", background: "#fff" }} />
              <span style={{ display: "block", width: "11px", height: "1.6px", borderRadius: "2px", background: "rgb(25,193,157)" }} />
            </span>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
