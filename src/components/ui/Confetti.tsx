import { useEffect, useRef } from 'react'

interface ConfettiParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  rotation: number
  vRot: number
}

const COLORS = ['#6366f1', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#3b82f6']

export function triggerConfetti() {
  window.dispatchEvent(new CustomEvent('lumen:confetti'))
}

export function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame = 0
    let particles: ConfettiParticle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawn = () => {
      const count = 75
      const originX = window.innerWidth / 2
      const originY = window.innerHeight * 0.4

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5)
        const speed = 6 + Math.random() * 8
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 4,
          size: 5 + Math.random() * 6,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 1,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.2,
        })
      }

      if (!animationFrame) {
        loop()
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles = particles.filter((p) => p.alpha > 0.02 && p.y < canvas.height + 20)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.25 // gravity
        p.vx *= 0.98 // drag
        p.rotation += p.vRot
        p.alpha -= 0.012

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7)
        ctx.restore()
      }

      if (particles.length > 0) {
        animationFrame = requestAnimationFrame(loop)
      } else {
        animationFrame = 0
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    const onConfettiEvent = () => spawn()
    window.addEventListener('lumen:confetti', onConfettiEvent)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('lumen:confetti', onConfettiEvent)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[100]"
      aria-hidden="true"
    />
  )
}
