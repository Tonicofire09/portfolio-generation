"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedCounter({
    end,
    suffix = "",
    duration = 1600,
}: { end: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(end)
    const animated = useRef(false)

    useEffect(() => {
        if (animated.current) return
        animated.current = true

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCount(end)
            return
        }

        setCount(0)
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
