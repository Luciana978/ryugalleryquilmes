const items = [
  "Japonés tradicional", "Black & grey", "Línea fina",
  "Tradicional americano", "Ryugallery Quilmes", "Arte permanente",
  "Japonés tradicional", "Black & grey", "Línea fina",
  "Tradicional americano", "Ryugallery Quilmes", "Arte permanente",
];

export default function MarqueeBar() {
  return (
    <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", overflow: "hidden", padding: "14px 0", background: "var(--bg)" }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{
            fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase",
            color: "var(--ink-mid)", padding: "0 40px",
            display: "inline-flex", alignItems: "center", gap: 16
          }}>
            {item}
            <span style={{ width: 4, height: 4, background: "var(--ink-light)", borderRadius: "50%", display: "inline-block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
