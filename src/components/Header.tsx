"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { ctas, navLinks } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-brand-gold-light/40 bg-brand-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="flex min-h-[44px] shrink-0 flex-col justify-center"
            aria-label="Sherry Anne Crowe — Home"
          >
            <span className="whitespace-nowrap font-brand-name text-lg font-medium tracking-[0.2em] uppercase text-brand-text-main xl:text-xl">
              Sherry Anne Crowe
            </span>
            <BrandMark className="text-[0.7rem] leading-none md:text-xs" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap font-serif text-[0.8rem] tracking-[0.1em] transition-colors hover:text-brand-gold-primary xl:text-sm ${
                  pathname === link.href
                    ? "text-brand-gold-primary"
                    : "text-brand-text-main"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <Link href={ctas.shop.href} className="btn-ghost lg:hidden 2xl:inline-flex">
              {ctas.shop.label}
            </Link>
            <Link href={ctas.book.href} className="btn-primary whitespace-nowrap">
              {ctas.book.label}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-brand-text-main transition-all duration-300 ${
                  open ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-px w-6 bg-brand-text-main transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-brand-text-main transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-30 flex flex-col bg-brand-cream transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-8 px-6"
          aria-label="Mobile"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              className={`min-h-[44px] font-serif text-3xl tracking-wide transition-all duration-500 sm:text-4xl ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${
                pathname === link.href
                  ? "text-brand-gold-primary"
                  : "text-brand-text-main"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <BrandMark variant="display" size="md" />
        </nav>
      </div>
    </>
  );
}
