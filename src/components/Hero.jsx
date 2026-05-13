import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink, FiChevronDown } from 'react-icons/fi'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    let animId
    let nodes = []

    const initNodes = (W, H) => {
      nodes = Array.from({ length: 65 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.6,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    const resize = () => {
      const W = window.innerWidth
      const H = window.innerHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.scale(dpr, dpr)
      initNodes(W, H)
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const W = window.innerWidth
      const H = window.innerHeight
      ctx.clearRect(0, 0, W, H)

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.02
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1

        const alpha = 0.5 + 0.3 * Math.sin(n.pulse)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59,130,246,${alpha})`
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToFramework = () => {
    document.getElementById('framework')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.7) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-16"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-electric-light border border-electric/20 bg-electric/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-brand animate-pulse-slow" />
            MSCA Fellowship &middot; Masaryk University, Czech Republic
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] mb-4">
          <span className="gradient-text">Blockchain-powered</span>
          <br />
          <span className="text-slate-100">Digital Twins</span>
          <br />
          <span className="gradient-text">Platform</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-slate-400 font-light mb-4 tracking-wide">
          to Foster{' '}
          <span className="text-slate-200 font-medium">Trust</span>,{' '}
          <span className="text-slate-200 font-medium">Transparency</span>, and{' '}
          <span className="text-slate-200 font-medium">Collaboration</span>
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          A decentralized Web3-powered framework integrating blockchain, federated learning, and IP-NFTs
          to bring trust and verifiability to the next generation of digital twin ecosystems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={scrollToFramework} className="btn-primary text-base">
            View Framework <FiArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://www.sciencedirect.com/science/article/pii/S2772918424000304"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base"
          >
            Read Paper <FiExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {[
            { value: '4', label: 'Research Objectives' },
            { value: '5', label: 'Challenges Addressed' },
            { value: '2026', label: 'Published' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <FiChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  )
}
