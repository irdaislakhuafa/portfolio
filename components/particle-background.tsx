"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  connections: number[]
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 100
    const connectionDistance = 150

    // Colors based on theme
    const getLightThemeColors = () => ["#4f46e5", "#0ea5e9", "#06b6d4"]
    const getDarkThemeColors = () => ["#818cf8", "#38bdf8", "#22d3ee"]

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.x
      mouseRef.current.y = e.y
    }

    // Initialize particles
    const initParticles = () => {
      const colors = theme === "dark" ? getDarkThemeColors() : getLightThemeColors()

      particles = []
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 5 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = Math.random() * 2 - 1
        const speedY = Math.random() * 2 - 1
        const color = colors[Math.floor(Math.random() * colors.length)]

        particles.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
          alpha: Math.random() * 0.5 + 0.1,
          connections: [],
        })
      }
      particlesRef.current = particles
    }

    // Update particles
    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x > canvas.width || p.x < 0) {
          p.speedX = -p.speedX
        }
        if (p.y > canvas.height || p.y < 0) {
          p.speedY = -p.speedY
        }

        // Mouse interaction - repel particles
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRef.current.radius) {
          const angle = Math.atan2(dy, dx)
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius
          p.speedX += Math.cos(angle) * force * 0.5
          p.speedY += Math.sin(angle) * force * 0.5

          // Limit speed
          const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
          if (speed > 3) {
            p.speedX = (p.speedX / speed) * 3
            p.speedY = (p.speedY / speed) * 3
          }
        }

        // Find connections
        p.connections = []
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            p.connections.push(j)
          }
        }
      }
    }

    // Draw particles and connections
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const connectionColor = theme === "dark" ? "rgba(129, 140, 248, " : "rgba(79, 70, 229, "

      // Draw connections first
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        for (const j of p.connections) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const opacity = 1 - distance / connectionDistance

          ctx.beginPath()
          ctx.strokeStyle = `${connectionColor}${opacity * 0.5})`
          ctx.lineWidth = 1
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Animation loop
    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none" />
}
