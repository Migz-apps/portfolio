import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, FileText, Play } from "lucide-react";
import { Header } from "@/components/Header";
import { MiqoraiDocument } from "@/components/MiqoraiDocument";

export const Route = createFileRoute("/miqorai")({
  head: () => ({
    meta: [
      { title: "MiqorAI — Complete platform overview" },
      { name: "description", content: "MiqorAI is an evolving AI platform under constant and continuous improvement." },
      { property: "og:title", content: "MiqorAI — Complete platform overview" },
      { property: "og:description", content: "Explore MiqorAI's live demo and complete platform description." },
    ],
  }),
  component: MiqorAIPage,
});

function MiqorAIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">Featured platform</p>
          <h1 className="text-balance font-display text-5xl font-bold tracking-tight sm:text-6xl">MiqorAI</h1>
          <p className="mt-6 text-balance text-xl text-muted-foreground">
            An AI platform under constant and continuous improvement, shaped through active development, feedback, and thoughtful iteration.
          </p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <a href="https://miqor-ai.vercel.app/" target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:border-primary/50">
            <Play className="h-7 w-7 text-primary" />
            <h2 className="mt-6 text-2xl font-semibold">Live demo</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Open MiqorAI and see the current platform experience for yourself.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">Visit the demo <ExternalLink className="h-4 w-4" /></span>
          </a>
          <a href="#platform-document" className="group rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:border-primary/50">
            <FileText className="h-7 w-7 text-primary" />
            <h2 className="mt-6 text-2xl font-semibold">Platform document</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Read the complete platform description in a responsive format built into this portfolio.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">Read the document <ArrowLeft className="h-4 w-4 rotate-90" /></span>
          </a>
        </section>

        <section className="mt-16"><MiqoraiDocument /></section>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        Built by Miguel · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
