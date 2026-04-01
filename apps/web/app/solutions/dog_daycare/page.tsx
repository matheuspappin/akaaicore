"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Check, ArrowRight, ArrowLeft, Music, CreditCard, Calendar,
  DollarSign, Layout,
  ChevronRight, Menu, X, Users, Star,
  ClipboardList, AlertTriangle, FileText, CheckCircle2,
  TrendingUp, MessageSquare, Trophy, UserPlus, Building2,
  Layers, LogOut, Bell, Heart, Sparkles, Clock,
  GraduationCap, BarChart3, Smartphone, Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- Background animado (toda a landing) ---

function PageBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }

    const particles: { x: number; y: number; vx: number; vy: number; size: number; hue: number }[] = []
    const particleCount = 40

    const initParticles = () => {
      particles.length = 0
      const w = window.innerWidth
      const h = window.innerHeight
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          hue: 200 + Math.random() * 120,
        })
      }
    }

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      ctx.fillStyle = "rgba(2, 6, 23, 0.12)"
      ctx.fillRect(0, 0, w, h)

      time += 0.005

      // Ondas de gradiente animadas
      const gradient = ctx.createLinearGradient(0, 0, w, h)
      const t = Math.sin(time) * 0.5 + 0.5
      gradient.addColorStop(0, `rgba(0, 255, 255, ${0.03 + t * 0.02})`)
      gradient.addColorStop(0.5, `rgba(168, 85, 247, ${0.02 + (1 - t) * 0.02})`)
      gradient.addColorStop(1, `rgba(236, 72, 153, ${0.02 + t * 0.015})`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      // Partículas flutuantes
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      })

      // Conexões entre partículas (threshold reduzido para menos linhas)
      const CONN_DIST = 100
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < CONN_DIST) {
            const alpha = (1 - dist / CONN_DIST) * 0.06
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 100%, 70%, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
      })

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, 0.35)`
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resize()
      initParticles()
    }

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId)
      } else {
        animationId = requestAnimationFrame(draw)
      }
    }

    resize()
    initParticles()
    window.addEventListener("resize", handleResize)
    document.addEventListener("visibilitychange", handleVisibility)
    draw()

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full object-cover pointer-events-none z-0"
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(180deg, #020617 0%, #0f172a 30%, #020617 70%, #0f172a 100%)",
      }}
    />
  )
}

// --- Navbar ---

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Funcionalidades", href: "#features" },
    { name: "App do Monitor", href: "#teacher-app" },
    { name: "Portal do Responsável", href: "#guardian-portal" },
    { name: "Gestão", href: "#management" },
    { name: "Contato", href: "#pricing" },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled
        ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-md py-3"
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-white hover:opacity-80 transition-opacity">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center text-white shadow-lg">
              <Sun className="w-5 h-5" />
            </div>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            AKAAI <span className="text-orange-400 font-black">Pet</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-bold text-white/70 hover:text-orange-400 transition-all relative group uppercase tracking-widest"
            >
              {item.name}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
            <Button size="sm" variant="ghost" className="font-semibold text-white hover:bg-white/10 hover:text-white transition-all" asChild>
              <Link href="/solutions/dog_daycare/login">Entrar</Link>
            </Button>
            <Button size="sm" className="hidden sm:flex rounded-full px-6 bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:scale-105 transition-all duration-300 font-bold text-white border-none" asChild>
              <Link href="/solutions/dog_daycare/register">Criar Conta Grátis</Link>
            </Button>
                <Button type="button" variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-white/10 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 font-semibold text-white">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="flex items-center justify-between group" onClick={() => setMobileMenuOpen(false)}>
                  {item.name} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-orange-500" />
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button type="button" variant="outline" className="w-full rounded-xl border-white/10 hover:bg-white/5 text-white" asChild>
                  <Link href="/solutions/dog_daycare/login">Entrar</Link>
                </Button>
                <Button type="button" className="w-full rounded-xl bg-orange-600 hover:bg-orange-700 text-white border-none" asChild>
                  <Link href="/solutions/dog_daycare/register">Criar Conta</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// --- Hero Canvas (futurista) ---

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    const particles: { x: number; y: number; vx: number; vy: number; size: number; hue: number }[] = []
    const particleCount = 35
    const gridSize = 60

    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          hue: 180 + Math.random() * 80, // cyan a magenta
        })
      }
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      // Clear com fade sutil
      ctx.fillStyle = "rgba(2, 6, 23, 0.12)"
      ctx.fillRect(0, 0, w, h)

      time += 0.008

      // Grid perspectiva futurista
      ctx.strokeStyle = "rgba(0, 255, 255, 0.04)"
      ctx.lineWidth = 1
      const centerX = w / 2
      const centerY = h / 2 + 100

      for (let i = -15; i <= 15; i++) {
        const x = centerX + i * gridSize + Math.sin(time) * 20
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(centerX + (x - centerX) * 1.2, h + 200)
        ctx.stroke()
      }
      for (let i = -8; i <= 12; i++) {
        const y = centerY + i * gridSize + Math.cos(time * 0.7) * 15
        const perspective = 1 - (y - centerY) / (h - centerY) * 0.6
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w * perspective + (1 - perspective) * centerX, y)
        ctx.stroke()
      }

      // Partículas conectadas (network)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 100%, 70%, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
      })

      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, 0.6)`
        ctx.fill()
      })

      // Orbs luminosos
      const orb1 = { x: w * 0.2, y: h * 0.3, r: 120 }
      const orb2 = { x: w * 0.8, y: h * 0.6, r: 100 }
      const orb3 = { x: w * 0.5, y: h * 0.2, r: 80 }

      ;[orb1, orb2, orb3].forEach((orb, i) => {
        const pulse = 1 + Math.sin(time + i) * 0.15
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.r * pulse
        )
        gradient.addColorStop(0, i === 0 ? "rgba(0, 255, 255, 0.08)" : i === 1 ? "rgba(168, 85, 247, 0.08)" : "rgba(236, 72, 153, 0.06)")
        gradient.addColorStop(0.5, "rgba(0, 255, 255, 0.02)")
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.r * pulse, 0, Math.PI * 2)
        ctx.fill()
      })

      // Scanline sutil
      const scanY = (h * 0.5 + Math.sin(time * 2) * h * 0.2) % h
      const scanGradient = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30)
      scanGradient.addColorStop(0, "transparent")
      scanGradient.addColorStop(0.5, "rgba(0, 255, 255, 0.03)")
      scanGradient.addColorStop(1, "transparent")
      ctx.fillStyle = scanGradient
      ctx.fillRect(0, 0, w, h)

      animationId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resize()
      initParticles()
    }

    resize()
    initParticles()
    window.addEventListener("resize", handleResize)
    draw()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0f172a 40%, #020617 100%)" }}
    />
  )
}

