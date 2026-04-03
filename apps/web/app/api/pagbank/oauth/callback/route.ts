// apps/web/app/api/pagbank/oauth/callback/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server'; // Para obter o ID do tenant
import { encrypt } from '@/lib/utils/encryption'; // Funções de criptografia
import { supabaseAdmin } from '@/lib/supabase'; // Cliente Supabase com privilégios de admin

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');
  const state = req.nextUrl.searchParams.get('state');
  const error = req.nextUrl.searchParams.get('error');
  const errorDescription = req.nextUrl.searchParams.get('error_description');

    const REDIRECT_DASHBOARD = new URL('/solutions/estudio-de-danca/dashboard/settings/payment', req.nextUrl.origin);

  if (error) {
    console.error('Erro no callback OAuth do PagBank:', error, errorDescription);
    REDIRECT_DASHBOARD.searchParams.append('status', 'error');
    REDIRECT_DASHBOARD.searchParams.append('message', 'PagBank authorization failed');
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

    const PAGBANK_CLIENT_ID = process.env.PAGBANK_CLIENT_ID;
    const PAGBANK_CLIENT_SECRET = process.env.PAGBANK_CLIENT_SECRET;
    
    if (!PAGBANK_CLIENT_ID || !PAGBANK_CLIENT_SECRET) {
      return NextResponse.json({ message: 'Credenciais PagBank do aplicativo não configuradas.' }, { status: 500 });
    }

    const REDIRECT_URI = `${req.nextUrl.origin}/api/pagbank/oauth/callback`;

    const PAGBANK_TOKEN_URL = process.env.NODE_ENV === 'production'
      ? 'https://api.pagseguro.com/oauth2/token'
      : 'https://sandbox.api.pagseguro.com/oauth2/token';

    // Chamada real à API do PagBank para trocar o CODE por TOKEN
    const tokenResponse = await fetch(PAGBANK_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X_CLIENT_ID': PAGBANK_CLIENT_ID,
        'X_CLIENT_SECRET': PAGBANK_CLIENT_SECRET
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Erro ao trocar token PagBank:', tokenData);
      REDIRECT_DASHBOARD.searchParams.append('status', 'error');
      REDIRECT_DASHBOARD.searchParams.append('message', tokenData.error_description || 'Erro ao obter token do PagBank');
      return NextResponse.redirect(REDIRECT_DASHBOARD);
    }

    const { access_token, refresh_token, expires_in } = tokenData;

    const encryptedAccessToken = encrypt(access_token, process.env.ENCRYPTION_KEY!);
    const encryptedRefreshToken = encrypt(refresh_token, process.env.ENCRYPTION_KEY!);
    const tokenExpiresAt = new Date(Date.now() + expires_in * 1000);

    const { error: dbError } = await supabaseAdmin
      .from('studios')
      .update({
        pagbank_access_token: encryptedAccessToken,
        pagbank_refresh_token: encryptedRefreshToken,
        pagbank_token_expires_at: tokenExpiresAt.toISOString(),
      })
      .eq('id', tenantId);

    if (dbError) {
      console.error('Erro ao salvar tokens PagBank no DB:', dbError);
      REDIRECT_DASHBOARD.searchParams.append('status', 'error');
      REDIRECT_DASHBOARD.searchParams.append('message', 'Failed to save PagBank tokens');
      return NextResponse.redirect(REDIRECT_DASHBOARD);
    }

    REDIRECT_DASHBOARD.searchParams.append('status', 'success');
    REDIRECT_DASHBOARD.searchParams.append('message', 'Conta PagBank conectada com sucesso!');
    return NextResponse.redirect(REDIRECT_DASHBOARD);

  } catch (err: any) {
    console.error('Erro no callback OAuth do PagBank:', err);
    REDIRECT_DASHBOARD.searchParams.append('status', 'error');
    REDIRECT_DASHBOARD.searchParams.append('message', err.message);
    return NextResponse.redirect(REDIRECT_DASHBOARD);
  }
}