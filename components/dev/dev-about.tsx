"use client"

import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function DevAbout() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation()
  const t = translations.dev[lang].about
  const slug = t.sectionTitle.toLowerCase().replace(/\s+/g, "_")
  const num = t.sectionNumber.replace(".", "")

  return (
    <section id="dev-about" className="py-24">
      <div ref={ref} className="max-w-4xl">
        <h2
          className={`font-mono text-lg text-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="syntax-comment">// {num}_{slug}</span>
        </h2>

        <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl">
          {t.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 100}ms` : "0ms" }}
            >
              {p.before}
              <span className="text-primary font-medium">{p.highlight}</span>
              {p.after}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
