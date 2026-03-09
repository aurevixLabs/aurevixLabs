type ProcessStripProps = {
  steps: string[];
};

export function ProcessStrip({steps}: ProcessStripProps) {
  return (
    <section
      className="section-wrap process-strip"
      aria-label="Delivery process"
    >
      {steps.map((step, index) => (
        <div
          key={step}
          className={`process-pill fade-up fade-delay-${index + 1}`}
        >
          <span>{index + 1}</span>
          {step}
        </div>
      ))}
    </section>
  );
}
