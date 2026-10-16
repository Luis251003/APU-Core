import React from 'react';
import { onActivate } from '../lib/a11y.js';
import FormStatus from '../components/FormStatus.jsx';

export default function Contacto({ v }) {
  return (
    <>
    <main data-screen-label="Contacto">
      <section style={{ position: "relative", overflow: "hidden", background: "#000" }}>
        <div style={{ position: "absolute", right: "-280px", top: "-340px", width: "880px", height: "880px", borderRadius: "9999px", background: "radial-gradient(circle at 46% 58%, rgba(0,112,90,0.28) 0%, rgba(0,78,62,0.15) 34%, rgba(0,44,35,0.06) 58%, rgba(0,0,0,0) 80%)", filter: "blur(24px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "-220px", bottom: "-300px", width: "620px", height: "620px", borderRadius: "9999px", background: "radial-gradient(circle at 60% 40%, rgba(0,90,72,0.4), rgba(0,0,0,0) 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "1560px", margin: "0 auto", padding: "clamp(28px, 3.4vw, 64px) clamp(24px, 4vw, 64px) 40px", display: "flex", flexWrap: "wrap", gap: "48px 0" }}>
          <div style={{ flex: "1 1 540px", minWidth: "0", paddingRight: "clamp(0px, 3.4vw, 72px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "clamp(18px, 2vw, 30px)" }}>
              <span style={{ fontSize: "12px", fontWeight: "500", letterSpacing: "3.2px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                {"Hablemos de tu proyecto"}
              </span>
              <div style={{ width: "92px", height: "1px", background: "rgb(0,144,124)" }} />
            </div>
            <h1 style={{ margin: "0", fontSize: "clamp(32px, 3.9vw, 54px)", fontWeight: "700", lineHeight: "1.14", letterSpacing: "-1.6px", color: "#fff", textWrap: "pretty" }}>
              {"Construyamos juntos"}
              <br />
              {"la próxima"}{" "}
              <span style={{ color: "rgb(25,193,157)" }}>
                {"gran solución."}
              </span>
            </h1>
            <p style={{ margin: "24px 0 0", maxWidth: "620px", fontSize: "17px", fontWeight: "300", lineHeight: "30px", color: "rgb(203,213,225)" }}>
              {"Cuéntanos qué necesitas. En APU CORE combinamos diseño, desarrollo y datos para convertir tus ideas en resultados reales."}
            </p>
            <div style={{ marginTop: "40px", borderRadius: "16px", padding: "32px", background: "rgba(6,16,14,0.7)", boxShadow: "inset 0 0 0 1px rgb(20,48,41)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "10px", fontSize: "13px", fontWeight: "500", color: "rgb(226,232,240)" }}>
                    {"Nombre completo"}
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 16px", borderRadius: "10px", background: "rgba(0,0,0,0.45)", boxShadow: "inset 0 0 0 1px rgb(24,54,46)" }}>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" style={{ flexShrink: "0" }}>
                      <circle cx="10" cy="6.6" r="3.1" stroke="rgb(100,116,139)" strokeWidth="1.3" />
                      <path d="M3.8 16.6c.6-3 3.1-4.6 6.2-4.6s5.6 1.6 6.2 4.6" stroke="rgb(100,116,139)" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    <input type="text" placeholder="Escribe tu nombre" value={v.nombre} onChange={v.onNombre} style={{ flex: "1", minWidth: "0", background: "transparent", border: "0", outline: "none", color: "#fff", fontSize: "15px" }} name="nombre" id={"f-nombre"} aria-label="Nombre" required aria-invalid={!!v.errors?.nombre} onFocus={v.onFormStart} autoComplete="name" />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: "10px", fontSize: "13px", fontWeight: "500", color: "rgb(226,232,240)" }}>
                    {"Correo electrónico"}
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 16px", borderRadius: "10px", background: "rgba(0,0,0,0.45)", boxShadow: "inset 0 0 0 1px rgb(24,54,46)" }}>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" style={{ flexShrink: "0" }}>
                      <rect x="2.4" y="4.4" width="15.2" height="11.2" rx="2" stroke="rgb(100,116,139)" strokeWidth="1.3" />
                      <path d="m3.2 5.6 6.8 5 6.8-5" stroke="rgb(100,116,139)" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                    <input type="email" placeholder="tucorreo@ejemplo.com" value={v.correo} onChange={v.onCorreo} style={{ flex: "1", minWidth: "0", background: "transparent", border: "0", outline: "none", color: "#fff", fontSize: "15px" }} name="correo" id={"f-correo"} aria-label="Correo electrónico" required aria-invalid={!!v.errors?.correo} onFocus={v.onFormStart} autoComplete="email" />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "26px" }}>
                <label style={{ display: "block", marginBottom: "10px", fontSize: "13px", fontWeight: "500", color: "rgb(226,232,240)" }}>
                  {"Cuéntanos sobre tu proyecto"}
                </label>
                <div style={{ display: "flex", gap: "12px", padding: "14px 16px", borderRadius: "10px", background: "rgba(0,0,0,0.45)", boxShadow: "inset 0 0 0 1px rgb(24,54,46)" }}>
                  <svg width="17" height="17" viewBox="0 0 20 20" fill="none" style={{ flexShrink: "0", marginTop: "2px" }}>
                    <path d="M13.4 3.2 16.8 6.6 7.4 16H4v-3.4L13.4 3.2Z" stroke="rgb(100,116,139)" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                  <textarea rows="4" placeholder="Cuéntanos un poco más..." value={v.mensaje} onChange={v.onMensaje} style={{ flex: "1", minWidth: "0", background: "transparent", border: "0", outline: "none", resize: "vertical", color: "#fff", fontSize: "15px", lineHeight: "24px" }} name="mensaje" id={"f-mensaje"} aria-label="Mensaje" required aria-invalid={!!v.errors?.mensaje} onFocus={v.onFormStart} />
                </div>
              </div>
              <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between" }}>
                <div className="apu-h32" onClick={v.enviar} style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "16px 28px", borderRadius: "10px", cursor: "pointer", background: "linear-gradient(135deg, rgb(0,168,140), rgb(25,193,157))", boxShadow: "0 0 28px rgba(0,223,162,0.28)" }} role="button" tabIndex={0} onKeyDown={onActivate} data-cta="enviar" aria-disabled={v.sending}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#041310" }}>
                    {v.submitLabel}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <path d="M2.3 7h9.4M8.2 3.5 11.7 7l-3.5 3.5" stroke="#041310" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <rect x="4.4" y="8.6" width="11.2" height="8" rx="1.8" stroke="rgb(100,116,139)" strokeWidth="1.3" />
                    <path d="M7 8.6V6.4a3 3 0 0 1 6 0v2.2" stroke="rgb(100,116,139)" strokeWidth="1.3" />
                  </svg>
                  <span style={{ fontSize: "12.5px", fontWeight: "300", lineHeight: "19px", color: "rgb(148,163,184)" }}>
                    {"Tu información está segura"}
                    <br />
                    {"con nosotros."}
                  </span>
                </div>
              </div>
              <FormStatus v={v} />
            </div>
          </div>
          <div style={{ flex: "1 1 340px", minWidth: "0", paddingLeft: "clamp(0px, 3.4vw, 72px)", boxShadow: "inset 1px 0 0 rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start", gap: "16px", marginBottom: "56px" }}>
              <div style={{ width: "56px", height: "1px", background: "rgb(0,144,124)", marginTop: "9px" }} />
              <div style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.6px", lineHeight: "19px", color: "rgb(148,163,184)", textTransform: "uppercase", textAlign: "right" }}>
                {"Ideas"}
                <br />
                {"Productos"}
                <br />
                {"Resultados"}
              </div>
            </div>
            <h2 style={{ margin: "0", fontSize: "clamp(26px, 2.6vw, 34px)", fontWeight: "400", lineHeight: "1.2", letterSpacing: "-0.9px", color: "#fff" }}>
              {"De una idea"}
              <br />
              {"a un"}{" "}
              <span style={{ color: "rgb(25,193,157)" }}>
                {"impacto real."}
              </span>
            </h2>
            <div style={{ position: "relative", marginTop: "40px" }}>
              <svg viewBox="0 0 460 300" preserveAspectRatio="none" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "300px", overflow: "visible" }}>
                <path d="M40 258 C 120 250 130 200 196 178 C 256 158 268 108 330 88 C 380 72 410 48 434 26" fill="none" stroke="rgba(25,193,157,0.75)" strokeWidth="1.6" style={{ filter: "drop-shadow(0 0 6px rgba(0,223,162,0.45))" }} />
                <path d="M424 22 440 18 436 34" fill="none" stroke="rgba(25,193,157,0.9)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ position: "relative", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ flex: "1 1 0", minWidth: "0", paddingTop: "200px" }}>
                  <span style={{ width: "66px", height: "66px", borderRadius: "9999px", background: "rgba(0,0,0,0.6)", boxShadow: "inset 0 0 0 1.4px rgba(25,193,157,0.7), 0 0 20px rgba(0,223,162,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="26" height="26" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2.6a5 5 0 0 0-3 9v1.6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V11.6a5 5 0 0 0-3-9Z" stroke="rgb(25,193,157)" strokeWidth="1.2" strokeLinejoin="round" />
                      <path d="M8.4 17.2h3.2" stroke="rgb(25,193,157)" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div style={{ marginTop: "14px", fontSize: "12px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                    {"IDEA"}
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", fontWeight: "300", lineHeight: "21px", color: "rgb(148,163,184)" }}>
                    {"Tú nos cuentas"}
                    <br />
                    {"tu visión"}
                  </div>
                </div>
                <div style={{ flex: "1 1 0", minWidth: "0", paddingTop: "116px" }}>
                  <span style={{ width: "62px", height: "62px", borderRadius: "9999px", background: "rgba(0,0,0,0.6)", boxShadow: "inset 0 0 0 1.4px rgba(25,193,157,0.7), 0 0 20px rgba(0,223,162,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="26" height="26" viewBox="0 0 20 20" fill="none">
                      <circle cx="7.2" cy="7" r="2.3" stroke="rgb(25,193,157)" strokeWidth="1.2" />
                      <circle cx="13.2" cy="7.8" r="1.8" stroke="rgb(25,193,157)" strokeWidth="1.2" />
                      <path d="M2.8 15.2c.5-2.3 2.3-3.4 4.4-3.4s3.9 1.1 4.4 3.4M12.9 11.9c1.9.1 3.3 1.2 3.7 3.3" stroke="rgb(25,193,157)" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div style={{ marginTop: "14px", fontSize: "12px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                    {"SOLUCIÓN"}
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", fontWeight: "300", lineHeight: "21px", color: "rgb(148,163,184)" }}>
                    {"La hacemos"}
                    <br />
                    {"realidad juntos"}
                  </div>
                </div>
                <div style={{ flex: "1.15 1 0", minWidth: "0", paddingTop: "24px" }}>
                  <span style={{ width: "62px", height: "62px", borderRadius: "9999px", background: "rgba(0,0,0,0.6)", boxShadow: "inset 0 0 0 1.4px rgba(25,193,157,0.7), 0 0 20px rgba(0,223,162,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                      <rect x="3.6" y="11" width="3.2" height="5.4" rx="1" fill="rgb(25,193,157)" />
                      <rect x="8.4" y="7.4" width="3.2" height="9" rx="1" fill="rgb(25,193,157)" />
                      <rect x="13.2" y="3.6" width="3.2" height="12.8" rx="1" fill="rgb(25,193,157)" />
                    </svg>
                  </span>
                  <div style={{ marginTop: "14px", fontSize: "12px", fontWeight: "700", letterSpacing: "1.2px", color: "#fff" }}>
                    {"IMPACTO"}
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", fontWeight: "300", lineHeight: "21px", color: "rgb(148,163,184)" }}>
                    {"Productos digitales"}
                    <br />
                    {"que generan valor"}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "16px", width: "128px", height: "1px", background: "rgba(255,255,255,0.14)" }} />
            <div style={{ marginTop: "28px", fontSize: "17px", fontWeight: "400", color: "#fff" }}>
              {"¿Prefieres escribirnos directamente?"}
            </div>
            <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
              <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4.4" width="16" height="11.6" rx="2" stroke="rgb(25,193,157)" strokeWidth="1.3" />
                <path d="m2.8 5.6 7.2 5.4 7.2-5.4" stroke="rgb(25,193,157)" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
              <a className="apu-h33" href="mailto:apucore.peru@gmail.com" style={{ fontSize: "20px", fontWeight: "400", color: "#fff" }}>
                {"apucore.peru@gmail.com"}
              </a>
            </div>
            <div style={{ marginTop: "34px", display: "flex", alignItems: "center", gap: "22px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="rgb(148,163,184)" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="rgb(148,163,184)" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="rgb(148,163,184)" />
              </svg>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M14.2 3h-2.6v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .6 0 .9.1V10a5.4 5.4 0 1 0 4.3 5.3V8.6a5.4 5.4 0 0 0 4 1.6V7.6a3.6 3.6 0 0 1-4-3.4V3Z" fill="rgb(148,163,184)" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3.4 3h5.2l4.4 6 5-6h2.6l-6.4 7.6L21 21h-5.2l-4.6-6.3L5.7 21H3l6.8-8L3.4 3Z" fill="rgb(148,163,184)" />
              </svg>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="rgb(148,163,184)" strokeWidth="1.6" />
                <path d="M7.4 10v7M7.4 7.2v.1M11.6 17v-3.8a2 2 0 0 1 4 0V17M11.6 10v7" stroke="rgb(148,163,184)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="2.4" y="5.6" width="19.2" height="12.8" rx="3.6" stroke="rgb(148,163,184)" strokeWidth="1.6" />
                <path d="m10.4 9.2 5 2.8-5 2.8V9.2Z" fill="rgb(148,163,184)" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: "1560px", margin: "0 auto", padding: "40px clamp(24px, 4vw, 64px) 56px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "28px", height: "1.5px", background: "rgb(25,193,157)" }} />
            <span style={{ fontSize: "11px", fontWeight: "500", letterSpacing: "2.4px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
              {"Lima, Perú  ·  Producto digital  ·  Data  ·  Growth"}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "28px", height: "1.5px", background: "rgb(25,193,157)" }} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "-0.2px", color: "#fff" }}>
                {"APU"}{" "}
                <span style={{ color: "rgb(25,193,157)" }}>
                  {"CORE"}
                </span>
              </div>
              <div style={{ marginTop: "3px", fontSize: "10px", fontWeight: "500", letterSpacing: "1.6px", color: "rgb(148,163,184)", textTransform: "uppercase" }}>
                {"Ideas de hoy. Un mejor mañana."}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
