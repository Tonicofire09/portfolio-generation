import { NextResponse } from "next/server"
import { translations } from "@/lib/translations"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const lang = searchParams.get("lang")

    if (lang !== "pt" && lang !== "en") {
        return NextResponse.json({ error: "Invalid language. Allowed: 'pt' or 'en'" }, { status: 400 })
    }

    // Simulate network delay for realistic loading states
    await new Promise(resolve => setTimeout(resolve, 300))

    return NextResponse.json(translations)
}
