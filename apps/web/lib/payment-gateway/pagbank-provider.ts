import type { CreateCheckoutParams, CreateCheckoutResult, PaymentMethod } from './types';
import { supabaseAdmin } from '@/lib/supabase'; // Importa o cliente Supabase com privilégios de admin
import { encrypt, decrypt } from '@/lib/utils/encryption'; // Importa as funções de criptografia

interface PagBankCustomer {
  name: string;
  email: string;
  tax_id: string;
  phones: Array<{
    country: string;
    area: string;
    number: string;
    type: 'MOBILE';
  }>;
}

interface PagBankItem {
  name: string;
  quantity: number;
  unit_amount: number;
}

interface PagBankQrCode {
  amount: {
    value: number;
  };
  expiration_date: string;
}

interface PagBankAddress {
  street: string;
  number: string;
  complement?: string;
  locality: string;
  city: string;
  region_code: string;
  country: string;
  postal_code: string;
}

interface PagBankShipping {
  address: PagBankAddress;
}

interface PagBankOrderRequest {
  reference_id: string;
  customer: PagBankCustomer;
  items: PagBankItem[];
  qr_codes: PagBankQrCode[];
  shipping?: PagBankShipping;
  notification_urls?: string[];
}

interface PagBankOrderResponse {
  id: string;
  reference_id: string;
  status: string;
  qr_codes: Array<{
    id: string;
    text_code: string;
    base64_image: string;
  }>;
  // ... outros campos que podem vir da API do PagBank
}

// Adicione uma função para buscar e descriptografar as credenciais do PagBank do tenant
async function getPagBankCredentialsForTenant(tenantId: string) {
  const { data: organization, error } = await supabaseAdmin
    .from('studios')
    .select('pagbank_client_id, pagbank_client_secret, pagbank_access_token, pagbank_refresh_token, pagbank_token_expires_at')
    .eq('id', tenantId)
    .single();

  if (error || !organization) {
    throw new Error(`Credenciais PagBank não encontradas para o tenant ${tenantId}`);
  }

  // Descriptografar o client secret e/ou access token
  const decryptedClientSecret = organization.pagbank_client_secret ? decrypt(organization.pagbank_client_secret, process.env.ENCRYPTION_KEY!) : undefined;
  let accessToken = organization.pagbank_access_token ? decrypt(organization.pagbank_access_token, process.env.ENCRYPTION_KEY!) : undefined;
  let refreshToken = organization.pagbank_refresh_token ? decrypt(organization.pagbank_refresh_token, process.env.ENCRYPTION_KEY!) : undefined;
  let tokenExpiresAt = organization.pagbank_token_expires_at ? new Date(organization.pagbank_token_expires_at) : undefined;

  // Lógica para renovar o token de acesso se ele estiver expirado
  if (accessToken && refreshToken && tokenExpiresAt && tokenExpiresAt < new Date()) {
    console.log(`Token de acesso PagBank para o tenant ${tenantId} expirado. Tentando renovar...`);
    
    try {
      const PAGBANK_CLIENT_ID = process.env.PAGBANK_CLIENT_ID;
      const PAGBANK_CLIENT_SECRET = process.env.PAGBANK_CLIENT_SECRET;

      if (!PAGBANK_CLIENT_ID || !PAGBANK_CLIENT_SECRET) {
        throw new Error('Credenciais PagBank do aplicativo (CLIENT_ID/SECRET) não configuradas no servidor.');
      }

      const PAGBANK_TOKEN_URL = process.env.NODE_ENV === 'production'
        ? 'https://api.pagseguro.com/oauth2/token'
        : 'https://sandbox.api.pagseguro.com/oauth2/token';

      const response = await fetch(PAGBANK_TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${PAGBANK_CLIENT_ID}:${PAGBANK_CLIENT_SECRET}`).toString('base64')}`
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Erro ao renovar token PagBank:', data);
        throw new Error(data.error_description || 'Erro ao renovar token do PagBank');
      }

      accessToken = data.access_token;
      refreshToken = data.refresh_token || refreshToken;
      tokenExpiresAt = new Date(Date.now() + data.expires_in * 1000);

      await supabaseAdmin.from('studios').update({
        pagbank_access_token: encrypt(accessToken!, process.env.ENCRYPTION_KEY!),
        pagbank_refresh_token: encrypt(refreshToken!, process.env.ENCRYPTION_KEY!),
        pagbank_token_expires_at: tokenExpiresAt.toISOString()
      }).eq('id', tenantId);

      console.log(`Token de acesso PagBank para o tenant ${tenantId} renovado com sucesso.`);
    } catch (refreshError: any) {
      console.error(`Falha ao renovar token PagBank para o tenant ${tenantId}:`, refreshError);
      throw new Error(`Sua conexão com o PagBank expirou e não pôde ser renovada automaticamente. Por favor, reconecte sua conta nas configurações. Erro: ${refreshError.message}`);
    }
  }

  return {
    clientId: organization.pagbank_client_id,
    clientSecret: decryptedClientSecret,
    accessToken: accessToken,
    refreshToken: refreshToken,
    tokenExpiresAt: tokenExpiresAt,
  };
}


export async function createPagBankPixOrder(params: {
  orderRequest: PagBankOrderRequest;
  tenantId: string;
}): Promise<PagBankOrderResponse> {
  const { orderRequest, tenantId } = params;
  const PAGBANK_API_URL = process.env.NODE_ENV === 'production' 
    ? 'https://api.pagseguro.com/orders' 
    : 'https://sandbox.api.pagseguro.com/orders';
  
  // Obtenha as credenciais do tenant (isso já cuida da renovação se necessário)
  const { accessToken } = await getPagBankCredentialsForTenant(tenantId);

  if (!accessToken) {
    throw new Error('Token de acesso PagBank não está definido para o estúdio. Por favor, conecte a conta PagBank nas configurações.');
  }

  const response = await fetch(PAGBANK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'x-api-version': '4.0', // Recomendado pela documentação do PagBank
    },
    body: JSON.stringify(orderRequest),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error(`Erro ao criar pedido PagBank para o tenant ${tenantId}:`, errorData);
    throw new Error(`Erro na API do PagBank para o tenant ${tenantId}: ${response.status} - ${JSON.stringify(errorData)}`);
  }

  return response.json();
}
