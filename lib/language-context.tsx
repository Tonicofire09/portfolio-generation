"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { Lang } from "./translations"

type LanguageContextType = {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null
    if (saved === "pt" || saved === "en") {
      setLang(saved)
      return
    }
    const browser = window.navigator.language?.toLowerCase() ?? ""
    if (browser.startsWith("pt")) setLang("pt")
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-US"
  }, [lang])

  const toggleLang = () =>
    setLang((prev) => {
      const next = prev === "pt" ? "en" : "pt"
      try {
        window.localStorage.setItem("lang", next)
      } catch {
        // ignore (privacy mode, quota)
      }
      return next
    })

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
