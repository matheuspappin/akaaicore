import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import logger from "@/lib/logger";
import { MercadoPagoConfig, Payment } from "mercadopago";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    logger.info("Mercado Pago Webhook received:", body);

    const { type, data } = body;

    // Mercado Pago envia notificações de diferentes tipos
    if (type !== "payment") {
      logger.info("Ignorando webhook que não é de pagamento:", type);
      return NextResponse.json({ message: "Ignored" }, { status: 200 });
    }

    if (!data?.id) {
      logger.warn("Webhook Mercado Pago sem data.id recebido:", body);
      return NextResponse.json({ message: "Missing data.id" }, { status: 200 });
    }

    // Como as ordens Pix são geradas no servidor, precisamos consultar a API do Mercado Pago para obter a descrição (que usamos como reference_id)
    // Precisaríamos do access token do tenant aqui. Para simplificar, assumimos que temos um token global ou buscamos baseado na URL.
    // Idealmente, deveríamos ter salvo a transação no banco antes e buscar aqui.
    // Como a integração usa description para passar o reference_id, vamos buscar a transação:

    // ATENÇÃO: Em produção, você precisa buscar o token do tenant específico se não usar token global.
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
    if (!accessToken) {
      logger.error(
        "Token Mercado Pago global não configurado para processar webhook",
      );
      return NextResponse.json(
        { message: "Token não configurado" },
        { status: 500 },
      );
    }

    const client = new MercadoPagoConfig({ accessToken: accessToken });
    const paymentClient = new Payment(client);

    const paymentData = await paymentClient.get({ id: data.id });

    if (!paymentData || !paymentData.description) {
      logger.warn(
        "Transação não encontrada ou sem description no Mercado Pago:",
        data.id,
      );
      return NextResponse.json(
        { message: "Missing description" },
        { status: 200 },
      );
    }

    const reference_id = paymentData.description;
    const status = paymentData.status;

    // Formato do Reference ID: mp_order_${studioId}_${studentId || 'anon'}_${type}_${invoiceId}_${Date.now()}
    const parts = reference_id.split("_");
    if (parts[0] !== "mp" || parts[1] !== "order") {
      logger.info(
        "Ignorando webhook com reference_id de outro formato:",
        reference_id,
      );
      return NextResponse.json({ message: "Ignored" }, { status: 200 });
    }

    const studioId = parts[2];
    const studentIdStr = parts[3];
    const studentId =
      studentIdStr && studentIdStr !== "anon" ? studentIdStr : null;
    const paymentType = parts[4] || "payment";
    const invoiceId = parts[5] || "0";

    // Estados possíveis: approved, pending, rejected, cancelled
    if (status === "approved") {
      logger.info(
        `✅ Pagamento Mercado Pago CONFIRMADO: ${reference_id} (Studio: ${studioId})`,
      );

      const amount = paymentData.transaction_amount || 0;
      const paymentMethod = paymentData.payment_method_id || "PIX";

      // 1. Registrar o pagamento na tabela de pagamentos
      const { data: savedPayment, error: paymentError } = await supabaseAdmin
        .from("payments")
        .insert({
          studio_id: studioId,
          student_id: studentId,
          amount: amount,
          status: "paid",
          payment_date: new Date().toISOString(),
          due_date: new Date().toISOString(),
          payment_method: `mercadopago_${paymentMethod.toLowerCase()}`,
          description:
            paymentType === "package"
              ? `Compra de Pacote via Pix Mercado Pago`
              : `Pix Mercado Pago - Ref: ${reference_id}`,
          reference_month: new Date().toISOString().slice(0, 7),
          payment_source:
            paymentType === "package" ? "package_purchase" : "direct_pix",
          reference_id: invoiceId !== "0" ? invoiceId : null,
        })
        .select()
        .single();

      if (paymentError) {
        logger.error(
          "❌ Erro ao salvar pagamento do Mercado Pago no banco:",
          paymentError,
        );
        return NextResponse.json(
          { message: "Error saving payment" },
          { status: 500 },
        );
      }

      // 2. Se for compra de pacote, liberar créditos
      if (paymentType === "package" && studentId && invoiceId !== "0") {
        const { data: pkg } = await supabaseAdmin
          .from("lesson_packages")
          .select("lessons_count")
          .eq("id", invoiceId)
          .single();

        if (pkg) {
          const { error: creditError } = await supabaseAdmin.rpc(
            "adjust_student_credits",
            {
              p_student_id: studentId,
              p_studio_id: studioId,
              p_amount: pkg.lessons_count,
            },
          );
          if (creditError) {
            logger.error(
              "❌ Erro ao adicionar créditos via webhook Mercado Pago:",
              creditError,
            );
          } else {
            logger.info(
              `✅ Créditos adicionados ao aluno ${studentId}: ${pkg.lessons_count}`,
            );
          }
        }
      }

      // 3. Notificar o sistema
      await supabaseAdmin.from("notifications").insert({
        studio_id: studioId,
        title: "Pagamento Recebido (Pix)",
        message: `Um pagamento de R$ ${amount.toFixed(2)} foi recebido via Pix Mercado Pago.`,
        type: "success",
        metadata: { payment_id: savedPayment.id, reference_id },
      });
    } else {
      logger.info(
        `ℹ️ Webhook Mercado Pago status: ${status} para ref: ${reference_id}`,
      );
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error: any) {
    logger.error(
      "💥 Erro fatal no processamento do webhook do Mercado Pago:",
      error,
    );
    // Retornamos 200 para o Mercado Pago não ficar tentando reenviar em caso de erro de lógica nosso,
    // a menos que queiramos o retry.
    return NextResponse.json({ message: error.message }, { status: 200 });
  }
}
