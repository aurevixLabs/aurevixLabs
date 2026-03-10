import {SiteFooter} from "@/components/landing/SiteFooter";
import {SiteHeader} from "@/components/landing/SiteHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto w-[min(720px,calc(100%-2.5rem))] py-16 md:py-20">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          Contact US
        </p>

        {/* <p className="mt-4 leading-7 text-muted-foreground">
          If you have an idea, project, or collaboration in mind, feel free to
          reach out. I usually reply within 24 hours.
        </p> */}

        <div className="mt-8 space-y-2 text-sm text-muted-foreground">
          <p>
            Email:{" "}
            <a className="text-foreground" href="mailto:hello@aurevixlabs.com">
              aurevixlabs@gmail.com
            </a>
          </p>
          <p>Location: India</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
