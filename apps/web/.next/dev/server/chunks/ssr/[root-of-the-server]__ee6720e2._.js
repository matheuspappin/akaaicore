;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="12d34840-5043-902a-ab25-b7f2cf91acfc")}catch(e){}}();
module.exports = [
"[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU") || '';
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder-key', {
        cookies: {
            get (name) {
                return cookieStore.get(name)?.value;
            },
            set (name, value, options) {
                try {
                    cookieStore.set({
                        name,
                        value,
                        ...options
                    });
                } catch (error) {
                // The `set` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            },
            remove (name, options) {
                try {
                    cookieStore.set({
                        name,
                        value: '',
                        ...options
                    });
                } catch (error) {
                // The `remove` method was called from a Server Component.
                // This can be ignored if you have middleware refreshing
                // user sessions.
                }
            }
        }
    });
}
}),
"[project]/apps/web/lib/actions/credit-payments.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406ff48ffe18d472b170d9e06957010c11168f59af":"createCreditUsagePayment"},"",""] */ __turbopack_context__.s([
    "createCreditUsagePayment",
    ()=>createCreditUsagePayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function createCreditUsagePayment(params) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const today = new Date().toISOString().split('T')[0];
    const refMonth = new Date().toISOString().slice(0, 7);
    const { error } = await supabase.from('payments').insert({
        studio_id: params.studioId,
        student_id: params.studentId,
        amount: 0,
        due_date: today,
        payment_date: today,
        status: 'paid',
        payment_method: 'credit',
        reference_month: refMonth,
        description: params.description,
        payment_source: 'credit_usage',
        reference_id: params.referenceId || null,
        credits_used: params.creditsUsed
    });
    if (error) {
        console.error('[createCreditUsagePayment] Erro:', error);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCreditUsagePayment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCreditUsagePayment, "406ff48ffe18d472b170d9e06957010c11168f59af", null);
}),
"[project]/apps/web/lib/strategies/payment/credit-strategy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreditPaymentStrategy",
    ()=>CreditPaymentStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$credit$2d$payments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/credit-payments.ts [app-rsc] (ecmascript)");
