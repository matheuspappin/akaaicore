"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ModuleGuard } from "@/components/providers/module-guard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Zap, Award, TrendingUp, Users, Medal, Crown, Settings, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { getLocalUser } from "@/lib/constants/storage-keys"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Star,
  Zap,
  TrendingUp,
  Award,
  Crown,
  Medal,
}

interface RankingItem {
  pos: number
  student_id: string
  name: string
  points: number
  badge: string
}

interface AchievementItem {
  id?: string
  label: string
  desc: string
  points: number
  icon?: string
}

interface GamificationData {
  ranking: RankingItem[]
  achievements: AchievementItem[]
  config: { enabled: boolean }
  stats: {
    studentsActive: number
    achievementsUnlocked: number
    totalPoints: number
    engagementRate: number
  }
}

export default function GamificacaoPage() {
  const [studioId, setStudioId] = useState<string | null>(null)
  const [data, setData] = useState<GamificationData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = getLocalUser("estudio-de-danca")
    const sid = user?.studio_id || user?.studioId || null
    setStudioId(sid)
  }, [])

  useEffect(() => {
    if (!studioId) {
      setLoading(false)
      return
    }
    setLoading(true)
    fetch(`/api/dance-studio/gamification?studioId=${encodeURIComponent(studioId)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) throw new Error(d.error)
        setData(d)
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false))
  }, [studioId])

  if (loading) {
    return (
      <ModuleGuard module="gamification" showFullError>
        <div className="flex items-center justify-center min-h-[300px]">
          <Loader2 className="w-8 h-8 animate-spin text-[#e40014]" />
        </div>
      </ModuleGuard>
    )
  }

  if (!studioId) {
    return (
      <ModuleGuard module="gamification" showFullError>
        <div className="space-y-6">
          <h1 className="text-2xl font-black text-white dark:text-white tracking-tight flex items-center gap-2">
            <Trophy className="w-6 h-6 text-red-" />
            Gamificação
          </h1>
          <Card className="bg-red- dark:bg-[#e40014] border-red- dark:border-[#e40014]">
            <CardContent className="p-6 text-center">
              <p className="text-zinc-400 dark:text-zinc-400">Estúdio não identificado. Faça login novamente.</p>
            </CardContent>
          </Card>
        </div>
      </ModuleGuard>
    )
  }

  const ranking = data?.ranking ?? []
  const achievements = data?.achievements ?? []
  const stats = data?.stats ?? {
    studentsActive: 0,
    achievementsUnlocked: 0,
    totalPoints: 0,
    engagementRate: 0,
  }

  const colorByPos = (pos: number) =>
    pos === 1 ? "text-red-" : pos === 2 ? "text-zinc-400" : pos === 3 ? "text-red-" : "text-zinc-500"

  return (
    <ModuleGuard module="gamification" showFullError>
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white dark:text-white tracking-tight flex items-center gap-2">
            <Trophy className="w-6 h-6 text-red-" />
            Gamificação
          </h1>
          <p className="text-zinc-500 text-sm mt-1">Rankings, conquistas e engajamento dos alunos</p>
        </div>
        <Link href="/solutions/estudio-de-danca/dashboard/configuracoes?tab=gamificacao">
          <Button variant="outline" size="sm" className="gap-2">
            <Settings className="w-4 h-4" />
            Personalizar
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ranking */}
        <Card className="bg-white/5 dark:bg-black/50 border border-white/10 dark:border-white/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-white dark:text-white flex items-center gap-2 text-base">
              <Trophy className="w-5 h-5 text-red-" />
              Ranking Geral
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {ranking.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-black dark:bg-white/5/5">
                <Trophy className="w-12 h-12 mx-auto mb-2 text-slate-300 dark:text-zinc-400" />
                <p className="text-sm font-medium text-zinc-400 dark:text-zinc-400">Nenhum aluno com pontos ainda</p>
                <p className="text-xs text-zinc-500 mt-1">Os pontos aparecem quando os alunos conquistam badges ou fazem check-in</p>
              </div>
            ) : (
              ranking.map((item) => (
                <div
                  key={item.student_id}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-xl transition-all",
                    item.pos <= 3
                      ? "bg-gradient-to-r from-red- to-transparent dark:from-red-/10 dark:to-transparent border border-red- dark:border-[#e40014]"
                      : "bg-black dark:bg-white/5/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl w-8 text-center">{item.badge}</span>
                    <div className="w-9 h-9 rounded-full bg-[#e40014] flex items-center justify-center font-black text-[#e40014] text-sm">
                      {item.name?.[0]?.toUpperCase() || "?"}
                    </div>
                    <span className="font-bold text-zinc-800 dark:text-white text-sm">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 text-red-" />
                    <span className={cn("font-black text-sm", colorByPos(item.pos))}>{item.points} pts</span>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Conquistas */}
        <Card className="bg-white/5 dark:bg-black/50 border border-white/10 dark:border-white/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-white dark:text-white flex items-center gap-2 text-base">
              <Award className="w-5 h-5 text-[#e40014]" />
              Conquistas Disponíveis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {achievements.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-black dark:bg-white/5/5">
                <Award className="w-12 h-12 mx-auto mb-2 text-slate-300 dark:text-zinc-400" />
                <p className="text-sm font-medium text-zinc-400 dark:text-zinc-400">Configure as conquistas em Personalizar</p>
              </div>
            ) : (
              achievements.map((ach, i) => {
                const IconComp = (ach.icon && ICON_MAP[ach.icon]) || [Star, Zap, TrendingUp, Award, Crown, Medal][i % 6]
                const colors = [
                  "text-red- bg-red- dark:bg-[#e40014]",
                  "text-[#e40014] bg-[#e40014] dark:bg-[#e40014]",
                  "text-red- bg-red- dark:bg-[#e40014]",
                  "text-[#e40014] bg-[#e40014] dark:bg-[#e40014]",
                  "text-red- bg-red- dark:bg-[#e40014]",
                ]
                const color = colors[i % colors.length]
                return (
                  <div key={ach.label + i} className="flex items-center justify-between p-3 rounded-xl bg-black dark:bg-white/5/5">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", color)}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-zinc-800 dark:text-white text-sm">{ach.label}</p>
                        <p className="text-xs text-zinc-500">{ach.desc}</p>
                      </div>
                    </div>
                    <Badge className="bg-red- text-red- dark:bg-[#e40014] dark:text-red- border-0 text-xs font-black">
                      +{ach.points}
                    </Badge>
                  </div>
                )
              })
            )}
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Alunos Ativos", value: String(stats.studentsActive), icon: Users, color: "text-[#e40014] bg-[#e40014] dark:bg-[#e40014]" },
          { label: "Conquistas Desbloqueadas", value: String(stats.achievementsUnlocked), icon: Award, color: "text-[#e40014] bg-[#e40014] dark:bg-[#e40014]" },
          { label: "Pontos Distribuídos", value: stats.totalPoints >= 1000 ? `${(stats.totalPoints / 1000).toFixed(1)}k` : String(stats.totalPoints), icon: Star, color: "text-red- bg-red- dark:bg-[#e40014]" },
          { label: "Taxa de Engajamento", value: `${stats.engagementRate}%`, icon: TrendingUp, color: "text-red- bg-red- dark:bg-[#e40014]" },
        ].map((s) => (
          <Card key={s.label} className="bg-white/5 dark:bg-black/50 border border-white/10 dark:border-white/10">
            <CardContent className="p-5 text-center">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3", s.color)}>
                <s.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-black text-white dark:text-white">{s.value}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 mt-1">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </ModuleGuard>
  )
}
