"use client"
export default function CTA() {
  return (
    <div style={{ borderBottom: "1px solid var(--line)", background: "var(--ink)" }}>
      <div style={{
        maxWidth: 1400, margin: "0 auto", padding: "100px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 40, flexWrap: "wrap"
      }}>
        <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(40px, 4.5vw, 64px)", fontWeight: 400, color: "var(--bg)", lineHeight: 1.1 }}>
          Tu próximo tatuaje<br />
          <em style={{ fontStyle: "italic", color: "var(--ink-light)" }}>empieza hoy</em>
        </h2>
        <a href="#reserva" style={{
          fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
          color: "var(--ink)", background: "var(--bg)", padding: "16px 32px",
          display: "inline-block", whiteSpace: "nowrap", transition: "opacity 0.2s"
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Reservar mi turno
        </a>
      </div>
    </div>
  );
}
