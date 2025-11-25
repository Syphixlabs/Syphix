"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function KineticHeadline() {
  const [isVisible, setIsVisible] = useState(false)

  const line1Words = ["Powered", "by", "Project", "SPACE"]
  const line2Words = ["Introducing", "STORM's", "Next", "Generation"]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="text-center space-y-6">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
        {line1Words.map((word, index) => (
          <span
            key={word}
            className={cn(
              "text-sm md:text-base font-mono tracking-[0.25em] uppercase",
              word === "SPACE" ? "text-white font-semibold" : "text-white/50",
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            style={{
              transitionDelay: `${index * 150 + 200}ms`,
              filter: isVisible ? "blur(0px)" : "blur(8px)",
              textShadow: word === "SPACE" ? "0 0 30px rgba(255, 255, 255, 0.5)" : undefined,
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <div className="relative h-px w-48 mx-auto overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent",
            "transition-all duration-1500",
            isVisible ? "opacity-60 scale-x-100" : "opacity-0 scale-x-0",
          )}
          style={{ transitionDelay: "800ms" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            animationName: isVisible ? "lineShimmer" : "none",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: "1.5s",
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {line2Words.map((word, index) => (
          <span
            key={word}
            className={cn(
              "text-xl md:text-3xl font-bold tracking-wide",
              word === "STORM's" ? "text-white" : "text-white/90",
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
            style={{
              transitionDelay: `${index * 180 + 1000}ms`,
              filter: isVisible ? "blur(0px)" : "blur(12px)",
              textShadow:
                word === "STORM's"
                  ? "0 0 40px rgba(255, 255, 255, 0.6), 0 0 80px rgba(255, 255, 255, 0.3)"
                  : "0 0 20px rgba(255, 255, 255, 0.2)",
            }}
          >
            {word}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes lineShimmer {
          0%, 100% {
            opacity: 0.3;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.8;
            transform: scaleX(1.1);
          }
        }
      `}</style>
    </div>
  )
}
