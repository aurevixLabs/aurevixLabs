import Link from "next/link";
import Image from "next/image";
import {Menu} from "lucide-react";
import {ThemeToggle} from "../ThemeToggle";

export function SiteHeader() {
  const navLinks = [
    {href: "/", label: "Home"},
    {href: "/projects", label: "Projects"},
    {href: "/about", label: "About"},
    {href: "/contact", label: "Contact"},
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-[min(1100px,calc(100%-2.5rem))] items-center justify-between py-3">
          <Link
            href="/"
            className="minimal-fade-up flex items-center transition-transform duration-200 hover:scale-[1.01]"
          >
            <Image
              src="/aurevixlabs-logo-light.svg"
              alt="Aurevix Labs"
              width={190}
              height={50}
              className="dark:hidden"
              priority
            />
            <Image
              src="/aurevixlabs-logo.svg"
              alt="Aurevix Labs"
              width={190}
              height={50}
              className="hidden dark:block"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <nav
              className="hidden items-center gap-6 text-xs tracking-[0.08em] text-muted-foreground uppercase md:flex"
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
      <div aria-hidden="true" className="h-18" />
    </>
  );
}
