import { skillGroups } from "@/content/skills";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Skills &amp; Stack
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What I build with
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
