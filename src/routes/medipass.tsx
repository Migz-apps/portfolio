import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink, QrCode, Brain, ShieldAlert, Pill, WifiOff } from "lucide-react";
import { Header } from "@/components/Header";
import dashboardImg from "@/assets/medipass-dashboard.jpg";
import scannerImg from "@/assets/medipass-scanner.jpg";

export const Route = createFileRoute("/medipass")({
  head: () => ({
    meta: [
      { title: "MediPass — Portable medical history for every patient" },
      { name: "description", content: "MediPass: a free QR code that lets patients carry their medical history on their phone. Built by Mazimpaka Miguel." },
      { property: "og:title", content: "MediPass — Portable medical history" },
      { property: "og:description", content: "A free QR code that lets patients carry their medical history on their phone." },
    ],
  }),
  component: MediPassPage,
});

const features = [
  { icon: QrCode, title: "QR identification", body: "Each patient gets a unique QR — printed or on their phone. No app required to be scanned." },
  { icon: Brain, title: "10-second AI summary", body: "When a doctor scans the code, AI surfaces the most relevant medical context in seconds, not minutes." },
  { icon: ShieldAlert, title: "Duplicate test detection", body: "Real-time warnings flag tests already run elsewhere — cutting cost and delay." },
  { icon: Pill, title: "Allergy & interaction checks", body: "Cross-checks medications against allergies and known interactions before prescription." },
  { icon: WifiOff, title: "Works offline", body: "Designed for low-bandwidth clinics. Works on basic phones via printed QR cards." },
];

function MediPassPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <header className="mt-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">Project deep-dive</p>
          <h1 className="text-balance font-display text-5xl font-bold tracking-tight sm:text-6xl">MediPass</h1>
          <p className="mt-6 max-w-2xl text-balance text-xl text-muted-foreground">
            Portable medical history for every patient. A free QR code that any clinic can scan to instantly understand who is in front of them.
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <img src={dashboardImg} alt="MediPass hospital dashboard" loading="lazy" className="aspect-[16/10] w-full object-cover" />
        </div>

        <section className="mt-16 space-y-6">
          <h2 className="font-display text-3xl font-bold">The problem</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Patients move between clinics, hospitals, and pharmacies — but their records don't move with them. Doctors re-run tests, miss allergies, and prescribe medications that interact with what someone is already taking. Insurance companies pay for duplicate work. Patients pay with their time, money, and sometimes their safety.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="font-display text-3xl font-bold">The approach</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            MediPass gives every patient a portable, scannable QR identity. The card is free. The scan is universal. When a clinician scans it, an AI layer reads the patient's history and surfaces a 10-second summary — allergies, current medications, recent labs, and active conditions. It also warns about duplicate tests in real time, so a CT scan ordered today doesn't repeat one from last month.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold">How it works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card/50 p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img src={scannerImg} alt="MediPass scanner on mobile" loading="lazy" className="aspect-[16/10] w-full object-cover" />
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="font-display text-3xl font-bold">Status</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Working prototype. The frontend is complete — both the clinician-facing dashboard and the patient-facing card. The backend is in active development, with a focus on secure storage, HL7/FHIR interoperability, and offline-first sync for low-bandwidth clinics.
          </p>
        </section>

        <section className="mt-16 flex flex-wrap gap-3">
          <a href="https://github.com/Migz-apps/MediPass" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            <Github className="h-4 w-4" /> View on GitHub
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 text-sm font-medium hover:bg-card">
            Mobile app <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        Built by Miguel · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
