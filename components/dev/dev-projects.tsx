"use client"

import { ExternalLink, Folder } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function DevProjects() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation()
  const t = translations.dev[lang].projects

  return (
    <section id="dev-projects" className="py-24">
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

        <div className="space-y-6">
          {t.items.map((project, i) => {
            const hasUrl = "url" in project && Boolean(project.url)
            return (
              <div
                key={project.title}
                className={`group relative bg-card border border-border rounded-lg p-6 lg:p-8 hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms" }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:gap-2 shrink-0 lg:w-16">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Folder className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-primary lg:text-center">
                      {project.role}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
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

                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
