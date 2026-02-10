"use client"

import { ArrowDown, TrendingUp, Target, Zap, Download } from "lucide-react"
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
  const t = translations.hero[lang]

  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl">
        <p className="font-mono text-primary text-sm tracking-wider mb-5">{t.tag}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
          {t.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mt-3 leading-tight text-balance">
          {t.headline}
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl text-lg">
          {t.description1start}
          <span className="text-foreground font-medium">{t.description1highlight}</span>
          {t.description1end}
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
          {t.description2start}
          <a
            href="https://slabware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4 font-medium transition-colors"
          >
            {t.description2link}
          </a>
          {t.description2end}
        </p>

        {/* Metrics Bar */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
          {t.metrics.map((metric, i) => (
            <div key={metric.label} className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                {(() => {
                  const Icon = metricIcons[i]
                  return <Icon className="h-4 w-4 text-primary" />
                })()}
                <span className="text-2xl sm:text-3xl font-bold text-foreground font-mono">
                  <AnimatedCounter end={metricValues[i]} suffix={metric.suffix} />
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#resultados"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {t.ctaPrimary}
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary font-mono text-sm transition-colors border border-border px-6 py-3 rounded hover:border-primary/40"
          >
            {t.ctaSecondary}
          </a>
          <a
            href="/antonio-kiepert-cv.pdf"
            download
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-sm transition-colors"
          >
            <Download className="h-4 w-4" />
            {t.downloadCv}
          </a>
        </div>
      </div>
    </section>
  )
}
