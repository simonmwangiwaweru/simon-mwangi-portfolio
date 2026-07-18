import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on shipping real software — USSD, M-Pesa integrations, and applied AI, from Simon Mwangi Waweru.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Blog
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Notes from the build
      </h1>

      <Reveal
        as="ul"
        className="mt-12 flex flex-col divide-y divide-border border-t border-border"
      >
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 py-8"
            >
              <time
                dateTime={post.meta.date}
                className="text-sm font-medium text-muted"
              >
                {new Date(post.meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="font-display text-2xl font-bold tracking-tight group-hover:text-accent">
                {post.meta.title}
              </h2>
              <p className="text-base text-ink/80">{post.meta.summary}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accent">
                Read post
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
