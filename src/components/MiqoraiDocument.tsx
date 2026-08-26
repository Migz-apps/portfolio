import { Activity, BrainCircuit, Building2, Database, LockKeyhole, ShieldCheck, Smartphone, Stethoscope } from "lucide-react";

const ecosystem = [
  { icon: Smartphone, title: "Patient layer", text: "A mobile experience for registration, profile management, health information, records, notifications, and AI-assisted health conversations." },
  { icon: Stethoscope, title: "Professional layer", text: "Clinical interfaces for authorized healthcare professionals, designed around relevant context and real healthcare workflows." },
  { icon: Building2, title: "Institution layer", text: "A hospital portal for managing teams, patients, consultations, records, permissions, and institutional activity." },
  { icon: BrainCircuit, title: "Intelligence layer", text: "Contextual assistance that can interpret questions, summarize information, identify relevant context, and surface cases that require professional attention." },
  { icon: Database, title: "Platform infrastructure", text: "Shared backend services for authentication, authorization, APIs, application logic, records, notifications, security, logging, and integrations." },
];

const principles = [
  ["Patient first", "Technology should make healthcare easier to navigate, not add complexity."],
  ["Professional oversight", "AI assists qualified professionals; diagnosis and treatment remain their responsibility."],
  ["Privacy by design", "Security and privacy are architectural requirements, supported by identity, authorization, auditability, and controlled access."],
  ["Progressive intelligence", "AI capability should grow only as reliability, safety, and real-world value are demonstrated."],
];

export function MiqoraiDocument({ compact = false }: { compact?: boolean }) {
  return (
    <article id="platform-document" className="space-y-14 text-foreground">
      <header className="rounded-3xl border border-border bg-card/60 p-7 md:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">MiqorAI · Platform brief</p>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">An AI-enabled digital healthcare ecosystem.</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          MiqorAI connects patients, healthcare professionals, and institutions through shared healthcare information, controlled AI assistance, and a unified platform. It is designed to make information more accessible to patients, more structured for professionals, and more connected across the healthcare journey.
        </p>
        <div className="mt-7 flex flex-wrap gap-2 text-xs font-medium">
          {["Digital health", "Patient-owned records", "Clinical workflows", "Professional oversight"].map(item => <span key={item} className="rounded-full border border-border bg-background px-3 py-1.5 text-muted-foreground">{item}</span>)}
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/40 p-7">
          <h3 className="text-2xl font-semibold">The problem</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">Healthcare information is often fragmented across hospitals, paper documents, laboratory reports, prescriptions, memory, and disconnected digital systems. Patients repeatedly explain their histories while professionals must rapidly understand incomplete context.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card/40 p-7">
          <h3 className="text-2xl font-semibold">The vision</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">MiqorAI aims to create continuity: information generated at one point in a patient’s journey can responsibly support the next. It is a bridge between patients, technology, AI, professionals, and institutions—not a replacement for qualified care.</p>
        </div>
      </section>

      <section>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Platform ecosystem</p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight">One connected system, five coordinated layers.</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ecosystem.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card/40 p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h4 className="mt-4 text-lg font-semibold">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Patient experience</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">Simple for patients. Context-aware by design.</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">Patients can create a profile, manage relevant health information, access available records, and ask health questions in natural language. With appropriate authorization, the platform can use relevant patient context to provide understandable general information, clarifying questions, warning signs, and guidance on when professional care may be appropriate.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">A health profile may contain medical history, conditions, allergies, current medications, consultations, laboratory results, diagnoses, treatments, and observations recorded by authorized professionals.</p>
        </div>
        <aside className="rounded-2xl border border-primary/30 bg-primary/5 p-7">
          <ShieldCheck className="h-7 w-7 text-primary" />
          <h4 className="mt-5 text-xl font-semibold">AI safety and medical boundaries</h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">MiqorAI distinguishes health information from diagnosis and treatment. It must communicate uncertainty, escalate potential high-risk situations toward appropriate professional care, and never present an AI-generated possibility as a confirmed diagnosis.</p>
        </aside>
      </section>

      {!compact && <>
        <section>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Healthcare institutions</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">Professional tools with controlled access.</h3>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">The hospital portal is the professional interface for healthcare institutions. It can provide institutional dashboards, patient management, clinical records, consultations, staff accounts, AI-assisted tools, activity reporting, and settings. Access is determined by a user’s role, organizational relationship, and authorization to view a particular patient’s information.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {["Patient overview and longitudinal records", "Consultations, medications, labs, documents, and AI summaries", "Role-based permissions, auditability, and institutional controls"].map(item => <div key={item} className="rounded-xl border border-border bg-card/40 p-5 text-sm leading-relaxed text-muted-foreground">{item}</div>)}
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-card/40 p-7 md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">System architecture</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-medium">
            {["Patient mobile app", "MiqorAI API", "Core & AI services", "Health data layer", "Hospital portal", "Healthcare professionals"].map((item, index) => <span key={item} className="inline-flex items-center gap-3"><span className="rounded-full border border-border bg-background px-3 py-2">{item}</span>{index < 5 && <span className="text-primary">→</span>}</span>)}
          </div>
          <p className="mt-7 max-w-3xl leading-relaxed text-muted-foreground">The mobile app and hospital portal are two controlled interfaces over shared infrastructure. The core platform manages users, records, permissions, notifications, APIs, and business logic; the intelligence platform handles context retrieval, AI orchestration, safety controls, output validation, and summarization.</p>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Development philosophy</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {principles.map(([title, text]) => <div key={title} className="rounded-2xl border border-border bg-card/40 p-6"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/40 p-7"><Activity className="h-6 w-6 text-primary" /><h3 className="mt-4 text-xl font-semibold">Reliable, observable growth</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">The long-term platform should support backups, recovery, monitoring, health checks, controlled deployments, rollback, incident response, and quality evaluation for AI outputs. AI must enhance the platform rather than become a single point of failure.</p></div>
          <div className="rounded-2xl border border-border bg-card/40 p-7"><LockKeyhole className="h-6 w-6 text-primary" /><h3 className="mt-4 text-xl font-semibold">Trust through authorization</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Before sensitive information is returned, MiqorAI should confirm identity, organization, role, patient relationship, legitimate authorization, and the scope of permitted access.</p></div>
        </section>

        <section className="rounded-3xl border border-primary/30 bg-primary/5 p-7 md:p-10">
          <h3 className="text-2xl font-semibold">A platform built to expand responsibly.</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Future opportunities include appointment management, laboratory and pharmacy integrations, telemedicine, remote monitoring, wearable devices, multilingual assistance, healthcare APIs, insurance integrations, secure document exchange, and advanced decision-support tools. These are expansion opportunities, not claims of current functionality.</p>
        </section>
      </>}
    </article>
  );
}
