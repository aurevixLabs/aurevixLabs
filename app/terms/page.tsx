import {SiteFooter} from "@/components/landing/SiteFooter";
import {SiteHeader} from "@/components/landing/SiteHeader";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto w-[min(800px,calc(100%-2.5rem))] py-16 md:py-20">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          Legal
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Terms of Service
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: March 11, 2026
        </p>

        <p className="mt-6 leading-7 text-muted-foreground">
          Welcome to Aurevix Labs. By accessing or using our website, products,
          or services, you agree to the following Terms of Service. Please read
          them carefully.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-lg font-medium">1. Overview</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Aurevix Labs is an independent software lab that builds
              experimental products, developer tools, and web-based
              applications. These Terms govern your use of our website and any
              products or services provided by Aurevix Labs.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              By using our services, you agree to comply with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">2. Use of Services</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              You agree to use Aurevix Labs services only for lawful purposes
              and in a way that does not harm, disrupt, or misuse our products
              or infrastructure.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">You may not:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Attempt to gain unauthorized access to systems or data</li>
              <li>
                Reverse engineer or exploit vulnerabilities in our services
              </li>
              <li>Use our services for illegal or harmful activities</li>
              <li>Interfere with the normal operation of our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">
              3. Experimental Nature of Products
            </h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Many projects built by Aurevix Labs are experimental and may
              change, evolve, or be discontinued at any time.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Features, availability, or functionality of our products may
              change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">4. Intellectual Property</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              All content, branding, software, and materials provided on Aurevix
              Labs are the intellectual property of Aurevix Labs unless
              otherwise stated.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              You may not copy, reproduce, distribute, or use our content
              without permission.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Open-source projects will follow their respective open-source
              licenses.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">5. Third-Party Services</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Some Aurevix Labs products may integrate with third-party services
              or platforms. We are not responsible for the availability,
              functionality, or policies of these third-party services.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Your use of such services may also be subject to their respective
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">6. Limitation of Liability</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Aurevix Labs provides its services "as is" without warranties of
              any kind.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              We are not responsible for any direct, indirect, or incidental
              damages resulting from the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">7. Changes to These Terms</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              We may update or modify these Terms of Service at any time.
              Updates will be reflected on this page with the updated date.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Continued use of our services after changes means you accept the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">8. Contact</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              If you have questions about these Terms of Service, you can
              contact us through the contact page on the Aurevix Labs website.
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
