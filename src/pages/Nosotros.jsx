import React from 'react';

export default function Nosotros({ v }) {
  return (
    <>
    <main>
      <section data-screen-label="Nosotros — Hero" style={{ position: "relative", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div style={{ position: "relative", maxWidth: "1560px", margin: "0 auto", padding: "clamp(24px, 4vw, 80px) clamp(28px, 6vw, 112px) 0", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center", minHeight: "clamp(420px, 58vw, 560px)" }}>
          <div style={{ flex: "1 1 400px", minWidth: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
              <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.86px", lineHeight: "16.5px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                {"Somos APU Core"}
              </span>
              <div style={{ width: "40px", height: "1px", background: "rgb(71,85,105)" }} />
            </div>
            <h1 style={{ margin: "0", maxWidth: "760px", fontSize: "clamp(32px, 3.7vw, 52px)", fontWeight: "400", lineHeight: "1.14", letterSpacing: "-0.78px", color: "#fff", textWrap: "pretty" }}>
              {"Creamos productos digitales"}
              <br />
              {"que crecen con los datos."}
            </h1>
            <div style={{ marginTop: "28px", maxWidth: "512px", borderLeft: "2px solid rgb(0,144,124)", paddingLeft: "18px" }}>
              <p style={{ margin: "0", fontSize: "15px", fontWeight: "300", lineHeight: "26px", color: "rgb(203,213,225)" }}>
                {"Nacimos como un grupo de ingenieros con una idea clara: usar la tecnología y los datos para que las empresas trabajen mejor y crezcan."}
              </p>
            </div>
          </div>
          <div style={{ position: "relative", flex: "1 1 520px", minWidth: "0", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "clamp(260px, 46vw, 489px)" }}>
            <div style={{ position: "absolute", left: "56%", top: "34%", width: "58%", height: "52%", transform: "translate(-50%, -50%)", borderRadius: "9999px", background: "radial-gradient(closest-side, rgba(0,235,172,0.22), rgba(0,235,172,0) 78%)", filter: "blur(60px)", pointerEvents: "none" }} />
            <div style={{ position: "relative", width: "108%", maxWidth: "108%", maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 8%, #000 26%, #000 74%, rgba(0,0,0,0.4) 94%, rgba(0,0,0,0) 100%)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 8%, #000 26%, #000 74%, rgba(0,0,0,0.4) 94%, rgba(0,0,0,0) 100%)" }}>
              <img src="/images/nosotros-mountain.png" alt="Ruta de crecimiento APU Core" style={{ position: "relative", display: "block", width: "100%", height: "auto", objectFit: "contain", maskImage: "radial-gradient(76% 96% at 54% 48%, #000 34%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.3) 84%, rgba(0,0,0,0) 100%)", WebkitMaskImage: "radial-gradient(76% 96% at 54% 48%, #000 34%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.3) 84%, rgba(0,0,0,0) 100%)" }} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "1560px", margin: "0 auto", padding: "24px clamp(24px, 4vw, 64px)", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "28px", height: "1px", background: "rgb(71,85,105)" }} />
            <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.4px", color: "rgb(100,116,139)", textTransform: "uppercase" }}>
              {"Lima, Perú · Producto digital · Data · Growth"}
            </span>
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
      </section>
      <section data-screen-label="Nosotros — El equipo" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", top: "10%", transform: "translateX(-50%)", width: "min(900px, 92%)", height: "60%", background: "radial-gradient(50% 50% at 50% 50%, rgba(0,214,155,0.1) 0%, rgba(0,0,0,0) 72%)", filter: "blur(56px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "1560px", margin: "0 auto", padding: "clamp(56px, 7vw, 104px) clamp(24px, 4vw, 64px) clamp(40px, 5vw, 72px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 4vw, 64px)" }}>
          <div style={{ flex: "1 1 340px", minWidth: "0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.86px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                {"El equipo"}
              </span>
              <span style={{ display: "block", width: "48px", height: "1px", background: "rgb(51,65,85)" }} />
            </div>
            <h2 style={{ margin: "26px 0 0", fontSize: "clamp(28px, 3.3vw, 46px)", fontWeight: "400", lineHeight: "1.16", letterSpacing: "-1.15px", color: "#fff", textWrap: "pretty" }}>
              {"Personas detrás"}
              <br />
              <span style={{ color: "rgb(25,193,157)" }}>
                {"del producto."}
              </span>
            </h2>
            <p style={{ margin: "26px 0 0", maxWidth: "420px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(148,163,184)" }}>
              {"Creemos en el trabajo colaborativo y en combinar producto, diseño y tecnología para construir soluciones digitales que generen impacto real."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "clamp(28px, 4vw, 52px)" }}>
              <div style={{ width: "32px", height: "1px", background: "rgb(51,65,85)" }} />
              <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "3px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                {"Producto + Tecnología"}
              </span>
            </div>
          </div>
          <div style={{ flex: "1 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(248px, 1fr))", gap: "clamp(20px, 2.4vw, 32px)" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5", borderRadius: "16px", background: "linear-gradient(170deg, rgba(14,24,22,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: "0", background: "radial-gradient(62% 52% at 42% 40%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 76%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", right: "16px", top: "16px", width: "18px", height: "18px", borderRight: "1px solid rgba(0,223,162,0.35)", borderTop: "1px solid rgba(0,223,162,0.35)" }} />
                <div style={{ position: "absolute", left: "16px", bottom: "16px", width: "18px", height: "18px", borderLeft: "1px solid rgba(0,223,162,0.35)", borderBottom: "1px solid rgba(0,223,162,0.35)" }} />
                <img src="/images/team-luis.png" alt="Luis Cabrera Ortiz" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%" }} loading="lazy" decoding="async" data-view="team_profile_view" data-view-name="Luis Cabrera Ortiz" />
                <span style={{ position: "absolute", left: "16px", top: "15px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "11px", letterSpacing: "1.6px", color: "rgba(0,223,162,0.7)" }}>
                  {"← PERFIL"}
                </span>
              </div>
              <div style={{ marginTop: "22px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.5px", color: "#fff" }}>
                {"Luis Cabrera Ortiz"}
              </div>
              <div style={{ marginTop: "6px", fontSize: "12.5px", fontWeight: "600", letterSpacing: "1.6px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
                {"Tech Lead"}
              </div>
              <p style={{ margin: "16px 0 0", fontSize: "13.5px", fontWeight: "300", lineHeight: "22px", color: "rgb(148,163,184)" }}>
                {"Define la arquitectura y los estándares técnicos de cada producto: lidera el desarrollo, decide el stack y la infraestructura, y garantiza plataformas escalables, seguras y confiables en producción."}
              </p>
              <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.07)", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10.5px", letterSpacing: "1.6px", lineHeight: "19px", color: "rgb(100,116,139)" }}>
                {"TECNOLOGÍA · DESARROLLO · ESCALABILIDAD"}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 5", borderRadius: "16px", background: "linear-gradient(170deg, rgba(14,24,22,0.95) 0%, rgba(4,9,8,0.95) 100%)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: "0", background: "radial-gradient(62% 52% at 58% 40%, rgba(0,223,162,0.08) 0%, rgba(0,0,0,0) 76%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", left: "16px", top: "16px", width: "18px", height: "18px", borderLeft: "1px solid rgba(0,223,162,0.35)", borderTop: "1px solid rgba(0,223,162,0.35)" }} />
                <div style={{ position: "absolute", right: "16px", bottom: "16px", width: "18px", height: "18px", borderRight: "1px solid rgba(0,223,162,0.35)", borderBottom: "1px solid rgba(0,223,162,0.35)" }} />
                <img src="/images/team-jose-c.png" alt="José Carlos Meza" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%" }} loading="lazy" decoding="async" data-view="team_profile_view" data-view-name="José Carlos Meza" />
                <span style={{ position: "absolute", right: "16px", top: "15px", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "11px", letterSpacing: "1.6px", color: "rgba(0,223,162,0.7)" }}>
                  {"PERFIL →"}
                </span>
              </div>
              <div style={{ marginTop: "22px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.5px", color: "#fff" }}>
                {"José Carlos Meza"}
              </div>
              <div style={{ marginTop: "6px", fontSize: "12.5px", fontWeight: "600", letterSpacing: "1.6px", color: "rgb(25,193,157)", textTransform: "uppercase" }}>
                {"Product Lead"}
              </div>
              <p style={{ margin: "16px 0 0", fontSize: "13.5px", fontWeight: "300", lineHeight: "22px", color: "rgb(148,163,184)" }}>
                {"Define la visión y la estrategia de producto de punta a punta: traduce objetivos de negocio en una hoja de ruta priorizada, dirige diseño y experiencia, y sostiene las decisiones con research, métricas e impacto medible."}
              </p>
              <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.07)", fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "10.5px", letterSpacing: "1.6px", lineHeight: "19px", color: "rgb(100,116,139)" }}>
                {"PRODUCTO · DISEÑO · ESTRATEGIA"}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-screen-label="Nosotros — Nuestro enfoque" style={{ padding: "0 0 8px" }}>
        <div style={{ maxWidth: "1744px", margin: "0 auto", padding: "0 clamp(16px, 8vw, 152px)" }}>
          <div style={{ background: "rgba(255,255,255,0.002)", border: "1px solid rgba(2,44,34,0.2)", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}>
            <div style={{ border: "1px solid rgba(2,44,34,0.4)", padding: "clamp(28px, 4vw, 80px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 4vw, 64px)" }}>
              <div style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8px 0" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0", marginBottom: "32px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "500", letterSpacing: "2.4px", lineHeight: "16px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                      {"02   Nuestro enfoque"}
                    </span>
                    <span style={{ display: "block", margin: "0 16px", width: "48px", height: "1px", background: "rgb(51,65,85)" }} />
                  </div>
                  <h2 style={{ margin: "0 0 32px", fontSize: "clamp(28px, 3.3vw, 46px)", fontWeight: "400", lineHeight: "1.18", letterSpacing: "-1.15px", color: "#fff", textWrap: "pretty" }}>
                    {"Una forma de pensar, construir y crecer."}
                  </h2>
                  <p style={{ margin: "0", maxWidth: "420px", fontSize: "16px", fontWeight: "300", lineHeight: "28px", color: "rgb(148,163,184)" }}>
                    {"Creemos en un enfoque integral donde la empatía, los datos y la tecnología se combinan para crear productos digitales que realmente importan."}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "60px 0 0" }}>
                  <div style={{ width: "32px", height: "1px", background: "rgb(51,65,85)" }} />
                  <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "3px", lineHeight: "16px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                    {"Producto · Data · Growth"}
                  </span>
                </div>
              </div>
              <div style={{ flex: "1 1 500px", minWidth: "0", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px" }}>
                  {(v.pillars || []).map((p, $index) => (
                    <React.Fragment key={$index}>
                      <div className="apu-h6" style={{ borderRadius: "16px", background: "rgba(11,19,17,0.9)", boxShadow: "inset 0 0 0 1px rgb(20,40,35)", padding: "28px", display: "flex", flexDirection: "column", gap: "9.5px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgb(13,31,26)", boxShadow: "inset 0 0 0 1px rgb(27,58,50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ display: "block", width: "20px", height: "20px", color: "rgb(0,144,124)" }}>
                              {p?.icon}
                            </span>
                          </span>
                          <span style={{ fontFamily: "'Liberation Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.6px", lineHeight: "16px", color: "rgb(100,116,139)" }}>
                            {p?.num}
                          </span>
                        </div>
                        <div style={{ padding: "10.5px 0", fontSize: "18px", fontWeight: "500", lineHeight: "28px", letterSpacing: "-0.45px", color: "#fff", whiteSpace: "pre-line" }}>
                          {p?.title}
                        </div>
                        <div style={{ fontSize: "13.5px", fontWeight: "300", lineHeight: "21.94px", color: "rgb(148,163,184)" }}>
                          {p?.desc}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "16px 0" }}>
                  <div style={{ maxWidth: "384px", borderLeft: "2px solid rgb(0,144,124)", paddingLeft: "18px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "300", lineHeight: "22.75px", color: "rgb(203,213,225)" }}>
                      {"La tecnología es más poderosa cuando se diseña para las personas."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
