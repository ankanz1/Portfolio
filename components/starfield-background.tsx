"use client"

import { useEffect, useRef } from "react"

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const stars: Array<{
      x: number
      y: number
      z: number
      prevX: number
      prevY: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initStars = () => {
      stars.length = 0
      for (let i = 0; i < 800; i++) {
        stars.push({
          x: Math.random() * 2000 - 1000,
          y: Math.random() * 2000 - 1000,
          z: Math.random() * 1000,
          prevX: 0,
          prevY: 0,
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      stars.forEach((star) => {
        star.prevX = (star.x / star.z) * 100 + centerX
        star.prevY = (star.y / star.z) * 100 + centerY

        star.z -= 2

        if (star.z <= 0) {
          star.x = Math.random() * 2000 - 1000
          star.y = Math.random() * 2000 - 1000
          star.z = 1000
        }

        const x = (star.x / star.z) * 100 + centerX
        const y = (star.y / star.z) * 100 + centerY

        const opacity = 1 - star.z / 1000
        const size = (1 - star.z / 1000) * 2

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.lineWidth = size
        ctx.beginPath()
        ctx.moveTo(star.prevX, star.prevY)
        ctx.lineTo(x, y)
        ctx.stroke()
      })

      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initStars()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%)" }}
    />
  )
}
