import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Full-stack developer &amp; designer · {site.location}
      </p>

      <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        {site.name}
      </h1>

      <p className="max-w-2xl text-lg text-ink/80 sm:text-xl">
        {site.pitch}
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          View Projects
          <ArrowRight size={16} />
        </Link>
        <a
          href={site.cvPath}
          download
          className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Download CV
          <Download size={16} />
        </a>
      </div>
    </section>
  );
}
