"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/elderly_care/dashboard/configuracoes"
      themeColor="text-teal-400"
      themeBg="bg-teal-600"
    />
  )
}
