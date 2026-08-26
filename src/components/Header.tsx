import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeProvider";

const links = [
  { href: "#about", label: "About" },
  { href: "#miqorai", label: "MiqorAI" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(960px,calc(100%-2rem))] -translate-x-1/2">
      <div className="glass flex items-center justify-between rounded-full px-4 py-2 shadow-lg">
        <Link to="/" className="flex items-center gap-2 pl-2 font-display text-sm font-semibold tracking-tight">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Miguel
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
