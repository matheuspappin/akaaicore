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

// GET /api/dance-studio/teachers?studioId=...
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const studioId = searchParams.get('studioId')

  if (!studioId) {
    return NextResponse.json({ error: 'studioId obrigatório' }, { status: 400 })
  }

  const access = await checkStudioAccess(request, studioId)
  if (!access.authorized) return access.response

  const supabase = getAdmin()

  try {
    const { data: teachers, error } = await supabase
      .from('professionals')
      .select('id, name, email, phone, professional_type, status, created_at, contract_type, fixed_salary')
      .eq('studio_id', studioId)
      .eq('professional_type', 'teacher')
      .eq('status', 'active')
      .order('name')

    if (error) throw error

    return NextResponse.json(teachers || [])
  } catch (error: any) {
    logger.error('❌ [DANCE-STUDIO/TEACHERS] Erro:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST /api/dance-studio/teachers — criar professor (professional com professional_type = 'teacher')
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { studioId, name, email, phone, contract_type, fixed_salary } = body

  if (!studioId || !name) {
    return NextResponse.json({ error: 'studioId e name são obrigatórios' }, { status: 400 })
  }

  const access = await checkStudioAccess(request, studioId)
  if (!access.authorized) return access.response

  const supabase = getAdmin()

  try {
    const { data, error } = await supabase
      .from('professionals')
      .insert({
        studio_id: studioId,
        name,
        email: email || `${name.toLowerCase().replace(/\s/g, '.')}@estudio.local`,
        phone: phone || null,
        professional_type: 'teacher',
        status: 'active',
        contract_type: contract_type || 'per_class',
        fixed_salary: fixed_salary ? Number(fixed_salary) : 0,
      })
      .select('id, name, email, phone, professional_type, status, contract_type, fixed_salary')
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT /api/dance-studio/teachers
export async function PUT(request: NextRequest) {
  const body = await request.json()
  const { studioId, id, name, email, phone, contract_type, fixed_salary } = body

  if (!studioId || !id) {
    return NextResponse.json({ error: 'studioId e id são obrigatórios' }, { status: 400 })
  }

  const access = await checkStudioAccess(request, studioId)
  if (!access.authorized) return access.response

  const supabase = getAdmin()

  try {
    const { data, error } = await supabase
      .from('professionals')
      .update({
        name,
        email,
        phone,
        contract_type,
        fixed_salary: fixed_salary ? Number(fixed_salary) : 0,
      })
      .eq('id', id)
      .eq('studio_id', studioId)
      .select('id, name, email, phone, professional_type, status, contract_type, fixed_salary')
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    logger.error('❌ [DANCE-STUDIO/TEACHERS PUT] Erro:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
