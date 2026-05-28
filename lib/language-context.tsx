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

const COOKIE_NAME = "lang"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

function writeCookie(value: Lang) {
  try {
    document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`
    window.localStorage.setItem("lang", value)
  } catch {
    // ignore (privacy mode, quota)
  }
}

export function LanguageProvider({
  initialLang = "en",
  children,
}: {
  initialLang?: Lang
  children: ReactNode
}) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-US"
  }, [lang])

  const toggleLang = () =>
    setLang((prev) => {
      const next = prev === "pt" ? "en" : "pt"
      writeCookie(next)
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
