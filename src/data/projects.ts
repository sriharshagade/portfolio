import { Activity, BriefcaseBusiness, type LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: "Active" | "Beta" | "Production" | "Archived";
  headline: string;
  summary: string;
  image: string;
  imageAlt: string;
  stack: string[];
  icon: LucideIcon;
  demoUrl?: string;
  showGithubLink?: boolean;
  metadata?: { role: string[]; scope: string };
  sections: Array<{ eyebrow: string; title: string; body: string; bullets?: string[] }>;
};

const caseSections = (name: string, domain: string): Project["sections"] => [
  { eyebrow: "01", title: "Executive Summary", body: `${name} is framed as a production-minded AI product, not a demo. The product combines user workflow design, reliable engineering boundaries, and AI assistance where it can reduce friction without removing human judgment.` },
  { eyebrow: "02", title: "Problem Statement", body: `${domain} teams deal with fragmented information, repetitive coordination, and decisions that often happen with incomplete context. The opportunity is to compress the path from signal to action.` },
  { eyebrow: "03", title: "Research & Discovery", body: "Discovery focused on the user's decision loop: what information they need, where delays happen, and which actions should remain explicitly controlled by the human operator." },
  { eyebrow: "04", title: "Solution Overview", body: "The solution organizes intake, context, AI-generated recommendations, and final user action into one guided interface with visible system state and clear escape hatches." },
  { eyebrow: "05", title: "Product Walkthrough", body: "The core flow moves from input capture to contextual analysis, then to a reviewable recommendation. The UI keeps model output structured, scannable, and editable." },
  { eyebrow: "06", title: "User Journey", body: "A user starts with a concrete task, receives contextual assistance, reviews supporting details, and takes action with enough confidence to trust the system in repeated use." },
  { eyebrow: "07", title: "System Architecture", body: "The architecture separates presentation, product state, AI orchestration, and persistence so the interface stays responsive while model-backed work happens predictably.", bullets: ["Typed data contracts", "Server-first rendering", "Reusable workflow components"] },
  { eyebrow: "08", title: "Engineering Decisions", body: "The implementation favors explicit contracts, small components, server-rendered content, and client code only for interactions that truly need it." },
  { eyebrow: "09", title: "Challenges", body: "The hardest constraints were trust, latency perception, failure states, and deciding how much reasoning to expose without overwhelming the user." },
  { eyebrow: "10", title: "Tech Stack", body: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui-compatible primitives, AI APIs, and structured product data." },
  { eyebrow: "11", title: "My Role", body: "Owned product framing, UX architecture, frontend implementation, data modeling, AI workflow design, and production-readiness decisions." },
  { eyebrow: "12", title: "Lessons Learned", body: "AI features become useful when the product contract is clear: users need to know what the system knows, what it inferred, and where confidence ends." },
  { eyebrow: "13", title: "Future Roadmap", body: "Next steps include deeper observability, evaluation datasets, workflow integrations, and richer feedback loops for measuring AI quality in real use." },
];

export const projects: Project[] = [
  {
    slug: "quickcliniq",
    name: "QuickCliniq",
    category: "Healthcare AI Workflow",
    status: "Production",
    headline: "A WhatsApp-first clinic management platform for patient intake, scheduling, and clinical operations.",
    summary: "Healthcare clinics lose valuable time to manual scheduling, fragmented patient communication, and administrative overhead. QuickCliniq helps clinics streamline daily operations so doctors can spend more time caring for patients and less time managing workflows.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzL5v2Q_rUrceQk7eovl7RgX8AbIeIQ_yKtwzufh69uZ6cCzZ4Qe45AWXxr-8X6TYJModu2ezscATKw3JJOBV1YoWC72p71qJMxaYrO6ohBjuMLHcU0ODjKpb0lqpXV8rXLT7CJWENqed7oEFwkUaG_Vs6MU1oBdbSaxbO7MU0WJg-NJdDRVw6Kby5CoeZUKm4DGVVxs692C6Iqt_O6CIdwxkwkRMUomd7tpl4VLPteuWrGua9XGD6vg",
    imageAlt: "Dark clinical dashboard interface with appointment and patient workflow data.",
    stack: ["React", "OpenAI", "Python", "PostgreSQL"],
    icon: Activity,
    demoUrl: "https://quickcliniq.com/",
    showGithubLink: false,
    metadata: {
      role: ["AI/ML Engineering", "Product Engineering"],
      scope: "AI + SaaS",
    },
    sections: caseSections("QuickCliniq", "Healthcare operations"),
  },
  {
    slug: "hiresense",
    name: "HireSense",
    category: "Recruiting Intelligence",
    status: "Beta",
    headline: "An AI hiring assistant for structured candidate evaluation and evidence-based recruiting workflows.",
    summary: "Students often struggle to identify the careers they are best suited for and how to improve their chances of getting hired. HireSense helps them discover the right career path, understand where they stand, and take actionable steps toward better opportunities.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnCXd740DWcL8DtEsnjUjFIMltkJFacfTwtiwv4RPGGp9KdPW77Su5t9jMWpXkTYs9-MM1AUrRVPXQUyK_B2F8--F_OJMe8aQu1aAnlGB4-lzCT4rq0X4WFMQrStL5-PvdphXKjTLIlOtBYTVpuRHBjwWw4vuS_1FHNjXbWHtjJjoh1hZFbKmcD2Gr53vaFUh1rS6dvq73eBcI2SiAyjySoBtrC1nMBkx3KmdEH3LQ85Hy3fPtnbZrig",
    imageAlt: "Dark recruiting analytics interface with parsed candidate data and structured evaluation output.",
    stack: ["FastAPI", "LLM Evaluation", "Docker", "AWS"],
    icon: BriefcaseBusiness,
    metadata: {
      role: ["Product Engineering", "ML Engineering"],
      scope: "AI + Evaluation",
    },
    sections: caseSections("HireSense", "Recruiting teams"),
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

