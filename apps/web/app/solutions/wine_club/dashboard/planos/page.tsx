"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/wine_club/dashboard/configuracoes"
      themeColor="text-rose-400"
      themeBg="bg-rose-600"
    />
  )
}
