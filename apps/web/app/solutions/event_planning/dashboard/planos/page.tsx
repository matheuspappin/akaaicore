"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/event_planning/dashboard/configuracoes"
      themeColor="text-fuchsia-400"
      themeBg="bg-fuchsia-600"
    />
  )
}
