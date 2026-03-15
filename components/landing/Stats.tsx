import {Card} from "../ui/card";

type HeroMetric = {
  value: string;
  label: string;
};

type StatsProps = {
  metrics: HeroMetric[];
};

const Stats = ({metrics}: StatsProps) => {
  return (
    <section className="mx-auto w-[min(1100px,calc(100%-2.5rem))] py-6 md:py-8">
      <ul
        className="grid w-full grid-cols-1 gap-3 md:grid-cols-3"
        aria-label="Lab metrics"
      >
        {metrics.map((metric, index) => (
          <Card
            key={metric.label}
            className="minimal-fade-up minimal-hover-lift rounded-lg border border-border/70 bg-card p-4 text-center shadow-none"
            style={{animationDelay: `${index * 80}ms`}}
          >
            <span className="mb-1 block text-xl font-semibold tracking-tight md:text-2xl">
              {metric.value}
            </span>
            <span className="text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
              {metric.label}
            </span>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
