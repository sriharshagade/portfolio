import { Github, Link as LinkIcon, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

function getNextProject(currentSlug: string) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) return projects[0];
  return projects[currentIndex + 1];
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getNextProject(slug);
  const metadata = project.metadata || { role: [], scope: "" };

  return (
    <main className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="font-mono text-label-mono text-primary">{project.category}</p>
            <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">{project.name}</h1>
            <p className="text-body-lg text-on-surface-variant max-w-3xl">{project.headline}</p>
          </div>

          {/* Metadata Section */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 py-8 border-y border-outline-variant/30">
            <div>
              <p className="font-mono text-micro uppercase tracking-wider text-on-surface-variant mb-2">Role</p>
              <p className="text-body-md text-on-background-emphasis">{metadata.role.join(" · ") || "Product Engineering"}</p>
            </div>
            <div>
              <p className="font-mono text-micro uppercase tracking-wider text-on-surface-variant mb-2">Scope</p>
              <p className="text-body-md text-on-background-emphasis">{metadata.scope || "Full Stack"}</p>
            </div>
            <div>
              <p className="font-mono text-micro uppercase tracking-wider text-on-surface-variant mb-2">Status</p>
              <div className="flex items-center gap-2">
                <Badge variant="status">{project.status}</Badge>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container">
            <Image
              alt={project.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              src={project.image}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <Button asChild variant="primary">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <LinkIcon aria-hidden="true" className="size-4" />
                  Demo
                </a>
              </Button>
            )}
            {project.showGithubLink !== false && (
              <Button variant="secondary">
                <Github aria-hidden="true" className="size-4" />
                GitHub
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container py-section-gap">
        <div className="space-y-16">
          {project.sections.map((section) => (
            <article
              className="grid gap-gutter border-t border-outline-variant/30 pt-12 md:grid-cols-12"
              id={section.title.toLowerCase().replaceAll(" ", "-")}
              key={section.title}
            >
              <div className="md:col-span-3">
                <p className="font-mono text-label-mono text-primary">{section.eyebrow.padStart(2, "0")}</p>
              </div>
              <div className="md:col-span-9 space-y-6">
                <h2 className="font-geist text-headline-md text-on-background-emphasis">{section.title}</h2>
                <p className="text-body-lg text-on-surface-variant max-w-3xl">{section.body}</p>
                {section.bullets && (
                  <ul className="grid gap-4 mt-6 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        className="flex items-start gap-3 p-4 rounded-lg border border-outline-variant/40 bg-surface-container"
                        key={bullet}
                      >
                        <span className="text-primary mt-1">→</span>
                        <span className="text-body-md text-on-surface-variant">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Next Case Study */}
      <section className="container py-section-gap border-t border-outline-variant/30 mt-16 pt-16">
        <div className="max-w-2xl">
          <p className="font-mono text-label-mono text-primary mb-8">Next Case Study</p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block p-6 rounded-xl border border-outline-variant/30 bg-surface-container hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-geist text-headline-md text-on-background-emphasis group-hover:text-primary transition-colors">
                  {nextProject.name}
                </h3>
                <p className="text-body-md text-on-surface-variant mt-2">{nextProject.headline}</p>
              </div>
              <ArrowRight className="size-6 text-primary flex-shrink-0 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
