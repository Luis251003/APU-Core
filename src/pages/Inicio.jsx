import React from 'react';
import { onActivate } from '../lib/a11y.js';

export default function Inicio({ v }) {
  return (
    <>
    <main>
      <section data-screen-label="Inicio — Hero" style={{ position: "relative", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "0", background: "radial-gradient(900px 420px at 78% 28%, rgba(0,242,176,0.07), rgba(0,0,0,0) 70%)", pointerEvents: "none" }} />
        <div className="hero-wrap" style={{ position: "relative", maxWidth: "1720px", margin: "0 auto", padding: "clamp(24px, 3.6vw, 72px) clamp(28px, 6vw, 112px) 40px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
          <div className="hero-col" style={{ flex: "1 1 400px", minWidth: "0" }}>
            <div className="hero-eyebrow" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "34px" }}>
              <div style={{ width: "28px", height: "1px", background: "rgb(0,144,124)" }} />
              <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.86px", lineHeight: "16.5px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                {"Producto · Data · Growth"}
              </span>
            </div>
            <h1 className="hero-title" style={{ margin: "0", fontSize: "clamp(28px, 4vw, 62px)", fontWeight: "800", lineHeight: "1.06", letterSpacing: "-2px", color: "#fff", whiteSpace: "nowrap" }}>
              {"De una idea a un"}
              <br />
              {"producto que genera"}
              <br />
              {"impacto"}
              <span style={{ color: "rgb(25,193,157)" }}>
                {"."}
              </span>
            </h1>
            <p className="hero-lead" style={{ margin: "26px 0 0", maxWidth: "470px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(148,163,184)" }}>
              {"Te ayudamos a descubrir, diseñar, desarrollar y escalar soluciones digitales basadas en datos, para que tu negocio crezca de verdad."}
            </p>
            <div className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "34px" }}>
              <div className="apu-h3" onClick={v.goContacto} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 24px", borderRadius: "9999px", background: "rgb(0,145,125)", cursor: "pointer", boxShadow: "0 0 24px rgba(0,223,162,0.22)" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#04120f" }}>
                  {"Hablemos de tu proyecto"}
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="#04120f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="apu-h4" onClick={v.goCasos} style={{ display: "flex", alignItems: "center", padding: "14px 24px", borderRadius: "9999px", background: "rgb(17,21,20)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.09)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goCasos">
                <span style={{ fontSize: "13px", fontWeight: "500", color: "rgb(226,232,240)" }}>
                  {"Qué quieres mejorar"}
                </span>
              </div>
            </div>
            <div className="hero-stats" style={{ display: "flex", marginTop: "52px", maxWidth: "460px", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ flex: "1", padding: "18px 20px 18px 0", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.8px", color: "#fff" }}>
                  {"+20"}
                </div>
                <div style={{ fontSize: "11px", fontWeight: "400", color: "rgb(148,163,184)", marginTop: "2px" }}>
                  {"Proyectos entregados"}
                </div>
              </div>
              <div style={{ flex: "1", padding: "18px 20px", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.8px", color: "#fff" }}>
                  {"+15"}
                </div>
                <div style={{ fontSize: "11px", fontWeight: "400", color: "rgb(148,163,184)", marginTop: "2px" }}>
                  {"Clientes satisfechos"}
                </div>
              </div>
              <div style={{ flex: "1", padding: "18px 0 18px 20px" }}>
                <div style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.8px", color: "#fff" }}>
                  {"3×"}
                </div>
                <div style={{ fontSize: "11px", fontWeight: "400", color: "rgb(148,163,184)", marginTop: "2px" }}>
                  {"Mayor eficiencia"}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-img" style={{ position: "relative", flex: "1 1 520px", minWidth: "0", display: "flex", alignItems: "center", justifyContent: "center", alignSelf: "flex-start", marginTop: "calc(-1 * clamp(0px, 1.6vw, 28px))" }}>
            <div style={{ position: "absolute", inset: "-4% -14% -10% -14%", background: "radial-gradient(56% 50% at 54% 50%, rgba(0,235,172,0.30) 0%, rgba(0,170,130,0.17) 34%, rgba(0,96,74,0.08) 58%, rgba(0,0,0,0) 80%)", filter: "blur(44px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", left: "50%", top: "54%", width: "62%", height: "44%", transform: "translate(-50%, -50%)", borderRadius: "9999px", background: "radial-gradient(closest-side, rgba(0,255,190,0.22), rgba(0,255,190,0) 78%)", filter: "blur(56px)", pointerEvents: "none" }} />
            <div style={{ position: "relative", width: "100%", maxWidth: "720px", aspectRatio: "1536 / 1024", borderRadius: "14px", background: "linear-gradient(160deg, rgba(10,18,17,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 60% at 50% 50%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 72%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", left: "14px", top: "14px", width: "16px", height: "16px", borderLeft: "1px solid rgba(0,223,162,0.45)", borderTop: "1px solid rgba(0,223,162,0.45)" }} />
              <div style={{ position: "absolute", right: "14px", bottom: "14px", width: "16px", height: "16px", borderRight: "1px solid rgba(0,223,162,0.45)", borderBottom: "1px solid rgba(0,223,162,0.45)" }} />
              <img src="/images/hero-visual.png" alt="Producto digital APU Core" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%" }} fetchpriority="high" decoding="async" />
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "1720px", margin: "0 auto", padding: "0 clamp(24px, 4vw, 64px) 40px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between", padding: "22px 28px", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.4px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
                {"Tecnologías que hacen todo posible"}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", opacity: ".9" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="1.9" fill="rgb(148,163,184)" />
                  <ellipse cx="10" cy="10" rx="8.6" ry="3.4" stroke="rgb(148,163,184)" strokeWidth="1" />
                  <ellipse cx="10" cy="10" rx="8.6" ry="3.4" stroke="rgb(148,163,184)" strokeWidth="1" transform="rotate(60 10 10)" />
                  <ellipse cx="10" cy="10" rx="8.6" ry="3.4" stroke="rgb(148,163,184)" strokeWidth="1" transform="rotate(120 10 10)" />
                </svg>
                <span style={{ display: "inline-flex", alignItems: "center", padding: "2px 4px", borderRadius: "2px", boxShadow: "inset 0 0 0 1px rgb(148,163,184)", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", fontWeight: "700", lineHeight: "12px", color: "rgb(148,163,184)" }}>
                  {"JS"}
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.6 2.4c-2.6 0-3.4 1-3.4 2.6v1.8h4.6v1H4.9c-1.6 0-2.5 1-2.5 3.3s.9 3.3 2.5 3.3h1.3v-2.1c0-1.7 1-2.7 2.7-2.7h3.4c1.4 0 2.3-.8 2.3-2.3V5c0-1.6-.9-2.6-3.4-2.6H9.6Z" stroke="rgb(148,163,184)" strokeWidth="1" />
                  <path d="M10.4 17.6c2.6 0 3.4-1 3.4-2.6v-1.8H9.2v-1h5.9c1.6 0 2.5-1 2.5-3.3s-.9-3.3-2.5-3.3h-1.3v2.1c0 1.7-1 2.7-2.7 2.7H7.7c-1.4 0-2.3.8-2.3 2.3V15c0 1.6.9 2.6 3.4 2.6h1.6Z" stroke="rgb(148,163,184)" strokeWidth="1" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2.5 3.6 9l3.1 3.1L16.4 2.5H10Z" stroke="rgb(148,163,184)" strokeWidth="1" />
                  <path d="M10 17.5 6.7 14.2l3.2-3.2h6.5L10 17.5Z" stroke="rgb(148,163,184)" strokeWidth="1" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M11.6 2 5.4 11h4.2l-1.2 7 6.2-9.6h-4.3L11.6 2Z" stroke="rgb(148,163,184)" strokeWidth="1" strokeLinejoin="round" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <ellipse cx="10" cy="5" rx="6.4" ry="2.6" stroke="rgb(148,163,184)" strokeWidth="1" />
                  <path d="M3.6 5v10c0 1.4 2.9 2.6 6.4 2.6s6.4-1.2 6.4-2.6V5" stroke="rgb(148,163,184)" strokeWidth="1" />
                  <path d="M3.6 10c0 1.4 2.9 2.6 6.4 2.6s6.4-1.2 6.4-2.6" stroke="rgb(148,163,184)" strokeWidth="1" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2.6 3.4 6v8l6.6 3.4L16.6 14V6L10 2.6Z" stroke="rgb(148,163,184)" strokeWidth="1" strokeLinejoin="round" />
                  <path d="M10 9.8 3.6 6.2M10 9.8l6.4-3.6M10 9.8v7.4" stroke="rgb(148,163,184)" strokeWidth="1" />
                </svg>
                <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "-0.6px", lineHeight: "16px", color: "rgb(148,163,184)" }}>
                  {"aws"}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.42px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
                {"Scroll"}
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.8v10.4M3.4 8.6 7 12.2l3.6-3.6" stroke="rgb(0,134,116)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section data-screen-label="Inicio — Nuestro enfoque" style={{ position: "relative", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: "0", background: "radial-gradient(1100px 480px at 50% 0%, rgba(0,242,176,0.05), rgba(0,0,0,0) 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "1560px", margin: "0 auto", padding: "92px clamp(24px, 4vw, 64px) 96px" }}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 72px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
              <div style={{ width: "24px", height: "1px", background: "rgb(0,144,124)" }} />
              <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "3px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                {"Nuestro enfoque"}
              </span>
            </div>
            <h2 style={{ margin: "0", fontSize: "clamp(28px, 3.2vw, 42px)", fontWeight: "400", lineHeight: "1.14", letterSpacing: "-1.2px", color: "#fff", textWrap: "pretty" }}>
              {"De la estrategia a resultados reales"}
            </h2>
            <p style={{ margin: "18px auto 0", maxWidth: "470px", fontSize: "14px", fontWeight: "300", lineHeight: "24px", color: "rgb(148,163,184)" }}>
              {"Un proceso claro y colaborativo para crear productos digitales que generan valor en cada etapa."}
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ position: "absolute", left: "3%", top: "16px", width: "94%", height: "44px" }}>
              <path d="M0 30 C 150 8 260 52 400 30 C 540 8 650 52 800 30 C 950 8 1060 48 1200 26" fill="none" stroke="rgba(0,223,162,0.55)" strokeWidth="1.6" style={{ filter: "drop-shadow(0 0 6px rgba(0,223,162,0.45))" }} />
            </svg>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "24px" }}>
              {(v.steps || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ width: "44px", height: "44px", borderRadius: "9999px", background: "rgb(6,12,11)", boxShadow: "inset 0 0 0 1px rgb(27,58,50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                        <span style={{ display: "block", width: "18px", height: "18px", color: "rgb(0,223,162)" }}>
                          {s?.icon}
                        </span>
                      </span>
                      <span style={{ width: "7px", height: "7px", borderRadius: "9999px", background: "rgb(0,242,176)", boxShadow: "0 0 8px rgba(0,242,176,0.9)" }} />
                    </div>
                    <div style={{ marginTop: "26px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "11px", letterSpacing: "0.6px", color: "rgb(100,116,139)" }}>
                      {s?.num}
                    </div>
                    <div style={{ marginTop: "6px", fontSize: "18px", fontWeight: "500", letterSpacing: "-0.45px", color: "#fff" }}>
                      {s?.title}
                    </div>
                    <div style={{ marginTop: "8px", maxWidth: "210px", fontSize: "12.5px", fontWeight: "300", lineHeight: "20px", color: "rgb(148,163,184)" }}>
                      {s?.desc}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "44px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "20px" }}>
            {(v.steps || []).map((s, $index) => (
              <React.Fragment key={$index}>
                <div>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "1.08 / 1", borderRadius: "14px", background: "linear-gradient(160deg, rgba(10,18,17,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 60% at 50% 50%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 72%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", left: "14px", top: "14px", width: "16px", height: "16px", borderLeft: "1px solid rgba(0,223,162,0.45)", borderTop: "1px solid rgba(0,223,162,0.45)" }} />
                    <div style={{ position: "absolute", right: "14px", bottom: "14px", width: "16px", height: "16px", borderRight: "1px solid rgba(0,223,162,0.45)", borderBottom: "1px solid rgba(0,223,162,0.45)" }} />
                    <div style={{ position: "absolute", inset: "0", backgroundImage: `url(${s?.img})`, backgroundSize: s?.size, backgroundPosition: s?.pos, backgroundRepeat: "no-repeat" }} />
                  </div>
                  <div style={{ marginTop: "16px", fontSize: "11px", fontWeight: "500", letterSpacing: "2.2px", color: "rgb(203,213,225)", textTransform: "uppercase" }}>
                    {s?.label}
                  </div>
                  <div style={{ marginTop: "10px", width: "28px", height: "1px", background: "rgb(0,144,124)" }} />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ marginTop: "80px", display: "flex", flexWrap: "wrap", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ flex: "3 1 400px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
              <div style={{ padding: "clamp(24px, 3vw, 40px) clamp(12px, 2vw, 24px)", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "clamp(24px, 3.2vw, 30px)", fontWeight: "700", letterSpacing: "-1px", color: "#fff" }}>
                  {"+20"}
                </div>
                <div style={{ marginTop: "4px", fontSize: "11px", color: "rgb(148,163,184)" }}>
                  {"Proyectos entregados"}
                </div>
              </div>
              <div style={{ padding: "clamp(24px, 3vw, 40px) clamp(12px, 2vw, 24px)", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "clamp(24px, 3.2vw, 30px)", fontWeight: "700", letterSpacing: "-1px", color: "#fff" }}>
                  {"+15"}
                </div>
                <div style={{ marginTop: "4px", fontSize: "11px", color: "rgb(148,163,184)" }}>
                  {"Clientes satisfechos"}
                </div>
              </div>
              <div style={{ padding: "clamp(24px, 3vw, 40px) clamp(12px, 2vw, 24px)", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontSize: "clamp(24px, 3.2vw, 30px)", fontWeight: "700", letterSpacing: "-1px", color: "#fff" }}>
                  {"3×"}
                </div>
                <div style={{ marginTop: "4px", fontSize: "11px", color: "rgb(148,163,184)" }}>
                  {"Mayor eficiencia"}
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 220px", minWidth: "0", padding: "34px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: "26px", lineHeight: "1.25", color: "rgb(226,232,240)" }}>
                {"Ideas que"}
                <br />
                {"se convierten"}
                <br />
                {"en resultados."}
              </div>
              <div style={{ marginTop: "10px", width: "96px", height: "1.5px", background: "rgb(0,144,124)", boxShadow: "0 0 8px rgba(0,223,162,0.55)" }} />
            </div>
          </div>
        </div>
      </section>
      <section data-screen-label="Inicio — CTA final" style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <svg viewBox="0 0 1440 520" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}>
          <path d="M-20 500 C 340 470 760 400 1050 250 C 1220 162 1330 96 1400 60" fill="none" stroke="rgba(0,223,162,0.4)" strokeWidth="1.6" style={{ filter: "drop-shadow(0 0 8px rgba(0,223,162,0.4))" }} />
          <circle cx="1400" cy="60" r="9" fill="#00F2B0" style={{ filter: "drop-shadow(0 0 24px rgba(0,242,176,1))", animation: "apuPulse 3.6s ease-in-out infinite" }} />
        </svg>
        <div style={{ position: "relative", maxWidth: "1560px", margin: "0 auto", padding: "110px clamp(24px, 4vw, 64px) 96px", textAlign: "center" }}>
          <div style={{ width: "28px", height: "1.5px", background: "rgb(0,144,124)", margin: "0 auto 20px" }} />
          <div style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "3px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
            {"Tu negocio puede llegar más lejos."}
          </div>
          <h2 style={{ margin: "30px 0 0", fontSize: "clamp(32px, 4.2vw, 58px)", fontWeight: "400", lineHeight: "1.14", letterSpacing: "-1.8px", color: "#fff", textWrap: "pretty" }}>
            {"Construyamos algo"}
            <br />
            {"que la gente use"}
            <br />
            {"y tu negocio sienta."}
          </h2>
          <p style={{ margin: "26px 0 0", fontSize: "15px", fontWeight: "300", color: "rgb(148,163,184)" }}>
            {"Producto útil. Datos reales. Resultados que importan."}
          </p>
          <div className="apu-h5" onClick={v.goContacto} style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "36px", padding: "16px 28px", borderRadius: "9999px", background: "rgb(0,145,125)", cursor: "pointer", boxShadow: "0 0 34px rgba(0,223,162,0.35)" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#04120f" }}>
              {"Hablemos de tu proyecto"}
            </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="#04120f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ marginTop: "96px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "24px", alignItems: "end", textAlign: "left" }}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: "500", letterSpacing: "2.4px", lineHeight: "18px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
                {"Ideas"}
                <br />
                {"que se"}
                <br />
                {"convierten"}
                <br />
                {"en resultados."}
              </div>
              <div style={{ marginTop: "10px", width: "24px", height: "1px", background: "rgb(0,144,124)" }} />
            </div>
            <div style={{ textAlign: "center", fontSize: "11px", fontWeight: "500", letterSpacing: "3px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
              {"Producto · Data · Growth"}
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "10px", fontWeight: "500", letterSpacing: "2.4px", lineHeight: "18px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
                {"Marcas"}
                <br />
                {"más fuertes"}
                <br />
                {"en un mundo"}
                <br />
                {"más digital."}
              </div>
              <div style={{ marginTop: "10px", marginLeft: "auto", width: "24px", height: "1px", background: "rgb(0,144,124)" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
