import { MetadataRoute } from "next";

const leistungSlugs = [
  "webentwicklung",
  "ki-integrationen",
  "ki-automatisierung",
  "api-anbindungen",
  "dashboards",
  "individuelle-softwareloesungen",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nm-tech-it.de";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...leistungSlugs.map((slug) => ({
      url: `${baseUrl}/leistungen/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
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
