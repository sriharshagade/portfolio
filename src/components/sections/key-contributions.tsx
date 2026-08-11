"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type Contribution = {
  title: string;
  description: string;
  detail: string;
  isPrimary?: boolean;
};

export function KeyContributions({ contributions }: { contributions: Contribution[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <h3 className="font-geist text-headline-md text-on-background-emphasis mb-6">Key Contributions</h3>
      <div className="flex flex-col gap-4">
        {contributions.map((contribution) => {
          const isOpen = expanded === contribution.title;
          return (
            <div
              key={contribution.title}
              className={`border-l-2 pl-4 py-2 transition-colors bg-surface-container-lowest/50 ${
                isOpen ? "border-primary" : "border-transparent hover:border-primary"
              }`}
            >
              <button
                aria-expanded={isOpen}
                className="focus-ring flex w-full items-start justify-between gap-3 rounded-sm text-left"
                onClick={() => setExpanded(isOpen ? null : contribution.title)}
                type="button"
              >
                <span>
                  <span className="mb-1 block font-headline-sm text-headline-sm text-on-background-emphasis">
                    {contribution.title}
                  </span>
                  <span className="block font-body-md text-sm text-body-md text-on-surface-variant">
                    {contribution.description}
                  </span>
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`mt-1 size-4 shrink-0 text-on-surface-variant transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <p className="mt-3 border-t border-outline-variant/30 pt-3 font-body-md text-sm text-body-md text-on-surface-variant">
                  {contribution.detail}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
