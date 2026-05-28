import dynamic from "next/dynamic"
import { LanguageProvider } from "@/lib/language-context"
import { Nav } from "@/components/nav"
import { Socials } from "@/components/socials"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

// Below-the-fold sections are deferred so they don't block the
// hero's first paint. They still render statically — just not in the
// critical bundle.
const Services = dynamic(() => import("@/components/services").then((m) => m.Services))
const Results = dynamic(() => import("@/components/results").then((m) => m.Results))
const Dashboard = dynamic(() => import("@/components/dashboard").then((m) => m.Dashboard))
const Projects = dynamic(() => import("@/components/projects").then((m) => m.Projects))
const Experience = dynamic(() => import("@/components/experience").then((m) => m.Experience))
const Contact = dynamic(() => import("@/components/contact").then((m) => m.Contact))

export default function Page() {
  return (
    <LanguageProvider>
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
