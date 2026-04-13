"use client";

const STAFF = [
  {
    nombre: "Iván",
    rol: "Tattoo Artist",
    experiencia: "8 años de experiencia",
    bio: "Formado en el estudio desde sus inicios, Iván lleva el detalle a otro nivel. Su trazo limpio y su sensibilidad para la composición lo convierten en el referente del estudio para trabajos de línea fina y geometría.",
    estilos: ["Línea fina", "Geométrico", "Minimalista"],
    nota: "Iván trabaja con citas semanales — consultá disponibilidad con anticipación.",
  },
  {
    nombre: "Seba",
    rol: "Tattoo Artist",
    experiencia: "6 años de experiencia",
    bio: "Con influencias del arte urbano y la ilustración, Seba trae frescura y versatilidad al estudio. Domina el color con una paleta propia que pocas veces se ve en la escena local.",
    estilos: ["Color", "Neo tradicional", "Ilustración"],
    nota: "Seba tiene agenda abierta — podés consultar por turno en la semana.",
  },
];

export default function Staff() {
  return (
    <div id="staff" style={{ borderBottom: "1px solid var(--line)" }}>
      {/* Section header */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            padding: "80px 0 48px",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <span
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 13,
              color: "var(--ink-light)",
              fontStyle: "italic",
            }}
          >
            <em>02</em>
          </span>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--ink-mid)",
            }}
          >
            El equipo
          </span>
          <a
            href="#reserva"
            style={{
              fontSize: 11,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--ink-mid)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ink)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--ink-mid)")
            }
          >
            Reservar →
          </a>
        </div>
      </div>

      {/* Staff cards */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {STAFF.map((artist, i) => (
            <div
              key={artist.nombre}
              style={{
                borderRight:
                  i < STAFF.length - 1 ? "1px solid var(--line)" : "none",
                borderBottom: "1px solid var(--line)",
              }}
            >
              {/* Photo placeholder */}
              <div
                style={{
                  background: "var(--bg-warm)",
                  aspectRatio: "4/3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid var(--line)",
                  fontSize: 11,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--ink-light)",
                }}
              >
                [ foto de {artist.nombre} ]
              </div>

              {/* Info */}
              <div style={{ padding: "48px 48px 56px" }}>
                <p
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: 11,
                    color: "var(--ink-light)",
                    fontStyle: "italic",
                    marginBottom: 16,
                  }}
                >
                  <em>{artist.experiencia}</em>
                </p>

                <h3
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "clamp(40px, 4vw, 60px)",
                    fontWeight: 400,
                    lineHeight: 1.0,
                    marginBottom: 6,
                  }}
                >
                  {artist.nombre}
                </h3>

                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--ink-light)",
                    marginBottom: 32,
                  }}
                >
                  {artist.rol}
                </p>

                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-mid)",
                    lineHeight: 1.85,
                    maxWidth: 380,
                    marginBottom: 32,
                    fontWeight: 300,
                  }}
                >
                  {artist.bio}
                </p>

                {/* Style tags */}
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 40,
                  }}
                >
                  {artist.estilos.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 10,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "var(--ink-mid)",
                        border: "1px solid var(--line)",
                        padding: "6px 14px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#reserva"
                  style={{
                    fontSize: 11,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    borderBottom: "1px solid var(--ink)",
                    paddingBottom: 2,
                    transition: "opacity 0.2s",
                    display: "inline-block",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "0.5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = "1")
                  }
                >
                  Consultar con {artist.nombre}
                </a>

                {/* Footnote */}
                <p
                  style={{
                    paddingTop: 28,
                    borderTop: "1px solid var(--line)",
                    marginTop: 32,
                    fontSize: 13,
                    color: "var(--ink-light)",
                    fontStyle: "italic",
                    fontFamily: "'EB Garamond', serif",
                    lineHeight: 1.6,
                  }}
                >
                  {artist.nota}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
