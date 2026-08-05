import { cn } from "@/lib/utils";

export function TechChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("rounded-sm border border-outline-variant/50 bg-background px-3 py-1 font-mono text-xs text-on-surface", className)}>
      {children}
    </span>
  );
}
