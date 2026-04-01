"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/beauty/dashboard/configuracoes"
      themeColor="text-pink-400"
      themeBg="bg-pink-600"
    />
  )
}
