import Link from "next/link";

const socialLinks = ["LinkedIn", "GitHub", "Twitter", "Email"];

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface py-16 md:py-section-gap">
      <div className="container flex flex-col items-center justify-between gap-gutter md:flex-row">
        <p className="font-geist text-headline-sm text-on-surface">SRIHARSHA GADE</p>
        <nav aria-label="Social links" className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((label) => (
            <Link
              className="font-mono text-label-mono text-on-surface-variant opacity-80 transition-colors hover:text-on-surface hover:opacity-100"
              href="#"
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="font-mono text-xs text-primary/60">© 2026 Sriharsha Gade. Built for the future.</p>
      </div>
    </footer>
  );
}
