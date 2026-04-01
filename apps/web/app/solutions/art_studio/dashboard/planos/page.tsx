"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/art_studio/dashboard/configuracoes"
      themeColor="text-violet-400"
      themeBg="bg-violet-600"
    />
  )
}
