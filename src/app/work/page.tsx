import { KeyContributions, type Contribution } from "@/components/sections/key-contributions";
import { SPACING } from "@/constants/spacing";

export const metadata = { title: "Work" };

export default function WorkPage() {
  const contributions: Contribution[] = [
    {
      title: "Business Discovery",
      description: "Translating customer problems into technical solutions.",
      detail: "Runs discovery sessions with stakeholders to unpack ambiguous requirements, then reframes them as concrete technical problems the team can act on.",
      isPrimary: true,
    },
    {
      title: "Product Thinking",
      description: "Rapid AI prototyping to validate ideas.",
      detail: "Builds lightweight prototypes early to test assumptions before committing engineering time, using rapid iteration to validate or kill ideas quickly.",
    },
    {
      title: "AI Engineering",
      description: "Developing production-ready APIs and services.",
      detail: "Designs and ships production APIs and services that power AI features, with attention to reliability, latency, and maintainability.",
    },
    {
      title: "Technical Documentation",
      description: "Writing PRDs and technical specifications.",
      detail: "Writes PRDs, technical specs, and API documentation that keep engineering, product, and stakeholders aligned on scope and implementation details.",
    },
    {
      title: "Stakeholder Collaboration",
      description: "Aligning engineering with product and business.",
      detail: "Works across product, design, and engineering to keep priorities aligned, surfacing tradeoffs early and translating technical constraints for non-technical stakeholders.",
    },
    {
      title: "Product Delivery",
      description: "Supporting deployment and continuous improvement.",
      detail: "Supports releases end-to-end, from deployment through post-launch monitoring, and iterates based on real usage and feedback.",
    },
  ];

  const projects = [
    {
      name: "Dash",
      description:
        "AI-powered vehicle ownership platform that helps drivers diagnose issues, perform DIY repairs, find trusted repair shops, source the right parts, securely manage vehicle records through a digital glovebox, and maximize resale value with a complete ownership history.",
      subtitle: "AI-powered automotive assistant.",
    },
    {
      name: "Dash Daily",
      description:
        "AI-powered executive reporting platform that transforms updates from Tiaga, GitHub, Google Meet, Drive, Gemini, and enterprise systems into concise daily progress reports for key stakeholders via Gmail.",
      subtitle: "Executive AI reporting platform.",
    },
    {
      name: "Happy Fit",
      description:
        "AI-powered fitness platform helping users achieve their health goals through personalized workouts, meal planning, and activity tracking, with 10K+ Google Play downloads.",
      subtitle: "AI-powered fitness platform.",
    },
  ];

  return (
    <main className="container pb-32 md:pb-40">
      {/* Header */}
      <div className={`mb-16 ${SPACING.hierarchy.majorBreak}`}>
        <div className="space-y-4">
          <div className="font-mono text-label-mono text-primary">PRIMARY EXPERIENCE</div>
          <div className="space-y-2">
            <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">
              AI/ML Engineer
            </h1>
            <p className="font-geist text-body-md text-on-background-emphasis">Kirusa</p>
          </div>
        </div>
        <div className="h-px bg-outline-variant/50 w-full mt-6" />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="md:col-span-8 flex flex-col gap-16">
          {/* The Role */}
          <section>
            <h2 className="font-geist text-headline-md text-on-background-emphasis mb-6">The Role</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              I contribute to AI-powered products by combining business discovery, AI engineering, backend development,
              and cross-functional collaboration. My work spans product thinking, rapid prototyping, implementation, and
              production delivery.
            </p>
          </section>

          {/* Product Work */}
          <section>
            <h2 className="font-geist text-headline-md text-on-background-emphasis mb-6">Product Work</h2>
            <div className="flex flex-col gap-6">
              {projects.map((project) => (
                <div key={project.name} className="border border-outline-variant/50 p-6 flex flex-col gap-4 rounded-lg">
                  <h3 className="font-headline-sm text-headline-sm text-on-background-emphasis flex items-center gap-2">
                    <span className="text-primary font-bold">{project.name}:</span> {project.subtitle}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 flex flex-col gap-12">
          <KeyContributions contributions={contributions} />
        </div>
      </div>

      {/* Prior Experience Section */}
      <section className="mt-24 pt-16 border-t border-outline-variant/30">
        <div className="font-mono text-label-mono text-primary mb-6">PRIOR EXPERIENCE</div>
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <h2 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">
              Trainee Software Engineer
            </h2>
            <p className="font-geist text-body-md text-on-background-emphasis">Innominds</p>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Worked on business intelligence and data engineering solutions, developing data pipelines, dashboards, and reporting systems for enterprise clients. Collaborated with cross-functional teams to improve data quality, automate reporting workflows, and support data-driven decision-making.
          </p>
        </div>
      </section>
    </main>
  );
}
