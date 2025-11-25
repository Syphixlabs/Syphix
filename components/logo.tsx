"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function LiquidLogo() {
  const [phase, setPhase] = useState<"storm" | "dissolving" | "space-hold" | "forming" | "syphix">("storm")
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cycle = () => {
      setPhase("storm")
      setTimeout(() => setPhase("dissolving"), 3000)
      setTimeout(() => setPhase("space-hold"), 5500)
      setTimeout(() => setPhase("forming"), 7000)
      setTimeout(() => setPhase("syphix"), 9000)
    }

    cycle()
    const interval = setInterval(cycle, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative h-56 md:h-72 flex items-center justify-center w-full">
      <div
        className={cn(
          "absolute inset-0 transition-all duration-[2500ms] ease-out pointer-events-none",
          phase === "dissolving" || phase === "forming"
            ? "opacity-60"
            : phase === "space-hold"
              ? "opacity-30"
              : "opacity-15",
        )}
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
          filter: phase === "dissolving" || phase === "forming" ? "blur(60px)" : "blur(40px)",
        }}
      />

      {/* STORM text - dissolves into particles */}
      <div
        className={cn(
          "absolute transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          phase === "storm" && "opacity-100 scale-100 duration-[1000ms]",
          phase === "dissolving" && "opacity-0 scale-[1.3] duration-[2500ms]",
          (phase === "space-hold" || phase === "forming" || phase === "syphix") &&
          "opacity-0 scale-150 duration-[500ms]",
        )}
        style={{
          filter: phase === "storm" ? "blur(0px)" : phase === "dissolving" ? "blur(25px)" : "blur(40px)",
        }}
      >
        <div className="flex">
          {["S", "T", "O", "R", "M"].map((letter, index) => (
            <span
              key={`storm-${index}`}
              className={cn(
                "text-7xl md:text-9xl font-black tracking-tighter text-white transition-all ease-out",
                phase === "dissolving" && "duration-[2500ms]",
              )}
              style={{
                textShadow: "0 0 60px rgba(255, 255, 255, 0.4), 0 0 120px rgba(255, 255, 255, 0.2)",
                transform:
                  phase === "dissolving"
                    ? `translateY(${(index % 2 === 0 ? -1 : 1) * 60}px) translateX(${(index - 2) * 40}px) rotate(${(index % 2 === 0 ? 1 : -1) * 45}deg) scale(0.5)`
                    : "translateY(0) translateX(0) rotate(0deg) scale(1)",
                opacity: phase === "dissolving" ? 0 : 1,
                transitionDelay: phase === "dissolving" ? `${index * 100}ms` : "0ms",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-[1500ms]",
          phase === "dissolving" || phase === "space-hold" || phase === "forming" ? "opacity-100" : "opacity-0",
        )}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
              opacity: 0,
              animationName:
                phase === "dissolving" || phase === "space-hold" || phase === "forming" ? "spaceParticle" : "none",
              animationDuration: `${2.5 + Math.random() * 2}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${i * 80}ms`,
            }}
          />
        ))}
      </div>

      <div
        className={cn(
          "absolute w-4 h-4 rounded-full transition-all duration-[1500ms] ease-out",
          phase === "space-hold" ? "opacity-80 scale-100" : "opacity-0 scale-0",
        )}
        style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)",
          boxShadow: "0 0 40px rgba(255,255,255,0.8), 0 0 80px rgba(255,255,255,0.4)",
        }}
      />

      {/* SYPHIX text - forms from particles */}
      <div
        className={cn(
          "absolute transition-all ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          (phase === "storm" || phase === "dissolving") && "opacity-0 scale-75 duration-[500ms]",
          phase === "space-hold" && "opacity-0 scale-80 duration-[1000ms]",
          phase === "forming" && "opacity-70 scale-95 duration-[2000ms]",
          phase === "syphix" && "opacity-100 scale-100 duration-[1500ms]",
        )}
        style={{
          filter: phase === "syphix" ? "blur(0px)" : phase === "forming" ? "blur(12px)" : "blur(25px)",
        }}
      >
        <div className="flex">
          {["S", "Y", "P", "H", "I", "X"].map((letter, index) => (
            <span
              key={`syphix-${index}`}
              className="text-6xl md:text-8xl font-black tracking-tight text-white transition-all ease-out"
              style={{
                textShadow:
                  phase === "syphix"
                    ? "0 0 60px rgba(255, 255, 255, 0.5), 0 0 120px rgba(255, 255, 255, 0.25)"
                    : "0 0 80px rgba(255, 255, 255, 0.8)",
                transform:
                  phase === "forming"
                    ? `translateY(${(index % 2 === 0 ? 1 : -1) * 25}px) rotate(${(index % 2 === 0 ? -1 : 1) * 15}deg) scale(0.9)`
                    : phase === "syphix"
                      ? "translateY(0) rotate(0deg) scale(1)"
                      : `translateY(${(index % 2 === 0 ? 1 : -1) * 40}px) rotate(${(index % 2 === 0 ? -1 : 1) * 30}deg) scale(0.7)`,
                transitionDuration: phase === "syphix" ? "1500ms" : "2000ms",
                transitionDelay: phase === "forming" || phase === "syphix" ? `${index * 120}ms` : "0ms",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spaceParticle {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.3);
          }
          15% {
            opacity: 0.9;
            transform: translate(10px, -10px) scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: translate(30px, -30px) scale(1.2);
          }
          75% {
            opacity: 0.4;
            transform: translate(50px, -50px) scale(0.9);
          }
          100% {
            opacity: 0;
            transform: translate(70px, -70px) scale(0.2);
          }
        }
      `}</style>
    </div>
  )
}
