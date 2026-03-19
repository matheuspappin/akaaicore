;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="1d61f387-c99b-2d88-b4dc-2fb3cee4399b")}catch(e){}}();
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
"[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
// Placeholders para evitar "supabaseKey is required" quando env ainda não carregou
const _url = supabaseUrl || 'https://placeholder.supabase.co';
const _key = supabaseServiceRoleKey || 'placeholder-key';
if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn('⚠️ Supabase Admin: URL ou Service Role Key não configurada. Configure .env.local e reinicie o servidor.');
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(_url, _key, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
}),
"[project]/apps/web/lib/plan-limits.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Definições de limites para os planos do Workflow AI
 */ __turbopack_context__.s([
    "PLAN_LIMITS",
    ()=>PLAN_LIMITS,
    "isLimitReached",
    ()=>isLimitReached,
    "normalizePlanForDisplay",
    ()=>normalizePlanForDisplay
]);
const PLAN_LIMITS = {
    gratuito: {
        name: "Gratuito",
        price: 0,
        maxStudents: 10,
        maxProfessionals: 1,
        hasWhatsApp: false,
        hasAI: false,
        hasFinance: true,
        hasMultiUnit: false,
        hasPOS: false,
        hasInventory: false,
        hasGamification: false,
        hasLeads: false,
        hasScanner: false,
        hasMarketplace: false,
        hasERP: false
    },
    pro: {
        name: "Pro",
        price: 97,
        maxStudents: 100,
        maxProfessionals: 5,
        hasWhatsApp: true,
        hasAI: true,
        hasFinance: true,
        hasMultiUnit: false,
        hasPOS: true,
        hasInventory: true,
        hasGamification: false,
        hasLeads: true,
        hasScanner: true,
        hasMarketplace: false,
        hasERP: false
    },
    "pro-plus": {
        name: "Pro+",
        price: 197,
        maxStudents: 500,
        maxProfessionals: 15,
        hasWhatsApp: true,
        hasAI: true,
        hasFinance: true,
        hasMultiUnit: false,
        hasPOS: true,
        hasInventory: true,
        hasGamification: true,
        hasLeads: true,
        hasScanner: true,
        hasMarketplace: true,
        hasERP: false
    },
    // "pro+" é alias para "pro-plus" — normalizado em isLimitReached()
    enterprise: {
        name: "Enterprise",
        price: 397,
        maxStudents: 1000000,
        maxProfessionals: 1000000,
        hasWhatsApp: true,
        hasAI: true,
        hasFinance: true,
        hasMultiUnit: true,
        hasPOS: true,
        hasInventory: true,
        hasGamification: true,
        hasLeads: true,
        hasScanner: true,
        hasMarketplace: true,
        hasERP: true
    }
};
/** Mapeamento module key -> [has_snake, hasCamel] */ const MODULE_TO_HAS = {
    whatsapp: [
        'has_whatsapp',
        'hasWhatsApp'
    ],
    ai_chat: [
        'has_ai',
        'hasAI'
    ],
    financial: [
        'has_finance',
        'hasFinance'
    ],
    multi_unit: [
        'has_multi_unit',
        'hasMultiUnit'
    ],
    pos: [
        'has_pos',
        'hasPOS'
    ],
    inventory: [
        'has_inventory',
        'hasInventory'
    ],
    gamification: [
        'has_gamification',
        'hasGamification'
    ],
    leads: [
        'has_leads',
        'hasLeads'
    ],
    scanner: [
        'has_scanner',
        'hasScanner'
    ],
    marketplace: [
        'has_marketplace',
        'hasMarketplace'
    ],
    erp: [
        'has_erp',
        'hasERP'
    ]
};
function normalizePlanForDisplay(plan, planId) {
    if (!plan) {
        const normId = (planId || 'gratuito').toLowerCase().replace('pro+', 'pro-plus');
        const fallback = PLAN_LIMITS[normId] || PLAN_LIMITS.gratuito;
        return {
            ...fallback,
            name: fallback.name,
            max_students: fallback.maxStudents,
            max_teachers: fallback.maxProfessionals,
            has_whatsapp: fallback.hasWhatsApp,
            has_ai: fallback.hasAI,
            has_finance: fallback.hasFinance,
            has_multi_unit: fallback.hasMultiUnit,
            has_pos: fallback.hasPOS,
            hasPOS: fallback.hasPOS,
            has_inventory: fallback.hasInventory,
            hasInventory: fallback.hasInventory,
            has_gamification: fallback.hasGamification,
            hasGamification: fallback.hasGamification,
            has_leads: fallback.hasLeads,
            hasLeads: fallback.hasLeads,
            has_scanner: fallback.hasScanner,
            hasScanner: fallback.hasScanner,
            has_marketplace: fallback.hasMarketplace,
            hasMarketplace: fallback.hasMarketplace,
            has_erp: fallback.hasERP,
            hasERP: fallback.hasERP
        };
    }
    const modules = plan.modules || {};
    const out = {
        ...plan
    };
    for (const [modKey, [snakeKey, camelKey]] of Object.entries(MODULE_TO_HAS)){
        const val = modules[modKey];
        if (val !== undefined) {
            if (out[snakeKey] === undefined || out[snakeKey] === null) out[snakeKey] = val;
            if (out[camelKey] === undefined || out[camelKey] === null) out[camelKey] = val;
        }
    }
    return out;
}
function isLimitReached(currentCount, plan = 'gratuito', resource) {
    let normalizedPlan = plan.toLowerCase();
    // Normalizar aliases de plano
    if (normalizedPlan === 'pro+') normalizedPlan = 'pro-plus';
    const limits = PLAN_LIMITS[normalizedPlan] || PLAN_LIMITS.gratuito;
    const limit = limits[resource];
    if (typeof limit === 'number') {
        return currentCount >= limit;
    }
    return false;
}
}),
"[project]/apps/web/config/professional-tiers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Faixas de profissionais por estúdio.
 * Usado quando o plano é Personalizado (sem gratuito/pro/enterprise).
 * O cliente escolhe a faixa no registro ou em Configurações.
 */ __turbopack_context__.s([
    "DEFAULT_PROFESSIONALS_TIER",
    ()=>DEFAULT_PROFESSIONALS_TIER,
    "PROFESSIONAL_TIERS",
    ()=>PROFESSIONAL_TIERS,
    "getTierById",
    ()=>getTierById,
    "getTierLimit",
    ()=>getTierLimit
]);
const PROFESSIONAL_TIERS = [
    {
        id: '1-10',
        labelKey: 'tier_1_10',
        limit: 10,
        price: 97,
        description: 'Até 10 profissionais'
    },
    {
        id: '11-20',
        labelKey: 'tier_11_20',
        limit: 20,
        price: 197,
        description: 'Até 20 profissionais'
    },
    {
        id: '21-50',
        labelKey: 'tier_21_50',
        limit: 50,
        price: 397,
        description: 'Até 50 profissionais'
    }
];
const DEFAULT_PROFESSIONALS_TIER = '1-10';
function getTierById(id) {
    return PROFESSIONAL_TIERS.find((t)=>t.id === id);
}
function getTierLimit(tierId) {
    const tier = getTierById(tierId || DEFAULT_PROFESSIONALS_TIER);
    return tier?.limit ?? 10;
}
}),
"[project]/apps/web/lib/studio-limits.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Resolve limites de plano por estúdio.
 * Prioridade: 1) professionals_tier (theme_config), 2) verticalization_plans, 3) PLAN_LIMITS.
 */ __turbopack_context__.s([
    "getProfessionalsLimitForStudio",
    ()=>getProfessionalsLimitForStudio,
    "isProfessionalsLimitReachedForStudio",
    ()=>isProfessionalsLimitReachedForStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$plan$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/plan-limits.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$professional$2d$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/professional-tiers.ts [app-route] (ecmascript)");
;
;
;
async function getProfessionalsLimitForStudio(studioId) {
    const { data: orgSettings } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("organization_settings").select("theme_config").eq("studio_id", studioId).maybeSingle();
    const tierId = orgSettings?.theme_config?.professionals_tier;
    if (tierId) {
        const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$professional$2d$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTierLimit"])(tierId);
        if (limit > 0) return limit;
    }
    const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("studios").select("plan, verticalization_plan_id").eq("id", studioId).maybeSingle();
    if (!studio) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$professional$2d$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTierLimit"])("1-10");
    if (studio.verticalization_plan_id) {
        const { data: vp } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from("verticalization_plans").select("max_teachers").eq("id", studio.verticalization_plan_id).maybeSingle();
        const limit = vp?.max_teachers;
        if (typeof limit === "number" && limit > 0) return limit;
    }
    const plan = studio.plan || "custom";
    const normId = plan.toLowerCase().replace("pro+", "pro-plus");
    const limits = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$plan$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PLAN_LIMITS"][normId];
    if (limits) return limits.maxProfessionals;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$professional$2d$tiers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTierLimit"])("1-10");
}
async function isProfessionalsLimitReachedForStudio(studioId, currentCount) {
    const limit = await getProfessionalsLimitForStudio(studioId);
    return currentCount >= limit;
}
}),
"[project]/apps/web/app/api/dance-studio/vincular/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$studio$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/studio-limits.ts [app-route] (ecmascript)");
;
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU") || '';
function createSSRClient(request) {
    const authHeader = request.headers.get('authorization');
    const bearerToken = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (bearerToken) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
            global: {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            },
            cookies: {
                get () {
                    return undefined;
                },
                set () {},
                remove () {}
            }
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
        cookies: {
            get (name) {
                return request.cookies.get(name)?.value;
            },
            set () {},
            remove () {}
        }
    });
}
async function GET(request) {
    try {
        const supabase = createSSRClient(request);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Não autenticado'
        }, {
            status: 401
        });
        // Query both tables in parallel — avoids depending on stale JWT role metadata
        const [{ data: student }, { data: professional }] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').select('id, name, studio_id, status').eq('id', user.id).eq('status', 'active').maybeSingle(),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').select('id, name, studio_id, status, professional_type').eq('user_id', user.id).eq('status', 'active').maybeSingle()
        ]);
        if (student?.studio_id) {
            const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('id, name').eq('id', student.studio_id).maybeSingle();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                linked: true,
                student_id: student.id,
                role: 'student',
                studio
            });
        }
        if (professional?.studio_id) {
            const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('id, name').eq('id', professional.studio_id).maybeSingle();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                linked: true,
                professional_id: professional.id,
                role: professional.professional_type,
                studio
            });
        }
        // Fallback: user_metadata.studio_id (ex: aluno vinculado via registro com convite, mas students desatualizado)
        const metaStudioId = user.user_metadata?.studio_id;
        if (metaStudioId) {
            const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('id, name').eq('id', metaStudioId).maybeSingle();
            if (studio) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    linked: true,
                    role: user.user_metadata?.role || 'student',
                    studio
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            linked: false
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Erro interno';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const supabase = createSSRClient(request);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Não autenticado'
        }, {
            status: 401
        });
        const body = await request.json();
        const inviteCode = (body.invite_code || '').trim().toUpperCase();
        if (!inviteCode || inviteCode.length < 4) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Código de convite inválido'
            }, {
                status: 400
            });
        }
        // Buscar todos os organization_settings e verificar o código em theme_config.invite_codes
        // Não filtramos por niche para cobrir todos os valores possíveis (dance, dance_studio, etc.)
        const { data: allSettings } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('organization_settings').select('studio_id, theme_config');
        let matchedStudioId = null;
        let codeType = null;
        for (const row of allSettings || []){
            const codes = row.theme_config?.invite_codes || {};
            if (codes.teacher_invite_code === inviteCode) {
                matchedStudioId = row.studio_id;
                codeType = 'teacher';
                break;
            }
            if (codes.student_invite_code === inviteCode) {
                matchedStudioId = row.studio_id;
                codeType = 'student';
                break;
            }
        }
        if (!matchedStudioId || !codeType) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Estúdio não encontrado. Verifique o código informado.'
            }, {
                status: 404
            });
        }
        const { data: studioData } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('id, name').eq('id', matchedStudioId).maybeSingle();
        // Fallback: usar studio_id e nome genérico se studios não retornar dados
        const studio = studioData ?? {
            id: matchedStudioId,
            name: 'Estúdio'
        };
        const userName = user.user_metadata?.name || user.email?.split('@')[0] || 'Usuário';
        const userEmail = user.email || '';
        if (codeType === 'student') {
            // Verificar se já está vinculado (students.id referencia auth.users(id))
            const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').select('id, status, studio_id').eq('id', user.id).maybeSingle();
            if (existing) {
                if (existing.studio_id === studio.id && existing.status === 'active') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Você já está vinculado a este estúdio.'
                    }, {
                        status: 409
                    });
                }
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').update({
                    studio_id: studio.id,
                    status: 'active',
                    name: userName,
                    email: userEmail
                }).eq('id', existing.id);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').insert({
                    id: user.id,
                    studio_id: studio.id,
                    name: userName,
                    email: userEmail,
                    phone: user.user_metadata?.phone || null,
                    status: 'active'
                });
            }
            // Inicializar créditos se não existir (tabela usa student_id / remaining_credits / expiry_date)
            const { data: existingCredits } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('student_lesson_credits').select('id').eq('student_id', user.id).eq('studio_id', studio.id).maybeSingle();
            if (!existingCredits) {
                const expiry = new Date();
                expiry.setFullYear(expiry.getFullYear() + 1);
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('student_lesson_credits').insert({
                    student_id: user.id,
                    studio_id: studio.id,
                    total_credits: 0,
                    remaining_credits: 0,
                    expiry_date: expiry.toISOString()
                }).single();
            }
            // Atualizar metadata do auth
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.admin.updateUserById(user.id, {
                user_metadata: {
                    ...user.user_metadata,
                    role: 'student',
                    studio_id: studio.id
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: `Vinculado com sucesso ao estúdio ${studio.name}`,
                role: 'student',
                studio: {
                    id: studio.id,
                    name: studio.name
                }
            });
        }
        // Tipo: teacher
        const { data: existing } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').select('id, status, studio_id').eq('user_id', user.id).maybeSingle();
        if (existing) {
            if (existing.studio_id === studio.id && existing.status === 'active') {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Você já está vinculado a este estúdio.'
                }, {
                    status: 409
                });
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').update({
                studio_id: studio.id,
                status: 'active',
                name: userName,
                email: userEmail,
                professional_type: 'teacher'
            }).eq('id', existing.id);
        } else {
            const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').select('*', {
                count: 'exact',
                head: true
            }).eq('studio_id', studio.id).eq('status', 'active');
            if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$studio$2d$limits$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProfessionalsLimitReachedForStudio"])(studio.id, count ?? 0)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'O estúdio atingiu o limite de profissionais para o plano atual.'
                }, {
                    status: 403
                });
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').insert({
                studio_id: studio.id,
                user_id: user.id,
                name: userName,
                email: userEmail,
                phone: user.user_metadata?.phone || null,
                professional_type: 'teacher',
                status: 'active'
            });
        }
        // Atualizar metadata do auth
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].auth.admin.updateUserById(user.id, {
            user_metadata: {
                ...user.user_metadata,
                role: 'teacher',
                studio_id: studio.id
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: `Vinculado com sucesso ao estúdio ${studio.name}`,
            role: 'teacher',
            studio: {
                id: studio.id,
                name: studio.name
            }
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Erro interno';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const supabase = createSSRClient(request);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Não autenticado'
        }, {
            status: 401
        });
        // Update both tables — whichever has an active link will be affected
        await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').update({
                status: 'inactive',
                studio_id: null
            }).eq('id', user.id).eq('status', 'active'),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').update({
                status: 'inactive',
                studio_id: null
            }).eq('user_id', user.id).eq('status', 'active')
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Desvinculado do estúdio com sucesso.'
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Erro interno';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status: 500
        });
    }
}
}),
];

//# debugId=1d61f387-c99b-2d88-b4dc-2fb3cee4399b
//# sourceMappingURL=%5Broot-of-the-server%5D__510b36f3._.js.map