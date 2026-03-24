// apps/web/app/solutions/estudio-de-danca/dashboard/settings/payment/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useOrganization } from "@/components/providers/organization-provider";
import { Header } from "@/components/dashboard/header";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function PaymentSettingsPage() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { organization, isLoading: isOrgLoading } = useOrganization();
  const [loadingConnection, setLoadingConnection] = useState(false);
  const [pagbankConnected, setPagbankConnected] = useState(false);

  useEffect(() => {
    if (searchParams.get('status') === 'success') {
      toast({ title: "Conectado!", description: searchParams.get('message') || "Conta PagBank conectada com sucesso." });
      // Limpar os parâmetros da URL
      router.replace('/solutions/estudio-de-danca/dashboard/settings/payment');
    } else if (searchParams.get('status') === 'error') {
      toast({ title: "Erro na Conexão", description: searchParams.get('message') || "Ocorreu um erro ao conectar a conta PagBank.", variant: "destructive" });
      router.replace('/solutions/estudio-de-danca/dashboard/settings/payment');
    }
  }, [searchParams, router, toast]);

  useEffect(() => {
    if (organization && organization.pagbank_access_token) {
      setPagbankConnected(true);
    } else {
      setPagbankConnected(false);
    }
  }, [organization]);

  const handleConnectPagbank = () => {
    setLoadingConnection(true);
    // Redireciona para o endpoint de autorização do PagBank
    router.push('/api/pagbank/oauth/authorize');
  };

  const handleDisconnectPagbank = async () => {
    setLoadingConnection(true);
    try {
      // TODO: Implementar API route para desconectar a conta PagBank
      // Isso envolveria limpar os tokens do banco de dados do tenant
      const response = await fetch('/api/tenant/pagbank-disconnect', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Falha ao desconectar PagBank.');
      }
      setPagbankConnected(false);
      toast({ title: "Desconectado!", description: "Conta PagBank desconectada com sucesso." });
    } catch (error: any) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } finally {
      setLoadingConnection(false);
    }
  };

  if (isOrgLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="mt-2">Carregando configurações...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header title={`Configurações de Pagamento - ${organization?.name}`} />
      <div className="flex-1 p-6">
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Conectar PagBank</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Conecte sua conta PagBank para habilitar o recebimento de pagamentos Pix diretamente através do seu sistema.
            </p>
            {pagbankConnected ? (
              <div className="flex items-center space-x-2 text-green-600 font-medium">
                <CheckCircle2 className="h-5 w-5" />
                <span>Conectado ao PagBank</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-red-600 font-medium">
                <XCircle className="h-5 w-5" />
                <span>Não conectado ao PagBank</span>
              </div>
            )}
            {pagbankConnected ? (
              <Button onClick={handleDisconnectPagbank} disabled={loadingConnection} variant="destructive" className="w-full">
                {loadingConnection ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Desconectar PagBank
              </Button>
            ) : (
              <Button onClick={handleConnectPagbank} disabled={loadingConnection} className="w-full">
                {loadingConnection ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Conectar Conta PagBank
              </Button>
            )}
            <p className="text-sm text-muted-foreground">
              Ao conectar, você será redirecionado para a página de autorização do PagBank.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
