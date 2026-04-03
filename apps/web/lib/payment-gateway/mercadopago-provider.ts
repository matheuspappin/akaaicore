import { MercadoPagoConfig, Payment } from 'mercadopago';

// Esta interface deve estar alinhada com as necessidades do Mercado Pago Pix
export interface MercadoPagoPixRequest {
  transaction_amount: number; // Valor em reais, não em centavos
  description: string;
  payment_method_id: 'pix';
  payer: {
    email: string;
    first_name?: string;
    last_name?: string;
    identification?: {
      type: 'CPF' | 'CNPJ';
      number: string;
    };
  };
}

export interface MercadoPagoPixResponse {
  id: number;
  status: string;
  point_of_interaction: {
    transaction_data: {
      qr_code: string;
      qr_code_base64: string;
      ticket_url: string;
    };
  };
}

// O Mercado Pago é configurado por tenant (estúdio), semelhante ao PagBank
// Precisaremos buscar o token de acesso do Mercado Pago do tenant
async function getMercadoPagoCredentialsForTenant(tenantId: string) {
  // Simulação, buscar os dados do Supabase
  // No caso real, isso buscaria as credenciais configuradas no Studio
  // await supabaseAdmin.from('studios').select('mercadopago_access_token').eq('id', tenantId).single();
  
  // Como as credenciais não existem no DB ainda, lançamos erro se não achar, ou usamos variável de ambiente para testes globais
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  
  if (!accessToken) {
    throw new Error(`Credenciais Mercado Pago não encontradas para o tenant ${tenantId}`);
  }

  return { accessToken };
}

export async function createMercadoPagoPixOrder(params: {
  orderRequest: MercadoPagoPixRequest;
  tenantId: string;
}): Promise<MercadoPagoPixResponse> {
  const { orderRequest, tenantId } = params;

  const { accessToken } = await getMercadoPagoCredentialsForTenant(tenantId);

  // Inicializa o cliente do Mercado Pago com o token do tenant
  const client = new MercadoPagoConfig({ accessToken: accessToken, options: { timeout: 5000 } });
  const payment = new Payment(client);

  try {
    const response = await payment.create({
      body: {
        ...orderRequest,
        payment_method_id: 'pix',
      }
    });

    return response as unknown as MercadoPagoPixResponse;
  } catch (error) {
    console.error(`Erro ao criar pedido Mercado Pago Pix para o tenant ${tenantId}:`, error);
    throw new Error(`Erro na API do Mercado Pago para o tenant ${tenantId}`);
  }
}
