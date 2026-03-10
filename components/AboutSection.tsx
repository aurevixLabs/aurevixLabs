import Link from "next/link";
import {Button} from "./ui/button";

export function AboutSection() {
  return (
    <section
      className="mx-auto mt-10 w-[min(1100px,calc(100%-2.5rem))] scroll-mt-24 rounded-xl border border-border bg-card p-7 md:mt-12 md:p-10"
      id="about"
    >
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        About
      </h2>
      <div className="mt-5 space-y-5 leading-7 text-muted-foreground md:mt-8">
        <p>
          <>
            <strong>Aurevix Labs</strong>
          </>{" "}
          was founded by{" "}
          <span className="underline bold">
            <Link
              href="https://hiarun.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arun kumar
            </Link>
          </span>
          , a Full stack developer passionate about building developer tools,
          systems software, and experimental projects. Aurevix Labs explores
          ideas at the intersection of technology and creativity.
        </p>
        <p>
          We work with talented contributors and the open-source community to
          turn ideas into real products. Every project is an opportunity to
          experiment, learn, and build something meaningful.
        </p>
      </div>
      <Button variant="link" className="mt-3 underline">
        Contact us
      </Button>
    </section>
  );
}
