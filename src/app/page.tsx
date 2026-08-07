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
      <section className="container border-t border-outline-variant/20 pb-32 md:pb-40 pt-0">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="mb-6 font-geist text-headline-md text-on-background-emphasis">About</h2>
            <div className="flex flex-col gap-4">
              <p className="text-body-md leading-relaxed text-on-surface-variant">I bridge business problems and AI engineering. I partner with stakeholders to understand complex challenges, validate ideas through AI prototypes, and guide teams toward practical, scalable solutions. My role is to turn ambiguity into clear technical direction.</p>
              <Link className="inline-flex items-center gap-2 font-mono text-sm text-primary underline underline-offset-4 transition-colors hover:text-on-surface" href="/about">
                Read More <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
          <div className="flex items-start md:justify-end">
            <Link className="group inline-flex items-center gap-4 text-on-surface transition-colors hover:text-primary" href="/contact">
              <span className="font-geist text-display-lg text-on-background-emphasis">Get in touch</span>
              <ArrowUpRight aria-hidden="true" className="size-10 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
