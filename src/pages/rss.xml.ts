import { type CollectionEntry, getCollection } from "astro:content";
import { SITE } from "@/site.config";
import rss from "@astrojs/rss";

export async function GET(context: { site: string }) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post: CollectionEntry<"blog">) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
