import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
            "linear-gradient(135deg, #ff7a18 0%, #a64dff 100%)",
          color: "#0a0a0c",
          fontSize: 92,
          fontWeight: 800,
          fontFamily: "ui-monospace, monospace",
          letterSpacing: -2,
          borderRadius: 36,
        }}
      >
        AK
      </div>
    ),
    { ...size },
  )
}
