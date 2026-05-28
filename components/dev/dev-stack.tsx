"use client"

import { Code2, Database, Workflow, Rocket } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const icons = [Code2, Database, Workflow, Rocket]

export function DevStack() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation()
  const t = translations.dev[lang].stack

  return (
    <section id="dev-stack" className="py-24">
      <div ref={ref} className="max-w-5xl">
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

        <div className="grid sm:grid-cols-2 gap-4">
          {t.items.map((cat, i) => {
            const Icon = icons[i]
            return (
              <div
                key={cat.area}
                className={`group bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold text-base">{cat.area}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
