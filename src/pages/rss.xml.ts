import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/site.config";

export async function GET(context: { site: string }) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
