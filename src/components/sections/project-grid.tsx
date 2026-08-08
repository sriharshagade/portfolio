import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { TechChip } from "@/components/ui/tech-chip";
import type { Project } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
      {projects.map((project) => (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container transition-colors hover:border-primary/50" key={project.slug}>
          {/* Full-card clickable overlay */}
          <Link href={`/projects/${project.slug}`} className="focus-ring absolute inset-0 z-10 rounded-xl" aria-label={`View ${project.name} case study`} />

          <div className="pointer-events-none absolute right-4 top-4 z-20"><Badge>{project.status}</Badge></div>
          <div className="relative h-56 shrink-0 overflow-hidden bg-surface-variant">
            <Image alt={project.imageAlt} className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" src={project.image} />
          </div>
          <div className="relative z-20 flex flex-1 flex-col p-6 md:p-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">{project.category}</p>
            <h2 className="mb-3 font-geist text-headline-sm text-on-surface">{project.name}</h2>
            <p className="mb-6 line-clamp-4 text-body-md text-on-surface-variant">{project.summary}</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
            </div>
            <div className="relative z-30 mt-auto inline-flex items-center gap-2 font-mono text-label-mono text-primary transition-all group-hover:translate-x-1 group-hover:text-on-surface">
              View Case Study <ArrowRight aria-hidden="true" className="size-4" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-colors group-hover:border-primary/30" />
        </article>
      ))}
    </section>
  );
}
