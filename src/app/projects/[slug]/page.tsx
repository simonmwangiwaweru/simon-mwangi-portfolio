import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/content/projects";
import GithubIcon from "@/components/icons/GithubIcon";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-accent"
      >
        <ArrowLeft size={16} />
        All projects
      </Link>

      <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {project.role}
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-ink/80">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.links.live || project.links.github) && (
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-accent"
            >
              Live demo
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent"
            >
              <GithubIcon size={16} />
              Source
            </a>
          )}
        </div>
      )}

      <div className="mt-14 flex flex-col gap-10">
        <section>
          <h2 className="font-display text-xl font-bold tracking-tight">
            The problem
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/80">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold tracking-tight">
            What I built
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/80">
            {project.built}
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold tracking-tight">
            Outcome
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/80">
            {project.outcome}
          </p>
        </section>
      </div>
    </article>
  );
}
