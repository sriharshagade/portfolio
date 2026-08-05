import { Activity, BriefcaseBusiness, Car, Newspaper, type LucideIcon } from "lucide-react";

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
    summary: "QuickCliniq simplifies appointment scheduling, patient communication, and day-to-day clinic workflows through a productized AI assistance layer.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzL5v2Q_rUrceQk7eovl7RgX8AbIeIQ_yKtwzufh69uZ6cCzZ4Qe45AWXxr-8X6TYJModu2ezscATKw3JJOBV1YoWC72p71qJMxaYrO6ohBjuMLHcU0ODjKpb0lqpXV8rXLT7CJWENqed7oEFwkUaG_Vs6MU1oBdbSaxbO7MU0WJg-NJdDRVw6Kby5CoeZUKm4DGVVxs692C6Iqt_O6CIdwxkwkRMUomd7tpl4VLPteuWrGua9XGD6vg",
    imageAlt: "Dark clinical dashboard interface with appointment and patient workflow data.",
    stack: ["React", "OpenAI", "Python", "PostgreSQL"],
    icon: Activity,
    sections: caseSections("QuickCliniq", "Healthcare operations"),
  },
  {
    slug: "cardash",
    name: "CarDash",
    category: "Automotive Intelligence",
    status: "Beta",
    headline: "An AI-powered automotive assistant for vehicle issues, maintenance decisions, and ownership clarity.",
    summary: "CarDash helps owners understand vehicle symptoms, compare options, and make better maintenance decisions before problems compound.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEhDvsZ3Y8GcwhN2CepGIip8O72jcadH_VtNJVyX2cQAcidnz6DviDc0dd3jvP0AWhskSlzLXyeOURXNneg_xUOHVyniioRuqnxGqGY05LXbl-Mf2OkLeZ4ZB8d0p0M6e3j6k-xd9-BlnXP_JDmjktH9qgbJpRhFXtg9pEpFp0Uv3StvkVHrTIn31ALH4syAVGP3i35IIz88d4ambe2yvadeviCi3xYWRiR1hphSSAxuTj-YWE-pwqvg",
    imageAlt: "Dark automotive dashboard with telemetry and diagnostic interface elements.",
    stack: ["Next.js", "PostgreSQL", "AWS", "AI Advisor"],
    icon: Car,
    sections: caseSections("CarDash", "Vehicle owners and operators"),
  },
  {
    slug: "dash-daily",
    name: "Dash Daily",
    category: "Personal AI Operating System",
    status: "Active",
    headline: "A daily command surface for priorities, context, and execution.",
    summary: "Dash Daily turns scattered personal context into a focused daily operating layer for planning, prioritization, and follow-through.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnCXd740DWcL8DtEsnjUjFIMltkJFacfTwtiwv4RPGGp9KdPW77Su5t9jMWpXkTYs9-MM1AUrRVPXQUyK_B2F8--F_OJMe8aQu1aAnlGB4-lzCT4rq0X4WFMQrStL5-PvdphXKjTLIlOtBYTVpuRHBjwWw4vuS_1FHNjXbWHtjJjoh1hZFbKmcD2Gr53vaFUh1rS6dvq73eBcI2SiAyjySoBtrC1nMBkx3KmdEH3LQ85Hy3fPtnbZrig",
    imageAlt: "Dark productivity interface showing structured text and AI-generated planning output.",
    stack: ["Next.js", "AI Agents", "Tasks", "Calendar"],
    icon: Newspaper,
    sections: caseSections("Dash Daily", "Knowledge workers"),
  },
  {
    slug: "hiresense",
    name: "HireSense",
    category: "Recruiting Intelligence",
    status: "Beta",
    headline: "An AI hiring assistant for structured candidate evaluation and evidence-based recruiting workflows.",
    summary: "HireSense helps teams evaluate candidates more consistently with role-aware rubrics, evidence capture, and explainable AI assistance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnCXd740DWcL8DtEsnjUjFIMltkJFacfTwtiwv4RPGGp9KdPW77Su5t9jMWpXkTYs9-MM1AUrRVPXQUyK_B2F8--F_OJMe8aQu1aAnlGB4-lzCT4rq0X4WFMQrStL5-PvdphXKjTLIlOtBYTVpuRHBjwWw4vuS_1FHNjXbWHtjJjoh1hZFbKmcD2Gr53vaFUh1rS6dvq73eBcI2SiAyjySoBtrC1nMBkx3KmdEH3LQ85Hy3fPtnbZrig",
    imageAlt: "Dark recruiting analytics interface with parsed candidate data and structured evaluation output.",
    stack: ["FastAPI", "LLM Evaluation", "Docker", "AWS"],
    icon: BriefcaseBusiness,
    sections: caseSections("HireSense", "Recruiting teams"),
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
