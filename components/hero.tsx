"use client"

import { ArrowDown, TrendingUp, Target, Zap, Download, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const metricValues = [150, 100, 9]
const metricIcons = [TrendingUp, Target, Zap]

export function Hero() {
  const { lang } = useLang()
  const t = translations.hero[lang as keyof typeof translations.hero]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated gradient background - orange/purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/10 pointer-events-none" />

      {/* Floating gradient orbs - orange and purple */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-gradient-to-br from-accent/15 to-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-5xl relative z-10">
        {/* Tag with sparkle animation */}
        <div className="flex items-center gap-2 mb-5 animate-fade-in-up">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <p className="font-mono text-primary text-sm tracking-wider font-medium">{t.tag}</p>
        </div>

        {/* Name with gradient text */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-gradient">{t.name}</span>
        </h1>

        {/* Tagline */}
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4 leading-tight animate-fade-in-up max-w-3xl"
          style={{ animationDelay: '0.2s' }}
        >
          {t.headline}
        </h2>

        {/* Description */}
        <p
          className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {t.description1start}
          <span className="text-foreground font-medium">{t.description1highlight}</span>
          {t.description1end}
        </p>
        <p className="text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {t.description2start}
          <a
            href="https://slabware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4 font-medium transition-all hover:text-primary/80 inline-flex items-center gap-1"
          >
            {t.description2link}
          </a>
          {t.description2end}
        </p>
      </div>

      {/* Metrics with glow effect */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        {t.metrics.map((metric, i) => (
          <div key={metric.label} className="group text-center">
            <div className="relative">
              {/* Glow background on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-lg blur-xl transition-all duration-300" />
              <div className="relative flex flex-col items-center gap-1.5 p-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/40 transition-all">
                {(() => {
                  const Icon = metricIcons[i]
                  return <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                })()}
                <span className="text-2xl sm:text-3xl font-bold text-foreground font-mono">
                  <AnimatedCounter end={metricValues[i]} suffix={metric.suffix} />
                </span>
                <p className="text-xs text-muted-foreground leading-tight">{metric.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTAs with enhanced styling */}
      <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <a
          href="#resultados"
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-mono text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
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
          href={lang === 'pt' ? "/antonio-kiepert-cv.pdf" : "/antonio-kiepert-cv-en.pdf"}
          download
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-sm transition-all hover:scale-105"
        >
          <Download className="h-4 w-4" />
          {t.downloadCv}
        </a>
      </div>
    </section>
  )
}
