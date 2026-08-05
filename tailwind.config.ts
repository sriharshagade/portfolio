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
        background: "#0F172A",
        surface: "#162033",
        "surface-dim": "#0F172A",
        "surface-bright": "#1D2940",
        "surface-container-lowest": "#0F172A",
        "surface-container-low": "#162033",
        "surface-container": "#162033",
        "surface-container-high": "#1D2940",
        "surface-container-highest": "#1D2940",
        "surface-variant": "#162033",
        "on-background": "#FFFFFF",
        "on-background-emphasis": "#FFFFFF",
        "on-surface": "#FFFFFF",
        "on-surface-variant": "#FFFFFF",
        outline: "#2B3A55",
        "outline-variant": "#405173",
        primary: "#A78BFA",
        "primary-container": "#C4B5FD",
        "on-primary": "#F8FAFC",
        "on-primary-container": "#F8FAFC",
        secondary: "#CBD5E1",
        tertiary: "#F1F5F9",
        error: "#DC2626",
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
