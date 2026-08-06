import { FileText, Github, Linkedin, MapPin, MessageCircle, Mail, MessageSquare, type LucideIcon } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { TechChip } from "@/components/ui/tech-chip";

const focusAreas = ["AI Products", "Developer Tools", "SaaS", "Healthcare Tech", "Product Engineering", "Automation"];
const socials: Array<{ label: string; icon: LucideIcon; href: string }> = [
  { label: "Email", icon: Mail, href: "mailto:hello@sriharshagade.com" },
  { label: "WhatsApp", icon: MessageSquare, href: "https://wa.me/918297997929" },
  { label: "LinkedIn", icon: Linkedin, href: "https://in.linkedin.com/in/sriharshagade" },
  { label: "GitHub", icon: Github, href: "https://github.com/sriharshagade" },
  { label: "Resume", icon: FileText, href: "https://drive.google.com/uc?export=download&id=1KvybdGDfAKJafryX19tqAxS6IMc4rrrq" },
];

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="container pt-32 pb-section-gap">
      <div className="grid gap-gutter md:grid-cols-12 md:gap-x-24">
        <section className="md:col-span-7">
          <header className="mb-12">
            <h1 className="mb-6 font-geist text-display-xl-mobile text-on-background-emphasis md:text-display-xl">Let&apos;s build something meaningful.</h1>
            <p className="max-w-2xl text-body-lg text-on-surface-variant">Whether you&apos;re hiring an AI engineer, looking for a product builder, or want to discuss an idea, I&apos;d love to hear from you.</p>
          </header>
          <ContactForm />
        </section>
        <aside className="mt-16 flex flex-col gap-10 border-t border-outline-variant/30 pt-10 md:col-span-5 md:mt-0 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <section className="border-b border-outline-variant/30 pb-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Direct Contact</p>
            <a className="block font-geist text-headline-sm transition-colors hover:text-primary" href="mailto:hello@sriharshagade.com">hello@sriharshagade.com</a>
            <a className="mt-4 flex items-center gap-2 text-on-surface-variant transition-colors hover:text-primary" href="https://wa.me/918297997929"><MessageCircle className="size-5" />+91 8297997929</a>
            <p className="mt-3 flex items-center gap-2 text-on-surface-variant"><MapPin className="size-5" />Bengaluru, India</p>
          </section>
          <section className="border-b border-outline-variant/30 pb-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Availability</p>
            <p className="text-body-md text-on-surface-variant">Open to full-time opportunities, product collaborations, consulting, and AI projects.</p>
            <p className="mt-4 font-mono text-label-mono text-on-surface-variant/70">Typical response time: ~24 hours</p>
          </section>
          <section className="border-b border-outline-variant/30 pb-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Focus Areas</p>
            <div className="flex flex-wrap gap-2">{focusAreas.map((area) => <TechChip key={area}>{area}</TechChip>)}</div>
          </section>
          <section>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">Socials</p>
            <div className="flex gap-6">
              {socials.map((item) => {
                const Icon = item.icon;
                return <a className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href={item.href} key={item.label}><Icon className="size-5" /><span className="font-mono text-[10px]">{item.label}</span></a>;
              })}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
