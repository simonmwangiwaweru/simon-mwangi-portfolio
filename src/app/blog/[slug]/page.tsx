import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const { meta, Content } = post;

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-semibold text-muted hover:text-accent"
      >
        <ArrowLeft size={16} />
        All posts
      </Link>

      <time
        dateTime={meta.date}
        className="mt-8 block text-sm font-medium text-muted"
      >
        {new Date(meta.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {meta.title}
      </h1>

      <div className="mt-10">
        <Content />
      </div>
    </article>
  );
}
