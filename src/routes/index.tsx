import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  BriefcaseBusiness, ChevronDown, ExternalLink, FileText, Play, X,
} from "lucide-react";
import { Header } from "@/components/Header";
import { MiqoraiDocument } from "@/components/MiqoraiDocument";
import heroImg from "@/assets/hero-workspace.jpg";
import aboutImg from "@/assets/about-pattern.jpg";
import syncscriptImg from "@/assets/syncscript.png";
import bwengeImg from "@/assets/bwenge.png";
import matchmakerImg from "@/assets/matchmaker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mazimpaka Miguel — Builder of MiqorAI" },
      { name: "description", content: "Builder of MiqorAI — an AI platform in constant, continuous improvement." },
      { property: "og:title", content: "Mazimpaka Miguel — Builder of MiqorAI" },
      { property: "og:description", content: "Building MiqorAI: an evolving AI platform designed for practical impact." },
    ],
  }),
  component: Home,
});

type Project = {
  title: string;
  image?: string;
  short: string;
  full: string;
  links: { label: string; href: string }[];
  wide?: boolean;
};

const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL", "C"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite", "Responsive UI", "Accessibility"] },
  { title: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets", "Authentication"] },
  { title: "Data & AI", items: ["PostgreSQL", "MongoDB", "Supabase", "LLM integration", "Prompt engineering"] },
  { title: "Tools & Practice", items: ["Git & GitHub", "Docker", "Linux", "CI/CD", "VS Code extensions", "Figma"] },
];

const projects: Project[] = [
  {
    title: "MiqorAI",
    image: heroImg,
    short: "An evolving AI platform focused on bringing useful AI experiences together in one place.",
    full: "MiqorAI is an AI platform under constant and continuous improvement. It is shaped through active building, testing, feedback, and iteration, with the goal of making practical AI experiences more accessible and useful. Read the platform description for the full overview or explore the live demo.",
    links: [{ label: "Live demo", href: "https://miqor-ai.vercel.app/" }],
  },
  {
    title: "SyncScript",
    image: syncscriptImg,
    short: "A lightweight, real-time collaboration extension for VS Code that lets developers pair-program with ultra-low latency.",
    full: "SyncScript is a lightweight, real-time collaboration extension for VS Code that allows developers to pair-program with ultra-low latency via a self-hosted Node.js signaling backend. It optimizes enterprise-scale performance by using an event-driven file watcher, a dynamic .syncignore system, and smart binary filtering to keep synchronization seamless and lightweight. Development is complete and the extension is currently being tested.",
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
  },
];

