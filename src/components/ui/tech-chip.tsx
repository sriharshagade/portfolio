import { cn } from "@/lib/utils";

export function TechChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("rounded-sm border border-outline-variant bg-background px-4 py-2 font-mono text-label-mono text-on-surface-variant", className)}>
      {children}
    </span>
  );
}
