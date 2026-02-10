"use client"

import { Linkedin, Mail, MessageCircle } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { lang } = useLang()
  const t = translations.footer[lang]

  return (
    <footer className="py-8 px-6 lg:px-0">
      <div className="max-w-6xl mx-auto">
        {/* Mobile socials */}
        <div className="flex lg:hidden items-center justify-center gap-8 mb-6">
          <a
            href="https://www.linkedin.com/in/antonio-kiepert"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/5527988770632"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="mailto:antoniohenriquekiepert@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-center text-muted-foreground font-mono text-xs">{t}</p>
      </div>
    </footer>
  )
}
