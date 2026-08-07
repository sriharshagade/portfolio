import { MapPin } from "lucide-react";
import Image from "next/image";

import { Timeline } from "@/components/sections/timeline";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="container relative z-10 pb-32 pt-4 md:pb-40 md:pt-6">
          <div className="grid gap-gutter md:grid-cols-12 items-start">
            <div className="md:col-span-6 space-y-6">
              <div className="space-y-6">
                <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">
                  I enjoy solving difficult business problems with AI.
                </h1>
                <p className="text-body-md leading-7 text-on-surface-variant">
                  I work at the intersection of business and engineering. Most of my time is spent understanding messy, ambiguous problems from stakeholders, building rapid AI prototypes to test ideas, and helping teams understand what&apos;s technically feasible. I&apos;m drawn to work where the biggest uncertainty isn&apos;t technical—it&apos;s whether the problem is worth solving.
                </p>
              </div>
              <p className="text-body-md leading-7 text-on-surface-variant">
                I care about clarity. That means asking hard questions early, building to learn, evaluating honestly, and giving engineering teams the context they need to make good decisions.
              </p>
              <div className="flex items-center gap-2 text-body-md text-on-surface-variant">
                <MapPin className="size-5 flex-shrink-0" />
                <span>Bengaluru, India</span>
              </div>
            </div>
            <div className="md:col-span-5 flex items-start">
              <div className="group relative aspect-[3/4] w-full max-h-[600px] md:max-h-none overflow-hidden rounded-lg border border-outline-variant/50 bg-surface-container">
                <Image alt="Sriharsha Gade portrait" className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0" fill sizes="(min-width: 1024px) 34vw, 100vw" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmxjUW0qqhhtU7ITppe5YzM6RbK_igeUsRpxqZvi4KFdmFtlqhS0p7PLtDOEGYswKb3SLxhS1wjbzPY2eFJW_MUUVl_UGrmGnWPZVoEEDrzjaNmcI7VQBGNOZHV2nrFAio9o10bpX5cmnGqpG4sQjUoBmzpgmp9oB0JaXW02kuToxfKSwvNqoj5vslrqtMeUyOTh8IIDK57P-WyM_6oV8pRYJHBBs30BVOAAchMcYIkp4KzDUZgq2JoTwpuf80T9NLbGKem9DuShvQG-M" />
                <span className="absolute bottom-4 right-4 rounded border border-outline-variant bg-surface/90 px-3 py-1 font-mono text-xs text-primary backdrop-blur">IMG_01</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Timeline />
    </main>
  );
}