// --- Hero ---

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950/90 text-white">
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-fuchsia-500/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(0,255,255,0.06)_0%,transparent_60%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-500/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "700ms" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-sm font-bold text-cyan-300 mb-10 shadow-[0_0_20px_rgba(0,255,255,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            Novo: Frequência automática via QR Code no app
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter mb-8 leading-[0.95]"
          >
            Gestão Inteligente para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              Creche Canina
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Matrículas, turmas, frequência de tutores, pagamentos e comunicação com responsáveis — tudo em um só lugar. Foque na dança, não na burocracia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 shadow-[0_0_40px_rgba(0,255,255,0.25)] hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] transition-all hover:scale-105 font-bold text-white border-none group" asChild>
              <Link href="/solutions/dog_daycare/register">
                Começar Grátis
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button type="button" size="lg" variant="outline" className="h-16 px-10 text-xl rounded-full border-2 border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400 font-bold text-slate-300 bg-transparent backdrop-blur-sm" onClick={() => {
              // Scroll to pricing or demo section
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Ver Demonstração
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            {[
              { value: "+500", label: "Creches ativos" },
              { value: "+12k", label: "Tutores gerenciados" },
              { value: "4.9★", label: "Avaliação média" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// --- App do Monitor Demo ---

function TeacherAppSection() {
  const [activeTab, setActiveTab] = useState<'chamada' | 'turma'>('chamada')

  return (
    <section id="teacher-app" className="py-24 bg-slate-900/90 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Tudo na palma da mão do <span className="text-orange-400">Monitor</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Chamada digital, frequência automática por QR Code e gestão de turmas sem complicação.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Mockup do celular */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
              <div className="w-full h-full bg-slate-50 pt-10 pb-4 px-4 flex flex-col relative">

                {activeTab === 'chamada' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full">
                    <div className="bg-white p-4 rounded-2xl shadow-sm mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-800 font-bold">
                        <ClipboardList className="w-5 h-5 text-orange-600" /> Chamada
                      </div>
                      <Badge className="bg-violet-100 text-orange-600 border-none">Turma Ballet</Badge>
                    </div>
                    <div className="space-y-2 flex-1 overflow-auto">
                      {[
                        { name: "Ana Souza", present: true },
                        { name: "Beatriz Lima", present: true },
                        { name: "Clara Dias", present: false },
                        { name: "Diana Costa", present: true },
                        { name: "Elena Freitas", present: false },
                      ].map((tutor) => (
                        <div key={tutor.name} className={cn(
                          "bg-white p-3 rounded-xl shadow-sm flex items-center justify-between border-l-4",
                          tutor.present ? "border-l-emerald-500" : "border-l-red-400"
                        )}>
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white",
                              tutor.present ? "bg-emerald-500" : "bg-slate-300"
                            )}>
                              {tutor.name[0]}
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{tutor.name}</span>
                          </div>
                          {tutor.present
                            ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            : <AlertTriangle className="w-5 h-5 text-red-400" />
                          }
                        </div>
                      ))}
                    </div>
                    <Button size="sm" className="mt-4 bg-orange-600 text-white w-full rounded-xl">
                      Salvar Chamada
                    </Button>
                  </motion.div>
                )}

                {activeTab === 'turma' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-slate-800">Olá, Ana 👋</h3>
                        <p className="text-xs text-slate-500">Hoje: 3 turmas</p>
                      </div>
                      <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                        <Sun className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Ballet Infantil", time: "09:00", students: 12, color: "border-l-pink-400" },
                        { name: "Jazz Adulto", time: "11:00", students: 8, color: "border-l-orange-400" },
                        { name: "Contemporâneo", time: "19:00", students: 15, color: "border-l-indigo-400" },
                      ].map((turma) => (
                        <div key={turma.name} className={cn("bg-white p-4 rounded-2xl shadow-sm border-l-4", turma.color)}>
                          <h4 className="font-bold text-sm text-slate-800">{turma.name}</h4>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                              <Clock className="w-3 h-3" /> {turma.time}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                              <Users className="w-3 h-3" /> {turma.students} tutores
                            </div>
                          </div>
                          <Button size="sm" className="h-7 text-xs bg-slate-900 text-white w-full mt-2">Fazer Chamada</Button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Features à direita */}
          <div className="md:col-span-7 space-y-6">
            {[
              { id: 'chamada', title: 'Chamada Digital', desc: 'Frequência em segundos, sem papel. Histórico completo por tutor.', icon: ClipboardList },
              { id: 'turma', title: 'Agenda de Turmas', desc: 'Visualize todas as turmas do dia com horários e número de tutores.', icon: Calendar },
              { id: 'qrcode', title: 'Check-in por QR Code', desc: 'Tutores fazem check-in autônomo na entrada do creche.', icon: Smartphone }
            ].map((feature) => (
              <div
                key={feature.id}
                onClick={() => (feature.id === 'chamada' || feature.id === 'turma') && setActiveTab(feature.id as 'chamada' | 'turma')}
                className={cn(
                  "p-6 rounded-2xl cursor-pointer transition-all border group",
                  activeTab === feature.id ? "bg-slate-800 border-orange-500/30 shadow-lg" : "bg-slate-900/50 border-white/5"
                )}
              >
                <div className="flex gap-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", activeTab === feature.id ? "bg-orange-600 text-white" : "bg-slate-700 text-slate-400")}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={cn("text-xl font-bold mb-2", activeTab === feature.id ? "text-white" : "text-slate-300")}>{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Portal do Responsável ---

function GuardianPortalSection() {
  return (
    <section id="guardian-portal" className="py-24 bg-slate-950/90 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-pink-100 text-pink-600 border-none px-4 py-1 mb-4 uppercase tracking-widest text-[10px] font-black">Portal do Responsável</Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Transparência para <span className="text-pink-400">as Famílias</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Pais e responsáveis acompanham frequência, recebem comunicados e pagam mensalidades pelo celular.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Mockup */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
              <div className="w-full h-full bg-slate-50 pt-10 pb-4 px-4 flex flex-col">
                {/* Header portal */}
                <div className="bg-orange-700 p-4 rounded-2xl shadow-xl border border-orange-600 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">CrecheCanina — Portal</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs text-white">RS</div>
                  </div>
                </div>
                {/* Alerta de mensalidade */}
                <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-center gap-2 mb-3">
                  <Bell className="w-4 h-4 text-amber-500 shrink-0" />
                  <p className="text-xs font-semibold text-amber-700">Mensalidade de Mar/26 em aberto</p>
                  <Button variant="outline" size="sm" className="ml-auto bg-amber-500 border-none text-white text-[10px] h-6 px-2">Pagar</Button>
                </div>
                {/* Stats do tutor */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-white p-3 rounded-xl text-center shadow-sm">
                    <p className="text-2xl font-black text-orange-600">92%</p>
                    <p className="text-[10px] font-bold uppercase text-slate-400">Frequência</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl text-center shadow-sm">
                    <p className="text-2xl font-black text-emerald-500">18</p>
                    <p className="text-[10px] font-bold uppercase text-slate-400">Diárias em dia</p>
                  </div>
                </div>
                {/* Comunicados */}
                <div className="bg-white p-3 rounded-xl shadow-sm flex-1 overflow-auto">
                  <p className="text-xs font-bold uppercase text-slate-400 mb-2">Comunicados</p>
                  {[
                    { text: "Recital de Inverno: 15/06 às 19h", icon: Star, color: "text-orange-500" },
                    { text: "Reposição de diária: Sábado 10h", icon: Calendar, color: "text-pink-500" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 py-2 border-b border-slate-100 last:border-0">
                      <item.icon className={cn("w-4 h-4 shrink-0 mt-0.5", item.color)} />
                      <p className="text-xs text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="md:col-span-7 space-y-6">
            {[
              { title: 'Frequência em Tempo Real', desc: 'Pais acompanham cada diária e recebem alertas de falta.', icon: TrendingUp, color: "bg-orange-600" },
              { title: 'Pagamentos Online', desc: 'Boleto, cartão ou Pix. Histórico completo de mensalidades.', icon: CreditCard, color: "bg-pink-600" },
              { title: 'Comunicados & Eventos', desc: 'Avisos de reposições, recitais e feriados diretamente no app.', icon: MessageSquare, color: "bg-indigo-600" },
            ].map((feature) => (
              <div key={feature.title} className="p-6 rounded-2xl bg-slate-800 border border-pink-500/20 shadow-lg">
                <div className="flex gap-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white", feature.color)}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Painel de Gestão ---

function ManagementDashboard() {
  const stats = [
    { label: "Tutores Ativos", value: "124", icon: Users, color: "text-orange-500", trend: "+8 este mês" },
    { label: "Faturamento", value: "R$ 14.800", icon: DollarSign, color: "text-emerald-500", trend: "+12% vs. mês anterior" },
    { label: "Taxa de Retenção", value: "94%", icon: Heart, color: "text-pink-500", trend: "Acima da média" },
    { label: "Turmas Ativas", value: "18", icon: Calendar, color: "text-indigo-500", trend: "3 novas turmas" },
  ]

  const modules = [
    { label: "Turmas", icon: GraduationCap, color: "bg-orange-600", shadow: "shadow-orange-500/30", description: "Crie e gerencie turmas por modalidade e nível." },
    { label: "Tutores", icon: Users, color: "bg-pink-600", shadow: "shadow-pink-500/30", description: "Cadastro completo com histórico de frequência." },
    { label: "Financeiro", icon: DollarSign, color: "bg-emerald-600", shadow: "shadow-emerald-500/30", description: "Mensalidades, cobranças e relatórios financeiros." },
    { label: "Comunicados", icon: MessageSquare, color: "bg-indigo-600", shadow: "shadow-indigo-500/30", description: "WhatsApp e notificações automáticas." },
    { label: "Recitais", icon: Star, color: "bg-amber-500", shadow: "shadow-amber-500/30", description: "Gestão de eventos e apresentações." },
    { label: "Monitores", icon: Heart, color: "bg-rose-600", shadow: "shadow-rose-500/30", description: "Agenda, pagamentos e avaliações de monitores." },
    { label: "Relatórios", icon: BarChart3, color: "bg-cyan-600", shadow: "shadow-cyan-500/30", description: "Análises de frequência, receita e crescimento." },
    { label: "Matrículas", icon: UserPlus, color: "bg-teal-600", shadow: "shadow-teal-500/30", description: "Fluxo de captação e onboarding de novos tutores." },
    { label: "Multi-Unidade", icon: Building2, color: "bg-slate-600", shadow: "shadow-slate-500/30", description: "Gerencie várias unidades em uma conta só." },
    { label: "Gamificação", icon: Trophy, color: "bg-yellow-500", shadow: "shadow-yellow-500/30", description: "Rankings, conquistas e engajamento dos tutores." },
  ]

  return (
    <section id="management" className="py-24 bg-slate-950/90 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-1 mb-4 uppercase tracking-widest text-[10px] font-black">Painel Administrativo</Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Controle total do seu <span className="text-orange-400">Creche</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dashboard completo com métricas em tempo real, controle financeiro e gestão de toda a operação.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{stat.label}</div>
                    <stat.icon className={cn("w-4 h-4", stat.color)} />
                  </div>
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className={cn("text-[10px] font-bold mt-1 uppercase tracking-tight", stat.color)}>{stat.trend}</div>
                </motion.div>
              ))}
            </div>

            {/* Modules */}
            <TooltipProvider>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                {modules.map((mod, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 + i * 0.05 }}
                        whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }}
                        className="flex flex-col items-center gap-3 group cursor-pointer"
                      >
                        <div className={cn(
                          "w-16 h-16 sm:w-20 sm:h-20 rounded-[1.75rem] flex items-center justify-center text-white transition-all duration-300 group-hover:rotate-6",
                          mod.color, mod.shadow, "shadow-lg group-hover:shadow-2xl"
                        )}>
                          <mod.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-600 text-center uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                          {mod.label}
                        </span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-[200px] text-center bg-slate-900 text-white border-slate-800 p-3 rounded-xl shadow-xl">
                      <p className="font-bold mb-1 text-orange-400 uppercase tracking-tighter text-[10px]">{mod.label}</p>
                      <p className="text-[11px] leading-tight text-slate-300">{mod.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>

            {/* Decoration */}
            <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none">
              <Sun className="w-64 h-64 rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Features Grid ---

function FeatureGrid() {
  const features = [
    { title: "Controle de Mensalidades", description: "Cobranças automáticas com boleto, cartão ou Pix. Inadimplência em destaque.", icon: CreditCard, color: "from-orange-500 to-purple-400" },
    { title: "WhatsApp Automático", description: "Avisos de falta, cobrança e comunicados enviados automaticamente.", icon: MessageSquare, color: "from-emerald-500 to-teal-400" },
    { title: "Captação de Tutores", description: "Formulário de matrícula online e funil de leads integrado.", icon: UserPlus, color: "from-pink-500 to-rose-400" },
    { title: "Multi-Modalidade", description: "Ballet, jazz, funk, sapateado, contemporâneo e muito mais.", icon: Music, color: "from-amber-500 to-orange-400" },
  ]

  return (
    <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-orange-400 rounded-full blur-[128px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-pink-400 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="bg-violet-100 text-orange-600 border-none px-4 py-1.5 mb-6 uppercase tracking-[0.2em] text-[10px] font-black shadow-sm">
              Recursos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Tudo em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">só lugar</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              A plataforma mais completa para modernizar a gestão do seu creche canina e encantar tutores e responsáveis.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/5 transition-all duration-500 blur-xl opacity-0 group-hover:opacity-100" />
              <div className={cn(
                "w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br text-white shadow-lg group-hover:scale-110 transition-transform duration-500",
                feature.color
              )}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Pricing ---

function PricingSection() {
  const highlights = [
    { icon: "🎓", label: "Implantação guiada", desc: "Nossa equipe configura turmas, módulos e integrações" },
    { icon: "📱", label: "Treinamento completo", desc: "Capacitação da equipe de monitores e recepção" },
    { icon: "💬", label: "Suporte dedicado", desc: "Atendimento direto com especialistas em gestão de dança" },
    { icon: "🎯", label: "Personalização total", desc: "Sistema configurado para o fluxo do seu creche" },
  ]

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <Badge className="bg-violet-100 text-orange-600 border-none px-4 py-1.5 mb-6 uppercase tracking-[0.2em] text-[10px] font-black">
          Implementação
        </Badge>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Instalado pelo <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">nosso time</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-16">
          O CrecheCanina é implantado com suporte especializado. Entre em contato para que nossa equipe entenda o seu creche e configure a plataforma perfeita para vocês.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left"
            >
              <span className="text-3xl">{h.icon}</span>
              <div>
                <p className="font-bold text-slate-900 mb-1">{h.label}</p>
                <p className="text-slate-500 text-sm">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl shadow-orange-500/20">
          <h3 className="text-2xl font-black mb-3">Pronto para transformar seu creche?</h3>
          <p className="text-violet-100 mb-8">
            Fale com nosso time e receba uma demonstração exclusiva do CrecheCanina para o seu creche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999?text=Olá! Tenho interesse no CrecheCanina para meu creche canina."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-violet-50 font-bold h-14 px-8 rounded-2xl transition-all shadow-lg"
            >
              <Sun className="w-5 h-5" />
              Falar com um especialista
            </a>
            <a
              href="mailto:contato@workflowpro.com.br"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-bold h-14 px-8 rounded-2xl transition-all"
            >
              Solicitar demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- CTA Final ---

function CTASection() {
  return (
    <section className="py-32 bg-slate-950/90 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-orange-900/30 via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-bold text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            14 dias grátis, sem cartão
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Pronto para transformar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">seu creche?</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
            Junte-se a centenas de creches que já modernizaram sua gestão com o CrecheCanina.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-orange-600 hover:bg-orange-700 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:scale-105 transition-all font-bold text-white border-none group" asChild>
              <Link href="/solutions/dog_daycare/register">
                Criar Conta Grátis
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full border-2 border-white/10 hover:bg-white/10 hover:text-white font-bold text-slate-300 bg-transparent" asChild>
              <Link href="/solutions/dog_daycare/login">Já tenho conta</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// --- Footer ---

function Footer() {
  return (
    <footer className="bg-slate-950/90 border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 pb-12 border-b border-white/5">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/20">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                AKAAI <span className="text-orange-400 font-black">Pet</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A plataforma definitiva para gestão de creche canina. 
              Foque na arte e na evolução dos seus tutores, nós cuidamos da burocracia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="sm" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-slate-300 transition-all group" asChild>
                <Link href="/home" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Voltar ao Início
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Tecnologia</h4>
            <div className="flex items-center gap-2 group">
              <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              </div>
              <span className="text-white font-black text-sm tracking-widest uppercase italic">
                akaai<span className="text-cyan-400">core</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              O ecossistema **akaaicore** fornece a infraestrutura robusta, modular e baseada em IA que alimenta o CrecheCanina, 
              garantindo escalabilidade máxima, segurança de dados e inteligência em cada processo de gestão.
            </p>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors flex items-center gap-2 group">
                <div className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
                Privacidade
              </Link>
              <Link href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors flex items-center gap-2 group">
                <div className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
                Termos de Uso
              </Link>
              <Link href="/solutions/dog_daycare/login" className="text-slate-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                <div className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-400 transition-colors" />
                Login no Sistema
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} CrecheCanina — powered by akaaicore. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-slate-700">
             <span className="text-[10px] uppercase tracking-[0.3em] font-black italic">Built with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// --- Page ---

export default function DanceStudioPage() {
  return (
    <div className="relative min-h-screen text-white">
      <PageBackgroundCanvas />
      <div className="relative z-10">
        <Navbar />
      <HeroSection />
      <TeacherAppSection />
      <GuardianPortalSection />
      <ManagementDashboard />
      <FeatureGrid />
      <PricingSection />
      <CTASection />
      <Footer />
      </div>
    </div>
  )
}
