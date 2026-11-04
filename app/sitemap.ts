import type { MetadataRoute } from "next";

/** `sitemap.xml`: the site is a single page. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seanpstanley.dev/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
