import Link from "next/link";

export function AboutSection() {
  return (
    <section
      className="minimal-fade-up mx-auto mt-10 w-[min(1100px,calc(100%-2.5rem))] scroll-mt-24 border-t border-border/70 py-12 md:mt-12"
      id="about"
    >
      <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
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
      <span className="mt-4 block transition-colors hover:text-foreground">
        <Link href={"/contact"} className="text-sm font-medium">
          Contact us
        </Link>
      </span>
    </section>
  );
}
