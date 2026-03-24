import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import logger from '@/lib/logger'
import { checkStudioAccess } from '@/lib/auth'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

function getAdmin() {
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

/**
 * POST /api/dance-studio/sessions/complete-chamada
 * Marca a sessão da turma/data como realizada e dispara lançamento de honorário (trigger).
 * Deve ser chamado após salvar a chamada (presenças).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { studioId, classId, date, professionalId } = body as {
      studioId?: string
      classId?: string
      date?: string
      professionalId?: string
    }

    if (!studioId || !classId || !date) {
      return NextResponse.json(
        { error: 'studioId, classId e date (YYYY-MM-DD) são obrigatórios' },
        { status: 400 },
      )
    }

    const access = await checkStudioAccess(request, studioId)
    if (!access.authorized) return access.response

    const supabase = getAdmin()

    const { data: cls, error: classErr } = await supabase
      .from('classes')
      .select('id, studio_id, professional_id, name')
      .eq('id', classId)
      .eq('studio_id', studioId)
      .single()

    if (classErr || !cls) {
      return NextResponse.json({ error: 'Turma não encontrada' }, { status: 404 })
    }

    const profId = professionalId || cls.professional_id
    if (!profId) {
      return NextResponse.json(
        { error: 'Professor não identificado: vincule um professor à turma ou envie professionalId.' },
        { status: 400 },
      )
    }

    const { count: presentCount, error: countErr } = await supabase
      .from('attendance')
      .select('id', { count: 'exact', head: true })
      .eq('class_id', classId)
      .eq('date', date)
      .eq('status', 'present')

    if (countErr) throw countErr

    const attendanceCount = presentCount ?? 0

    const { data: existingRows, error: exErr } = await supabase
      .from('sessions')
      .select('id, status')
      .eq('class_id', classId)
      .eq('scheduled_date', date)
      .order('created_at', { ascending: false })
      .limit(1)

    if (exErr) throw exErr
    const existing = existingRows?.[0]

    const payload = {
      studio_id: studioId,
      class_id: classId,
      scheduled_date: date,
      date: date,
      status: 'realizada' as const,
      actual_professional_id: profId,
      attendance_count: attendanceCount,
      updated_at: new Date().toISOString(),
    }

    if (existing?.id) {
      const { error: upErr } = await supabase.from('sessions').update(payload).eq('id', existing.id)
      if (upErr) throw upErr
      return NextResponse.json({
        success: true,
        sessionId: existing.id,
        mode: 'updated',
        attendanceCount,
      })
    }

    const { data: inserted, error: insErr } = await supabase
      .from('sessions')
      .insert(payload)
      .select('id')
      .single()

    if (insErr) throw insErr

    return NextResponse.json({
      success: true,
      sessionId: inserted?.id,
      mode: 'inserted',
      attendanceCount,
    })
  } catch (error: any) {
    logger.error('❌ [complete-chamada]', error)
    return NextResponse.json({ error: error.message || 'Erro ao concluir sessão' }, { status: 500 })
  }
}
