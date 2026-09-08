import Link from "next/link";
import { navLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-brand-gold-light/40 bg-brand-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 text-center lg:px-10">
        <p className="font-script text-3xl text-brand-gold-primary">
          Take Up Space on Purpose
        </p>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Footer">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-serif text-sm tracking-[0.12em] text-brand-text-main transition-colors hover:text-brand-gold-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">
          © {new Date().getFullYear()} Sherry Anne Crowe
        </p>
      </div>
    </footer>
  );
}
