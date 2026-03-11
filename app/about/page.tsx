import {SiteFooter} from "@/components/landing/SiteFooter";
import {SiteHeader} from "@/components/landing/SiteHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto w-[min(800px,calc(100%-2.5rem))] py-16 md:py-20">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          About
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          About Aurevix Labs
        </h1>

        <p className="mt-4 leading-7 text-muted-foreground">
          Aurevix Labs is an independent software lab focused on building
          experimental products, developer tools, and modern web applications.
        </p>

        <p className="mt-4 leading-7 text-muted-foreground">
          The lab was created with a simple idea: build, experiment, and ship
          ideas on the internet. Instead of waiting for perfect plans, Aurevix
          Labs focuses on creating small, useful products, learning from real
          users, and improving them over time.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-lg font-medium">Our Approach</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              At Aurevix Labs, experimentation is at the core of everything we
              do. Some ideas turn into full products, while others remain
              experiments that help us learn and explore new technologies.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              We believe that the best way to discover valuable ideas is by
              building and testing them in the real world.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">What We Build</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Aurevix Labs works on projects across different areas of software,
              including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>
                Developer Tools - tools that help developers build better
                software.
              </li>
              <li>
                Web Applications - useful products designed for real-world
                problems.
              </li>
              <li>
                Experimental Projects - exploring new ideas, technologies, and
                concepts.
              </li>
              <li>
                Open Projects - sharing knowledge and tools with the community.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium">Philosophy</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Technology moves fast, and experimentation drives progress.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Aurevix Labs focuses on:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Building simple but powerful products</li>
              <li>Learning through experimentation</li>
              <li>Shipping ideas quickly</li>
              <li>Improving based on real feedback</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium">Founder</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Aurevix Labs was founded by Arun Kumar, a software engineer
              passionate about building products, experimenting with new
              technologies, and exploring ideas at the intersection of software
              and the internet.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Our Mission</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              The mission of Aurevix Labs is to explore new ideas, build useful
              tools, and continuously experiment with technology to create
              meaningful software.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
