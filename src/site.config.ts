type SiteConfig = {
  origin: string;
  basePathname: string;
  trailingSlash: boolean;
  title: string;
  description: string;
};

export const SITE: SiteConfig = {
  origin: "https://astro-skeleton.lawson.dev",
  basePathname: "/",
  trailingSlash: false,

  title: "Astro Skeleton",
  description: "A skeleton for Astro projects",
};
