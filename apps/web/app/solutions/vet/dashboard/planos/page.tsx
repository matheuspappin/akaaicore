"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/vet/dashboard/configuracoes"
      themeColor="text-emerald-400"
      themeBg="bg-emerald-600"
    />
  )
}
