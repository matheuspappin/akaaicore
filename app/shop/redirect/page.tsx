"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Loader2 } from "lucide-react"

export default function ShopRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    async function redirect() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push("/login")
        return
      }

      const studioId = session.user.user_metadata?.studio_id
      if (!studioId) {
        router.push("/dashboard")
        return
      }

      const { data: settings } = await supabase
        .from('marketplace_settings')
        .select('slug')
        .eq('studio_id', studioId)
        .maybeSingle()

      if (settings?.slug) {
        router.push(`/shop/${settings.slug}`)
      } else {
        // Se não tiver slug, tenta usar o nome do estúdio ou volta pro dashboard
        router.push("/dashboard")
      }
    }

    redirect()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-[#e40014]" />
        <p className="text-zinc-400 text-sm font-medium">Abrindo marketplace...</p>
      </div>
    </div>
  )
}
