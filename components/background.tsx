"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  baseOpacity: number
  cycleTime: number
  cycleDuration: number
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      generateStars()
    }

    const generateStars = () => {
      const stars: Star[] = []
      const starCount = Math.floor((canvas.width * canvas.height) / 35000)

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random(),
          size: Math.random() * 1.5 + 0.5,
          baseOpacity: Math.random() * 0.5 + 0.6,
          cycleTime: Math.random() * 8000,
          cycleDuration: Math.random() * 4000 + 6000,
        })
      }
      starsRef.current = stars
    }

    const easeInOutQuad = (t: number): number => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    const getDepthVisibility = (z: number, cycleTime: number, cycleDuration: number, currentTime: number): number => {
      const adjustedTime = currentTime - cycleTime
      const cycleProgress = ((adjustedTime % cycleDuration) + cycleDuration) % cycleDuration
      const normalizedProgress = cycleProgress / cycleDuration


      let visibility = 1
      if (normalizedProgress < 0.15) {

        visibility = easeInOutQuad(normalizedProgress / 0.15)
      } else if (normalizedProgress > 0.85) {

        visibility = easeInOutQuad(1 - (normalizedProgress - 0.85) / 0.15)
      }


      return visibility * (0.5 + z * 0.5)
    }

    const animate = (time: number) => {
      ctx.fillStyle = "rgb(2, 2, 2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        const twinkel1 = Math.sin(time * 0.0003 + star.x * 0.01) * 0.12
        const twinkel2 = Math.sin(time * 0.0001 + star.y * 0.005 + star.z * 50) * 0.08
        const twinkle = (twinkel1 + twinkel2) * 0.5

        const depthVisibility = getDepthVisibility(star.z, star.cycleTime, star.cycleDuration, time)
        const currentOpacity = star.baseOpacity * depthVisibility + twinkle

        const parallaxIntensity = star.z * 0.5
        const parallaxX = Math.sin(time * 0.000012 * (1 - star.z * 0.7)) * 1.2 * parallaxIntensity
        const parallaxY = Math.cos(time * 0.00001 * (1 - star.z * 0.8)) * 0.8 * parallaxIntensity

        const x = star.x + parallaxX
        const y = star.y + parallaxY

        const sizeMod = 0.6 + star.z * 0.6
        const cycleSize = 0.8 + depthVisibility * 0.4

        ctx.beginPath()
        ctx.arc(x, y, star.size * sizeMod * cycleSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, currentOpacity)})`
        ctx.fill()

        if (star.z > 0.6) {
          ctx.beginPath()
          ctx.arc(x, y, star.size * sizeMod * cycleSize * 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.02, currentOpacity * 0.3)})`
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" style={{ background: "rgb(2, 2, 2)" }} />
}
