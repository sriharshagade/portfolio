export const quickcliniqCaseStudy = {
  name: "QuickCliniq",
  tagline: "WhatsApp-first clinic management for patient intake, scheduling, and operations.",
  category: "Healthcare AI Workflow",
  status: "Production" as const,
  image: "/quickcliniq_hero.png",
  imageAlt: "QuickCliniq dashboard interface showing appointment management and clinical workflow.",
  demoUrl: "https://quickcliniq.com/",

  role: {
    official: "AI/ML Engineer at Kirusa",
    projectScope: "End-to-end product engineering",
    areas: [
      "Product discovery & requirements",
      "Architecture & system design",
      "AI/ML integration (appointment scheduling)",
      "Backend API development (Python)",
      "Frontend implementation (React)",
      "Database design (PostgreSQL)",
      "WhatsApp integration (Meta APIs)",
      "Deployment & production ops",
    ],
  },

  capabilities: [
    {
      id: "whatsapp-workflows",
      title: "WhatsApp Appointment Flows",
      description: "Patients book, reschedule, and cancel appointments directly through WhatsApp with guided conversation flows.",
    },
    {
      id: "patient-intake",
      title: "Patient Intake & Communication",
      description: "Automated patient intake forms, history tracking, and clinic-to-patient communication in one unified inbox.",
    },
    {
      id: "scheduling",
      title: "Intelligent Scheduling",
      description: "AI-powered slot generation that respects doctor availability, appointment durations, breaks, and clinic constraints.",
    },
    {
      id: "clinic-dashboard",
      title: "Clinic Operations Dashboard",
      description: "Real-time view of appointments, patient history, team activity, and clinic metrics for managing daily operations.",
    },
  ],

  problem: {
    statement: "Clinics waste hours on manual scheduling, fragmented communication across SMS/calls/WhatsApp, and repetitive data entry.",
    context: "Doctors spend more time managing workflows than caring for patients. Patient information is scattered across multiple tools, leading to scheduling conflicts, missed appointments, and poor continuity of care.",
    opportunity: "A unified platform that handles patient communication, scheduling, and clinic operations in a single trusted tool.",
  },

  workflow: {
    title: "How It Works",
    steps: [
      { step: 1, label: "Patient initiates", description: "Patient messages clinic WhatsApp number" },
      { step: 2, label: "Clinic receives", description: "QuickCliniq processes request in unified inbox" },
      { step: 3, label: "AI handles logic", description: "Intelligent scheduling checks availability and constraints" },
      { step: 4, label: "Confirmation sent", description: "Patient receives appointment confirmation with details" },
      { step: 5, label: "Dashboard updates", description: "Clinic sees new appointment in real-time dashboard" },
    ],
  },

  architecture: {
    title: "System Architecture",
    description: "End-to-end system integrating WhatsApp messaging, intelligent scheduling logic, clinic operations, and real-time dashboarding.",
    components: [
      {
        layer: "Frontend",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        description: "Clinic dashboard for viewing appointments, patient history, team management, and operations metrics.",
      },
      {
        layer: "API / Orchestration",
        tech: ["Python", "FastAPI"],
        description: "RESTful API handling WhatsApp message processing, scheduling logic, patient data, and real-time updates.",
      },
      {
        layer: "AI / Scheduling",
        tech: ["OpenAI", "Python"],
        description: "LLM-powered conversation flows for patient intake and natural language understanding. Custom scheduling algorithms for intelligent slot generation.",
      },
      {
        layer: "Integrations",
        tech: ["WhatsApp API", "Meta Cloud API"],
        description: "Incoming/outgoing message routing, webhook processing, delivery confirmation, and message status tracking.",
      },
      {
        layer: "Data",
        tech: ["PostgreSQL"],
        description: "Multi-clinic data isolation, patient records, appointment history, clinic configuration, and team permissions.",
      },
      {
        layer: "Deployment",
        tech: ["Docker", "AWS"],
        description: "Containerized services, horizontal scaling for high message volume, automated backups, and monitoring.",
      },
    ],
  },

  decisions: [
    {
      title: "Multi-clinic data isolation from day one",
      rationale: "Expected to scale across multiple clinic networks. Built field-level row-level security and data filtering into the database schema and API layer from the start rather than retrofitting it later.",
      impact: "Enabled rapid onboarding of new clinic groups without architectural changes. Prevented data leaks between clinics in production.",
    },
    {
      title: "WhatsApp as the primary UI, not a secondary channel",
      rationale: "Patients already use WhatsApp. Doctors already use WhatsApp for clinic communication. Building WhatsApp as a first-class experience rather than a bolted-on feature meant treating message flows with the same care as dashboard UI.",
      impact: "Significantly higher user engagement. Reduced friction for adoption. Made the product feel native to how clinics actually work.",
    },
    {
      title: "AI for scheduling logic, not just conversation",
      rationale: "Appointment scheduling is complex (doctor availability, appointment types/durations, breaks, buffer times, clinic policies). Rather than hard-coding rules, used LLMs to extract appointment requirements from patient messages, then ran deterministic scheduling algorithms.",
      impact: "Flexible scheduling that handles diverse clinic workflows. Reduced the need for clinic-specific configuration.",
    },
    {
      title: "Dashboard as secondary surface, not primary",
      rationale: "WhatsApp is where most interactions happen. The dashboard is for staff to oversee, not to manually manage. Designed the dashboard for visibility and rare interventions (e.g., manual rescheduling) rather than primary data entry.",
      impact: "Kept the product lightweight. Reduced scope creep into becoming a full ERP.",
    },
    {
      title: "PostgreSQL with careful schema design",
      rationale: "Clinics need auditable records (appointment history, change logs, cancellations). Patient data is sensitive (PII, health records). Built strong schema constraints, cascading deletes, and audit logging into the database rather than relying on application logic.",
      impact: "Operational safety. Compliance-ready data structure. Easier to debug data issues.",
    },
  ],

  challenges: [
    {
      title: "Parsing ambiguous appointment requests",
      problem: "Patients write messages like 'I need to see Dr. Sharma tomorrow' or 'next available' or 'same time as last visit'. No structured input.",
      solution: "Combined LLM parsing (extract date, doctor, reason) with deterministic scheduling logic. Built a fallback flow to ask clarifying questions when patient intent is ambiguous.",
      learning: "LLMs are great for understanding intent, but the real work is the deterministic logic afterward. The hybrid approach (LLM + structured scheduling) was more robust than pure LLM.",
    },
    {
      title: "Handling real-world clinic chaos",
      problem: "Clinics don't always follow their own schedules. Doctors run late. Emergencies bump appointments. Patients don't show up. The system needs to handle exceptions gracefully without breaking.",
      solution: "Built a permission model for staff to manually intervene (override, reschedule, cancel). Implemented soft constraints (try to respect schedule, but allow overrides) rather than hard constraints.",
      learning: "Over-automation is worse than under-automation. The system works best when it handles 80% of cases automatically and makes it easy for staff to handle the remaining 20%.",
    },
    {
      title: "WhatsApp integration stability",
      problem: "WhatsApp Cloud API has rate limits, delivery delays, and occasional webhook failures. Messages need to be reliably delivered and tracked.",
      solution: "Implemented message queuing with retry logic, webhook idempotency, and delivery status tracking. Added monitoring/alerting for failed messages.",
      learning: "Third-party integrations are critical paths. Invested in robust error handling and observability from the start rather than reactively.",
    },
  ],

  learnings: [
    "Product-market fit comes from solving the actual workflow, not adding features. Clinics wanted a single inbox, not another dashboard.",
    "AI features are only useful when the deterministic logic is solid. The LLM handles parsing; the scheduling algorithm handles correctness.",
    "Multi-tenant systems are not optional. Built data isolation from day one rather than retrofitting it.",
    "Observability matters more than you think. Debugging WhatsApp integrations and scheduling issues required detailed logging and monitoring.",
    "Staff friction from over-automation. Give people override capabilities so they don't fight the system.",
  ],

  stack: {
    frontend: ["React", "TypeScript", "Tailwind CSS"],
    backend: ["Python", "FastAPI"],
    ai: ["OpenAI API"],
    integrations: ["WhatsApp Cloud API"],
    database: ["PostgreSQL"],
    infrastructure: ["Docker", "AWS"],
  },

  nextProject: "hiresense",
};
