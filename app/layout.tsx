import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { cookies, headers } from "next/headers"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
})

const siteUrl = "https://antoniokiepert.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Antonio Kiepert | Marketing Manager & Growth Engineer",
    template: "%s | Antonio Kiepert",
  },
  description:
    "Marketing Manager specializing in Paid Media, Growth & Automation for SaaS & B2B. Building scalable marketing engines that drive pipeline and real revenue.",
  applicationName: "Antonio Kiepert Portfolio",
  authors: [{ name: "Antonio Kiepert" }],
  creator: "Antonio Kiepert",
  keywords: [
    "Media Buyer",
    "Marketing Manager",
    "Paid Media",
    "Meta Ads",
    "Google Ads",
    "Growth Marketing",
    "SaaS Marketing",
    "B2B Marketing",
    "Marketing Automation",
    "Antonio Kiepert",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Antonio Kiepert",
    title: "Antonio Kiepert | Marketing Manager & Growth Engineer",
    description:
      "Building scalable marketing engines that drive pipeline and real revenue for SaaS & B2B.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Kiepert | Marketing Manager & Growth Engineer",
    description:
      "Building scalable marketing engines that drive pipeline and real revenue for SaaS & B2B.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonio Kiepert",
  url: siteUrl,
  jobTitle: "Marketing Manager & Growth Engineer",
  sameAs: ["https://www.linkedin.com/in/antonio-kiepert"],
}

async function resolveHtmlLang(): Promise<"pt-BR" | "en-US"> {
  const cookieStore = await cookies()
  const fromCookie = cookieStore.get("lang")?.value
  if (fromCookie === "pt") return "pt-BR"
  if (fromCookie === "en") return "en-US"
  const accept = (await headers()).get("accept-language") ?? ""
  return accept.toLowerCase().startsWith("pt") ? "pt-BR" : "en-US"
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const htmlLang = await resolveHtmlLang()

  return (
    <html lang={htmlLang} className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
