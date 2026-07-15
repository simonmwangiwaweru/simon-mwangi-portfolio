import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Contact
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Have a role, a project, or an idea worth building? Let&apos;s talk.
      </h2>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent"
        >
          <Mail size={16} />
          {site.email}
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon size={16} />
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </div>
    </section>
  );
}
