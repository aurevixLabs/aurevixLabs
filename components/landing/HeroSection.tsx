import Link from "next/link";
import {Button} from "@/components/ui/button";

import {MoveRight} from "lucide-react";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-[min(1100px,calc(100%-2.5rem))] items-center py-12 text-center md:py-24">
      <div className="mx-auto grid w-full max-w-3xl gap-5">
        <div>
          <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
            Independent Technology Lab
          </p>
        </div>
        <h1 className="mx-auto max-w-[12ch] text-4xl leading-[0.95] font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl">
          Aurevix Labs
        </h1>
        <p className="mx-auto max-w-[46ch] text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
          An internet lab building experiments, products, and developer tools.
          Shipping ideas on the internet.
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            render={<Link href="/projects" />}
            className="h-11 w-full rounded-xl px-10 text-sm font-medium sm:w-auto"
          >
            View Projects <MoveRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
