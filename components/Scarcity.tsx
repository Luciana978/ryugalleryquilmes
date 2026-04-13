"use client"
export default function Scarcity() {
  return (
    <div style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-warm)" }}>
      <div style={{
        maxWidth: 1400, margin: "0 auto", padding: "48px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 40, flexWrap: "wrap"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 56, fontWeight: 400, lineHeight: 1, color: "var(--ink)" }}>
            4
          </span>
          <div>
            <small style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", display: "block", marginBottom: 4 }}>
              Cupos restantes
            </small>
            <p style={{ fontSize: 14, color: "var(--ink-mid)" }}>
              Agenda de abril casi completa
            </p>
          </div>
        </div>

        <div style={{ flex: 1, maxWidth: 280 }}>
          <div style={{ height: 1, background: "var(--line)", position: "relative", marginBottom: 8 }}>
            <div className="bar-fill-anim" style={{ position: "absolute", top: 0, left: 0, height: 1, width: "85%", background: "var(--ink)" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, letterSpacing: "1px", color: "var(--ink-light)" }}>
            <span>Disponible</span>
            <span>85% ocupado</span>
          </div>
        </div>

        <a href="#reserva" style={{
          fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
          color: "var(--ink)", borderBottom: "1px solid var(--ink)",
          paddingBottom: 2, transition: "opacity 0.2s"
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Asegurar mi lugar →
        </a>
      </div>
    </div>
  );
}
