"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/plumbing/dashboard/configuracoes"
      themeColor="text-cyan-400"
      themeBg="bg-cyan-600"
    />
  )
}
