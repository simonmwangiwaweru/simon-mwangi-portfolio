import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Featured Work
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Real products, shipped
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-accent"
          >
            All projects
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
