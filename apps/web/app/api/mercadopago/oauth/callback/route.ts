import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server'; 
import { encrypt } from '@/lib/utils/encryption'; 
import { supabaseAdmin } from '@/lib/supabase'; 

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  const state = req.nextUrl.searchParams.get('state');
  const error = req.nextUrl.searchParams.get('error');
  const errorDescription = req.nextUrl.searchParams.get('error_description');

    const REDIRECT_DASHBOARD = new URL('/solutions/estudio-de-danca/dashboard/settings/payment', req.nextUrl.origin);

  if (error) {
    console.error('Erro no callback OAuth do Mercado Pago:', error, errorDescription);
    REDIRECT_DASHBOARD.searchParams.append('status', 'error');
    REDIRECT_DASHBOARD.searchParams.append('message', 'Mercado Pago authorization failed');
    return NextResponse.redirect(REDIRECT_DASHBOARD);
  }

  if (!code) {
    REDIRECT_DASHBOARD.searchParams.append('status', 'error');
    REDIRECT_DASHBOARD.searchParams.append('message', 'Missing code');
    return NextResponse.redirect(REDIRECT_DASHBOARD);
  }

  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      REDIRECT_DASHBOARD.searchParams.append('status', 'error');
      REDIRECT_DASHBOARD.searchParams.append('message', 'User not authenticated');
      return NextResponse.redirect(REDIRECT_DASHBOARD);
    }

    // Busca o studio_id (tenantId) do usuário logado
    const { data: profile } = await supabase
      .from('users_internal')
      .select('studio_id')
      .eq('id', user.id)
      .single();

    const tenantId = profile?.studio_id;

    if (!tenantId) {
      REDIRECT_DASHBOARD.searchParams.append('status', 'error');
      REDIRECT_DASHBOARD.searchParams.append('message', 'Tenant not found');
      return NextResponse.redirect(REDIRECT_DASHBOARD);
    }

    const MERCADOPAGO_CLIENT_ID = process.env.MERCADOPAGO_CLIENT_ID;
    const MERCADOPAGO_CLIENT_SECRET = process.env.MERCADOPAGO_CLIENT_SECRET;
    
    if (!MERCADOPAGO_CLIENT_ID || !MERCADOPAGO_CLIENT_SECRET) {
      return NextResponse.json({ message: 'Credenciais Mercado Pago do aplicativo não configuradas.' }, { status: 500 });
    }

    const REDIRECT_URI = `${req.nextUrl.origin}/api/mercadopago/oauth/callback`;

    const MERCADOPAGO_TOKEN_URL = 'https://api.mercadopago.com/oauth/token';

    // Chamada real à API do Mercado Pago para trocar o CODE por TOKEN
    const tokenResponse = await fetch(MERCADOPAGO_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${MERCADOPAGO_CLIENT_SECRET}` // Optional depending on MP version, but recommended
      },
      body: new URLSearchParams({
        client_id: MERCADOPAGO_CLIENT_ID,
        client_secret: MERCADOPAGO_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Erro ao trocar token Mercado Pago:', tokenData);
      REDIRECT_DASHBOARD.searchParams.append('status', 'error');
      REDIRECT_DASHBOARD.searchParams.append('message', tokenData.message || 'Erro ao obter token do Mercado Pago');
      return NextResponse.redirect(REDIRECT_DASHBOARD);
    }

    const { access_token, refresh_token, expires_in, public_key } = tokenData;

    const encryptedAccessToken = encrypt(access_token, process.env.ENCRYPTION_KEY!);
    const encryptedRefreshToken = encrypt(refresh_token, process.env.ENCRYPTION_KEY!);
    const tokenExpiresAt = new Date(Date.now() + expires_in * 1000);

    const { error: dbError } = await supabaseAdmin
      .from('studios')
      .update({
        mercadopago_access_token: encryptedAccessToken,
        mercadopago_refresh_token: encryptedRefreshToken,
        mercadopago_token_expires_at: tokenExpiresAt.toISOString(),
        mercadopago_public_key: public_key, // Save public key if needed for frontend
      })
      .eq('id', tenantId);

    if (dbError) {
      console.error('Erro ao salvar tokens Mercado Pago no DB:', dbError);
      REDIRECT_DASHBOARD.searchParams.append('status', 'error');
      REDIRECT_DASHBOARD.searchParams.append('message', 'Failed to save Mercado Pago tokens');
      return NextResponse.redirect(REDIRECT_DASHBOARD);
    }

    REDIRECT_DASHBOARD.searchParams.append('status', 'success');
    REDIRECT_DASHBOARD.searchParams.append('message', 'Conta Mercado Pago conectada com sucesso!');
    return NextResponse.redirect(REDIRECT_DASHBOARD);

  } catch (err: any) {
    console.error('Erro no callback OAuth do Mercado Pago:', err);
    REDIRECT_DASHBOARD.searchParams.append('status', 'error');
    REDIRECT_DASHBOARD.searchParams.append('message', err.message);
    return NextResponse.redirect(REDIRECT_DASHBOARD);
  }
}
