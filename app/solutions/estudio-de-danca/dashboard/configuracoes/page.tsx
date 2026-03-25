"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { checkPasswordStrength, MIN_STRONG_PASSWORD_SCORE } from "@/lib/password-utils"
import { PasswordStrengthMeter } from "@/components/ui/password-strength-meter"
import {
  User, Building2, Bell, Shield, CreditCard, Palette, MessageSquare,
  Save, Loader2, Phone, Copy, Check, QrCode, Link2, Trophy,
  Package, Settings, Users, GraduationCap, ExternalLink, Music,
  Zap, CheckCircle, XCircle, Unlink, Coins,
} from "lucide-react"

// ─── tipos ────────────────────────────────────────────────────────────────────
interface StudioSettings {
  id?: string
  name: string
  email: string
  phone: string
  address: string
  cnpj: string
  modalities: string[]
  max_students_per_class: number
  cancellation_policy: string
  slug: string
}

const ALL_MODALITIES = [
  "Ballet", "Jazz", "Contemporâneo", "Funk", "Zumba", "Hip Hop",
  "Forró", "Sertanejo", "Dança de Salão", "Infantil", "Pole Dance",
  "Sapateado", "Flamenco", "Axé", "Street Dance", "K-Pop",
]

const TABS = [
  { id: "perfil",        label: "Perfil",            icon: User },
  { id: "estudio",       label: "Estúdio",            icon: Building2 },
  { id: "portais",       label: "Portais & Links",    icon: Link2 },
  { id: "notificacoes",  label: "Notificações",       icon: Bell },
  { id: "aparencia",     label: "Aparência",          icon: Palette },
  { id: "seguranca",     label: "Segurança",          icon: Shield },
  { id: "creditos",      label: "Créditos / Sessões", icon: Package },
  { id: "gamificacao",   label: "Gamificação",        icon: Trophy },
  { id: "integracoes",   label: "Integrações",        icon: Zap },
]

