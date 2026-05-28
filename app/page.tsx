import dynamic from "next/dynamic"
import { cookies, headers } from "next/headers"
import { LanguageProvider } from "@/lib/language-context"
import { Nav } from "@/components/nav"
import { Socials } from "@/components/socials"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import type { Lang } from "@/lib/translations"

const Services = dynamic(() => import("@/components/services").then((m) => m.Services))
const Results = dynamic(() => import("@/components/results").then((m) => m.Results))
const Dashboard = dynamic(() => import("@/components/dashboard").then((m) => m.Dashboard))
const Projects = dynamic(() => import("@/components/projects").then((m) => m.Projects))
const Experience = dynamic(() => import("@/components/experience").then((m) => m.Experience))
const Contact = dynamic(() => import("@/components/contact").then((m) => m.Contact))

async function resolveInitialLang(): Promise<Lang> {
  const cookieStore = await cookies()
  const fromCookie = cookieStore.get("lang")?.value
  if (fromCookie === "pt" || fromCookie === "en") return fromCookie

  const acceptLanguage = (await headers()).get("accept-language") ?? ""
  return acceptLanguage.toLowerCase().startsWith("pt") ? "pt" : "en"
}

export default async function Page() {
  const initialLang = await resolveInitialLang()

  return (
    <LanguageProvider initialLang={initialLang}>
      <Nav />
      <Socials />
      <main className="max-w-6xl mx-auto px-6 lg:px-12">
        <Hero />
        <About />
        <Services />
        <Results />
        <Dashboard />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
