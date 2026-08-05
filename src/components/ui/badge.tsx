import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  pulse?: boolean;
  tone?: "primary" | "muted";
};

export function Badge({ children, pulse = false, tone = "primary" }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-surface/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant backdrop-blur-md">
      <span className={cn("size-2 rounded-full", tone === "primary" ? "bg-primary" : "bg-secondary", pulse && "animate-pulse")} />
      {children}
    </span>
  );
}
