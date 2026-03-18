import { NextRequest, NextResponse } from 'next/server'
import { checkStudioAccess } from '@/lib/auth'
import { getDashboardStats } from '@/lib/database-utils'

/**
 * GET /api/dashboard/stats?studioId=xxx
 * Retorna estatísticas do dashboard (com cache Redis 15 min).
 * Requer autenticação e acesso ao studio.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const studioId = searchParams.get('studioId')

  if (!studioId) {
    return NextResponse.json({ error: 'studioId é obrigatório' }, { status: 400 })
  }

  const access = await checkStudioAccess(request, studioId)
  if (!access.authorized) return access.response

  try {
    const stats = await getDashboardStats(studioId)
    return NextResponse.json(stats)
  } catch (error) {
    console.error('[API dashboard/stats] Erro:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erro ao buscar estatísticas' },
      { status: 500 }
    )
  }
}
