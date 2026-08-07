# Badge Audit Report

## Current Badge Styles (Inconsistent)

### 1. Status Badge
**Component:** `Badge` (featured-projects, project-grid)
- **Font:** `font-mono text-[10px] uppercase tracking-wider`
- **Padding:** `px-3 py-1`
- **Border:** `border border-outline-variant/50`
- **Shape:** `rounded-full` (pill shape)
- **Background:** `bg-surface/80 backdrop-blur-md`
- **Text Color:** `text-on-surface-variant`
- **Indicator:** Dot with gap-2 (size-2, primary/secondary colors, pulse animation)
- **Examples:** PRODUCTION, BETA, ARCHIVED
- **Locations:** Project cards (featured & grid)

### 2. Category Tags
**Component:** Inline span (project detail pages)
- **Font:** `font-mono text-label-mono text-primary` (14px)
- **Padding:** `px-2 py-1`
- **Border:** `border border-primary/40`
- **Shape:** `rounded-sm`
- **Background:** None (transparent)
- **Examples:** React, Healthcare AI Workflow, etc.
- **Locations:** Project detail pages, section eyebrows

### 3. Tech Stack Chips
**Component:** `TechChip` (hero-visual, featured-projects)
- **Font:** `font-mono text-label-mono` (14px)
- **Padding:** `px-4 py-2`
- **Border:** `border border-outline-variant`
- **Shape:** `rounded-sm`
- **Background:** `bg-background`
- **Text Color:** `text-on-surface-variant`
- **Examples:** React, Node.js, Python, PostgreSQL, etc.
- **Locations:** Hero section, featured projects

### 4. Capability Badges (Hero)
**Component:** `TechChip` with override classes
- **Font:** `text-base font-semibold` (16px, bold)
- **Padding:** `px-4 py-2.5`
- **Background:** `bg-[#7c3aed]` (violet)
- **Text Color:** `text-[#ede0ff]` (light)
- **Border:** `border-[#7c3aed]`
- **Examples:** Business Discovery, AI Prototyping, etc.
- **Locations:** Hero section capabilities

### 5. Image Labels
**Component:** Inline span (about page)
- **Font:** `font-mono text-xs`
- **Padding:** `px-3 py-1`
- **Border:** `border border-outline-variant`
- **Shape:** `rounded`
- **Background:** `bg-surface/90 backdrop-blur`
- **Text Color:** `text-primary`
- **Examples:** IMG_01
- **Locations:** About page image overlay

### 6. Workflow Timeline Tags
**Component:** Inline div (workflow-timeline)
- **Font:** Default body text
- **Padding:** `px-4 py-3 md:px-5 md:py-4`
- **Border:** `border border-outline-variant/40`
- **Shape:** `rounded-full`
- **Background:** `bg-surface-container/30`
- **Locations:** Workflow timeline section

### 7. Hero Visual Tags
**Component:** Inline div (hero-visual)
- **Font:** Default body text
- **Padding:** `px-2 py-1`
- **Border:** `border border-outline-variant/50`
- **Shape:** `rounded`
- **Background:** `bg-surface-container/40`
- **Examples:** Next.js, React, Python, PostgreSQL
- **Locations:** Hero visual section

## Standardization Issues

### Size Inconsistencies
- Status badge: `text-[10px]` (10px)
- Tech chips: `text-label-mono` (14px)
- Hero capabilities: `text-base` (16px)
- Image labels: `text-xs` (12px)

### Padding Inconsistencies
- Tight: `px-2 py-1` (status, images)
- Medium: `px-3 py-1` or `px-4 py-2` (status, tech chips)
- Loose: `px-4 py-3` (workflow)

### Border Radius Inconsistencies
- Pill: `rounded-full` (status, workflow)
- Square: `rounded-sm` (categories, tech chips)
- Minimal: `rounded` (images, hero visual)

### Color Logic
- **Inconsistent:** No clear semantic meaning
- Status badges use `text-on-surface-variant` (gray)
- Categories use `text-primary` (purple)
- Tech chips use `text-on-surface-variant` (gray)
- Capabilities use custom purple

### Icon/Indicator Usage
- Only Status Badge has dot indicator
- Inconsistent dot sizing (size-2)
- Indicator color varies (primary/secondary)
- Other badges have no visual indicators

## Standardization Plan

Create unified badge component with variants:
1. **Status** - Pill shape, dot indicator, gray text, small size
2. **Category** - Square shape, primary text, small-medium size
3. **Tech** - Square shape, secondary text, medium size
4. **Capability** - Square shape, custom colors, medium-large size
5. **Label** - Minimal shape, primary text, tiny size

All variants should share:
- Consistent mono font
- Standardized padding/border-radius per variant
- Clear color logic (primary vs secondary vs custom)
- Optional dot indicator for status
- Responsive sizing where needed
