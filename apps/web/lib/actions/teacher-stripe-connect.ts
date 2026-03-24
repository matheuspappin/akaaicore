"use server"

import { getStripe } from "@/lib/stripe"
import { supabaseAdmin } from "@/lib/supabase-admin"
import logger from "@/lib/logger"

/**
 * Onboarding Stripe Connect (Express) para o professor receber Transfer da plataforma.
 */
export async function createTeacherStripeConnectAccountLink(params: {
  professionalId: string
  userId: string
  returnUrl: string
  /** Se true, o userId pode ser admin do estúdio (users_internal) */
  allowStudioAdmin?: boolean
}): Promise<string> {
  const { professionalId, userId, returnUrl, allowStudioAdmin } = params
  const stripe = getStripe()
  if (!stripe) throw new Error("Stripe não configurado")

  const { data: prof, error: pErr } = await supabaseAdmin
    .from("professionals")
    .select("id, studio_id, name, email, user_id, stripe_account_id")
    .eq("id", professionalId)
    .single()

  if (pErr || !prof) throw new Error("Professor não encontrado")

  const isOwner = prof.user_id === userId
  if (!isOwner) {
    if (!allowStudioAdmin) throw new Error("Sem permissão")
    const { data: ui } = await supabaseAdmin
      .from("users_internal")
      .select("id")
      .eq("id", userId)
      .eq("studio_id", prof.studio_id)
      .maybeSingle()
    const { data: st } = await supabaseAdmin
      .from("studios")
      .select("owner_id")
      .eq("id", prof.studio_id)
      .single()
    if (!ui && st?.owner_id !== userId) throw new Error("Sem permissão para vincular Stripe deste professor")
  }

  let accountId = prof.stripe_account_id

  if (!accountId) {
    const account = await stripe.accounts.create({
      type: "express",
      country: "BR",
      email: prof.email || undefined,
      capabilities: {
        transfers: { requested: true },
      },
      business_type: "individual",
      business_profile: {
        name: prof.name || "Professor",
      },
    })
    accountId = account.id
    const { error: upErr } = await supabaseAdmin
      .from("professionals")
      .update({ stripe_account_id: accountId })
      .eq("id", professionalId)
    if (upErr) {
      logger.error("Erro ao salvar stripe_account_id do professor:", upErr)
      throw new Error("Falha ao vincular conta Stripe")
    }
  }

  const accountLink = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: `${returnUrl}${returnUrl.includes("?") ? "&" : "?"}stripe_refresh=1`,
    return_url: returnUrl,
    type: "account_onboarding",
  })

  return accountLink.url
}

export async function getTeacherStripeConnectStatus(professionalId: string): Promise<{
  stripe_account_id: string | null
  payouts_enabled: boolean
  details_submitted: boolean
}> {
  const { data: prof } = await supabaseAdmin
    .from("professionals")
    .select("stripe_account_id")
    .eq("id", professionalId)
    .maybeSingle()

  if (!prof?.stripe_account_id) {
    return { stripe_account_id: null, payouts_enabled: false, details_submitted: false }
  }

  try {
    const stripe = getStripe()
    if (!stripe) return { stripe_account_id: prof.stripe_account_id, payouts_enabled: false, details_submitted: false }

    const account = await stripe.accounts.retrieve(prof.stripe_account_id)
    return {
      stripe_account_id: prof.stripe_account_id,
      payouts_enabled: account.payouts_enabled ?? false,
      details_submitted: account.details_submitted ?? false,
    }
  } catch {
    return { stripe_account_id: prof.stripe_account_id, payouts_enabled: false, details_submitted: false }
  }
}
