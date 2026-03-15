import Link from "next/link";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {FeaturedProject} from "@/lib/data";

type FeaturedProjectsSectionProps = {
  projects: FeaturedProject[];
};

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <section
      className="mx-auto w-[min(1100px,calc(100%-2.5rem))] scroll-mt-24 py-14 md:py-16"
      id="featured-projects"
    >
      <h2 className="minimal-fade-up text-center text-3xl font-semibold tracking-tight md:text-4xl">
        Featured Projects
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={project.name}
            className="minimal-fade-up minimal-hover-lift rounded-lg border border-border/70 bg-card p-5 shadow-none"
            style={{animationDelay: `${index * 90}ms`}}
          >
            <CardHeader className="space-y-3 px-0">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
                  {project.type}
                </span>
                <span className="inline-flex rounded-full border border-border bg-muted px-2 py-1 font-mono text-[10px] tracking-[0.06em] text-muted-foreground uppercase">
                  {project.status}
                </span>
              </div>
              <CardTitle className="text-xl font-semibold">
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-0">
              <p className="leading-7 text-muted-foreground">
                {project.summary}
              </p>
              <Link
                href={project.href}
                className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
              >
                View details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
