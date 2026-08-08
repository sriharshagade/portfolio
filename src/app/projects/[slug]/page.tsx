import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { TechChip } from "@/components/ui/tech-chip";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.name} Case Study` : "Project" };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="pt-16">
      <section className="container flex min-h-[840px] flex-col items-center justify-center py-20 text-center">
        <div className="max-w-6xl space-y-8">
          <p className="font-mono text-label-mono text-primary">{project.category}</p>
          <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">{project.name}</h1>
          <p className="mx-auto max-w-2xl text-body-lg text-on-surface-variant">{project.headline}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {project.stack.map((tech) => <TechChip key={tech}>{tech}</TechChip>)}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {project.demoUrl && (
              <Button asChild variant="primary">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <LinkIcon aria-hidden="true" className="size-4" />Demo
                </a>
              </Button>
            )}
            {project.showGithubLink !== false && (
              <Button variant="secondary"><Github aria-hidden="true" className="size-4" />GitHub</Button>
            )}
          </div>
          <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-xl border-4 border-surface-container-high bg-surface-container">
            <Image alt={project.imageAlt} className="object-cover" fill priority sizes="(min-width: 1024px) 960px, 100vw" src={project.image} />
          </div>
        </div>
      </section>
      <section className="border-y border-outline-variant/30 bg-surface-container-lowest py-24">
        <div className="container grid gap-8 md:grid-cols-3">
          {["Product", "System", "Ownership"].map((label) => (
            <div className="rounded-xl border border-outline-variant/40 bg-surface-container-high p-8" key={label}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">{label}</p>
              <p className="text-body-md text-on-surface-variant">A recruiter-facing view into product thinking, technical tradeoffs, and execution maturity.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-section-gap">
        <div className="grid gap-8">
          {project.sections.map((section) => (
            <article className="grid gap-gutter border-t border-outline-variant/30 pt-10 md:grid-cols-12" id={section.title.toLowerCase().replaceAll(" ", "-")} key={section.title}>
              <div className="md:col-span-3"><p className="font-mono text-label-mono text-primary border border-primary/40 px-2 py-1 rounded-sm inline-block">{section.eyebrow}/</p></div>
              <div className="md:col-span-9">
                <h2 className="mb-4 font-geist text-headline-md text-on-background-emphasis">{section.title}</h2>
                <p className="max-w-3xl text-body-lg text-on-surface-variant">{section.body}</p>
                {section.bullets ? <ul className="mt-6 grid gap-3 md:grid-cols-3">{section.bullets.map((bullet) => <li className="rounded-lg border border-outline-variant/40 bg-surface-container p-4 font-mono text-sm text-on-surface-variant" key={bullet}>{bullet}</li>)}</ul> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
