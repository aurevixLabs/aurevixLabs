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
    <section className="mx-auto w-[min(1100px,calc(100%-2.5rem))] py-8 md:py-10">
      <ul
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-3"
        aria-label="Lab metrics"
      >
        {metrics.map((metric) => (
          <Card
            key={metric.label}
            className="rounded-xl border border-border bg-card p-5 text-center shadow-none"
          >
            <span className="mb-1 block text-2xl font-semibold tracking-tight">
              {metric.value}
            </span>
            <span className="text-xs tracking-[0.05em] text-muted-foreground uppercase">
              {metric.label}
            </span>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
