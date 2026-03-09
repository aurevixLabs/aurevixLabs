type HeroMetric = {
  value: string;
  label: string;
};

type HeroSectionProps = {
  highlights: string[];
  metrics: HeroMetric[];
};

export function HeroSection({highlights, metrics}: HeroSectionProps) {
  void highlights;
  void metrics;

  return (
    <section className="hero section-wrap">
      <div className="hero-minimal">
        <p className="eyebrow fade-up fade-delay-1">
          Independent Technology Lab
        </p>
        <h1 className="hero-title fade-up fade-delay-2">Aurevix Labs</h1>
        <p className="hero-copy fade-up fade-delay-3">
          We design software, developer platforms, and experimental
          infrastructure. Some work is open source. Some powers private client
          systems at scale.
        </p>
        <div className="hero-actions fade-up fade-delay-4">
          <a className="btn btn-secondary" href="#projects">
            Explore Projects
          </a>
        </div>
      </div>
    </section>
  );
}
