"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/marketing_agency/dashboard/configuracoes"
      themeColor="text-indigo-400"
      themeBg="bg-indigo-600"
    />
  )
}
