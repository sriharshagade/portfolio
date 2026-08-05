import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProjects projects={projects} />
      <section className="container border-t border-outline-variant/20 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-geist text-headline-md text-on-surface">About</h2>
            <div className="space-y-4 text-body-md text-on-surface-variant">
              <p>I build software that solves meaningful problems, with attention to the user experience, the engineering tradeoffs, and the operational path to production.</p>
              <p>My work sits across AI, backend systems, frontend development, and product design. Every technical decision should ultimately make the product clearer, faster, or more useful.</p>
              <Link className="inline-flex items-center gap-2 pt-4 font-mono text-sm text-primary underline underline-offset-4 transition-colors hover:text-on-surface" href="/about">
                Read More <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
          <div className="flex items-center md:justify-end">
            <Link className="group inline-flex items-center gap-4 text-on-surface transition-colors hover:text-primary" href="/contact">
              <span className="font-geist text-display-lg md:text-[56px]">Get in touch</span>
              <ArrowUpRight aria-hidden="true" className="size-10 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
