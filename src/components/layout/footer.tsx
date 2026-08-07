import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://in.linkedin.com/in/sriharshagade" },
  { label: "GitHub", href: "https://github.com/sriharshagade" },
  { label: "Email", href: "mailto:hello@sriharshagade.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface py-12 md:py-16">
      <div className="container flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-geist text-headline-sm text-on-background-emphasis">Let&apos;s build something meaningful together.</p>
          </div>
          <nav aria-label="Social links" className="flex flex-wrap gap-8">
            {socialLinks.map((item) => (
              <Link
                className="focus-ring font-mono text-label-mono text-on-surface-variant transition-colors hover:text-primary"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-outline-variant/20 pt-8">
          <p className="font-mono text-xs text-text-muted">© {new Date().getFullYear()} Sriharsha Gade. AI Engineer bridging business and engineering.</p>
        </div>
      </div>
    </footer>
  );
}
