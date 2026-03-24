import { NextRequest, NextResponse } from 'next/server';
import { createPagBankPixOrder } from '@/lib/payment-gateway/pagbank-provider';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const customerTaxId = body.customer?.tax_id || '00000000000';

    // Valide os dados do corpo da requisição aqui
    // Por exemplo, usando um schema Zod ou similar

    const orderRequest = {
      reference_id: body.reference_id || `order-${Date.now()}`,
      customer: {
        name: body.customer.name || 'Nome do Cliente',
        email: body.customer.email || 'cliente.avulso@exemplo.com', // Usando um email genérico em caso de não fornecimento
        tax_id: customerTaxId,
        phones: [
          {
            country: body.customer.phones?.[0]?.country || '55',
            area: body.customer.phones?.[0]?.area || '11',
            number: body.customer.phones?.[0]?.number || '999999999',
            type: 'MOBILE',
          },
        ],
      },
      items: body.items || [
        {
          name: 'Item Padrão',
          quantity: 1,
          unit_amount: 1000, // Em centavos (R$10.00)
        },
      ],
      qr_codes: [
        {
          amount: {
            value: body.amount || 1000,
          },
          expiration_date: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // Expira em 30 minutos
        },
      ],
      shipping: body.shipping,
      notification_urls: body.notification_urls || ['https://meusite.com/notificacoes'],
    };

    const pagBankResponse = await createPagBankPixOrder(orderRequest);

    return NextResponse.json(pagBankResponse);
  } catch (error) {
    console.error('Erro na API /api/pagbank/pix:', error);
    return NextResponse.json(
      { error: 'Erro ao criar pedido Pix PagBank', details: (error as Error).message },
      { status: 500 }
    );
  }
}
