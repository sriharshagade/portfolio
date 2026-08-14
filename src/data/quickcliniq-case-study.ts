export const quickcliniqCaseStudy = {
  name: "QuickCliniq",
  tagline: "WhatsApp-first clinic management for patient intake, scheduling, and operations.",
  category: "Healthcare AI Workflow",
  status: "Personal Project · Proof of Concept" as const,
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
      title: "WhatsApp Appointment Automation",
      description: "Patients can discover availability, book appointments, reschedule, and receive confirmations directly through WhatsApp.",
    },
    {
      id: "patient-communication",
      title: "Patient Communication",
      description: "Automated confirmations, reminders, and follow-ups designed to reduce manual coordination between patients, doctors, and clinic staff.",
    },
    {
      id: "scheduling",
      title: "Intelligent Scheduling",
      description: "Availability-aware scheduling handles doctor calendars, slot generation, and booking constraints.",
    },
    {
      id: "clinic-dashboard",
      title: "Clinic Operations Dashboard",
      description: "A centralized interface for managing doctors, appointments, patients, schedules, and operational activity.",
    },
  ],

  problem: {
    statement: "Why waste half a day for a 15-minute appointment?",
    context: "Patients often have to call clinics, wait for responses, or coordinate availability manually just to book a short appointment.\n\nClinics deal with the other side of the same problem: calls, WhatsApp messages, spreadsheets, and repetitive coordination.\n\nQuickCliniq turns WhatsApp into the booking layer, allowing patients to find availability and book appointments while giving clinic staff a centralized way to manage the operation.",
    opportunity: "",
  },

  workflow: {
    title: "How It Works",
    steps: [
      { step: 1, label: "Patient starts conversation", description: "The patient interacts with the clinic through WhatsApp." },
      { step: 2, label: "Appointment intent is captured", description: "The system identifies the requested doctor, service, date, or appointment need." },
      { step: 3, label: "Availability is checked", description: "Scheduling logic evaluates doctor availability and generated slots." },
      { step: 4, label: "Appointment is created", description: "The selected slot is persisted and the patient receives confirmation." },
      { step: 5, label: "Automated reminders", description: "The system sends scheduled appointment reminders and follow-ups." },
      { step: 6, label: "Clinic sees everything", description: "Staff manage appointments, doctors, patients, and schedules through the dashboard." },
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
      impact: "Built to support onboarding of new clinic groups; validated with 2 proof-of-concept clinics. Designed to prevent data leaks between clinics.",
    },
    {
      title: "WhatsApp as the primary UI, not a secondary channel",
      rationale: "Patients already use WhatsApp. Doctors already use WhatsApp for clinic communication. Building WhatsApp as a first-class experience rather than a bolted-on feature meant treating message flows with the same care as dashboard UI.",
      impact: "Built as a first-class experience rather than a bolted-on feature. Designed to match how clinics actually work.",
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
      impact: "Structured with auditability and safety in mind. Easier to debug data issues.",
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
    "I believe workflow fit matters more than feature count — a single inbox for clinics beats another dashboard.",
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
