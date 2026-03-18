import { z } from 'zod'

const uuid = z.string().uuid().optional()
const dateStr = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable()
const statusActiveInactiveSuspended = z.enum(['active', 'inactive', 'suspended']).optional()
const statusActiveInactive = z.enum(['active', 'inactive']).optional()
const statusPayment = z.enum(['paid', 'pending', 'overdue', 'cancelled']).optional()
const levelClass = z.enum(['beginner', 'intermediate', 'advanced']).optional()
const recurrencePeriod = z.enum(['weekly', 'monthly', 'yearly']).optional().nullable()

/** Schema para criar/atualizar aluno */
export const StudentSchema = z.object({
  id: uuid,
  name: z.string().min(1, 'Nome é obrigatório').max(255).trim(),
  email: z.string().email('E-mail inválido').max(255).trim(),
  phone: z.string().max(20).optional().nullable(),
  birth_date: dateStr,
  address: z.string().optional().nullable(),
  emergency_contact: z.string().max(255).optional().nullable(),
  medical_info: z.string().optional().nullable(),
  status: statusActiveInactiveSuspended,
  enrollment_date: dateStr,
}).strip()

/** Schema para criar/atualizar profissional */
export const ProfessionalSchema = z.object({
  id: uuid,
  user_id: z.string().uuid().optional().nullable(),
  name: z.string().min(1, 'Nome é obrigatório').max(255).trim(),
  email: z.string().email('E-mail inválido').max(255).trim(),
  phone: z.string().max(20).optional().nullable(),
  cpf_cnpj: z.string().max(20).optional().nullable(),
  specialties: z.array(z.string()).optional(),
  hourly_rate: z.union([z.number(), z.string()]).transform(v => (typeof v === 'string' ? parseFloat(v) || 0 : v)).optional(),
  bonus_per_student: z.union([z.number(), z.string()]).transform(v => (typeof v === 'string' ? parseFloat(v) || 0 : v)).optional(),
  pix_key: z.string().max(255).optional().nullable(),
  status: statusActiveInactive,
  hire_date: dateStr,
  bio: z.string().optional(),
  professional_type: z.string().optional(),
}).strip()

/** Schema para horário de turma (schedule item) */
const ScheduleItemSchema = z.object({
  day_of_week: z.number().min(0).max(6),
  start_time: z.string(),
  duration_minutes: z.number().optional(),
  room: z.string().optional(),
})

/** Schema para criar/atualizar turma */
export const ClassSchema = z.object({
  id: uuid,
  professional_id: z.string().uuid().optional().nullable(),
  teacher_id: z.string().uuid().optional().nullable(), // alias usado em alguns forms
  name: z.string().min(1, 'Nome é obrigatório').max(255).trim(),
  description: z.string().optional().nullable(),
  dance_style: z.string().min(1, 'Estilo/Modalidade é obrigatório').max(100),
  level: levelClass,
  max_students: z.union([z.number(), z.string()]).transform(v => (typeof v === 'string' ? parseInt(v, 10) || 15 : v)).optional(),
  current_students: z.union([z.number(), z.string()]).transform(v => (typeof v === 'string' ? parseInt(v, 10) || 0 : v)).optional(),
  schedule: z.array(ScheduleItemSchema).optional(),
  price: z.union([z.number(), z.string()]).transform(v => (typeof v === 'string' ? parseFloat(v) || 0 : v)).optional(),
  status: z.enum(['active', 'inactive', 'cancelled']).optional(),
}).strip()

/** Schema para registrar pagamento */
export const PaymentSchema = z.object({
  student_id: z.string().uuid().optional().nullable(),
  amount: z.union([z.number(), z.string()]).transform(v => {
    const n = typeof v === 'string' ? parseFloat(v) : v
    return isNaN(n) ? 0 : Math.max(0, n)
  }),
  payment_date: dateStr,
  due_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Data de vencimento inválida (YYYY-MM-DD)'),
  status: statusPayment,
  payment_method: z.string().max(50).optional().nullable(),
  reference_month: z.string().regex(/^\d{4}-\d{2}$/, 'Mês de referência inválido (YYYY-MM)').optional(),
  description: z.string().optional().nullable(),
  payment_source: z.string().max(50).optional(),
  reference_id: z.string().uuid().optional().nullable(),
  credits_used: z.union([z.number(), z.string()]).transform(v => (typeof v === 'string' ? parseFloat(v) || undefined : v)).optional().nullable(),
  service_order_id: z.string().uuid().optional().nullable(),
}).strip()

/** Schema para criar/atualizar despesa */
export const ExpenseSchema = z.object({
  id: uuid,
  description: z.string().min(1, 'Descrição é obrigatória').max(255).trim(),
  category: z.string().min(1, 'Categoria é obrigatória').max(100),
  amount: z.union([z.number(), z.string()]).transform(v => {
    const n = typeof v === 'string' ? parseFloat(v) : v
    return isNaN(n) ? 0 : Math.max(0, n)
  }),
  due_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Data de vencimento inválida (YYYY-MM-DD)'),
  payment_date: dateStr,
  status: statusPayment,
  is_recurring: z.boolean().optional(),
  recurrence_period: recurrencePeriod,
  parent_id: z.string().uuid().optional().nullable(),
  notes: z.string().optional().nullable(),
}).strip()

/** Schema para registrar presença */
export const AttendanceSchema = z.object({
  studentId: z.string().uuid(),
  classId: z.string().uuid(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  status: z.enum(['present', 'absent', 'late', 'excused', 'confirmed', 'declined', 'pending']).optional(),
  notes: z.string().optional().nullable(),
}).strip()

export type StudentInput = z.infer<typeof StudentSchema>
export type ProfessionalInput = z.infer<typeof ProfessionalSchema>
export type ClassInput = z.infer<typeof ClassSchema>
export type PaymentInput = z.infer<typeof PaymentSchema>
export type ExpenseInput = z.infer<typeof ExpenseSchema>
export type AttendanceInput = z.infer<typeof AttendanceSchema>
