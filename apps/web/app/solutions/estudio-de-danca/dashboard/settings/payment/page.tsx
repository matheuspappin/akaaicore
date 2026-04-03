// apps/web/app/solutions/estudio-de-danca/dashboard/settings/payment/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  CreditCard,
  QrCode,
  Package,
  Save,
  Loader2,
  Coins,
  CheckCircle,
  XCircle,
  Unlink,
  ExternalLink,
  DollarSign,
} from "lucide-react";
import { getStudioStripeConnectStatus } from "@/lib/actions/studio-stripe-connect";
import { useOrganization } from "@/components/providers/organization-provider";
import { Header } from "@/components/dashboard/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PaymentSettingsPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { studioId, isLoading: isOrgLoading } = useOrganization();

  // State de integrações
  const [stripeConnectStatus, setStripeConnectStatus] = useState<{
    stripe_account_id: string | null;
    charges_enabled: boolean;
  } | null>(null);
  const [stripeConnectLoading, setStripeConnectLoading] = useState(false);
  const [mercadopagoStatus, setMercadopagoStatus] = useState<
    "connected" | "disconnected" | "connecting"
  >("disconnected");
  const [mercadopagoLoading, setMercadopagoLoading] = useState(false);

  // State de Créditos
  const [creditPackages, setCreditPackages] = useState<any[]>([]);
  const [loadingCredits, setLoadingCredits] = useState(false);
  const [pdvCreditValue, setPdvCreditValue] = useState(70);
  const [saving, setSaving] = useState(false);
  const [newPkg, setNewPkg] = useState({
    name: "",
    lessons_count: 10,
    price: 99,
    validity_days: 90,
    billing_type: "one_time" as "one_time" | "monthly",
  });

  useEffect(() => {
    if (studioId) {
      loadPaymentsConfig();
      loadCredits(studioId);
    }
  }, [studioId]);

  const loadPaymentsConfig = async () => {
    if (!studioId) return;
    setStripeConnectLoading(true);
    setMercadopagoLoading(true);
    try {
      // Verifica Stripe Connect
      const connectStatus = await getStudioStripeConnectStatus(studioId);
      setStripeConnectStatus(connectStatus);

      // Verifica Mercado Pago
      const { data: studioData } = await supabase
        .from("studios")
        .select("mercadopago_access_token")
        .eq("id", studioId)
        .single();
      if (studioData?.mercadopago_access_token) {
        setMercadopagoStatus("connected");
      } else {
        setMercadopagoStatus("disconnected");
      }

      // Valor do crédito PDV
      const { data: settings } = await supabase
        .from("studio_settings")
        .select("*")
        .eq("studio_id", studioId)
        .eq("setting_key", "pdv_credit_reais_per_unit")
        .maybeSingle();
      if (settings?.setting_value) {
        setPdvCreditValue(parseFloat(settings.setting_value));
      }
    } finally {
      setStripeConnectLoading(false);
      setMercadopagoLoading(false);
    }
  };

  const loadCredits = async (sId: string) => {
    setLoadingCredits(true);
    try {
      const res = await fetch(
        `/api/dance-studio/packages?studioId=${encodeURIComponent(sId)}`,
      );
      const json = await res.json();
      if (!res.ok) {
        toast({
          title: "Erro ao carregar pacotes",
          description: json.error || "Falha ao buscar pacotes de créditos.",
          variant: "destructive",
        });
        setCreditPackages([]);
      } else {
        setCreditPackages(json.packages || []);
      }
    } catch (e: any) {
      toast({
        title: "Erro ao carregar pacotes",
        description: e.message,
        variant: "destructive",
      });
      setCreditPackages([]);
    } finally {
      setLoadingCredits(false);
    }
  };

  // Effect para capturar retorno do OAuth
  useEffect(() => {
    const status = searchParams.get("status");
    const message = searchParams.get("message");
    if (status === "success") {
      toast({
        title: "Conectado!",
        description: message || "Conta Mercado Pago vinculada com sucesso.",
      });
      // Limpar os parâmetros da URL
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("status");
      current.delete("message");
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.replace(`${window.location.pathname}${query}`);
    } else if (status === "error") {
      toast({
        title: "Erro na conexão",
        description:
          message || "Não foi possível vincular sua conta Mercado Pago.",
        variant: "destructive",
      });
      // Limpar os parâmetros da URL
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("status");
      current.delete("message");
      const search = current.toString();
      const query = search ? `?${search}` : "";
      router.replace(`${window.location.pathname}${query}`);
    }
  }, [searchParams, router, toast]);

  const handleConnectMercadopago = () => {
    setMercadopagoLoading(true);
    window.location.href = "/api/mercadopago/oauth/authorize";
  };

  const handleDisconnectMercadopago = async () => {
    if (!confirm("Deseja realmente desconectar sua conta Mercado Pago?"))
      return;
    setMercadopagoLoading(true);
    try {
      const { error } = await supabase
        .from("studios")
        .update({
          mercadopago_access_token: null,
          mercadopago_refresh_token: null,
          mercadopago_token_expires_at: null,
          mercadopago_client_id: null,
          mercadopago_client_secret: null,
          mercadopago_public_key: null,
        })
        .eq("id", studioId);

      if (error) throw error;
      setMercadopagoStatus("disconnected");
      toast({
        title: "Mercado Pago desconectado!",
        description: "Sua conta foi desconectada com sucesso.",
      });
    } catch (e: any) {
      toast({
        title: "Erro ao desconectar",
        description: e.message,
        variant: "destructive",
      });
    } finally {
      setMercadopagoLoading(false);
    }
  };

  const addCreditPackage = async () => {
    if (!studioId) return;
    try {
      const res = await fetch("/api/dance-studio/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studioId, ...newPkg }),
      });
      const json = await res.json();
      if (!res.ok) {
        toast({
          title: "Erro ao criar pacote",
          description: json.error || "Não foi possível criar o pacote.",
          variant: "destructive",
        });
        return;
      }
      toast({ title: "Pacote criado!" });
      setNewPkg({
        name: "",
        lessons_count: 10,
        price: 99,
        validity_days: 90,
        billing_type: "one_time",
      });
      loadCredits(studioId);
    } catch (e: any) {
      toast({
        title: "Erro ao criar pacote",
        description: e.message,
        variant: "destructive",
      });
    }
  };

  const deleteCreditPackage = async (id: string) => {
    if (!confirm("Excluir este pacote?")) return;
    if (!studioId) return;
    try {
      const res = await fetch("/api/dance-studio/packages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, studioId }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast({
          title: "Erro ao excluir pacote",
          description:
            (json as any).error || "Não foi possível excluir o pacote.",
          variant: "destructive",
        });
        return;
      }
      loadCredits(studioId);
    } catch (e: any) {
      toast({
        title: "Erro ao excluir pacote",
        description: e.message,
        variant: "destructive",
      });
    }
  };

  if (isOrgLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-violet-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header title="Configurações de Pagamento" />

      <div className="p-4 md:p-8 space-y-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Integrações */}
          <div className="space-y-6">
            <h2 className="text-lg font-black flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-violet-500" /> Métodos de
              Pagamento
            </h2>

            {/* Mercado Pago Connect */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-sky-500" /> Mercado Pago
                    (Pix)
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    {mercadopagoLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin text-sky-500" />
                    ) : mercadopagoStatus === "connected" ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-400" />
                    )}
                    <span className="font-bold text-slate-500">
                      {mercadopagoLoading
                        ? "Carregando..."
                        : mercadopagoStatus === "connected"
                          ? "Conectado"
                          : "Não conectado"}
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-slate-500">
                  Habilite o recebimento de pagamentos via Pix através da sua
                  conta do Mercado Pago.
                </p>
                {mercadopagoStatus === "connected" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-red-500 hover:text-red-600 border-red-200"
                    onClick={handleDisconnectMercadopago}
                    disabled={mercadopagoLoading}
                  >
                    {mercadopagoLoading ? (
                      <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                    ) : (
                      <Unlink className="w-3 h-3 mr-2" />
                    )}
                    Desconectar Mercado Pago
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white"
                    onClick={handleConnectMercadopago}
                    disabled={mercadopagoLoading || !studioId}
                  >
                    {mercadopagoLoading ? (
                      <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                    ) : (
                      <QrCode className="w-3 h-3 mr-2" />
                    )}
                    Conectar conta Mercado Pago
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Stripe Connect */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-violet-500" /> Stripe
                    (Pagamentos)
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    {stripeConnectLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin text-violet-500" />
                    ) : stripeConnectStatus?.charges_enabled ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : stripeConnectStatus?.stripe_account_id ? (
                      <Loader2 className="w-4 h-4 text-amber-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-400" />
                    )}
                    <span className="font-bold text-slate-500">
                      {stripeConnectLoading
                        ? "Carregando..."
                        : stripeConnectStatus?.charges_enabled
                          ? "Conectado"
                          : stripeConnectStatus?.stripe_account_id
                            ? "Onboarding pendente"
                            : "Não conectado"}
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-slate-500">
                  Conecte sua conta Stripe para receber pagamentos de pacotes e
                  assinaturas recorrentes.
                </p>
                {stripeConnectStatus?.charges_enabled ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://dashboard.stripe.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" /> Painel Stripe
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-full bg-violet-600 hover:bg-violet-700"
                    disabled={!studioId || stripeConnectLoading}
                    onClick={async () => {
                      if (!studioId) return;
                      setStripeConnectLoading(true);
                      try {
                        const returnUrl = window.location.href;
                        const res = await fetch(
                          "/api/dance-studio/stripe-connect",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ studioId, returnUrl }),
                          },
                        );
                        const json = await res.json();
                        if (!res.ok)
                          throw new Error(
                            json.error || "Erro ao conectar Stripe",
                          );
                        if (json.url) window.location.href = json.url;
                      } catch (e: any) {
                        toast({
                          title: "Erro",
                          description: e.message,
                          variant: "destructive",
                        });
                      } finally {
                        setStripeConnectLoading(false);
                      }
                    }}
                  >
                    {stripeConnectLoading ? (
                      <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                    ) : (
                      <CreditCard className="w-3 h-3 mr-2" />
                    )}
                    {stripeConnectStatus?.stripe_account_id
                      ? "Concluir Onboarding"
                      : "Conectar Stripe"}
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Crédito PDV */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Coins className="w-4 h-4 text-amber-500" /> Valor de Troca
                  (PDV)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-slate-500">
                  Quanto vale 1 crédito ao ser usado como pagamento na
                  loja/balcão.
                </p>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                      R$
                    </span>
                    <Input
                      type="number"
                      step={0.01}
                      className="pl-9 font-bold h-9"
                      value={pdvCreditValue}
                      onChange={(e) =>
                        setPdvCreditValue(parseFloat(e.target.value) || 0)
                      }
                    />
                  </div>
                  <Button
                    size="sm"
                    className="bg-violet-600 hover:bg-violet-700 h-9"
                    disabled={saving}
                    onClick={async () => {
                      if (!studioId) return;
                      setSaving(true);
                      try {
                        await supabase
                          .from("studio_settings")
                          .upsert(
                            {
                              studio_id: studioId,
                              setting_key: "pdv_credit_reais_per_unit",
                              setting_value: String(pdvCreditValue),
                              updated_at: new Date().toISOString(),
                            },
                            { onConflict: "studio_id, setting_key" },
                          );
                        toast({ title: "Valor atualizado!" });
                      } catch (e: any) {
                        toast({
                          title: "Erro ao salvar",
                          description: e.message,
                          variant: "destructive",
                        });
                      } finally {
                        setSaving(false);
                      }
                    }}
                  >
                    {saving ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <Save className="w-3 h-3" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pacotes de Créditos */}
          <div className="space-y-6">
            <h2 className="text-lg font-black flex items-center gap-2">
              <Package className="w-5 h-5 text-violet-500" /> Pacotes de
              Créditos
            </h2>

            <Card>
              <CardContent className="pt-6">
                {loadingCredits ? (
                  <div className="py-8 flex justify-center">
                    <Loader2 className="w-5 h-5 animate-spin text-violet-500" />
                  </div>
                ) : creditPackages.length === 0 ? (
                  <p className="text-center text-sm text-slate-500 py-6">
                    Nenhum pacote cadastrado.
                  </p>
                ) : (
                  <div className="space-y-3 mb-6">
                    {creditPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="flex items-center justify-between p-3 rounded-xl border bg-white dark:bg-white/5 transition-colors hover:border-violet-200"
                      >
                        <div>
                          <p className="font-bold text-sm">
                            {pkg.name || `Pacote ${pkg.lessons_count} aulas`}
                          </p>
                          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">
                            {pkg.lessons_count} sessões ·{" "}
                            {pkg.validity_days || 90} dias
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-black text-violet-600 text-sm">
                            R$ {Number(pkg.price).toFixed(2)}
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-400 hover:text-red-500 h-8 w-8"
                            onClick={() => deleteCreditPackage(pkg.id)}
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t pt-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                    Novo Pacote
                  </p>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <Label className="text-[11px] font-bold uppercase text-slate-500">
                        Nome
                      </Label>
                      <Input
                        placeholder="Ex: Pacote Verão"
                        className="h-9"
                        value={newPkg.name}
                        onChange={(e) =>
                          setNewPkg((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label className="text-[11px] font-bold uppercase text-slate-500">
                          Créditos
                        </Label>
                        <Input
                          type="number"
                          className="h-9"
                          value={newPkg.lessons_count}
                          onChange={(e) =>
                            setNewPkg((p) => ({
                              ...p,
                              lessons_count: parseInt(e.target.value) || 1,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-[11px] font-bold uppercase text-slate-500">
                          Preço (R$)
                        </Label>
                        <Input
                          type="number"
                          step={0.01}
                          className="h-9"
                          value={newPkg.price}
                          onChange={(e) =>
                            setNewPkg((p) => ({
                              ...p,
                              price: parseFloat(e.target.value) || 0,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label className="text-[11px] font-bold uppercase text-slate-500">
                          Validade (dias)
                        </Label>
                        <Input
                          type="number"
                          className="h-9"
                          value={newPkg.validity_days}
                          onChange={(e) =>
                            setNewPkg((p) => ({
                              ...p,
                              validity_days: parseInt(e.target.value) || 30,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-[11px] font-bold uppercase text-slate-500">
                          Tipo Cobrança
                        </Label>
                        <Select
                          value={newPkg.billing_type}
                          onValueChange={(v) =>
                            setNewPkg((p) => ({
                              ...p,
                              billing_type: v as "one_time" | "monthly",
                            }))
                          }
                        >
                          <SelectTrigger className="h-9 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one_time">Avulso</SelectItem>
                            <SelectItem value="monthly">Mensal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-violet-600 hover:bg-violet-700 h-10 mt-2 font-bold"
                      onClick={addCreditPackage}
                      disabled={!newPkg.lessons_count || !newPkg.price}
                    >
                      <Package className="w-4 h-4 mr-2" /> Criar Pacote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
