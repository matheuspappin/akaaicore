"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/tattoo/dashboard/configuracoes"
      themeColor="text-zinc-400"
      themeBg="bg-zinc-600"
    />
  )
}