function Home() {
  useReveal();
  const [documentOpen, setDocumentOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

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
            Building MiqorAI · Open to mentors & partners
          </div>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            Mazimpaka<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Miguel</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
            Builder of <span className="text-foreground font-medium">MiqorAI</span> and full stack software developer. MiqorAI is an evolving AI platform shaped through continuous improvement.
          </p>
          <p className="mt-4 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            I build things that solve real problems, learn from feedback, and keep improving what I ship.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:opacity-90">
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#miqorai" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-card">
              About MiqorAI
            </a>
            <button onClick={() => setCvOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-card">
              View CV <BriefcaseBusiness className="h-4 w-4" />
            </button>
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

      {/* MIQORAI */}
      <Section id="miqorai" eyebrow="Featured Project" title="MiqorAI">
        <p className="max-w-3xl text-balance text-lg text-muted-foreground">
          MiqorAI is an AI platform under constant and continuous improvement. It is being developed through practical experimentation, thoughtful iteration, and a focus on experiences that are genuinely useful.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/50 p-8 shadow-2xl">
            <FileText className="h-7 w-7 text-primary" />
            <h3 className="mt-6 text-2xl font-semibold">Explore the platform</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Read the complete platform description directly in this portfolio, with a focused reader built for the document.</p>
            <button onClick={() => setDocumentOpen(true)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary">
              Read the document <FileText className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-8 shadow-2xl">
            <Play className="h-7 w-7 text-primary" />
            <h3 className="mt-6 text-2xl font-semibold">See it in action</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Open the live MiqorAI demo to experience the platform as it continues to grow and improve.</p>
            <a href="https://miqor-ai.vercel.app/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              View live demo <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card/50 p-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Current status</p>
            <p className="mt-1 font-medium">Live platform · Constant and continuous improvement</p>
            <p className="mt-1 text-sm text-muted-foreground">Actively evolving through feedback, experimentation, and new releases.</p>
          </div>
          <ViewMiqorAIDropdown onReadDocument={() => setDocumentOpen(true)} />
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="The tools I build with.">
        <p className="mb-10 max-w-2xl text-balance text-lg text-muted-foreground">
          Full stack, end to end. I write the interface, the server, and the data layer, and I keep learning whatever a problem demands.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(group => (
            <div key={group.title} className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-primary">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Projects" title="Things I've built along the way.">
        <p className="mb-10 max-w-2xl text-balance text-lg text-muted-foreground">
          Click any project to read a full summary of what it does.
        </p>
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
          <SocialLink href="https://www.linkedin.com/in/miguel-mazimpaka/" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="mailto:mazimpakamiguel@gmail.com" icon={Mail} label="Email" />
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something.">
        <div className="rounded-3xl border border-border bg-card/50 p-8 md:p-12">
          <p className="max-w-2xl text-balance text-xl text-muted-foreground md:text-2xl">
            Building MiqorAI. Looking for mentors, feedback, and potential partners.
          </p>
          <a href="mailto:mazimpakamiguel@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            <Mail className="h-4 w-4" />
            mazimpakamiguel@gmail.com
          </a>
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        Built by Miguel · {new Date().getFullYear()}
      </footer>
      {documentOpen && <DocumentModal onClose={() => setDocumentOpen(false)} />}
      {cvOpen && <CurriculumVitaeModal onClose={() => setCvOpen(false)} />}
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
                  {l.label}
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

function ViewMiqorAIDropdown({ onReadDocument }: { onReadDocument: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(o => !o)} onBlur={() => setTimeout(() => setOpen(false), 150)} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
        View MiqorAI
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-popover shadow-xl">
          <a href="https://miqor-ai.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 px-4 py-3 text-sm transition-colors hover:bg-secondary">
            <span className="inline-flex items-center gap-2"><Play className="h-4 w-4" /> Live demo</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button onMouseDown={event => event.preventDefault()} onClick={onReadDocument} className="flex w-full items-center justify-between gap-2 border-t border-border px-4 py-3 text-left text-sm transition-colors hover:bg-secondary">
            <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Platform document</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorText("Please fill out all fields.");
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorText("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorText("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Unable to submit the message.");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      setStatus("error");
      setErrorText(error instanceof Error ? error.message : "Unable to submit the message. Please email Miguel directly.");
    }
  };

  return (
    <form onSubmit={submit} noValidate className="mt-10 flex flex-col gap-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text" value={name} onChange={e => { setName(e.target.value); setStatus("idle"); }} placeholder="Your name"
          className="rounded-xl border border-border bg-background/60 px-5 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
        <input
          type="email" value={email} onChange={e => { setEmail(e.target.value); setStatus("idle"); }} placeholder="you@email.com"
          className="rounded-xl border border-border bg-background/60 px-5 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>
      <textarea
        value={message} onChange={e => { setMessage(e.target.value); setStatus("idle"); }} placeholder="Your message" rows={4}
        className="rounded-xl border border-border bg-background/60 px-5 py-3 text-sm outline-none transition-colors focus:border-primary resize-y min-h-[100px]"
      />
      <input
        type="text" name="website" value={website} onChange={event => setWebsite(event.target.value)}
        tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[10000px] h-px w-px opacity-0"
      />

      {status === "error" && <p className="text-sm text-red-500 font-medium px-2">{errorText}</p>}
      {status === "success" && <p className="text-sm text-green-500 font-medium px-2">Message sent successfully. Miguel will get back to you soon.</p>}

      <div className="flex justify-end mt-2">
        <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
          {status === "sending" ? "Sending..." : "Send Message"} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function DocumentModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md" onClick={event => { if (event.target === ref.current) onClose(); }} ref={ref}>
      <div className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="text-sm font-semibold">MiqorAI platform description</p>
            <p className="text-xs text-muted-foreground">Complete platform overview</p>
          </div>
          <button onClick={onClose} aria-label="Close document" className="rounded-full bg-secondary p-2 transition-colors hover:bg-muted"><X className="h-4 w-4" /></button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-8"><MiqoraiDocument /></div>
      </div>
    </div>
  );
}

function CurriculumVitaeModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md" onClick={event => { if (event.target === ref.current) onClose(); }} ref={ref}>
      <div className="relative flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4"><div><p className="text-sm font-semibold">Curriculum Vitae</p><p className="text-xs text-muted-foreground">Mazimpaka Miguel Gloire Marie · Kigali, Rwanda</p></div><button onClick={onClose} aria-label="Close CV" className="rounded-full bg-secondary p-2 transition-colors hover:bg-muted"><X className="h-4 w-4" /></button></div>
        <div className="min-h-0 flex-1 overflow-y-auto p-6 md:p-10">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7"><h2 className="text-3xl font-bold">Mazimpaka Miguel Gloire Marie</h2><p className="mt-2 text-muted-foreground">Full stack software developer · Founder & CEO, MiqorAI</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"><a href="mailto:mazimpakamiguel@gmail.com" className="hover:text-primary">mazimpakamiguel@gmail.com</a><span>+250 790 993 822</span><a href="https://www.linkedin.com/in/miguel-mazimpaka/" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a><a href="https://github.com/Migz-apps" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a></div></div>
          <CvSection title="Profile"><p>Full stack software developer with experience building database-driven web applications, real-time systems, and AI-powered solutions. Founder and CEO of MiqorAI, a healthcare intelligence platform focused on patient-owned medical records, healthcare interoperability, and AI-assisted clinical workflows.</p></CvSection>
          <CvSection title="Experience"><div className="space-y-6"><CvRole title="Founder & CEO · MiqorAI" period="2026 – Present" text="Leads technical development, product planning, architecture, and implementation for a healthcare intelligence platform spanning patient management, records, AI services, audit logging, notifications, billing workflows, and secure health-data management." /><CvRole title="Software Developer · Echo Solutions" period="2025" text="Developed and maintained web applications, REST APIs, business software, data workflows, responsive interfaces, and production performance improvements with cross-functional teams." /><CvRole title="Freelance Software Developer" period="2024 – 2025" text="Built web applications and database-driven systems for clients, including responsive interfaces, backend APIs, relational schemas, deployment, maintenance, and technical support." /></div></CvSection>
          <CvSection title="Technical strengths"><div className="flex flex-wrap gap-2">{["Java", "JavaScript / TypeScript", "Python", "PHP", "SQL & NoSQL", "React / React Native", "Angular", "Node.js", "NestJS", "Spring Boot", "Django", "FastAPI", "Docker", "Kubernetes", "AWS", "Google Cloud", "WebSockets", "Computer Vision", "Machine Learning", "System Design", "CI/CD"].map(skill => <span key={skill} className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm">{skill}</span>)}</div></CvSection>
          <CvSection title="Selected projects"><div className="grid gap-4 md:grid-cols-2"><CvProject title="SyncScript" text="Real-time collaborative development platform and Cursor extension built with TypeScript, Node.js, WebSockets, event-driven monitoring, Docker, and GitHub Actions; published on OpenVSX." /><CvProject title="School Logbook Management System" text="Digital system for school records and administrative workflows, with relational data design, backend business logic, and user-facing interfaces." /><CvProject title="Computer vision systems" text="Multi-person face tracking and recognition plus an automatic license-plate recognition system, using Python, deep learning, image processing, OCR, and structured event logging." /><CvProject title="FutureLock & Bwenge" text="Full-stack Web3 vault and marketplace, alongside AI persona-platform frontend architecture, real-time interfaces, knowledge workflows, dashboards, and multi-tenant systems." /></div></CvSection>
          <CvSection title="Education"><p className="font-medium">Rwanda Coding Academy</p><p className="mt-1 text-sm text-muted-foreground">Software Engineering · 2023 – 2026</p><p className="mt-4 text-sm text-muted-foreground">English: Professional working proficiency · Kinyarwanda: Native proficiency · French: Professional working proficiency · Eligible for remote international opportunities.</p></CvSection>
        </div>
      </div>
    </div>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) { return <section className="mt-9"><h3 className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{title}</h3><div className="mt-4 leading-relaxed text-muted-foreground">{children}</div></section>; }
function CvRole({ title, period, text }: { title: string; period: string; text: string }) { return <div><div className="flex flex-wrap items-baseline justify-between gap-2"><h4 className="font-semibold text-foreground">{title}</h4><span className="text-xs text-muted-foreground">{period}</span></div><p className="mt-2 text-sm">{text}</p></div>; }
function CvProject({ title, text }: { title: string; text: string }) { return <div className="rounded-xl border border-border bg-card/40 p-5"><h4 className="font-semibold text-foreground">{title}</h4><p className="mt-2 text-sm">{text}</p></div>; }
