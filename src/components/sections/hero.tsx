import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TechChip } from "@/components/ui/tech-chip";

const traits = ["AI Engineer", "Product Builder", "Solopreneur"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="technical-grid absolute inset-x-0 top-16 h-[520px] opacity-60" />
      <div className="container relative z-10 pb-20 pt-12 md:pb-32 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-4 font-mono text-label-mono text-primary">
            <span>Sriharsha Gade</span>
            <span className="size-1 rounded-full bg-primary/50" />
            <span>AI Engineer | Product Builder | Solopreneur</span>
          </div>
          <h1 className="font-geist text-display-xl-mobile text-on-surface md:text-display-xl">
            Building intelligent products that solve real-world problems.
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg text-on-surface-variant">
            I turn product ideas into production-ready AI software by combining systems thinking, frontend architecture, and practical automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {traits.map((trait) => <TechChip key={trait}>{trait}</TechChip>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/projects">View Work <ArrowRight aria-hidden="true" className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
