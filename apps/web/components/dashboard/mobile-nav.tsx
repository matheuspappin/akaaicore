"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, Building2, Sparkles, User, Bell, LogOut, UserCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { NavContent } from "./nav-content"
import { useOrganization } from "@/components/providers/organization-provider"
import { getNicheBranding } from "@/lib/niche-utils"
import { NICHE_TO_VERTICALIZATION, getLoginUrlForNiche } from "@/config/portal-routes"
import { OFFICIAL_LOGO } from "@/config/branding"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface MobileNavProps {
  isAffiliate?: boolean
  isSeller?: boolean
  isFinance?: boolean
}

const AKAAICORE_BRANDING = {
  name: "AKAAI",
  accentName: "CORE",
  gradient: null,
  accentText: "text-primary",
  icon: Sparkles,
}

export function MobileNav({ isAffiliate = false, isSeller = false, isFinance = false }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const { enabledModules, studios, studioId, switchStudio, niche, t, vocabulary } = useOrganization()
  const isGenericNiche = !niche || !NICHE_TO_VERTICALIZATION[niche]
  const useAkaaiBranding = isAffiliate || isGenericNiche
  const branding = useAkaaiBranding
    ? { ...getNicheBranding("dance"), ...AKAAICORE_BRANDING }
    : getNicheBranding(niche || "dance")

  const handleLogout = async () => {
    const loginUrl = getLoginUrlForNiche(niche)
    try {
      await supabase.auth.signOut()
      await fetch('/api/auth/logout', { method: 'POST' })
    } catch (e) {
      console.error('Erro ao realizar logout:', e)
    }
    localStorage.removeItem("danceflow_user")
    localStorage.removeItem("workflow_pro_active_studio")
    window.location.href = loginUrl
  }

  return (
    <div className={cn(
      "md:hidden fixed top-0 left-0 right-0 h-16 border-b z-50 px-4 flex items-center justify-between transition-colors",
      niche === 'dance' ? "bg-black border-white/10" : "bg-background border-border"
    )}>
      <div className="flex items-center gap-3 overflow-hidden mr-2">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={niche === 'dance' ? "text-white" : ""}>
              <Menu className="w-6 h-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className={cn(
            "p-0 w-72 border-r",
            niche === 'dance' ? "bg-black border-white/10 text-white" : "bg-sidebar text-sidebar-foreground border-sidebar-border"
          )}>
            <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
            <NavContent onNavigate={() => setOpen(false)} isAffiliate={isAffiliate} isSeller={isSeller} isFinance={isFinance} />
          </SheetContent>
        </Sheet>

        <div className={cn(
          "flex items-center gap-2 font-bold text-lg whitespace-nowrap shrink-0",
          useAkaaiBranding && (niche === 'dance' ? "text-white" : "text-foreground")
        )}>
          {useAkaaiBranding ? (
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
              <Image src={OFFICIAL_LOGO} alt="AKAAI CORE" width={24} height={24} className="object-contain" />
            </div>
          ) : (
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-lg",
              branding.gradient ? `bg-gradient-to-br ${branding.gradient}` : "bg-gradient-to-br from-red-600 to-orange-600"
            )}>
              <branding.icon className="w-4 h-4" />
            </div>
          )}
          <span className={niche === 'dance' ? "text-white" : "text-foreground"}>
            {branding.name} <span className={branding.accentText ?? "text-[#e40014]"}>{branding.accentName}</span>
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {/* User Menu on Mobile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center p-0 overflow-hidden",
              niche === 'dance' ? "bg-white/10" : "bg-muted"
            )}>
              <User className={cn("w-4 h-4", niche === 'dance' ? "text-white" : "text-foreground")} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className={cn(
            "w-56",
            niche === 'dance' ? "bg-zinc-950 border-white/10 text-white" : "bg-popover border-border text-popover-foreground"
          )}>
            <DropdownMenuLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t.common.myAccount}</DropdownMenuLabel>
            <DropdownMenuSeparator className={niche === 'dance' ? "bg-white/10" : ""} />
            <DropdownMenuItem onClick={() => router.push("/dashboard/configuracoes")} className="cursor-pointer">
              <UserCircle className={cn("w-4 h-4 mr-2", branding.secondaryColor)} />
              {t.common.adminProfile}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/dashboard/configuracoes")} className="cursor-pointer">
              <Settings className={cn("w-4 h-4 mr-2", branding.secondaryColor)} />
              {t.common.systemSettings}
            </DropdownMenuItem>
            <DropdownMenuSeparator className={niche === 'dance' ? "bg-white/10" : ""} />
            <DropdownMenuItem
              onClick={handleLogout}
              className={cn("cursor-pointer font-bold", niche === 'dance' ? "text-[#e40014] hover:bg-[#e40014]/10" : "text-destructive hover:bg-destructive/10")}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t.sidebar.logout}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
