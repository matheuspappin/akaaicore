"use client"

import { useState, useEffect, useCallback } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users, GraduationCap, Calendar, DollarSign, TrendingUp,
  Plus, ArrowRight, Music, Copy, UserPlus, Trophy,
  Loader2, Link2, RefreshCw, CheckCheck, AlertCircle,
  Clock, ChevronRight, Video,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { getLocalUser } from "@/lib/constants/storage-keys"

interface InviteCodeCardProps {
  type: 'teacher' | 'student'
  label: string
  description: string
  color: string
  borderColor: string
  titleColor: string
  buttonColor: string
  registerPath?: string
}

function InviteCodeCard({ type, label, description, color, borderColor, titleColor, buttonColor, registerPath = "/solutions/estudio-de-danca/register" }: InviteCodeCardProps) {
  const { toast } = useToast()
  const [inviteCode, setInviteCode] = useState("")
  const [loading, setLoading] = useState(true)
  const [regenerating, setRegenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  const loadCode = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/dance-studio/studio/invite-code", { credentials: "include" })
      const data = await res.json()
      const code = type === 'teacher' ? data.teacher_invite_code : data.student_invite_code
      if (code) setInviteCode(code)
    } catch {
      setInviteCode("—")
    } finally {
      setLoading(false)
    }
  }, [type])

  useEffect(() => { loadCode() }, [loadCode])

  const handleCopy = () => {
    if (!inviteCode || inviteCode === "—") return
    navigator.clipboard.writeText(inviteCode)
    setCopied(true)
    toast({ title: "Código copiado!", description: `Compartilhe com o ${label.toLowerCase()} para que se vincule ao estúdio.` })
    setTimeout(() => setCopied(false), 2500)
  }

  const handleCopyLink = () => {
    if (!inviteCode || inviteCode === "—") return
    const origin = typeof window !== "undefined" ? window.location.origin : ""
    const link = `${origin}${registerPath}?role=${type}&code=${inviteCode}`
    navigator.clipboard.writeText(link)
    setCopiedLink(true)
    toast({ title: "Link copiado!", description: `Envie este link para o ${label.toLowerCase()} criar a conta e já entrar vinculado.` })
    setTimeout(() => setCopiedLink(false), 2500)
  }

  const handleRegenerate = async () => {
    if (!confirm(`Gerar um novo código invalidará o código atual de ${label}. Continuar?`)) return
    setRegenerating(true)
    try {
      const res = await fetch("/api/dance-studio/studio/invite-code", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type }),
      })
      const data = await res.json()
      if (data.invite_code) {
        setInviteCode(data.invite_code)
        toast({ title: "Novo código gerado com sucesso!" })
      }
    } catch {
      toast({ title: "Erro ao regenerar código", variant: "destructive" })
    } finally {
      setRegenerating(false)
    }
  }

  return (
    <Card className={cn("border shadow-sm border-white/10 bg-[#0a0a0a]")}>
      <CardHeader className="pb-3">
        <CardTitle className={cn("text-base font-bold flex items-center gap-2 text-white")}>
          <Link2 className="w-4 h-4" />
          Código de Convite — {label}
        </CardTitle>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{description}</p>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" />
            Carregando código...
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-0.5">Código</p>
              <p className="font-mono text-2xl font-black text-white tracking-[0.3em]">
                {inviteCode || "—"}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                size="icon"
                variant="outline"
                className={cn("h-10 w-10 rounded-xl transition-all border-white/10 hover:bg-white/5/5 bg-black", copied && "bg-emerald-500/10 border-emerald-500/50 text-emerald-500")}
                onClick={handleCopy}
                title="Copiar código"
              >
                {copied ? <CheckCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
              <Button
                size="icon"
                variant="outline"
                className={cn("h-10 w-10 rounded-xl transition-all border-white/10 hover:bg-white/5/5 bg-black", copiedLink && "bg-emerald-500/10 border-emerald-500/50 text-emerald-500")}
                onClick={handleCopyLink}
                title="Copiar link"
              >
                {copiedLink ? <CheckCheck className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-10 w-10 rounded-xl border-white/10 hover:bg-white/5/5 bg-black"
                onClick={handleRegenerate}
                disabled={regenerating}
                title="Gerar novo código"
              >
                <RefreshCw className={cn("w-4 h-4 text-zinc-400", regenerating && "animate-spin")} />
              </Button>
            </div>
          </div>
        )}
        <p className="text-xs text-zinc-400 mt-3">
          Envie o link (recomendado) ou o código. Quem já tem conta pode acessar <span className="font-bold text-white">Meu Perfil → Estúdio Vinculado</span> e inserir o código.
        </p>
      </CardContent>
    </Card>
  )
}

