import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const MERCADOPAGO_CLIENT_ID = process.env.MERCADOPAGO_CLIENT_ID; 
  const origin = process.env.NEXT_PUBLIC_APP_URL || 'https://akaaicore.com';
  const REDIRECT_URI = `${origin}/api/mercadopago/oauth/callback`; 

  if (!MERCADOPAGO_CLIENT_ID) {
    return NextResponse.json({ message: 'MERCADOPAGO_CLIENT_ID não configurado.' }, { status: 500 });
  }

  const MERCADOPAGO_AUTH_URL = 'https://auth.mercadopago.com/authorization';

  const state = req.nextUrl.searchParams.get('tenantId') || req.nextUrl.searchParams.get('studio_id') || 'akaai_hub'; 
  
  const authorizeUrl = new URL(MERCADOPAGO_AUTH_URL); 
  authorizeUrl.searchParams.append('client_id', MERCADOPAGO_CLIENT_ID);
  authorizeUrl.searchParams.append('response_type', 'code');
  authorizeUrl.searchParams.append('platform_id', 'mp');
  authorizeUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  authorizeUrl.searchParams.append('state', state); 

  return NextResponse.redirect(authorizeUrl.toString());
}
