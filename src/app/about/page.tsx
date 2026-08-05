import { Code2, MapPin, PenTool, UserRound } from "lucide-react";
import Image from "next/image";

import { Timeline } from "@/components/sections/timeline";
import { TechChip } from "@/components/ui/tech-chip";
import { skills } from "@/data/skills";

const identity = [
  { label: "AI Engineer", icon: Code2 },
  { label: "Product Engineer", icon: PenTool },
  { label: "Solopreneur", icon: UserRound },
  { label: "Bengaluru", icon: MapPin },
];

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="container mb-16 md:mb-section-gap">
        <div className="grid min-h-[620px] items-center gap-gutter lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-outline-variant/50 bg-background px-4 py-2">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-label-mono text-primary">About Me</span>
            </div>
            <h1 className="font-geist text-display-xl-mobile text-on-surface md:text-display-xl">
              Building AI products with engineering discipline and product thinking.
            </h1>
            <p className="max-w-2xl text-body-lg text-on-surface-variant">
              I bridge backend systems, AI models, and intuitive user experiences. My focus is not just clean code, but end-to-end product ownership around real user problems.
            </p>
            <div className="flex flex-wrap gap-4 border-t border-outline-variant/30 pt-4">
              {identity.map((item) => {
                const Icon = item.icon;
                return <span className="inline-flex items-center gap-2 font-mono text-label-mono text-secondary" key={item.label}><Icon aria-hidden="true" className="size-5 text-outline" />{item.label}</span>;
              })}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-outline-variant/50 bg-surface-container">
              <Image alt="Sriharsha Gade portrait placeholder" className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0" fill sizes="(min-width: 1024px) 40vw, 100vw" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmxjUW0qqhhtU7ITppe5YzM6RbK_igeUsRpxqZvi4KFdmFtlqhS0p7PLtDOEGYswKb3SLxhS1wjbzPY2eFJW_MUUVl_UGrmGnWPZVoEEDrzjaNmcI7VQBGNOZHV2nrFAio9o10bpX5cmnGqpG4sQjUoBmzpgmp9oB0JaXW02kuToxfKSwvNqoj5vslrqtMeUyOTh8IIDK57P-WyM_6oV8pRYJHBBs30BVOAAchMcYIkp4KzDUZgq2JoTwpuf80T9NLbGKem9DuShvQG-M" />
              <span className="absolute bottom-4 right-4 rounded border border-outline-variant bg-surface/90 px-3 py-1 font-mono text-xs text-primary backdrop-blur">IMG_01</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-8">
        <div className="flex flex-wrap gap-2">{skills.map((skill) => <TechChip key={skill}>{skill}</TechChip>)}</div>
      </section>
      <Timeline />
    </main>
  );
}
