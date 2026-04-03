import { NextRequest, NextResponse } from 'next/server';
import { createMercadoPagoPixOrder } from '@/lib/payment-gateway/mercadopago-provider';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const customerTaxId = body.customer?.tax_id || '00000000000';

    // Valide os dados do corpo da requisição aqui
    // Por exemplo, usando um schema Zod ou similar

    const studioId = body.studioId || body.tenantId; // Aceita ambos, preferindo studioId
    if (!studioId) {
      return NextResponse.json({ error: 'studioId é obrigatório' }, { status: 400 });
    }

    const origin = req.nextUrl.origin;
    const NOTIFICATION_URL = `${origin}/api/webhooks/mercadopago`;

    const studentId = body.studentId || body.customerId;
    const type = body.type || 'payment'; // 'package' ou 'payment'
    const invoiceId = body.invoiceId || 'unknown';

    // Para Mercado Pago PIX
    const orderRequest = {
      transaction_amount: (body.amount || 1000) / 100, // Mercado pago espera reais (ex: 10.00), não centavos
      description: body.description || `mp_order_${studioId}_${studentId || 'anon'}_${type}_${invoiceId}_${Date.now()}`.substring(0,200),
      payment_method_id: 'pix' as const,
      payer: {
        email: body.customer?.email || 'cliente.avulso@exemplo.com', // Usando um email genérico em caso de não fornecimento
        first_name: body.customer?.name?.split(' ')[0] || 'Nome',
        last_name: body.customer?.name?.split(' ').slice(1).join(' ') || 'Cliente',
        identification: {
            type: customerTaxId.length > 11 ? 'CNPJ' as const : 'CPF' as const,
            number: customerTaxId,
        }
      },
    };

    const tenantId = studioId; 
    const mercadoPagoResponse = await createMercadoPagoPixOrder({ orderRequest, tenantId });

    return NextResponse.json(mercadoPagoResponse);
  } catch (error) {
    console.error('Erro na API /api/mercadopago/pix:', error);
    return NextResponse.json(
      { error: 'Erro ao criar pedido Pix Mercado Pago', details: (error as Error).message },
      { status: 500 }
    );
  }
}
