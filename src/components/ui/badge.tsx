import { cn } from "@/lib/utils";

/**
 * Unified Badge System
 * Standardized badge component with multiple variants
 * All badges share mono font, consistent spacing, and clear color logic
 */

type BadgeVariant = "status" | "category" | "tech" | "capability" | "label";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  pulse?: boolean;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  // Status badges: Small pill with dot indicator (PRODUCTION, BETA, etc.)
  status:
    "inline-flex items-center gap-2 rounded-full border border-outline-variant/50 bg-surface/80 px-3 py-1 font-mono text-micro uppercase tracking-wider text-on-surface-variant backdrop-blur-md",

  // Category tags: Small square, purple text (React, Healthcare AI, etc.)
  category:
    "inline-flex items-center rounded-sm border border-primary/40 bg-transparent px-2 py-1 font-mono text-label-mono text-primary",

  // Tech stack: Medium square, secondary text (Python, Node.js, etc.)
  tech:
    "inline-flex items-center rounded-sm border border-outline-variant bg-background px-4 py-2 font-mono text-label-mono text-on-surface-variant",

  // Capability badges: Medium square, filled with the canonical brand purple (same token as buttons/links)
  capability:
    "inline-flex items-center rounded-sm border border-primary bg-primary px-4 py-2.5 font-mono text-base font-semibold text-on-primary",

  // Label tags: Tiny minimal style (IMG_01, etc.)
  label:
    "inline-flex items-center rounded border border-outline-variant bg-surface/90 px-3 py-1 font-mono text-xs text-primary backdrop-blur",
};

export function Badge({ children, variant = "status", pulse = false, className }: BadgeProps) {
  const classes = cn(variantStyles[variant], className);

  // Status badge has dot indicator
  if (variant === "status") {
    return (
      <span className={classes}>
        <span className={cn("size-2 rounded-full bg-primary", pulse && "animate-pulse")} />
        {children}
      </span>
    );
  }

  return <span className={classes}>{children}</span>;
}
