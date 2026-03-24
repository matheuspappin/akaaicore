import { NextRequest, NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import { supabaseAdmin } from "@/lib/supabase-admin"
import { checkStudioAccess } from "@/lib/auth"
import logger from "@/lib/logger"

/**
 * POST /api/dance-studio/teacher-withdrawals/execute-stripe
 * Transfere da conta da plataforma Stripe para a conta Connect do professor.
 *
 * Requer saldo na conta da plataforma. Com destination charges só no estúdio,
 * configure fluxo alternativo ou use modo teste.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { studioId, withdrawalId } = body as { studioId?: string; withdrawalId?: string }

    if (!studioId || !withdrawalId) {
      return NextResponse.json({ error: "studioId e withdrawalId obrigatórios" }, { status: 400 })
    }

    const access = await checkStudioAccess(request, studioId)
    if (!access.authorized) return access.response

    if (process.env.STRIPE_TEACHER_TRANSFERS_ENABLED !== "true") {
      return NextResponse.json(
        {
          error:
            "Transferências a professores via Stripe estão desativadas. Defina STRIPE_TEACHER_TRANSFERS_ENABLED=true no ambiente (e garanta saldo na conta plataforma).",
        },
        { status: 403 },
      )
    }

    const stripe = getStripe()
    if (!stripe) return NextResponse.json({ error: "Stripe não configurado" }, { status: 503 })

    const { data: w, error: wErr } = await supabaseAdmin
      .from("teacher_withdrawals")
      .select("id, studio_id, professional_id, amount, status, stripe_transfer_id")
      .eq("id", withdrawalId)
      .eq("studio_id", studioId)
      .single()

    if (wErr || !w) return NextResponse.json({ error: "Saque não encontrado" }, { status: 404 })

    if (w.status !== "pending") {
      return NextResponse.json({ error: "Saque já processado ou não pendente" }, { status: 400 })
    }

    if (w.stripe_transfer_id) {
      return NextResponse.json({ error: "Transferência já registrada" }, { status: 400 })
    }

    const { data: prof } = await supabaseAdmin
      .from("professionals")
      .select("stripe_account_id, name")
      .eq("id", w.professional_id)
      .single()

    if (!prof?.stripe_account_id) {
      return NextResponse.json(
        { error: "Professor sem conta Stripe Connect. Peça-o a concluir o cadastro em Meus Pagamentos." },
        { status: 400 },
      )
    }

    const amountCents = Math.round(Number(w.amount) * 100)
    if (amountCents < 1) {
      return NextResponse.json({ error: "Valor inválido" }, { status: 400 })
    }

    const transfer = await stripe.transfers.create({
      amount: amountCents,
      currency: "brl",
      destination: prof.stripe_account_id,
      metadata: {
        withdrawal_id: w.id,
        studio_id: studioId,
        professional_id: w.professional_id,
        type: "teacher_withdrawal",
      },
    })

    const { error: upErr } = await supabaseAdmin
      .from("teacher_withdrawals")
      .update({
        status: "completed",
        payout_method: "stripe_transfer",
        stripe_transfer_id: transfer.id,
        processed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", withdrawalId)
      .eq("studio_id", studioId)

    if (upErr) {
      logger.error("[execute-stripe] Transfer criado mas falha ao gravar BD:", upErr, transfer.id)
      return NextResponse.json(
        { error: "Transfer criada no Stripe; atualize o registro manualmente.", transferId: transfer.id },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, transferId: transfer.id })
  } catch (e: any) {
    logger.error("[execute-stripe]", e)
    return NextResponse.json({ error: e.message || "Erro na transferência" }, { status: 500 })
  }
}
