const steps = [
  {
    n: "01",
    title: "Completá el formulario",
    desc: "Contanos tu idea, el estilo y la zona del cuerpo. Cuanto más detalle, mejor el resultado.",
    deposit: null,
  },
  {
    n: "02",
    title: "Te contactamos",
    desc: "En menos de 24 horas coordinamos por WhatsApp para hablar de tu proyecto y resolver dudas.",
    deposit: null,
  },
  {
    n: "03",
    title: "Abonás la seña",
    desc: "Una seña confirma y reserva tu lugar en la agenda.",
    deposit: { amount: "$15.000 ARS", note: "Se descuenta del total el día de la sesión" },
  },
  {
    n: "04",
    title: "Tu sesión",
    desc: "El día del turno tu diseño está listo. Solo traés buena energía y las ganas de lucirlo.",
    deposit: null,
  },
];

export default function Proceso() {
  return (
    <div id="proceso" style={{ borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          padding: "80px 0 48px", borderBottom: "1px solid var(--line)"
        }}>
          <span style={{ fontFamily: "'EB Garamond', serif", fontSize: 13, color: "var(--ink-light)", fontStyle: "italic" }}>
            <em>03</em>
          </span>
          <span style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "var(--ink-mid)" }}>
            Cómo funciona
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {steps.map((step, i) => (
            <div key={step.n} style={{
              padding: "48px 36px",
              borderRight: i < steps.length - 1 ? "1px solid var(--line)" : "none"
            }}>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 11, color: "var(--ink-light)", fontStyle: "italic", marginBottom: 24 }}>
                <em>{step.n}</em>
              </p>
              <h3 style={{ fontFamily: "'EB Garamond', serif", fontSize: 22, fontWeight: 400, color: "var(--ink)", marginBottom: 12, lineHeight: 1.2 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--ink-mid)", lineHeight: 1.75, fontWeight: 300 }}>
                {step.desc}
              </p>
              {step.deposit && (
                <div style={{ marginTop: 16, padding: 12, border: "1px solid var(--line)", background: "var(--bg)" }}>
                  <strong style={{ display: "block", fontFamily: "'EB Garamond', serif", fontSize: 18, fontWeight: 400, color: "var(--ink)" }}>
                    {step.deposit.amount}
                  </strong>
                  <span style={{ fontSize: 11, color: "var(--ink-light)", letterSpacing: "0.5px" }}>
                    {step.deposit.note}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
