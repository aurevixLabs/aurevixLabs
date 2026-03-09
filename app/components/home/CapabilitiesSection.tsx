import type {Capability} from "./data";

type CapabilitiesSectionProps = {
  capabilities: Capability[];
};

export function CapabilitiesSection({capabilities}: CapabilitiesSectionProps) {
  return (
    <section className="section-wrap" id="capabilities">
      <h2 className="section-title">What We Build</h2>
      <div className="card-grid">
        {capabilities.map((item, index) => (
          <article
            key={item.title}
            className={`feature-card fade-up fade-delay-${index + 1}`}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
