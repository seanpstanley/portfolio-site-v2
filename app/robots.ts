import type { MetadataRoute } from "next";

/** `robots.txt`: everything is crawlable. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://seanpstanley.dev/sitemap.xml",
  };
}
