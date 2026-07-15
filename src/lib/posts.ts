export type PostMeta = {
  title: string;
  date: string;
  summary: string;
};

const postLoaders = {
  "hello-world": () => import("@/content/posts/hello-world.mdx"),
} as const;

export type PostSlug = keyof typeof postLoaders;

export function getAllPostSlugs(): PostSlug[] {
  return Object.keys(postLoaders) as PostSlug[];
}

export async function getPostBySlug(slug: string) {
  const loader = postLoaders[slug as PostSlug];
  if (!loader) return null;

  const mod = await loader();
  return { slug, meta: mod.meta as PostMeta, Content: mod.default };
}

export async function getAllPosts() {
  const slugs = Object.keys(postLoaders) as PostSlug[];

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await postLoaders[slug]();
      return { slug, meta: mod.meta as PostMeta };
    }),
  );

  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}
