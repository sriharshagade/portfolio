type SectionHeaderProps = {
  index?: string;
  title: string;
  copy?: string;
  centered?: boolean;
};

export function SectionHeader({ index, title, copy, centered = false }: SectionHeaderProps) {
  return (
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`mb-6 flex items-baseline gap-4 ${centered ? "justify-center" : ""}`}>
        {index ? <span className="font-mono text-label-mono text-primary">{index}/</span> : null}
        <h2 className="font-geist text-display-lg text-on-background-emphasis md:text-display-xl-mobile">{title}</h2>
      </div>
      {copy ? <p className="text-body-lg text-on-surface-variant">{copy}</p> : null}
    </header>
  );
}
