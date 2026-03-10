import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Capability} from "@/lib/data";

type CapabilitiesSectionProps = {
  capabilities: Capability[];
};

export function CapabilitiesSection({capabilities}: CapabilitiesSectionProps) {
  return (
    <section
      className="mx-auto w-[min(1100px,calc(100%-2.5rem))] scroll-mt-24 py-14 md:py-16"
      id="capabilities"
    >
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        What We Build
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
        {capabilities.map((item) => (
          <Card
            key={item.title}
            className="rounded-xl border border-border bg-card p-5 shadow-none"
          >
            <CardHeader className="px-0">
              <CardTitle className="text-xl font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="leading-7 text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
