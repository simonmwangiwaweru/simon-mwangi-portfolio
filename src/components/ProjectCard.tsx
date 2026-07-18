import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_0_var(--color-accent)]"
    >
      {cover && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
          <Image
            src={cover}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-8">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            {project.role.split("(")[0].trim()}
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base text-ink/80">{project.tagline}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
          View case study
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
