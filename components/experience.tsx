"use client"

import { useState } from "react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Experience() {
  const { lang } = useLang()
  const t = translations.experience[lang]
  const [activeTab, setActiveTab] = useState(0)
  const active = t.items[activeTab]
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="py-24">
      <div ref={ref} className="max-w-4xl">
        <h2
          className={`flex items-center gap-4 text-2xl font-bold text-foreground mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-lg font-normal">{t.sectionNumber}</span>
          {t.sectionTitle}
          <span className="hidden sm:block h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div
          className={`flex flex-col md:flex-row gap-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border shrink-0">
            {t.items.map((exp, i) => (
              <button
                type="button"
                key={`${exp.company}-${exp.title}`}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                  activeTab === i
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {exp.tabLabel}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[320px]">
            <h3 className="text-lg font-semibold text-foreground">
              {active.title}{" "}
              <span className="text-primary">
                @{" "}
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  {active.company}
                </a>
              </span>
            </h3>
            <p className="font-mono text-muted-foreground text-sm mt-1">{active.period}</p>
            <p className="text-muted-foreground text-xs mt-1 mb-6">{active.description}</p>
            <ul className="space-y-3">
              {active.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                >
                  <span className="text-primary mt-1 shrink-0 font-mono text-xs">{">"}</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
