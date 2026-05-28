import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Antonio Kiepert | Marketing Manager & Growth Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 20% 20%, #ff7a18 0%, transparent 50%), radial-gradient(circle at 80% 70%, #6d28d9 0%, transparent 55%), #0a0a0c",
          color: "#fff",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#ff7a18",
              fontFamily: "ui-monospace, monospace",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            {"<AK />"}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              fontSize: 18,
              color: "rgba(255,255,255,0.75)",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 5, background: "#34d399", display: "flex" }} />
            LIVE · 1.82x ROAS
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 28,
              fontFamily: "ui-monospace, monospace",
              color: "#ff7a18",
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Marketing Manager · Growth · Paid Media
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              backgroundImage: "linear-gradient(90deg, #fff 0%, #ff7a18 60%, #a78bfa 100%)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: -2,
              display: "flex",
            }}
          >
            Antonio Kiepert
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 1000,
              lineHeight: 1.25,
              display: "flex",
            }}
          >
            I build growth engines that generate pipeline and real revenue for SaaS & B2B.
          </div>
        </div>

        {/* KPI row */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { v: "225,673", l: "Impressions / 31d" },
            { v: "3.82%", l: "Meta Ads CTR" },
            { v: "R$ 0.78", l: "Avg CPC" },
            { v: "R$ 83", l: "CPA" },
          ].map((k) => (
            <div
              key={k.l}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                padding: "16px 22px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                flex: 1,
              }}
            >
              <div style={{ fontSize: 30, fontWeight: 700, fontFamily: "ui-monospace, monospace", color: "#fff", display: "flex" }}>
                {k.v}
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontFamily: "ui-monospace, monospace", letterSpacing: 1, textTransform: "uppercase", display: "flex" }}>
                {k.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
