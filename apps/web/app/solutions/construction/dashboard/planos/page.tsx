"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/construction/dashboard/configuracoes"
      themeColor="text-orange-400"
      themeBg="bg-orange-600"
    />
  )
}
