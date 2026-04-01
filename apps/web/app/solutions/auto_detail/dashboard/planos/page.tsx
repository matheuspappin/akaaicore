"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/auto_detail/dashboard/configuracoes"
      themeColor="text-slate-400"
      themeBg="bg-slate-600"
    />
  )
}
