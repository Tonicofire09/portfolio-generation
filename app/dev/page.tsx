import { cookies, headers } from "next/headers"
import { LanguageProvider } from "@/lib/language-context"
import { DevNav } from "@/components/dev/dev-nav"
import { DevHero } from "@/components/dev/dev-hero"
import { DevAbout } from "@/components/dev/dev-about"
import { DevStack } from "@/components/dev/dev-stack"
import { DevProjects } from "@/components/dev/dev-projects"
import { DevExperience } from "@/components/dev/dev-experience"
import { DevContact } from "@/components/dev/dev-contact"
import { DevFooter } from "@/components/dev/dev-footer"
import type { Lang } from "@/lib/translations"

async function resolveInitialLang(): Promise<Lang> {
  const cookieStore = await cookies()
  const fromCookie = cookieStore.get("lang")?.value
  if (fromCookie === "pt" || fromCookie === "en") return fromCookie

  const acceptLanguage = (await headers()).get("accept-language") ?? ""
  return acceptLanguage.toLowerCase().startsWith("pt") ? "pt" : "en"
}

export default async function DevPage() {
  const initialLang = await resolveInitialLang()

  return (
    <LanguageProvider initialLang={initialLang}>
      <DevNav />
      <main className="max-w-6xl mx-auto px-6 lg:px-12">
        <DevHero />
        <DevAbout />
        <DevStack />
        <DevProjects />
        <DevExperience />
        <DevContact />
      </main>
      <DevFooter />
    </LanguageProvider>
  )
}
