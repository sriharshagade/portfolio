import { FileText, Github, Linkedin, MapPin, MessageCircle, Mail, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { ContactForm } from "@/components/sections/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { LabelTag } from "@/components/ui/label-tag";
import { TechChip } from "@/components/ui/tech-chip";

const focusAreas = ["AI Products", "Developer Tools", "SaaS", "Healthcare Tech", "Product Engineering", "Automation"];
const socials: Array<{ label: string; icon?: LucideIcon; isCustom?: boolean; href: string }> = [
  { label: "Email", icon: Mail, href: "mailto:hello@sriharshagade.com" },
  { label: "WhatsApp", isCustom: true, href: "https://wa.me/918297997929" },
  { label: "LinkedIn", icon: Linkedin, href: "https://in.linkedin.com/in/sriharshagade" },
  { label: "GitHub", icon: Github, href: "https://github.com/sriharshagade" },
  { label: "Resume", icon: FileText, href: "https://drive.google.com/uc?export=download&id=1KvybdGDfAKJafryX19tqAxS6IMc4rrrq" },
];

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="container pb-32 md:pb-40">
      <div className="grid gap-gutter md:grid-cols-12 md:gap-x-24">
        <section className="md:col-span-7">
          <div className="mb-12">
            <PageHeader
              title="Let&apos;s build something meaningful."
              description="Whether you&apos;re hiring an AI engineer, looking for a product builder, or want to discuss an idea, I&apos;d love to hear from you."
              descriptionSize="lg"
            />
          </div>
          <ContactForm />
        </section>
        <aside className="mt-16 flex flex-col gap-10 border-t border-outline-variant/30 pt-10 md:col-span-5 md:mt-0 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <section className="border-b border-outline-variant/30 pb-8">
            <p className="mb-4"><LabelTag>Direct Contact</LabelTag></p>
            <a className="focus-ring block font-geist text-headline-sm transition-colors hover:text-primary" href="mailto:hello@sriharshagade.com">hello@sriharshagade.com</a>
            <a className="focus-ring mt-4 flex items-center gap-2 text-on-surface-variant transition-colors hover:text-primary" href="https://wa.me/918297997929"><MessageCircle className="size-5" />+91 8297997929</a>
            <p className="mt-3 flex items-center gap-2 text-on-surface-variant"><MapPin className="size-5" />Bengaluru, India</p>
          </section>
          <section className="border-b border-outline-variant/30 pb-8">
            <p className="mb-4"><LabelTag>Focus Areas</LabelTag></p>
            <div className="flex flex-wrap gap-2">{focusAreas.map((area) => <TechChip key={area}>{area}</TechChip>)}</div>
          </section>
          <section className="border-b border-outline-variant/30 pb-8">
            <p className="mb-4"><LabelTag>Socials</LabelTag></p>
            <div className="flex gap-6">
              {socials.map((item) => {
                if (item.isCustom) {
                  return (
                    <a className="focus-ring flex flex-col items-center gap-1 rounded-sm text-on-surface-variant transition-colors hover:text-primary group" href={item.href} key={item.label}>
                      <svg className="size-5 text-on-surface-variant group-hover:text-primary transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21l1.65-5.27A9 9 0 1 1 19.07 3.34"/>
                        <path d="M9 10a1 1 0 1 1 2 0a1 1 0 0 1 -2 0"/>
                        <path d="M12 13a1 1 0 1 1 2 0a1 1 0 0 1 -2 0"/>
                        <path d="M15 10a1 1 0 1 1 2 0a1 1 0 0 1 -2 0"/>
                      </svg>
                      <span className="font-mono text-micro">{item.label}</span>
                    </a>
                  );
                }
                if (!item.icon) return null;
                const Icon = item.icon;
                return <a className="focus-ring flex flex-col items-center gap-1 rounded-sm text-on-surface-variant transition-colors hover:text-primary" href={item.href} key={item.label}><Icon className="size-5" /><span className="font-mono text-micro">{item.label}</span></a>;
              })}
            </div>
          </section>
          <section>
            <p className="mb-4"><LabelTag>Availability</LabelTag></p>
            <p className="text-body-md text-on-surface-variant">Open to full-time opportunities, product collaborations, consulting, and AI projects.</p>
            <p className="mt-4 font-mono text-label-mono text-on-surface-variant/70">Typical response time: ~24 hours</p>
          </section>
        </aside>
      </div>
    </main>
  );
}
