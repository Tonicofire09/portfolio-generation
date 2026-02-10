"use client"

import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { lang } = useLang()
  const t = translations.about[lang]
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24">
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

        <div className="grid lg:grid-cols-5 gap-12">
          <div
            className={`lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.paragraphs.map((p, i) => (
              <p key={i}>
                {p.before}
                {p.highlight && <span className="text-foreground font-medium">{p.highlight}</span>}
                {p.after}
                {"highlight2" in p && p.highlight2 && (
                  <span className="text-foreground font-medium">{p.highlight2}</span>
                )}
                {"after2" in p && p.after2}
              </p>
            ))}
          </div>

          <div
            className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.competencias.map((comp) => (
              <div key={comp.area} className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-foreground font-mono text-sm font-medium mb-2">{comp.area}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {comp.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
