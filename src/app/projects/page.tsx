import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real, shipped products by Simon Mwangi Waweru — from USSD marketplaces to full-stack platforms.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Projects
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Everything I&apos;ve shipped
      </h1>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
