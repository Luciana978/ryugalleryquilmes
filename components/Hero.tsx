"use client"
export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: 56
    }}>
      {/* Left */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "80px 60px 80px 40px", borderRight: "1px solid var(--line)"
      }}>
        <p style={{
          fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase",
          color: "var(--ink-light)", marginBottom: 40
        }}>
          Quilmes · Buenos Aires · Desde 2014
        </p>

        <h1 style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: "clamp(52px, 6vw, 88px)", fontWeight: 400,
          lineHeight: 1.0, color: "var(--ink)", marginBottom: 40
        }}>
          Arte que<br />
          <em style={{ fontStyle: "italic", color: "var(--ink-mid)" }}>permanece</em>
        </h1>

        <p style={{
          fontSize: 15, color: "var(--ink-mid)", maxWidth: 380,
          lineHeight: 1.75, marginBottom: 56, fontWeight: 300
        }}>
          Estudio de tatuajes en Quilmes. Especialistas en japonés tradicional,
          black &amp; grey y línea fina. Cada pieza, única.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#reserva" style={{
            fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
            color: "var(--ink)", borderBottom: "1px solid var(--ink)",
            paddingBottom: 2, transition: "opacity 0.2s"
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Reservar turno
          </a>
          <a href="#portfolio" style={{
            fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
            color: "var(--ink-mid)", transition: "color 0.2s"
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-mid)")}
          >
            Ver portfolio →
          </a>
        </div>

        {/* Stats */}
        <div style={{
          marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--line)",
          display: "flex", gap: 48, flexWrap: "wrap"
        }}>
          {[
            { value: "+500", label: "Tatuajes" },
            { value: "10+", label: "Años" },
            { value: "4.9", label: "Calificación" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 40, fontWeight: 400, lineHeight: 1 }}>
                {value}
              </div>
              <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-light)", marginTop: 6 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div style={{
        background: "var(--bg-warm)", position: "relative",
        overflow: "hidden", display: "flex", alignItems: "flex-end"
      }}>
        <div style={{
          width: "100%", height: "100%", minHeight: 600,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
          color: "var(--ink-light)"
        }}>
          [ imagen principal ]
        </div>
        <p style={{ position: "absolute", bottom: 32, left: 32, fontSize: 11, color: "var(--ink-light)", letterSpacing: "1px" }}>
          Roly — Japonés tradicional, 2024
        </p>
        <p style={{
          position: "absolute", bottom: 32, right: 32,
          fontFamily: "'EB Garamond', serif", fontSize: 13,
          color: "var(--ink-light)", fontStyle: "italic"
        }}>
          <em>01 / 06</em>
        </p>
      </div>
    </section>
  );
}
