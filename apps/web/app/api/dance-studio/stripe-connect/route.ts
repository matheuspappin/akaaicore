import { NextRequest, NextResponse } from "next/server"
import { createStudioStripeConnectAccountLink } from "@/lib/actions/studio-stripe-connect"
import { createClient } from "@/lib/supabase/server"
import logger from "@/lib/logger"

/**
 * POST /api/dance-studio/stripe-connect
 * Cria link de onboarding Stripe Connect para o estúdio.
 * Body: { studioId, returnUrl }
 */
export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 })
    }

    const body = await req.json()
    const { studioId, returnUrl } = body

    if (!studioId || !returnUrl) {
      return NextResponse.json(
        { error: "studioId e returnUrl são obrigatórios" },
        { status: 400 }
      )
    }

    const url = await createStudioStripeConnectAccountLink(
      studioId,
      returnUrl,
      user.id
    )

    return NextResponse.json({ url })
  } catch (error: any) {
    logger.error("Erro ao criar link Stripe Connect:", error)
    return NextResponse.json(
      { error: error.message || "Erro ao conectar Stripe" },
      { status: 500 }
    )
  }
}
