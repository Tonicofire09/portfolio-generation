"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedCounter({
    end,
    suffix = "",
    duration = 1600,
}: { end: number; suffix?: string; duration?: number }) {
    // SSR renders 0 to avoid the "final → 0 → animate" flash on first paint.
    const [count, setCount] = useState(0)
    const animated = useRef(false)

    useEffect(() => {
        if (animated.current) return
        animated.current = true

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCount(end)
            return
        }

        let rafId = 0
        const startTime = performance.now()
        const tick = (now: number) => {
            const t = Math.min(1, (now - startTime) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setCount(Math.round(end * eased))
            if (t < 1) rafId = requestAnimationFrame(tick)
        }
        rafId = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(rafId)
    }, [end, duration])

    return (
        <span>
            {count}
            {suffix}
        </span>
    )
}
