"use client"

import { Fragment } from "react"
import { Activity, ArrowRight } from "lucide-react"
import { useLang } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Copy = {
  sectionNumber: string
  sectionTitle: string
  subtitle: string
  liveTag: string
  period: string
  source: string
  funnelTitle: string
  trafficTitle: string
  stages: { label: string; value: string; rate?: string }[]
  kpis: { label: string; value: string; hint: string; accent: "primary" | "emerald" | "cyan" | "amber" | "rose" | "sky" }[]
  sources: { label: string; pct: number; value: string }[]
}

const copy: Record<"pt" | "en", Copy> = {
  pt: {
    sectionNumber: "04.",
    sectionTitle: "Snapshot da Campanha (ao vivo)",
    subtitle:
      "Dados reais extraidos do painel unificado GA4 + Meta Ads da SlabWare. 31 dias corridos de campanha ativa.",
    liveTag: "AO VIVO",
    period: "28/04/2026 → 28/05/2026 (31 dias)",
    source: "Fonte: GA4 + Meta Ads (atribuicao cross-channel)",
    funnelTitle: "Funil Cross-Platform",
    trafficTitle: "Trafego por Fonte",
    stages: [
      { label: "Impressoes", value: "225.673", rate: "3.82% CTR" },
      { label: "Cliques", value: "8.612", rate: "117.8% click→session" },
      { label: "Sessoes (GA4)", value: "10.144", rate: "0.57% conv." },
      { label: "Conversoes", value: "58" },
    ],
    kpis: [
      { label: "Investimento", value: "R$ 4.792", hint: "Meta Ads (31d)", accent: "primary" },
      { label: "ROAS unificado", value: "1.82x", hint: "GA4 cross-channel", accent: "emerald" },
      { label: "CTR", value: "3.82%", hint: "Meta Ads", accent: "cyan" },
      { label: "CPC medio", value: "R$ 0,78", hint: "Meta Ads", accent: "amber" },
      { label: "CPA", value: "R$ 83", hint: "58 conversoes", accent: "rose" },
      { label: "Impressoes", value: "225,6K", hint: "31 dias", accent: "sky" },
    ],
    sources: [
      { label: "Facebook BR feed", pct: 50, value: "4.527" },
      { label: "Direct", pct: 23.4, value: "2.115" },
      { label: "Facebook BR / cpc", pct: 10, value: "906" },
      { label: "google / organic", pct: 9.7, value: "878" },
      { label: "Facebook oP / cpc", pct: 3.8, value: "341" },
      { label: "outbound / email", pct: 3.1, value: "281" },
    ],
  },
  en: {
    sectionNumber: "04.",
    sectionTitle: "Live Campaign Snapshot",
    subtitle:
      "Real numbers pulled from SlabWare's unified GA4 + Meta Ads dashboard. 31 consecutive days of an active campaign.",
    liveTag: "LIVE",
    period: "Apr 28, 2026 → May 28, 2026 (31 days)",
    source: "Source: GA4 + Meta Ads (cross-channel attribution)",
    funnelTitle: "Cross-Platform Funnel",
    trafficTitle: "Traffic by Source",
    stages: [
      { label: "Impressions", value: "225,673", rate: "3.82% CTR" },
      { label: "Clicks", value: "8,612", rate: "117.8% click→session" },
      { label: "Sessions (GA4)", value: "10,144", rate: "0.57% conv." },
      { label: "Conversions", value: "58" },
    ],
    kpis: [
      { label: "Spend", value: "R$ 4,792", hint: "Meta Ads (31d)", accent: "primary" },
      { label: "Unified ROAS", value: "1.82x", hint: "GA4 cross-channel", accent: "emerald" },
      { label: "CTR", value: "3.82%", hint: "Meta Ads", accent: "cyan" },
      { label: "Avg CPC", value: "R$ 0.78", hint: "Meta Ads", accent: "amber" },
      { label: "CPA", value: "R$ 83", hint: "58 conversions", accent: "rose" },
      { label: "Impressions", value: "225.6K", hint: "31 days", accent: "sky" },
    ],
    sources: [
      { label: "Facebook BR feed", pct: 50, value: "4,527" },
      { label: "Direct", pct: 23.4, value: "2,115" },
      { label: "Facebook BR / cpc", pct: 10, value: "906" },
      { label: "google / organic", pct: 9.7, value: "878" },
      { label: "Facebook oP / cpc", pct: 3.8, value: "341" },
      { label: "outbound / email", pct: 3.1, value: "281" },
    ],
  },
}

