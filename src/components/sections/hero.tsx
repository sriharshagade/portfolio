import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const capabilities = ["Business Discovery", "AI Prototyping", "LLM Evaluation", "Technical Direction"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="technical-grid absolute inset-x-0 top-16 h-[520px] opacity-60" />
      <div className="container relative z-10 pb-32 pt-4 md:pb-40 md:pt-6">
        <div className="max-w-[54rem] space-y-6">
          <div className="space-y-6">
            <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">
              Turning ambiguous business problems into validated AI solutions.
            </h1>
            <p className="text-body-md leading-7 text-on-surface-variant">
              I partner with stakeholders to understand complex challenges, rapidly prototype and evaluate AI approaches, and guide teams toward the right technical direction.
            </p>
          </div>

          <div className="flex flex-nowrap gap-2 overflow-x-auto md:overflow-x-visible">
            {capabilities.map((capability) => (
              <Badge key={capability} variant="capability">
                {capability}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-3">
            <Button asChild size="lg" variant="primary">
              <Link href="/projects">View Case Studies</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
