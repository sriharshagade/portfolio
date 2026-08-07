/**
 * Standardized label tag for section headers, categories, and metadata
 * Consistent sizing, spacing, and color across all pages
 */

type LabelTagProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function LabelTag({ children, variant = "primary" }: LabelTagProps) {
  const baseStyles = "font-mono text-label-mono uppercase tracking-widest";

  const variantStyles = {
    primary: "text-primary",
    secondary: "text-on-surface-variant",
  };

  return <span className={`${baseStyles} ${variantStyles[variant]}`}>{children}</span>;
}
