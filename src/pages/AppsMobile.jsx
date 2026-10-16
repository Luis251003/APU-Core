import React from 'react';
import { onActivate } from '../lib/a11y.js';

export default function AppsMobile({ v }) {
  return (
    <>
    <main data-screen-label="Apps Mobile">
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "-10%", transform: "translateX(-50%)", width: "min(1000px, 96%)", height: "46%", background: "radial-gradient(50% 50% at 50% 50%, rgba(0,214,155,0.16) 0%, rgba(0,0,0,0) 72%)", filter: "blur(54px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto", padding: "clamp(64px, 8vw, 118px) clamp(24px, 4vw, 56px) clamp(48px, 6vw, 80px)", textAlign: "center" }}>
          <div style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: "3.6px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
            {"Apps Mobile"}
          </div>
          <h1 style={{ margin: "24px 0 0", fontSize: "clamp(32px, 4.4vw, 60px)", fontWeight: "700", lineHeight: "1.05", letterSpacing: "-2px", color: "#fff", textWrap: "pretty" }}>
            {"Talento que construye"}
            <br />
            <span style={{ color: "rgb(25,193,157)" }}>
              {"apps reales"}
            </span>
          </h1>
          <p style={{ margin: "24px auto 0", maxWidth: "620px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(203,213,225)" }}>
            {"Una selección de aplicaciones, experiencias móviles e interfaces desarrolladas por profesionales que hoy forman parte de APU CORE."}
          </p>
        </div>
        {(v.cats || []).map((cat, $index) => (
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
                <div ref={cat?.railRef} style={{ display: "flex", justifyContent: "safe center", gap: "20px", overflowX: "auto", scrollSnapType: "x proximity", scrollPaddingLeft: "clamp(20px, 3vw, 44px)", scrollBehavior: "smooth", scrollbarWidth: "none", padding: "4px clamp(20px, 3vw, 44px) 10px" }}>
                  {(cat?.shots || []).map((shot, $index) => (
                    <React.Fragment key={$index}>
                      <div className="apu-h18" onClick={shot?.open} style={{ position: "relative", flex: "0 0 clamp(146px, 18.5vw, 200px)", scrollSnapAlign: "start", borderRadius: "22px", background: "linear-gradient(170deg, rgba(14,24,22,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", overflow: "hidden", cursor: "pointer", transition: "transform 240ms ease, box-shadow 240ms ease" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label={`Ver pantalla ${shot?.idLabel}`} data-cta="shot.open" data-service={cat?.name}>
                        <div style={{ position: "relative", width: "100%", aspectRatio: "9 / 17.5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ position: "absolute", inset: "0", background: "radial-gradient(62% 48% at 50% 40%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 76%)", pointerEvents: "none" }} />
                          <div style={{ position: "absolute", left: "50%", top: "12px", transform: "translateX(-50%)", width: "26%", height: "4px", borderRadius: "9999px", background: "rgba(0,223,162,0.22)" }} />
                          <div style={{ position: "absolute", left: "14px", top: "34px", width: "16px", height: "16px", borderLeft: "1px solid rgba(0,223,162,0.35)", borderTop: "1px solid rgba(0,223,162,0.35)" }} />
                          <div style={{ position: "absolute", right: "14px", bottom: "34px", width: "16px", height: "16px", borderRight: "1px solid rgba(0,223,162,0.35)", borderBottom: "1px solid rgba(0,223,162,0.35)" }} />
                          {shot?.hasImg ? (
                            <>
                              <div style={{ position: "absolute", inset: "0", backgroundColor: "rgb(6,11,10)", backgroundImage: shot?.bg, backgroundSize: "cover", backgroundPosition: "50% 0" }} />
                            </>
                          ) : null}
                          {shot?.noImg ? (
                            <>
                              <span style={{ position: "relative", textAlign: "center", padding: "0 16px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "2px", lineHeight: "17px", color: "rgba(148,163,184,0.75)" }}>
                                {"[ MOBILE APP"}
                                <br />
                                {"SCREEN ]"}
                              </span>
                            </>
                          ) : null}
                          <span style={{ position: "absolute", left: "16px", bottom: "13px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10px", letterSpacing: "1.4px", color: "rgba(100,116,139,0.9)" }}>
                            {shot?.idLabel}
                          </span>
                          <span style={{ position: "absolute", right: "14px", top: "13px", fontSize: "12px", color: "rgba(148,163,184,0.7)" }}>
                            {"⍾"}
                          </span>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ position: "absolute", left: "clamp(20px, 3vw, 44px)", right: "clamp(20px, 3vw, 44px)", top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", justifyContent: "space-between", pointerEvents: "none", opacity: cat?.arrowOpacity, transition: "opacity 200ms ease" }}>
                  <div className="apu-h19" onClick={cat?.prev} style={{ pointerEvents: "auto", width: "40px", height: "40px", marginLeft: "-8px", borderRadius: "9999px", background: "rgba(4,9,8,0.82)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Anterior" data-cta="cat.prev">
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                      <path d="M9.2 2.4 4.4 7l4.8 4.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="apu-h20" onClick={cat?.next} style={{ pointerEvents: "auto", width: "40px", height: "40px", marginRight: "-8px", borderRadius: "9999px", background: "rgba(4,9,8,0.82)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Siguiente" data-cta="cat.next">
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
            <div className="apu-h21" onClick={v.goContacto} style={{ marginTop: "34px", display: "inline-flex", alignItems: "center", gap: "14px", padding: "19px 34px", borderRadius: "9999px", background: "rgb(25,193,157)", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="goContacto">
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
      {v.lbOpen ? (
        <>
          <div onClick={v.lbClose} style={{ position: "fixed", inset: "0", zIndex: "90", background: "rgba(0,0,0,0.94)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 3vw, 40px)" }} role="dialog" aria-modal="true" data-cta="lbClose">
            <div style={{ width: "100%", maxWidth: "1500px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}>
                  {v.lbCatName}
                </span>
                <span style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "1.4px", color: "rgb(148,163,184)" }}>
                  {v.lbCounter}
                </span>
              </div>
              <div className="apu-h22" onClick={v.lbClose} style={{ width: "40px", height: "40px", borderRadius: "9999px", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Cerrar" data-cta="lbClose">
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3l8 8M11 3l-8 8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div style={{ marginTop: "18px", width: "100%", maxWidth: "1500px", display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(10px, 2vw, 28px)" }}>
              <div className="apu-h23" onClick={v.lbPrev} style={{ flex: "none", width: "46px", height: "46px", borderRadius: "9999px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Imagen anterior" data-cta="lbPrev">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M9.2 2.4 4.4 7l4.8 4.6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div onClick={v.lbStop} style={{ position: "relative", flex: "0 1 auto", height: "min(78vh, 760px)", aspectRatio: "9 / 17.5", borderRadius: "28px", background: "linear-gradient(170deg, rgba(14,24,22,0.96) 0%, rgba(4,9,8,0.96) 100%)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.3), 0 0 60px rgba(0,223,162,0.1)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="lbStop">
                <div style={{ position: "absolute", inset: "0", background: "radial-gradient(58% 46% at 50% 40%, rgba(0,223,162,0.09) 0%, rgba(0,0,0,0) 76%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", left: "50%", top: "16px", transform: "translateX(-50%)", width: "24%", height: "5px", borderRadius: "9999px", background: "rgba(0,223,162,0.26)" }} />
                <div style={{ position: "absolute", left: "20px", top: "44px", width: "22px", height: "22px", borderLeft: "1px solid rgba(0,223,162,0.4)", borderTop: "1px solid rgba(0,223,162,0.4)" }} />
                <div style={{ position: "absolute", right: "20px", bottom: "44px", width: "22px", height: "22px", borderRight: "1px solid rgba(0,223,162,0.4)", borderBottom: "1px solid rgba(0,223,162,0.4)" }} />
                {v.lbHasImg ? (
                  <>
                    <div style={{ position: "absolute", inset: "0", backgroundColor: "rgb(6,11,10)", backgroundImage: v.lbBg, backgroundSize: "contain", backgroundPosition: "50% 0", backgroundRepeat: "no-repeat" }} />
                  </>
                ) : null}
                {v.lbNoImg ? (
                  <>
                    <span style={{ position: "relative", textAlign: "center", padding: "0 24px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "11.5px", letterSpacing: "2.6px", lineHeight: "20px", color: "rgba(148,163,184,0.8)" }}>
                      {"[ MOBILE APP"}
                      <br />
                      {"SCREEN ]"}
                    </span>
                  </>
                ) : null}
                <span style={{ position: "absolute", left: "22px", bottom: "18px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "11px", letterSpacing: "1.4px", color: "rgba(100,116,139,0.95)" }}>
                  {v.lbId}
                </span>
              </div>
              <div className="apu-h24" onClick={v.lbNext} style={{ flex: "none", width: "46px", height: "46px", borderRadius: "9999px", background: "rgba(8,14,13,0.9)", boxShadow: "inset 0 0 0 1px rgba(0,223,162,0.35)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} role="button" tabIndex={0} onKeyDown={onActivate} aria-label="Imagen siguiente" data-cta="lbNext">
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
