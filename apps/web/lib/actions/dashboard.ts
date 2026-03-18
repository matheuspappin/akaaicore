"use server"

import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { getDashboardStats } from '@/lib/database-utils'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * Server Action para buscar estatísticas do dashboard.
 * Valida sessão e acesso ao studio antes de retornar dados (com cache).
 */
export async function getDashboardStatsAction(studioId: string) {
  if (!studioId) {
    return {
      activeStudents: 0,
      activeProfessionals: 0,
      activeClasses: 0,
      monthlyRevenue: 0,
      totalOverdue: 0,
      chartRevenueData: [],
      chartClassesData: [],
      evasionAlerts: [],
      upcomingClasses: [],
      studentDistribution: [],
      recentTransactions: [],
      studentGrowth: '0%',
      revenueGrowth: '0%',
    }
  }

  const cookieStore = await cookies()
  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get: (name) => cookieStore.get(name)?.value,
      set: () => {},
      remove: () => {},
    },
  })

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    throw new Error('Não autenticado')
  }

  // Validar acesso ao studio via RPC
  const { data: rpcRows, error: rpcErr } = await supabaseAdmin
    .rpc('get_user_studio_access', { p_user_id: user.id, p_studio_id: studioId })
    .single()

  if (!rpcErr && rpcRows) {
    const row = rpcRows as { authorized: boolean; role: string; reason: string }
    if (!row.authorized) {
      const metaStudioId = user.user_metadata?.studio_id
      const metaRole = user.user_metadata?.role || user.app_metadata?.role
      const hasStudentMetadata = metaStudioId === studioId && (!metaRole || metaRole === 'student')
      if (!hasStudentMetadata) {
        throw new Error('Acesso negado a este estúdio')
      }
    }
  }
  // Se RPC falhar (migration 118 não aplicada), getDashboardStats usa RLS — ainda protege

  return getDashboardStats(studioId)
}
