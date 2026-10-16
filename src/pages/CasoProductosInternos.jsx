import React from 'react';
import { onActivate } from '../lib/a11y.js';

export default function CasoProductosInternos({ v }) {
  return (
    <>
    <main data-screen-label="Plataformas internas">
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-10%", top: "-8%", width: "66%", height: "52%", background: "radial-gradient(46% 44% at 60% 40%, rgba(0,214,155,0.18) 0%, rgba(0,96,74,0.08) 42%, rgba(0,0,0,0) 74%)", filter: "blur(52px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "32px clamp(24px, 4vw, 56px) 0" }}>
          <div className="apu-h15" onClick={v.goCasos} style={{ display: "inline-flex", alignItems: "center", gap: "10px", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goCasos">
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
              <path d="M11.7 7H2.3M5.8 3.5 2.3 7l3.5 3.5" stroke="rgb(148,163,184)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: "13px", fontWeight: "400", color: "rgb(148,163,184)" }}>
              {"Volver a soluciones de producto"}
            </span>
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px, 5vw, 72px) clamp(24px, 4vw, 56px) clamp(56px, 7vw, 96px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }}>
          <div style={{ flex: "1 1 460px", minWidth: "0" }}>
            <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: "3.4px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
              {"Plataformas internas"}
            </div>
            <h1 style={{ margin: "24px 0 0", fontSize: "clamp(32px, 4.2vw, 58px)", fontWeight: "700", lineHeight: "1.05", letterSpacing: "-2px", color: "#fff", textWrap: "pretty" }}>
              {"Convertimos operaciones en"}{" "}
              <span style={{ color: "rgb(25,193,157)" }}>
                {"productos digitales"}
              </span>
              {"."}
            </h1>
            <p style={{ margin: "26px 0 0", maxWidth: "600px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(203,213,225)" }}>
              {"Dirigimos, diseñamos y desarrollamos plataformas que centralizan procesos, automatizan tareas y permiten operar con mayor control y visibilidad."}
            </p>
            <div className="apu-h16" onClick={v.goContacto} style={{ marginTop: "34px", display: "inline-flex", alignItems: "center", gap: "12px", padding: "17px 30px", borderRadius: "9999px", background: "rgb(25,193,157)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#04120f", whiteSpace: "nowrap" }}>
                {"Cuéntanos qué necesitas digitalizar"}
              </span>
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="#04120f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0", maxWidth: "640px" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 11", borderRadius: "14px", background: "linear-gradient(160deg, rgba(10,18,17,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 60% at 50% 50%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 72%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", left: "14px", top: "14px", width: "16px", height: "16px", borderLeft: "1px solid rgba(0,223,162,0.45)", borderTop: "1px solid rgba(0,223,162,0.45)" }} />
              <div style={{ position: "absolute", right: "14px", bottom: "14px", width: "16px", height: "16px", borderRight: "1px solid rgba(0,223,162,0.45)", borderBottom: "1px solid rgba(0,223,162,0.45)" }} />
              <div style={{ position: "absolute", inset: "0", backgroundImage: "url(/images/caso-03b.png)", backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
            </div>
            <div style={{ marginTop: "18px", fontSize: "12px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(100,116,139)" }}>
              {"PRODUCTO · OPERACIONES · TECNOLOGÍA · DATA"}
            </div>
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(24px, 4vw, 56px)" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "13px", top: "8px", bottom: "0", width: "1px", background: "linear-gradient(180deg, rgba(0,223,162,0.6) 0%, rgba(0,223,162,0.32) 60%, rgba(255,255,255,0.05) 100%)" }} />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "clamp(52px, 7vw, 104px) minmax(0, 1fr)", gap: "clamp(8px, 2vw, 24px)", paddingBottom: "clamp(64px, 8vw, 112px)" }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "13px", top: "6px", transform: "translateX(-50%)", width: "11px", height: "11px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 5px rgba(0,223,162,0.1), 0 0 16px rgba(0,223,162,0.6)" }} />
                <div style={{ marginTop: "28px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "1px", color: "rgba(255,255,255,0.22)" }}>
                  {"01"}
                </div>
              </div>
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "3px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
                  {"Operación"}
                </div>
                <h2 style={{ margin: "16px 0 0", maxWidth: "780px", fontSize: "clamp(24px, 2.9vw, 40px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-1.3px", color: "#fff", textWrap: "pretty" }}>
                  {"Primero entendemos cómo trabaja tu negocio."}
                </h2>
                <p style={{ margin: "18px 0 0", maxWidth: "640px", fontSize: "15px", fontWeight: "300", lineHeight: "27px", color: "rgb(203,213,225)" }}>
                  {"Personas, procesos, herramientas, información y reglas forman parte de una misma operación."}
                </p>
                <div style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(20px, 3vw, 44px)" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", padding: "10px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "1.6px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                        {"PERSONAS"}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", padding: "10px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "1.6px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                        {"PROCESOS"}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", padding: "10px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "1.6px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                        {"DATOS"}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", padding: "10px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "1.6px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                        {"HERRAMIENTAS"}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", padding: "10px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "11.5px", fontWeight: "600", letterSpacing: "1.6px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                        {"REGLAS"}
                      </span>
                    </div>
                    <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center" }}>
                      <span style={{ width: "clamp(24px, 4vw, 64px)", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.15), rgba(0,223,162,0.6))" }} />
                      <span style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", color: "rgba(0,223,162,0.7)", padding: "0 8px" }}>
                        {"→"}
                      </span>
                    </div>
                    <div style={{ padding: "20px 26px", borderRadius: "14px", background: "rgba(0,60,50,0.22)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.4), 0 0 34px rgba(0,223,162,0.08)", textAlign: "center" }}>
                      <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "2px", color: "#fff", whiteSpace: "nowrap" }}>
                        {"OPERACIÓN"}
                      </div>
                      <div style={{ marginTop: "6px", fontSize: "11.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                        {"Una sola realidad"}
                      </div>
                    </div>
                    <div style={{ flex: "1 1 220px", minWidth: "0", paddingLeft: "clamp(18px, 3vw, 32px)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "2.2px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
                        {"Hoy suele vivir en"}
                      </div>
                      <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
                        <span style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Excel"}
                        </span>
                        <span style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Correos"}
                        </span>
                        <span style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"WhatsApp"}
                        </span>
                        <span style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Documentos"}
                        </span>
                        <span style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Sistemas existentes"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "26px", fontSize: "12px", fontWeight: "300", letterSpacing: "0.4px", color: "rgb(100,116,139)" }}>
                  {"Antes de digitalizar, entendemos cómo funciona realmente la operación."}
                </div>
              </div>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "clamp(52px, 7vw, 104px) minmax(0, 1fr)", gap: "clamp(8px, 2vw, 24px)", paddingBottom: "clamp(64px, 8vw, 112px)" }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "13px", top: "6px", transform: "translateX(-50%)", width: "11px", height: "11px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 5px rgba(0,223,162,0.1), 0 0 16px rgba(0,223,162,0.6)" }} />
                <div style={{ marginTop: "28px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "1px", color: "rgba(255,255,255,0.22)" }}>
                  {"02"}
                </div>
              </div>
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "3px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
                  {"Procesos"}
                </div>
                <h2 style={{ margin: "16px 0 0", maxWidth: "780px", fontSize: "clamp(24px, 2.9vw, 40px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-1.3px", color: "#fff", textWrap: "pretty" }}>
                  {"Convertimos la operación en un sistema entendible."}
                </h2>
                <p style={{ margin: "18px 0 0", maxWidth: "640px", fontSize: "15px", fontWeight: "300", lineHeight: "27px", color: "rgb(203,213,225)" }}>
                  {"Identificamos cómo fluye el trabajo, quién participa, qué información necesita y dónde existen dependencias."}
                </p>
                <div style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
                  <div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(96px, 1fr))", gap: "22px 0" }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgba(0,223,162,0.5)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"SOLICITUD"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"ASIGNACIÓN"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"GESTIÓN"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"VALIDACIÓN"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"CIERRE"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"SEGUIMIENTO"}
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Responsables"}
                      </span>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Estados"}
                      </span>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Reglas"}
                      </span>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Tiempos"}
                      </span>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Dependencias"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "clamp(52px, 7vw, 104px) minmax(0, 1fr)", gap: "clamp(8px, 2vw, 24px)", paddingBottom: "clamp(64px, 8vw, 112px)" }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "13px", top: "6px", transform: "translateX(-50%)", width: "11px", height: "11px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 5px rgba(0,223,162,0.1), 0 0 16px rgba(0,223,162,0.6)" }} />
                <div style={{ marginTop: "28px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "1px", color: "rgba(255,255,255,0.22)" }}>
                  {"03"}
                </div>
              </div>
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "3px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
                  {"Dirección de producto"}
                </div>
                <h2 style={{ margin: "16px 0 0", maxWidth: "780px", fontSize: "clamp(24px, 2.9vw, 40px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-1.3px", color: "#fff", textWrap: "pretty" }}>
                  {"Definimos qué plataforma necesita realmente la operación."}
                </h2>
                <p style={{ margin: "18px 0 0", maxWidth: "640px", fontSize: "15px", fontWeight: "300", lineHeight: "27px", color: "rgb(203,213,225)" }}>
                  {"Priorizamos qué debe resolver el producto y qué funcionalidades generan mayor valor operativo."}
                </p>
                <div style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px, 5vw, 72px)" }}>
                    <div style={{ flex: "0 1 280px", minWidth: "0", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgba(0,223,162,0.45)" }} />
                        <span style={{ fontSize: "12.5px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(203,213,225)" }}>
                          {"PROCESOS"}
                        </span>
                      </div>
                      <span style={{ alignSelf: "flex-start", marginLeft: "13px", width: "1px", height: "18px", background: "rgba(0,223,162,0.35)" }} />
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgba(0,223,162,0.45)" }} />
                        <span style={{ fontSize: "12.5px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(203,213,225)" }}>
                          {"NECESIDADES"}
                        </span>
                      </div>
                      <span style={{ alignSelf: "flex-start", marginLeft: "13px", width: "1px", height: "18px", background: "rgba(0,223,162,0.35)" }} />
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgba(0,223,162,0.45)" }} />
                        <span style={{ fontSize: "12.5px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(203,213,225)" }}>
                          {"OPORTUNIDADES"}
                        </span>
                      </div>
                      <span style={{ alignSelf: "flex-start", marginLeft: "13px", width: "1px", height: "18px", background: "rgba(0,223,162,0.35)" }} />
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgba(0,223,162,0.45)" }} />
                        <span style={{ fontSize: "12.5px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(203,213,225)" }}>
                          {"FUNCIONALIDADES"}
                        </span>
                      </div>
                      <span style={{ alignSelf: "flex-start", marginLeft: "13px", width: "1px", height: "18px", background: "rgba(0,223,162,0.35)" }} />
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                        <span style={{ fontSize: "13.5px", fontWeight: "700", letterSpacing: "1.8px", color: "#fff" }}>
                          {"ALCANCE"}
                        </span>
                      </div>
                    </div>
                    <div style={{ flex: "1 1 300px", minWidth: "0", maxWidth: "460px", paddingLeft: "clamp(20px, 3vw, 34px)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
                      <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "2.4px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
                        {"Módulos posibles"}
                      </div>
                      <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "12px", color: "#fff" }}>
                          {"Gestión"}
                        </span>
                        <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "12px", color: "#fff" }}>
                          {"Usuarios"}
                        </span>
                        <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "12px", color: "#fff" }}>
                          {"Casos"}
                        </span>
                        <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "12px", color: "#fff" }}>
                          {"Notificaciones"}
                        </span>
                        <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "12px", color: "#fff" }}>
                          {"Reportes"}
                        </span>
                        <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", fontSize: "12px", color: "#fff" }}>
                          {"Configuración"}
                        </span>
                      </div>
                      <div style={{ marginTop: "26px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px 16px" }}>
                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2px", color: "rgb(25,193,157)" }}>
                          {"IMPACTO"}
                        </span>
                        <span style={{ width: "3px", height: "3px", borderRadius: "9999px", background: "rgba(0,223,162,0.6)" }} />
                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2px", color: "rgb(25,193,157)" }}>
                          {"VIABILIDAD"}
                        </span>
                        <span style={{ width: "3px", height: "3px", borderRadius: "9999px", background: "rgba(0,223,162,0.6)" }} />
                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2px", color: "rgb(25,193,157)" }}>
                          {"ESFUERZO"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "clamp(52px, 7vw, 104px) minmax(0, 1fr)", gap: "clamp(8px, 2vw, 24px)", paddingBottom: "clamp(64px, 8vw, 112px)" }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "13px", top: "6px", transform: "translateX(-50%)", width: "11px", height: "11px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 5px rgba(0,223,162,0.1), 0 0 16px rgba(0,223,162,0.6)" }} />
                <div style={{ marginTop: "28px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "1px", color: "rgba(255,255,255,0.22)" }}>
                  {"04"}
                </div>
              </div>
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "3px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
                  {"Experiencia operativa"}
                </div>
                <h2 style={{ margin: "16px 0 0", maxWidth: "780px", fontSize: "clamp(24px, 2.9vw, 40px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-1.3px", color: "#fff", textWrap: "pretty" }}>
                  {"Diseñamos para trabajar, no solamente para verse bien."}
                </h2>
                <p style={{ margin: "18px 0 0", maxWidth: "640px", fontSize: "15px", fontWeight: "300", lineHeight: "27px", color: "rgb(203,213,225)" }}>
                  {"Diseñamos experiencias orientadas a velocidad, claridad y reducción de carga operativa."}
                </p>
                <div style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
                  <div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(96px, 1fr))", gap: "22px 0" }}>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgba(0,223,162,0.5)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"INGRESA"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"REVISA"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"GESTIONA"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"ACTUALIZA"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"RESUELVE"}
                        </div>
                      </div>
                      <div style={{ minWidth: "0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ flex: "none", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.45), rgba(0,223,162,0.2))" }} />
                        </div>
                        <div style={{ marginTop: "14px", paddingRight: "10px", fontSize: "11.5px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                          {"CONTROLA"}
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "26px", fontSize: "12.5px", fontWeight: "300", letterSpacing: "0.6px", color: "rgb(148,163,184)" }}>
                      {"Dashboard · Gestión de casos · Detalle · Estados · Filtros · Reportes"}
                    </div>
                    <div style={{ marginTop: "32px", maxWidth: "900px" }}>
                      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: "14px", background: "linear-gradient(160deg, rgba(10,18,17,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 60% at 50% 50%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 72%)", pointerEvents: "none" }} />
                        <div style={{ position: "absolute", left: "14px", top: "14px", width: "16px", height: "16px", borderLeft: "1px solid rgba(0,223,162,0.45)", borderTop: "1px solid rgba(0,223,162,0.45)" }} />
                        <div style={{ position: "absolute", right: "14px", bottom: "14px", width: "16px", height: "16px", borderRight: "1px solid rgba(0,223,162,0.45)", borderBottom: "1px solid rgba(0,223,162,0.45)" }} />
                        <div style={{ position: "relative", width: "100%", height: "100%", containerType: "inline-size", display: "flex", alignItems: "center", padding: "0 4%" }}>
                          <div style={{ position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(0,223,162,0.16) 1px, rgba(0,0,0,0) 1.2px)", backgroundSize: "20px 20px", WebkitMaskImage: "radial-gradient(70% 70% at 50% 50%, #000 20%, rgba(0,0,0,0) 100%)", maskImage: "radial-gradient(70% 70% at 50% 50%, #000 20%, rgba(0,0,0,0) 100%)", pointerEvents: "none" }} />
                          <div style={{ position: "relative", width: "100%", display: "grid", gridTemplateColumns: "repeat(5, minmax(0,1fr))" }}>
                            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                              <span style={{ position: "absolute", top: "5.5cqw", left: "calc(50% + 7cqw)", right: "calc(-50% + 7cqw)", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.7), rgba(0,223,162,0.18))" }} />
                              <span style={{ position: "absolute", top: "calc(5.5cqw - 3px)", right: "calc(-50% + 7cqw)", width: "6px", height: "6px", borderTop: "1px solid rgba(0,223,162,0.5)", borderRight: "1px solid rgba(0,223,162,0.5)", transform: "rotate(45deg)" }} />
                              <div style={{ width: "11cqw", height: "11cqw", borderRadius: "3cqw", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,40,33,0.55)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35), 0 0 4cqw rgba(0,223,162,0.08)" }}>
                                <div style={{ width: "46%", height: "46%" }}>
                                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                    <path d="M2.4 10S5.2 4.8 10 4.8 17.6 10 17.6 10 14.8 15.2 10 15.2 2.4 10 2.4 10ZM10 7.8a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Z" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                              <div style={{ marginTop: "2.6cqw", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "max(8px, 1.4cqw)", letterSpacing: "1px", color: "rgb(100,116,139)" }}>
                                {"01"}
                              </div>
                              <div style={{ marginTop: "0.8cqw", fontSize: "max(8px, 1.6cqw)", fontWeight: "700", letterSpacing: "0.12em", color: "#fff" }}>
                                {"REVISA"}
                              </div>
                            </div>
                            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                              <span style={{ position: "absolute", top: "5.5cqw", left: "calc(50% + 7cqw)", right: "calc(-50% + 7cqw)", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.7), rgba(0,223,162,0.18))" }} />
                              <span style={{ position: "absolute", top: "calc(5.5cqw - 3px)", right: "calc(-50% + 7cqw)", width: "6px", height: "6px", borderTop: "1px solid rgba(0,223,162,0.5)", borderRight: "1px solid rgba(0,223,162,0.5)", transform: "rotate(45deg)" }} />
                              <div style={{ width: "11cqw", height: "11cqw", borderRadius: "3cqw", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,40,33,0.55)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35), 0 0 4cqw rgba(0,223,162,0.08)" }}>
                                <div style={{ width: "46%", height: "46%" }}>
                                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 6h12M4 14h12M7.4 3.8v4.4M12.6 11.8v4.4" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                              <div style={{ marginTop: "2.6cqw", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "max(8px, 1.4cqw)", letterSpacing: "1px", color: "rgb(100,116,139)" }}>
                                {"02"}
                              </div>
                              <div style={{ marginTop: "0.8cqw", fontSize: "max(8px, 1.6cqw)", fontWeight: "700", letterSpacing: "0.12em", color: "#fff" }}>
                                {"GESTIONA"}
                              </div>
                            </div>
                            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                              <span style={{ position: "absolute", top: "5.5cqw", left: "calc(50% + 7cqw)", right: "calc(-50% + 7cqw)", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.7), rgba(0,223,162,0.18))" }} />
                              <span style={{ position: "absolute", top: "calc(5.5cqw - 3px)", right: "calc(-50% + 7cqw)", width: "6px", height: "6px", borderTop: "1px solid rgba(0,223,162,0.5)", borderRight: "1px solid rgba(0,223,162,0.5)", transform: "rotate(45deg)" }} />
                              <div style={{ width: "11cqw", height: "11cqw", borderRadius: "3cqw", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(160deg, rgb(0,236,172) 0%, rgb(0,160,126) 100%)", boxShadow: "0 0 5cqw rgba(0,223,162,0.35)" }}>
                                <div style={{ width: "46%", height: "46%" }}>
                                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 8.6A6 6 0 0 1 15.4 7M16 11.4A6 6 0 0 1 4.6 13M14.4 4.2v3h-3M5.6 15.8v-3h3" stroke="#04120f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                              <div style={{ marginTop: "2.6cqw", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "max(8px, 1.4cqw)", letterSpacing: "1px", color: "rgb(100,116,139)" }}>
                                {"03"}
                              </div>
                              <div style={{ marginTop: "0.8cqw", fontSize: "max(8px, 1.6cqw)", fontWeight: "700", letterSpacing: "0.12em", color: "#fff" }}>
                                {"ACTUALIZA"}
                              </div>
                            </div>
                            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                              <span style={{ position: "absolute", top: "5.5cqw", left: "calc(50% + 7cqw)", right: "calc(-50% + 7cqw)", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.7), rgba(0,223,162,0.18))" }} />
                              <span style={{ position: "absolute", top: "calc(5.5cqw - 3px)", right: "calc(-50% + 7cqw)", width: "6px", height: "6px", borderTop: "1px solid rgba(0,223,162,0.5)", borderRight: "1px solid rgba(0,223,162,0.5)", transform: "rotate(45deg)" }} />
                              <div style={{ width: "11cqw", height: "11cqw", borderRadius: "3cqw", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,40,33,0.55)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35), 0 0 4cqw rgba(0,223,162,0.08)" }}>
                                <div style={{ width: "46%", height: "46%" }}>
                                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM7 10.2l2 2 4-4.2" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                              <div style={{ marginTop: "2.6cqw", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "max(8px, 1.4cqw)", letterSpacing: "1px", color: "rgb(100,116,139)" }}>
                                {"04"}
                              </div>
                              <div style={{ marginTop: "0.8cqw", fontSize: "max(8px, 1.6cqw)", fontWeight: "700", letterSpacing: "0.12em", color: "#fff" }}>
                                {"RESUELVE"}
                              </div>
                            </div>
                            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                              <div style={{ width: "11cqw", height: "11cqw", borderRadius: "3cqw", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,40,33,0.55)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35), 0 0 4cqw rgba(0,223,162,0.08)" }}>
                                <div style={{ width: "46%", height: "46%" }}>
                                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                    <path d="M3.4 15.4a7.4 7.4 0 1 1 13.2 0M10 11.6l3.2-3.4" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                              <div style={{ marginTop: "2.6cqw", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "max(8px, 1.4cqw)", letterSpacing: "1px", color: "rgb(100,116,139)" }}>
                                {"05"}
                              </div>
                              <div style={{ marginTop: "0.8cqw", fontSize: "max(8px, 1.6cqw)", fontWeight: "700", letterSpacing: "0.12em", color: "#fff" }}>
                                {"CONTROLA"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "clamp(52px, 7vw, 104px) minmax(0, 1fr)", gap: "clamp(8px, 2vw, 24px)", paddingBottom: "clamp(64px, 8vw, 112px)" }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "13px", top: "6px", transform: "translateX(-50%)", width: "11px", height: "11px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 5px rgba(0,223,162,0.1), 0 0 16px rgba(0,223,162,0.6)" }} />
                <div style={{ marginTop: "28px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "1px", color: "rgba(255,255,255,0.22)" }}>
                  {"05"}
                </div>
              </div>
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "3px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
                  {"Desarrollo"}
                </div>
                <h2 style={{ margin: "16px 0 0", maxWidth: "780px", fontSize: "clamp(24px, 2.9vw, 40px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-1.3px", color: "#fff", textWrap: "pretty" }}>
                  {"Convertimos los procesos en software funcionando."}
                </h2>
                <p style={{ margin: "18px 0 0", maxWidth: "640px", fontSize: "15px", fontWeight: "300", lineHeight: "27px", color: "rgb(203,213,225)" }}>
                  {"Desarrollamos la plataforma y la lógica necesaria para soportar procesos, usuarios, estados y reglas reales de la operación."}
                </p>
                <div style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
                  <div style={{ maxWidth: "900px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2.6px", color: "#fff" }}>
                        {"EXPERIENCIA"}
                      </span>
                      <span style={{ flex: "1 1 0", height: "1px", background: "rgba(255,255,255,0.1)" }} />
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "14px", background: "linear-gradient(160deg, rgba(10,18,17,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 60% at 50% 50%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 72%)", pointerEvents: "none" }} />
                        <div style={{ position: "absolute", left: "14px", top: "14px", width: "16px", height: "16px", borderLeft: "1px solid rgba(0,223,162,0.45)", borderTop: "1px solid rgba(0,223,162,0.45)" }} />
                        <div style={{ position: "absolute", right: "14px", bottom: "14px", width: "16px", height: "16px", borderRight: "1px solid rgba(0,223,162,0.45)", borderBottom: "1px solid rgba(0,223,162,0.45)" }} />
                        <div style={{ position: "relative", width: "100%", height: "100%", containerType: "inline-size", padding: "5%" }}>
                          <div style={{ position: "absolute", inset: "0", backgroundImage: "radial-gradient(rgba(0,223,162,0.16) 1px, rgba(0,0,0,0) 1.2px)", backgroundSize: "20px 20px", WebkitMaskImage: "radial-gradient(70% 70% at 50% 50%, #000 20%, rgba(0,0,0,0) 100%)", maskImage: "radial-gradient(70% 70% at 50% 50%, #000 20%, rgba(0,0,0,0) 100%)", pointerEvents: "none" }} />
                          <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "1.8cqw", background: "rgba(5,10,9,0.92)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.22), 0 3cqw 6cqw rgba(0,0,0,0.5)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                            <div style={{ flex: "none", height: "5.4cqw", display: "flex", alignItems: "center", gap: "0.8cqw", padding: "0 2cqw", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                              <span style={{ width: "1cqw", height: "1cqw", borderRadius: "9999px", background: "rgba(255,255,255,0.16)" }} />
                              <span style={{ width: "1cqw", height: "1cqw", borderRadius: "9999px", background: "rgba(255,255,255,0.16)" }} />
                              <span style={{ width: "1cqw", height: "1cqw", borderRadius: "9999px", background: "rgba(255,255,255,0.16)" }} />
                              <span style={{ marginLeft: "1.6cqw", fontSize: "max(8px, 1.4cqw)", fontWeight: "600", color: "#fff" }}>
                                {"Operaciones"}
                              </span>
                              <div style={{ marginLeft: "auto", width: "26%", height: "2.8cqw", borderRadius: "9999px", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", padding: "0 1cqw" }}>
                                <div style={{ width: "1.8cqw", height: "1.8cqw" }}>
                                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                    <path d="M9 3a6 6 0 1 0 3.7 10.7l3.6 3.6 1.4-1.4-3.6-3.6A6 6 0 0 0 9 3Zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" stroke="rgb(100,116,139)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div style={{ flex: "1 1 0", minHeight: "0", display: "grid", gridTemplateColumns: "8cqw minmax(0,1fr)" }}>
                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.4cqw", paddingTop: "2cqw", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                                <div style={{ width: "4.2cqw", height: "4.2cqw", borderRadius: "1.2cqw", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,223,162,0.14)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.4)" }}>
                                  <div style={{ width: "58%", height: "58%" }}>
                                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                      <path d="M3.4 3.4h5.4v5.4H3.4ZM11.2 3.4h5.4v5.4h-5.4ZM3.4 11.2h5.4v5.4H3.4ZM11.2 11.2h5.4v5.4h-5.4Z" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                                <div style={{ width: "4.2cqw", height: "4.2cqw", borderRadius: "1.2cqw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <div style={{ width: "58%", height: "58%" }}>
                                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                      <path d="M7.6 3.6a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2.4 16.4c.5-2.8 2.6-4.3 5.2-4.3s4.7 1.5 5.2 4.3M13 4a2.8 2.8 0 0 1 0 5.4M14.6 12.4c1.6.5 2.7 1.8 3 4" stroke="rgb(100,116,139)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                                <div style={{ width: "4.2cqw", height: "4.2cqw", borderRadius: "1.2cqw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <div style={{ width: "58%", height: "58%" }}>
                                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                      <path d="M5.4 2.8h6.4l3 3v11.4H5.4ZM8 9.6h4.6M8 12.6h4.6" stroke="rgb(100,116,139)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                                <div style={{ width: "4.2cqw", height: "4.2cqw", borderRadius: "1.2cqw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <div style={{ width: "58%", height: "58%" }}>
                                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                      <path d="M3.6 16.4h12.8M5.6 13.4V9.8M9.4 13.4V6.4M13.2 13.4v-5" stroke="rgb(100,116,139)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                                <div style={{ width: "4.2cqw", height: "4.2cqw", borderRadius: "1.2cqw", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <div style={{ width: "58%", height: "58%" }}>
                                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                      <path d="M4 6h12M4 14h12M7.4 3.8v4.4M12.6 11.8v4.4" stroke="rgb(100,116,139)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div style={{ minWidth: "0", padding: "2.2cqw", display: "flex", flexDirection: "column", gap: "1.8cqw" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "1.4cqw" }}>
                                  <div style={{ padding: "1.8cqw", borderRadius: "1.4cqw", background: "rgba(0,40,33,0.3)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", display: "flex", flexDirection: "column", gap: "1cqw", minWidth: "0" }}>
                                    <div style={{ width: "3.6cqw", height: "3.6cqw", borderRadius: "1cqw", background: "rgba(0,223,162,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <div style={{ width: "60%", height: "60%" }}>
                                        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                          <path d="M10 3.2c3.2 0 5.8.9 5.8 2s-2.6 2-5.8 2-5.8-.9-5.8-2 2.6-2 5.8-2ZM4.2 5.2v4.4c0 1.1 2.6 2 5.8 2s5.8-.9 5.8-2V5.2M4.2 9.6V14c0 1.1 2.6 2 5.8 2s5.8-.9 5.8-2V9.6" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div style={{ fontSize: "max(7px, 1.25cqw)", color: "rgb(148,163,184)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                      {"Procesos"}
                                    </div>
                                    <div style={{ fontSize: "max(10px, 2.5cqw)", fontWeight: "700", letterSpacing: "-0.02em", color: "#fff", whiteSpace: "nowrap" }}>
                                      {"892"}
                                    </div>
                                  </div>
                                  <div style={{ padding: "1.8cqw", borderRadius: "1.4cqw", background: "rgba(0,40,33,0.3)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", display: "flex", flexDirection: "column", gap: "1cqw", minWidth: "0" }}>
                                    <div style={{ width: "3.6cqw", height: "3.6cqw", borderRadius: "1cqw", background: "rgba(0,223,162,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <div style={{ width: "60%", height: "60%" }}>
                                        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                          <path d="M3.4 15.4a7.4 7.4 0 1 1 13.2 0M10 11.6l3.2-3.4" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div style={{ fontSize: "max(7px, 1.25cqw)", color: "rgb(148,163,184)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                      {"Tiempo prom."}
                                    </div>
                                    <div style={{ fontSize: "max(10px, 2.5cqw)", fontWeight: "700", letterSpacing: "-0.02em", color: "#fff", whiteSpace: "nowrap" }}>
                                      {"4.2 min"}
                                    </div>
                                  </div>
                                  <div style={{ padding: "1.8cqw", borderRadius: "1.4cqw", background: "rgba(0,40,33,0.3)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", display: "flex", flexDirection: "column", gap: "1cqw", minWidth: "0" }}>
                                    <div style={{ width: "3.6cqw", height: "3.6cqw", borderRadius: "1cqw", background: "rgba(0,223,162,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <div style={{ width: "60%", height: "60%" }}>
                                        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                          <path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM7 10.2l2 2 4-4.2" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div style={{ fontSize: "max(7px, 1.25cqw)", color: "rgb(148,163,184)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                      {"Éxito"}
                                    </div>
                                    <div style={{ fontSize: "max(10px, 2.5cqw)", fontWeight: "700", letterSpacing: "-0.02em", color: "#fff", whiteSpace: "nowrap" }}>
                                      {"92%"}
                                    </div>
                                  </div>
                                </div>
                                <div style={{ flex: "1 1 0", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)", gap: "1.4cqw" }}>
                                  <div style={{ borderRadius: "1.4cqw", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)", padding: "1.8cqw", display: "flex", alignItems: "flex-end", gap: "0.8cqw" }}>
                                    <span style={{ flex: "1 1 0", height: "38%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "52%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "44%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "66%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "58%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "74%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "62%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "86%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "78%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "linear-gradient(180deg, rgba(0,223,162,0.7), rgba(0,223,162,0.15))" }} />
                                    <span style={{ flex: "1 1 0", height: "94%", borderRadius: "0.6cqw 0.6cqw 0 0", background: "rgb(0,223,162)" }} />
                                  </div>
                                  <div style={{ borderRadius: "1.4cqw", background: "rgba(255,255,255,0.025)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)", padding: "1.8cqw", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1.2cqw" }}>
                                      <div style={{ flex: "none", width: "3.2cqw", height: "3.2cqw", borderRadius: "9999px", background: "rgba(0,223,162,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ width: "58%", height: "58%" }}>
                                          <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.4 2.8h6.4l3 3v11.4H5.4ZM8 9.6h4.6M8 12.6h4.6" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: "0.6cqw", minWidth: "0" }}>
                                        <span style={{ height: "0.8cqw", width: "80%", borderRadius: "9999px", background: "rgba(255,255,255,0.22)" }} />
                                        <span style={{ height: "0.7cqw", width: "50%", borderRadius: "9999px", background: "rgba(255,255,255,0.09)" }} />
                                      </div>
                                      <span style={{ flex: "none", width: "1cqw", height: "1cqw", borderRadius: "9999px", background: "rgb(0,223,162)" }} />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1.2cqw" }}>
                                      <div style={{ flex: "none", width: "3.2cqw", height: "3.2cqw", borderRadius: "9999px", background: "rgba(0,223,162,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ width: "58%", height: "58%" }}>
                                          <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                            <path d="M7.6 3.6a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2.4 16.4c.5-2.8 2.6-4.3 5.2-4.3s4.7 1.5 5.2 4.3M13 4a2.8 2.8 0 0 1 0 5.4M14.6 12.4c1.6.5 2.7 1.8 3 4" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: "0.6cqw", minWidth: "0" }}>
                                        <span style={{ height: "0.8cqw", width: "80%", borderRadius: "9999px", background: "rgba(255,255,255,0.22)" }} />
                                        <span style={{ height: "0.7cqw", width: "50%", borderRadius: "9999px", background: "rgba(255,255,255,0.09)" }} />
                                      </div>
                                      <span style={{ flex: "none", width: "1cqw", height: "1cqw", borderRadius: "9999px", background: "rgba(255,255,255,0.2)" }} />
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1.2cqw" }}>
                                      <div style={{ flex: "none", width: "3.2cqw", height: "3.2cqw", borderRadius: "9999px", background: "rgba(0,223,162,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ width: "58%", height: "58%" }}>
                                          <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM7 10.2l2 2 4-4.2" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: "0.6cqw", minWidth: "0" }}>
                                        <span style={{ height: "0.8cqw", width: "80%", borderRadius: "9999px", background: "rgba(255,255,255,0.22)" }} />
                                        <span style={{ height: "0.7cqw", width: "50%", borderRadius: "9999px", background: "rgba(255,255,255,0.09)" }} />
                                      </div>
                                      <span style={{ flex: "none", width: "1cqw", height: "1cqw", borderRadius: "9999px", background: "rgb(0,223,162)" }} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0,1fr))", height: "54px" }}>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ width: "1px", height: "100%", background: "linear-gradient(180deg, rgba(0,223,162,0.5), rgba(0,223,162,0.12))" }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ width: "1px", height: "100%", background: "linear-gradient(180deg, rgba(0,223,162,0.5), rgba(0,223,162,0.12))" }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ width: "1px", height: "100%", background: "linear-gradient(180deg, rgba(0,223,162,0.5), rgba(0,223,162,0.12))" }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ width: "1px", height: "100%", background: "linear-gradient(180deg, rgba(0,223,162,0.5), rgba(0,223,162,0.12))" }} />
                      </div>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <span style={{ width: "1px", height: "100%", background: "linear-gradient(180deg, rgba(0,223,162,0.5), rgba(0,223,162,0.12))" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2.6px", color: "rgb(25,193,157)" }}>
                        {"TECNOLOGÍA"}
                      </span>
                      <span style={{ flex: "1 1 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.5), rgba(0,223,162,0.08))" }} />
                    </div>
                    <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px" }}>
                      <div style={{ padding: "16px 18px", borderRadius: "12px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.32)" }}>
                        <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "1.2px", color: "rgb(100,116,139)" }}>
                          {"01"}
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", fontWeight: "600", color: "#fff" }}>
                          {"Frontend"}
                        </div>
                      </div>
                      <div style={{ padding: "16px 18px", borderRadius: "12px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.32)" }}>
                        <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "1.2px", color: "rgb(100,116,139)" }}>
                          {"02"}
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", fontWeight: "600", color: "#fff" }}>
                          {"Backend"}
                        </div>
                      </div>
                      <div style={{ padding: "16px 18px", borderRadius: "12px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgb(22,42,37)" }}>
                        <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "1.2px", color: "rgb(100,116,139)" }}>
                          {"03"}
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", fontWeight: "600", color: "#fff" }}>
                          {"Base de datos"}
                        </div>
                      </div>
                      <div style={{ padding: "16px 18px", borderRadius: "12px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgb(22,42,37)" }}>
                        <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "1.2px", color: "rgb(100,116,139)" }}>
                          {"04"}
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", fontWeight: "600", color: "#fff" }}>
                          {"APIs"}
                        </div>
                      </div>
                      <div style={{ padding: "16px 18px", borderRadius: "12px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgb(22,42,37)" }}>
                        <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "1.2px", color: "rgb(100,116,139)" }}>
                          {"05"}
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", fontWeight: "600", color: "#fff" }}>
                          {"Autenticación"}
                        </div>
                      </div>
                      <div style={{ padding: "16px 18px", borderRadius: "12px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgb(22,42,37)" }}>
                        <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "1.2px", color: "rgb(100,116,139)" }}>
                          {"06"}
                        </div>
                        <div style={{ marginTop: "8px", fontSize: "13.5px", fontWeight: "600", color: "#fff" }}>
                          {"Infraestructura"}
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Roles"}
                      </span>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Permisos"}
                      </span>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Seguridad"}
                      </span>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"QA"}
                      </span>
                      <span style={{ padding: "8px 14px", borderRadius: "9999px", background: "rgba(255,255,255,0.02)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", fontSize: "11.5px", color: "rgb(203,213,225)" }}>
                        {"Escalabilidad"}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "26px", fontSize: "12px", fontWeight: "300", letterSpacing: "0.4px", color: "rgb(100,116,139)" }}>
                  {"Frontend · Backend · Integraciones · QA"}
                </div>
              </div>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "clamp(52px, 7vw, 104px) minmax(0, 1fr)", gap: "clamp(8px, 2vw, 24px)", paddingBottom: "clamp(64px, 8vw, 112px)" }}>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "13px", top: "6px", transform: "translateX(-50%)", width: "11px", height: "11px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 5px rgba(0,223,162,0.1), 0 0 16px rgba(0,223,162,0.6)" }} />
                <div style={{ marginTop: "28px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "clamp(16px, 2vw, 22px)", letterSpacing: "1px", color: "rgba(255,255,255,0.22)" }}>
                  {"06"}
                </div>
              </div>
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "3px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
                  {"Automatización"}
                </div>
                <h2 style={{ margin: "16px 0 0", maxWidth: "780px", fontSize: "clamp(24px, 2.9vw, 40px)", fontWeight: "700", lineHeight: "1.1", letterSpacing: "-1.3px", color: "#fff", textWrap: "pretty" }}>
                  {"Lo que no necesita ser manual, no debería seguir siéndolo."}
                </h2>
                <p style={{ margin: "18px 0 0", maxWidth: "640px", fontSize: "15px", fontWeight: "300", lineHeight: "27px", color: "rgb(203,213,225)" }}>
                  {"Automatizamos tareas, reglas y movimientos de información para reducir trabajo repetitivo y errores."}
                </p>
                <div style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "clamp(20px, 3vw, 36px)" }}>
                    <div style={{ flex: "1 1 250px", minWidth: "0", maxWidth: "340px", padding: "24px 26px", borderRadius: "14px", background: "rgba(255,255,255,0.015)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}>
                      <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2.4px", color: "rgb(100,116,139)" }}>
                        {"ANTES"}
                      </div>
                      <div style={{ marginTop: "18px", display: "flex", flexDirection: "column" }}>
                        <div style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Solicitud"}
                        </div>
                        <span style={{ alignSelf: "flex-start", marginLeft: "3px", width: "1px", height: "14px", background: "rgba(255,255,255,0.12)" }} />
                        <div style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Correo"}
                        </div>
                        <span style={{ alignSelf: "flex-start", marginLeft: "3px", width: "1px", height: "14px", background: "rgba(255,255,255,0.12)" }} />
                        <div style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Excel"}
                        </div>
                        <span style={{ alignSelf: "flex-start", marginLeft: "3px", width: "1px", height: "14px", background: "rgba(255,255,255,0.12)" }} />
                        <div style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Validación manual"}
                        </div>
                        <span style={{ alignSelf: "flex-start", marginLeft: "3px", width: "1px", height: "14px", background: "rgba(255,255,255,0.12)" }} />
                        <div style={{ fontSize: "12.5px", fontWeight: "300", color: "rgb(148,163,184)" }}>
                          {"Seguimiento"}
                        </div>
                      </div>
                    </div>
                    <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", padding: "0 4px" }}>
                      <span style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "9.5px", letterSpacing: "1.6px", color: "rgba(0,223,162,0.8)", whiteSpace: "nowrap" }}>
                        {"TRANSFORMACIÓN"}
                      </span>
                      <span style={{ width: "clamp(30px, 5vw, 70px)", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.2), rgba(0,223,162,0.7))" }} />
                    </div>
                    <div style={{ flex: "1 1 280px", minWidth: "0", maxWidth: "380px", padding: "24px 26px", borderRadius: "14px", background: "rgba(0,60,50,0.2)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35), 0 0 34px rgba(0,223,162,0.06)" }}>
                      <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2.4px", color: "rgb(25,193,157)" }}>
                        {"DESPUÉS"}
                      </div>
                      <div style={{ marginTop: "18px", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgba(0,223,162,0.45)" }} />
                          <span style={{ fontSize: "12.5px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(203,213,225)" }}>
                            {"SOLICITUD"}
                          </span>
                        </div>
                        <span style={{ alignSelf: "flex-start", marginLeft: "13px", width: "1px", height: "18px", background: "rgba(0,223,162,0.35)" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgba(0,223,162,0.45)" }} />
                          <span style={{ fontSize: "12.5px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(203,213,225)" }}>
                            {"ASIGNACIÓN AUTOMÁTICA"}
                          </span>
                        </div>
                        <span style={{ alignSelf: "flex-start", marginLeft: "13px", width: "1px", height: "18px", background: "rgba(0,223,162,0.35)" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgba(0,223,162,0.45)" }} />
                          <span style={{ fontSize: "12.5px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(203,213,225)" }}>
                            {"ESTADO ACTUALIZADO"}
                          </span>
                        </div>
                        <span style={{ alignSelf: "flex-start", marginLeft: "13px", width: "1px", height: "18px", background: "rgba(0,223,162,0.35)" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgba(0,223,162,0.45)" }} />
                          <span style={{ fontSize: "12.5px", fontWeight: "500", letterSpacing: "1.8px", color: "rgb(203,213,225)" }}>
                            {"NOTIFICACIÓN"}
                          </span>
                        </div>
                        <span style={{ alignSelf: "flex-start", marginLeft: "13px", width: "1px", height: "18px", background: "rgba(0,223,162,0.35)" }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ flex: "none", width: "7px", height: "7px", marginLeft: "10px", borderRadius: "9999px", background: "rgb(25,193,157)" }} />
                          <span style={{ fontSize: "13.5px", fontWeight: "700", letterSpacing: "1.8px", color: "#fff" }}>
                            {"SEGUIMIENTO CENTRALIZADO"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "26px", fontSize: "12px", fontWeight: "300", letterSpacing: "0.4px", color: "rgb(100,116,139)" }}>
                  {"Workflows · Reglas · Alertas · Integraciones"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: "1400px", margin: "0 auto", padding: "clamp(40px, 6vw, 90px) clamp(24px, 4vw, 56px) clamp(80px, 9vw, 130px)" }}>
          <div style={{ position: "absolute", left: "50%", top: "40%", transform: "translateX(-50%)", width: "min(820px, 92%)", height: "62%", background: "radial-gradient(50% 50% at 50% 50%, rgba(0,214,155,0.16) 0%, rgba(0,0,0,0) 70%)", filter: "blur(52px)", pointerEvents: "none" }} />
          <div style={{ position: "relative", maxWidth: "800px" }}>
            <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: "3.2px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
              {"De un proceso a un producto"}
            </div>
            <h2 style={{ margin: "22px 0 0", fontSize: "clamp(30px, 4vw, 54px)", fontWeight: "700", lineHeight: "1.06", letterSpacing: "-1.8px", color: "#fff", textWrap: "pretty" }}>
              {"¿Qué proceso necesitas digitalizar hoy?"}
            </h2>
            <p style={{ margin: "24px 0 0", maxWidth: "640px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(203,213,225)" }}>
              {"Puedes llegar con un proceso manual, una operación existente o una idea de plataforma. Nosotros te ayudamos a definirla, diseñarla, desarrollarla y medirla."}
            </p>
            <div className="apu-h17" onClick={v.goContacto} style={{ marginTop: "36px", display: "inline-flex", alignItems: "center", gap: "14px", padding: "19px 34px", borderRadius: "9999px", background: "rgb(25,193,157)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
              <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.2px", color: "#04120f", whiteSpace: "nowrap" }}>
                {"Cuéntanos tu operación"}
              </span>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="#04120f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ marginTop: "20px", fontSize: "12.5px", fontWeight: "300", color: "rgb(100,116,139)" }}>
              {"Procesos internos · automatización · gestión · dashboards · integraciones"}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
