import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TechChip } from "@/components/ui/tech-chip";

const capabilities = ["Business Discovery", "AI Prototyping", "LLM Evaluation", "Technical Direction"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-16">
      <div className="technical-grid absolute inset-x-0 top-12 h-[520px] opacity-60" />
      <div className="container relative z-10 pb-20 pt-4 md:pb-28 md:pt-6">
        <div className="max-w-[54rem] space-y-6">
          <div className="space-y-5">
            <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">
              Turning ambiguous business problems into validated AI solutions.
            </h1>
            <p className="text-body-md leading-7 text-on-surface-variant">
              I partner with stakeholders to understand complex challenges, rapidly prototype and evaluate AI approaches, and guide teams toward the right technical direction.
            </p>
          </div>

          <div className="flex flex-nowrap gap-2 overflow-x-auto md:overflow-x-visible">
            {capabilities.map((capability) => (
              <TechChip key={capability} className="!bg-[#7c3aed] !text-[#ede0ff] !border-[#7c3aed] px-4 py-2.5 text-base font-semibold">
                {capability}
              </TechChip>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-3">
            <Button asChild size="lg">
              <Link href="/projects">View Case Studies</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
