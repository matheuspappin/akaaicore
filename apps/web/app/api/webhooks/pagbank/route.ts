import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import logger from '@/lib/logger';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    logger.info('PagBank Webhook received:', body);

    const { id, reference_id, status, charges } = body;

    // PagBank pode mandar notificações de diferentes tipos. 
    // Para ordens/cobranças do V4, geralmente temos reference_id e status.
    
    if (!reference_id) {
      // Se não tem reference_id, pode ser uma notificação de outro tipo ou malformada
      logger.warn('Webhook PagBank sem reference_id recebido:', id);
      return NextResponse.json({ message: 'Missing reference_id' }, { status: 200 });
    }

    // Formato do Reference ID: pb_order_${studioId}_${studentId || 'anon'}_${type}_${invoiceId}_${Date.now()}
    const parts = reference_id.split('_');
    if (parts[0] !== 'pb' || parts[1] !== 'order') {
       logger.info('Ignorando webhook com reference_id de outro formato:', reference_id);
       return NextResponse.json({ message: 'Ignored' }, { status: 200 });
    }

    const studioId = parts[2];
    const studentIdStr = parts[3];
    const studentId = (studentIdStr && studentIdStr !== 'anon') ? studentIdStr : null;
    const type = parts[4] || 'payment';
    const invoiceId = parts[5] || '0';

    // Estados possíveis: PAID, DECLINED, CANCELED, WAITING
    if (status === 'PAID') {
       logger.info(`✅ Pagamento PagBank CONFIRMADO: ${reference_id} (Studio: ${studioId})`);

       const amount = charges?.[0]?.amount?.value ? charges[0].amount.value / 100 : 0;
       const paymentMethod = charges?.[0]?.payment_method?.type || 'PIX';
       
       // 1. Registrar o pagamento na tabela de pagamentos
       const { data: payment, error: paymentError } = await supabaseAdmin
         .from('payments')
         .insert({
           studio_id: studioId,
           student_id: studentId,
           amount: amount,
           status: 'paid',
           payment_date: new Date().toISOString(),
           due_date: new Date().toISOString(),
           payment_method: `pagbank_${paymentMethod.toLowerCase()}`,
           description: type === 'package' ? `Compra de Pacote via Pix PagBank` : `Pix PagBank - Ref: ${reference_id}`,
           reference_month: new Date().toISOString().slice(0, 7),
           payment_source: type === 'package' ? 'package_purchase' : 'direct_pix',
           reference_id: invoiceId !== '0' ? invoiceId : null
         })
         .select()
         .single();

       if (paymentError) {
         logger.error('❌ Erro ao salvar pagamento do PagBank no banco:', paymentError);
         return NextResponse.json({ message: 'Error saving payment' }, { status: 500 });
       }

       // 2. Se for compra de pacote, liberar créditos
       if (type === 'package' && studentId && invoiceId !== '0') {
          const { data: pkg } = await supabaseAdmin
            .from('lesson_packages')
            .select('lessons_count')
            .eq('id', invoiceId)
            .single();

          if (pkg) {
             const { error: creditError } = await supabaseAdmin.rpc('adjust_student_credits', {
               p_student_id: studentId,
               p_studio_id: studioId,
               p_amount: pkg.lessons_count
             });
             if (creditError) {
                logger.error('❌ Erro ao adicionar créditos via webhook PagBank:', creditError);
             } else {
                logger.info(`✅ Créditos adicionados ao aluno ${studentId}: ${pkg.lessons_count}`);
             }
          }
       }

       // 3. Notificar o sistema
       await supabaseAdmin.from('notifications').insert({
         studio_id: studioId,
         title: 'Pagamento Recebido (Pix)',
         message: `Um pagamento de R$ ${amount.toFixed(2)} foi recebido via Pix PagBank.`,
         type: 'success',
         metadata: { payment_id: payment.id, reference_id }
       });
    } else {
       logger.info(`ℹ️ Webhook PagBank status: ${status} para ref: ${reference_id}`);
    }

    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (error: any) {
    logger.error('💥 Erro fatal no processamento do webhook do PagBank:', error);
    // Retornamos 200 para o PagBank não ficar tentando reenviar em caso de erro de lógica nosso, 
    // a menos que queiramos o retry. PagBank espera 200 ou 204.
    return NextResponse.json({ message: error.message }, { status: 200 });
  }
}
