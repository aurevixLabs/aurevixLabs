import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type {Project} from "../lib/data";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({projects}: ProjectsSectionProps) {
  return (
    <section
      className="mx-auto w-[min(1100px,calc(100%-2.5rem))] scroll-mt-24 py-14 md:py-16"
      id="projects"
    >
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Featured Projects
        </h2>
        <Button variant="outline" className="">
          <Link href="/projects">View All</Link>
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="rounded-xl border border-border bg-card p-5 shadow-none"
          >
            <CardHeader className="px-0">
              <p className="font-mono text-xs tracking-[0.06em] text-muted-foreground uppercase">
                {project.type}
              </p>
              <CardTitle className="text-xl font-semibold">
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="leading-7 text-muted-foreground">
                {project.summary}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
