import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-[min(1100px,calc(100%-2.5rem))] flex-col items-start justify-between gap-4 border-t border-border/60 py-8 text-sm text-muted-foreground md:flex-row md:items-center">
      <p>© 2026 Aurevix Labs</p>
      <div className="flex flex-wrap gap-4">
        <a className="transition-colors hover:text-foreground" href="#">
          Terms
        </a>
        <a className="transition-colors hover:text-foreground" href="#">
          Privacy
        </a>
        <Link
          className="transition-colors hover:text-foreground"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
