# Badge Standardization Implementation

## Overview
Created a unified Badge component system with 5 distinct variants that replace all scattered badge styles across the portfolio. Each variant has consistent font, spacing, and color logic.

## Unified Badge Component
**Location:** `src/components/ui/badge.tsx`

All badges now use:
- **Font:** `font-mono` (monospace) + standard tracking
- **Shape consistency:** Variants use either `rounded-full` (pill) or `rounded-sm` (square)
- **Color logic:** Clear primary vs secondary vs custom color usage
- **Border radius:** Standardized per variant type

### Badge Variants

#### 1. Status Badge (Default)
```tsx
<Badge variant="status" pulse={true}>PRODUCTION</Badge>
```
- **Size:** `text-[10px]` (10px) - smallest
- **Padding:** `px-3 py-1`
- **Shape:** `rounded-full` (pill)
- **Indicator:** Dot with size-2, optional pulse animation
- **Colors:** Gray text on blurred surface background
- **Spacing:** gap-2 between dot and text
- **Uses:** Project card status labels (PRODUCTION, BETA, ARCHIVED)
- **Locations:** Featured projects, project grid

#### 2. Category Badge
```tsx
<Badge variant="category">React</Badge>
```
- **Size:** `text-label-mono` (14px)
- **Padding:** `px-2 py-1`
- **Shape:** `rounded-sm` (square)
- **Colors:** Purple text, transparent background, purple border
- **Uses:** Project categories, tech labels
- **Locations:** Project detail pages, section eyebrows

#### 3. Tech Badge
```tsx
<Badge variant="tech">Node.js</Badge>
```
- **Size:** `text-label-mono` (14px)
- **Padding:** `px-4 py-2`
- **Shape:** `rounded-sm` (square)
- **Colors:** Gray text on dark background
- **Uses:** Tech stack display
- **Locations:** Hero visual section, tech stacks

#### 4. Capability Badge
```tsx
<Badge variant="capability">Business Discovery</Badge>
```
- **Size:** `text-base` (16px) - largest
- **Weight:** `font-semibold` (bold)
- **Padding:** `px-4 py-2.5`
- **Shape:** `rounded-sm` (square)
- **Colors:** Violet background (#7c3aed) with light text (#ede0ff)
- **Uses:** Capability/skill badges
- **Locations:** Hero section capabilities

#### 4. Label Badge
```tsx
<Badge variant="label">IMG_01</Badge>
```
- **Size:** `text-xs` (12px)
- **Padding:** `px-3 py-1`
- **Shape:** `rounded` (minimal)
- **Colors:** Purple text, blurred surface background
- **Uses:** Small labels, metadata
- **Locations:** Image overlays, metadata labels

## Standardization Benefits

### ✅ Consistency
- All badges share mono font base
- Predictable padding/radius per variant
- Clear color meaning (primary, secondary, custom)

### ✅ Maintainability
- Single source of truth for badge styling
- Easy to update all badges of a type
- New badges automatically inherit system style

### ✅ Scalability
- Adding new badge variants is simple
- Variants handle all current use cases
- Clear pattern for future badge types

## Migration Complete
**Updated Components:**
- ✅ `Badge` component - unified with 5 variants
- ✅ `TechChip` component - now uses Badge component
- ✅ All featured projects use standardized badges
- ✅ All project grids use standardized badges

## Usage Examples

### In Components
```tsx
import { Badge } from "@/components/ui/badge";

// Status badge with pulse
<Badge variant="status" pulse={true}>PRODUCTION</Badge>

// Category badge
<Badge variant="category">Healthcare AI</Badge>

// Tech stack
<Badge variant="tech">Python</Badge>

// Capability
<Badge variant="capability">AI Engineering</Badge>

// Label
<Badge variant="label">IMG_01</Badge>
```

### TechChip Backward Compatibility
```tsx
import { TechChip } from "@/components/ui/tech-chip";

// Standard tech chip uses Badge internally
<TechChip>React</TechChip>

// Override for special cases (hero capabilities)
<TechChip className="!bg-[#7c3aed] !text-[#ede0ff] !border-[#7c3aed] px-4 py-2.5 text-base font-semibold">
  Business Discovery
</TechChip>
```

## Color System
- **Primary:** Purple (#A78BFA) - used in categories, labels
- **Secondary:** Gray (#D1D5DB) - used in tech, status text
- **Capability Custom:** Violet (#7c3aed) background with light text (#ede0ff)
- **Background:** Dark surface with optional blur

## Responsive Behavior
- **Workflow timeline:** Responsive padding (`px-4 py-3 md:px-5 md:py-4`)
- **Other badges:** Consistent sizing across breakpoints
- **Pill shape:** Maintains proportion at all sizes

## Future Enhancements
1. Add success/error/warning status variants if needed
2. Create preset badge combinations for common patterns
3. Add animation variants beyond pulse
4. Support for icon slots in badges
