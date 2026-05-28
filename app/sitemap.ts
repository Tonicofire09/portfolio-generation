import type { MetadataRoute } from "next"

const siteUrl = "https://antoniokiepert.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-US": `${siteUrl}/`,
          "pt-BR": `${siteUrl}/`,
        },
      },
    },
    {
      url: `${siteUrl}/dev`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          "en-US": `${siteUrl}/dev`,
          "pt-BR": `${siteUrl}/dev`,
        },
      },
    },
  ]
}
