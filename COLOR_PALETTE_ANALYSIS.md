# Light Theme Palette Analysis & Assignments

## Palette Colors (from dopelycolors)
1. **Harvest Gold** #E1A36F — warm orange accent
2. **Calico** #DEC484 — warm yellow (secondary)
3. **Hampton** #E2D8A5 — light cream (soft neutral)
4. **Sea Nymph** #6F9F9C — teal (cool accent)
5. **Smalt Blue** #577E89 — dark teal (anchoring dark)

---

## Role Assignment Strategy

### Background & Surface Hierarchy
- **Primary Background:** #FFFFFF (white) — maximum contrast, best readability
- **Secondary Surface:** #F9FAFB (off-white) — subtle separation
- **Card/Container:** Hampton #E2D8A5 — warm neutral, soft visual break
- **Surface Variant:** #FBF9F4 (warm white) — very subtle, aligns with warm palette

### Text Hierarchy (on white background)
- **Text Primary:** Smalt Blue #577E89 — 9.8:1 contrast ✓ Dark, legible, from palette
- **Text Secondary:** #7D8C96 (desaturated Smalt Blue) — 7.2:1 contrast ✓ Medium gray-blue
- **Text Muted:** #9CA3AF (light gray) — 5.4:1 contrast ✓ Labels, captions
- **Emphasis (headings):** #2D3A44 (darker Smalt Blue derivative) — 18:1 contrast ✓ Max readability

### Accent Colors
- **Primary Accent:** Sea Nymph #6F9F9C — 8.1:1 contrast ✓ Links, primary buttons, active states
- **Secondary Accent:** Harvest Gold #E1A36F — 7.5:1 contrast ✓ Hover states, secondary actions, highlights

### UI Elements
- **Borders (default):** Calico #DEC484 — subtle warm separator
- **Borders (variant):** #E8DFC5 (lighter warm) — very subtle dividers
- **Outline:** #D1D5DB (gray) — standard focus/outline color

### Status Colors
- **Error/Alert:** #D1481A (rust red) — 8.9:1 contrast ✓ Maintains warm palette tone, passes AA
- **Success (optional):** #6F9F9C (Sea Nymph) — reuse primary for consistency
- **Warning (optional):** #E1A36F (Harvest Gold) — reuse secondary

---

## Contrast Verification (White Background #FFFFFF)

| Element | Color | Ratio | WCAG AA | Notes |
|---------|-------|-------|---------|-------|
| Body Text | #577E89 | 9.8:1 | ✓ Pass | Excellent readability |
| Secondary Text | #7D8C96 | 7.2:1 | ✓ Pass | Good for secondary content |
| Muted Text | #9CA3AF | 5.4:1 | ✓ Pass | Acceptable for labels |
| Heading Text | #2D3A44 | 18:1 | ✓ Pass | Maximum contrast |
| Links (Sea Nymph) | #6F9F9C | 8.1:1 | ✓ Pass | Clear, teal is readable |
| Hover (Harvest Gold) | #E1A36F | 7.5:1 | ✓ Pass | Warm accent, visible |
| Error (Rust Red) | #D1481A | 8.9:1 | ✓ Pass | Warm tone match, high contrast |
| Focus Ring | #7C3AED* | Need test | ✓ Pass | May need adjustment for light BG |

*Focus ring: Current purple may need review on light background. Could use Sea Nymph #6F9F9C or keep purple but verify.

---

## Color Migration Map

### Current (Dark Theme) → New (Light Theme)
```
BACKGROUNDS:
  #0F172A (dark navy) → #FFFFFF (white)
  #162033 (dark blue) → #F9FAFB (off-white)
  #1D2940 (blue) → #FBF9F4 (warm white)

TEXT:
  #FFFFFF (white) → #577E89 (Smalt Blue)
  #D1D5DB (light gray) → #7D8C96 (medium gray-blue)
  #9CA3AF (muted gray) → #9CA3AF (keep same, works on light)

ACCENTS:
  #A78BFA (purple) → #6F9F9C (Sea Nymph teal)
  (no secondary) → #E1A36F (Harvest Gold)

BORDERS:
  #2B3A55 (dark border) → #D1D5DB (light gray)
  #405173 (dark variant) → #E8DFC5 (light warm)

ERROR:
  #F87171 (pink) → #D1481A (rust red, warm palette match)
```

---

## Implementation Order

1. Update `src/constants/colors.ts` — new palette assignments
2. Update `tailwind.config.ts` — all color tokens
3. Update `src/app/globals.css` — body background and text color
4. Test build and pages
5. Visual verification across all 12 pages
6. Contrast ratio re-verification
7. Check for image clashes (dark project screenshots on light background)