// ─── componente principal ─────────────────────────────────────────────────────
export default function DanceConfiguracoesPage() {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "perfil")
  const [saving, setSaving] = useState(false)

  // dados do usuário
  const [userId, setUserId] = useState("")
  const [studioId, setStudioId] = useState("")
  const [userForm, setUserForm] = useState({ name: "", email: "", role: "admin" })

  // dados do estúdio
  const [studio, setStudio] = useState<StudioSettings>({
    name: "", email: "", phone: "", address: "", cnpj: "",
    modalities: [], max_students_per_class: 20,
    cancellation_policy: "", slug: "",
  })

  // notificações
  const [notifs, setNotifs] = useState({
    emailNotifications: true,
    whatsappNotifications: true,
    classReminders: true,
    paymentReminders: true,
    evasionAlerts: true,
  })

  // aparência
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [lang, setLang] = useState<"pt" | "en">("pt")

  // segurança
  const [passwords, setPasswords] = useState({ current: "", next: "", confirm: "" })
  const [changingPw, setChangingPw] = useState(false)

  // plano
  const [usage, setUsage] = useState({ students: 0, teachers: 0, plan: "gratuito" })

  // créditos
  const [creditPackages, setCreditPackages] = useState<any[]>([])
  const [loadingCredits, setLoadingCredits] = useState(false)
  const [pdvCreditValue, setPdvCreditValue] = useState(70)
  const [newPkg, setNewPkg] = useState({ name: "", lessons_count: 10, price: 99, validity_days: 90 })

  // gamificação
  const DEFAULT_ACHIEVEMENTS = [
    { id: "frequencia_perfeita", label: "Frequência Perfeita", desc: "Nunca faltou em um mês", points: 100, icon: "Star" },
    { id: "primeiro_mes", label: "Primeiro Mês", desc: "Completou o primeiro mês", points: 50, icon: "Zap" },
    { id: "em_evolucao", label: "Em Evolução", desc: "5 semanas consecutivas", points: 75, icon: "TrendingUp" },
    { id: "destaque_turma", label: "Destaque da Turma", desc: "Melhor frequência da turma", points: 150, icon: "Award" },
    { id: "campea_mes", label: "Campeã do Mês", desc: "1º lugar no ranking mensal", points: 200, icon: "Crown" },
    { id: "seis_meses", label: "6 Meses de Dança", desc: "Meia ano sem parar", points: 300, icon: "Medal" },
  ]
  const [gamif, setGamif] = useState({
    enabled: true,
    points_per_checkin: 10,
    points_per_referral: 50,
    streak_bonus: 5,
    milestone_3: 30,
    milestone_6: 75,
    milestone_12: 180,
    achievements: DEFAULT_ACHIEVEMENTS,
  })

  // integrações
  const [waSettings, setWaSettings] = useState({ apiKey: "", instanceId: "", apiUrl: "" })
  const [stripeSettings, setStripeSettings] = useState({ publicKey: "", secretKey: "" })
  const [waStatus, setWaStatus] = useState<"connected" | "disconnected" | "connecting" | "error">("disconnected")
  const [stripeStatus, setStripeStatus] = useState<"connected" | "disconnected" | "connecting">("disconnected")

  // misc
  const [copied, setCopied] = useState(false)
  const [origin, setOrigin] = useState("")

  // ─── carga inicial ──────────────────────────────────────────────────────────
  useEffect(() => {
    setOrigin(window.location.origin)
    const tab = searchParams.get("tab")
    if (tab) setActiveTab(tab)

    const raw = localStorage.getItem("danceflow_user")
    if (!raw) return
    const user = JSON.parse(raw)
    const sId = user.studio_id || user.studioId
    setUserId(user.id || "")
    setStudioId(sId || "")
    setUserForm({ name: user.name || "", email: user.email || "", role: user.role || "admin" })

    if (sId) {
      loadStudio(sId)
      loadUsage(sId)
      loadCredits(sId)
      loadGamification(sId)
      loadIntegrations(sId)
    }
  }, [searchParams])

  const loadStudio = async (sId: string) => {
    const [{ data: st }, { data: settings }] = await Promise.all([
      supabase.from("studios").select("*").eq("id", sId).single(),
      supabase.from("studio_settings").select("*").eq("studio_id", sId),
    ])
    if (!st) return
    const extra: any = {}
    ;(settings || []).forEach((s: any) => { extra[s.setting_key] = s.setting_value })
    if (extra.pdv_credit_reais_per_unit) {
      setPdvCreditValue(parseFloat(extra.pdv_credit_reais_per_unit))
    }
    setStudio(prev => ({
      ...prev,
      id: st.id,
      name: st.name || "",
      slug: st.slug || "",
      email: extra.email || "",
      phone: extra.phone || "",
      address: extra.address || "",
      cnpj: extra.cnpj || "",
      modalities: extra.modalities ? JSON.parse(extra.modalities) : [],
      max_students_per_class: extra.max_students_per_class ? parseInt(extra.max_students_per_class) : 20,
      cancellation_policy: extra.cancellation_policy || "",
    }))
  }

  const loadUsage = async (sId: string) => {
    const [{ count: students }, { count: teachers }, { data: st }] = await Promise.all([
      supabase.from("students").select("*", { count: "exact", head: true }).eq("studio_id", sId),
      supabase.from("teachers").select("*", { count: "exact", head: true }).eq("studio_id", sId).eq("status", "active"),
      supabase.from("studios").select("plan").eq("id", sId).single(),
    ])
    setUsage({ students: students || 0, teachers: teachers || 0, plan: st?.plan || "gratuito" })
  }

  const loadCredits = async (sId: string) => {
    setLoadingCredits(true)
    try {
      const res = await fetch(`/api/dance-studio/packages?studioId=${encodeURIComponent(sId)}`)
      const json = await res.json()
      if (!res.ok) {
        toast({ title: "Erro ao carregar pacotes", description: json.error || "Falha ao buscar pacotes de créditos.", variant: "destructive" })
        setCreditPackages([])
      } else {
        setCreditPackages(json.packages || [])
      }
    } catch (e: any) {
      toast({ title: "Erro ao carregar pacotes", description: e.message, variant: "destructive" })
      setCreditPackages([])
    } finally {
      setLoadingCredits(false)
    }
  }

  const loadGamification = async (sId: string) => {
    const { data } = await supabase.from("studio_settings").select("*").eq("studio_id", sId)
    if (!data) return
    const map: any = {}
    data.forEach((s: any) => { map[s.setting_key] = s.setting_value })
    if (map.gamification_config) {
      try {
        const parsed = JSON.parse(map.gamification_config)
        setGamif(p => ({
          ...p,
          ...parsed,
          achievements: Array.isArray(parsed.achievements) && parsed.achievements.length > 0
            ? parsed.achievements
            : DEFAULT_ACHIEVEMENTS,
        }))
      } catch {}
    }
  }

  const loadIntegrations = async (sId: string) => {
    const { data } = await supabase.from("studio_api_keys").select("*").eq("studio_id", sId)
    if (!data) return
    const wa = data.find((k: any) => k.service_name === "whatsapp")
    const stripe = data.find((k: any) => k.service_name === "stripe")
    if (wa) {
      setWaSettings({ apiKey: wa.api_key || "", instanceId: wa.instance_id || "", apiUrl: wa.settings?.api_url || "" })
      setWaStatus(wa.status === "active" ? "connected" : "disconnected")
    }
    if (stripe) {
      setStripeSettings({ publicKey: stripe.settings?.public_key || "", secretKey: stripe.api_key || "" })
      setStripeStatus("connected")
    }
  }

  // ─── saves ──────────────────────────────────────────────────────────────────
  const saveProfile = async () => {
    setSaving(true)
    try {
      await supabase.auth.updateUser({ data: { name: userForm.name } })
      const raw = localStorage.getItem("danceflow_user")
      if (raw) {
        const u = JSON.parse(raw)
        localStorage.setItem("danceflow_user", JSON.stringify({ ...u, name: userForm.name }))
      }
      toast({ title: "Perfil salvo!" })
    } catch (e: any) {
      toast({ title: "Erro", description: e.message, variant: "destructive" })
    } finally { setSaving(false) }
  }

  const saveStudio = async () => {
    setSaving(true)
    try {
      await supabase.from("studios").update({ name: studio.name }).eq("id", studioId)
      const keys = ["email", "phone", "address", "cnpj", "max_students_per_class", "cancellation_policy"]
      const vals: any = { ...studio, modalities: JSON.stringify(studio.modalities) }
      await Promise.all([
        ...keys.map(k =>
          supabase.from("studio_settings").upsert(
            { studio_id: studioId, setting_key: k, setting_value: String(vals[k] ?? ""), updated_at: new Date().toISOString() },
            { onConflict: "studio_id, setting_key" }
          )
        ),
        supabase.from("studio_settings").upsert(
          { studio_id: studioId, setting_key: "modalities", setting_value: JSON.stringify(studio.modalities), updated_at: new Date().toISOString() },
          { onConflict: "studio_id, setting_key" }
        ),
      ])
      toast({ title: "Dados do estúdio salvos!" })
    } catch (e: any) {
      toast({ title: "Erro", description: e.message, variant: "destructive" })
    } finally { setSaving(false) }
  }

  const saveGamification = async () => {
    setSaving(true)
    try {
      await supabase.from("studio_settings").upsert(
        { studio_id: studioId, setting_key: "gamification_config", setting_value: JSON.stringify(gamif), updated_at: new Date().toISOString() },
        { onConflict: "studio_id, setting_key" }
      )
      toast({ title: "Configurações de gamificação salvas!" })
    } catch (e: any) {
      toast({ title: "Erro", description: e.message, variant: "destructive" })
    } finally { setSaving(false) }
  }

  const changePassword = async () => {
    if (passwords.next !== passwords.confirm) {
      toast({ title: "As senhas não coincidem", variant: "destructive" }); return
    }
    const { score } = checkPasswordStrength(passwords.next)
    if (score < MIN_STRONG_PASSWORD_SCORE) {
      toast({ title: "Senha muito fraca", variant: "destructive" }); return
    }
    setChangingPw(true)
    try {
      const { error } = await supabase.auth.updateUser({ password: passwords.next })
      if (error) throw error
      toast({ title: "Senha alterada com sucesso!" })
      setPasswords({ current: "", next: "", confirm: "" })
    } catch (e: any) {
      toast({ title: "Erro", description: e.message, variant: "destructive" })
    } finally { setChangingPw(false) }
  }

  const addCreditPackage = async () => {
    if (!studioId) {
      toast({ title: "Estúdio não identificado", description: "Recarregue a página e tente novamente logado como administrador do estúdio.", variant: "destructive" })
      return
    }
    try {
      const res = await fetch("/api/dance-studio/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studioId, ...newPkg }),
      })
      const json = await res.json()
      if (!res.ok) {
        toast({ title: "Erro ao criar pacote", description: json.error || "Não foi possível criar o pacote.", variant: "destructive" })
        return
      }
      toast({ title: "Pacote criado!" })
      setNewPkg({ name: "", lessons_count: 10, price: 99, validity_days: 90 })
      loadCredits(studioId)
    } catch (e: any) {
      toast({ title: "Erro ao criar pacote", description: e.message, variant: "destructive" })
    }
  }

  const deleteCreditPackage = async (id: string) => {
    if (!confirm("Excluir este pacote?")) return
    if (!studioId) return
    try {
      const res = await fetch("/api/dance-studio/packages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, studioId }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        toast({ title: "Erro ao excluir pacote", description: (json as any).error || "Não foi possível excluir o pacote.", variant: "destructive" })
        return
      }
      loadCredits(studioId)
    } catch (e: any) {
      toast({ title: "Erro ao excluir pacote", description: e.message, variant: "destructive" })
    }
  }

  const saveWhatsApp = async () => {
    setWaStatus("connecting")
    try {
      await supabase.from("studio_api_keys").upsert(
        { studio_id: studioId, service_name: "whatsapp", api_key: waSettings.apiKey, instance_id: waSettings.instanceId, status: "active", settings: { api_url: waSettings.apiUrl }, updated_at: new Date().toISOString() },
        { onConflict: "studio_id, service_name" }
      )
      setWaStatus("connected")
      toast({ title: "WhatsApp configurado!" })
    } catch (e: any) {
      setWaStatus("error")
      toast({ title: "Erro", description: e.message, variant: "destructive" })
    }
  }

  const saveStripe = async () => {
    setStripeStatus("connecting")
    try {
      await supabase.from("studio_api_keys").upsert(
        { studio_id: studioId, service_name: "stripe", api_key: stripeSettings.secretKey, status: "active", settings: { public_key: stripeSettings.publicKey }, updated_at: new Date().toISOString() },
        { onConflict: "studio_id, service_name" }
      )
      setStripeStatus("connected")
      toast({ title: "Stripe configurado!" })
    } catch (e: any) {
      setStripeStatus("connecting")
      toast({ title: "Erro", description: e.message, variant: "destructive" })
    }
  }

  const copyLink = async (link: string) => {
    await navigator.clipboard.writeText(link)
    setCopied(true)
    toast({ title: "Link copiado!" })
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleModality = (mod: string) =>
    setStudio(prev => ({
      ...prev,
      modalities: prev.modalities.includes(mod)
        ? prev.modalities.filter(m => m !== mod)
        : [...prev.modalities, mod],
    }))

  const statusIcon = (s: "connected" | "disconnected" | "connecting" | "error") => {
    if (s === "connected") return <CheckCircle className="w-4 h-4 text-green-500" />
    if (s === "error") return <XCircle className="w-4 h-4 text-[#e40014]" />
    if (s === "connecting") return <Loader2 className="w-4 h-4 animate-spin text-[#e40014]" />
    return <XCircle className="w-4 h-4 text-zinc-400" />
  }

  // ─── render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black dark:bg-black">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 px-1">
        <div className="w-9 h-9 rounded-xl bg-[#e40014] flex items-center justify-center shadow-lg shadow-red-600/20">
          <Settings className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight text-white dark:text-white">Configurações</h1>
          <p className="text-xs text-zinc-500">Gerencie seu estúdio e preferências</p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="overflow-x-auto pb-1 mb-6 -mx-1">
        <div className="flex gap-1 min-w-max px-1">
          {TABS.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all",
                  activeTab === tab.id
                    ? "bg-[#e40014] text-white shadow-md shadow-red-600/20"
                    : "text-zinc-500 dark:text-zinc-400 hover:bg-white/5 dark:hover:bg-white/5/5 hover:text-zinc-400 dark:hover:text-white"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── PERFIL ─────────────────────────────────────────────────────────────── */}
      {activeTab === "perfil" && (
        <div className="space-y-4 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><User className="w-4 h-4 text-[#e40014]" /> Informações Pessoais</CardTitle>
              <CardDescription>Gerencie suas informações de acesso e perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Nome</Label>
                <Input value={userForm.name} onChange={e => setUserForm({ ...userForm, name: e.target.value })} />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">E-mail</Label>
                <Input value={userForm.email} disabled className="opacity-60" />
                <p className="text-[11px] text-zinc-400">O e-mail não pode ser alterado aqui.</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Cargo</Label>
                <Select value={userForm.role} onValueChange={v => setUserForm({ ...userForm, role: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrador (Admin)</SelectItem>
                    <SelectItem value="finance">Financeiro</SelectItem>
                    <SelectItem value="teacher">Professor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-[#e40014] hover:bg-[#e40014]" onClick={saveProfile} disabled={saving}>
                {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                Salvar Perfil
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── ESTÚDIO ────────────────────────────────────────────────────────────── */}
      {activeTab === "estudio" && (
        <div className="space-y-4 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Building2 className="w-4 h-4 text-[#e40014]" /> Dados do Estúdio</CardTitle>
              <CardDescription>Informações públicas e administrativas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {(["name", "email", "phone", "address", "cnpj"] as const).map(field => (
                <div key={field} className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                    {{ name: "Nome do Estúdio", email: "E-mail", phone: "Telefone / WhatsApp", address: "Endereço", cnpj: "CNPJ" }[field]}
                  </Label>
                  <Input
                    value={(studio as any)[field]}
                    onChange={e => setStudio({ ...studio, [field]: e.target.value })}
                    placeholder={{ name: "Ex: Studio Ritmo", email: "contato@studio.com", phone: "(11) 99999-9999", address: "Rua das Flores, 123", cnpj: "00.000.000/0001-00" }[field]}
                  />
                </div>
              ))}
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Máx. Alunos por Turma</Label>
                <Input
                  type="number" min={1} max={200}
                  value={studio.max_students_per_class}
                  onChange={e => setStudio({ ...studio, max_students_per_class: parseInt(e.target.value) || 20 })}
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Política de Cancelamento</Label>
                <Textarea
                  rows={3}
                  value={studio.cancellation_policy}
                  onChange={e => setStudio({ ...studio, cancellation_policy: e.target.value })}
                  placeholder="Ex: Cancelamentos com menos de 2h de antecedência não são reembolsados..."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Music className="w-4 h-4 text-[#e40014]" /> Modalidades Oferecidas</CardTitle>
              <CardDescription>Selecione as modalidades de dança do seu estúdio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {ALL_MODALITIES.map(mod => (
                  <button
                    key={mod}
                    type="button"
                    onClick={() => toggleModality(mod)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-bold border transition-all",
                      studio.modalities.includes(mod)
                        ? "bg-[#e40014] text-white border-[#e40014] shadow-sm"
                        : "bg-white/5 dark:bg-white/5/5 text-zinc-400 dark:text-slate-300 border-white/10 dark:border-white/10 hover:border-[#e40014]"
                    )}
                  >
                    {mod}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button className="w-full bg-[#e40014] hover:bg-[#e40014]" onClick={saveStudio} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
            Salvar Dados do Estúdio
          </Button>
        </div>
      )}

      {/* ── PORTAIS & LINKS ─────────────────────────────────────────────────────── */}
      {activeTab === "portais" && (
        <div className="space-y-4 max-w-xl">
          {[
            { label: "Portal do Aluno", path: "/solutions/estudio-de-danca/student", icon: Users, color: "text-blue-500", desc: "Acesso de alunos para ver turmas, créditos e check-in" },
            { label: "Portal do Professor", path: "/solutions/estudio-de-danca/teacher", icon: GraduationCap, color: "text-red-", desc: "Acesso de professores para chamadas e turmas" },
            { label: "Registro (Novo Admin)", path: "/solutions/estudio-de-danca/register", icon: Building2, color: "text-[#e40014]", desc: "Página de cadastro de novo estúdio/admin" },
            { label: "Landing Page Pública", path: "/solutions/estudio-de-danca", icon: ExternalLink, color: "text-orange-500", desc: "Página de apresentação pública do sistema" },
          ].map(portal => {
            const Icon = portal.icon
            const link = `${origin}${portal.path}`
            return (
              <Card key={portal.path}>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5/5 flex items-center justify-center flex-shrink-0">
                    <Icon className={cn("w-5 h-5", portal.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm">{portal.label}</p>
                    <p className="text-xs text-zinc-500 mb-2">{portal.desc}</p>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-black dark:bg-white/5/5 border border-white/10 dark:border-white/10">
                      <code className="flex-1 text-xs font-mono text-zinc-400 dark:text-slate-300 truncate">{link}</code>
                      <Button size="icon" variant="ghost" className="h-6 w-6 flex-shrink-0" onClick={() => copyLink(link)}>
                        {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                      </Button>
                      <a href={portal.path} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="ghost" className="h-6 w-6 flex-shrink-0">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}

          {studio.slug && (
            <Card className="border-[#e40014] dark:border-[#e40014] bg-[#e40014] dark:bg-[#e40014]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-[#e40014] dark:text-[#e40014]">
                  <QrCode className="w-4 h-4" /> Link de Convite do Estúdio
                </CardTitle>
                <CardDescription>Compartilhe com alunos para se cadastrarem</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 dark:bg-white/5/5 border border-[#e40014] dark:border-[#e40014]">
                  <code className="flex-1 text-sm font-mono text-[#e40014] dark:text-[#e40014] truncate">
                    {origin}/s/{studio.slug}
                  </code>
                  <Button size="sm" variant="ghost" className="text-[#e40014]" onClick={() => copyLink(`${origin}/s/${studio.slug}`)}>
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <p className="text-xs text-zinc-400 mt-2">Código do estúdio: <strong className="text-[#e40014]">{studio.slug}</strong></p>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* ── NOTIFICAÇÕES ─────────────────────────────────────────────────────── */}
      {activeTab === "notificacoes" && (
        <div className="space-y-4 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Bell className="w-4 h-4 text-[#e40014]" /> Notificações Automáticas</CardTitle>
              <CardDescription>Configure quais alertas o sistema envia</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { key: "emailNotifications",    label: "Notificações por E-mail",       desc: "Receba avisos importantes no seu e-mail" },
                { key: "whatsappNotifications", label: "Notificações por WhatsApp",     desc: "Alertas via instância conectada" },
                { key: "classReminders",        label: "Lembretes de Aula",             desc: "Lembrete enviado 1h antes da aula para alunos" },
                { key: "paymentReminders",      label: "Cobranças e Vencimentos",       desc: "Avisa alunos com créditos zerados ou mensalidade atrasada" },
                { key: "evasionAlerts",         label: "Alerta de Evasão",             desc: "Avisa quando um aluno faltar 3x seguidas" },
              ].map(({ key, label, desc }) => (
                <div key={key} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-bold">{label}</p>
                    <p className="text-xs text-zinc-500">{desc}</p>
                  </div>
                  <Switch
                    checked={(notifs as any)[key]}
                    onCheckedChange={v => setNotifs(p => ({ ...p, [key]: v }))}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
          <Button className="w-full bg-[#e40014] hover:bg-[#e40014]" onClick={async () => {
            await supabase.from("studio_settings").upsert(
              { studio_id: studioId, setting_key: "notification_config", setting_value: JSON.stringify(notifs), updated_at: new Date().toISOString() },
              { onConflict: "studio_id, setting_key" }
            )
            toast({ title: "Notificações salvas!" })
          }}>
            <Save className="w-4 h-4 mr-2" /> Salvar Preferências
          </Button>
        </div>
      )}

      {/* ── APARÊNCIA ─────────────────────────────────────────────────────────── */}
      {activeTab === "aparencia" && (
        <div className="space-y-4 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Palette className="w-4 h-4 text-[#e40014]" /> Tema e Idioma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Tema</Label>
                <div className="grid grid-cols-3 gap-2">
                  {(["light", "dark", "system"] as const).map(t => (
                    <button
                      key={t}
                      onClick={() => { setTheme(t); document.documentElement.classList.toggle("dark", t === "dark") }}
                      className={cn(
                        "p-3 rounded-xl border text-sm font-bold transition-all",
                        theme === t ? "bg-[#e40014] text-white border-[#e40014]" : "bg-white/5 dark:bg-white/5/5 border-white/10 dark:border-white/10 text-zinc-400 dark:text-slate-300"
                      )}
                    >
                      {{ light: "☀️ Claro", dark: "🌙 Escuro", system: "💻 Sistema" }[t]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Idioma</Label>
                <div className="grid grid-cols-2 gap-2">
                  {(["pt", "en"] as const).map(l => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={cn(
                        "p-3 rounded-xl border text-sm font-bold transition-all",
                        lang === l ? "bg-[#e40014] text-white border-[#e40014]" : "bg-white/5 dark:bg-white/5/5 border-white/10 dark:border-white/10 text-zinc-400 dark:text-slate-300"
                      )}
                    >
                      {{ pt: "🇧🇷 Português", en: "🇺🇸 English" }[l]}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── SEGURANÇA ─────────────────────────────────────────────────────────── */}
      {activeTab === "seguranca" && (
        <div className="space-y-4 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Shield className="w-4 h-4 text-[#e40014]" /> Alterar Senha</CardTitle>
              <CardDescription>Mantenha sua conta segura com uma senha forte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Senha Atual</Label>
                <Input type="password" value={passwords.current} onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))} />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Nova Senha</Label>
                <Input type="password" value={passwords.next} onChange={e => setPasswords(p => ({ ...p, next: e.target.value }))} />
                {passwords.next && <PasswordStrengthMeter password={passwords.next} />}
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Confirmar Nova Senha</Label>
                <Input type="password" value={passwords.confirm} onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))} />
                {passwords.confirm && passwords.confirm !== passwords.next && (
                  <p className="text-xs text-[#e40014]">As senhas não coincidem</p>
                )}
              </div>
              <Button className="w-full bg-[#e40014] hover:bg-[#e40014]" onClick={changePassword} disabled={changingPw || !passwords.next}>
                {changingPw ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Shield className="w-4 h-4 mr-2" />}
                Alterar Senha
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── CRÉDITOS / SESSÕES ────────────────────────────────────────────────── */}
      {activeTab === "creditos" && (
        <div className="space-y-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Coins className="w-4 h-4 text-[#e40014]" /> Valor de Troca (PDV)</CardTitle>
              <CardDescription>Defina quanto vale 1 crédito ao ser usado como pagamento na loja/balcão</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end gap-4">
                <div className="space-y-1.5 flex-1">
                  <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Valor de 1 Crédito (R$)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">R$</span>
                    <Input
                      type="number"
                      step={0.01}
                      className="pl-9 font-bold"
                      value={pdvCreditValue}
                      onChange={e => setPdvCreditValue(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </div>
                <Button
                  className="bg-[#e40014] hover:bg-[#e40014]"
                  disabled={saving}
                  onClick={async () => {
                    setSaving(true)
                    try {
                      await supabase.from("studio_settings").upsert(
                        { studio_id: studioId, setting_key: "pdv_credit_reais_per_unit", setting_value: String(pdvCreditValue), updated_at: new Date().toISOString() },
                        { onConflict: "studio_id, setting_key" }
                      )
                      toast({ title: "Valor de troca atualizado!" })
                    } catch (e: any) {
                      toast({ title: "Erro ao salvar", description: e.message, variant: "destructive" })
                    } finally { setSaving(false) }
                  }}
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                  Salvar Valor
                </Button>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                <strong>Dica:</strong> Se você deixar este campo vazio ou não configurado, o sistema tentará calcular automaticamente a taxa baseada no pacote de menor custo. Estipular um valor fixo aqui garante previsibilidade nas vendas do PDV.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Package className="w-4 h-4 text-[#e40014]" /> Pacotes de Créditos / Sessões</CardTitle>
              <CardDescription>Configure os pacotes que os alunos podem comprar</CardDescription>
            </CardHeader>
            <CardContent>
              {loadingCredits ? (
                <div className="py-8 flex justify-center"><Loader2 className="w-5 h-5 animate-spin text-[#e40014]" /></div>
              ) : creditPackages.length === 0 ? (
                <p className="text-center text-sm text-zinc-500 py-6">Nenhum pacote cadastrado ainda.</p>
              ) : (
                <div className="space-y-2 mb-4">
                  {creditPackages.map(pkg => (
                    <div key={pkg.id} className="flex items-center justify-between p-3 rounded-xl border bg-white/5 dark:bg-white/5/5">
                      <div>
                        <p className="font-bold text-sm">{pkg.name || `Pacote ${pkg.lessons_count} aulas`}</p>
                        <p className="text-xs text-zinc-500">{pkg.lessons_count} sessões · válido por {pkg.validity_days || 90} dias</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-black text-[#e40014]">R$ {Number(pkg.price).toFixed(2)}</p>
                        <Button variant="ghost" size="sm" className="text-[#e40014] hover:text-[#e40014] h-7 px-2 text-xs" onClick={() => deleteCreditPackage(pkg.id)}>
                          Remover
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t pt-4 mt-2">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 mb-3">Novo Pacote</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1 col-span-2">
                    <Label className="text-xs">Nome do Pacote</Label>
                    <Input placeholder="Ex: Pacote Mensal" value={newPkg.name} onChange={e => setNewPkg(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Número de Créditos</Label>
                    <Input
                      type="number"
                      min={1}
                      value={newPkg.lessons_count}
                      onChange={e => setNewPkg(p => ({ ...p, lessons_count: parseInt(e.target.value) || 1 }))}
                    />
                    <p className="text-[10px] text-zinc-400">
                      Cada aula consome 1 crédito. Esses créditos também podem ser usados como forma de pagamento no PDV.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Preço (R$)</Label>
                    <Input type="number" min={0} step={0.01} value={newPkg.price} onChange={e => setNewPkg(p => ({ ...p, price: parseFloat(e.target.value) || 0 }))} />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Validade (dias)</Label>
                    <Input type="number" min={1} value={newPkg.validity_days} onChange={e => setNewPkg(p => ({ ...p, validity_days: parseInt(e.target.value) || 30 }))} />
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-[#e40014] hover:bg-[#e40014]" onClick={addCreditPackage} disabled={!newPkg.lessons_count || !newPkg.price}>
                      Adicionar Pacote
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── GAMIFICAÇÃO ───────────────────────────────────────────────────────── */}
      {activeTab === "gamificacao" && (
        <div className="space-y-4 max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base"><Trophy className="w-4 h-4 text-red-" /> Configuração da Gamificação</CardTitle>
              <CardDescription>Configure pontos e recompensas para engajar seus alunos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-red- dark:bg-[#e40014] border border-red- dark:border-[#e40014]">
                <div>
                  <p className="font-bold text-sm">Gamificação Ativa</p>
                  <p className="text-xs text-zinc-500">Ativar ranking, pontos e conquistas para alunos</p>
                </div>
                <Switch checked={gamif.enabled} onCheckedChange={v => setGamif(p => ({ ...p, enabled: v }))} />
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Pontuação</p>
                {[
                  { key: "points_per_checkin",  label: "Pontos por Check-in",      desc: "Cada presença confirmada via QR" },
                  { key: "points_per_referral", label: "Pontos por Indicação",     desc: "Quando um aluno indicado se cadastra" },
                  { key: "streak_bonus",        label: "Bônus de Sequência",       desc: "Pontos extras por semana sem faltar" },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center justify-between gap-4 p-3 rounded-xl border bg-white/5 dark:bg-white/5/5">
                    <div>
                      <p className="text-sm font-bold">{label}</p>
                      <p className="text-xs text-zinc-500">{desc}</p>
                    </div>
                    <Input
                      type="number" min={0} className="w-20 text-center font-bold"
                      value={(gamif as any)[key]}
                      onChange={e => setGamif(p => ({ ...p, [key]: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Marcos de Conquista (meses)</p>
                {[
                  { key: "milestone_3",  label: "🥉 Marco de 3 meses" },
                  { key: "milestone_6",  label: "🥈 Marco de 6 meses" },
                  { key: "milestone_12", label: "🥇 Marco de 1 ano" },
                ].map(({ key, label }) => (
                  <div key={key} className="flex items-center justify-between gap-4 p-3 rounded-xl border bg-white/5 dark:bg-white/5/5">
                    <p className="text-sm font-bold">{label} <span className="font-normal text-zinc-500">(pts)</span></p>
                    <Input
                      type="number" min={0} className="w-20 text-center font-bold"
                      value={(gamif as any)[key]}
                      onChange={e => setGamif(p => ({ ...p, [key]: parseInt(e.target.value) || 0 }))}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Conquistas Personalizadas</p>
                <p className="text-xs text-zinc-500">Edite nome, descrição e pontos de cada conquista exibida no ranking.</p>
                {(gamif as any).achievements?.map((ach: any, i: number) => (
                  <div key={ach.id || i} className="p-3 rounded-xl border bg-white/5 dark:bg-white/5/5 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <Input
                        placeholder="Nome da conquista"
                        value={ach.label}
                        onChange={e => {
                          const next = [...((gamif as any).achievements || [])]
                          next[i] = { ...next[i], label: e.target.value }
                          setGamif(p => ({ ...p, achievements: next }))
                        }}
                        className="font-bold"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#e40014] hover:text-[#e40014] hover:bg-[#e40014]"
                        onClick={() => {
                          const next = ((gamif as any).achievements || []).filter((_: any, j: number) => j !== i)
                          setGamif(p => ({ ...p, achievements: next }))
                        }}
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </div>
                    <Input
                      placeholder="Descrição"
                      value={ach.desc}
                      onChange={e => {
                        const next = [...((gamif as any).achievements || [])]
                        next[i] = { ...next[i], desc: e.target.value }
                        setGamif(p => ({ ...p, achievements: next }))
                      }}
                      className="text-sm"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500">Pontos:</span>
                      <Input
                        type="number"
                        min={0}
                        className="w-20 text-center"
                        value={ach.points}
                        onChange={e => {
                          const next = [...((gamif as any).achievements || [])]
                          next[i] = { ...next[i], points: parseInt(e.target.value) || 0 }
                          setGamif(p => ({ ...p, achievements: next }))
                        }}
                      />
                    </div>
                  </div>
                )) || null}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setGamif(p => ({
                    ...p,
                    achievements: [...((p as any).achievements || []), { id: `custom_${Date.now()}`, label: "Nova Conquista", desc: "Descrição", points: 50, icon: "Star" }],
                  }))}
                >
                  + Adicionar Conquista
                </Button>
              </div>
            </CardContent>
          </Card>
          <Button className="w-full bg-red- hover:bg-red- text-white font-bold" onClick={saveGamification} disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
            Salvar Configurações de Gamificação
          </Button>
        </div>
      )}

      {/* ── INTEGRAÇÕES ────────────────────────────────────────────────────────── */}
      {activeTab === "integracoes" && (
        <div className="space-y-4 max-w-xl">
          {/* WhatsApp */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <div className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-red-" /> WhatsApp (Evolution API)</div>
                <div className="flex items-center gap-1.5 text-xs">
                  {statusIcon(waStatus)}
                  <span className="font-bold text-zinc-500 capitalize">{waStatus === "connected" ? "Conectado" : waStatus === "connecting" ? "Verificando..." : "Desconectado"}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">URL da API</Label>
                <Input placeholder="https://api.evolution.example.com" value={waSettings.apiUrl} onChange={e => setWaSettings(p => ({ ...p, apiUrl: e.target.value }))} />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Instance ID</Label>
                <Input placeholder="meu-studio" value={waSettings.instanceId} onChange={e => setWaSettings(p => ({ ...p, instanceId: e.target.value }))} />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">API Key</Label>
                <Input type="password" value={waSettings.apiKey} onChange={e => setWaSettings(p => ({ ...p, apiKey: e.target.value }))} />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-red- hover:bg-red- text-white" onClick={saveWhatsApp}>
                  {waStatus === "connecting" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Phone className="w-4 h-4 mr-2" />}
                  Salvar e Testar
                </Button>
                {waStatus === "connected" && (
                  <Button variant="outline" size="icon" title="Desconectar" onClick={async () => {
                    await supabase.from("studio_api_keys").update({ status: "inactive" }).eq("studio_id", studioId).eq("service_name", "whatsapp")
                    setWaStatus("disconnected")
                    toast({ title: "WhatsApp desconectado" })
                  }}>
                    <Unlink className="w-4 h-4 text-[#e40014]" />
                  </Button>
                )}
              </div>
              <p className="text-xs text-zinc-400">Para parear o QR Code, vá em <strong>Sidebar → WhatsApp</strong> após salvar as chaves.</p>
            </CardContent>
          </Card>

          {/* Stripe */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <div className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-[#e40014]" /> Stripe (Pagamentos)</div>
                <div className="flex items-center gap-1.5 text-xs">
                  {statusIcon(stripeStatus as any)}
                  <span className="font-bold text-zinc-500">{stripeStatus === "connected" ? "Configurado" : stripeStatus === "connecting" ? "Salvando..." : "Não configurado"}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Chave Pública (pk_live_ / pk_test_)</Label>
                <Input placeholder="pk_live_..." value={stripeSettings.publicKey} onChange={e => setStripeSettings(p => ({ ...p, publicKey: e.target.value }))} />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-zinc-500">Chave Secreta (sk_live_ / sk_test_)</Label>
                <Input type="password" placeholder="sk_live_..." value={stripeSettings.secretKey} onChange={e => setStripeSettings(p => ({ ...p, secretKey: e.target.value }))} />
              </div>
              <Button className="w-full bg-[#e40014] hover:bg-[#e40014]" onClick={saveStripe}>
                {stripeStatus === "connecting" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CreditCard className="w-4 h-4 mr-2" />}
                Salvar Chaves Stripe
              </Button>
              <p className="text-xs text-zinc-400">Use chaves de <strong>test</strong> para homologação e <strong>live</strong> para produção.</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
