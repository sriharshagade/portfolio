import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/30 bg-surface/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link className="font-geist text-headline-sm tracking-[-0.04em] text-on-surface" href="/">
          SRIHARSHA GADE
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              className="text-body-md text-on-surface-variant transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex" variant="outline">
          <Link href="/contact">Connect</Link>
        </Button>
        <button
          aria-label="Open navigation menu"
          className="inline-flex size-10 items-center justify-center rounded-md text-on-surface transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          type="button"
        >
          <Menu aria-hidden="true" className="size-5" />
        </button>
      </div>
    </header>
  );
}