;
class CreditPaymentStrategy {
    supabase;
    constructor(supabase){
        this.supabase = supabase;
    }
    getCurrencySymbol() {
        return 'C$'; // Credits
    }
    async validate(context) {
        const totalCreditsNeeded = context.items.reduce((acc, item)=>acc + item.priceInCredits * item.quantity, 0);
        // Fetch user credits
        const { data: creditData, error } = await this.supabase.from('student_lesson_credits').select('remaining_credits').eq('student_id', context.studentId).eq('studio_id', context.studioId) // Ensure studio context
        .single();
        if (error || !creditData) {
            return false; // User has no credit record
        }
        return creditData.remaining_credits >= totalCreditsNeeded;
    }
    async process(context) {
        const totalCredits = context.items.reduce((acc, item)=>acc + item.priceInCredits * item.quantity, 0);
        // 1. Double check validation inside transaction logic (if possible)
        // Supabase doesn't have true ACID transactions via JS client easily without RPC, 
        // but we can check and update carefully.
        // Using RPC is safer for atomic deduction. Assuming we might have one or creating a simple update.
        // Let's try a direct update with a condition.
        // Fetch current again to be safe
        const { data: current, error: fetchError } = await this.supabase.from('student_lesson_credits').select('remaining_credits, id').eq('student_id', context.studentId).eq('studio_id', context.studioId).single();
        if (fetchError || !current) return {
            success: false,
            error: 'Credits not found'
        };
        if (current.remaining_credits < totalCredits) {
            return {
                success: false,
                error: 'Insufficient credits'
            };
        }
        const newBalance = current.remaining_credits - totalCredits;
        const { error: updateError } = await this.supabase.from('student_lesson_credits').update({
            remaining_credits: newBalance
        }).eq('id', current.id);
        if (updateError) return {
            success: false,
            error: updateError.message
        };
        // If there were service orders, update their payment status
        const serviceOrderItems = context.items.filter((i)=>i.type === 'service_order');
        if (serviceOrderItems.length > 0) {
            const osIds = serviceOrderItems.map((i)=>i.id);
            await this.supabase.from('service_orders').update({
                payment_status: 'paid'
            }).in('id', osIds);
        }
        // Baixa de estoque para produtos (PDV)
        const productItems = context.items.filter((i)=>i.type === 'product');
        for (const item of productItems){
            const { data: prod } = await this.supabase.from('products').select('quantity').eq('id', item.id).single();
            if (prod) {
                await this.supabase.from('products').update({
                    quantity: Math.max(0, prod.quantity - item.quantity)
                }).eq('id', item.id);
                await this.supabase.from('inventory_transactions').insert({
                    studio_id: context.studioId,
                    product_id: item.id,
                    type: 'sale',
                    quantity: item.quantity,
                    reason: 'Venda PDV (créditos)',
                    unit_price: item.priceInCurrency
                });
            }
        }
        // Record usage and create payment for financeiro
        for (const item of context.items){
            const creditsUsed = item.priceInCredits * item.quantity;
            const usageType = item.type === 'product' ? 'pdv_product' : 'class_attendance';
            await this.supabase.from('student_credit_usage').insert({
                studio_id: context.studioId,
                student_id: context.studentId,
                credits_used: creditsUsed,
                usage_type: usageType,
                notes: `PDV: ${item.name} (x${item.quantity})`
            });
            const paymentSource = item.type === 'product' ? 'product' : 'marketplace';
            const descPrefix = item.type === 'product' ? 'Produto' : 'Marketplace';
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$credit$2d$payments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCreditUsagePayment"])({
                studioId: context.studioId,
                studentId: context.studentId,
                description: `${descPrefix}: ${item.name}${item.quantity > 1 ? ` (x${item.quantity})` : ''}`,
                creditsUsed,
                paymentSource,
                referenceId: item.id
            });
        }
        return {
            success: true,
            message: 'Credits deducted successfully'
        };
    }
}
}),
"[project]/apps/web/lib/strategies/payment/monetary-strategy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonetaryPaymentStrategy",
    ()=>MonetaryPaymentStrategy
]);
class MonetaryPaymentStrategy {
    supabase;
    constructor(supabase){
        this.supabase = supabase;
    }
    getCurrencySymbol() {
        return 'R$';
    }
    async validate(context) {
        // For monetary, validation depends on the payment method.
        // If it's cash/POS, we assume the operator validated the cash/card.
        // If it's Stripe online, we create a session.
        // Here we focus on the "POS" validation (e.g., amount > 0).
        const totalAmount = context.items.reduce((acc, item)=>acc + item.priceInCurrency * item.quantity, 0);
        return totalAmount >= 0;
    }
    async process(context) {
        const totalAmount = context.items.reduce((acc, item)=>acc + item.priceInCurrency * item.quantity, 0);
        // Identify if there are any service orders in the cart
        const serviceOrderItems = context.items.filter((i)=>i.type === 'service_order');
        const serviceOrderId = serviceOrderItems.length > 0 ? serviceOrderItems[0].id : null;
        // Create a payment record in `payments` table
        const { data, error } = await this.supabase.from('payments').insert({
            studio_id: context.studioId,
            student_id: context.studentId,
            service_order_id: serviceOrderId,
            amount: totalAmount,
            payment_method: context.paymentMethod || 'cash',
            status: 'paid',
            due_date: new Date().toISOString(),
            payment_date: new Date().toISOString(),
            reference_month: new Date().toISOString().slice(0, 7),
            description: `POS Purchase: ${context.items.map((i)=>i.name).join(', ')}`
        }).select().single();
        if (error) {
            return {
                success: false,
                error: error.message
            };
        }
        // If there were service orders, update their payment status
        if (serviceOrderItems.length > 0) {
            const osIds = serviceOrderItems.map((i)=>i.id);
            await this.supabase.from('service_orders').update({
                payment_status: 'paid'
            }).in('id', osIds);
        }
        // Update inventory for products
        const productItems = context.items.filter((i)=>i.type === 'product');
        for (const item of productItems){
            const { data: prod } = await this.supabase.from('products').select('quantity').eq('id', item.id).single();
            if (prod) {
                await this.supabase.from('products').update({
                    quantity: Math.max(0, prod.quantity - item.quantity)
                }).eq('id', item.id);
                await this.supabase.from('inventory_transactions').insert({
                    studio_id: context.studioId,
                    product_id: item.id,
                    type: 'sale',
                    quantity: item.quantity,
                    reason: 'Venda PDV',
                    unit_price: item.priceInCurrency
                });
            }
        }
        return {
            success: true,
            transactionId: data.id,
            message: 'Payment recorded successfully'
        };
    }
}
}),
"[project]/apps/web/lib/strategies/payment/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPaymentRequirement",
    ()=>getPaymentRequirement,
    "getPaymentStrategy",
    ()=>getPaymentStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$credit$2d$strategy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/strategies/payment/credit-strategy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$monetary$2d$strategy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/strategies/payment/monetary-strategy.ts [app-rsc] (ecmascript)");
