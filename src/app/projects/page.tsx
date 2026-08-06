import { ProjectGrid } from "@/components/sections/project-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="container pb-32 md:pb-section-gap">
      <section className="mb-16">
        <SectionHeader
          copy="A collection of engineering projects focused on product architecture, AI workflows, intuitive interfaces, and real-world execution."
          index="02"
          title="Selected Works"
        />
      </section>
      <ProjectGrid projects={projects} />
    </main>
  );
}
