"use client"

import {
  TrendingUp,
  TrendingDown,
  Users,
  BarChart3,
  Database,
  Mail,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 1400,
}: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const { ref, inView } = useInView()
  const [count, setCount] = useState(end)
  const animated = useRef(false)

  useEffect(() => {
    if (!inView || animated.current) return
    animated.current = true

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end)
      return
    }

    let rafId = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic — feels fast then settles, no janky tail
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(end * eased))
      if (t < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  )
}

const icons = [TrendingUp, TrendingDown, Users, BarChart3, Database, Mail]
const colors = [
  { text: "text-emerald-400", bg: "bg-emerald-400/10" },
  { text: "text-cyan-400", bg: "bg-cyan-400/10" },
  { text: "text-primary", bg: "bg-primary/10" },
  { text: "text-amber-400", bg: "bg-amber-400/10" },
  { text: "text-rose-400", bg: "bg-rose-400/10" },
  { text: "text-sky-400", bg: "bg-sky-400/10" },
]

export function Results() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation()
  const t = translations.results[lang]

  return (
    <section id="resultados" className="py-24">
      <div ref={ref} className="max-w-4xl">
        <h2
          className={`flex items-center gap-4 text-2xl font-bold text-foreground mb-4 transition-[opacity,transform] duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span className="text-primary font-mono text-lg font-normal">{t.sectionNumber}</span>
          {t.sectionTitle}
          <span className="hidden sm:block h-px flex-1 bg-border max-w-xs" />
        </h2>
        <p
          className={`text-muted-foreground mb-12 max-w-2xl transition-[opacity,transform] duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {t.subtitle}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((result, i) => {
            const Icon = icons[i]
            const color = colors[i]
            return (
              <div
                key={result.title}
                className={`group bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-[opacity,transform,border-color] duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms" }}
              >
                <div
                  className={`inline-flex items-center justify-center h-10 w-10 rounded-lg ${color.bg} mb-4`}
                >
                  <Icon className={`h-5 w-5 ${color.text}`} />
                </div>
                <div className={`text-2xl font-bold font-mono ${color.text} mb-1`}>
                  {"end" in result.metric ? (
                    <Counter end={result.metric.end} suffix={result.metric.suffix} />
                  ) : (
                    result.metric.text
                  )}
                </div>
                <h3 className="text-foreground font-semibold text-sm mb-2">{result.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {result.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
