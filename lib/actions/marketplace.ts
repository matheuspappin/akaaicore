'use server'

import { createClient } from '@/lib/supabase/server'
import logger from '@/lib/logger'
import { revalidatePath } from 'next/cache'
import { guardModule } from '@/lib/modules-server'

export interface MarketplaceSettings {
  studio_id: string
  store_name: string
  slug: string
  description?: string
  primary_color: string
  banner_url?: string
  is_active: boolean
  style_config?: {
    buttonStyle: 'rounded' | 'square' | 'pill'
    cardStyle: 'shadow' | 'border' | 'flat'
    welcomeTitle: string
    welcomeSubtitle: string
  }
}

// --- Configurações da Loja ---

export async function getMarketplaceSettings(studioId: string) {
  await guardModule('marketplace')
  const supabase = await createClient()
    const { data, error } = await supabase
    .from('marketplace_settings')
    .select('*')
    .eq('studio_id', studioId)
    .maybeSingle()

  if (error) {
    logger.error('Erro ao buscar marketplace:', error)
  }

  return data as MarketplaceSettings | null
}

export async function isSlugAvailable(slug: string, studioId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('marketplace_settings')
    .select('studio_id')
    .eq('slug', slug)
    .maybeSingle()

  if (error) return false
  if (!data) return true
  return data.studio_id === studioId
}

export async function updateMarketplaceSettings(studioId: string, settings: Partial<MarketplaceSettings>) {
  await guardModule('marketplace')
  const supabase = await createClient()
  logger.debug('DEBUG_SERVER: Tentando salvar configurações do marketplace para studioId:', studioId, 'com settings:', settings);
  const { error } = await supabase
    .from('marketplace_settings')
    .upsert({
      studio_id: studioId,
      ...settings,
      updated_at: new Date().toISOString()
    })

  if (error) {
    logger.error('DEBUG_SERVER: ERRO ao salvar marketplace:', error);
    if (error.code === '23505') {
      throw new Error('Este endereço (slug) já está em uso por outra loja. Escolha um nome diferente.');
    }
    throw new Error(error.message);
  }
  logger.debug('DEBUG_SERVER: Configurações do marketplace salvas com sucesso para studioId:', studioId);
  revalidatePath('/dashboard/marketplace')
}

// --- Área Pública (Storefront) ---

export async function getStoreBySlug(slug: string) {
  logger.debug('DEBUG: Buscando loja pelo slug:', slug)
  const supabase = await createClient()
  
  const { data: store, error } = await supabase
    .from('marketplace_settings')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    logger.error('DEBUG: Erro no banco ao buscar loja:', error)
    return null
  }

  if (!store) {
    logger.warn('DEBUG: Nenhuma loja encontrada com o slug:', slug)
    return null
  }

  // Verifica se o usuário é o dono da loja ou super_admin para permitir preview
  const { data: { session } } = await supabase.auth.getSession()
  const user = session?.user
  const isOwner = user && (
    user.id === store.studio_id || 
    user.user_metadata?.studio_id === store.studio_id || 
    user.user_metadata?.role === 'super_admin'
  )

  if (!store.is_active && !isOwner) {
    logger.warn('DEBUG: Loja encontrada, mas está DESATIVADA:', slug)
    return { store: null, status: 'disabled' }
  }

  logger.debug('DEBUG: Loja encontrada:', store.store_name, 'Ativa:', store.is_active)

  // Busca produtos ativos deste estúdio
  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('*')
    .eq('studio_id', store.studio_id)
    .eq('status', 'active')
    .eq('show_in_marketplace', true)
    .gt('quantity', 0)

  if (productsError) {
    logger.error('DEBUG: Erro ao buscar produtos:', productsError)
    return { store, products: [] }
  }

  logger.debug('DEBUG: Produtos encontrados para a loja:', products.length)
  return { store, products }
}
