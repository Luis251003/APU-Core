import React from 'react';
import { onActivate } from '../lib/a11y.js';

export default function Footer({ v }) {
  return (
    <>
    <footer style={{ position: "relative", overflow: "hidden", borderTop: "1px solid rgba(2,44,34,0.4)", background: "radial-gradient(980px 321px at 90% 20%, rgba(0,242,176,0.08) 0%, rgba(0,70,50,0.04) 45%, rgba(0,70,50,0) 75%), radial-gradient(1158px 208px at 10% 90%, rgba(0,242,176,0.04) 0%, rgba(0,242,176,0) 60%), #000" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "64px clamp(24px, 3.4vw, 48px) 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "32px 0", paddingBottom: "36px" }}>
          <div style={{ paddingRight: "40px", display: "flex", flexDirection: "column", gap: "11.4px" }}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <span style={{ fontSize: "24px", fontWeight: "700", lineHeight: "32px", letterSpacing: "-0.6px", color: "#fff" }}>
                {"APU"}
              </span>
              <span style={{ marginLeft: "8px", fontSize: "24px", fontWeight: "700", lineHeight: "32px", letterSpacing: "-0.6px", color: "rgb(0,141,120)" }}>
                {"CORE"}
              </span>
            </div>
            <div style={{ maxWidth: "230px", fontSize: "14px", fontWeight: "400", lineHeight: "22.75px", color: "rgb(156,163,175)" }}>
              {"Productos digitales que generan impacto."}
            </div>
            <div style={{ width: "32px", height: "2px", borderRadius: "9999px", background: "rgb(0,139,121)" }} />
            <div style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.2px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
              {"Producto · Data · Growth"}
            </div>
          </div>
          <div style={{ padding: "0 32px", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px", letterSpacing: "-0.4px", color: "#fff" }}>
              {"Explora"}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span className="apu-h34" onClick={v.goNosotros} style={{ fontSize: "13px", color: "rgb(156,163,175)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goNosotros">
                {"Nosotros"}
              </span>
              <span className="apu-h35" onClick={v.goCasos} style={{ fontSize: "13px", color: "rgb(156,163,175)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goCasos">
                {"Qué mejorar"}
              </span>
              <span className="apu-h36" onClick={v.goApps} style={{ fontSize: "13px", color: "rgb(156,163,175)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goApps">
                {"Apps Mobile"}
              </span>
              <span className="apu-h37" onClick={v.goWeb} style={{ fontSize: "13px", color: "rgb(156,163,175)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goWeb">
                {"Plataformas Web"}
              </span>
              <span className="apu-h38" onClick={v.goContacto} style={{ fontSize: "13px", color: "rgb(156,163,175)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
                {"Contacto"}
              </span>
            </div>
          </div>
          <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px", letterSpacing: "-0.4px", color: "#fff" }}>
              {"Servicios"}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "13px", color: "rgb(156,163,175)" }}>
                {"Diseño de Producto"}
              </span>
              <span style={{ fontSize: "13px", color: "rgb(156,163,175)" }}>
                {"Análisis de Datos"}
              </span>
              <span style={{ fontSize: "13px", color: "rgb(156,163,175)" }}>
                {"Growth & Estrategia"}
              </span>
              <span style={{ fontSize: "13px", color: "rgb(156,163,175)" }}>
                {"Desarrollo Digital"}
              </span>
            </div>
          </div>
          <div style={{ padding: "0 32px", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontSize: "16px", fontWeight: "500", lineHeight: "24px", letterSpacing: "-0.4px", color: "#fff" }}>
              {"Conecta"}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a className="apu-h39" href={v.whatsappUrl} aria-label="Escríbenos por WhatsApp" target="_blank" rel="noopener" style={{ display: "flex", color: "rgb(209,213,219)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <path d="M9.1 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.4.7 1 1.4 1.7 1.9.5.4 1 .6 1.3.8.2.1.4 0 .5-.1l.6-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.4 0 .3 0 1-.5 1.5-.4.4-1.1.8-1.8.8-.8 0-2.3-.4-3.9-1.8-1.9-1.7-2.6-3.4-2.8-4.1-.2-.9.2-1.7.5-2.1Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <div style={{ padding: "0 32px", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div style={{ width: "24px", height: "2.5px", borderRadius: "9999px", background: "rgb(0,139,121)", marginBottom: "12px" }} />
            <div style={{ marginBottom: "4px", fontSize: "16px", fontWeight: "600", lineHeight: "24px", letterSpacing: "-0.4px", color: "#fff" }}>
              {"Hablemos"}
            </div>
            <div style={{ maxWidth: "190px", marginBottom: "16px", fontSize: "12px", fontWeight: "400", lineHeight: "19.5px", color: "rgb(156,163,175)" }}>
              {"¿Tienes una idea o producto? Conversemos."}
            </div>
            <div className="apu-h40" onClick={v.goContacto} style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "10px 20px", borderRadius: "9999px", background: "rgba(5,14,12,0.9)", boxShadow: "inset 0 0 0 1px rgb(0,139,121), 0 0 15px rgba(0,223,162,0.12)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
              <span style={{ fontSize: "12px", fontWeight: "500", lineHeight: "16px", letterSpacing: "0.3px", color: "#fff", whiteSpace: "nowrap" }}>
                {"Conversemos"}
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="m4 10 6-6M5.4 4H10v4.6" stroke="rgb(0,139,121)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "12px", lineHeight: "16px", color: "rgb(107,114,128)" }}>
            {"© 2026 APU CORE. Todos los derechos reservados."}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", lineHeight: "16px", color: "rgb(107,114,128)" }}>
            <span className="apu-h41" style={{ cursor: "pointer" }}>
              {"Privacidad"}
            </span>
            <span>
              {"·"}
            </span>
            <span className="apu-h42" style={{ cursor: "pointer" }}>
              {"Términos y condiciones"}
            </span>
            <span>
              {"|"}
            </span>
            <span>
              {"Lima, Perú"}
            </span>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
