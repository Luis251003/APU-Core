import React from 'react';
import { onActivate } from '../lib/a11y.js';

export default function PlataformasWeb({ v }) {
  return (
    <>
    <main data-screen-label="Plataformas Web">
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "-10%", transform: "translateX(-50%)", width: "min(1100px, 96%)", height: "44%", background: "radial-gradient(50% 50% at 50% 50%, rgba(0,214,155,0.15) 0%, rgba(0,0,0,0) 72%)", filter: "blur(56px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "920px", margin: "0 auto", padding: "clamp(58px, 7vw, 104px) clamp(24px, 4vw, 56px) clamp(36px, 4.5vw, 62px)", textAlign: "center" }}>
          <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: "3.6px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
            {"Plataformas Web"}
          </div>
          <h1 style={{ margin: "24px 0 0", fontSize: "clamp(32px, 4.4vw, 60px)", fontWeight: "700", lineHeight: "1.05", letterSpacing: "-2px", color: "#fff", textWrap: "pretty" }}>
            {"Talento que construye"}
            <br />
            <span style={{ color: "rgb(25,193,157)" }}>
              {"productos reales"}
            </span>
          </h1>
          <p style={{ margin: "24px auto 0", maxWidth: "620px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(203,213,225)" }}>
            {"Una selección de productos, experiencias e interfaces desarrolladas por profesionales que hoy forman parte de APU CORE."}
          </p>
        </div>
        {(v.webCats || []).map((cat, $index) => (
          <React.Fragment key={$index}>
            <div style={{ position: "relative", maxWidth: "1600px", margin: "0 auto", padding: "clamp(38px, 4.6vw, 64px) 0 0" }}>
              <div style={{ padding: "0 clamp(20px, 3vw, 44px)" }}>
                <div style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "11px", letterSpacing: "2.2px", color: "rgb(25,193,157)" }}>
                  {cat?.num}
                </div>
                <div style={{ marginTop: "12px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
                  <h2 style={{ margin: "0", fontSize: "clamp(22px, 2.4vw, 34px)", fontWeight: "600", letterSpacing: "-1px", color: "#fff" }}>
                    {cat?.name}
                  </h2>
                  <span style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "11px", letterSpacing: "1.4px", color: "rgb(100,116,139)" }}>
                    {cat?.countLabel}
                  </span>
                </div>
                <p style={{ margin: "12px 0 0", maxWidth: "620px", fontSize: "14.5px", fontWeight: "300", lineHeight: "24px", color: "rgb(148,163,184)" }}>
                  {cat?.desc}
                </p>
              </div>
              <div onMouseEnter={cat?.hoverOn} onMouseLeave={cat?.hoverOff} style={{ position: "relative", marginTop: "26px" }} data-view="service_view" data-view-name={cat?.name}>
                <div className="apu-web-grid" ref={cat?.railRef} style={{ justifyContent: "safe center", padding: "4px clamp(20px, 3vw, 44px) 10px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "clamp(10px, 2vw, 18px)" }}>
                  {(cat?.shots || []).map((shot, $index) => (
                    <React.Fragment key={$index}>
                      <div className="apu-h25" onClick={shot?.open} style={{ position: "relative", minWidth: "0", borderRadius: "14px", background: "linear-gradient(165deg, rgba(10,18,17,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)", overflow: "hidden", cursor: "pointer", transition: "transform 240ms ease, box-shadow 240ms ease" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label={`Ver pantalla ${shot?.idLabel}`} data-cta="shot.open" data-service={cat?.name}>
                        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ position: "absolute", inset: "0", background: "radial-gradient(62% 56% at 50% 44%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 76%)", pointerEvents: "none" }} />
                          <div style={{ position: "absolute", left: "16px", top: "16px", width: "18px", height: "18px", borderLeft: "1px solid rgba(0,223,162,0.4)", borderTop: "1px solid rgba(0,223,162,0.4)" }} />
                          <div style={{ position: "absolute", right: "16px", bottom: "16px", width: "18px", height: "18px", borderRight: "1px solid rgba(0,223,162,0.4)", borderBottom: "1px solid rgba(0,223,162,0.4)" }} />
                          {shot?.hasImg ? (
                            <>
                              <div style={{ position: "absolute", inset: "0", backgroundColor: "rgb(6,11,10)", backgroundImage: shot?.bg, backgroundSize: "contain", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
                            </>
                          ) : null}
                          {shot?.noImg ? (
                            <>
                              <span style={{ position: "relative", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10.5px", letterSpacing: "2.2px", color: "rgba(148,163,184,0.8)", textAlign: "center", padding: "0 14px" }}>
                                {"[ WEB PRODUCT IMAGE ]"}
                              </span>
                            </>
                          ) : null}
                          <span style={{ position: "absolute", left: "18px", bottom: "15px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "1.4px", color: "rgba(100,116,139,0.9)" }}>
                            {shot?.idLabel}
                          </span>
                          <span style={{ position: "absolute", right: "16px", top: "15px", fontSize: "13px", color: "rgba(148,163,184,0.75)" }}>
                            {"↗"}
                          </span>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div className="apu-web-arrows" style={{ position: "absolute", left: "clamp(20px, 3vw, 44px)", right: "clamp(20px, 3vw, 44px)", top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", justifyContent: "space-between", pointerEvents: "none", opacity: cat?.arrowOpacity, transition: "opacity 200ms ease" }}>
                  <div className="apu-h26" onClick={cat?.prev} style={{ pointerEvents: "auto", width: "40px", height: "40px", marginLeft: "-8px", borderRadius: "9999px", background: "rgba(4,9,8,0.82)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Anterior" data-cta="cat.prev">
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                      <path d="M9.2 2.4 4.4 7l4.8 4.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="apu-h27" onClick={cat?.next} style={{ pointerEvents: "auto", width: "40px", height: "40px", marginRight: "-8px", borderRadius: "9999px", background: "rgba(4,9,8,0.82)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Siguiente" data-cta="cat.next">
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                      <path d="M4.8 2.4 9.6 7l-4.8 4.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ margin: "clamp(34px, 4vw, 58px) clamp(20px, 3vw, 44px) 0", height: "1px", background: "linear-gradient(90deg, rgba(0,223,162,0.16) 0%, rgba(0,223,162,0.05) 60%, rgba(255,255,255,0) 100%)" }} />
            </div>
          </React.Fragment>
        ))}
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto", padding: "clamp(72px, 9vw, 130px) clamp(24px, 4vw, 56px) clamp(80px, 9vw, 130px)", textAlign: "center" }}>
          <div style={{ position: "absolute", left: "50%", top: "34%", transform: "translateX(-50%)", width: "min(760px, 94%)", height: "60%", background: "radial-gradient(50% 50% at 50% 50%, rgba(0,214,155,0.16) 0%, rgba(0,0,0,0) 70%)", filter: "blur(52px)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: "3.2px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
              {"¿Tienes un proyecto en mente?"}
            </div>
            <h2 style={{ margin: "22px 0 0", fontSize: "clamp(30px, 4vw, 54px)", fontWeight: "700", lineHeight: "1.06", letterSpacing: "-1.8px", color: "#fff" }}>
              {"Hagámoslo realidad."}
            </h2>
            <p style={{ margin: "22px auto 0", maxWidth: "540px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(203,213,225)" }}>
              {"Cuéntanos qué necesitas construir y conversemos sobre tu idea."}
            </p>
            <div className="apu-h28" onClick={v.goContacto} style={{ marginTop: "34px", display: "inline-flex", alignItems: "center", gap: "14px", padding: "19px 34px", borderRadius: "9999px", background: "rgb(25,193,157)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
              <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-0.2px", color: "#04120f", whiteSpace: "nowrap" }}>
                {"Cuéntanos tu proyecto"}
              </span>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="#04120f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {v.wlbOpen ? (
        <>
          <div onClick={v.wlbClose} style={{ position: "fixed", inset: "0", zIndex: "90", background: "rgba(0,0,0,0.95)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 3vw, 40px)" }} role="dialog" aria-modal="true" data-cta="wlbClose">
            <div style={{ width: "100%", maxWidth: "1500px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}>
                  {v.wlbCatName}
                </span>
                <span style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "1.4px", color: "rgb(148,163,184)" }}>
                  {v.wlbCounter}
                </span>
              </div>
              <div className="apu-h29" onClick={v.wlbClose} style={{ width: "40px", height: "40px", borderRadius: "9999px", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Cerrar" data-cta="wlbClose">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3l8 8M11 3l-8 8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div style={{ marginTop: "18px", width: "100%", maxWidth: "1500px", display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(10px, 2vw, 28px)" }}>
              <div className="apu-h30" onClick={v.wlbPrev} style={{ flex: "none", width: "46px", height: "46px", borderRadius: "9999px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Imagen anterior" data-cta="wlbPrev">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M9.2 2.4 4.4 7l4.8 4.6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div onClick={v.wlbStop} style={{ position: "relative", flex: "1 1 auto", maxWidth: "1320px", aspectRatio: "16 / 10", maxHeight: "76vh", borderRadius: "16px", background: "linear-gradient(165deg, rgba(10,18,17,0.96) 0%, rgba(4,9,8,0.96) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.3), 0 0 60px rgba(0,223,162,0.1)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="wlbStop">
                <div style={{ position: "absolute", inset: "0", background: "radial-gradient(58% 52% at 50% 44%, rgba(0,223,162,0.09) 0%, rgba(0,0,0,0) 76%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", left: "22px", top: "22px", width: "24px", height: "24px", borderLeft: "1px solid rgba(0,223,162,0.45)", borderTop: "1px solid rgba(0,223,162,0.45)" }} />
                <div style={{ position: "absolute", right: "22px", bottom: "22px", width: "24px", height: "24px", borderRight: "1px solid rgba(0,223,162,0.45)", borderBottom: "1px solid rgba(0,223,162,0.45)" }} />
                {v.wlbHasImg ? (
                  <>
                    <div style={{ position: "absolute", inset: "0", backgroundImage: v.wlbBg, backgroundSize: "contain", backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat" }} />
                  </>
                ) : null}
                {v.wlbNoImg ? (
                  <>
                    <span style={{ position: "relative", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "2.6px", color: "rgba(148,163,184,0.85)", textAlign: "center", padding: "0 20px" }}>
                      {"[ WEB PRODUCT IMAGE ]"}
                    </span>
                  </>
                ) : null}
                <span style={{ position: "absolute", left: "24px", bottom: "20px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "11px", letterSpacing: "1.4px", color: "rgba(100,116,139,0.95)" }}>
                  {v.wlbId}
                </span>
              </div>
              <div className="apu-h31" onClick={v.wlbNext} style={{ flex: "none", width: "46px", height: "46px", borderRadius: "9999px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Imagen siguiente" data-cta="wlbNext">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M4.8 2.4 9.6 7l-4.8 4.6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div style={{ marginTop: "18px", fontSize: "11.5px", fontWeight: "300", color: "rgb(100,116,139)" }}>
              {"ESC para cerrar · ← → para navegar"}
            </div>
          </div>
        </>
      ) : null}
    </main>
    </>
  );
}
