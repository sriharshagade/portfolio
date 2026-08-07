import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { TechChip } from "@/components/ui/tech-chip";
import type { Project } from "@/data/projects";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="container pb-32 md:pb-40">
      <h2 className="mb-12 font-geist text-display-lg text-on-background-emphasis">Selected Case Studies</h2>
      <div className="grid gap-12">
        {projects.slice(0, 3).map((project, index) => {
          const Icon = project.icon;
          return (
            <article className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container transition-colors hover:border-primary/50 md:grid md:grid-cols-2" key={project.slug}>
              {/* Full-card clickable overlay */}
              <Link href={`/projects/${project.slug}`} className="focus-ring absolute inset-0 z-10 rounded-xl" aria-label={`View ${project.name} case study`} />

              <div className={`${index % 2 === 1 ? "md:order-2" : ""} relative h-[250px] overflow-hidden bg-surface-variant md:h-[400px]`}>
                <Image alt={project.imageAlt} className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" fill sizes="(min-width: 768px) 50vw, 90vw" src={project.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/80 to-transparent opacity-60" />
              </div>
              <div className="relative z-20 flex flex-col justify-center p-8 md:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <Icon aria-hidden="true" className="size-8 text-primary" />
                  <h3 className="font-geist text-headline-md text-on-background-emphasis">{project.name}</h3>
                  <span className="pointer-events-none ml-auto"><Badge pulse={project.status !== "Archived"}>{project.status}</Badge></span>
                </div>
                <p className="mb-6 text-body-lg text-on-surface-variant">{project.summary}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {["Problem", "Solution", "Architecture", "Outcome"].map((label) => (
                      <span key={label} className="text-micro uppercase tracking-widest text-text-muted font-mono">
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="relative z-30 inline-flex items-center gap-2 font-mono text-sm text-on-surface transition-all group-hover:translate-x-1 group-hover:text-primary">
                    View Case Study <ArrowRight aria-hidden="true" className="size-4" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
