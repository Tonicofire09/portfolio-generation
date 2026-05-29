import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)",
          color: "#0a0a0c",
          fontSize: 26,
          fontWeight: 800,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          letterSpacing: -1,
          borderRadius: 12,
        }}
      >
        {"</>"}
      </div>
    ),
    { ...size },
  )
}
