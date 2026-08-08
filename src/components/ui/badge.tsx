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
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  // Status badges: Soft-fill pill without dot (PRODUCTION, BETA, etc.)
  status:
    "inline-flex items-center rounded-full bg-primary/15 px-3 py-1 font-mono text-micro uppercase tracking-wider text-primary",

  // Category tags: Small square, purple text (React, Healthcare AI, etc.)
  category:
    "inline-flex items-center rounded-sm border border-primary/40 bg-transparent px-2 py-1 font-mono text-label-mono text-primary",

  // Tech stack: Flat neutral gray (Python, Node.js, etc.)
  tech:
    "inline-flex items-center rounded-sm bg-surface-container-high px-2.5 py-1 font-mono text-xs text-on-surface-variant",

  // Capability badges: Soft-fill pill (Business Discovery, AI Prototyping, etc.)
  capability:
    "inline-flex items-center rounded-full bg-primary/15 px-3 py-1 font-mono text-micro uppercase tracking-wider text-primary",

  // Label tags: Tiny minimal style (IMG_01, etc.)
  label:
    "inline-flex items-center rounded border border-outline-variant bg-surface/90 px-3 py-1 font-mono text-xs text-primary backdrop-blur",
};

export function Badge({ children, variant = "status", className }: BadgeProps) {
  const classes = cn(variantStyles[variant], className);
  return <span className={classes}>{children}</span>;
}
