"use client"

import { useQuery } from "@tanstack/react-query"
import { useLang } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function useContent() {
    const { lang } = useLang()

    return useQuery({
        queryKey: ["content", lang],
        queryFn: async () => {
            const response = await fetch(`/api/content?lang=${lang}`)
            if (!response.ok) {
                throw new Error("Failed to fetch content")
            }
            return response.json() as Promise<typeof translations>
        }
    })
}
