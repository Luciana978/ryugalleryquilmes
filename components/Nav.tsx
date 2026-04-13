"use client"
export default function Nav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "var(--bg)", borderBottom: "1px solid var(--line)"
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56, maxWidth: 1400, margin: "0 auto", padding: "0 40px"
      }}>
        <a href="/" style={{
          fontFamily: "'EB Garamond', serif", fontSize: 19, fontWeight: 400, letterSpacing: "0.5px"
        }}>
          Ryugallery
          <sup style={{
            fontFamily: "var(--font-inter, Inter, sans-serif)", fontSize: 9,
            fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase",
            color: "var(--ink-light)", verticalAlign: "super", marginLeft: 4
          }}>
            Studio
          </sup>
        </a>

        <ul style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none" }}>
          {[
            { href: "#portfolio", label: "Portfolio" },
            { href: "#artista", label: "Estudio" },
            { href: "#proceso", label: "Proceso" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a href={href} style={{
                fontSize: 11, fontWeight: 400, letterSpacing: "1.5px",
                textTransform: "uppercase", color: "var(--ink-mid)", transition: "color 0.2s"
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-mid)")}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#reserva" style={{
              fontSize: 11, fontWeight: 400, letterSpacing: "1.5px",
              textTransform: "uppercase", color: "var(--ink)",
              borderBottom: "1px solid var(--ink)", paddingBottom: 1
            }}>
              Reservar
            </a>
          </li>
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--ink-mid)" }}>
          <a href="https://instagram.com/ryugallery" target="_blank" rel="noopener noreferrer"
            style={{ transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-mid)")}
          >
            @ryugallery
          </a>
        </div>
      </div>
    </nav>
  );
}
