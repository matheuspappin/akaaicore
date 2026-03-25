// apps/web/app/api/pagbank/oauth/authorize/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const PAGBANK_CLIENT_ID = process.env.PAGBANK_CLIENT_ID; // Seu Client ID do PagBank
  const origin = req.nextUrl.origin;
  const REDIRECT_URI = `${origin}/api/pagbank/oauth/callback`; // URL de callback dinâmica (local ou prod)

  if (!PAGBANK_CLIENT_ID) {
    return NextResponse.json({ message: 'PAGBANK_CLIENT_ID não configurado.' }, { status: 500 });
  }

  const PAGBANK_AUTH_URL = process.env.NODE_ENV === 'production'
    ? 'https://connect.pagseguro.uol.com.br/oauth2/authorize'
    : 'https://connect.sandbox.pagseguro.uol.com.br/oauth2/authorize';

  const state = req.nextUrl.searchParams.get('studio_id') || 'akaai_hub'; // Passamos o studio_id no state se houver, ou um fixo
  
  const authorizeUrl = new URL(PAGBANK_AUTH_URL); // URL de autorização oficial do PagBank
  authorizeUrl.searchParams.append('client_id', PAGBANK_CLIENT_ID);
  authorizeUrl.searchParams.append('response_type', 'code');
  authorizeUrl.searchParams.append('scope', 'payments.read payments.create accounts.read'); // Scopes oficiais do PagBank Connect
  authorizeUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  authorizeUrl.searchParams.append('state', state); // Importante para segurança e para recuperar o contexto se necessário

  return NextResponse.redirect(authorizeUrl.toString());
}