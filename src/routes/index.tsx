import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  QrCode, Brain, ShieldAlert, Pill, WifiOff, ChevronDown, ExternalLink, X,
} from "lucide-react";
import { Header } from "@/components/Header";
import heroImg from "@/assets/hero-workspace.jpg";
import aboutImg from "@/assets/about-pattern.jpg";
import dashboardImg from "@/assets/medipass-dashboard.jpg";
import scannerImg from "@/assets/medipass-scanner.jpg";
import syncscriptImg from "@/assets/syncscript.png";
import bwengeImg from "@/assets/bwenge.png";
import matchmakerImg from "@/assets/matchmaker.jpg";

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

type Project = {
  title: string;
  image?: string;
  short: string;
  full: string;
  links: { label: string; href: string }[];
  wide?: boolean;
};

const projects: Project[] = [
  {
    title: "SyncScript",
    image: syncscriptImg,
    short: "A lightweight, real-time collaboration extension for VS Code that lets developers pair-program with ultra-low latency.",
    full: "SyncScript is a lightweight, real-time collaboration extension for VS Code that allows developers to pair-program with ultra-low latency via a self-hosted Node.js signaling backend. It optimizes enterprise-scale performance by using an event-driven file watcher, a dynamic .syncignore system, and smart binary filtering to keep synchronization seamless and lightweight. Finished developing and currently under testing. Launch is scheduled for June.",
    links: [{ label: "GitHub", href: "https://github.com/Migz-apps/SyncScript2.0" }],
  },
  {
    title: "Bwenge",
    image: bwengeImg,
    short: "AI that builds education agents — clone a teacher's personality and face, then deploy them to teach each student individually.",
    full: "AI that makes education agents. You give it a video of a person (a teacher) or one sits down in front of a camera and it records him looking for his behaviors. It then creates his clone (both personality and face). After this the content of the subject is uploaded for the model to learn. The clone can then be used as an extension to teach many students focusing on each one's needs, and answering each one's questions individually. It also works for group sessions providing total replacement. Note that it does not teach by itself but rather makes other models where each individual model is capable of teaching on its own. Currently under development.",
    links: [
      { label: "Frontend", href: "https://github.com/Migz-apps/bwenge-frontend" },
      { label: "Backend", href: "https://github.com/kai-lucky72/bwenge" },
    ],
  },
  {
    title: "MatchMaker",
    image: matchmakerImg,
    short: "An AI-powered platform that matches students with complementary skills so they can build together — a gift to my high school.",
    full: "Completely built as a gift to my high school for the skills they gave me. It is an AI-powered app that matches students with complementary skills and interests but have no way of connecting because they do not know the other's interests. These work on the same projects, complementing each other. It also has a teacher section where the teacher can create their own groups based on the criteria they have set themselves to improve group collaboration. I can not give a demo to the app as it will be launched by the school next year and hosted on their local server.",
    links: [],
    wide: true,
  },
];

function Home() {
  useReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="hero" className="relative isolate flex min-h-screen items-center pt-32">
        <div className="hero-glow absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 opacity-25 dark:opacity-35">
          <img src={heroImg} alt="" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="mx-auto w-full max-w-5xl px-6 fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Building MediPass · Open to mentors & partners
          </div>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            Mazimpaka<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Miguel</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
            Founder of <span className="text-foreground font-medium">MediPass</span> and full stack software developer. MediPass is a QR code that lets patients carry their medical history on their phone.
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
          A free QR code that lets patients carry their medical history on their phone. When a doctor scans it, AI shows a 10-second summary of allergies, medications, and recent tests. It stops duplicate tests before they happen, saving insurance companies and patients money, and prevents medication errors.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:col-span-3">
            <img src={dashboardImg} alt="MediPass hospital dashboard — doctor view after login" loading="lazy" width={1600} height={1024} className="aspect-[16/10] w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:col-span-2">
            <img src={scannerImg} alt="MediPass QR code scanner interface" loading="lazy" width={1280} height={1280} className="aspect-[16/10] w-full object-cover md:aspect-auto md:h-full" />
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
            <p className="mt-1 text-sm text-muted-foreground">Meeting scheduled with Eden Care, a Rwandan insurance company.</p>
          </div>
          <ViewMediPassDropdown />
        </div>
      </Section>

      {/* OTHER PROJECTS */}
      <Section id="projects" eyebrow="Other Projects" title="Things I've built along the way.">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </Section>

      {/* LINKS */}
      <Section id="links" eyebrow="Presence" title="Where to find me.">
        <p className="mb-8 max-w-2xl text-balance text-lg text-muted-foreground">
          The clearest way to understand what I am building is to look at it directly. These are the places where my work, code, and conversations live.
        </p>
        <div className="flex flex-wrap gap-3">
          <SocialLink href="https://github.com/Migz-apps" icon={Github} label="GitHub" />
          <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="mailto:migzgloire@gmail.com" icon={Mail} label="Email" />
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something.">
        <div className="rounded-3xl border border-border bg-card/50 p-8 md:p-12">
          <p className="max-w-2xl text-balance text-xl text-muted-foreground md:text-2xl">
            Building MediPass. Looking for mentors, feedback, and potential partners.
          </p>
          <a href="mailto:migzgloire@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            <Mail className="h-4 w-4" />
            migzgloire@gmail.com
          </a>
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        Built by Miguel · {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border/50 py-24 md:py-32" data-reveal>
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="mb-12 text-balance text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl ${project.wide ? "md:col-span-2" : ""}`}
      >
        {project.image && (
          <div className="aspect-[16/9] overflow-hidden border-b border-border">
            <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.short}</p>
          <span className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">Click to read more</span>
        </div>
      </button>
      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-background/70 fade-in" onClick={(e) => { if (e.target === ref.current) onClose(); }} ref={ref}>
      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl scale-in">
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 backdrop-blur transition-colors hover:bg-secondary">
          <X className="h-4 w-4" />
        </button>
        {project.image && (
          <div className="aspect-[16/9] overflow-hidden border-b border-border">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="overflow-y-auto p-8" style={{ maxHeight: "calc(88vh - 240px)" }}>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.full}</p>
          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.links.map(l => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary">
                  <Github className="h-4 w-4" /> {l.label}
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  const isMail = href.startsWith("mailto:");
  return (
    <a href={href} target={isMail ? undefined : "_blank"} rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 text-sm transition-all hover:border-primary/50 hover:text-primary">
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
          <a href="https://github.com/Migz-apps/MediPass" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 px-4 py-3 text-sm transition-colors hover:bg-secondary">
            <span className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="flex items-center justify-between gap-2 border-t border-border px-4 py-3 text-sm transition-colors hover:bg-secondary">
            <span>Mobile app</span>
            <span className="text-xs text-muted-foreground">Coming soon</span>
          </a>
          <a href="#" className="flex items-center justify-between gap-2 border-t border-border px-4 py-3 text-sm transition-colors hover:bg-secondary">
            <span>Description doc</span>
            <span className="text-xs text-muted-foreground">Coming soon</span>
          </a>
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello Miguel — from ${name || "a friend"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n`);
    window.location.href = `mailto:migzgloire@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <form onSubmit={submit} className="mt-10 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
      <input
        type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
        className="rounded-full border border-border bg-background/60 px-5 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
      <input
        type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com"
        className="rounded-full border border-border bg-background/60 px-5 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
        Get in touch <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
