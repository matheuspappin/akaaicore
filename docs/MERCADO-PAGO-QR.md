# Mercado Pago - QR Code (In-Person Payments)

Esta integração permite criar, processar, cancelar e reembolsar pagamentos presenciais utilizando QR Codes dinâmicos, estáticos ou híbridos no Mercado Pago.

## Configuração

O provedor do Mercado Pago (`lib/payment-gateway/mercadopago-provider.ts`) inclui métodos para gerenciar ordens de pagamento QR:

- `createMercadoPagoQrOrder`
- `cancelMercadoPagoQrOrder`
- `refundMercadoPagoQrOrder`
- `getMercadoPagoQrOrder`

## Modelos de QR Code Suportados

Ao criar uma ordem (`createMercadoPagoQrOrder`), você deve enviar no campo `config.qr.mode` o modelo desejado:

- **`static`**: A ordem é enviada para o QR Code fixo daquele caixa (associado pelo `external_pos_id`). A resposta não retornará uma string do QR Code, pois o cliente escaneará o QR físico/impresso do estabelecimento.
- **`dynamic`**: Gera uma string EMVCo única (`type_response.qr_data`) para aquela transação específica, que pode ser renderizada na tela do PDV para o cliente escanear.
- **`hybrid`**: Combina ambos. A ordem é vinculada ao QR físico do caixa, e também retorna uma string EMVCo dinâmica. O pagamento é aceito por qualquer um dos meios.

## Exemplos de Uso

### Criação de Order (Dinâmico)

```typescript
import { createMercadoPagoQrOrder } from '@/lib/payment-gateway/mercadopago-provider';

const order = await createMercadoPagoQrOrder({
  tenantId: 'studio-id-aqui',
  idempotencyKey: 'id-unico-da-transacao',
  orderRequest: {
    type: 'qr',
    external_reference: 'minha_referencia_interna_123',
    total_amount: 50.00,
    config: {
      qr: {
        external_pos_id: 'CAIXA_01', // Previamente criado na API do Mercado Pago
        mode: 'dynamic'
      }
    },
    transactions: {
      payments: [
        { amount: 50.00 }
      ]
    },
    items: [
      {
        title: 'Créditos',
        unit_price: 50.00,
        quantity: 1
      }
    ]
  }
});

// A string do QR code estará em:
const qrString = order.type_response?.qr_data;
```

### Consultando Status

Pode ser usado via webhooks ou polling para consultar a confirmação de que a order foi paga.

```typescript
import { getMercadoPagoQrOrder } from '@/lib/payment-gateway/mercadopago-provider';

const status = await getMercadoPagoQrOrder({
  tenantId: 'studio-id',
  orderId: 'ORD01K...'
});

console.log(status.status); // ex: "processed", "canceled", "created"
```

### Cancelamento e Reembolso

Ordens pendentes (status `created`) podem ser canceladas.
Ordens aprovadas (status `processed`) podem ser reembolsadas no prazo de até 180 dias.

```typescript
import { cancelMercadoPagoQrOrder, refundMercadoPagoQrOrder } from '@/lib/payment-gateway/mercadopago-provider';

// Cancelamento
await cancelMercadoPagoQrOrder({
  tenantId: 'studio-id',
  orderId: 'ORD01K...'
});

// Reembolso
await refundMercadoPagoQrOrder({
  tenantId: 'studio-id',
  orderId: 'ORD01K...',
  idempotencyKey: 'refund-123'
});
```

*Consulte a documentação completa do Mercado Pago In-Person Payments para maiores detalhes técnicos sobre as requisições e estrutura de objetos.*