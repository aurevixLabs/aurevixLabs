import Link from "next/link";
import {projects} from "../../lib/data";
import {SiteFooter} from "../../components/landing/SiteFooter";
import {SiteHeader} from "@/components/landing/SiteHeader";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pb-12 text-foreground">
      <SiteHeader />

      <section className="mx-auto my-8 w-[min(1100px,calc(100%-2.5rem))] max-w-3xl text-center">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          Project Catalog
        </p>
        <h1 className="mt-2 text-3xl leading-tight font-semibold tracking-tight md:text-6xl">
          Projects and Experiments
        </h1>
        <p className="mt-3 leading-7 text-muted-foreground">
          A live catalog of products, tools, and experiments being built at
          Aurevix Labs.
        </p>
      </section>

      <section
        className="mx-auto w-[min(1100px,calc(100%-2.5rem))]"
        aria-label="Projects table"
      >
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full  border-collapse text-left">
              <thead className="bg-muted/40">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                    Project
                  </th>
                  <th className="px-4 py-3 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                    Type
                  </th>
                  <th className="px-4 py-3 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                    Summary
                  </th>
                  <th className="px-4 py-3 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <tr
                      key={project.name}
                      className="border-b border-border align-top last:border-b-0"
                    >
                      <td className="px-4 py-4 font-medium text-foreground">
                        {project.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {project.type}
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex rounded-full border border-border bg-muted px-2 py-1 font-mono text-[10px] tracking-[0.05em] text-muted-foreground uppercase">
                          {project.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm leading-6 text-muted-foreground">
                        {project.summary}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <Link
                          href={project.href}
                          className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-10 text-center text-sm leading-7 text-muted-foreground"
                    >
                      We are in the early stages of building out our projects.
                      New launches and experiments will appear here soon.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
