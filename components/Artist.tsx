"use client"
export default function Artist() {
  return (
    <div id="artista" style={{ borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          padding: "80px 0 48px", borderBottom: "1px solid var(--line)"
        }}>
          <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: "var(--ink-light)", fontStyle: "italic" }}>
            <em>01</em>
          </span>
          <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-mid)" }}>
            El artista
          </span>
          <a href="#reserva" style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--ink-mid)", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-mid)")}
          >
            Reservar →
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "80vh" }}>
          {/* Image col */}
          <div style={{
            borderRight: "1px solid var(--line)", background: "var(--bg-warm)",
            position: "relative", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <div style={{ width: "100%", height: "100%", minHeight: 500, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, letterSpacing: "2px", color: "var(--ink-light)", textTransform: "uppercase" }}>
              [ foto de Roly ]
            </div>
          </div>

          {/* Text col */}
          <div style={{ padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 11, color: "var(--ink-light)", fontStyle: "italic", marginBottom: 32 }}>
              <em>Fundador · Artista principal</em>
            </p>
            <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 400, lineHeight: 1.0, marginBottom: 8 }}>
              Roly
            </h2>
            <p style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 40 }}>
              Head Tattoo Artist
            </p>
            <p style={{ fontSize: 15, color: "var(--ink-mid)", lineHeight: 1.8, maxWidth: 420, marginBottom: 48, fontWeight: 300 }}>
              Más de diez años convirtiendo ideas en arte permanente.
              Especializado en el tradicional japonés y black &amp; grey de alta precisión.
              Cada pieza nace de una conversación, no de un catálogo.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 48 }}>
              {["Japonés", "Black & grey", "Tradicional"].map(tag => (
                <span key={tag} style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--ink-mid)", border: "1px solid var(--line)", padding: "6px 14px" }}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="#reserva" style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink)", borderBottom: "1px solid var(--ink)", paddingBottom: 2, transition: "opacity 0.2s", display: "inline-block", width: "fit-content" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Consultar con Roly
            </a>
            <p style={{ paddingTop: 32, borderTop: "1px solid var(--line)", marginTop: 32, fontSize: 13, color: "var(--ink-light)", fontStyle: "italic", fontFamily: "'EB Garamond', serif", lineHeight: 1.6 }}>
              Roly no toma turnos directos por la web —<br />
              trabaja por consulta previa para entender tu proyecto al 100%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