;
;
function getPaymentStrategy(model, supabase) {
    switch(model){
        case 'CREDIT':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$credit$2d$strategy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreditPaymentStrategy"](supabase);
        case 'MONETARY':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$monetary$2d$strategy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MonetaryPaymentStrategy"](supabase);
        default:
            // Default fallback if unknown (e.g. during migration)
            return new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$credit$2d$strategy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreditPaymentStrategy"](supabase);
    }
}
async function getPaymentRequirement(studioId, supabase) {
    const { data, error } = await supabase.from('studios').select('business_model').eq('id', studioId).single();
    if (error || !data) {
        console.warn(`Could not fetch business model for studio ${studioId}, defaulting to CREDIT`);
        return 'CREDIT';
    }
    return data.business_model || 'CREDIT';
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/apps/web/lib/stripe.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStripe",
    ()=>getStripe,
    "stripe",
    ()=>stripe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stripe/esm/stripe.esm.node.js [app-rsc] (ecmascript)");
;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](stripeSecretKey, {
    apiVersion: '2025-01-27.acacia',
    appInfo: {
        name: 'Workflow AI',
        version: '0.1.0'
    }
}) : null;
function getStripe() {
    if (!stripe) {
        throw new Error('STRIPE_SECRET_KEY is missing. Please configure it in your environment variables.');
    }
    return stripe;
}
}),
"[project]/apps/web/lib/actions/pos.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400febb203613f945ef4300616b331b52b8dad91eb":"getStudioBusinessModel","40254d0eb8e0762062a7b48d4ed9fbedae22edc27e":"getPdvCreditConversionRate","60975896481db52defb742a1211aafb12ef81daf68":"getStudentCredits","78433f814921bc555500d60f634fdc1d08a8f33f54":"processPosPayment","7e6cb2718a167c91e2853eb91cd01d9416f214caf4":"createPosStripeSession"},"",""] */ __turbopack_context__.s([
    "createPosStripeSession",
    ()=>createPosStripeSession,
    "getPdvCreditConversionRate",
    ()=>getPdvCreditConversionRate,
    "getStudentCredits",
    ()=>getStudentCredits,
    "getStudioBusinessModel",
    ()=>getStudioBusinessModel,
    "processPosPayment",
    ()=>processPosPayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/strategies/payment/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/stripe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function processPosPayment(studioId, studentId, items, paymentMethod) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Get the Business Model
    let model = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPaymentRequirement"])(studioId, supabase);
    // Se o método for explicitamente crédito, forçar CREDIT
    if (paymentMethod?.toLowerCase() === 'credit') {
        model = 'CREDIT';
    } else if ([
        'cash',
        'money',
        'dinheiro',
        'card',
        'credit_card',
        'debit_card',
        'pix'
    ].includes(paymentMethod?.toLowerCase())) {
        model = 'MONETARY';
    }
    // Se não tem studentId, não pode ser CREDIT (crédito exige um aluno para debitar)
    if (!studentId && model === 'CREDIT') {
        return {
            success: false,
            message: 'Venda a crédito exige um cliente selecionado. Para venda avulsa, use um método de pagamento monetário.'
        };
    }
    // 2. Get the Strategy
    const strategy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPaymentStrategy"])(model, supabase);
    // 3. Prepare Context
    const context = {
        studioId,
        studentId,
        items,
        paymentMethod
    };
    // 4. Validate
    const isValid = await strategy.validate(context);
    if (!isValid) {
        return {
            success: false,
            message: model === 'CREDIT' ? 'Saldo insuficiente de créditos.' : 'Erro na validação do pagamento.'
        };
    }
    // 5. Process
    return await strategy.process(context);
}
async function createPosStripeSession(studioId, studentId, items, method, origin, returnPath = '/dashboard/vendas') {
    const stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStripe"])();
    if (!stripe) throw new Error("Stripe não configurado");
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Buscar informações do estúdio para o sucesso/erro
    const { data: studio } = await supabase.from('studios').select('name, slug').eq('id', studioId).single();
    const totalAmount = items.reduce((acc, item)=>acc + item.priceInCurrency * item.quantity, 0);
    // Criar itens para o Stripe
    const lineItems = items.map((item)=>({
            price_data: {
                currency: 'brl',
                product_data: {
                    name: item.name
                },
                unit_amount: Math.round(item.priceInCurrency * 100)
            },
            quantity: item.quantity
        }));
    const session = await stripe.checkout.sessions.create({
        payment_method_types: method === 'pix' ? [
            'pix'
        ] : [
            'card'
        ],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${origin}${returnPath}?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}${returnPath}?canceled=true`,
        metadata: {
            studio_id: studioId,
            student_id: studentId || '',
            type: 'pos_sale',
            items_json: JSON.stringify(items.map((i)=>({
                    id: i.id,
                    quantity: i.quantity,
                    type: i.type,
                    name: i.name,
                    price: i.priceInCurrency
                }))),
            payment_method: method
        }
    });
    return {
        url: session.url
    };
}
async function getStudioBusinessModel(studioId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$strategies$2f$payment$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPaymentRequirement"])(studioId, supabase);
}
async function getPdvCreditConversionRate(studioId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: packages } = await supabase.from('lesson_packages').select('price, lessons_count').eq('studio_id', studioId).eq('is_active', true);
    if (packages?.length) {
        const rates = packages.map((p)=>(p.price || 0) / Math.max(1, p.lessons_count || 1));
        return Math.min(...rates);
    }
    const { data: setting } = await supabase.from('studio_settings').select('setting_value').eq('studio_id', studioId).eq('setting_key', 'pdv_credit_reais_per_unit').maybeSingle();
    return setting?.setting_value ? parseFloat(setting.setting_value) : 70;
}
async function getStudentCredits(studentId, studioId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data } = await supabase.from('student_lesson_credits').select('remaining_credits').eq('student_id', studentId).eq('studio_id', studioId).maybeSingle();
    return Number(data?.remaining_credits ?? 0);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    processPosPayment,
    createPosStripeSession,
    getStudioBusinessModel,
    getPdvCreditConversionRate,
    getStudentCredits
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processPosPayment, "78433f814921bc555500d60f634fdc1d08a8f33f54", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPosStripeSession, "7e6cb2718a167c91e2853eb91cd01d9416f214caf4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStudioBusinessModel, "400febb203613f945ef4300616b331b52b8dad91eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPdvCreditConversionRate, "40254d0eb8e0762062a7b48d4ed9fbedae22edc27e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStudentCredits, "60975896481db52defb742a1211aafb12ef81daf68", null);
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/vendas/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/pos.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$pos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/pos.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/vendas/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/pos.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40254d0eb8e0762062a7b48d4ed9fbedae22edc27e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$pos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPdvCreditConversionRate"],
    "60975896481db52defb742a1211aafb12ef81daf68",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$pos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStudentCredits"],
    "78433f814921bc555500d60f634fdc1d08a8f33f54",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$pos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processPosPayment"],
    "7e6cb2718a167c91e2853eb91cd01d9416f214caf4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$pos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPosStripeSession"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$solutions$2f$estudio$2d$de$2d$danca$2f$dashboard$2f$vendas$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$pos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/vendas/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/lib/actions/pos.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$pos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/pos.ts [app-rsc] (ecmascript)");
}),
];

//# debugId=12d34840-5043-902a-ab25-b7f2cf91acfc
//# sourceMappingURL=%5Broot-of-the-server%5D__ee6720e2._.js.map