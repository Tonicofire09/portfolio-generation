"use client"

import { ArrowDown, TrendingUp, Target, Zap, Download, Sparkles } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const metricValues = [225, 150, 9]
const metricIcons = [TrendingUp, Target, Zap]

export function Hero() {
  const { lang } = useLang()
  const t = translations.hero[lang]

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden pt-28 pb-12">
      {/* Static gradient background — paint-cheap */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/10 pointer-events-none" />

      {/* Floating gradient orbs — reduced count + GPU promotion */}
      <div
        aria-hidden
        className="hero-orb absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl animate-float motion-reduce:animate-none"
      />
      <div
        aria-hidden
        className="hero-orb absolute bottom-40 left-1/4 w-72 h-72 bg-gradient-to-br from-accent/15 to-primary/5 rounded-full blur-3xl animate-float motion-reduce:animate-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-5xl relative z-10">
        <div className="flex items-center gap-2 mb-5 animate-fade-in-up motion-reduce:animate-none">
          <Sparkles className="h-4 w-4 text-primary animate-pulse motion-reduce:animate-none" />
          <p className="font-mono text-primary text-sm tracking-wider font-medium">{t.tag}</p>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up motion-reduce:animate-none"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-gradient">{t.name}</span>
        </h1>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4 leading-tight animate-fade-in-up motion-reduce:animate-none max-w-3xl"
          style={{ animationDelay: "0.2s" }}
        >
          {t.headline}
        </h2>

        <p
          className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10 animate-fade-in-up motion-reduce:animate-none"
          style={{ animationDelay: "0.3s" }}
        >
          {t.description1start}
          <span className="text-foreground font-medium">{t.description1highlight}</span>
          {t.description1end}
        </p>
        <p
          className="text-muted-foreground leading-relaxed animate-fade-in-up motion-reduce:animate-none"
          style={{ animationDelay: "0.4s" }}
        >
          {t.description2start}
          <a
            href="https://slabware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4 font-medium transition-colors hover:text-primary/80 inline-flex items-center gap-1"
          >
            {t.description2link}
          </a>
          {t.description2end}
        </p>
      </div>

      <div
        className="mt-12 grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up motion-reduce:animate-none"
        style={{ animationDelay: "0.5s" }}
      >
        {t.metrics.map((metric, i) => {
          const Icon = metricIcons[i]
          return (
            <div key={metric.label} className="group text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-lg blur-xl transition-colors duration-300" />
                <div className="relative flex flex-col items-center gap-1.5 p-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/40 transition-colors">
                  <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-2xl sm:text-3xl font-bold text-foreground font-mono">
                    <AnimatedCounter end={metricValues[i]} suffix={metric.suffix} />
                  </span>
                  <p className="text-xs text-muted-foreground leading-tight">{metric.label}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div
        className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up motion-reduce:animate-none"
        style={{ animationDelay: "0.6s" }}
      >
        <a
          href="#resultados"
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-mono text-sm font-medium hover:bg-primary/90 transition-colors hover:shadow-lg hover:shadow-primary/25"
        >
          {t.ctaPrimary}
          <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="text-foreground hover:text-primary font-mono text-sm transition-colors border border-border px-6 py-3 rounded-lg hover:border-primary/40 hover:bg-primary/5 backdrop-blur-sm"
        >
          {t.ctaSecondary}
        </a>
        <a
          href={lang === "pt" ? "/antonio-kiepert-cv-v2.pdf" : "/antonio-kiepert-cv-en-v2.pdf"}
          download
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-sm transition-colors"
        >
          <Download className="h-4 w-4" />
          {t.downloadCv}
        </a>
        <a
          href="/antonio-kiepert-cv-dev.pdf"
          download
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-sm transition-colors"
        >
          <Download className="h-4 w-4" />
          {t.downloadCvDev}
        </a>
      </div>
    </section>
  )
}
