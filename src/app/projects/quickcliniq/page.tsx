import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { quickcliniqCaseStudy } from "@/data/quickcliniq-case-study";
import { getProject } from "@/data/projects";

export const metadata = { title: "QuickCliniq Case Study" };

export default function QuickCliniqCaseStudy() {
  const nextProject = getProject("hiresense");

  return (
    <main className="pt-16">
      {/* ===== HERO ===== */}
      <section className="container pb-16 md:pb-20">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-label-mono text-primary">{quickcliniqCaseStudy.category}</p>
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl flex-1">
                {quickcliniqCaseStudy.name}
              </h1>
              <div className="flex items-center gap-3 flex-shrink-0 pt-2">
                <Badge variant="status">{quickcliniqCaseStudy.status}</Badge>
                {quickcliniqCaseStudy.demoUrl && (
                  <Link
                    href={quickcliniqCaseStudy.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-md text-primary hover:text-on-background-emphasis transition-colors"
                  >
                    Demo ↗
                  </Link>
                )}
              </div>
            </div>
            <p className="text-body-lg text-on-surface-variant max-w-3xl">{quickcliniqCaseStudy.tagline}</p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container mx-auto mt-6">
            <Image
              alt={quickcliniqCaseStudy.imageAlt}
              className="w-full h-auto"
              width={960}
              height={600}
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              src={quickcliniqCaseStudy.image}
            />
          </div>
        </div>
      </section>

      {/* ===== WHAT I BUILT ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">What I Built</h2>
            <p className="text-body-md text-on-surface-variant">A production clinic operations platform connecting WhatsApp patient communication with scheduling and clinic workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickcliniqCaseStudy.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="p-6 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors bg-surface-container/30"
              >
                <h3 className="font-geist text-headline-sm text-on-background-emphasis mb-2">{cap.title}</h3>
                <p className="text-body-md text-on-surface-variant">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">The Problem</h2>
            <p className="text-body-md text-on-surface-variant">Clinics waste hours on manual scheduling and fragmented communication across multiple tools.</p>
          </div>
          <p className="text-body-lg text-on-surface-variant">{quickcliniqCaseStudy.problem.statement}</p>
          <p className="text-body-md text-on-surface-variant">{quickcliniqCaseStudy.problem.context}</p>
          <p className="text-body-md text-on-surface-variant">
            <span className="text-primary">Opportunity: </span>
            {quickcliniqCaseStudy.problem.opportunity}
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">{quickcliniqCaseStudy.workflow.title}</h2>
            <p className="text-body-md text-on-surface-variant">A 5-step workflow from patient WhatsApp message to confirmed appointment in the clinic dashboard.</p>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-4">
            {quickcliniqCaseStudy.workflow.steps.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0 font-mono text-sm font-bold">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <p className="font-geist text-body-md text-on-background-emphasis">{item.label}</p>
                  <p className="text-body-md text-on-surface-variant mt-1">{item.description}</p>
                </div>
                {idx < quickcliniqCaseStudy.workflow.steps.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <ArrowRight className="text-primary/50 rotate-90 size-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SYSTEM ARCHITECTURE ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">{quickcliniqCaseStudy.architecture.title}</h2>
            <p className="text-body-md text-on-surface-variant">{quickcliniqCaseStudy.architecture.description}</p>
          </div>

          <div className="space-y-4">
            {quickcliniqCaseStudy.architecture.components.map((component, idx) => (
              <div key={idx} className="p-6 border border-outline-variant/30 rounded-lg bg-surface-container/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="font-geist text-body-lg text-on-background-emphasis font-semibold">{component.layer}</h3>
                  <div className="flex flex-wrap gap-2">
                    {component.tech.map((tech) => (
                      <span key={tech} className="text-micro font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-body-md text-on-surface-variant">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENGINEERING DECISIONS ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">Engineering Decisions</h2>
            <p className="text-body-md text-on-surface-variant">Key design and implementation choices that shaped how the system was built.</p>
          </div>

          <div className="space-y-6">
            {quickcliniqCaseStudy.decisions.map((decision, idx) => (
              <div key={idx} className="p-6 border border-outline-variant/30 rounded-lg">
                <h3 className="font-geist text-body-lg text-on-background-emphasis font-semibold mb-3">{decision.title}</h3>
                <div className="space-y-2">
                  <p className="text-body-md text-on-surface-variant">
                    <span className="text-primary">Rationale: </span>
                    {decision.rationale}
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    <span className="text-primary">Impact: </span>
                    {decision.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MY ROLE ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">My Role</h2>
            <p className="text-body-lg text-on-background-emphasis">
              {quickcliniqCaseStudy.role.official}
            </p>
            <p className="text-body-md text-on-surface-variant">
              {quickcliniqCaseStudy.role.projectScope} across the full technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickcliniqCaseStudy.role.areas.map((area, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-surface-container/30 border border-outline-variant/30">
                <span className="text-primary mt-1">→</span>
                <span className="text-body-md text-on-background-emphasis">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHALLENGES ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">Challenges</h2>
            <p className="text-body-md text-on-surface-variant">Real problems encountered during implementation and how they were solved.</p>
          </div>

          <div className="space-y-8">
            {quickcliniqCaseStudy.challenges.map((challenge, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-geist text-body-lg text-on-background-emphasis font-semibold">{challenge.title}</h3>
                <div className="space-y-3 text-body-md text-on-surface-variant">
                  <p>
                    <span className="text-primary">Problem: </span>
                    {challenge.problem}
                  </p>
                  <p>
                    <span className="text-primary">Solution: </span>
                    {challenge.solution}
                  </p>
                  <p>
                    <span className="text-primary">Learning: </span>
                    {challenge.learning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY LEARNINGS ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">Key Learnings</h2>
            <p className="text-body-md text-on-surface-variant">Core insights from building a production AI-powered clinic platform.</p>
          </div>

          <ul className="space-y-3">
            {quickcliniqCaseStudy.learnings.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== NEXT CASE STUDY ===== */}
      {nextProject && (
        <section className="container py-12 md:py-16 border-t border-outline-variant/30">
          <div className="max-w-2xl">
            <p className="font-mono text-label-mono text-on-surface-variant mb-6">Next</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group block p-6 rounded-lg border border-outline-variant/30 bg-surface-container/30 hover:border-primary/50 transition-colors"
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
      )}
    </main>
  );
}
