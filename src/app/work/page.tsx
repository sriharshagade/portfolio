import { MapPin } from "lucide-react";

export const metadata = { title: "Work" };

export default function WorkPage() {
  const focusAreas = [
    "Business Discovery",
    "Product Thinking",
    "AI Engineering",
    "Backend Development",
    "Rapid Prototyping",
    "Technical Documentation",
    "UI/UX Collaboration",
    "Stakeholder Management",
    "Production Delivery",
  ];

  const contributions = [
    {
      title: "Business Discovery",
      description: "Translating customer problems into technical solutions.",
      isPrimary: true,
    },
    {
      title: "Product Thinking",
      description: "Rapid AI prototyping to validate ideas.",
    },
    {
      title: "AI Engineering",
      description: "Developing production-ready APIs and services.",
    },
    {
      title: "Technical Documentation",
      description: "Writing PRDs and technical specifications.",
    },
    {
      title: "Stakeholder Collaboration",
      description: "Aligning engineering with product and business.",
    },
    {
      title: "Product Delivery",
      description: "Supporting deployment and continuous improvement.",
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
      <header className="mb-16">
        <div className="font-mono text-label-mono text-primary mb-4">PRIMARY EXPERIENCE // JAN 2024 – PRESENT</div>
        <h1 className="font-geist text-display-xl-mobile md:text-display-xl text-on-background-emphasis mb-8">
          Building AI Products at Kirusa
        </h1>
        <div className="h-px bg-outline-variant/50 w-full" />
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {/* The Role */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-primary" />
              <h2 className="font-mono text-label-mono text-on-surface-variant tracking-widest uppercase">The Role</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              I contribute to AI-powered products by combining business discovery, AI engineering, backend development,
              and cross-functional collaboration. My work spans product thinking, rapid prototyping, implementation, and
              production delivery.
            </p>
          </section>

          {/* Product Work */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-primary" />
              <h2 className="font-mono text-label-mono text-on-surface-variant tracking-widest uppercase">Product Work</h2>
            </div>
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
        <div className="lg:col-span-4 flex flex-col gap-12">
          {/* Focus Areas */}
          <div className="border border-outline-variant/50 bg-surface-container-low p-8 rounded-lg">
            <h3 className="font-mono text-label-mono text-on-surface-variant tracking-widest uppercase mb-6">
              Focus Areas
            </h3>
            <div className="flex flex-col gap-3">
              {focusAreas.map((area) => (
                <span key={area} className="font-mono text-label-mono text-primary flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary inline-block" />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Key Contributions */}
          <div>
            <h3 className="font-mono text-label-mono text-on-surface-variant tracking-widest uppercase mb-6">
              Key Contributions
            </h3>
            <div className="flex flex-col gap-4">
              {contributions.map((contribution) => (
                <div
                  key={contribution.title}
                  className={`border-l-2 pl-4 py-2 ${
                    contribution.isPrimary
                      ? "border-primary bg-surface-container-lowest/50"
                      : "border-outline-variant hover:border-primary transition-colors bg-surface-container-lowest/50"
                  }`}
                >
                  <h4 className="font-headline-sm text-headline-sm text-on-background-emphasis mb-1">
                    {contribution.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">{contribution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
