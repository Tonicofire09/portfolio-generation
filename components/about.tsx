"use client"

import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export function About() {
  const { lang } = useLang()
  const t = translations.about[lang]
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24">
      <div ref={ref} className="max-w-5xl">
        <h2
          className={`flex items-center gap-4 text-2xl font-bold text-foreground mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="text-primary font-mono text-lg font-normal">{t.sectionNumber}</span>
          {t.sectionTitle}
          <span className="hidden sm:block h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Professional Photo */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 bg-card">
                <Image
                  src="/antonio-professional.jpg"
                  alt="Antonio Kiepert"
                  fill
                  className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div
            className={`lg:col-span-4 space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
        </div>

        {/* Skills Grid */}
        <div
          className={`mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {t.competencias.map((comp) => (
            <div key={comp.area} className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/40 hover:bg-card transition-all">
              <h3 className="text-foreground font-mono text-sm font-medium mb-3 flex items-center gap-2">
                <span className="text-primary">▸</span>
                {comp.area}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {comp.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-secondary/80 text-secondary-foreground px-2.5 py-1 rounded-md font-mono hover:bg-secondary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
