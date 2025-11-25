"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.3,
        duration: Math.random() * 60 + 50,
        delay: Math.random() * 30,
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 z-1 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 60%, transparent 80%)",
            animationName: "gentleFloat",
            animationDuration: `${particle.duration}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.05;
          }
          50% {
            transform: translate(10px, -20px);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  )
}
