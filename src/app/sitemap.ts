import { MetadataRoute } from "next";
import { services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nm-tech-it.de";

  const serviceUrls: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/leistungen/${s.slug}`,
    lastModified: new Date("2026-06-23"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-23"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date("2026-06-23"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceUrls,
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
