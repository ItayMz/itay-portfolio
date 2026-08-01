import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router";
import { socialLinks } from "@/data/socialLinks";

const links = [
  ["Projects", "/#projects"],
  ["Experience", "/#experience"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.045] bg-[#090e16]/88 backdrop-blur-xl">
      <nav className="container-shell flex h-[92px] items-center justify-between" aria-label="Primary navigation">
        <Link to="/" className="focus-ring text-sm font-black tracking-[0.18em] text-white transition-colors hover:text-brand-soft">
          ITAY MAZOR
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="focus-ring rounded-full px-1.5 py-1 text-sm text-copy-muted transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="focus-ring rounded-full p-2.5 text-copy-muted transition-colors hover:bg-white/[0.06] hover:text-white"
            href={socialLinks.github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialLinks.github.ariaLabel}
          >
            <Github size={19} />
          </a>
          <a
            className="focus-ring rounded-full p-2.5 text-copy-muted transition-colors hover:bg-white/[0.06] hover:text-white"
            href={socialLinks.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialLinks.linkedin.ariaLabel}
          >
            <Linkedin size={19} />
          </a>
        </div>
      </nav>
    </header>
  );
}
