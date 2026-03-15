import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Capability} from "@/lib/data";

type CapabilitiesSectionProps = {
  capabilities: Capability[];
};

export function CapabilitiesSection({capabilities}: CapabilitiesSectionProps) {
  return (
    <section
      className="mx-auto w-[min(1100px,calc(100%-2.5rem))] scroll-mt-24 py-14 md:py-18"
      id="capabilities"
    >
      <h2 className="minimal-fade-up text-center text-3xl font-semibold tracking-tight md:text-4xl">
        What We Build
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3">
        {capabilities.map((item, index) => (
          <Card
            key={item.title}
            className="minimal-fade-up minimal-hover-lift rounded-lg border border-border/70 bg-card p-5 shadow-none"
            style={{animationDelay: `${index * 90}ms`}}
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
