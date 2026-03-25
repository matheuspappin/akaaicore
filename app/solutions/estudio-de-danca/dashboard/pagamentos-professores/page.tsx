"use client"

import { useState, useEffect, useCallback } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Wallet, Loader2, CheckCircle2, Clock, ArrowDownToLine, Settings2, RefreshCw, Banknote, GraduationCap, List, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const PAYMENT_SCHEDULES = [
  { value: "manual", label: "Manual (liberar quando quiser)" },
  { value: "weekly", label: "Semanal" },
  { value: "monthly", label: "Mensal (dia fixo)" },
]

export default function PagamentosProfessoresPage() {
  const [studioId, setStudioId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [entries, setEntries] = useState<any[]>([])
  const [withdrawals, setWithdrawals] = useState<any[]>([])
  const [totals, setTotals] = useState({ pending: 0, released: 0, withdrawn: 0 })
  const [config, setConfig] = useState({ amount: 0, paymentSchedule: "manual", paymentDayOfMonth: 5 })
  const [configSaving, setConfigSaving] = useState(false)
  const [configAmount, setConfigAmount] = useState("")
  const [configSchedule, setConfigSchedule] = useState("manual")
  const [configDayOfMonth, setConfigDayOfMonth] = useState("5")
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [releasing, setReleasing] = useState(false)
  const [markingPaid, setMarkingPaid] = useState<string | null>(null)
  const [showConfig, setShowConfig] = useState(false)
  const [professores, setProfessores] = useState<any[]>([])
  const [isManualDialogOpen, setIsManualDialogOpen] = useState(false)
  const [manualForm, setManualForm] = useState({ professional_id: "", amount: "", description: "" })
  const [isSavingManual, setIsSavingManual] = useState(false)
  const { toast } = useToast()

  const load = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()
    const sid = user?.user_metadata?.studio_id ?? null
    setStudioId(sid)
    if (!sid) { setLoading(false); return }

    try {
      const [payRes, configRes, withdrawalsRes, profRes] = await Promise.all([
        fetch(`/api/dance-studio/teacher-payments?studioId=${sid}`, { credentials: "include" }),
        fetch(`/api/dance-studio/teacher-compensation?studioId=${sid}`, { credentials: "include" }),
        fetch(`/api/dance-studio/teacher-withdrawals?studioId=${sid}`, { credentials: "include" }),
        fetch(`/api/dance-studio/teachers?studioId=${sid}`),
      ])
      const payData = await payRes.json()
      const configData = await configRes.json()
      const withdrawalsData = await withdrawalsRes.json()
      const profData = await profRes.json()
      setEntries(payData.entries || [])
      setTotals(payData.totals || { pending: 0, released: 0, withdrawn: 0 })
      setConfig({
        amount: configData.amount || 0,
        paymentSchedule: configData.paymentSchedule || "manual",
        paymentDayOfMonth: configData.paymentDayOfMonth || 5,
      })
      setConfigAmount(String(configData.amount || ""))
      setConfigSchedule(configData.paymentSchedule || "manual")
      setConfigDayOfMonth(String(configData.paymentDayOfMonth || 5))
      setWithdrawals(withdrawalsData || [])
      setProfessores(Array.isArray(profData) ? profData : [])
    } catch {
      toast({ title: "Erro ao carregar", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }, [toast])

  useEffect(() => { load() }, [load])

  const handleSaveConfig = async () => {
    if (!studioId) return
    const amt = parseFloat(configAmount)
    if (isNaN(amt) || amt < 0) {
      toast({ title: "Valor inválido", variant: "destructive" })
      return
    }
    setConfigSaving(true)
    try {
      const res = await fetch("/api/dance-studio/teacher-compensation", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studioId,
          amount: amt,
          paymentSchedule: configSchedule,
          paymentDayOfMonth: parseInt(configDayOfMonth, 10) || 5,
        }),
        credentials: "include",
      })
      if (!res.ok) throw new Error((await res.json()).error)
      setConfig({ ...config, amount: amt, paymentSchedule: configSchedule, paymentDayOfMonth: parseInt(configDayOfMonth, 10) || 5 })
      setShowConfig(false)
      toast({ title: "Configuração salva!" })
    } catch (e: any) {
      toast({ title: "Erro ao salvar", description: e.message, variant: "destructive" })
    } finally {
      setConfigSaving(false)
    }
  }

  const handleRelease = async () => {
    if (!studioId || selectedIds.size === 0) return
    setReleasing(true)
    try {
      const res = await fetch("/api/dance-studio/teacher-payments/release", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studioId, entryIds: Array.from(selectedIds) }),
        credentials: "include",
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Erro ao liberar")
      setSelectedIds(new Set())
      toast({ title: "Pagamentos liberados!", description: `${data.released_count || 0} lançamento(s) liberado(s).` })
      load()
    } catch (e: any) {
      toast({ title: "Erro ao liberar", description: e.message, variant: "destructive" })
    } finally {
      setReleasing(false)
    }
  }

  const handleMarkAsPaid = async (withdrawalId: string) => {
    if (!studioId) return
    setMarkingPaid(withdrawalId)
    try {
      const res = await fetch("/api/dance-studio/teacher-withdrawals", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studioId, withdrawalId, status: "completed" }),
        credentials: "include",
      })
      if (!res.ok) throw new Error((await res.json()).error)
      toast({ title: "Pagamento lançado!", description: "Marcado como pago. Após transferir via PIX, o professor será notificado." })
      load()
    } catch (e: any) {
      toast({ title: "Erro ao lançar", description: e.message, variant: "destructive" })
    } finally {
      setMarkingPaid(null)
    }
  }

  const handleCreateManualPayment = async () => {
    if (!studioId || !manualForm.professional_id || !manualForm.amount) return
    setIsSavingManual(true)
    try {
      const res = await fetch("/api/dance-studio/teacher-payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studioId,
          professional_id: manualForm.professional_id,
          amount: parseFloat(manualForm.amount.replace(',', '.')),
          description: manualForm.description
        }),
        credentials: "include",
      })
      if (!res.ok) throw new Error((await res.json()).error)
      toast({ title: "Lançamento criado!" })
      setManualForm({ professional_id: "", amount: "", description: "" })
      setIsManualDialogOpen(false)
      load()
    } catch (e: any) {
      toast({ title: "Erro ao criar lançamento", description: e.message, variant: "destructive" })
    } finally {
      setIsSavingManual(false)
    }
  }

  const toggleSelect = (id: string, status: string) => {
    if (status !== "pending") return
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleSelectAll = () => {
    const pending = entries.filter((e: any) => e.status === "pending")
    if (selectedIds.size === pending.length) setSelectedIds(new Set())
    else setSelectedIds(new Set(pending.map((e: any) => e.id)))
  }

  const formatDate = (d: string) => new Date(d).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })
  const formatMoney = (v: number) => `R$ ${Number(v).toFixed(2).replace(".", ",")}`

  // Agrupar entries por professor para Aulas x Valores
  const byTeacher = entries.reduce((acc: Record<string, { name: string; entries: any[]; total: number }>, e: any) => {
    const pid = e.professional_id
    const name = (e.professionals as any)?.name || "—"
    if (!acc[pid]) acc[pid] = { name, entries: [], total: 0 }
    acc[pid].entries.push(e)
    acc[pid].total += Number(e.amount)
    return acc
  }, {})

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-[#e40014]" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white dark:text-white tracking-tight flex items-center gap-2">
            <Wallet className="w-6 h-6 text-[#e40014]" />
            Pagamentos Professores
          </h1>
          <p className="text-zinc-500 text-sm mt-1">Valor por aula, liberação, saques e lançamento manual</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setIsManualDialogOpen(true)} className="rounded-xl font-bold bg-[#e40014] text-[#e40014] border-[#e40014] hover:bg-[#e40014] hover:text-[#e40014]">
            <Plus className="w-4 h-4 mr-2" />
            Lançar Pagamento
          </Button>
          <Button variant="outline" onClick={() => setShowConfig(!showConfig)} className="rounded-xl font-bold">
            <Settings2 className="w-4 h-4 mr-2" />
            Configurar
          </Button>
          <Button variant="outline" onClick={load} className="rounded-xl font-bold">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {showConfig && (
        <Card className="border-[#e40014] dark:border-[#e40014]">
          <CardHeader>
            <CardTitle className="text-lg">Configurações</CardTitle>
            <CardDescription>Valor por aula e quando os pagamentos serão liberados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-6 items-end">
              <div className="min-w-[140px]">
                <Label>Valor por aula (R$)</Label>
                <Input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Ex: 50,00"
                  value={configAmount}
                  onChange={(e) => setConfigAmount(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="min-w-[200px]">
                <Label>Quando pagar</Label>
                <Select value={configSchedule} onValueChange={setConfigSchedule}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PAYMENT_SCHEDULES.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {configSchedule === "monthly" && (
                <div className="min-w-[120px]">
                  <Label>Dia do mês</Label>
                  <Select value={configDayOfMonth} onValueChange={setConfigDayOfMonth}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
                        <SelectItem key={d} value={String(d)}>{d}º</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <Button onClick={handleSaveConfig} disabled={configSaving} className="bg-[#e40014] hover:bg-[#e40014]">
              {configSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Salvar
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-bold uppercase">Congelado</span>
            </div>
            <p className="text-2xl font-black mt-1">{formatMoney(totals.pending)}</p>
            <p className="text-xs text-zinc-500 mt-0.5">Aguardando liberação</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-">
              <ArrowDownToLine className="w-5 h-5" />
              <span className="text-sm font-bold uppercase">Liberado</span>
            </div>
            <p className="text-2xl font-black mt-1">{formatMoney(totals.released)}</p>
            <p className="text-xs text-zinc-500 mt-0.5">Disponível para saque</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-zinc-500">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-bold uppercase">Sacado</span>
            </div>
            <p className="text-2xl font-black mt-1">{formatMoney(totals.withdrawn)}</p>
            <p className="text-xs text-zinc-500 mt-0.5">Já pago ao professor</p>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isManualDialogOpen} onOpenChange={setIsManualDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Lançamento Manual</DialogTitle>
            <DialogDescription>Crie um lançamento de pagamento manual (ex: Salário fixo, bônus, ajuda de custo).</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Professor *</Label>
              <Select value={manualForm.professional_id} onValueChange={(v) => setManualForm(f => ({ ...f, professional_id: v }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o professor" />
                </SelectTrigger>
                <SelectContent>
                  {professores.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.name} {p.contract_type === 'clt' ? '(CLT)' : p.contract_type === 'fixed' ? '(Fixo)' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Valor (R$) *</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={manualForm.amount}
                onChange={(e) => setManualForm(f => ({ ...f, amount: e.target.value }))}
              />
            </div>
            <div>
              <Label>Descrição (Opcional)</Label>
              <Input
                placeholder="Ex: Salário Mensal, Ajuda de Custo..."
                value={manualForm.description}
                onChange={(e) => setManualForm(f => ({ ...f, description: e.target.value }))}
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1" onClick={() => setIsManualDialogOpen(false)}>
                Cancelar
              </Button>
              <Button
                onClick={handleCreateManualPayment}
                disabled={isSavingManual || !manualForm.professional_id || !manualForm.amount}
                className="flex-1 bg-[#e40014] hover:bg-[#e40014] text-white font-bold"
              >
                {isSavingManual ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <CheckCircle2 className="w-4 h-4 mr-2" />}
                Lançar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="lancamentos" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="lancamentos" className="rounded-xl">
            <List className="w-4 h-4 mr-2" />
            Lançamentos
          </TabsTrigger>
          <TabsTrigger value="saques" className="rounded-xl">
            <Banknote className="w-4 h-4 mr-2" />
            Saques
          </TabsTrigger>
          <TabsTrigger value="aulas" className="rounded-xl">
            <GraduationCap className="w-4 h-4 mr-2" />
            Aulas x Valores
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lancamentos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lançamentos</CardTitle>
              <CardDescription>
                Valor por aula: {formatMoney(config.amount)}. Quando pagar: {PAYMENT_SCHEDULES.find((s) => s.value === config.paymentSchedule)?.label || config.paymentSchedule}
                {config.paymentSchedule === "monthly" && ` (dia ${config.paymentDayOfMonth})`}.
              </CardDescription>
              {entries.some((e: any) => e.status === "pending") && (
                <Button
                  onClick={handleRelease}
                  disabled={releasing || selectedIds.size === 0}
                  className="mt-2 bg-red- hover:bg-red-"
                >
                  {releasing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <ArrowDownToLine className="w-4 h-4 mr-2" />}
                  Liberar {selectedIds.size > 0 ? `${selectedIds.size} selecionado(s)` : "selecionados"}
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {entries.length === 0 ? (
                <p className="text-zinc-500 text-center py-8">Nenhum lançamento ainda. Configure o valor por aula e realize chamadas para gerar pagamentos.</p>
              ) : (
                <div className="space-y-2">
                  {entries.some((e: any) => e.status === "pending") && (
                    <div className="flex items-center gap-2 pb-2 border-b">
                      <Checkbox
                        checked={selectedIds.size === entries.filter((e: any) => e.status === "pending").length}
                        onCheckedChange={toggleSelectAll}
                      />
                      <span className="text-sm font-bold">Selecionar todos pendentes</span>
                    </div>
                  )}
                  {entries.map((e: any) => (
                    <div
                      key={e.id}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-xl border",
                        e.status === "pending" && "border-red- dark:border-[#e40014] bg-[#e40014] dark:bg-[#e40014]",
                        e.status === "released" && "border-red- dark:border-[#e40014] bg-[#e40014] dark:bg-[#e40014]",
                        e.status === "withdrawn" && "border-white/10 dark:border-white/10"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {e.status === "pending" && (
                          <Checkbox
                            checked={selectedIds.has(e.id)}
                            onCheckedChange={() => toggleSelect(e.id, e.status)}
                          />
                        )}
                        <div>
                          <p className="font-bold text-white dark:text-white">
                            {(e.professionals as any)?.name || "—"} · {e.class_name || "Aula"}
                          </p>
                          <p className="text-xs text-zinc-500">{formatDate(e.scheduled_date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-black text-white dark:text-white">{formatMoney(e.amount)}</span>
                        <Badge
                          variant="outline"
                          className={cn(
                            e.status === "pending" && "border-red- text-red-",
                            e.status === "released" && "border-red- text-red-",
                            e.status === "withdrawn" && "border-slate-300 text-zinc-400"
                          )}
                        >
                          {e.status === "pending" && "Congelado"}
                          {e.status === "released" && "Liberado"}
                          {e.status === "withdrawn" && "Sacado"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saques" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Saques solicitados</CardTitle>
              <CardDescription>
                Após transferir o valor via PIX para o professor, clique em &quot;Lançar pagamento&quot; para marcar como pago.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {withdrawals.length === 0 ? (
                <p className="text-zinc-500 text-center py-8">Nenhum saque solicitado ainda.</p>
              ) : (
                <div className="space-y-2">
                  {withdrawals.map((w: any) => (
                    <div
                      key={w.id}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-xl border",
                        w.status === "pending" && "border-red- dark:border-[#e40014] bg-[#e40014]",
                        w.status === "completed" && "border-white/10 dark:border-white/10"
                      )}
                    >
                      <div>
                        <p className="font-bold text-white dark:text-white">
                          {(w.professionals as any)?.name || "—"}
                        </p>
                        <p className="text-xs text-zinc-500">
                          PIX {w.pix_key_type}: {w.pix_key} · {formatDate(w.created_at)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-black">{formatMoney(w.amount)}</span>
                        {w.status === "pending" && (
                          <Button
                            size="sm"
                            className="bg-red- hover:bg-red-"
                            onClick={() => handleMarkAsPaid(w.id)}
                            disabled={markingPaid === w.id}
                          >
                            {markingPaid === w.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Banknote className="w-4 h-4 mr-1" />}
                            Lançar pagamento
                          </Button>
                        )}
                        {w.status === "completed" && (
                          <Badge className="bg-red- text-red-">Pago</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="aulas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Aulas dadas x Valores</CardTitle>
              <CardDescription>
                Correlação entre as aulas ministradas por cada professor e os valores gerados
              </CardDescription>
            </CardHeader>
            <CardContent>
              {Object.keys(byTeacher).length === 0 ? (
                <p className="text-zinc-500 text-center py-8">Nenhum lançamento ainda. As aulas que forem realizadas aparecerão aqui.</p>
              ) : (
                <div className="space-y-6">
                  {Object.entries(byTeacher).map(([profId, { name, entries: profEntries, total }]) => (
                    <div key={profId} className="border rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white dark:text-white flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-[#e40014]" />
                          {name}
                        </h3>
                        <span className="font-black text-[#e40014]">{formatMoney(total)}</span>
                      </div>
                      <div className="space-y-1.5">
                        {profEntries
                          .sort((a: any, b: any) => new Date(b.scheduled_date).getTime() - new Date(a.scheduled_date).getTime())
                          .map((e: any) => (
                            <div
                              key={e.id}
                              className="flex items-center justify-between py-2 px-3 rounded-lg bg-black dark:bg-black/50"
                            >
                              <div>
                                <span className="font-medium">{e.class_name || "Aula"}</span>
                                <span className="text-zinc-500 text-sm ml-2">— {formatDate(e.scheduled_date)}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{formatMoney(e.amount)}</span>
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    "text-xs",
                                    e.status === "pending" && "border-red- text-red-",
                                    e.status === "released" && "border-red- text-red-",
                                    e.status === "withdrawn" && "border-slate-300 text-zinc-400"
                                  )}
                                >
                                  {e.status === "pending" && "Congelado"}
                                  {e.status === "released" && "Liberado"}
                                  {e.status === "withdrawn" && "Sacado"}
                                </Badge>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