interface DashboardStats {
  alunos: number
  professores: number
  turmas: number
  faturamento: number
  faturamentoGrowth: number
  turmasDeHoje: Array<{
    id: string
    name: string
    dance_style: string | null
    teacherName: string
    slots: Array<{ day: string; time: string; end_time: string | null }>
  }>
}

export default function DanceStudioDashboard() {
  const [user, setUser] = useState<any>(null)
  const [studioId, setStudioId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    alunos: 0,
    professores: 0,
    turmas: 0,
    faturamento: 0,
    faturamentoGrowth: 0,
    turmasDeHoje: [],
  })
  const { toast } = useToast()

  const loadStats = useCallback(async (sid: string) => {
    try {
      setError(null)
      const res = await fetch(`/api/dance-studio/dashboard/stats?studioId=${encodeURIComponent(sid)}`, {
        credentials: "include",
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Erro ao carregar estatísticas")
      setStats({
        alunos: data.alunos ?? 0,
        professores: data.professores ?? 0,
        turmas: data.turmas ?? 0,
        faturamento: data.faturamento ?? 0,
        faturamentoGrowth: data.faturamentoGrowth ?? 0,
        turmasDeHoje: data.turmasDeHoje ?? [],
      })
    } catch (e: any) {
      setError(e.message)
      setStats((prev) => ({ ...prev, turmasDeHoje: [] }))
    }
  }, [])

  useEffect(() => {
    let cleanupFn: (() => void) | undefined

    async function load() {
      const { data: { user: authUser } } = await supabase.auth.getUser()
      setUser(authUser)

      const stored = getLocalUser("estudio-de-danca")
      const sid = stored?.studio_id ?? stored?.studioId ?? authUser?.user_metadata?.studio_id

      if (sid) {
        setStudioId(sid)
        await loadStats(sid)

        const channel = supabase
          .channel(`dashboard-stats-${sid}`)
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "students",
              filter: `studio_id=eq.${sid}`,
            },
            () => loadStats(sid)
          )
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "classes",
              filter: `studio_id=eq.${sid}`,
            },
            () => loadStats(sid)
          )
          .on(
            "postgres_changes",
            {
              event: "INSERT",
              schema: "public",
              table: "attendance",
              filter: `studio_id=eq.${sid}`,
            },
            () => loadStats(sid)
          )
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "payments",
              filter: `studio_id=eq.${sid}`,
            },
            () => loadStats(sid)
          )
          .subscribe()

        cleanupFn = () => { supabase.removeChannel(channel) }
      } else {
        setError("Estúdio não identificado. Faça login novamente.")
      }
      setLoading(false)
    }
    load()
    return () => { cleanupFn?.() }
  }, [loadStats])

  useEffect(() => {
    const handler = () => {
      if (document.visibilityState === "visible" && studioId) loadStats(studioId)
    }
    document.addEventListener("visibilitychange", handler)
    return () => document.removeEventListener("visibilitychange", handler)
  }, [studioId, loadStats])

  const statCards = [
    {
      label: "Alunos Ativos",
      value: loading ? "..." : String(stats.alunos),
      icon: Users,
      color: "text-[#e40014]",
      bg: "bg-[#e40014]/10",
      border: "border-l-[#e40014]",
      href: "/solutions/estudio-de-danca/dashboard/alunos"
    },
    {
      label: "Professores",
      value: loading ? "..." : String(stats.professores),
      icon: GraduationCap,
      color: "text-white/80",
      bg: "bg-white/5",
      border: "border-l-zinc-800",
      href: "/solutions/estudio-de-danca/dashboard/professores"
    },
    {
      label: "Turmas Ativas",
      value: loading ? "..." : String(stats.turmas),
      icon: Calendar,
      color: "text-white/80",
      bg: "bg-white/5",
      border: "border-l-zinc-800",
      href: "/solutions/estudio-de-danca/dashboard/turmas"
    },
    {
      label: "Faturamento (mês)",
      value: loading ? "..." : `R$ ${stats.faturamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      sub: stats.faturamentoGrowth !== 0 && !loading && (
        <span className={cn(
          "text-xs font-semibold mt-0.5 block",
          stats.faturamentoGrowth >= 0 ? "text-emerald-500" : "text-[#e40014]"
        )}>
          {stats.faturamentoGrowth >= 0 ? "+" : ""}{stats.faturamentoGrowth}% em relação ao mês anterior
        </span>
      ),
      icon: DollarSign,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-l-emerald-500",
      href: "/solutions/estudio-de-danca/dashboard/financeiro"
    },
  ]

  const quickActions = [
    { label: "Aulas ao Vivo", sub: "Monitore quem está no estúdio agora", href: "/solutions/estudio-de-danca/dashboard/ao-vivo", icon: Video, color: "bg-black border border-white/10 hover:border-[#e40014]" },
    { label: "Novo Aluno", sub: "Matricular aluno", href: "/solutions/estudio-de-danca/dashboard/alunos", icon: UserPlus, color: "bg-[#e40014] hover:bg-[#ff6568]" },
    { label: "Nova Turma", sub: "Criar turma de dança", href: "/solutions/estudio-de-danca/dashboard/turmas", icon: Calendar, color: "bg-black border border-white/10 hover:border-[#e40014]" },
    { label: "Financeiro", sub: "Cobranças e pagamentos", href: "/solutions/estudio-de-danca/dashboard/financeiro", icon: DollarSign, color: "bg-black border border-white/10 hover:border-[#e40014]" },
  ]

  return (
    <div className="space-y-8">
      {/* Error Banner */}
      {error && (
          <Card className="border-[#e40014] dark:border-[#e40014] bg-[#e40014] dark:bg-[#e40014]">
          <CardContent className="py-4 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#e40014] flex-shrink-0" />
            <p className="text-sm font-medium text-[#e40014] dark:text-[#e40014]">{error}</p>
            {studioId && (
              <Button
                size="sm"
                variant="outline"
                className="ml-auto border-[#e40014] text-[#e40014] hover:bg-[#e40014]"
                onClick={() => loadStats(studioId)}
              >
                <RefreshCw className="w-4 h-4 mr-1" />
                Tentar novamente
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Olá, {user?.user_metadata?.name || "Admin"} 👋
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">
            Painel de Controle — Estúdio de Dança
          </p>
        </div>
        <Button type="button" className="bg-[#e40014] hover:bg-[#ff6568] text-white font-bold rounded-xl shadow-lg shadow-red-600/20" asChild>
          <Link href="/solutions/estudio-de-danca/dashboard/alunos">
            <Plus className="w-4 h-4 mr-2" />
            Novo Aluno
          </Link>
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action) => (
          <Link key={action.href} href={action.href}>
            <Card className={cn("text-white shadow-lg cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]", action.color)}>
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5/10 flex items-center justify-center">
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base">{action.label}</p>
                    <p className="text-xs text-white/70">{action.sub}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 opacity-60" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className={cn(
              "border-l-4 border-t-0 border-r-0 border-b-0 border-white/10 bg-black shadow-lg hover:shadow-xl transition-all cursor-pointer",
              loading && "animate-pulse",
              stat.border
            )}>
              <CardContent className="p-5">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", stat.bg)}>
                  <stat.icon className={cn("w-5 h-5", stat.color)} />
                </div>
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mt-1">{stat.label}</p>
                {"sub" in stat && stat.sub}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Turmas de Hoje */}
        <Card className="bg-[#0a0a0a] shadow-sm border border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-white/50" />
                Turmas de Hoje
              </CardTitle>
              <CardDescription className="text-zinc-500">Aulas programadas para hoje</CardDescription>
            </div>
            <Link href="/solutions/estudio-de-danca/dashboard/turmas">
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/5 font-bold text-xs">
                Ver todas <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12 gap-2 text-zinc-400">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm font-medium">Carregando...</span>
              </div>
            ) : stats.turmasDeHoje.length === 0 ? (
              <div className="text-center py-10">
                <Music className="w-12 h-12 mx-auto mb-3 text-zinc-600" />
                <p className="font-medium text-zinc-400 mb-2">
                  {stats.turmas === 0
                    ? "Nenhuma turma cadastrada ainda"
                    : "Nenhuma turma programada para hoje"}
                </p>
                <Button type="button" size="sm" className="bg-[#e40014] hover:bg-[#ff6568] text-white font-bold rounded-xl" asChild>
                  <Link href="/solutions/estudio-de-danca/dashboard/turmas">
                    <Plus className="w-4 h-4 mr-1" /> {stats.turmas === 0 ? "Criar primeira turma" : "Ver turmas"}
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-0.5">
                {stats.turmasDeHoje.map((t) => (
                  <Link
                    key={t.id}
                    href={`/solutions/estudio-de-danca/dashboard/turmas/${t.id}/chamada`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                      <Clock className="w-5 h-5 text-zinc-400 group-hover:text-[#e40014] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white truncate">{t.name}</p>
                      <p className="text-xs text-zinc-400">
                        {t.slots.map((s) => `${s.time}`).join(", ")} · {t.teacherName}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white flex-shrink-0" />
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Convites e Gamificação */}
        <div className="space-y-4">
          {/* Destaque Gamificação */}
          <Card className="bg-[#0a0a0a] border border-white/10 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#e40014]/20 to-transparent pointer-events-none" />
            <CardContent className="p-5 flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#e40014]/10 flex items-center justify-center flex-shrink-0 border border-[#e40014]/20">
                <Trophy className="w-6 h-6 text-[#e40014]" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-white">Gamificação de Alunos</p>
                <p className="text-sm text-zinc-400">Rankings, conquistas e engajamento</p>
              </div>
              <Button type="button" size="sm" variant="outline" className="font-bold rounded-xl border-white/10 text-white hover:bg-white/5/10" asChild>
                <Link href="/solutions/estudio-de-danca/dashboard/gamificacao">Ver</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Código de Convite — Professor */}
          <InviteCodeCard
            type="teacher"
            label="Professor"
            description="Compartilhe com professores para que se vinculem ao estúdio."
            color="bg-[#0a0a0a]"
            borderColor="border border-white/10"
            titleColor="text-white"
            buttonColor="bg-white/5/10 hover:bg-white/5/20"
          />

          {/* Código de Convite — Aluno */}
          <InviteCodeCard
            type="student"
            label="Aluno"
            description="Compartilhe com alunos para que se vinculem ao estúdio."
            color="bg-[#0a0a0a]"
            borderColor="border border-white/10"
            titleColor="text-white"
            buttonColor="bg-[#e40014] hover:bg-[#ff6568]"
          />

          {/* Clientes (CRM) */}
          <Card className="bg-[#0a0a0a] border border-white/10 shadow-lg">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5/5 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-zinc-400" />
              </div>
              <div>
                <p className="font-bold text-white">Clientes (CRM)</p>
                <p className="text-sm text-zinc-500">Quem comprou/visitou</p>
              </div>
              <Link href="/solutions/estudio-de-danca/dashboard/leads" className="ml-auto">
                <Button type="button" size="sm" variant="outline" className="border-white/10 text-zinc-300 hover:text-white hover:bg-white/5/5 font-bold rounded-xl">
                  Ver
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
