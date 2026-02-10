"use client"

import {
  TrendingUp,
  Target,
  Cog,
  Clapperboard,
  Code2,
  RefreshCcw,
} from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const icons = [TrendingUp, Target, Cog, Clapperboard, Code2, RefreshCcw]

export function Services() {
  const { lang } = useLang()
  const t = translations.services[lang]
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="servicos" className="py-24">
      <div ref={ref} className="max-w-4xl">
        <h2
          className={`flex items-center gap-4 text-2xl font-bold text-foreground mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-lg font-normal">{t.sectionNumber}</span>
          {t.sectionTitle}
          <span className="hidden sm:block h-px flex-1 bg-border max-w-xs" />
        </h2>
        <p
          className={`text-muted-foreground mb-12 max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {t.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((service, i) => {
            const Icon = icons[i]
            return (
              <div
                key={service.title}
                className={`group bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
              >
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-sm mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
