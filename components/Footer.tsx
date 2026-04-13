"use client"
export default function Footer() {
  return (
    <>
      <footer style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 0, borderBottom: "1px solid var(--line)" }}>
          {/* Brand */}
          <div style={{ padding: "56px 40px 56px 0", borderRight: "1px solid var(--line)" }}>
            <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 28, fontWeight: 400, color: "var(--ink)", marginBottom: 12 }}>
              Ryugallery
            </div>
            <p style={{ fontSize: 13, color: "var(--ink-mid)", lineHeight: 1.75, maxWidth: 260, fontWeight: 300 }}>
              Estudio de tatuajes en Quilmes, Buenos Aires. Arte permanente con identidad propia.
            </p>
          </div>

          {/* Nav */}
          <div style={{ padding: "56px 40px", borderRight: "1px solid var(--line)" }}>
            <h5 style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 24 }}>Navegación</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[["#portfolio", "Portfolio"], ["#artista", "Estudio"], ["#proceso", "Proceso"], ["#reserva", "Reservar"]].map(([href, label]) => (
                <li key={href}>
                  <a href={href} style={{ fontSize: 13, color: "var(--ink-mid)", fontWeight: 300, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-mid)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ padding: "56px 40px", borderRight: "1px solid var(--line)" }}>
            <h5 style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 24 }}>Contacto</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[["#", "Quilmes, Buenos Aires"], ["https://wa.me/5491112345678", "WhatsApp"], ["https://instagram.com/ryugallery", "@ryugallery"]].map(([href, label]) => (
                <li key={label}>
                  <a href={href} style={{ fontSize: 13, color: "var(--ink-mid)", fontWeight: 300, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-mid)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Styles */}
          <div style={{ padding: "56px 0 56px 40px" }}>
            <h5 style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: 24 }}>Estilos</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["Japonés tradicional", "Black & grey", "Tradicional", "Línea fina"].map(s => (
                <li key={s}>
                  <a href="#portfolio" style={{ fontSize: 13, color: "var(--ink-mid)", fontWeight: 300, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-mid)")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 11, color: "var(--ink-light)", letterSpacing: "0.5px" }}>
            © 2025 Ryugallery Quilmes. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: 11, color: "var(--ink-light)", letterSpacing: "0.5px" }}>
            Quilmes · Buenos Aires · Argentina
          </p>
        </div>
      </footer>
    </>
  );
}
