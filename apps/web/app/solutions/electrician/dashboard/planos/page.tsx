"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/electrician/dashboard/configuracoes"
      themeColor="text-yellow-400"
      themeBg="bg-yellow-600"
    />
  )
}
