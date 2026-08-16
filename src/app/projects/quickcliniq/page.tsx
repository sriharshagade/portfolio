import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { CaseStudyHero } from "@/components/sections/case-study-hero";
import { quickcliniqCaseStudy } from "@/data/quickcliniq-case-study";
import { getProject } from "@/data/projects";

export const metadata = { title: "QuickCliniq Case Study" };

export default function QuickCliniqCaseStudy() {
  const nextProject = getProject("hiresense");

  return (
    <main>
      {/* ===== HERO (GLOBAL CASE STUDY PROTOCOL) ===== */}
      <CaseStudyHero
        category={quickcliniqCaseStudy.category}
        projectName={quickcliniqCaseStudy.name}
        badge={quickcliniqCaseStudy.status}
        description={quickcliniqCaseStudy.tagline}
        demoUrl={quickcliniqCaseStudy.demoUrl}
        demoLabel="View Demo"
      />

      {/* Hero Image */}
      <section className="container pb-16 md:pb-20">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container mx-auto">
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
      </section>

      {/* ===== WHAT I BUILT ===== */}
      <section className="container py-12 md:py-16 border-t border-outline-variant/30">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">What I Built</h2>
            <p className="text-body-md text-on-surface-variant">A clinic operations platform connecting WhatsApp patient communication with scheduling and clinic workflows.</p>
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
          <h2 className="font-geist text-headline-md text-on-background-emphasis">The Problem</h2>
          <p className="font-geist text-headline-sm text-on-background-emphasis">{quickcliniqCaseStudy.problem.statement}</p>
          <div className="space-y-4 text-body-md text-on-surface-variant whitespace-pre-line">
            {quickcliniqCaseStudy.problem.context}
          </div>
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
            <p className="text-body-md text-on-surface-variant">Core insights from building a clinic platform.</p>
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
