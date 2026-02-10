"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Socials } from "@/components/socials"

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
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
