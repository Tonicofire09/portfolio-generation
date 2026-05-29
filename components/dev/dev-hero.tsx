"use client"

import { ArrowDown, Download, GitBranch, Circle } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function DevHero() {
  const { lang } = useLang()
  const t = translations.dev[lang].hero

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-28 pb-12">
      <div className="relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        {/* LEFT: identity */}
        <div>
          <div className="flex items-center gap-2 mb-5 font-mono text-xs">
            <span className="syntax-comment">// {t.tag}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]">
            <span className="text-foreground">{t.name}</span>
            <span className="caret" aria-hidden />
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground/90 mb-6 leading-tight max-w-2xl">
            {t.headline}
          </h2>

          <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-4">
            {t.description1start}
            <span className="text-foreground font-medium">{t.description1highlight}</span>
            {t.description1end}
          </p>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-8">
            {t.description2start}
            <span className="text-foreground font-medium">{t.description2highlight}</span>
            {t.description2end}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#dev-projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <span className="syntax-fn">$</span> {t.ctaPrimary}
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#dev-contact"
              className="text-foreground hover:text-primary font-mono text-sm transition-colors border border-border px-5 py-2.5 rounded-md hover:border-primary/40 hover:bg-primary/5"
            >
              {t.ctaSecondary}
            </a>
            <a
              href="/antonio-kiepert-cv-dev.pdf"
              download
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-xs transition-colors"
            >
              <Download className="h-4 w-4" />
              {t.downloadCv}
            </a>
          </div>
        </div>

        {/* RIGHT: code-editor card */}
        <div className="bg-card border border-border rounded-md shadow-2xl shadow-primary/5 overflow-hidden">
          {/* window chrome */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40">
            <div className="window-dots" aria-hidden>
              <span /><span /><span />
            </div>
            <span className="font-mono text-xs text-muted-foreground">antonio.tsx</span>
            <span className="font-mono text-[10px] text-muted-foreground tabular-nums">UTF-8 · TS</span>
          </div>

          {/* tabs */}
          <div className="flex items-center border-b border-border bg-background/40 text-xs font-mono">
            <span className="px-4 py-2 border-r border-border text-foreground bg-card">
              antonio.tsx
            </span>
            <span className="px-4 py-2 border-r border-border text-muted-foreground/60">
              stack.json
            </span>
            <span className="px-4 py-2 border-r border-border text-muted-foreground/60">
              README.md
            </span>
          </div>

          {/* code body */}
          <div className="grid grid-cols-[auto_1fr] font-mono text-[13px] leading-7 bg-background/30">
            <div className="gutter py-4">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="py-4 pl-4 pr-4 overflow-x-auto">
              <div><span className="syntax-comment">// who am i</span></div>
              <div>
                <span className="syntax-keyword">const</span>{" "}
                <span className="syntax-fn">antonio</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-muted-foreground">{"{"}</span>
              </div>
              <div className="pl-4">
                <span className="syntax-prop">role</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="syntax-string">"Full Stack Developer"</span>
                <span className="text-muted-foreground">,</span>
              </div>
              <div className="pl-4">
                <span className="syntax-prop">stack</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">[</span>
                <span className="syntax-string">"React"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-string">"Next.js"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-string">"TypeScript"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-string">"Supabase"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-string">"n8n"</span>
                <span className="text-muted-foreground">],</span>
              </div>
              <div className="pl-4">
                <span className="syntax-prop">building</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="syntax-string">"Bouzr"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-comment">// B2B SaaS · live in early access</span>
              </div>
              <div className="pl-4">
                <span className="syntax-prop">db</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="syntax-string">"PostgreSQL + RLS"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-comment">// multi-tenant</span>
              </div>
              <div className="pl-4">
                <span className="syntax-prop">shipped</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="syntax-number">5</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-comment">// 2 personal + 3 SlabWare internal</span>
              </div>
              <div className="pl-4">
                <span className="syntax-prop">languages</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">[</span>
                <span className="syntax-string">"PT"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-string">"EN"</span>
                <span className="text-muted-foreground">],</span>{" "}
                <span className="syntax-comment">// bilingual, partly schooled in US</span>
              </div>
              <div className="pl-4">
                <span className="syntax-prop">openTo</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-muted-foreground">[</span>
                <span className="syntax-string">"remote"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-string">"hybrid"</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="syntax-string">"relocation"</span>
                <span className="text-muted-foreground">],</span>
              </div>
              <div>
                <span className="text-muted-foreground">{"}"}</span>
                <span className="text-muted-foreground">;</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="syntax-keyword">export default</span>{" "}
                <span className="syntax-fn">antonio</span>
                <span className="text-muted-foreground">;</span>
              </div>
            </div>
          </div>

          {/* status bar */}
          <div className="flex items-center justify-between px-4 py-1.5 border-t border-border bg-primary/10 text-[10px] font-mono text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-primary">
                <GitBranch className="h-3 w-3" /> main
              </span>
              <span>TS · React 19</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-emerald-400">
                <Circle className="h-2 w-2 fill-current" /> live
              </span>
              <span>Ln 1, Col 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* metrics row */}
      <div className="relative z-10 mt-12 grid grid-cols-3 gap-3 max-w-2xl">
        {t.metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-card border border-border rounded-md p-4"
          >
            <div className="flex items-baseline gap-1 font-mono">
              <span className="text-2xl font-bold text-primary">{metric.value}</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1 leading-tight font-mono">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
