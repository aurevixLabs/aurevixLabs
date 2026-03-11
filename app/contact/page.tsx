import {SiteFooter} from "@/components/landing/SiteFooter";
import {SiteHeader} from "@/components/landing/SiteHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto w-[min(720px,calc(100%-2.5rem))] py-16 md:py-20">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          Contact
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Contact Aurevix Labs
        </h1>

        <p className="mt-4 leading-7 text-muted-foreground">
          Have a question, idea, or collaboration in mind? We&apos;d love to
          hear from you.
        </p>

        <p className="mt-4 leading-7 text-muted-foreground">
          Aurevix Labs is focused on building experimental products, developer
          tools, and software systems. If you&apos;re interested in working
          together, discussing ideas, or learning more about our projects, feel
          free to reach out.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-lg font-medium">General Inquiries</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              For general questions about Aurevix Labs, our projects, or
              partnerships, please contact us using the form below.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Collaborations</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              We&apos;re always open to collaborating with developers,
              designers, and builders who are passionate about creating useful
              tools and innovative products.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              If you have an idea or want to build something together,
              don&apos;t hesitate to get in touch.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Feedback</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Tried one of our products or experiments? Your feedback helps us
              improve and build better tools for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Response Time</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              We try to respond to all messages within 24-48 hours.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium">Built by Builders</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Aurevix Labs is an independent lab founded by Arun Kumar, focused
              on experimenting, building, and shipping ideas on the internet.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-2 text-sm text-muted-foreground">
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
