/**
 * Standardized spacing scale for consistent visual hierarchy
 * Based on 8px baseline unit
 */
export const SPACING = {
  // Individual units (for utility use)
  xs: "8px",      // space-y-2
  sm: "12px",     // space-y-3
  md: "16px",     // space-y-4
  lg: "24px",     // space-y-6
  xl: "32px",     // space-y-8
  "2xl": "48px",  // space-y-12

  // Tailwind class mappings
  tailwind: {
    xs: "space-y-2",
    sm: "space-y-3",
    md: "space-y-4",
    lg: "space-y-6",
    xl: "space-y-8",
    "2xl": "space-y-12",
  },

  // Semantic spacing for specific use cases
  hierarchy: {
    labelToHeading: "space-y-3",      // Tight coupling (12px)
    headingToContent: "space-y-6",    // Normal breathing room (24px)
    sectionSpacing: "space-y-8",      // Section separation (32px)
    majorBreak: "space-y-12",         // Major visual break (48px)
  },

  // Section bottom padding (canonical: 128px mobile, 160px desktop)
  sectionBottom: {
    mobile: "pb-32",                  // 128px (section-bottom-mobile token)
    desktop: "md:pb-40",              // 160px (section-bottom-desktop token)
    full: "pb-32 md:pb-40",           // Both responsive steps
  },

  // Header/navbar clearance
  navbar: {
    mobile: "pt-[96px]",              // Mobile navbar clearance (aligned to 8px grid: 12×8)
    desktop: "md:pt-[120px]",         // Desktop navbar clearance (aligned to 8px grid: 15×8)
  },
} as const;

/**
 * Usage guide:
 *
 * For label-to-heading spacing:
 *   className={`${SPACING.hierarchy.labelToHeading}`}
 *
 * For heading-to-description spacing:
 *   className={`${SPACING.hierarchy.headingToContent}`}
 *
 * For section breaks (heading to divider):
 *   className={`${SPACING.hierarchy.majorBreak}`}
 */
