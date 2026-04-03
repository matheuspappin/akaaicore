import { MercadoPagoConfig, Payment } from 'mercadopago';
import { supabaseAdmin } from '@/lib/supabase';
import { decrypt } from '@/lib/utils/encryption';
import crypto from 'crypto';

// ... (remaining imports)

// Esta interface deve estar alinhada com as necessidades do Mercado Pago Pix
export interface MercadoPagoPixRequest {
  transaction_amount: number; // Valor em reais, não em centavos
  description: string;
  payment_method_id: 'pix';
  notification_url?: string;
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

export interface MercadoPagoQrOrderRequest {
  type: "qr";
  total_amount?: number;
  description?: string;
  external_reference: string;
  expiration_time?: string;
  config: {
    qr: {
      external_pos_id: string;
      mode?: "static" | "dynamic" | "hybrid";
    };
  };
  transactions: {
    payments: Array<{
      amount: number;
    }>;
  };
  items?: Array<{
    title: string;
    unit_price: number;
    unit_measure?: string;
    external_code?: string;
    quantity: number;
    external_categories?: Array<{
      id: string;
    }>;
  }>;
  discounts?: {
    payment_methods?: Array<{
      type: string;
      new_total_amount: number;
    }>;
  };
}

export interface MercadoPagoQrOrderResponse {
  id: string;
  type: string;
  processing_mode: string;
  external_reference: string;
  description: string;
  total_amount: string;
  expiration_time: string;
  country_code: string;
  user_id: string;
  status: string;
  status_detail: string;
  currency: string;
  created_date: string;
  last_updated_date: string;
  transactions: {
    payments: Array<{
      id: string;
      amount: string;
      status: string;
      status_detail: string;
    }>;
  };
  config: {
    qr: {
      external_pos_id: string;
      mode: string;
    };
  };
  type_response?: {
    qr_data: string; // Presente em mode dynamic e hybrid
  };
}

// O Mercado Pago é configurado por tenant (estúdio), semelhante ao PagBank
// Precisaremos buscar o token de acesso do Mercado Pago do tenant
async function getMercadoPagoCredentialsForTenant(tenantId: string) {
  const { data: studio, error } = await supabaseAdmin
    .from('studios')
    .select('mercadopago_access_token')
    .eq('id', tenantId)
    .single();

  if (error || !studio?.mercadopago_access_token) {
    throw new Error(`Configuração do Mercado Pago incompleta para este estúdio. Por favor, conecte sua conta nas configurações.`);
  }

  try {
    const accessToken = decrypt(studio.mercadopago_access_token, process.env.ENCRYPTION_KEY!);
    return { accessToken };
  } catch (err) {
    console.error('Erro ao descriptografar token Mercado Pago:', err);
    throw new Error('Falha ao processar credenciais de pagamento.');
  }
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
      },
      requestOptions: {
        idempotencyKey: crypto.randomUUID(),
      }
    });

    return response as unknown as MercadoPagoPixResponse;
  } catch (error) {
    console.error(`Erro ao criar pedido Mercado Pago Pix para o tenant ${tenantId}:`, error);
    throw new Error(`Erro na API do Mercado Pago para o tenant ${tenantId}`);
  }
}

/**
 * Cria uma order para pagamento presencial com QR Code (Estático, Dinâmico ou Híbrido)
 */
export async function createMercadoPagoQrOrder(params: {
  orderRequest: MercadoPagoQrOrderRequest;
  tenantId: string;
  idempotencyKey?: string;
}): Promise<MercadoPagoQrOrderResponse> {
  const { orderRequest, tenantId, idempotencyKey } = params;
  const { accessToken } = await getMercadoPagoCredentialsForTenant(tenantId);
  const key = idempotencyKey || crypto.randomUUID();

  try {
    const response = await fetch('https://api.mercadopago.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Idempotency-Key': key,
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(orderRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Mercado Pago QR Order API Error:', errorData);
      throw new Error(`Erro na API Mercado Pago (HTTP ${response.status})`);
    }

    return await response.json() as MercadoPagoQrOrderResponse;
  } catch (error) {
    console.error(`Erro ao criar order QR Mercado Pago para o tenant ${tenantId}:`, error);
    throw new Error(`Erro ao conectar com Mercado Pago QR API para o tenant ${tenantId}`);
  }
}

/**
 * Cancela uma order de QR Code que ainda está com status 'created'
 */
export async function cancelMercadoPagoQrOrder(params: {
  orderId: string;
  tenantId: string;
}) {
  const { orderId, tenantId } = params;
  const { accessToken } = await getMercadoPagoCredentialsForTenant(tenantId);

  try {
    const response = await fetch(`https://api.mercadopago.com/v1/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ status: 'canceled' })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Mercado Pago Cancel Order API Error:', errorData);
      throw new Error(`Erro ao cancelar order Mercado Pago (HTTP ${response.status})`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erro ao cancelar order QR Mercado Pago:`, error);
    throw error;
  }
}

/**
 * Reembolsa uma order processada.
 */
export async function refundMercadoPagoQrOrder(params: {
  orderId: string;
  tenantId: string;
  idempotencyKey?: string;
}) {
  const { orderId, tenantId, idempotencyKey } = params;
  const { accessToken } = await getMercadoPagoCredentialsForTenant(tenantId);
  const key = idempotencyKey || crypto.randomUUID();

  try {
    const response = await fetch(`https://api.mercadopago.com/v1/orders/${orderId}/refunds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Idempotency-Key': key,
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Mercado Pago Refund Order API Error:', errorData);
      throw new Error(`Erro ao reembolsar order Mercado Pago (HTTP ${response.status})`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erro ao reembolsar order QR Mercado Pago:`, error);
    throw error;
  }
}

/**
 * Consulta os dados de uma order (incluindo status em tempo real).
 */
export async function getMercadoPagoQrOrder(params: {
  orderId: string;
  tenantId: string;
}) {
  const { orderId, tenantId } = params;
  const { accessToken } = await getMercadoPagoCredentialsForTenant(tenantId);

  try {
    const response = await fetch(`https://api.mercadopago.com/v1/orders/${orderId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Mercado Pago Get Order API Error:', errorData);
      throw new Error(`Erro ao consultar order Mercado Pago (HTTP ${response.status})`);
    }

    return await response.json() as MercadoPagoQrOrderResponse;
  } catch (error) {
    console.error(`Erro ao consultar order QR Mercado Pago:`, error);
    throw error;
  }
}
