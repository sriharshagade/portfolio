import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { quickcliniqCaseStudy } from "@/data/quickcliniq-case-study";
import { getProject } from "@/data/projects";

export const metadata = { title: "QuickCliniq Case Study" };

export default function QuickCliniqCaseStudy() {
  const nextProject = getProject("hiresense");

  return (
    <main>
      {/* ===== HERO ===== */}
      <div className="container py-16 md:py-24">
        <div className="space-y-6">
          <p className="font-mono text-label-mono text-primary">{quickcliniqCaseStudy.category}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:items-start">
            {/* Row 1, Col 1: Heading */}
            <h1 className="font-geist text-display-xl-mobile md:text-display-xl text-on-background-emphasis">
              {quickcliniqCaseStudy.name}
            </h1>
            {/* Row 1, Col 2: Badge */}
            <div className="flex justify-start md:justify-end">
              <Badge variant="status">
                {quickcliniqCaseStudy.status}
              </Badge>
            </div>
            {/* Row 2, Col 1: Description */}
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {quickcliniqCaseStudy.tagline}
            </p>
            {/* Row 2, Col 2: Demo Button */}
            {quickcliniqCaseStudy.demoUrl && (
              <div className="flex justify-start md:justify-end">
                <Button asChild variant="primary" className="w-full md:w-auto">
                  <a href={quickcliniqCaseStudy.demoUrl} target="_blank" rel="noopener noreferrer">
                    View Working Demo
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== HERO IMAGE ===== */}
      <div className="container py-16 md:py-24 border-t border-outline-variant/30">
        <div className="relative w-full overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container">
          <div className="aspect-video relative">
            <Image
              alt={quickcliniqCaseStudy.imageAlt}
              className="w-full h-full object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              src={quickcliniqCaseStudy.image}
            />
          </div>
        </div>
      </div>

      {/* ===== WHAT I BUILT ===== */}
      <div className="container py-16 md:py-24 border-t border-outline-variant/30">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">What I Built</h2>
            <p className="text-body-md text-on-surface-variant">A clinic operations platform connecting WhatsApp patient communication with scheduling and clinic workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickcliniqCaseStudy.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="p-6 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors duration-300 bg-surface-container/30 space-y-3"
              >
                <h3 className="font-geist text-headline-sm text-on-background-emphasis">{cap.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== THE PROBLEM ===== */}
      <div className="container py-16 md:py-24 border-t border-outline-variant/30">
        <div className="space-y-8">
          <h2 className="font-geist text-headline-md text-on-background-emphasis">The Problem</h2>
          <p className="text-body-lg text-on-background-emphasis font-medium">{quickcliniqCaseStudy.problem.statement}</p>
          <div className="space-y-4 text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">
            {quickcliniqCaseStudy.problem.context}
          </div>
        </div>
      </div>

      {/* ===== HOW IT WORKS ===== */}
      <div className="container py-16 md:py-24 border-t border-outline-variant/30">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">How It Works</h2>
            <p className="text-body-md text-on-surface-variant">A 6-step workflow from patient WhatsApp message to managed appointment.</p>
          </div>

          <div className="space-y-6">
            {quickcliniqCaseStudy.workflow.steps.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0 font-mono text-sm font-semibold">
                  {item.step}
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-geist text-body-lg text-on-background-emphasis font-medium">{item.label}</p>
                  <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SYSTEM ARCHITECTURE ===== */}
      <div className="container py-16 md:py-24 border-t border-outline-variant/30">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">System Architecture</h2>
            <p className="text-body-md text-on-surface-variant">{quickcliniqCaseStudy.architecture.description}</p>
          </div>

          <div className="space-y-4">
            {quickcliniqCaseStudy.architecture.components.map((component, idx) => (
              <div key={idx} className="p-6 border border-outline-variant/30 rounded-lg bg-surface-container/30 hover:bg-surface-container/50 transition-colors duration-300 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="font-geist text-body-lg text-on-background-emphasis font-semibold">{component.layer}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {component.tech.map((tech) => (
                      <span key={tech} className="text-micro font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-sm flex-shrink-0">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ENGINEERING DECISIONS ===== */}
      <div className="container py-16 md:py-24 border-t border-outline-variant/30">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">Engineering Decisions</h2>
            <p className="text-body-md text-on-surface-variant">Key design and implementation choices that shaped how the system was built.</p>
          </div>

          <div className="space-y-6">
            {quickcliniqCaseStudy.decisions.map((decision, idx) => (
              <div key={idx} className="p-6 border border-outline-variant/30 rounded-lg space-y-4">
                <h3 className="font-geist text-body-lg text-on-background-emphasis font-semibold">{decision.title}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-micro font-mono text-primary uppercase tracking-wider">Rationale</p>
                    <p className="text-body-md text-on-surface-variant mt-1 leading-relaxed">{decision.rationale}</p>
                  </div>
                  <div>
                    <p className="text-micro font-mono text-primary uppercase tracking-wider">Impact</p>
                    <p className="text-body-md text-on-surface-variant mt-1 leading-relaxed">{decision.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CHALLENGES ===== */}
      <div className="container py-16 md:py-24 border-t border-outline-variant/30">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">Challenges</h2>
            <p className="text-body-md text-on-surface-variant">Real problems encountered during implementation and how they were solved.</p>
          </div>

          <div className="space-y-8">
            {quickcliniqCaseStudy.challenges.map((challenge, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-geist text-body-lg text-on-background-emphasis font-semibold">{challenge.title}</h3>
                <div className="space-y-3 text-body-md text-on-surface-variant leading-relaxed">
                  <div>
                    <p className="text-micro font-mono text-primary uppercase tracking-wider mb-1">Problem</p>
                    <p>{challenge.problem}</p>
                  </div>
                  <div>
                    <p className="text-micro font-mono text-primary uppercase tracking-wider mb-1">Solution</p>
                    <p>{challenge.solution}</p>
                  </div>
                  <div>
                    <p className="text-micro font-mono text-primary uppercase tracking-wider mb-1">Learning</p>
                    <p>{challenge.learning}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== KEY LEARNINGS ===== */}
      <div className="container py-16 md:py-24 border-t border-outline-variant/30">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="font-geist text-headline-md text-on-background-emphasis">Key Learnings</h2>
            <p className="text-body-md text-on-surface-variant">Core insights from building a clinic platform.</p>
          </div>

          <ul className="space-y-4">
            {quickcliniqCaseStudy.learnings.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                <span className="text-primary mt-1 flex-shrink-0 font-semibold">•</span>
                <span className="leading-relaxed">{learning}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== NEXT CASE STUDY ===== */}
      {nextProject && (
        <div className="container py-16 md:py-24 border-t border-outline-variant/30">
          <div className="space-y-8">
            <p className="font-mono text-label-mono text-on-surface-variant">Next Case Study</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group block p-6 rounded-lg border border-outline-variant/30 bg-surface-container/30 hover:bg-surface-container/50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-geist text-headline-md text-on-background-emphasis group-hover:text-primary transition-colors duration-300">
                    {nextProject.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mt-2">{nextProject.headline}</p>
                </div>
                <ArrowRight className="size-6 text-primary flex-shrink-0 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
