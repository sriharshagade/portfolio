import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <div className={cn("rounded-xl border border-outline-variant/30 bg-surface-container", className)}>{children}</div>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="inline-flex items-center gap-2 font-mono text-label-mono text-primary transition-colors hover:text-on-surface" href={href}>
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </Link>
  );
}
