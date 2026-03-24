;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="8a5f6367-8aee-15a6-4743-d75af57350ec")}catch(e){}}();
module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/apps/web/lib/payment-gateway/pagbank-provider.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPagBankPixOrder",
    ()=>createPagBankPixOrder
]);
async function createPagBankPixOrder(orderRequest) {
    const PAGBANK_API_URL = 'https://sandbox.api.pagseguro.com/orders'; // Usando sandbox
    const PAGBANK_AUTH_TOKEN = process.env.PAGBANK_AUTH_TOKEN; // Precisamos definir isso no .env
    if (!PAGBANK_AUTH_TOKEN) {
        throw new Error('PAGBANK_AUTH_TOKEN não está definido no ambiente.');
    }
    const response = await fetch(PAGBANK_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PAGBANK_AUTH_TOKEN}`
        },
        body: JSON.stringify(orderRequest)
    });
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro ao criar pedido PagBank:', errorData);
        throw new Error(`Erro na API do PagBank: ${response.status} - ${JSON.stringify(errorData)}`);
    }
    return response.json();
}
}),
"[project]/apps/web/app/api/pagbank/pix/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$payment$2d$gateway$2f$pagbank$2d$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/payment-gateway/pagbank-provider.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const customerTaxId = body.customer?.tax_id || '00000000000';
        // Valide os dados do corpo da requisição aqui
        // Por exemplo, usando um schema Zod ou similar
        const orderRequest = {
            reference_id: body.reference_id || `order-${Date.now()}`,
            customer: {
                name: body.customer.name || 'Nome do Cliente',
                email: body.customer.email || 'cliente.avulso@exemplo.com',
                tax_id: customerTaxId,
                phones: [
                    {
                        country: body.customer.phones?.[0]?.country || '55',
                        area: body.customer.phones?.[0]?.area || '11',
                        number: body.customer.phones?.[0]?.number || '999999999',
                        type: 'MOBILE'
                    }
                ]
            },
            items: body.items || [
                {
                    name: 'Item Padrão',
                    quantity: 1,
                    unit_amount: 1000
                }
            ],
            qr_codes: [
                {
                    amount: {
                        value: body.amount || 1000
                    },
                    expiration_date: new Date(Date.now() + 30 * 60 * 1000).toISOString()
                }
            ],
            shipping: body.shipping,
            notification_urls: body.notification_urls || [
                'https://meusite.com/notificacoes'
            ]
        };
        const pagBankResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$payment$2d$gateway$2f$pagbank$2d$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPagBankPixOrder"])(orderRequest);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(pagBankResponse);
    } catch (error) {
        console.error('Erro na API /api/pagbank/pix:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Erro ao criar pedido Pix PagBank',
            details: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# debugId=8a5f6367-8aee-15a6-4743-d75af57350ec
//# sourceMappingURL=%5Broot-of-the-server%5D__c11611b2._.js.map