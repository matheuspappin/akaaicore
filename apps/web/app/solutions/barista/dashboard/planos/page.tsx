"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/barista/dashboard/configuracoes"
      themeColor="text-amber-400"
      themeBg="bg-amber-600"
    />
  )
}
