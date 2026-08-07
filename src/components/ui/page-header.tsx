import { SPACING } from "@/constants/spacing";

type PageHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  descriptionSize?: "sm" | "lg";
};

export function PageHeader({ label, title, description, descriptionSize = "sm" }: PageHeaderProps) {
  const descriptionClass = descriptionSize === "lg" ? "text-body-lg" : "text-body-md";

  return (
    <header>
      <div className={description ? SPACING.hierarchy.headingToContent : ""}>
        {label && (
          <div className={SPACING.hierarchy.labelToHeading}>
            <div className="font-mono text-label-mono text-primary">{label}</div>
            <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">{title}</h1>
          </div>
        )}
        {!label && (
          <h1 className="font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">{title}</h1>
        )}
        {description && <p className={`${descriptionClass} text-on-surface-variant`}>{description}</p>} {/* on-surface-variant is now #D1D5DB for better contrast */}
      </div>
    </header>
  );
}
