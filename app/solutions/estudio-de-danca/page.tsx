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
          hue: 0, // Red hue in HSL is 0
        })
      }
    }

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      ctx.fillStyle = "rgba(0, 0, 0, 0.12)"
      ctx.fillRect(0, 0, w, h)

      time += 0.005

      // Ondas de gradiente animadas (MANTENDO MONOCROMÁTICO COM TOQUE DE VERMELHO)
      const gradient = ctx.createLinearGradient(0, 0, w, h)
      const t = Math.sin(time) * 0.5 + 0.5
      gradient.addColorStop(0, `rgba(228, 0, 20, ${0.03 + t * 0.02})`)
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${0.01 + (1 - t) * 0.01})`)
      gradient.addColorStop(1, `rgba(228, 0, 20, ${0.02 + t * 0.015})`)
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
    { name: "App do Professor", href: "#teacher-app" },
    { name: "Portal do Responsável", href: "#guardian-portal" },
    { name: "Gestão", href: "#management" },
    { name: "Contato", href: "#pricing" },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-md py-3"
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-white hover:opacity-80 transition-opacity">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-700 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-9 h-9 rounded-lg bg-[#e40014] flex items-center justify-center text-white shadow-lg">
              <Music className="w-5 h-5" />
            </div>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            AKAAI <span className="text-[#e40014] font-black">Dance</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-bold text-white/70 hover:text-[#e40014] transition-all relative group uppercase tracking-widest"
            >
              {item.name}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#e40014] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
            <Button size="sm" variant="ghost" className="font-semibold text-white hover:bg-white/5/10 hover:text-white transition-all" asChild>
              <Link href="/solutions/estudio-de-danca/login">Entrar</Link>
            </Button>
            <Button size="sm" className="hidden sm:flex rounded-full px-6 bg-[#e40014] hover:bg-[#e40014] shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:scale-105 transition-all duration-300 font-bold text-white border-none" asChild>
              <Link href="/solutions/estudio-de-danca/register">Criar Conta Grátis</Link>
            </Button>
                <Button type="button" variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-white/5/10 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 font-semibold text-white">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="flex items-center justify-between group" onClick={() => setMobileMenuOpen(false)}>
                  {item.name} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#e40014]" />
                </Link>
              ))}
              <div className="h-px bg-white/5/10 my-2" />
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button type="button" variant="outline" className="w-full rounded-xl border-white/10 hover:bg-white/5/5 text-white" asChild>
                  <Link href="/solutions/estudio-de-danca/login">Entrar</Link>
                </Button>
                <Button type="button" className="w-full rounded-xl bg-[#e40014] hover:bg-[#e40014] text-white border-none" asChild>
                  <Link href="/solutions/estudio-de-danca/register">Criar Conta</Link>
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
          hue: 0, // Red
        })
      }
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      // Clear com fade sutil (Pure black)
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)"
      ctx.fillRect(0, 0, w, h)

      time += 0.008

      // Grid perspectiva futurista
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)"
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
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
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
        ctx.fillStyle = `rgba(228, 0, 20, 0.6)`
        ctx.fill()
      })

      // Orbs luminosos (MUDANÇA PARA RED/WHITE)
      const orb1 = { x: w * 0.2, y: h * 0.3, r: 120 }
      const orb2 = { x: w * 0.8, y: h * 0.6, r: 100 }
      const orb3 = { x: w * 0.5, y: h * 0.2, r: 80 }

      ;[orb1, orb2, orb3].forEach((orb, i) => {
        const pulse = 1 + Math.sin(time + i) * 0.15
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.r * pulse
        )
        gradient.addColorStop(0, i === 0 ? "rgba(228, 0, 20, 0.08)" : i === 1 ? "rgba(255, 255, 255, 0.08)" : "rgba(228, 0, 20, 0.06)")
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.02)")
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
      scanGradient.addColorStop(0.5, "rgba(228, 0, 20, 0.03)")
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
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black text-white selection:bg-white/5/20">
      <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(70% 50% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, transparent 55%)' }}></div>
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(228,0,20,0.06)_0%,transparent_60%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#e40014]/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-zinc-800/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "700ms" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/5/5 backdrop-blur-md text-xs font-black text-[#e40014] mb-10 shadow-[0_0_20px_rgba(228,0,20,0.1)] uppercase tracking-[0.2em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e40014] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e40014]"></span>
            </span>
            Novo: Ecossistema AKAAI integrado
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-tighter mb-8 leading-[0.9] text-white"
          >
            GESTÃO TECH PARA <br />
            <span className="text-[#e40014] drop-shadow-[0_0_30px_rgba(228,0,20,0.2)]">
              DANCE STUDIOS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-bold uppercase tracking-tight"
          >
            A plataforma definitiva para automatizar matrículas, frequência e pagamentos. Desenvolvido para o futuro da dança.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-[#e40014] hover:bg-[#ff6568] shadow-[0_0_40px_rgba(228,0,20,0.3)] transition-all hover:scale-105 font-black text-white border-none group uppercase tracking-widest" asChild>
              <Link href="/solutions/estudio-de-danca/register">
                COMEÇAR GRÁTIS
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button type="button" size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full border-2 border-white/10 hover:bg-white/5/5 hover:text-white font-black text-white bg-transparent backdrop-blur-sm uppercase tracking-widest" onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              FUNCIONALIDADES
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
              { value: "+500", label: "Estúdios ativos" },
              { value: "+12k", label: "Alunos gerenciados" },
              { value: "4.9★", label: "Avaliação média" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]">{stat.value}</p>
                <p className="text-sm text-zinc-500 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// --- App do Professor Demo ---

function TeacherAppSection() {
  const [activeTab, setActiveTab] = useState<'chamada' | 'turma'>('chamada')

  return (
    <section id="teacher-app" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(228, 0, 20, 0.05), transparent 70%)' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-[#e40014]/10 text-[#e40014] border border-[#e40014]/20 px-4 py-1.5 mb-6 uppercase tracking-[0.2em] text-[10px] font-black">Teacher Portal</Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            GESTÃO NA PALMA DA MÃO DO <span className="text-[#e40014]">PROFESSOR</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-bold uppercase tracking-tight">
            Chamada digital, frequência automática por QR Code e gestão de turmas com alta performance.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Mockup do celular */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-[320px] h-[640px] bg-black rounded-[3.5rem] border-[10px] border-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-950 rounded-b-2xl z-20"></div>
              <div className="w-full h-full bg-black pt-12 pb-6 px-5 flex flex-col relative">

                {activeTab === 'chamada' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full">
                    <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5 mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest">
                        <ClipboardList className="w-4 h-4 text-[#e40014]" /> Chamada
                      </div>
                      <Badge className="bg-[#e40014] text-white border-none text-[8px] font-black">BALLET PRO</Badge>
                    </div>
                    <div className="space-y-2.5 flex-1 overflow-auto">
                      {[
                        { name: "Ana Souza", present: true },
                        { name: "Beatriz Lima", present: true },
                        { name: "Clara Dias", present: false },
                        { name: "Diana Costa", present: true },
                        { name: "Elena Freitas", present: false },
                      ].map((aluno) => (
                        <div key={aluno.name} className={cn(
                          "bg-white/5/5 p-3.5 rounded-xl flex items-center justify-between border-l-4 transition-all hover:bg-white/5/10",
                          aluno.present ? "border-l-[#e40014]" : "border-l-zinc-800"
                        )}>
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg",
                              aluno.present ? "bg-[#e40014]" : "bg-zinc-800"
                            )}>
                              {aluno.name[0]}
                            </div>
                            <span className="text-xs font-bold text-white uppercase tracking-tight">{aluno.name}</span>
                          </div>
                          {aluno.present
                            ? <CheckCircle2 className="w-5 h-5 text-[#e40014]" />
                            : <AlertTriangle className="w-5 h-5 text-zinc-600" />
                          }
                        </div>
                      ))}
                    </div>
                    <Button size="sm" className="mt-4 bg-[#e40014] hover:bg-[#ff6568] text-white w-full rounded-xl font-black uppercase tracking-widest text-[10px] h-11 border-none">
                      Salvar Chamada
                    </Button>
                  </motion.div>
                )}

                {activeTab === 'turma' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="font-black text-lg text-white tracking-tighter uppercase">Olá, Ana 👋</h3>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">3 turmas hoje</p>
                      </div>
                      <div className="w-12 h-12 bg-white/5/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <Music className="w-6 h-6 text-[#e40014]" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "Ballet Avançado", time: "09:00", students: 12, color: "border-l-[#e40014]" },
                        { name: "Jazz Tech", time: "11:00", students: 8, color: "border-l-zinc-700" },
                        { name: "Contemporâneo", time: "19:00", students: 15, color: "border-l-[#e40014]" },
                      ].map((turma) => (
                        <div key={turma.name} className={cn("bg-white/5/5 p-4 rounded-2xl border-l-4 hover:bg-white/5/10 transition-colors", turma.color)}>
                          <h4 className="font-black text-xs text-white uppercase tracking-tight">{turma.name}</h4>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase">
                              <Clock className="w-3 h-3 text-[#e40014]" /> {turma.time}
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase">
                              <Users className="w-3 h-3 text-[#e40014]" /> {turma.students} alunos
                            </div>
                          </div>
                          <Button size="sm" className="h-8 text-[9px] font-black bg-black text-black hover:bg-zinc-200 w-full mt-3 rounded-lg uppercase tracking-widest border-none">Fazer Chamada</Button>
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
              { id: 'chamada', title: 'CHAMADA DIGITAL', desc: 'Frequência em milissegundos, sem papel. Registro imutável por aluno.', icon: ClipboardList },
              { id: 'turma', title: 'AGENDA EM TEMPO REAL', desc: 'Sincronização instantânea de horários, salas e disponibilidade.', icon: Calendar },
              { id: 'qrcode', title: 'CHECK-IN QR CODE', desc: 'Validação automática e segura via aplicativo do aluno.', icon: Smartphone }
            ].map((feature) => (
              <div
                key={feature.id}
                onClick={() => (feature.id === 'chamada' || feature.id === 'turma') && setActiveTab(feature.id as 'chamada' | 'turma')}
                className={cn(
                  "p-8 rounded-[2rem] cursor-pointer transition-all border group relative overflow-hidden",
                  activeTab === feature.id ? "bg-[#e40014]/5 border-[#e40014] shadow-2xl" : "bg-white/5/5 border-white/10 hover:border-white/20"
                )}
              >
                <div className="flex gap-6 items-center">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-lg", activeTab === feature.id ? "bg-[#e40014] text-white" : "bg-zinc-900 text-zinc-500")}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className={cn("text-xl font-black mb-1 tracking-tight uppercase", activeTab === feature.id ? "text-white" : "text-zinc-400")}>{feature.title}</h3>
                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-tight leading-relaxed">{feature.desc}</p>
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
    <section id="guardian-portal" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(228, 0, 20, 0.05), transparent 70%)' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-[#e40014]/10 text-[#e40014] border border-[#e40014]/20 px-5 py-1.5 mb-6 uppercase tracking-[0.2em] text-[10px] font-black">Student & Guardian Portal</Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            CONEXÃO TOTAL COM <span className="text-[#e40014]">AS FAMÍLIAS</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-bold uppercase tracking-tight">
            Monitoramento de performance, pagamentos integrados e comunicação segura via aplicativo.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Mockup */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-[320px] h-[640px] bg-black rounded-[3.5rem] border-[10px] border-zinc-900 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-950 rounded-b-2xl z-20"></div>
              <div className="w-full h-full bg-black pt-12 pb-6 px-5 flex flex-col">
                {/* Header portal */}
                <div className="bg-[#e40014] p-5 rounded-2xl shadow-xl mb-4 border border-[#e40014]">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xs text-white uppercase tracking-widest">PORTAL AKAAI</span>
                    <div className="w-9 h-9 rounded-full bg-white/5/20 flex items-center justify-center font-black text-xs text-white border border-white/20">RS</div>
                  </div>
                </div>
                {/* Alerta de mensalidade */}
                <div className="bg-white/5/5 border border-white/10 p-4 rounded-xl flex items-center gap-3 mb-4 group hover:border-[#e40014]/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#e40014]/10 flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 text-[#e40014]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">MENSALIDADE MAR/26</p>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-tight">Vencimento em 5 dias</p>
                  </div>
                  <Button size="sm" className="ml-auto bg-white/5 text-black hover:bg-zinc-200 text-[9px] font-black h-7 px-3 rounded-full border-none">PAGAR</Button>
                </div>
                {/* Stats do aluno */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-zinc-900 p-4 rounded-2xl text-center border border-white/5 shadow-lg group hover:border-[#e40014]/30 transition-colors">
                    <p className="text-3xl font-black text-[#e40014] tracking-tighter">92%</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mt-1">Frequência</p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-2xl text-center border border-white/5 shadow-lg group hover:border-[#e40014]/30 transition-colors">
                    <p className="text-3xl font-black text-white tracking-tighter">18</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mt-1">Aulas</p>
                  </div>
                </div>
                {/* Comunicados */}
                <div className="bg-zinc-900 p-5 rounded-2xl border border-white/5 flex-1 overflow-auto">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-4">COMUNICADOS</p>
                  {[
                    { text: "Recital de Inverno: 15/06", icon: Star, color: "text-[#e40014]" },
                    { text: "Reposição: Sábado 10h", icon: Calendar, color: "text-zinc-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 group cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-white/5/5 flex items-center justify-center shrink-0 group-hover:bg-[#e40014]/10 transition-colors">
                        <item.icon className={cn("w-4 h-4", item.color)} />
                      </div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-tight group-hover:text-white transition-colors">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="md:col-span-7 space-y-6">
            {[
              { title: 'PERFORMANCE ANALYTICS', desc: 'Acompanhamento detalhado da evolução técnica e presença do aluno.', icon: TrendingUp, color: "bg-[#e40014]" },
              { title: 'FINANCIAL HUB', desc: 'Gateway de pagamento integrado com Pix e Checkout Transparente.', icon: CreditCard, color: "bg-[#e40014]" },
              { title: 'DIRECT COMMS', desc: 'Canal direto de comunicação via push e WhatsApp automatizado.', icon: MessageSquare, color: "bg-[#e40014]" },
            ].map((feature) => (
              <div key={feature.title} className="p-8 rounded-[2rem] bg-white/5/5 border border-white/10 hover:border-[#e40014]/50 transition-all group">
                <div className="flex gap-6 items-center">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-lg transition-transform group-hover:scale-110", feature.color)}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-1 text-white uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-zinc-500 text-sm font-bold uppercase tracking-tight leading-relaxed">{feature.desc}</p>
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
    { label: "Alunos Ativos", value: "124", icon: Users, color: "text-[#e40014]", trend: "+8 este mês" },
    { label: "Faturamento", value: "R$ 14.800", icon: DollarSign, color: "text-[#e40014]", trend: "+12% vs. mês anterior" },
    { label: "Taxa de Retenção", value: "94%", icon: Heart, color: "text-[#e40014]", trend: "Acima da média" },
    { label: "Turmas Ativas", value: "18", icon: Calendar, color: "text-[#e40014]", trend: "3 novas turmas" },
  ]

  const modules = [
    { label: "Turmas", icon: GraduationCap, color: "bg-[#e40014]", shadow: "shadow-[#e40014]/30", description: "Crie e gerencie turmas por modalidade e nível." },
    { label: "Alunos", icon: Users, color: "bg-[#e40014]", shadow: "shadow-[#e40014]/30", description: "Cadastro completo com histórico de frequência." },
    { label: "Financeiro", icon: DollarSign, color: "bg-[#e40014]", shadow: "shadow-[#e40014]/30", description: "Mensalidades, cobranças e relatórios financeiros." },
    { label: "Comunicados", icon: MessageSquare, color: "bg-[#e40014]", shadow: "shadow-[#e40014]/30", description: "WhatsApp e notificações automáticas." },
    { label: "Recitais", icon: Star, color: "bg-[#e40014]", shadow: "shadow-[#e40014]/30", description: "Gestão de eventos e apresentações." },
    { label: "Professores", icon: Heart, color: "bg-[#e40014]", shadow: "shadow-[#e40014]/30", description: "Agenda, pagamentos e avaliações de professores." },
    { label: "Relatórios", icon: BarChart3, color: "bg-zinc-800", shadow: "shadow-zinc-800/30", description: "Análises de frequência, receita e crescimento." },
    { label: "Matrículas", icon: UserPlus, color: "bg-zinc-900", shadow: "shadow-zinc-900/30", description: "Fluxo de captação e onboarding de novos alunos." },
    { label: "Multi-Unidade", icon: Building2, color: "bg-zinc-800", shadow: "shadow-zinc-800/30", description: "Gerencie várias unidades em uma conta só." },
    { label: "Gamificação", icon: Trophy, color: "bg-zinc-950", shadow: "shadow-zinc-950/30", description: "Rankings, conquistas e engajamento dos alunos." },
  ]

  return (
    <section id="management" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#e40014]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#e40014]/10 rounded-full blur-[100px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-[#e40014]/10 text-[#e40014] border border-[#e40014]/20 px-5 py-1.5 mb-6 uppercase tracking-[0.2em] text-[10px] font-black">Admin Dashboard</Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            CONTROLE TOTAL DO SEU <span className="text-[#e40014]">ESTÚDIO</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-bold uppercase tracking-tight">
            Métricas em tempo real, automação financeira e gestão de alta performance.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden p-10 relative">
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(228, 0, 20, 0.03), transparent 70%)' }}></div>
            <div className="relative z-10">
              {/* Stats grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-black p-6 rounded-2xl border border-white/10 shadow-lg hover:border-[#e40014]/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
                      <stat.icon className={cn("w-4 h-4", stat.color)} />
                    </div>
                    <div className="text-3xl font-black text-white tracking-tighter">{stat.value}</div>
                    <div className={cn("text-[9px] font-black mt-2 uppercase tracking-widest", stat.color)}>{stat.trend}</div>
                  </motion.div>
                ))}
              </div>

              {/* Modules */}
              <TooltipProvider>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
                  {modules.map((mod, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 + i * 0.05 }}
                          whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2 } }}
                          className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                          <div className={cn(
                            "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-6 border border-white/10",
                            mod.color, mod.shadow, "shadow-xl group-hover:shadow-[0_0_30px_rgba(228,0,20,0.4)]"
                          )}>
                            <mod.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                          </div>
                          <span className="text-[10px] font-black text-zinc-500 text-center uppercase tracking-widest group-hover:text-white transition-colors">
                            {mod.label}
                          </span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="max-w-[200px] text-center bg-black text-white border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-xl">
                        <p className="font-black mb-1 text-[#e40014] uppercase tracking-widest text-[10px]">{mod.label}</p>
                        <p className="text-[11px] font-medium leading-relaxed text-zinc-400">{mod.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>

            {/* Decoration */}
            <div className="absolute bottom-0 right-0 p-10 opacity-[0.03] pointer-events-none">
              <Music className="w-80 h-80 rotate-12 text-[#e40014]" />
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
    { title: "Controle de Mensalidades", description: "Cobranças automáticas com boleto, cartão ou Pix. Inadimplência em destaque.", icon: CreditCard, color: "from-[#e40014] to-red-900" },
    { title: "WhatsApp Automático", description: "Avisos de falta, cobrança e comunicados enviados automaticamente.", icon: MessageSquare, color: "from-zinc-900 to-black" },
    { title: "Captação de Alunos", description: "Formulário de matrícula online e funil de leads integrado.", icon: UserPlus, color: "from-[#e40014] to-black" },
    { title: "Multi-Modalidade", description: "Ballet, jazz, funk, sapateado, contemporâneo e muito mais.", icon: Music, color: "from-zinc-800 to-zinc-950" },
  ]

  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-[#e40014] rounded-full blur-[128px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#e40014] rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="bg-[#e40014] text-[#e40014] border-none px-4 py-1.5 mb-6 uppercase tracking-[0.2em] text-[10px] font-black shadow-sm">
              Recursos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Tudo em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">só lugar</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
              A plataforma mais completa para modernizar a gestão do seu estúdio de dança e encantar alunos e responsáveis.
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
              className="group bg-white/5/5 rounded-[2.5rem] border border-white/10 p-8 shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/5 transition-all duration-500 blur-xl opacity-0 group-hover:opacity-100" />
              <div className={cn(
                "w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br text-white shadow-lg group-hover:scale-110 transition-transform duration-500",
                feature.color
              )}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#e40014] transition-colors">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{feature.description}</p>
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
    { icon: "📱", label: "Treinamento completo", desc: "Capacitação da equipe de professores e recepção" },
    { icon: "💬", label: "Suporte dedicado", desc: "Atendimento direto com especialistas em gestão de dança" },
    { icon: "🎯", label: "Personalização total", desc: "Sistema configurado para o fluxo do seu estúdio" },
  ]

  return (
    <section id="pricing" className="py-32 bg-white/5/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <Badge className="bg-[#e40014] text-[#e40014] border-none px-4 py-1.5 mb-6 uppercase tracking-[0.2em] text-[10px] font-black">
          Implementação
        </Badge>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Instalado pelo <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">nosso time</span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg mb-16">
          O AKAAI Dance é implantado com suporte especializado. Entre em contato para que nossa equipe entenda o seu estúdio e configure a plataforma perfeita para vocês.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-black rounded-2xl p-6 border border-white/10 text-left"
            >
              <span className="text-3xl">{h.icon}</span>
              <div>
                <p className="font-bold text-white mb-1">{h.label}</p>
                <p className="text-zinc-500 text-sm">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-10 text-white shadow-2xl shadow-black">
          <h3 className="text-2xl font-black mb-3">Pronto para transformar seu estúdio?</h3>
          <p className="text-[#e40014] mb-8">
            Fale com nosso time e receba uma demonstração exclusiva do AKAAI Dance para o seu estúdio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999?text=Olá! Tenho interesse no AKAAI Dance para meu estúdio de dança."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5/5 text-[#e40014] hover:bg-[#e40014] font-bold h-14 px-8 rounded-2xl transition-all shadow-lg"
            >
              <Music className="w-5 h-5" />
              Falar com um especialista
            </a>
            <a
              href="mailto:contato@workflowpro.com.br"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/5/10 font-bold h-14 px-8 rounded-2xl transition-all"
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
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-red-900/30 via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e40014] bg-[#e40014] text-[#e40014] font-bold text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            14 dias grátis, sem cartão
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Pronto para transformar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-400">seu estúdio?</span>
          </h2>
          <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12">
            Junte-se a centenas de estúdios que já modernizaram sua gestão com o AKAAI Dance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-[#e40014] hover:bg-[#e40014] shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:scale-105 transition-all font-bold text-white border-none group" asChild>
              <Link href="/solutions/estudio-de-danca/register">
                Criar Conta Grátis
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full border-2 border-white/10 hover:bg-white/5/10 hover:text-white font-bold text-zinc-400 bg-transparent" asChild>
              <Link href="/solutions/estudio-de-danca/login">Já tenho conta</Link>
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
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#e40014] flex items-center justify-center shadow-lg shadow-red-600/20">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                AKAAI <span className="text-[#e40014] font-black">Dance</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm uppercase font-bold tracking-tight">
              A plataforma definitiva para gestão de estúdios de dança. 
              Foque na arte e na evolução dos seus alunos, nós cuidamos da burocracia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="sm" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-zinc-300 transition-all group uppercase font-black tracking-widest text-[10px] h-10 px-6" asChild>
                <Link href="/home" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Voltar ao Início
                </Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Tecnologia</h4>
            <div className="flex items-center gap-2 group">
              <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                <Zap className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              </div>
              <span className="text-white font-black text-sm tracking-widest uppercase italic">
                akaai<span className="text-red-600">core</span>
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-bold leading-relaxed uppercase tracking-tight">
              O ecossistema **akaaicore** fornece a infraestrutura robusta, modular e baseada em IA que alimenta o AKAAI Dance, 
              garantindo escalabilidade máxima, segurança de dados e inteligência em cada processo de gestão.
            </p>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-zinc-500 hover:text-white text-xs font-black tracking-widest uppercase transition-colors flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600/50 group-hover:bg-red-600 transition-colors" />
                Privacidade
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-white text-xs font-black tracking-widest uppercase transition-colors flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600/50 group-hover:bg-red-600 transition-colors" />
                Termos de Uso
              </Link>
              <Link href="/solutions/estudio-de-danca/login" className="text-zinc-500 hover:text-red-600 text-xs font-black tracking-widest uppercase transition-colors flex items-center gap-2 group">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600/50 group-hover:bg-red-600 transition-colors" />
                Login no Sistema
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <p className="text-zinc-700 text-[10px] uppercase tracking-[0.2em] font-black italic">
            © {new Date().getFullYear()} AKAAI Dance — powered by akaaicore.
          </p>
          <div className="flex items-center gap-4 text-zinc-800">
             <span className="text-[10px] uppercase tracking-[0.4em] font-black italic">Engineered for Excellence</span>
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
