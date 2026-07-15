"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight"
        >
          {site.shortName}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={site.cvPath}
          download
          className="hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent md:inline-block"
        >
          Download CV
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-paper px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-ink/80 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.cvPath}
                download
                className="mt-2 inline-block rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
