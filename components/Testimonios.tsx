const testimonials = [
  { quote: "Roly es un artista increíble. Me hice una manga japonesa completa y superó todas mis expectativas.", author: "Matías L.", style: "Manga japonesa completa" },
  { quote: "El ambiente del estudio es increíble y el resultado fue exactamente lo que quería. 100% recomendable.", author: "Sofía G.", style: "Black & grey realismo" },
  { quote: "Llevo tres tatuajes con Roly y pienso seguir. Cada uno es una obra de arte. La calidad no tiene comparación.", author: "Franco P.", style: "Japonés tradicional" },
];

export default function Testimonios() {
  return (
    <div style={{ borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "80px 0 48px", borderBottom: "1px solid var(--line)" }}>
          <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: "var(--ink-light)", fontStyle: "italic" }}>
            <em>05</em>
          </span>
          <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-mid)" }}>
            Lo que dicen
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ padding: "48px 40px", borderRight: i < testimonials.length - 1 ? "1px solid var(--line)" : "none" }}>
              <div style={{ fontSize: 11, letterSpacing: "3px", color: "var(--ink-light)", marginBottom: 20 }}>★ ★ ★ ★ ★</div>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 18, fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "var(--ink)", marginBottom: 24 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--ink-light)" }}>{t.author}</div>
              <div style={{ fontSize: 11, color: "var(--ink-light)", marginTop: 2 }}>{t.style}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
