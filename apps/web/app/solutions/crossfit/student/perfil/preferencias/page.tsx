"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Settings, Bell, Globe, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Switch } from "@/components/ui/switch"

const PREF_STORAGE_KEY = "danceflow_student_prefs"

interface StudentPrefs {
  notifications_enabled: boolean
  notifications_classes: boolean
  notifications_reminders: boolean
  language: string
}

const defaultPrefs: StudentPrefs = {
  notifications_enabled: true,
  notifications_classes: true,
  notifications_reminders: true,
  language: "pt",
}

function getStoredPrefs(): StudentPrefs {
  if (typeof window === "undefined") return defaultPrefs
  try {
    const raw = localStorage.getItem(PREF_STORAGE_KEY)
    if (!raw) return defaultPrefs
    return { ...defaultPrefs, ...JSON.parse(raw) }
  } catch {
    return defaultPrefs
  }
}

function setStoredPrefs(prefs: StudentPrefs) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(PREF_STORAGE_KEY, JSON.stringify(prefs))
  } catch {
    // ignore
  }
}

export default function PreferenciasPage() {
  const { toast } = useToast()
  const [prefs, setPrefs] = useState<StudentPrefs>(defaultPrefs)
  const [saving, setSaving] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setPrefs(getStoredPrefs())
    setMounted(true)
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      setStoredPrefs(prefs)
      // Persistir no Supabase user_metadata se disponível
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await supabase.auth.updateUser({
          data: {
            ...user.user_metadata,
            prefs: prefs,
          },
        })
      }
      toast({ title: "Preferências salvas!" })
    } catch {
      toast({ title: "Erro ao salvar", variant: "destructive" })
    } finally {
      setSaving(false)
    }
  }

  const updatePref = <K extends keyof StudentPrefs>(key: K, value: StudentPrefs[K]) => {
    setPrefs((p) => ({ ...p, [key]: value }))
  }

  if (!mounted) return null

  return (
    <div className="space-y-6 max-w-xl pb-20 md:pb-0">
      <div className="flex items-center gap-4">
        <Link href="/solutions/crossfit/student/perfil">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Settings className="w-6 h-6 text-red-600" />
            Preferências do App
          </h1>
          <p className="text-slate-500 text-sm mt-1">Personalize sua experiência</p>
        </div>
      </div>

      {/* Notificações */}
      <Card className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
        <CardHeader>
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Bell className="w-4 h-4 text-red-600" />
            Notificações
          </CardTitle>
          <CardDescription>
            Escolha quais notificações deseja receber.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Ativar notificações</Label>
            <Switch
              checked={prefs.notifications_enabled}
              onCheckedChange={(v) => updatePref("notifications_enabled", v)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Lembretes de aulas</Label>
            <Switch
              checked={prefs.notifications_classes}
              onCheckedChange={(v) => updatePref("notifications_classes", v)}
              disabled={!prefs.notifications_enabled}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Lembretes de pagamento</Label>
            <Switch
              checked={prefs.notifications_reminders}
              onCheckedChange={(v) => updatePref("notifications_reminders", v)}
              disabled={!prefs.notifications_enabled}
            />
          </div>
        </CardContent>
      </Card>

      {/* Idioma */}
      <Card className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10">
        <CardHeader>
          <CardTitle className="text-base font-bold flex items-center gap-2">
            <Globe className="w-4 h-4 text-red-600" />
            Idioma
          </CardTitle>
          <CardDescription>
            Selecione o idioma do aplicativo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Button
              variant={prefs.language === "pt" ? "default" : "outline"}
              size="sm"
              onClick={() => updatePref("language", "pt")}
              className={prefs.language === "pt" ? "bg-red-600" : ""}
            >
              Português
            </Button>
            <Button
              variant={prefs.language === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => updatePref("language", "en")}
              className={prefs.language === "en" ? "bg-red-600" : ""}
            >
              English
            </Button>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={handleSave}
        disabled={saving}
        className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl w-full h-11"
      >
        {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
        {saving ? "Salvando..." : "Salvar Preferências"}
      </Button>
    </div>
  )
}
