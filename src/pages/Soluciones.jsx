import React from 'react';
import { onActivate } from '../lib/a11y.js';

export default function Soluciones({ v }) {
  return (
    <>
    <main data-screen-label="Soluciones de producto">
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", maxWidth: "1560px", margin: "0 auto", padding: "64px clamp(24px, 4vw, 64px) 32px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 500px", minWidth: "0" }}>
            <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "3.2px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
              {"Soluciones de producto"}
            </div>
            <h1 style={{ margin: "18px 0 0", fontSize: "clamp(34px, 4.2vw, 58px)", fontWeight: "700", lineHeight: "1.08", letterSpacing: "-1.8px", color: "#fff", textWrap: "pretty" }}>
              {"¿Qué quieres"}{" "}
              <span style={{ color: "rgb(25,193,157)" }}>
                {"mejorar"}
              </span>
              <br />
              {"en tu negocio?"}
            </h1>
            <p style={{ margin: "22px 0 0", maxWidth: "560px", fontSize: "16px", fontWeight: "300", lineHeight: "27px", color: "rgb(203,213,225)" }}>
              {"Diseñamos y construimos productos digitales desde el problema hasta la medición, combinando estrategia de producto, experiencia, tecnología y datos."}
            </p>
          </div>
          <div style={{ flex: "0 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px", paddingTop: "14px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "18px", paddingLeft: "20px", borderLeft: "1.5px solid rgb(25,193,157)" }}>
              <span style={{ flex: "0 0 96px", fontSize: "13px", fontWeight: "600", letterSpacing: "2.2px", color: "#fff" }}>
                {"PRODUCT"}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "300", lineHeight: "20px", color: "rgb(148,163,184)" }}>
                {"Estrategia · usuario · negocio"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "18px", paddingLeft: "20px", borderLeft: "1.5px solid rgba(0,223,162,0.45)" }}>
              <span style={{ flex: "0 0 96px", fontSize: "13px", fontWeight: "600", letterSpacing: "2.2px", color: "#fff" }}>
                {"TECH"}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "300", lineHeight: "20px", color: "rgb(148,163,184)" }}>
                {"Arquitectura · desarrollo · escalabilidad"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "18px", paddingLeft: "20px", borderLeft: "1.5px solid rgba(0,223,162,0.22)" }}>
              <span style={{ flex: "0 0 96px", fontSize: "13px", fontWeight: "600", letterSpacing: "2.2px", color: "#fff" }}>
                {"DATA"}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "300", lineHeight: "20px", color: "rgb(148,163,184)" }}>
                {"Medición · optimización · aprendizaje"}
              </span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "1560px", margin: "0 auto", padding: "0 clamp(24px, 4vw, 64px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "20px" }}>
          {(v.casos || []).map((c, $index) => (
            <React.Fragment key={$index}>
              <div className="apu-h7" onClick={c?.open} style={{ borderRadius: "16px", background: "rgba(8,14,13,0.85)", boxShadow: "inset 0 0 0 1px rgb(22,42,37)", padding: "22px 22px 26px", display: "flex", flexDirection: "column", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="c.open" data-case={c?.sector} data-view="case_study_view" data-view-name={c?.sector}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 16px 9px 12px", borderRadius: "9999px", background: "rgba(0,0,0,0.5)", boxShadow: "inset 0 0 0 1px rgb(26,52,46)", minWidth: "0" }}>
                    <span style={{ display: "block", width: "18px", height: "18px", flex: "none", color: "rgb(25,193,157)" }}>
                      {c?.icon}
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "1.4px", color: "rgb(226,232,240)" }}>
                      {c?.sector}
                    </span>
                  </div>
                  <span style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.6px", color: "rgb(100,116,139)" }}>
                    {c?.num}
                  </span>
                </div>
                <div style={{ marginTop: "18px" }}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "14px", background: "linear-gradient(160deg, rgba(10,18,17,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.18)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 60% at 50% 50%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 72%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", left: "14px", top: "14px", width: "16px", height: "16px", borderLeft: "1px solid rgba(0,223,162,0.45)", borderTop: "1px solid rgba(0,223,162,0.45)" }} />
                    <div style={{ position: "absolute", right: "14px", bottom: "14px", width: "16px", height: "16px", borderRight: "1px solid rgba(0,223,162,0.45)", borderBottom: "1px solid rgba(0,223,162,0.45)" }} />
                    <div style={{ position: "absolute", inset: "0", backgroundImage: `url(${c?.img})`, backgroundSize: "cover", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
                  </div>
                </div>
                <div style={{ marginTop: "24px", fontSize: "19px", fontWeight: "600", lineHeight: "27px", letterSpacing: "-0.5px", color: "#fff", whiteSpace: "pre-line" }}>
                  {c?.title}
                </div>
                <p style={{ margin: "12px 0 0", fontSize: "13.5px", fontWeight: "300", lineHeight: "22px", color: "rgb(148,163,184)" }}>
                  {c?.desc}
                </p>
                <div style={{ marginTop: "auto", paddingTop: "22px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {(c?.results || []).map((r, $index) => (
                    <React.Fragment key={$index}>
                      <span style={{ display: "inline-flex", alignItems: "baseline", gap: "6px", padding: "8px 14px", borderRadius: "9999px", background: "rgba(0,60,50,0.28)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.22)", fontSize: "12px", fontWeight: "500", color: "rgb(226,232,240)", whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "rgb(25,193,157)" }}>
                          {r?.arrow}
                        </span>
                        {r?.label}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ marginTop: "22px", paddingTop: "18px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "600", color: "rgb(25,193,157)" }}>
                    {"Ver cómo lo abordamos"}
                  </span>
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                    <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="rgb(25,193,157)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div style={{ maxWidth: "1560px", margin: "0 auto", padding: "clamp(72px, 9vw, 140px) clamp(24px, 4vw, 64px) 0" }}>
          <div style={{ maxWidth: "760px" }}>
            <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: "3.2px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
              {"De una necesidad a un producto"}
            </div>
            <h2 style={{ margin: "22px 0 0", fontSize: "clamp(32px, 4.4vw, 62px)", fontWeight: "700", lineHeight: "1.04", letterSpacing: "-2px", color: "#fff", textWrap: "pretty" }}>
              {"No necesitas saber"}
              <br />
              {"qué construir."}
            </h2>
            <p style={{ margin: "26px 0 0", maxWidth: "620px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(203,213,225)" }}>
              {"Cuéntanos qué quieres lograr. Analizamos tu negocio, entendemos el problema y definimos contigo qué producto tiene sentido crear."}
            </p>
          </div>
          <div style={{ position: "relative", marginTop: "clamp(56px, 7vw, 96px)" }}>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(148px, 1fr))", gap: "clamp(20px, 2vw, 32px)" }}>
              <div onMouseEnter={v.enter0} style={{ position: "relative", minWidth: "0", paddingTop: "34px", cursor: "default" }}>
                <span style={{ position: "absolute", left: "0", right: "0", top: "28px", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.5) 0%, rgba(0,223,162,0.16) 100%)" }} />
                <span style={{ position: "absolute", left: "0", top: "24px", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 4px rgba(0,223,162,0.12), 0 0 14px rgba(0,223,162,0.55)" }} />
                <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "1.4px", color: "rgba(0,223,162,0.75)" }}>
                  {"01"}
                </div>
                <div style={{ marginTop: "12px", fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: "600", letterSpacing: "-0.4px", color: "#fff" }}>
                  {"Entendemos"}
                </div>
                <div style={{ marginTop: "8px", fontSize: "clamp(11px, 1.05vw, 12.5px)", fontWeight: "300", lineHeight: "19px", color: "rgb(148,163,184)" }}>
                  {"Negocio · usuarios"}
                </div>
              </div>
              <div onMouseEnter={v.enter1} style={{ position: "relative", minWidth: "0", paddingTop: "34px", cursor: "default" }}>
                <span style={{ position: "absolute", left: "0", right: "0", top: "28px", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.5) 0%, rgba(0,223,162,0.16) 100%)" }} />
                <span style={{ position: "absolute", left: "0", top: "24px", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 4px rgba(0,223,162,0.12), 0 0 14px rgba(0,223,162,0.55)" }} />
                <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "1.4px", color: "rgba(0,223,162,0.75)" }}>
                  {"02"}
                </div>
                <div style={{ marginTop: "12px", fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: "600", letterSpacing: "-0.4px", color: "#fff" }}>
                  {"Encontramos"}
                </div>
                <div style={{ marginTop: "8px", fontSize: "clamp(11px, 1.05vw, 12.5px)", fontWeight: "300", lineHeight: "19px", color: "rgb(148,163,184)" }}>
                  {"Research · data"}
                </div>
              </div>
              <div onMouseEnter={v.enter2} style={{ position: "relative", minWidth: "0", paddingTop: "34px", cursor: "default" }}>
                <span style={{ position: "absolute", left: "0", right: "0", top: "28px", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.5) 0%, rgba(0,223,162,0.16) 100%)" }} />
                <span style={{ position: "absolute", left: "0", top: "24px", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 4px rgba(0,223,162,0.12), 0 0 14px rgba(0,223,162,0.55)" }} />
                <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "1.4px", color: "rgba(0,223,162,0.75)" }}>
                  {"03"}
                </div>
                <div style={{ marginTop: "12px", fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: "600", letterSpacing: "-0.4px", color: "#fff" }}>
                  {"Definimos"}
                </div>
                <div style={{ marginTop: "8px", fontSize: "clamp(11px, 1.05vw, 12.5px)", fontWeight: "300", lineHeight: "19px", color: "rgb(148,163,184)" }}>
                  {"Estrategia · viabilidad"}
                </div>
              </div>
              <div onMouseEnter={v.enter3} style={{ position: "relative", minWidth: "0", paddingTop: "34px", cursor: "default" }}>
                <span style={{ position: "absolute", left: "0", right: "0", top: "28px", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.5) 0%, rgba(0,223,162,0.16) 100%)" }} />
                <span style={{ position: "absolute", left: "0", top: "24px", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 4px rgba(0,223,162,0.12), 0 0 14px rgba(0,223,162,0.55)" }} />
                <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "1.4px", color: "rgba(0,223,162,0.75)" }}>
                  {"04"}
                </div>
                <div style={{ marginTop: "12px", fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: "600", letterSpacing: "-0.4px", color: "#fff" }}>
                  {"Creamos"}
                </div>
                <div style={{ marginTop: "8px", fontSize: "clamp(11px, 1.05vw, 12.5px)", fontWeight: "300", lineHeight: "19px", color: "rgb(148,163,184)" }}>
                  {"Diseño · tecnología"}
                </div>
              </div>
              <div onMouseEnter={v.enter4} style={{ position: "relative", minWidth: "0", paddingTop: "34px", cursor: "default" }}>
                <span style={{ position: "absolute", left: "0", right: "0", top: "28px", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.5) 0%, rgba(0,223,162,0.16) 100%)" }} />
                <span style={{ position: "absolute", left: "0", top: "24px", width: "9px", height: "9px", borderRadius: "9999px", background: "rgb(25,193,157)", boxShadow: "0 0 0 4px rgba(0,223,162,0.12), 0 0 14px rgba(0,223,162,0.55)" }} />
                <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "1.4px", color: "rgba(0,223,162,0.75)" }}>
                  {"05"}
                </div>
                <div style={{ marginTop: "12px", fontSize: "clamp(15px, 1.5vw, 20px)", fontWeight: "600", letterSpacing: "-0.4px", color: "#fff" }}>
                  {"Mejoramos"}
                </div>
                <div style={{ marginTop: "8px", fontSize: "clamp(11px, 1.05vw, 12.5px)", fontWeight: "300", lineHeight: "19px", color: "rgb(148,163,184)" }}>
                  {"Métricas · optimización"}
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "clamp(28px, 3vw, 40px)", minHeight: "52px", maxWidth: "640px", fontSize: "14px", fontWeight: "300", lineHeight: "26px", color: "rgb(148,163,184)", textWrap: "pretty" }}>
            {v.pasoConcepto}
          </div>
          <div style={{ marginTop: "clamp(40px, 5vw, 64px)", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px clamp(18px, 3vw, 40px)" }}>
            <span style={{ fontSize: "12px", fontWeight: "300", color: "rgb(100,116,139)" }}>
              {"Presente en todo el recorrido"}
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px clamp(18px, 3vw, 40px)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontSize: "11.5px", fontWeight: "600", letterSpacing: "2.4px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                {"ESTRATEGIA"}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontSize: "11.5px", fontWeight: "600", letterSpacing: "2.4px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                <span style={{ width: "3px", height: "3px", borderRadius: "9999px", background: "rgba(0,223,162,0.6)" }} />
                {"PRODUCTO"}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontSize: "11.5px", fontWeight: "600", letterSpacing: "2.4px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                <span style={{ width: "3px", height: "3px", borderRadius: "9999px", background: "rgba(0,223,162,0.6)" }} />
                {"EXPERIENCIA"}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontSize: "11.5px", fontWeight: "600", letterSpacing: "2.4px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                <span style={{ width: "3px", height: "3px", borderRadius: "9999px", background: "rgba(0,223,162,0.6)" }} />
                {"TECNOLOGÍA"}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", fontSize: "11.5px", fontWeight: "600", letterSpacing: "2.4px", color: "rgb(203,213,225)", whiteSpace: "nowrap" }}>
                <span style={{ width: "3px", height: "3px", borderRadius: "9999px", background: "rgba(0,223,162,0.6)" }} />
                {"DATA"}
              </span>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: "1560px", margin: "0 auto", padding: "clamp(96px, 12vw, 180px) clamp(24px, 4vw, 64px) clamp(80px, 9vw, 130px)" }}>
          <div style={{ position: "absolute", left: "50%", top: "42%", transform: "translateX(-50%)", width: "min(820px, 90%)", height: "60%", background: "radial-gradient(50% 50% at 50% 50%, rgba(0,214,155,0.16) 0%, rgba(0,0,0,0) 70%)", filter: "blur(52px)", pointerEvents: "none" }} />
          <div style={{ position: "relative", maxWidth: "780px" }}>
            <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: "3.2px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
              {"Empecemos por el problema"}
            </div>
            <h2 style={{ margin: "22px 0 0", fontSize: "clamp(30px, 4vw, 54px)", fontWeight: "700", lineHeight: "1.06", letterSpacing: "-1.8px", color: "#fff", textWrap: "pretty" }}>
              {"Cuéntanos qué quieres mejorar."}
            </h2>
            <p style={{ margin: "24px 0 0", maxWidth: "620px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(203,213,225)" }}>
              {"No necesitas tener la solución definida. Cuéntanos el problema, la idea o el objetivo y nosotros te ayudamos a convertirlo en un producto viable y medible."}
            </p>
            <div className="apu-h8" onClick={v.goContacto} style={{ marginTop: "36px", display: "inline-flex", alignItems: "center", gap: "14px", padding: "19px 34px", borderRadius: "9999px", background: "rgb(25,193,157)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
              <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.2px", color: "#04120f", whiteSpace: "nowrap" }}>
                {"Cuéntanos tu problema"}
              </span>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="#04120f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ marginTop: "20px", fontSize: "12.5px", fontWeight: "300", color: "rgb(100,116,139)" }}>
              {"Idea · producto existente · proceso interno · oportunidad de mejora"}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
