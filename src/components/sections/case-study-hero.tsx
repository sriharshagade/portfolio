import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CaseStudyHeroProps {
  category: string;
  projectName: string;
  badge: string;
  description: string;
  demoUrl?: string;
  demoLabel?: string;
}

export function CaseStudyHero({
  category,
  projectName,
  badge,
  description,
  demoUrl,
  demoLabel = "View Demo",
}: CaseStudyHeroProps) {
  return (
    <section className="container py-16 md:py-20">
      <div className="space-y-6 md:space-y-8">
        {/* Category Label */}
        <p className="font-mono text-label-mono text-primary">{category}</p>

        {/* Title + Badge Row */}
        <div className="flex flex-wrap items-baseline justify-between gap-3 md:gap-4">
          <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">
            {projectName}
          </h1>
          <Badge variant="status" className="bg-surface-container-high text-on-surface-variant flex-shrink-0">
            {badge}
          </Badge>
        </div>

        {/* Description + Demo Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <p className="text-body-lg text-on-surface-variant max-w-2xl">{description}</p>
          {demoUrl && (
            <Button asChild variant="primary" className="md:flex-shrink-0 md:w-auto w-full">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                {demoLabel}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
