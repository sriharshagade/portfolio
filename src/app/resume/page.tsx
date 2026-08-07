import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  const resumeUrl = "https://drive.google.com/file/d/1KvybdGDfAKJafryX19tqAxS6IMc4rrrq/view?usp=sharing";
  const resumePdfUrl = "https://drive.google.com/uc?export=download&id=1KvybdGDfAKJafryX19tqAxS6IMc4rrrq";

  return (
    <main>
      <section className="container pb-32 md:pb-40">
        <div className="max-w-2xl space-y-8">
          {/* Hero */}
          <PageHeader
            title="Resume"
            description="AI Product Engineer building production AI systems from business discovery to deployment."
          />

          {/* Primary Actions */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="primary">
              <a href={resumePdfUrl} download="Sriharsha_Gade_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download aria-hidden="true" className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                View Resume Online
              </a>
            </Button>
          </div>

          {/* Resume Overview */}
          <div className="border-t border-outline-variant/20 pt-8">
            <div className="space-y-3">
              <h2 className="font-geist text-headline-sm text-on-background-emphasis">Resume Overview</h2>
              <p className="text-body-md text-on-surface-variant">
                This resume highlights my experience building AI-powered products across healthcare, automotive, and enterprise software. It covers product discovery, AI engineering, backend development, and end-to-end product delivery.
              </p>
            </div>
          </div>

          {/* Explore Further */}
          <div className="border-t border-outline-variant/20 pt-8">
            <div className="space-y-4">
              <h2 className="font-geist text-headline-sm text-on-background-emphasis">Want more than a resume?</h2>
              <p className="text-body-md text-on-surface-variant">
                The resume provides a summary. My portfolio includes architecture decisions, product thinking, implementation details, and project case studies.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  className="focus-ring inline-flex items-center gap-2 text-body-md text-primary transition-colors hover:text-on-background-emphasis"
                  href="/projects"
                >
                  Explore Projects
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  className="focus-ring inline-flex items-center gap-2 text-body-md text-primary transition-colors hover:text-on-background-emphasis"
                  href="/work"
                >
                  Work
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  className="focus-ring inline-flex items-center gap-2 text-body-md text-primary transition-colors hover:text-on-background-emphasis"
                  href="/about"
                >
                  About Me
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
