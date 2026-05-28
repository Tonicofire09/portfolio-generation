"use client"

import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const fileExts = ["frontend.ts", "backend.sql", "integrations.yaml", "deploy.dockerfile"]

export function DevStack() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation()
  const t = translations.dev[lang].stack
  const num = t.sectionNumber.replace(".", "")
  const slug = t.sectionTitle.toLowerCase().replace(/\s+/g, "_")

  return (
    <section id="dev-stack" className="py-24">
      <div ref={ref} className="max-w-5xl">
        <h2
          className={`font-mono text-lg text-foreground mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="syntax-comment">// {num}_{slug}</span>
        </h2>
        <p
          className={`text-muted-foreground mb-10 max-w-2xl text-sm transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {t.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {t.items.map((cat, i) => (
            <div
              key={cat.area}
              className={`bg-card border border-border rounded-md overflow-hidden hover:border-primary/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              {/* window chrome */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-secondary/40">
                <div className="window-dots" aria-hidden>
                  <span /><span /><span />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {fileExts[i]}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {cat.tools.length}
                </span>
              </div>

              <div className="p-5">
                <div className="font-mono text-sm mb-4">
                  <span className="syntax-keyword">export const</span>{" "}
                  <span className="syntax-fn">{cat.area.toLowerCase().replace(/\s+&\s+|\s+/g, "_")}</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-muted-foreground">[</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-4">
                  {cat.tools.map((tool, idx) => (
                    <span
                      key={tool}
                      className="text-xs bg-secondary text-foreground/90 px-2 py-1 rounded font-mono border border-border/60 hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <span className="syntax-string">"{tool}"</span>
                      {idx < cat.tools.length - 1 && (
                        <span className="text-muted-foreground">,</span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="font-mono text-sm mt-4">
                  <span className="text-muted-foreground">];</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
