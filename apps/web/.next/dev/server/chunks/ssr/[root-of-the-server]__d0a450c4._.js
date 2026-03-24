;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="e84a5a67-ebd8-da85-2828-32caae30bb83")}catch(e){}}();
module.exports = [
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$20$2e$4$2e$1_$40$types$2b$node$40$22$2e$19$2e$15$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/stripe@20.4.1_@types+node@22.19.15/node_modules/stripe/esm/stripe.esm.node.js [app-rsc] (ecmascript)");
;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$20$2e$4$2e$1_$40$types$2b$node$40$22$2e$19$2e$15$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](stripeSecretKey, {
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
"[project]/apps/web/lib/supabase-admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.99.3/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
// Placeholders para evitar "supabaseKey is required" quando env ainda não carregou
const _url = supabaseUrl || 'https://placeholder.supabase.co';
const _key = supabaseServiceRoleKey || 'placeholder-key';
if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn('⚠️ Supabase Admin: URL ou Service Role Key não configurada. Configure .env.local e reinicie o servidor.');
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(_url, _key, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
}),
"[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
const logLevelPriority = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};
const currentLevel = process.env.LOG_LEVEL || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'debug');
function shouldLog(level) {
    return logLevelPriority[level] >= logLevelPriority[currentLevel];
}
function formatLog(level, message, ...args) {
    if (!shouldLog(level)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        // Server-side: JSON format for better observability integration
        const timestamp = new Date().toISOString();
        let logObject = {
            level,
            time: timestamp
        };
        if (typeof message === 'string') {
            logObject.msg = message;
        } else {
            Object.assign(logObject, message);
        }
        if (args.length > 0) {
            if (typeof args[0] === 'string' && !logObject.msg) {
                logObject.msg = args[0];
            } else {
                logObject.args = args;
            }
        }
        console.log(JSON.stringify(logObject));
    } else //TURBOPACK unreachable
    ;
}
const logger = {
    debug: (msg, ...args)=>formatLog('debug', msg, ...args),
    info: (msg, ...args)=>formatLog('info', msg, ...args),
    warn: (msg, ...args)=>formatLog('warn', msg, ...args),
    error: (msg, ...args)=>formatLog('error', msg, ...args)
};
const __TURBOPACK__default__export__ = logger;
}),
"[project]/apps/web/lib/constants/stripe-connect.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Taxa da plataforma em % para pagamentos via Stripe Connect */ __turbopack_context__.s([
    "PLATFORM_FEE_PERCENT",
    ()=>PLATFORM_FEE_PERCENT
]);
const PLATFORM_FEE_PERCENT = 5;
}),
"[project]/apps/web/lib/actions/studio-stripe-connect.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"408cf1b91eba9f1374f92aee097cf83da5b8267d52":"getStudioStripeAccountForCheckout","40b1ea7e8f673b93bd3484c251e333e858d317785a":"getStudioStripeConnectStatus","70f45e3d857560adb7a6420037a2185ec0f493974b":"createStudioStripeConnectAccountLink","7f77ddd42d2a67b1a0103f5942b631818cd12210d5":"PLATFORM_FEE_PERCENT"},"",""] */ __turbopack_context__.s([
    "createStudioStripeConnectAccountLink",
    ()=>createStudioStripeConnectAccountLink,
    "getStudioStripeAccountForCheckout",
    ()=>getStudioStripeAccountForCheckout,
    "getStudioStripeConnectStatus",
    ()=>getStudioStripeConnectStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/stripe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/constants/stripe-connect.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function createStudioStripeConnectAccountLink(studioId, returnUrl, userId) {
    const stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStripe"])();
    if (!stripe) throw new Error("Stripe não configurado");
    // Verificar que o usuário tem acesso ao estúdio
    const { data: access } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("users_internal").select("id").eq("id", userId).eq("studio_id", studioId).maybeSingle();
    const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("studios").select("id, owner_id").eq("id", studioId).single();
    if (!studio) throw new Error("Estúdio não encontrado");
    if (!access && studio.owner_id !== userId) {
        throw new Error("Sem permissão para conectar Stripe neste estúdio");
    }
    let accountId = studio.stripe_account_id;
    if (!accountId) {
        const { data: studioFull } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("studios").select("name").eq("id", studioId).single();
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].info("Criando nova conta Stripe Connect para estúdio", {
            studioId
        });
        const account = await stripe.accounts.create({
            type: "express",
            country: "BR",
            capabilities: {
                card_payments: {
                    requested: true
                },
                transfers: {
                    requested: true
                }
            },
            business_type: "company",
            business_profile: {
                name: studioFull?.name || "Estúdio"
            }
        });
        accountId = account.id;
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("studios").update({
            stripe_account_id: accountId
        }).eq("id", studioId);
        if (updateError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error("Erro ao salvar stripe_account_id no estúdio:", updateError);
            throw new Error("Falha ao vincular conta Stripe ao estúdio");
        }
    }
    const accountLink = await stripe.accountLinks.create({
        account: accountId,
        refresh_url: returnUrl + "?refresh=true",
        return_url: returnUrl,
        type: "account_onboarding"
    });
    return accountLink.url;
}
async function getStudioStripeConnectStatus(studioId) {
    const { data: studio, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("studios").select("stripe_account_id").eq("id", studioId).single();
    if (error || !studio?.stripe_account_id) {
        return {
            stripe_account_id: null,
            charges_enabled: false
        };
    }
    try {
        const stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStripe"])();
        if (!stripe) return {
            stripe_account_id: studio.stripe_account_id,
            charges_enabled: false
        };
        const account = await stripe.accounts.retrieve(studio.stripe_account_id);
        return {
            stripe_account_id: studio.stripe_account_id,
            charges_enabled: account.charges_enabled ?? false
        };
    } catch  {
        return {
            stripe_account_id: studio.stripe_account_id,
            charges_enabled: false
        };
    }
}
async function getStudioStripeAccountForCheckout(studioId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("studios").select("stripe_account_id").eq("id", studioId).single();
    return data?.stripe_account_id ?? null;
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createStudioStripeConnectAccountLink,
    getStudioStripeConnectStatus,
    getStudioStripeAccountForCheckout,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PLATFORM_FEE_PERCENT"]
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createStudioStripeConnectAccountLink, "70f45e3d857560adb7a6420037a2185ec0f493974b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStudioStripeConnectStatus, "40b1ea7e8f673b93bd3484c251e333e858d317785a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStudioStripeAccountForCheckout, "408cf1b91eba9f1374f92aee097cf83da5b8267d52", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PLATFORM_FEE_PERCENT"], "7f77ddd42d2a67b1a0103f5942b631818cd12210d5", null);
}),
"[project]/apps/web/lib/actions/studio-stripe-connect.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLATFORM_FEE_PERCENT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PLATFORM_FEE_PERCENT"],
    "createStudioStripeConnectAccountLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$studio$2d$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createStudioStripeConnectAccountLink"],
    "getStudioStripeAccountForCheckout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$studio$2d$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudioStripeAccountForCheckout"],
    "getStudioStripeConnectStatus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$studio$2d$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudioStripeConnectStatus"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$studio$2d$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/studio-stripe-connect.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$constants$2f$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/constants/stripe-connect.ts [app-rsc] (ecmascript)");
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/configuracoes/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/studio-stripe-connect.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$studio$2d$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/studio-stripe-connect.ts [app-rsc] (ecmascript)");
;
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/configuracoes/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/studio-stripe-connect.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40b1ea7e8f673b93bd3484c251e333e858d317785a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$studio$2d$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStudioStripeConnectStatus"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$solutions$2f$estudio$2d$de$2d$danca$2f$dashboard$2f$configuracoes$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$studio$2d$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/configuracoes/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/lib/actions/studio-stripe-connect.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$studio$2d$stripe$2d$connect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/studio-stripe-connect.ts [app-rsc] (ecmascript)");
}),
];

//# debugId=e84a5a67-ebd8-da85-2828-32caae30bb83
//# sourceMappingURL=%5Broot-of-the-server%5D__d0a450c4._.js.map