"use client"

import { ExternalLink } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const fileNames = [
  "bouzr.tsx",
  "arara-silk.tsx",
  "lead-miner.ts",
  "production-kanban.tsx",
  "email-validator.py",
]

export function DevProjects() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation()
  const t = translations.dev[lang].projects
  const num = t.sectionNumber.replace(".", "")
  const slug = t.sectionTitle.toLowerCase().replace(/\s+/g, "_")

  return (
    <section id="dev-projects" className="py-24">
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

        <div className="space-y-5">
          {t.items.map((project, i) => {
            const hasUrl = "url" in project && Boolean(project.url)
            return (
              <div
                key={project.title}
                className={`bg-card border border-border rounded-md overflow-hidden hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms" }}
              >
                {/* window chrome */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40">
                  <div className="flex items-center gap-3">
                    <div className="window-dots" aria-hidden>
                      <span /><span /><span />
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {fileNames[i]}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-primary/80">{project.role}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      <span className="syntax-comment font-mono text-xs mr-2">
                        // project_
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <br />
                      {project.title}
                    </h3>
                    {hasUrl && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono bg-primary/15 text-primary px-2 py-1 rounded hover:bg-primary/25 transition-colors border border-primary/30"
                      >
                        {project.url!.replace(/^https?:\/\/(www\.)?/, "")}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono border border-primary/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono text-xs">
                    <span className="syntax-keyword">import</span>{" "}
                    <span className="text-muted-foreground">{"{ "}</span>
                    {project.tech.map((tech, idx) => (
                      <span key={tech}>
                        <span className="syntax-fn">{tech}</span>
                        {idx < project.tech.length - 1 && (
                          <span className="text-muted-foreground">, </span>
                        )}
                      </span>
                    ))}
                    <span className="text-muted-foreground">{" }"}</span>{" "}
                    <span className="syntax-keyword">from</span>{" "}
                    <span className="syntax-string">"stack"</span>
                    <span className="text-muted-foreground">;</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
