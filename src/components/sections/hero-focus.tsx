const focusAreas = [
  "Business Discovery",
  "AI Prototyping",
  "LLM Evaluation",
  "Technical Direction",
];

export function HeroFocus() {
  return (
    <div className="space-y-6">
      <p className="font-mono text-xs uppercase tracking-widest text-on-surface-variant/60">Focus Areas</p>
      <div className="space-y-3">
        {focusAreas.map((area, index) => (
          <div key={area} className="flex items-start gap-3">
            <div className="mt-1 h-1 w-1 rounded-full bg-primary/40 flex-shrink-0" />
            <p className="text-sm text-on-surface-variant">{area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
