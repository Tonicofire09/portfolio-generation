"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Nav() {
  const { lang, toggleLang } = useLang()
  const t = translations.nav[lang]
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg shadow-background/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="text-primary font-mono font-bold text-lg">
          {"<AK />"}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {t.items.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <span className="text-primary font-mono text-xs mr-1">0{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors font-mono text-xs border border-border rounded px-2.5 py-1.5 hover:border-primary/40"
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Portugues"}
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <a
            href="#contact"
            className="border border-primary text-primary px-4 py-2 rounded text-sm font-mono hover:bg-primary/10 transition-colors"
          >
            {t.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors font-mono text-xs border border-border rounded px-2 py-1.5 hover:border-primary/40"
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Portugues"}
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button
            type="button"
            className="text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t.menuClose : t.menuOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {t.items.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-primary font-mono text-xs mr-1">0{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