const accentClasses: Record<Copy["kpis"][number]["accent"], { text: string; bg: string; border: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/30" },
  amber: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" },
  rose: { text: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/30" },
  sky: { text: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/30" },
}

export function Dashboard() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollAnimation()
  const t = copy[lang]

  return (
    <section id="dashboard" className="py-24">
      <div ref={ref} className="max-w-5xl">
        <h2
          className={`flex items-center gap-4 text-2xl font-bold text-foreground mb-4 transition-[opacity,transform] duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-mono text-lg font-normal">{t.sectionNumber}</span>
          {t.sectionTitle}
          <span className="hidden sm:block h-px flex-1 bg-border max-w-xs" />
        </h2>
        <p
          className={`text-muted-foreground mb-8 max-w-2xl transition-[opacity,transform] duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {t.subtitle}
        </p>

        <div
          className={`bg-card border border-border rounded-xl p-6 lg:p-8 shadow-lg shadow-black/20 transition-[opacity,transform] duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Dashboard header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border mb-6">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs tracking-widest text-emerald-400 font-bold">
                {t.liveTag}
              </span>
              <span className="text-xs font-mono text-muted-foreground">{t.period}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Activity className="h-3.5 w-3.5 text-primary" />
              GA4 + Meta Ads
            </div>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {t.kpis.map((kpi) => {
              const a = accentClasses[kpi.accent]
              return (
                <div
                  key={kpi.label}
                  className={`rounded-lg border ${a.border} ${a.bg} p-4 hover:scale-[1.02] transition-transform`}
                >
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    {kpi.label}
                  </p>
                  <p className={`text-2xl sm:text-3xl font-bold font-mono ${a.text}`}>
                    {kpi.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">{kpi.hint}</p>
                </div>
              )
            })}
          </div>

          {/* Funnel */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-4 font-mono uppercase tracking-wider">
              {t.funnelTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-7 items-center gap-2">
              {t.stages.map((stage, i) => (
                <Fragment key={stage.label}>
                  <div className="sm:col-span-1 bg-secondary/50 border border-border rounded-lg p-3 text-center">
                    <p className="text-[10px] font-mono text-muted-foreground uppercase mb-1">
                      {stage.label}
                    </p>
                    <p className="text-lg font-bold font-mono text-foreground">{stage.value}</p>
                    {stage.rate && (
                      <p className="text-[10px] font-mono text-primary mt-1">{stage.rate}</p>
                    )}
                  </div>
                  {i < t.stages.length - 1 && (
                    <div className="hidden sm:flex items-center justify-center text-primary">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* Traffic by source */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-mono uppercase tracking-wider">
              {t.trafficTitle}
            </h3>
            <div className="space-y-2">
              {t.sources.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground w-44 shrink-0 truncate">
                    {s.label}
                  </span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? `${s.pct}%` : "0%" }}
                    />
                  </div>
                  <span className="text-xs font-mono text-foreground w-16 text-right shrink-0">
                    {s.pct}%
                  </span>
                  <span className="text-xs font-mono text-muted-foreground w-16 text-right shrink-0 hidden sm:inline">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[10px] font-mono text-muted-foreground mt-6 pt-4 border-t border-border">
            {t.source}
          </p>
        </div>
      </div>
    </section>
  )
}
