"use client";

import { useState } from "react";

type Step = 1 | 2 | 3;

const WA_ICON = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "white" }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Reserva() {
  const [step, setStep] = useState<Step>(1);
  const [artist, setArtist] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const pillStyle = (n: Step) => ({
    fontSize: 10, letterSpacing: "2px", textTransform: "uppercase" as const,
    padding: "10px 20px", borderRight: n < 3 ? "1px solid var(--line)" : "none",
    transition: "all 0.2s",
    background: step === n ? "var(--ink)" : step > n ? "var(--bg-warm)" : "transparent",
    color: step === n ? "var(--bg)" : "var(--ink-light)",
  });

  function handleSubmit() {
    setSubmitting(true);
    setTimeout(() => {
      alert("¡Consulta recibida! Te contactamos en menos de 24hs para coordinar la seña y confirmar tu turno.");
      setSubmitting(false);
    }, 1200);
  }

  return (
    <div id="reserva" style={{ borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        {/* Section header */}
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          padding: "80px 0 48px", borderBottom: "1px solid var(--line)"
        }}>
          <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: "var(--ink-light)", fontStyle: "italic" }}>
            <em>04</em>
          </span>
          <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-mid)" }}>
            Reservar turno
          </span>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {/* Left */}
          <div style={{ borderRight: "1px solid var(--line)", padding: "80px 60px 80px 0" }}>
            <p style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 16 }}>
              Por qué reservar ahora
            </p>
            <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(36px, 3.5vw, 54px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 24 }}>
              Cupos<br /><em style={{ fontStyle: "italic", color: "var(--ink-mid)" }}>limitados</em>
            </h2>
            <p style={{ fontSize: 14, color: "var(--ink-mid)", lineHeight: 1.8, marginBottom: 48, fontWeight: 300 }}>
              Completá el formulario y te contactamos en menos de 24 horas para coordinar todos los detalles de tu sesión.
            </p>

            {[
              { label: "Consulta sin costo", desc: "Analizamos tu idea antes de confirmar. Sin compromiso." },
              { label: "Diseño exclusivo", desc: "Boceto único para vos. Sin arte de catálogo." },
              { label: "Quilmes, Buenos Aires", desc: "Te pasamos la dirección exacta al confirmar el turno." },
            ].map(row => (
              <div key={row.label} style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "20px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: "var(--ink-light)", fontStyle: "italic", minWidth: 24, paddingTop: 2 }}>
                  <em>—</em>
                </span>
                <div>
                  <strong style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)", display: "block", marginBottom: 2 }}>{row.label}</strong>
                  <span style={{ fontSize: 13, color: "var(--ink-mid)", fontWeight: 300 }}>{row.desc}</span>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 48, padding: 28, border: "1px solid var(--line)", background: "var(--bg-warm)" }}>
              <small style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", display: "block", marginBottom: 12 }}>
                Seña para confirmar turno
              </small>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 44, fontWeight: 400, color: "var(--ink)", lineHeight: 1, marginBottom: 8 }}>
                $15.000 ARS
              </div>
              <p style={{ fontSize: 13, color: "var(--ink-mid)", lineHeight: 1.7, fontWeight: 300 }}>
                Se descuenta del precio final. Mercado Pago, transferencia o efectivo.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ padding: "80px 0 80px 60px" }}>
            {/* Step pills */}
            <div style={{ display: "inline-flex", border: "1px solid var(--line)", marginBottom: 40 }}>
              {([1, 2, 3] as Step[]).map(n => (
                <span key={n} style={pillStyle(n)}>
                  {n === 1 ? "01 · Datos" : n === 2 ? "02 · Tatuaje" : "03 · Artista"}
                </span>
              ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>Nombre completo</label>
                  <input className="form-input" type="text" placeholder="Tu nombre" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>WhatsApp</label>
                    <input className="form-input" type="tel" placeholder="+54 9 11..." />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>Email</label>
                    <input className="form-input" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                  <button onClick={() => setStep(2)} style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--bg)", background: "var(--ink)", border: "none", padding: "14px 28px", cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    Siguiente →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>Idea del tatuaje</label>
                  <textarea className="form-input" placeholder="Describí tu idea con el mayor detalle posible..." />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>Estilo</label>
                    <select className="form-input">
                      <option value="">Seleccioná...</option>
                      <option>Japonés tradicional</option>
                      <option>Black &amp; grey</option>
                      <option>Tradicional</option>
                      <option>Línea fina</option>
                      <option>No sé / me asesoran</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>Tamaño</label>
                    <select className="form-input">
                      <option value="">Seleccioná...</option>
                      <option>Pequeño (hasta 5cm)</option>
                      <option>Mediano (5–15cm)</option>
                      <option>Grande (15–25cm)</option>
                      <option>Extra grande / manga</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>Zona del cuerpo</label>
                    <input className="form-input" type="text" placeholder="Brazo, espalda, pierna..." />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>Presupuesto estimado</label>
                    <select className="form-input">
                      <option value="">Seleccioná...</option>
                      <option>Menos de $50.000</option>
                      <option>$50.000 – $100.000</option>
                      <option>$100.000 – $200.000</option>
                      <option>Más de $200.000</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                  <button onClick={() => setStep(1)} style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-light)")}
                  >← Atrás</button>
                  <button onClick={() => setStep(3)} style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--bg)", background: "var(--ink)", border: "none", padding: "14px 28px", cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >Siguiente →</button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 8 }}>¿Con quién querés tatuar?</label>
                  <select className="form-input" value={artist} onChange={e => setArtist(e.target.value)}>
                    <option value="">Seleccioná...</option>
                    <option value="roly">Roly — consulta previa</option>
                    <option value="otro">Cualquier artista disponible</option>
                  </select>
                </div>

                {artist === "roly" && (
                  <div style={{ marginTop: 24, padding: 24, border: "1px solid var(--line)", background: "var(--bg-warm)" }}>
                    <h4 style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, fontWeight: 400, marginBottom: 8 }}>
                      Reserva con Roly
                    </h4>
                    <p style={{ fontSize: 13, color: "var(--ink-mid)", lineHeight: 1.7, marginBottom: 20, fontWeight: 300 }}>
                      Roly trabaja por consulta previa para entender tu proyecto al 100%. Te contactamos en menos de 24hs por WhatsApp para coordinar.
                    </p>
                    <a href="https://wa.me/5491112345678?text=Hola!%20Quiero%20reservar%20con%20Roly%20en%20Ryugallery" target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "white", background: "#25D366", padding: "12px 20px", textDecoration: "none" }}>
                      {WA_ICON}
                      Contactar por WhatsApp
                    </a>
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                  <button onClick={() => setStep(2)} style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-light)")}
                  >← Atrás</button>
                  {artist === "otro" && (
                    <button onClick={handleSubmit} disabled={submitting} style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--bg)", background: "var(--ink)", border: "none", padding: "14px 28px", cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      {submitting ? "Enviando..." : "Confirmar y pagar seña →"}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
