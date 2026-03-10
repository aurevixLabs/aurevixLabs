import Link from "next/link";
import {projects} from "../../lib/data";
import {SiteFooter} from "../../components/landing/SiteFooter";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {SiteHeader} from "@/components/landing/SiteHeader";
import {Button} from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pb-12 text-foreground">
      <SiteHeader />

      <section className="mx-auto my-8 w-[min(1100px,calc(100%-2.5rem))] max-w-3xl text-center">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          Project Catalog
        </p>
        <h1 className="mt-2 text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
          Featured Products and Experiments
        </h1>
        <p className="mt-3 leading-7 text-muted-foreground">
          A curated list of live systems, beta platforms, and in-progress
          research projects built by Aurevix Labs.
        </p>
      </section>

      <section
        className="mx-auto grid w-[min(1100px,calc(100%-2.5rem))] grid-cols-1 gap-4 md:grid-cols-2"
        aria-label="Projects grid"
      >
        {projects.map((project) => (
          <Card
            key={project.name}
            className="rounded-xl border border-border bg-card p-5 shadow-none"
          >
            <CardHeader className="px-0">
              <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
                <p className="font-mono text-xs tracking-[0.06em] text-muted-foreground uppercase">
                  {project.type}
                </p>
                <p className="inline-flex rounded-full border border-border bg-muted px-2 py-1 font-mono text-[10px] tracking-[0.05em] text-muted-foreground uppercase">
                  {project.status}
                </p>
              </div>
              <CardTitle className="mt-2 text-2xl font-semibold">
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="leading-7 text-muted-foreground">
                {project.summary}
              </p>
              <Button
                variant="outline"
                render={<Link href="/" />}
                className="mt-3"
              >
                Back To Home
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
