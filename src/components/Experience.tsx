import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Experience
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Where I&apos;ve worked
        </h2>

        <ol className="mt-12 flex flex-col divide-y divide-border border-t border-border">
          {experience.map((item) => (
            <li
              key={item.role + item.org}
              className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-display text-lg font-semibold">
                  {item.role}
                </p>
                <p className="text-sm text-muted">{item.org}</p>
              </div>
              {item.period && (
                <p className="text-sm font-medium text-ink/70">
                  {item.period}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
