---
name: Obsidian & Ether
colors:
  background: '#0F172A'
  surface: '#162033'
  surface-dim: '#0F172A'
  surface-bright: '#1D2940'
  surface-container-lowest: '#0F172A'
  surface-container-low: '#162033'
  surface-container: '#162033'
  surface-container-high: '#1D2940'
  surface-container-highest: '#1D2940'
  surface-variant: '#162033'
  on-background: '#FFFFFF'
  on-background-emphasis: '#FFFFFF'
  on-surface: '#FFFFFF'
  on-surface-variant: '#FFFFFF'
  outline: '#2B3A55'
  outline-variant: '#405173'
  primary: '#A78BFA'
  primary-container: '#C4B5FD'
  on-primary: '#F8FAFC'
  on-primary-container: '#F8FAFC'
  secondary: '#CBD5E1'
  tertiary: '#F1F5F9'
  error: '#DC2626'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 128px
---

## Brand & Style

This design system targets the intersection of high-end engineering and editorial product design. The aesthetic is **Technical Minimalism**—a blend of high-contrast typography, expansive whitespace, and meticulous structural alignment inspired by modern software powerhouses.

The brand personality is authoritative yet understated. It prioritizes the "Product Engineer" persona by balancing raw technical data with a premium, gallery-like presentation. The emotional response should be one of precision, quality, and forward-thinking intelligence. 

The visual style utilizes a high-contrast dark mode foundation with "ink-trap" inspired typography and surgical application of light. We avoid traditional shadows in favor of tonal layering and subtle, high-frequency outlines to define structure.

## Colors

The palette is anchored in a deep, near-black charcoal to ensure a premium feel and high contrast for technical content.

- **Primary (Accent):** A deep, electric violet (`#7C3AED`) used sparingly for interactive triggers, code syntax highlights, and focus states.
- **Secondary (Content):** A crisp, slightly off-white (`#F8FAFC`) for maximum legibility of body text and headers.
- **Surface & Neutrals:** A range of slate grays (`#1E293B`, `#334155`) are used for borders, subtle backgrounds, and secondary metadata.
- **Background:** The foundation is a rich Obsidian (`#0F172A`) which provides the necessary depth for light-based elevation effects.

## Typography

The typography system follows an editorial rhythm. We pair **Geist** for headlines—leveraging its technical, geometric precision—with **Inter** for body text to maintain high readability. **JetBrains Mono** is introduced for metadata and labels to emphasize the "Engineer" aspect of the brand.

Key treatments:
- **Tight Tracking:** Headlines use negative letter-spacing to create a "locked-in," impactful look.
- **Generous Leading:** Body copy is given ample vertical breathing room to feel sophisticated and approachable.
- **Text Hierarchy:** Contrast is achieved through color stratification, not just size and weight:
  - **Display/Headline Text** (`display-xl`, `display-lg`, `headline-md`, `headline-sm`): Use `on-background-emphasis` (#EDF1FC)—a crisp, near-white with high contrast for maximum visual impact.
  - **Body/Paragraph Text** (`body-lg`, `body-md`): Use `on-background` (#dae2fd) or `on-surface-variant` (#ccc3d8) for secondary/de-emphasized content.
  - **Interactive Elements** (buttons, links, accents): Use `primary` (#d2bbff) and `primary-container` (#7c3aed) unchanged.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** with fixed maximum width for content containers. The spacing philosophy is based on a 4px baseline, but emphasizes large, intentional gaps between major sections to mimic high-end print media.

- **Grid:** On desktop, a 12-column layout with 24px gutters. On mobile, a single-column layout with 20px side margins.
- **Whitespace:** Use significant vertical padding (`section-gap`) to allow the engineer’s work to be viewed in isolation, preventing visual clutter.
- **Alignment:** All technical chips and labels should align to the typography’s cap height to maintain a "structured" feel.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layering** and **Surgical Borders** rather than traditional shadows.

- **Base Layer:** Obsidian (`#0F172A`).
- **Surface Layer:** Slate Container (`#1E293B`) with a 1px solid border of a slightly lighter slate (`#334155`).
- **Active State:** Elements may use a subtle inner glow or a 1px Primary Violet border to indicate focus.
- **Glassmorphism:** Used exclusively for navigation bars and floating action menus. Use a 12px backdrop blur with a 10% opacity white fill to allow content to peek through while maintaining legibility.

## Shapes

The shape language is "Soft-Tech." We avoid fully organic circles or razor-sharp corners. 

- **Standard Radius:** 4px (Soft) for buttons, inputs, and small cards.
- **Large Radius:** 8px (Large) for major project cards or image containers.
- **Geometric Rigidity:** Interactive elements should maintain a rectangular bias to reinforce the "Technical" aspect of the system.

## Components

### Buttons
- **Primary:** Solid White text on a Transparent background with a 1px white border. On hover, the background fills white and text flips to Obsidian.
- **Ghost:** Monospaced label in Slate Gray, turning White on hover with no background change.

### Visual Cards
- **Project Cards:** Full-width or half-grid cards with a subtle 1px border. Images should have a slight grayscale filter, returning to full color on hover. Typography inside cards uses `headline-sm` for titles.

### Technology Chips
- **Style:** Small, monospaced labels using `label-mono`.
- **Appearance:** Obsidian background with a 1px Slate border. No icons, just text for a clean, metadata-heavy look.

### Timelines
- **Structure:** Vertical 1px Slate line. Nodes are 8px hollow circles. Content is offset to the right, using `headline-sm` for roles and `body-md` for descriptions.

### Input Fields
- **Design:** Bottom-border only for a minimalist, editorial feel. Labels are positioned above the input in `label-mono` at 50% opacity. Focus state animates the bottom border to the Primary Violet.

### Additional Components
- **Code Snippets:** Syntax highlighting should be customized to the Primary Violet and Slate palette.
- **Section Headers:** Large `display-xl` headers should be preceded by a small monospaced index (e.g., "01/") in Primary Violet.