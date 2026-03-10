import Link from "next/link";
import {Menu} from "lucide-react";
import {ThemeToggle} from "../ThemeToggle";

export function SiteHeader() {
  const navLinks = [
    {href: "#about", label: "About"},
    {href: "/projects", label: "Projects"},
    {href: "/contact", label: "Contact"},
  ];

  return (
    <header className="border-b border-border/60 bg-background">
      <div className="mx-auto flex w-[min(1100px,calc(100%-2.5rem))] items-center justify-between py-5">
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.08em] uppercase"
        >
          Aurevix Labs
        </Link>
        <div className="flex items-center gap-2">
          <nav
            className="hidden items-center gap-5 text-sm text-muted-foreground md:flex"
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground">
              <Menu className="size-5" />
              <span className="sr-only">Open navigation menu</span>
            </summary>
            <nav
              className="absolute top-12 right-0 z-50 w-44 rounded-xl border border-border bg-card p-2 shadow-sm"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={`mobile-${link.label}-${link.href}`}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
