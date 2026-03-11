import {SiteFooter} from "@/components/landing/SiteFooter";
import {SiteHeader} from "@/components/landing/SiteHeader";

export default function DmcaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto w-[min(800px,calc(100%-2.5rem))] py-16 md:py-20">
        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          Legal
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          DMCA Policy
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: March 11, 2026
        </p>

        <p className="mt-6 leading-7 text-muted-foreground">
          Aurevix Labs respects the intellectual property rights of others and
          expects users of our services to do the same. This DMCA Policy
          outlines how we handle copyright infringement claims.
        </p>

        <p className="mt-4 leading-7 text-muted-foreground">
          If you believe that content hosted or published through Aurevix Labs
          infringes your copyright, you may submit a Digital Millennium
          Copyright Act (DMCA) notice.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-lg font-medium">Filing a DMCA Complaint</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              If you are a copyright owner or an authorized representative,
              please provide the following information in your notice:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>
                A description of the copyrighted work that you claim has been
                infringed.
              </li>
              <li>
                The exact URL or location of the allegedly infringing material
                on the Aurevix Labs website or product.
              </li>
              <li>Your name, email address, and contact information.</li>
              <li>
                A statement that you have a good faith belief that the disputed
                use is not authorized by the copyright owner, its agent, or the
                law.
              </li>
              <li>
                A statement that the information in the notice is accurate and
                that you are authorized to act on behalf of the copyright owner.
              </li>
              <li>Your electronic or physical signature.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">Submitting a DMCA Notice</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              You can submit copyright infringement notices by contacting us
              through the Aurevix Labs contact page or by email.
            </p>
            <p className="mt-2 leading-7 text-muted-foreground">
              Email: aurevixlabs@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Counter-Notification</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              If you believe that your content was removed or disabled by
              mistake or misidentification, you may submit a
              counter-notification including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Your name and contact information</li>
              <li>Identification of the material that was removed</li>
              <li>
                A statement that you believe the removal was a mistake or
                misidentification
              </li>
              <li>Your electronic or physical signature</li>
            </ul>
            <p className="mt-2 leading-7 text-muted-foreground">
              Upon receiving a valid counter-notice, we may restore the content
              unless the original complainant files legal action.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Repeat Infringers</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Aurevix Labs may suspend or terminate accounts that repeatedly
              infringe intellectual property rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">Policy Updates</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              We may update this DMCA Policy from time to time. Any changes will
              be posted on this page with the updated date.
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
