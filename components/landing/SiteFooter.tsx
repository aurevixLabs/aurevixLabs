import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-[min(1100px,calc(100%-2.5rem))] flex-col items-start justify-between gap-4 border-t border-border/60 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
      <p className="text-xs tracking-[0.06em] uppercase">© 2026 Aurevix Labs</p>
      <div className="flex flex-wrap gap-5 text-xs tracking-[0.06em] uppercase">
        <a
          className="transition-colors hover:text-foreground"
          href="https://x.com/AurevixLabs
"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
        <a
          className="transition-colors hover:text-foreground"
          href="https://github.com/aurevixLabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="transition-colors hover:text-foreground"
          href="https://www.linkedin.com/company/aurevixlabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {/* <a
          className="transition-colors hover:text-foreground"
          href="https://medium.com/@aurevixlabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a> */}
        <Link
          className="transition-colors hover:text-foreground"
          href={"/terms"}
        >
          Terms
        </Link>
        <Link
          className="transition-colors hover:text-foreground"
          href={"/dmca"}
        >
          DMCA
        </Link>
      </div>
    </footer>
  );
}
