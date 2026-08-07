import { experience } from "@/data/experience";

export function Timeline() {
  return (
    <section className="container pt-8 pb-32 md:pt-12 md:pb-40">
      <div className="relative max-w-3xl border-l border-outline-variant/70 pl-8">
        {experience.map((item) => (
          <article className="relative pb-12 last:pb-0" key={item.role}>
            <span className="absolute -left-[37px] top-2 -translate-y-1/2 size-4 rounded-full border border-primary bg-background" />
            <p className="mb-2 font-mono text-label-mono text-primary">{item.period}</p>
            <h2 className="font-geist text-headline-sm text-on-background-emphasis">{item.role}</h2>
            <p className="mt-3 text-body-md text-on-surface-variant">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
