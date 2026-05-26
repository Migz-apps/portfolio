import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Twitter,
  QrCode, Brain, ShieldAlert, Pill, WifiOff, ChevronDown, ExternalLink,
} from "lucide-react";
import { Header } from "@/components/Header";
import heroImg from "@/assets/hero-workspace.jpg";
import aboutImg from "@/assets/about-pattern.jpg";
import dashboardImg from "@/assets/medipass-dashboard.jpg";
import scannerImg from "@/assets/medipass-scanner.jpg";
import syncscriptImg from "@/assets/syncscript.png";
import bwengeImg from "@/assets/bwenge.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mazimpaka Miguel — Founder of MediPass" },
      { name: "description", content: "Founder of MediPass — a free QR code that lets patients carry their medical history on their phone." },
      { property: "og:title", content: "Mazimpaka Miguel — Founder of MediPass" },
      { property: "og:description", content: "Building portable medical history for patients. Builder, developer, and curious mind." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: QrCode, label: "QR code patient identification" },
  { icon: Brain, label: "AI-powered 10-second clinical summary" },
  { icon: ShieldAlert, label: "Duplicate test detection with real-time warnings" },
  { icon: Pill, label: "Medication allergy & interaction checking" },
  { icon: WifiOff, label: "Works offline. Works on basic phones via printed QR cards" },
];

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="hero" className="relative isolate flex min-h-screen items-center pt-32">
        <div className="hero-glow absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-40">
          <img src={heroImg} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="mx-auto w-full max-w-5xl px-6 fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Building MediPass · Open to mentors & partners
          </div>
          <h1 className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            Mazimpaka<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Miguel</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
            Founder of <span className="text-foreground font-medium">MediPass</span> — a startup that lets patients carry their medical history on their phone.
          </p>
          <p className="mt-4 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            I build things that solve real problems. Right now, I am fixing healthcare data portability.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:opacity-90">
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#medipass" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-card">
              About MediPass
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A builder who learns by questioning.">
        <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
          <p className="text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            I am someone who learns by building and understands by questioning. I move between technology, science, and real-world problems because I like seeing how different fields connect beneath the surface. I am more interested in ideas that quietly shape everyday life than things designed only to attract attention, and I spend most of my time exploring, experimenting, and creating things that make sense to me before they make sense to everyone else.
          </p>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
            <img src={aboutImg} alt="Abstract network of connected nodes" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* MEDIPASS */}
      <Section id="medipass" eyebrow="Featured Project" title="MediPass">
        <p className="max-w-3xl text-balance text-lg text-muted-foreground">
          A free QR code that lets patients carry their medical history on their phone. When a doctor scans it, AI shows a 10-second summary of allergies, medications, and recent tests. It stops duplicate tests before they happen, saves insurance companies money, and prevents medication errors.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={dashboardImg} alt="MediPass hospital dashboard interface" loading="lazy" width={1600} height={1024} className="aspect-[16/10] w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={scannerImg} alt="MediPass QR code scanner interface" loading="lazy" width={1280} height={1280} className="aspect-[16/10] w-full object-cover" />
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4">
              <div className="rounded-lg bg-primary/10 p-2 text-primary"><Icon className="h-5 w-5" /></div>
              <span className="pt-1 text-sm text-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card/50 p-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Current status</p>
            <p className="mt-1 font-medium">Working prototype · Frontend complete · Backend in development</p>
          </div>
          <ViewMediPassDropdown />
        </div>
      </Section>

      {/* OTHER PROJECTS */}
      <Section id="projects" eyebrow="Other Projects" title="Things I've built along the way.">
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="SyncScript"
            image={syncscriptImg}
            description="A lightweight, real-time collaboration extension for VS Code that allows developers to pair-program with ultra-low latency via a self-hosted Node.js signaling backend. Uses an event-driven file watcher, a dynamic .syncignore system, and smart binary filtering to keep synchronization seamless."
            href="https://github.com/Migz-apps/SyncScript2.0"
          />
          <ProjectCard
            title="Bwenge"
            image={bwengeImg}
            description="An AI that creates other AI agents specialized in teaching — from older people to kids. You train an agent using the face and behavior of a teacher, upload the content, and a clone of that person teaches the material."
            href="#"
          />
          <ProjectCard
            title="Boarding School Hacks"
            description="A collection of systems and workflows I built to manage school, exams, and startup building simultaneously. Time blocking, offline development, and exam preparation strategies."
            href="#"
            wide
          />
        </div>
      </Section>

      {/* LINKS */}
      <Section id="links" eyebrow="Presence" title="Where to find me.">
        <div className="flex flex-wrap gap-3">
          <SocialLink href="https://github.com/Migz-apps" icon={Github} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="mailto:miguel@medipass.app" icon={Mail} label="Email" />
          <SocialLink href="https://twitter.com/" icon={Twitter} label="Twitter / X" />
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something.">
        <div className="rounded-3xl border border-border bg-card/50 p-8 md:p-12">
          <p className="max-w-2xl text-balance text-xl text-muted-foreground md:text-2xl">
            Building MediPass. Looking for mentors, feedback, and potential partners.
          </p>
          <a href="mailto:miguel@medipass.app" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            <Mail className="h-4 w-4" />
            miguel@medipass.app
          </a>
        </div>
      </Section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        Built by Miguel · {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border/50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, href, image, wide }: { title: string; description: string; href: string; image?: string; wide?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 ${wide ? "md:col-span-2" : ""}`}
    >
      {image && (
        <div className="aspect-[16/9] overflow-hidden border-b border-border">
          <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 text-sm transition-all hover:border-primary/50 hover:text-primary">
      <Icon className="h-4 w-4" />
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
    </a>
  );
}

function ViewMediPassDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(o => !o)} onBlur={() => setTimeout(() => setOpen(false), 150)} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
        View MediPass
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-popover shadow-xl">
          <Link to="/medipass" className="flex items-center justify-between gap-2 px-4 py-3 text-sm transition-colors hover:bg-secondary">
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="https://github.com/Migz-apps/MediPass" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 border-t border-border px-4 py-3 text-sm transition-colors hover:bg-secondary">
            <span className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub repo</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="flex items-center justify-between gap-2 border-t border-border px-4 py-3 text-sm transition-colors hover:bg-secondary">
            Mobile app <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
