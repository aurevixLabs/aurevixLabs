import Link from "next/link";
import {Button} from "@/components/ui/button";

import {MoveRight} from "lucide-react";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-[min(1100px,calc(100%-2.5rem))] items-center py-14 text-center md:py-28">
      <div className="minimal-fade-up mx-auto grid w-full max-w-3xl gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.12em] text-muted-foreground uppercase">
            Independent Technology Lab
          </p>
        </div>
        <h1 className="mx-auto max-w-[14ch] text-4xl leading-none font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl">
          Aurevix Labs
        </h1>
        <p className="mx-auto max-w-[54ch] text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
          An internet lab building experiments, products, and developer tools.
          Shipping ideas on the internet.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            render={<Link href="/projects" />}
            className="minimal-hover-lift h-11 w-full rounded-lg px-8 text-sm font-medium sm:w-auto"
          >
            View Projects <MoveRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
