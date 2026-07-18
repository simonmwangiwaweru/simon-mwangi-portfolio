import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <p className="mt-6 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            Final-year BBIT student at JKUAT, Nairobi, and a full-stack
            developer &amp; designer. I build real products that solve local
            problems — from USSD-accessible marketplaces to AI tools for
            small businesses. Comfortable across the stack and increasingly
            focused on AI/ML engineering. I started out designing posters
            with zero capital and grew into shipping full software.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
