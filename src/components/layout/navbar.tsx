"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-t border-b border-outline-variant/30 bg-surface/80 backdrop-blur-xl pt-2 md:pt-3">
      <div className="container flex h-16 items-center justify-between">
        <Link className="font-geist text-logo text-on-surface" href="/">
          SRIHARSHA GADE
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                className={`focus-ring text-body-md transition-colors border-b-2 pb-1 ${
                  active
                    ? "text-primary border-primary"
                    : "text-on-surface-variant border-transparent hover:text-primary"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button asChild className="hidden md:inline-flex" variant="outline">
          <Link href="/contact">Connect</Link>
        </Button>
        <button
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="focus-ring inline-flex size-10 items-center justify-center rounded-md text-on-surface transition-colors hover:text-primary md:hidden"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>
      {isOpen && (
        <nav className="border-t border-outline-variant/30 bg-surface md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  className={`focus-ring rounded-md px-3 py-2 text-body-md transition-colors ${
                    active
                      ? "bg-surface-variant text-primary"
                      : "text-on-surface-variant hover:bg-surface-variant hover:text-primary"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              className="focus-ring rounded-md px-3 py-2 text-body-md text-on-surface-variant transition-colors hover:bg-surface-variant hover:text-primary"
              href="/contact"
              onClick={closeMenu}
            >
              Connect
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
