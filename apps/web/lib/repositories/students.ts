/**
 * Repositório de Alunos (Students)
 */
import { supabase } from '@/lib/supabase'
import logger from '@/lib/logger'
import { isLimitReached } from '@/lib/plan-limits'
import { StudentSchema } from '@/lib/schemas/entities'

function getCurrentStudioIdSync(): string | null {
  return null
}

export async function getStudents(options: { studioId?: string; status?: string; search?: string; page?: number; limit?: number } = {}) {
  const { studioId, status, search, page = 1, limit = 20 } = options
  const finalStudioId = studioId || getCurrentStudioIdSync()

  if (!finalStudioId) {
    logger.warn('⚠️ Studio ID não disponível para buscar alunos.')
    return { data: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } }
  }

  let query = supabase
    .from('students')
    .select(`*, student_lesson_credits(remaining_credits, expiry_date)`, { count: 'exact' })
    .eq('studio_id', finalStudioId)
    .order('created_at', { ascending: false })

  if (status) query = query.eq('status', status)
  if (search) query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`)

  const from = (page - 1) * limit
  const { data, error, count } = await query.range(from, from + limit - 1)

  if (error) throw error
  return {
    data: data || [],
    pagination: { page, limit, total: count || 0, totalPages: Math.ceil((count || 0) / limit) },
  }
}

export async function getStudentById(id: string, studioId: string = getCurrentStudioIdSync()!) {
  if (!studioId) throw new Error('Studio ID é obrigatório para buscar aluno')
  const { data, error } = await supabase
    .from('students')
    .select(`*, enrollments:enrollments(class_id, classes:class_id(id, name, dance_style, level)), payments:payments(*), attendance:attendance(*)`)
    .eq('id', id)
    .eq('studio_id', studioId)
    .single()
  if (error) throw error
  return data
}

export async function saveStudent(studentData: any, studioId: string = studentData?.studio_id || getCurrentStudioIdSync()!) {
  const { id, ...data } = studentData
  if (!studioId) throw new Error('Studio ID é obrigatório para salvar aluno')

  const schema = id ? StudentSchema.partial() : StudentSchema
  const parsed = schema.safeParse(data)
  if (!parsed.success) {
    throw new Error(`Dados inválidos: ${parsed.error.errors.map(e => e.message).join('; ')}`)
  }

  const finalData = { ...parsed.data, studio_id: studioId }

  if (id) {
    const { data: result, error } = await supabase.from('students').update(finalData).eq('id', id).eq('studio_id', studioId).select().maybeSingle()
    if (error) {
      logger.error('❌ Erro Supabase updateStudent:', error)
      throw error
    }
    return result
  }

  const { count: currentCount } = await supabase.from('students').select('*', { count: 'exact', head: true }).eq('studio_id', studioId).eq('status', 'active')
  const { data: studioData } = await supabase.from('studios').select('plan').eq('id', studioId).single()
  const plan = studioData?.plan || 'gratuito'
  if (isLimitReached(currentCount || 0, plan, 'maxStudents')) {
    throw new Error(`Limite de alunos do plano ${plan} atingido. Faça upgrade para adicionar mais.`)
  }

  const { data: result, error } = await supabase.from('students').insert(finalData).select().maybeSingle()
  if (error) {
    logger.error('❌ Erro Supabase insertStudent:', error)
    throw new Error(error.message || 'Erro ao inserir aluno no banco de dados')
  }
  return result
}

export async function deleteStudent(id: string, studioId: string = getCurrentStudioIdSync()!) {
  if (!studioId) throw new Error('Studio ID é obrigatório para excluir aluno')
  const { error } = await supabase.from('students').delete().eq('id', id).eq('studio_id', studioId)
  if (error) throw error
  return true
}
