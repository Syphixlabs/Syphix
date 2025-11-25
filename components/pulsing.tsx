"use client"

import { cn } from "@/lib/utils"
import { type ReactNode, useState } from "react"

interface PulsingCTAProps {
  children: ReactNode
  primary?: boolean
  className?: string
  href?: string
}

export function PulsingCTA({ children, primary = false, className, href }: PulsingCTAProps) {
  const [isHovered, setIsHovered] = useState(false)

  const Component = href ? "a" : "button"
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Component
      {...linkProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative group px-10 py-5 rounded-full font-semibold tracking-wider text-sm",
        "transition-all duration-500 ease-out",
        "overflow-hidden inline-block",
        primary
          ? ["bg-white text-black", "hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"]
          : ["bg-transparent text-white border border-white/30", "hover:border-white/80 hover:bg-white/5"],
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-0",
          primary
            ? "bg-gradient-to-r from-transparent via-black/10 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/10 to-transparent",
          "transition-transform duration-1000 ease-out",
          isHovered ? "translate-x-full" : "-translate-x-full",
        )}
      />

      {primary && (
        <>
          <span
            className="absolute inset-0 rounded-full -z-10"
            style={{
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.15)",
              animation: "ctaPulse 3s ease-in-out infinite",
            }}
          />
          <span
            className="absolute inset-[-2px] rounded-full -z-20 opacity-50"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.4), transparent, rgba(255,255,255,0.2))",
              animation: "ctaRotate 8s linear infinite",
            }}
          />
        </>
      )}


      <span className="relative z-10 flex items-center gap-3">
        {children}
        <svg
          className={cn("w-4 h-4 transition-all duration-500", isHovered && "translate-x-1.5 scale-110")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>

      <style jsx>{`
        @keyframes ctaPulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.25), 0 0 60px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 50px rgba(255, 255, 255, 0.4), 0 0 100px rgba(255, 255, 255, 0.2);
          }
        }
        @keyframes ctaRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Component>
  )
}
