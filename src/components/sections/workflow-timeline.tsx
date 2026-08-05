const workflowSteps = [
  "Business Discovery",
  "Problem Framing",
  "AI Prototyping",
  "Technical Direction",
  "Production Delivery",
];

export function WorkflowTimeline() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">How I Work</p>
      <div className="flex flex-col gap-3 md:gap-4">
        {workflowSteps.map((step, index) => (
          <div key={step} className="flex flex-col gap-3 md:gap-4">
            <div className="rounded-full border border-outline-variant/40 bg-surface-container/30 px-4 py-3 md:px-5 md:py-4">
              <p className="font-mono text-xs md:text-sm text-on-surface-variant">{step}</p>
            </div>
            {index < workflowSteps.length - 1 && (
              <div className="flex justify-center">
                <div className="h-4 md:h-6 w-px bg-outline-variant/30" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
