import type { Metadata } from "next"

const siteUrl = "https://antoniokiepert.com"

export const metadata: Metadata = {
  title: "Antonio Kiepert | Full Stack Developer",
  description:
    "Full Stack Developer with real projects in production. React, Next.js, TypeScript, Supabase, n8n. B2B SaaS, e-commerce, internal tools and integrations. Fluent English, 9 years in the US.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Supabase",
    "n8n",
    "PostgreSQL",
    "SaaS Developer",
    "Frontend Developer",
    "Antonio Kiepert",
  ],
  alternates: {
    canonical: "/dev",
    languages: {
      "en-US": "/dev",
      "pt-BR": "/dev",
    },
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/dev`,
    siteName: "Antonio Kiepert · Dev",
    title: "Antonio Kiepert | Full Stack Developer",
    description:
      "Full Stack Developer · React, Next.js, TypeScript, Supabase, n8n. Real systems in production.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Kiepert | Full Stack Developer",
    description:
      "Full Stack Developer · React, Next.js, TypeScript, Supabase, n8n. Real systems in production.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonio Kiepert",
  url: `${siteUrl}/dev`,
  jobTitle: "Full Stack Developer",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "n8n",
    "Node.js",
    "Docker",
  ],
  sameAs: ["https://www.linkedin.com/in/antonio-kiepert"],
}

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dev-scope min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  )
}
