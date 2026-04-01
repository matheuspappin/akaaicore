"use client"

import { Stethoscope,  useState, useEffect } from "react"
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
  ArrowRight, CreditCard, QrCode, 
  DollarSign, Layout, 
  ChevronRight, Menu, X, Truck, Stethoscope as StethoscopeIcon,
  ClipboardCheck, HardHat, AlertTriangle, FileText, CheckCircle2, MapPin,   TrendingUp, FileDown, Download,
  Users, Calendar, MessageSquare, Bot, Box, Trophy, UserPlus, ShoppingBag, Building2, Layers, ClipboardList,
  PencilRuler, History, FilePlus, Shield, Activity, SmilePlus
} from "lucide-react"
import QRCode from "react-qr-code"
import { cn } from "@/lib/utils"
import { OFFICIAL_LOGO } from "@/config/branding"

// --- Components ---

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
    { name: "App do Doutor", href: "#tech-app" },
    { name: "Portal do Paciente", href: "#client-portal" },
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
        <Link href="/solutions/dentist/landing" className="flex items-center gap-2.5 font-bold text-2xl tracking-tight text-white hover:opacity-90 transition-opacity">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-600 to-cyan-500 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
              <Stethoscope className="w-5 h-5 fill-current" />
            </div>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-cyan-200/90">
            AKAAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-black">Smile</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="px-4 py-2 text-sm font-bold text-white/70 hover:text-blue-400 transition-all relative group uppercase tracking-widest"
            >
              {item.name}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/solutions/dentist/login" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="h-10 px-5 rounded-xl font-semibold text-white/90 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-200">
              Entrar
            </Button>
          </Link>
          <Link href="/solutions/dentist/register">
            <Button size="sm" className="hidden sm:flex h-10 px-6 rounded-xl bg-white text-slate-900 hover:bg-white/95 font-bold shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_4px_14px_-2px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_8px_20px_-2px_rgba(239,68,68,0.3)] hover:scale-[1.02] transition-all duration-200 border-0">
              Criar Conta Grátis
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden h-10 w-10 rounded-xl hover:bg-white/10 text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            className="md:hidden absolute top-full left-0 w-full bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 font-semibold text-white">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="flex items-center justify-between group" onClick={() => setMobileMenuOpen(false)}>
                  {item.name} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyan-500" />
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link href="/solutions/dentist/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full h-11 rounded-xl border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold">Entrar</Button>
                </Link>
                <Link href="/solutions/dentist/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full h-11 rounded-xl bg-white text-slate-900 hover:bg-white/95 font-bold border-0 shadow-lg">Criar Conta</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden text-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-sm font-semibold text-blue-200 mb-10 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_20px_-4px_rgba(59,130,246,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Nova Versão 2.0: Agenda Inteligente e Prontuário Eletrônico
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter mb-8 leading-[0.95]"
          >
            Gestão Inteligente de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400">
              Clínicas Odontológicas
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Controle de agendas, prontuários digitais, financeiro e relacionamento com pacientes em uma única plataforma. Transforme sua clínica.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link href="/solutions/dentist/register">
              <Button size="lg" className="h-14 px-10 text-lg rounded-2xl bg-white text-slate-900 hover:bg-white/95 font-bold shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_16px_40px_-8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_20px_50px_-8px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 border-0 group">
                Começar Grátis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-2xl border border-white/25 bg-white/5 hover:bg-white/10 hover:border-white/40 font-semibold text-white backdrop-blur-sm transition-all duration-200">
              Ver Demonstração
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<'agenda' | 'prontuario'>('agenda')

  return (
    <section id="tech-app" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Tecnologia na palma da mão do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Dentista</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            O aplicativo que revoluciona sua rotina de atendimentos. Esqueça o papel e tenha tudo digitalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
              
              <div className="w-full h-full bg-slate-50 pt-10 pb-4 px-4 flex flex-col relative">
                {activeTab === 'agenda' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full">
                    <div className="bg-white p-4 rounded-2xl shadow-sm mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-800 font-bold">
                            <Calendar className="w-5 h-5 text-cyan-600" /> Hoje
                        </div>
                        <Badge className="bg-cyan-500/90 text-white border-none rounded-lg px-2.5 py-1 text-[10px] font-bold">Agenda</Badge>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-l-blue-500">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-sm text-slate-800">Ana Silva - Revisão</h4>
                                <span className="text-xs font-bold text-blue-600">09:00</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                <SmilePlus className="w-3 h-3 text-cyan-500" /> Limpeza e Profilaxia
                            </div>
                            <Button size="sm" className="h-8 text-xs bg-blue-500 hover:bg-blue-400 text-white w-full rounded-xl font-bold transition-all">Iniciar Atendimento</Button>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-l-slate-300 opacity-60">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-sm text-slate-800">Carlos Mendes - Consulta</h4>
                                <span className="text-xs font-bold text-slate-500">10:30</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <SmilePlus className="w-3 h-3 text-slate-400" /> Avaliação Ortodôntica
                            </div>
                        </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'prontuario' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">AS</div>
                            <div>
                                <h3 className="font-bold text-sm text-slate-800">Ana Silva</h3>
                                <p className="text-xs text-slate-500">Paciente desde 2023</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-2xl shadow-sm mb-3">
                        <h4 className="font-bold text-sm text-slate-800 mb-2 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-rose-500" /> Anamnese
                        </h4>
                        <p className="text-xs text-slate-600">Alérgica a penicilina. Hipertensa controlada.</p>
                    </div>
                    
                    <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm">
                        <h4 className="font-bold text-sm text-slate-800 mb-3 flex items-center gap-2">
                            <ClipboardCheck className="w-4 h-4 text-emerald-500" /> Evolução (Hoje)
                        </h4>
                        <div className="text-xs text-slate-600 space-y-2">
                            <p><strong>Procedimento:</strong> Limpeza e profilaxia.</p>
                            <p><strong>Observações:</strong> Leve gengivite na região anterior inferior. Orientada sobre uso do fio dental.</p>
                            <p><strong>Próxima consulta:</strong> 6 meses.</p>
                        </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            {[
              { id: 'agenda', title: 'Agenda Inteligente', desc: 'Visualize e gerencie seus horários com facilidade.', icon: Calendar },
              { id: 'prontuario', title: 'Prontuário Eletrônico', desc: 'Histórico completo, anamnese e evolução na palma da mão.', icon: FileText },
              { id: 'odontograma', title: 'Odontograma Digital', desc: 'Registre procedimentos diretamente no esquema dentário.', icon: SmilePlus }
            ].map((feature) => (
              <div 
                key={feature.id}
                onClick={() => feature.id !== 'odontograma' && setActiveTab(feature.id as 'agenda' | 'prontuario')}
                className={cn(
                  "p-6 rounded-2xl cursor-pointer transition-all border group backdrop-blur-xl",
                  activeTab === feature.id 
                    ? "border-blue-500/40 bg-blue-500/5 shadow-lg shadow-blue-500/10" 
                    : "border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-blue-500/20",
                  feature.id === 'odontograma' && "opacity-50 cursor-not-allowed"
                )}
              >
                <div className="flex gap-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", activeTab === feature.id ? "bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30" : "bg-slate-700/80 text-slate-400")}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={cn("text-xl font-bold mb-2", activeTab === feature.id ? "text-white" : "text-slate-300")}>{feature.title}</h3>
                    <p className="text-slate-300 text-sm">{feature.desc}</p>
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

function ClientPortalMockup() {
  return (
    <section id="client-portal" className="py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-5 py-2 mb-4 rounded-2xl uppercase tracking-widest text-[10px] font-black shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">Portal do Paciente</Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Experiência digital para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500">Pacientes</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Permita que seus pacientes agendem consultas, acessem receitas e histórico de pagamentos.
          </p>
        </div>
        <div className="grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
              <div className="w-full h-full bg-slate-50 pt-10 pb-4 px-4 flex flex-col relative">
                <div className="flex flex-col h-full">
                  <div className="bg-slate-950 p-4 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden mb-4">
                    <div className="bg-slate-800 p-4 flex items-center justify-between border-b border-slate-700">
                        <span className="font-bold text-sm text-white">Meu Sorriso</span>
                        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">PAC</div>
                    </div>
                    <div className="p-8 bg-slate-900 space-y-6">
                        <div className="bg-cyan-800/20 border border-cyan-700/50 p-4 rounded-xl flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-cyan-500 shrink-0" />
                            <p className="text-sm font-bold text-cyan-300">Consulta Confirmada: Amanhã às 14:00</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-800 p-4 rounded-xl text-center">
                                <p className="text-3xl font-black text-emerald-400">2</p>
                                <p className="text-[10px] uppercase font-bold text-slate-400">Receitas</p>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-xl text-center">
                                <p className="text-3xl font-black text-cyan-400">1</p>
                                <p className="text-[10px] uppercase font-bold text-slate-400">Fatura Aberta</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
<Button variant="outline" className="bg-slate-800 hover:bg-slate-700 border-slate-600 gap-2 text-white rounded-xl font-medium transition-colors text-xs p-0"><FileDown className="w-4 h-4" /> Baixar Receita</Button>
                                            <Button variant="outline" className="bg-slate-800 hover:bg-slate-700 border-slate-600 gap-2 text-white rounded-xl font-medium transition-colors text-xs p-0"><CreditCard className="w-4 h-4" /> Pagar Fatura</Button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            {[
              { id: 'scheduling', title: 'Agendamento Online', desc: 'Seus pacientes marcam consultas 24/7.', icon: Calendar },
              { id: 'records', title: 'Acesso a Receitas', desc: 'Receitas e atestados disponíveis no celular.', icon: FileText },
              { id: 'payments', title: 'Pagamentos Online', desc: 'Envie links de pagamento para procedimentos.', icon: CreditCard }
            ].map((feature) => (
              <div 
                key={feature.id}
                className="p-6 rounded-2xl transition-all border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:border-cyan-400/40"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-emerald-600 text-white">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-slate-300 text-sm">{feature.desc}</p>
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

function ArchitectPortalMockup() {
  return null; // Removido para clínica odontológica
}

function AdminDashboardMockup() {
  const modules = [
    { label: 'Dashboard', icon: Layout, color: "bg-blue-500", shadow: "shadow-blue-500/20", description: "Visão geral de métricas, faturamento e atendimentos em tempo real." },
    { label: 'Pacientes', icon: Users, color: "bg-indigo-500", shadow: "shadow-indigo-500/20", description: "Cadastro completo com histórico clínico e financeiro." },
    { label: 'Agenda', icon: Calendar, color: "bg-cyan-500", shadow: "shadow-cyan-500/20", description: "Gestão de horários, faltas e confirmações automáticas." },
    { label: 'Financeiro', icon: DollarSign, color: "bg-emerald-500", shadow: "shadow-emerald-500/20", description: "Fluxo de caixa, comissionamento e emissão de boletos." },
    { label: 'Estoque', icon: Box, color: "bg-blue-500", shadow: "shadow-blue-500/20", description: "Controle de materiais de consumo e instrumentais." },
    { label: 'WhatsApp', icon: MessageSquare, color: "bg-green-500", shadow: "shadow-green-500/20", description: "Comunicação direta com pacientes para confirmação de consultas." },
    { label: 'Chat IA', icon: Bot, color: "bg-purple-500", shadow: "shadow-purple-500/20", description: "Assistente inteligente para suporte a pacientes e triagem." },
    { label: 'CRM', icon: UserPlus, color: "bg-blue-600", shadow: "shadow-blue-600/20", description: "Gestão de orçamentos e relacionamento pós-venda." },
    { label: 'Prontuário', icon: FileText, color: "bg-teal-500", shadow: "shadow-teal-500/20", description: "Anamnese, evolução clínica e odontograma digital." },
    { label: 'Multi-clínica', icon: Layers, color: "bg-violet-500", shadow: "shadow-violet-500/20", description: "Controle centralizado para franquias ou redes de clínicas." },
  ]

  return (
    <section id="management" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-5 py-2 mb-4 rounded-2xl uppercase tracking-widest text-[10px] font-black shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">Visão do Gestor</Badge>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Gestão <span className="text-cyan-400">Completa</span></h2>
                  <p className="text-slate-300 max-w-xl mx-auto">Uma central de comando poderosa com todos os módulos integrados para a sua clínica.</p>
                </motion.div>
            </div>
            <div className="max-w-6xl mx-auto rounded-[2.5rem] shadow-2xl overflow-hidden relative backdrop-blur-xl bg-slate-900/60 border border-white/10">
                <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-cyan-500" />
                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        </div>
                        <span className="font-bold text-sm ml-4 opacity-50">clinic-admin-v2.exe</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-slate-400">Status: <span className="text-emerald-400 uppercase font-black">Online</span></span>
                        <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center font-bold text-xs shadow-lg shadow-cyan-600/20">ADM</div>
                    </div>
                </div>
                <div className="p-8 bg-white/5 rounded-b-[2.5rem]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {[
                            { label: "Faturamento", value: "R$ 48.250", trend: "+12%", color: "text-emerald-500", icon: TrendingUp },
                            { label: "Consultas Hoje", value: "14/18", trend: "Em andamento", color: "text-blue-500", icon: Calendar },
                            { label: "Faltas", value: "2", trend: "11%", color: "text-cyan-500", icon: AlertTriangle },
                            { label: "Orçamentos", value: "6", trend: "Pendentes", color: "text-blue-500", icon: FileText },
                        ].map((stat, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-slate-300 text-[10px] font-bold uppercase tracking-wider">{stat.label}</div>
                                    <stat.icon className={cn("w-4 h-4", stat.color)} />
                                </div>
                                <div className="text-2xl font-black text-white">{stat.value}</div>
                                <div className={cn("text-[10px] font-bold mt-1 uppercase tracking-tight", stat.color)}>{stat.trend}</div>
                            </motion.div>
                        ))}
                    </div>
                    <TooltipProvider>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                            {modules.map((mod, i) => (
                                <Tooltip key={i}>
                                    <TooltipTrigger asChild>
                                        <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 + i * 0.05 }} whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }} className="flex flex-col items-center gap-3 group cursor-pointer">
                                            <div className={cn("w-16 h-16 sm:w-20 sm:h-20 rounded-[1.75rem] flex items-center justify-center text-white transition-all duration-300 group-hover:rotate-6", mod.color, mod.shadow, "shadow-lg group-hover:shadow-2xl")}>
                                                <mod.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                                            </div>
                                            <span className="text-[10px] sm:text-xs font-bold text-slate-300 text-center uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">{mod.label}</span>
                                        </motion.div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" className="max-w-[200px] text-center bg-slate-900 text-white border-slate-800 p-3 rounded-xl shadow-xl">
                                        <p className="font-bold mb-1 text-cyan-400 uppercase tracking-tighter text-[10px]">{mod.label}</p>
                                        <p className="text-[11px] leading-tight text-slate-300">{mod.description}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </TooltipProvider>
                </div>
                <div className="absolute bottom-0 right-0 p-8 opacity-5 pointer-events-none">
                    <StethoscopeIcon className="w-64 h-64 rotate-12" />
                </div>
            </div>
        </div>
    </section>
  )
}

function FeatureGrid() {
  const features = [
    { title: "Prontuário Digital", description: "Histórico completo, anamnese e evolução.", icon: FileText, color: "from-blue-500 to-cyan-400" },
    { title: "Odontograma", description: "Esquema dentário interativo para procedimentos.", icon: SmilePlus, color: "from-emerald-500 to-teal-400" },
    { title: "WhatsApp Integrado", description: "Lembretes automáticos de consultas.", icon: MessageSquare, color: "from-green-500 to-emerald-500" },
    { title: "Financeiro", description: "Controle de recebimentos e comissões.", icon: DollarSign, color: "from-blue-600 to-indigo-500" }
  ]

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-5 py-2 mb-6 rounded-2xl uppercase tracking-[0.2em] text-[10px] font-black shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">Recursos</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Tudo em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400">só lugar</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
              A tecnologia mais avançada para impulsionar a eficiência da sua clínica odontológica.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="group rounded-[2.5rem] border border-white/10 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden backdrop-blur-xl bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/20 hover:shadow-blue-500/10">
              <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform duration-500", feature.color)}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                <p className="text-slate-300 text-base leading-relaxed group-hover:text-slate-200 transition-colors">{feature.description}</p>
                <div className="mt-8 flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const highlights = [
    { icon: "🔧", label: "Implantação completa", desc: "Nossa equipe configura tudo para sua clínica" },
    { icon: "🎓", label: "Treinamento incluído", desc: "Capacitação da equipe e dentistas" },
    { icon: "📞", label: "Suporte dedicado", desc: "Atendimento direto com especialistas" },
    { icon: "⚙️", label: "Personalização total", desc: "Sistema adaptado ao seu fluxo" },
  ]

  return (
    <section id="pricing" className="py-24 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl font-black mb-4">Implementação Personalizada</h2>
        <p className="text-slate-300 text-lg mb-16 max-w-2xl mx-auto">
          O AKAAI Smile é implantado com suporte especializado. Entre em contato para que nossa equipe entenda as necessidades da sua clínica e apresente a melhor solução.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/20 hover:bg-white/[0.07] text-left transition-all">
              <span className="text-3xl">{h.icon}</span>
              <div>
                <p className="font-bold text-white mb-1">{h.label}</p>
                <p className="text-slate-300 text-sm">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative rounded-3xl p-10 overflow-hidden backdrop-blur-xl border border-blue-500/30 bg-gradient-to-br from-blue-600/20 via-cyan-600/15 to-cyan-600/15">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          <div className="relative">
            <h3 className="text-2xl font-black text-white mb-3">Pronto para modernizar sua clínica?</h3>
            <p className="text-slate-300 mb-8">
              Fale com nosso time e receba uma demonstração exclusiva do AKAAI Smile para seu consultório.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="https://wa.me/5511999999999?text=Olá! Tenho interesse no AKAAI Smile para minha clínica." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/95 text-slate-900 font-bold h-14 px-8 rounded-2xl transition-all duration-200 shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_12px_40px_-8px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_16px_50px_-8px_rgba(59,130,246,0.2)] hover:scale-[1.02] group">
                <StethoscopeIcon className="w-5 h-5 group-hover:rotate-[-8deg] transition-transform" />
                Falar com um especialista
              </a>
              <a href="mailto:contato@workflowpro.com.br" className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 hover:bg-white/10 hover:border-white/40 font-bold h-14 px-8 rounded-2xl transition-all duration-200 backdrop-blur-sm text-white">
                Solicitar demonstração
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="text-slate-400 py-12 border-t border-white/10 text-center backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 mb-6 font-bold text-xl text-white">
        <StethoscopeIcon className="w-6 h-6 text-blue-500" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400">AKAAI Smile</span>
      </div>
      <p className="mb-8 text-xs max-w-md mx-auto text-slate-400">A plataforma líder em gestão para clínicas odontológicas no Brasil.</p>
      <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest mb-8">
        <Link href="#">Termos</Link><Link href="#">Privacidade</Link><Link href="#">Contato</Link>
      </div>
      <p className="text-[10px] text-slate-500 mb-10">© 2026 akaaicore Builder.</p>

      <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-3">
        <Link href="/home" className="flex items-center gap-2.5 group">
          <img src={OFFICIAL_LOGO} alt="AKAAI HUB" className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity object-contain" />
          <span className="font-black text-white/60 text-sm tracking-tight group-hover:text-white/90 transition-colors">AKAAI <span className="text-white/40">HUB</span></span>
        </Link>
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Powered by AKAAI CORE</span>
        <p className="text-[9px] text-white/30 font-mono uppercase tracking-wider">Also Known As Artificial Intelligence HUB</p>
      </div>
    </footer>
  )
}

export default function DentistLandingPage() {
  useEffect(() => {
    document.body.classList.add('scrollbar-sidebar-dark')
    return () => { document.body.classList.remove('scrollbar-sidebar-dark') }
  }, [])
  return (
    <div className="min-h-screen relative font-sans selection:bg-cyan-500/30 overflow-x-hidden bg-black">
      {/* Fundo escuro com gradiente suave */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <InteractiveDemo />
        <FeatureGrid />
        <AdminDashboardMockup />
        <ClientPortalMockup />
        <ArchitectPortalMockup />
        <PricingSection />
        <Footer />
      </div>
    </div>
  )
}
