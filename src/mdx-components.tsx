import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-10 font-display text-2xl font-bold tracking-tight"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 font-display text-xl font-bold tracking-tight"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mt-4 text-base leading-relaxed text-ink/80" {...props} />
    ),
    ul: (props) => (
      <ul
        className="mt-4 list-disc space-y-2 pl-6 text-base text-ink/80"
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="font-medium text-accent underline underline-offset-4"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-card px-1.5 py-0.5 font-mono text-sm"
        {...props}
      />
    ),
    ...components,
  };
}
