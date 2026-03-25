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

// GET /api/dance-studio/financeiro?studioId=...
// Returns { payments, stats } with KPI aggregation
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
    const now = new Date()
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
    const startOfMonth = `${currentMonth}-01`
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      .toISOString().split('T')[0]

    const [paymentsRes, expensesRes, professionalFinancesRes, erpOrdersRes, packagesRes, settingsRes] = await Promise.all([
      supabase
        .from('payments')
        .select('id, amount, description, status, due_date, payment_date, created_at, student_id, payment_method, reference_month, payment_source, credits_used, reference_id, student:students(id, name)')
        .eq('studio_id', studioId)
        .order('due_date', { ascending: false }),

      supabase
        .from('expenses')
        .select('*')
        .eq('studio_id', studioId)
        .order('due_date', { ascending: false }),

      supabase
        .from('professional_finances')
        .select('*, professional:professionals(id, name)')
        .eq('studio_id', studioId)
        .order('created_at', { ascending: false })
        .limit(50),

      supabase
        .from('erp_orders')
        .select('id, total_amount, customer_name, status, created_at, integration_channels(name)')
        .eq('studio_id', studioId)
        .in('status', ['finished', 'paid'])
        .order('created_at', { ascending: false }),

      supabase
        .from('lesson_packages')
        .select('price, lessons_count')
        .eq('studio_id', studioId)
        .eq('is_active', true),

      supabase
        .from('studio_settings')
        .select('setting_value')
        .eq('studio_id', studioId)
        .eq('setting_key', 'pdv_credit_reais_per_unit')
        .maybeSingle(),
    ])

    // Cálculo da taxa de conversão de créditos (Equivalente em R$)
    let conversionRate = 70
    if (settingsRes.data?.setting_value) {
      conversionRate = parseFloat(settingsRes.data.setting_value)
    } else {
      const packages = packagesRes.data || []
      if (packages.length > 0) {
        const rates = packages.map((p: any) => (Number(p.price) || 0) / Math.max(1, Number(p.lessons_count) || 1))
        conversionRate = Math.min(...rates)
      }
    }

    const payments = (paymentsRes.data || []).map((p: any) => ({
      ...p,
      student_name: p.student?.name ?? 'Aluno',
    }))

    const erpOrders = (erpOrdersRes.data || []).map((o: any) => ({
      id: o.id,
      amount: o.total_amount,
      description: `Venda: ${o.customer_name || 'Consumidor'} (${o.integration_channels?.name || 'PDV'})`,
      status: 'paid', // finished no ERP equivale a paid no financeiro
      payment_date: o.created_at,
      due_date: o.created_at,
      student_name: o.customer_name || 'Consumidor',
      payment_method: 'Omnichannel',
      payment_source: 'erp'
    }))

    const allReceitas = [...payments, ...erpOrders].sort((a, b) => 
      new Date(b.payment_date || b.due_date || 0).getTime() - 
      new Date(a.payment_date || a.due_date || 0).getTime()
    )

    const expenses = expensesRes.data || []

    const professionalFinances = (professionalFinancesRes.data || []).map((f: any) => ({
      ...f,
      professional_name: f.professional?.name ?? 'Professor',
    }))

    // KPI: receitas do mês atual (paid)
    const monthPaidPayments = payments.filter((p: any) =>
      p.status === 'paid' &&
      (p.payment_date?.startsWith(currentMonth) || p.due_date?.startsWith(currentMonth))
    )
    const totalReceitaMensalidades = monthPaidPayments.reduce((s: number, p: any) => {
      const amount = Number(p.amount || 0)
      const creditValue = (Number(p.credits_used) || 0) * conversionRate
      // Soma o valor em reais OU o valor equivalente do crédito (se o valor em reais for 0)
      return s + amount + (amount === 0 ? creditValue : 0)
    }, 0)

    const monthPaidERP = erpOrders.filter((o: any) => o.payment_date?.startsWith(currentMonth))
    const totalReceitaERP = monthPaidERP.reduce((s: number, o: any) => s + Number(o.amount || 0), 0)

    const totalReceita = totalReceitaMensalidades + totalReceitaERP

    // KPI: despesas do mês
    const monthExpenses = expenses.filter((e: any) => e.due_date?.startsWith(currentMonth))
    const totalDespesas = monthExpenses.reduce((s: number, e: any) => s + Number(e.amount || 0), 0)

    // KPI: inadimplência (overdue + pending)
    const inadimplencia = payments
      .filter((p: any) => p.status === 'overdue')
      .reduce((s: number, p: any) => s + Number(p.amount || 0), 0)

    // Monthly chart data (last 6 months)
    const monthlyData: Record<string, { month: string; receita: number; despesas: number }> = {}
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
      const monthLabel = d.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' })
      monthlyData[key] = { month: monthLabel, receita: 0, despesas: 0 }
    }

    payments.forEach((p: any) => {
      if (p.status !== 'paid') return
      const key = (p.payment_date || p.due_date || '').substring(0, 7)
      if (monthlyData[key]) {
        const amount = Number(p.amount || 0)
        const creditValue = (Number(p.credits_used) || 0) * conversionRate
        monthlyData[key].receita += amount + (amount === 0 ? creditValue : 0)
      }
    })
    erpOrders.forEach((o: any) => {
      const key = (o.payment_date || '').substring(0, 7)
      if (monthlyData[key]) monthlyData[key].receita += Number(o.amount || 0)
    })
    expenses.forEach((e: any) => {
      const key = (e.due_date || '').substring(0, 7)
      if (monthlyData[key]) monthlyData[key].despesas += Number(e.amount || 0)
    })

    // Expenses by category
    const categoryMap: Record<string, number> = {}
    expenses.forEach((e: any) => {
      categoryMap[e.category] = (categoryMap[e.category] || 0) + Number(e.amount || 0)
    })
    const expensesByCategory = Object.entries(categoryMap).map(([category, valor]) => ({ category, valor }))

    return NextResponse.json({
      payments: allReceitas,
      expenses,
      professionalFinances,
      conversionRate, // Adicionado para uso na UI
      stats: {
        totalReceita,
        totalDespesas,
        lucroLiquido: totalReceita - totalDespesas,
        inadimplencia,
      },
      chartData: {
        monthly: Object.values(monthlyData),
        byCategory: expensesByCategory,
      },
    })
  } catch (error: any) {
    logger.error('❌ [DANCE-STUDIO/FINANCEIRO GET] Erro:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST /api/dance-studio/financeiro — create payment
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { studioId, student_id, amount, description, due_date, payment_method, reference_month } = body

  if (!studioId || !amount) {
    return NextResponse.json({ error: 'studioId e amount são obrigatórios' }, { status: 400 })
  }

  const access = await checkStudioAccess(request, studioId)
  if (!access.authorized) return access.response

  const supabase = getAdmin()

  try {
    const { data, error } = await supabase
      .from('payments')
      .insert({
        studio_id: studioId,
        student_id: student_id || null,
        amount: Number(amount),
        description: description || 'Mensalidade',
        due_date: due_date || null,
        status: 'pending',
        payment_method: payment_method || null,
        reference_month: reference_month || null,
        payment_source: 'manual',
      })
      .select('id, amount, description, status, due_date, payment_method, reference_month')
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    logger.error('❌ [DANCE-STUDIO/FINANCEIRO POST] Erro:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PATCH /api/dance-studio/financeiro — update payment status
export async function PATCH(request: NextRequest) {
  const body = await request.json()
  const { studioId, paymentId, status, payment_method } = body

  if (!studioId || !paymentId || !status) {
    return NextResponse.json({ error: 'studioId, paymentId e status são obrigatórios' }, { status: 400 })
  }

  const access = await checkStudioAccess(request, studioId)
  if (!access.authorized) return access.response

  const supabase = getAdmin()

  try {
    const updateData: Record<string, any> = { status }
    if (status === 'paid') {
      updateData.payment_date = new Date().toISOString().split('T')[0]
      if (payment_method) updateData.payment_method = payment_method
    }

    const { data, error } = await supabase
      .from('payments')
      .update(updateData)
      .eq('id', paymentId)
      .eq('studio_id', studioId)
      .select('id, status, payment_date')
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error: any) {
    logger.error('❌ [DANCE-STUDIO/FINANCEIRO PATCH] Erro:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// DELETE /api/dance-studio/financeiro?studioId=...&paymentId=...
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const studioId = searchParams.get('studioId')
  const paymentId = searchParams.get('paymentId')

  if (!studioId || !paymentId) {
    return NextResponse.json({ error: 'studioId e paymentId são obrigatórios' }, { status: 400 })
  }

  const access = await checkStudioAccess(request, studioId)
  if (!access.authorized) return access.response

  const supabase = getAdmin()

  try {
    const { error } = await supabase
      .from('payments')
      .delete()
      .eq('id', paymentId)
      .eq('studio_id', studioId)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    logger.error('❌ [DANCE-STUDIO/FINANCEIRO DELETE] Erro:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
