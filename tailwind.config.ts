import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "20px", md: "64px" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        background: "#0b1326",
        surface: "#0b1326",
        "surface-dim": "#0b1326",
        "surface-bright": "#31394d",
        "surface-container-lowest": "#060e20",
        "surface-container-low": "#131b2e",
        "surface-container": "#171f33",
        "surface-container-high": "#222a3d",
        "surface-container-highest": "#2d3449",
        "surface-variant": "#2d3449",
        "on-background": "#dae2fd",
        "on-surface": "#dae2fd",
        "on-surface-variant": "#ccc3d8",
        outline: "#958da1",
        "outline-variant": "#4a4455",
        primary: "#d2bbff",
        "primary-container": "#7c3aed",
        "on-primary": "#3f008e",
        "on-primary-container": "#ede0ff",
        secondary: "#c4c7c9",
        tertiary: "#bcc7de",
        error: "#ffb4ab",
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      fontFamily: {
        geist: ["var(--font-geist)", "Geist", "Inter", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "label-mono": ["14px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "500" }],
        "display-xl-mobile": ["40px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
      },
      spacing: { "section-gap": "128px", gutter: "24px" },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
