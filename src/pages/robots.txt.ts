import type { APIRoute } from "astro";
import { SITE } from "@/site.config";

export const GET: APIRoute = async () => {
  return new Response(
    `# Hello, robots! here's my instructions for ${SITE.origin}
# For more info: https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt

User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.origin).href}
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  );
};
