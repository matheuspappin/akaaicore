"use client"

import { PlanosVerticalPage } from "@/components/subscription/planos-vertical-page"

export default function FireProtectionPlanosPage() {
  return (
    <PlanosVerticalPage
      verticalizationSlug="fire-protection"
      configUrl="/solutions/car_wash/dashboard/configuracoes"
      themeColor="text-sky-400"
      themeBg="bg-sky-600"
    />
  )
}
