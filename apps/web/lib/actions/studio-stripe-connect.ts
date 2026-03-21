"use server"

import { getStripe } from "@/lib/stripe"
import { supabaseAdmin } from "@/lib/supabase-admin"
import logger from "@/lib/logger"

/**
 * Cria link de onboarding Stripe Connect para o estúdio.
 * O estúdio preenche dados (CNPJ, banco) no fluxo hospedado do Stripe.
 */
export async function createStudioStripeConnectAccountLink(
  studioId: string,
  returnUrl: string,
  userId: string
): Promise<string> {
  const stripe = getStripe()
  if (!stripe) throw new Error("Stripe não configurado")

  // Verificar que o usuário tem acesso ao estúdio
  const { data: access } = await supabaseAdmin
    .from("users_internal")
    .select("id")
    .eq("id", userId)
    .eq("studio_id", studioId)
    .maybeSingle()

  const { data: studio } = await supabaseAdmin
    .from("studios")
    .select("id, owner_id")
    .eq("id", studioId)
    .single()

  if (!studio) throw new Error("Estúdio não encontrado")
  if (!access && studio.owner_id !== userId) {
    throw new Error("Sem permissão para conectar Stripe neste estúdio")
  }

  let accountId = (studio as { stripe_account_id?: string }).stripe_account_id

  if (!accountId) {
    const { data: studioFull } = await supabaseAdmin
      .from("studios")
      .select("name")
      .eq("id", studioId)
      .single()

    logger.info("Criando nova conta Stripe Connect para estúdio", { studioId })

    const account = await stripe.accounts.create({
      type: "express",
      country: "BR",
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      business_type: "company",
      business_profile: {
        name: studioFull?.name || "Estúdio",
      },
    })
    accountId = account.id

    const { error: updateError } = await supabaseAdmin
      .from("studios")
      .update({ stripe_account_id: accountId })
      .eq("id", studioId)

    if (updateError) {
      logger.error("Erro ao salvar stripe_account_id no estúdio:", updateError)
      throw new Error("Falha ao vincular conta Stripe ao estúdio")
    }
  }

  const accountLink = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: returnUrl + "?refresh=true",
    return_url: returnUrl,
    type: "account_onboarding",
  })

  return accountLink.url
}

/**
 * Retorna o stripe_account_id do estúdio e se está com pagamentos habilitados.
 */
export async function getStudioStripeConnectStatus(studioId: string): Promise<{
  stripe_account_id: string | null
  charges_enabled: boolean
}> {
  const { data: studio, error } = await supabaseAdmin
    .from("studios")
    .select("stripe_account_id")
    .eq("id", studioId)
    .single()

  if (error || !studio?.stripe_account_id) {
    return { stripe_account_id: null, charges_enabled: false }
  }

  try {
    const stripe = getStripe()
    if (!stripe) return { stripe_account_id: studio.stripe_account_id, charges_enabled: false }

    const account = await stripe.accounts.retrieve(studio.stripe_account_id)
    return {
      stripe_account_id: studio.stripe_account_id,
      charges_enabled: account.charges_enabled ?? false,
    }
  } catch {
    return { stripe_account_id: studio.stripe_account_id, charges_enabled: false }
  }
}

/**
 * Retorna stripe_account_id do estúdio para usar em checkouts Connect.
 * Se o estúdio tiver conta Connect, os pagamentos vão para a conta do estúdio.
 */
export async function getStudioStripeAccountForCheckout(studioId: string): Promise<string | null> {
  const { data } = await supabaseAdmin
    .from("studios")
    .select("stripe_account_id")
    .eq("id", studioId)
    .single()
  return data?.stripe_account_id ?? null
}
