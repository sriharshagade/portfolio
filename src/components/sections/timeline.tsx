import { experience } from "@/data/experience";

export function Timeline() {
  return (
    <section className="container pt-8 pb-32 md:pt-12 md:pb-40">
      <div className="max-w-3xl">
        {experience.map((item) => (
          <article className="pb-12 last:pb-0" key={item.role}>
            <p className="mb-2 font-mono text-label-mono text-primary">{item.period}</p>
            <h2 className="font-geist text-headline-sm text-on-background-emphasis">{item.role}</h2>
            <p className="mt-3 text-body-md text-on-surface-variant">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
