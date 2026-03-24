;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="4aa88585-7120-5940-4439-e0a3d933b4ca")}catch(e){}}();
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
"[project]/apps/web/lib/logger.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/web/lib/supabase/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClassesData",
    ()=>getClassesData,
    "getFinancialData",
    ()=>getFinancialData,
    "getInventoryData",
    ()=>getInventoryData,
    "getLeadsData",
    ()=>getLeadsData,
    "getStudentsData",
    ()=>getStudentsData,
    "getSupabaseClient",
    ()=>getSupabaseClient,
    "getTeachersData",
    ()=>getTeachersData,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.99.3/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.8.0_@supabase+supabase-js@2.99.3/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
;
;
;
function getSupabaseConfig() {
    const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
    const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU") || '';
    const url = supabaseUrl || 'https://placeholder.supabase.co';
    const key = supabaseAnonKey || 'placeholder-key';
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        url,
        key
    };
}
// Cliente Singleton com lazy init para evitar "supabaseKey is required" quando env ainda não carregou
let _supabase = null;
function getOrCreateSupabase() {
    if (_supabase) return _supabase;
    const { url, key } = getSupabaseConfig();
    _supabase = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, key);
    return _supabase;
}
const supabase = new Proxy({}, {
    get (_, prop) {
        const client = getOrCreateSupabase();
        const value = client[prop];
        return typeof value === 'function' ? value.bind(client) : value;
    }
});
function getSupabaseClient() {
    return supabase;
}
async function getStudentsData(studioId) {
    try {
        const { data: students, error } = await supabase.from('students').select('*').eq('studio_id', studioId);
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn('Erro ao buscar students:', error.message);
            return {
                total: 0,
                active: 0,
                newThisMonth: 0,
                retentionRate: 0
            };
        }
        const total = students?.length || 0;
        const active = students?.filter((s)=>s.status === 'active').length || 0;
        const thisMonth = new Date();
        thisMonth.setDate(1);
        const newThisMonth = students?.filter((s)=>new Date(s.enrollment_date) >= thisMonth).length || 0;
        const retentionRate = total > 0 ? Math.round(active / total * 100) : 0;
        return {
            total,
            active,
            newThisMonth,
            retentionRate
        };
    } catch (error) {
        return {
            total: 0,
            active: 0,
            newThisMonth: 0,
            retentionRate: 0
        };
    }
}
async function getTeachersData(studioId) {
    try {
        const { data: teachers, error } = await supabase.from('teachers').select('*').eq('studio_id', studioId);
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn('Erro ao buscar teachers:', error.message);
            return {
                total: 0,
                active: 0,
                totalClasses: 0,
                averageRating: 0
            };
        }
        const total = teachers?.length || 0;
        const active = teachers?.filter((t)=>t.status === 'active').length || 0;
        const { data: classes } = await supabase.from('classes').select('id').eq('studio_id', studioId).eq('status', 'active');
        const totalClasses = classes?.length || 0;
        const averageRating = 4.5;
        return {
            total,
            active,
            totalClasses,
            averageRating
        };
    } catch (error) {
        return {
            total: 0,
            active: 0,
            totalClasses: 0,
            averageRating: 0
        };
    }
}
async function getFinancialData(studioId) {
    try {
        const thisMonth = new Date();
        thisMonth.setDate(1);
        const nextMonth = new Date(thisMonth);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        // Receita mensal
        const { data: paidPayments } = await supabase.from('payments').select('amount').eq('studio_id', studioId).eq('status', 'paid').gte('payment_date', thisMonth.toISOString()).lt('payment_date', nextMonth.toISOString());
        const monthlyRevenue = paidPayments?.reduce((sum, p)=>sum + (p.amount || 0), 0) || 0;
        // Pagamentos pendentes e atrasados com dados do aluno
        const { data: allPayments } = await supabase.from('payments').select(`
        *,
        student:students (name, phone)
      `).eq('studio_id', studioId).neq('status', 'paid');
        const now = new Date();
        const pendingAmount = allPayments?.filter((p)=>p.status === 'pending').reduce((sum, p)=>sum + (p.amount || 0), 0) || 0;
        const overduePayments = allPayments?.filter((p)=>p.status === 'overdue' || p.status === 'pending' && new Date(p.due_date) < now) || [];
        const overdueAmount = overduePayments.reduce((sum, p)=>sum + (p.amount || 0), 0);
        const debtors = overduePayments.map((p)=>({
                name: p.student?.name || 'Desconhecido',
                phone: p.student?.phone || 'N/A',
                amount: p.amount,
                dueDate: p.due_date,
                description: p.description
            }));
        return {
            monthlyRevenue,
            pendingPayments: pendingAmount,
            overduePayments: overdueAmount,
            totalPaidThisMonth: monthlyRevenue,
            debtors
        };
    } catch (error) {
        return {
            monthlyRevenue: 0,
            pendingPayments: 0,
            overduePayments: 0,
            totalPaidThisMonth: 0,
            debtors: []
        };
    }
}
async function getClassesData(studioId) {
    try {
        const { data: classes } = await supabase.from('classes').select('*').eq('studio_id', studioId);
        const total = classes?.length || 0;
        const active = classes?.filter((c)=>c.status === 'active').length || 0;
        const { data: enrollments } = await supabase.from('enrollments').select('*').eq('studio_id', studioId).eq('status', 'active');
        const totalEnrollments = enrollments?.length || 0;
        const totalCapacity = classes?.filter((c)=>c.status === 'active').reduce((sum, c)=>sum + (c.max_students || 0), 0) || 0;
        const occupancyRate = totalCapacity > 0 ? Math.round(totalEnrollments / totalCapacity * 100) : 0;
        return {
            total,
            active,
            totalEnrollments,
            occupancyRate
        };
    } catch (error) {
        return {
            total: 0,
            active: 0,
            totalEnrollments: 0,
            occupancyRate: 0
        };
    }
}
async function getLeadsData(studioId) {
    try {
        const { data: leads, error, count } = await supabase.from('leads').select('id, name, email, phone, stage, source, created_at', {
            count: 'exact'
        }).eq('studio_id', studioId).eq('status', 'active').order('created_at', {
            ascending: false
        }).limit(100);
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn('Erro ao buscar leads:', error.message);
            return {
                total: 0,
                byStage: {},
                recent: []
            };
        }
        const list = leads || [];
        const total = count ?? list.length;
        const byStage = {};
        for (const l of list){
            const s = l.stage || 'new';
            byStage[s] = (byStage[s] || 0) + 1;
        }
        const recent = list.slice(0, 15).map((l)=>({
                name: l.name || 'Sem nome',
                email: l.email,
                phone: l.phone,
                stage: l.stage || 'new',
                source: l.source
            }));
        return {
            total,
            byStage,
            recent
        };
    } catch (error) {
        return {
            total: 0,
            byStage: {},
            recent: []
        };
    }
}
async function getInventoryData(studioId) {
    try {
        const { data: products, error } = await supabase.from('products').select('id, name, sku, quantity, current_stock, min_stock, min_quantity, selling_price, price, cost_price').eq('studio_id', studioId).in('status', [
            'active'
        ]).order('name', {
            ascending: true
        }).limit(100);
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn('Erro ao buscar produtos:', error.message);
            return {
                totalProducts: 0,
                totalItems: 0,
                totalValue: 0,
                lowStock: [],
                products: []
            };
        }
        const list = products || [];
        const totalProducts = list.length;
        const totalItems = list.reduce((acc, p)=>acc + (p.quantity ?? p.current_stock ?? 0), 0);
        const totalValue = list.reduce((acc, p)=>{
            const qty = p.quantity ?? p.current_stock ?? 0;
            const price = p.selling_price ?? p.price ?? 0;
            return acc + qty * price;
        }, 0);
        const lowStock = list.filter((p)=>{
            const qty = p.quantity ?? p.current_stock ?? 0;
            const min = p.min_stock ?? p.min_quantity ?? 0;
            return min > 0 && qty <= min;
        }).map((p)=>({
                name: p.name,
                quantity: p.quantity ?? p.current_stock ?? 0,
                minStock: p.min_stock ?? p.min_quantity ?? 0
            }));
        const productsList = list.slice(0, 30).map((p)=>({
                name: p.name,
                sku: p.sku,
                quantity: p.quantity ?? p.current_stock ?? 0,
                minStock: p.min_stock ?? p.min_quantity ?? 0,
                price: p.selling_price ?? p.price
            }));
        return {
            totalProducts,
            totalItems,
            totalValue,
            lowStock,
            products: productsList
        };
    } catch (error) {
        return {
            totalProducts: 0,
            totalItems: 0,
            totalValue: 0,
            lowStock: [],
            products: []
        };
    }
}
}),
"[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.99.3/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
// Placeholders para evitar "supabaseKey is required" quando env ainda não carregou
const _url = supabaseUrl || 'https://placeholder.supabase.co';
const _key = supabaseServiceRoleKey || 'placeholder-key';
if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn('⚠️ Supabase Admin: URL ou Service Role Key não configurada. Configure .env.local e reinicie o servidor.');
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(_url, _key, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
}),
"[project]/apps/web/lib/server-utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminClient",
    ()=>getAdminClient,
    "getAuthenticatedClient",
    ()=>getAuthenticatedClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.99.3/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
;
;
;
async function getAuthenticatedClient() {
    try {
        const { createClient: createServerSupabase } = await __turbopack_context__.A("[project]/apps/web/lib/supabase/server.ts [app-route] (ecmascript, async loader)");
        const ssrClient = await createServerSupabase();
        const { data: { user }, error } = await ssrClient.auth.getUser();
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].debug('getAuthenticatedClient: auth error', error.message);
            return null;
        }
        if (user) return ssrClient;
        // Fallback: tokens em cookies legados (sb-access-token, sb-auth-token)
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        const token = cookieStore.get('sb-access-token')?.value || cookieStore.get('sb-auth-token')?.value || cookieStore.getAll().find((c)=>c.name.includes('auth-token') && c.value.length > 20)?.value;
        if (token) {
            const manualClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU"), {
                auth: {
                    persistSession: false,
                    autoRefreshToken: false,
                    detectSessionInUrl: false
                },
                global: {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            });
            try {
                const { data: { user: manualUser } } = await manualClient.auth.getUser(token);
                if (manualUser) return manualClient;
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].debug('Manual token getUser failed');
            }
        }
        return null;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('Erro ao criar cliente autenticado:', error);
    }
    return null;
}
/**
 * Cria um cliente do Supabase com privilégios de admin (Service Role)
 * USE COM CAUTELA - IGNORA RLS
 */ let cachedAdminClient = null;
async function getAdminClient() {
    if (cachedAdminClient) {
        return cachedAdminClient;
    }
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn('⚠️ SUPABASE_SERVICE_ROLE_KEY não encontrada no ambiente');
        return null;
    }
    try {
        const adminClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co"), serviceKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false
            }
        });
        cachedAdminClient = adminClient;
        return adminClient;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('Erro ao criar cliente admin:', error);
        return null;
    }
}
}),
"[project]/apps/web/config/modules.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MODULE_DEFINITIONS",
    ()=>MODULE_DEFINITIONS,
    "normalizeModules",
    ()=>normalizeModules
]);
const MODULE_DEFINITIONS = {
    dashboard: {
        label: 'Dashboard',
        default: true,
        features: [
            'Visão geral e métricas',
            'Acompanhamento de performance'
        ]
    },
    students: {
        label: 'Gestão de Alunos/Clientes',
        default: false,
        features: [
            'Cadastro e perfil de alunos',
            'Histórico de aulas e pagamentos',
            'Comunicação direta com alunos'
        ]
    },
    classes: {
        label: 'Gestão de Aulas/Serviços',
        default: false,
        features: [
            'Criação e agendamento de aulas',
            'Controle de frequência',
            'Gestão de instrutores'
        ]
    },
    financial: {
        label: 'Financeiro',
        default: false,
        features: [
            'Controle de mensalidades e pagamentos',
            'Relatórios financeiros',
            'Gestão de despesas'
        ]
    },
    whatsapp: {
        label: 'Integração WhatsApp',
        default: false,
        features: [
            'Envio de mensagens automáticas',
            'Atendimento via Chatbot',
            'Notificações personalizadas'
        ]
    },
    ai_chat: {
        label: 'Chat IA',
        default: false,
        features: [
            'Assistente virtual inteligente',
            'Respostas automatizadas',
            'Personalização de atendimento'
        ]
    },
    pos: {
        label: 'Ponto de Venda (POS)',
        default: false,
        features: [
            'Venda de produtos e serviços',
            'Controle de caixa',
            'Integração com estoque'
        ]
    },
    inventory: {
        label: 'Controle de Estoque',
        default: false,
        features: [
            'Gestão de produtos e suprimentos',
            'Alertas de estoque mínimo',
            'Relatórios de movimentação'
        ]
    },
    gamification: {
        label: 'Gamificação',
        default: false,
        features: [
            'Pontuação e ranking de alunos',
            'Conquistas e recompensas',
            'Engajamento e motivação'
        ]
    },
    leads: {
        label: 'Funil de Vendas (CRM)',
        default: false,
        features: [
            'Captura e gestão de leads',
            'Acompanhamento de vendas',
            'Automação de marketing'
        ]
    },
    scanner: {
        label: 'Scanner de Entrada',
        default: false,
        features: [
            'Controle de acesso',
            'Registro de presença',
            'Integração com catracas'
        ]
    },
    marketplace: {
        label: 'Marketplace/Loja Virtual',
        default: false,
        features: [
            'Venda de produtos online',
            'Gestão de pedidos',
            'Vitrine personalizada'
        ]
    },
    erp: {
        label: 'ERP Enterprise',
        default: false,
        features: [
            'Gestão completa da empresa',
            'Módulos personalizados',
            'Suporte premium'
        ]
    },
    multi_unit: {
        label: 'Gestão Multi-unidade',
        default: false,
        features: [
            'Gerenciamento de múltiplas filiais',
            'Centralização de dados',
            'Relatórios consolidados'
        ]
    },
    service_orders: {
        label: 'Ordens de Serviço (OS)',
        default: false,
        features: [
            'Controle de consertos e manutenções',
            'Assinatura digital do cliente',
            'Histórico de estados da OS'
        ]
    },
    fiscal: {
        label: 'Emissor Fiscal (NF-e)',
        default: false,
        features: [
            'Emissão de Notas Fiscais Eletrônicas',
            'Integração direta com SEFAZ',
            'Certificado digital A1 por tenant'
        ]
    }
};
function normalizeModules(modules) {
    const normalized = {};
    Object.keys(MODULE_DEFINITIONS).forEach((k)=>{
        const key = k;
        // Se existir no banco, usa; senão usa o default
        normalized[key] = modules?.[key] ?? MODULE_DEFINITIONS[key].default;
    });
    return normalized;
}
}),
"[project]/apps/web/lib/admin-logs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logAdmin",
    ()=>logAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)");
;
async function logAdmin(type, source, message, opts) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('admin_system_logs').insert({
            type,
            source,
            message,
            studio: opts?.studio ?? null,
            metadata: opts?.metadata ?? {}
        });
    } catch (err) {
        console.error('[admin-logs] Falha ao gravar log:', err);
    }
}
}),
"[project]/apps/web/lib/modules-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServerOrganizationConfig",
    ()=>getServerOrganizationConfig,
    "guardModule",
    ()=>guardModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/server-utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/modules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/admin-logs.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const getServerOrganizationConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthenticatedClient"])();
    if (!supabase) return null;
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
        // Only log if it's an error, otherwise silent (user not logged in)
        if (userError) __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('getServerOrganizationConfig: Auth error', userError);
        return null;
    }
    // 1. Tentar obter studio_id via metadata (mais rápido e robusto para usuários manuais)
    let studioId = user.user_metadata?.studio_id;
    if (!studioId) {
        // 2. Se não tiver metadata, tenta users_internal
        const { data: profile } = await supabase.from('users_internal').select('studio_id').eq('id', user.id).maybeSingle();
        if (profile?.studio_id) {
            studioId = profile.studio_id;
        } else {
            // 3. Fallback para teachers (DanceFlow), professionals e students
            const { data: teacher } = await supabase.from('teachers').select('studio_id').eq('user_id', user.id).maybeSingle();
            if (teacher?.studio_id) {
                studioId = teacher.studio_id;
            } else {
                const { data: professional } = await supabase.from('professionals').select('studio_id').eq('user_id', user.id).maybeSingle();
                if (professional?.studio_id) {
                    studioId = professional.studio_id;
                } else {
                    const { data: student } = await supabase.from('students').select('studio_id').eq('id', user.id).maybeSingle();
                    if (student?.studio_id) studioId = student.studio_id;
                }
            }
        }
    }
    if (!studioId) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn(`getServerOrganizationConfig: User ${user.id} has no studio_id linked`);
        return null;
    }
    // Verificar se o studio está ativo (enforcement de subscription/lifecycle)
    const { data: studio } = await supabase.from('studios').select('status, subscription_status, trial_ends_at').eq('id', studioId).maybeSingle();
    if (!studio || studio.status === 'inactive') {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn(`getServerOrganizationConfig: Studio ${studioId} está inativo. Acesso bloqueado para user ${user.id}`);
        return null;
    }
    // Verificar trial expirado (proteção adicional caso o CRON não tenha rodado ainda)
    if (studio.subscription_status === 'trialing' && studio.trial_ends_at) {
        const trialEnd = new Date(studio.trial_ends_at);
        if (trialEnd < new Date()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn(`getServerOrganizationConfig: Trial expirado para studio ${studioId}. Acesso bloqueado para user ${user.id}`);
            return null;
        }
    }
    const { data: settings } = await supabase.from('organization_settings').select('*').eq('studio_id', studioId).maybeSingle();
    return {
        studioId: studioId,
        user,
        niche: settings?.niche || 'dance',
        vocabulary: settings?.vocabulary || null,
        enabledModules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeModules"])(settings?.enabled_modules)
    };
});
/**
 * Carrega config usando studioId fornecido, após validar que o usuário tem acesso.
 * Usado quando o estúdio vem do cliente (ex: localStorage em verticalizações).
 * Usa supabaseAdmin para as queries de permissão (bypass RLS) - igual ao checkStudioAccess.
 */ async function getConfigForStudio(studioId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthenticatedClient"])();
    if (!supabase) return null;
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return null;
    // Super admin tem acesso global (igual requireStudioAccess)
    const role = user.user_metadata?.role || user.app_metadata?.role || '';
    if (role === 'super_admin') {
        const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('status, subscription_status, trial_ends_at').eq('id', studioId).maybeSingle();
        if (!studio || studio.status === 'inactive') return null;
        if (studio.subscription_status === 'trialing' && studio.trial_ends_at && new Date(studio.trial_ends_at) < new Date()) return null;
        const { data: settings } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('organization_settings').select('*').eq('studio_id', studioId).maybeSingle();
        const rawModules = settings?.enabled_modules;
        const enabledModules = rawModules && Object.keys(rawModules).length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeModules"])(rawModules) : {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeModules"])({}),
            inventory: true,
            pos: true,
            dashboard: true
        };
        return {
            studioId,
            user,
            niche: settings?.niche || 'dance',
            vocabulary: settings?.vocabulary || null,
            enabledModules
        };
    }
    // Verificar se o usuário tem acesso a este estúdio (usa admin para bypass RLS - igual checkStudioAccess)
    const fromMeta = user.user_metadata?.studio_id === studioId;
    const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('status, subscription_status, trial_ends_at, owner_id').eq('id', studioId).maybeSingle();
    const isOwner = studio?.owner_id === user.id;
    const { data: internal } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users_internal').select('id').eq('id', user.id).eq('studio_id', studioId).maybeSingle();
    const { data: teacher } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('teachers').select('id').eq('user_id', user.id).eq('studio_id', studioId).maybeSingle();
    const { data: prof } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').select('id').eq('user_id', user.id).eq('studio_id', studioId).maybeSingle();
    const { data: student } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').select('id').eq('id', user.id).eq('studio_id', studioId).maybeSingle();
    if (!fromMeta && !isOwner && !internal && !teacher && !prof && !student) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn(`guardModule: User ${user.id} sem acesso ao studio ${studioId}`);
        return null;
    }
    if (!studio || studio.status === 'inactive') return null;
    if (studio.subscription_status === 'trialing' && studio.trial_ends_at && new Date(studio.trial_ends_at) < new Date()) return null;
    const { data: settings } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('organization_settings').select('*').eq('studio_id', studioId).maybeSingle();
    // Se não houver organization_settings, permitir inventory por padrão para DanceFlow (evita bloqueio em estúdios novos)
    const rawModules = settings?.enabled_modules;
    const enabledModules = rawModules && Object.keys(rawModules).length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeModules"])(rawModules) : {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeModules"])({}),
        inventory: true,
        pos: true,
        dashboard: true
    };
    return {
        studioId,
        user,
        niche: settings?.niche || 'dance',
        vocabulary: settings?.vocabulary || null,
        enabledModules
    };
}
async function guardModule(moduleKey, options) {
    let config = await getServerOrganizationConfig();
    // Fallback: se config null mas studioId fornecido (ex: DanceFlow localStorage), tentar carregar por studio
    if (!config && options?.studioId) {
        config = await getConfigForStudio(options.studioId);
    }
    if (!config) {
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthenticatedClient"])();
        const { data: { user } } = supabase ? await supabase.auth.getUser() : {
            data: {
                user: null
            }
        };
        if (user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error(`guardModule: Falha ao carregar config para usuário ${user.id} tentando acessar ${moduleKey}`);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn(`guardModule: Tentativa de acesso não autenticado ao módulo ${moduleKey}`);
        }
        throw new Error("Não foi possível carregar as configurações da organização. Verifique se você está logado e vinculado a um estúdio.");
    }
    if (!config.enabledModules[moduleKey]) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error(`❌ Acesso bloqueado: Módulo [${moduleKey}] está desativado para o estúdio ${config.studioId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAdmin"])('warning', 'guard-module', `Módulo [${moduleKey}] bloqueado para studio ${config.studioId}`, {
            studio: config.studioId,
            metadata: {
                moduleKey,
                userId: config.user?.id
            }
        });
        throw new Error(`O módulo ${moduleKey} não está ativo para sua conta.`);
    }
    return {
        studioId: config.studioId,
        user: config.user
    };
}
}),
"[project]/apps/web/lib/whatsapp.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Workflow AI - WhatsApp Integration Library
 * Esta biblioteca centraliza o envio de mensagens e formatação de payloads.
 */ __turbopack_context__.s([
    "formatPhoneNumber",
    ()=>formatPhoneNumber,
    "getWhatsAppConnection",
    ()=>getWhatsAppConnection,
    "logoutWhatsApp",
    ()=>logoutWhatsApp,
    "notifyLowCredits",
    ()=>notifyLowCredits,
    "provisionWhatsAppForStudio",
    ()=>provisionWhatsAppForStudio,
    "sendWhatsAppMessage",
    ()=>sendWhatsAppMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/modules-server.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
;
;
;
;
async function sendWhatsAppMessage({ to, message, studioId }) {
    if (studioId) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guardModule"])('whatsapp');
    let apiKey = '';
    let apiUrl = '';
    let instanceId = '';
    // 1. Se tiver studioId, BUSCA as chaves do estúdio (ou usa fallback da plataforma)
    if (studioId && studioId !== '00000000-0000-0000-0000-000000000000') {
        const { data: studioKeys } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('studio_api_keys').select('*, studio:studios(slug)').eq('studio_id', studioId).eq('service_name', 'whatsapp').maybeSingle();
        if (studioKeys && studioKeys.api_key) {
            apiKey = studioKeys.api_key;
            apiUrl = studioKeys.settings?.api_url || 'http://127.0.0.1:8081';
            instanceId = studioKeys.instance_id || studioKeys.studio?.slug ? `df_${studioKeys.studio.slug}` : 'danceflow';
        } else {
            // Fallback: usar Evolution API da plataforma (Docker único) - instância df_{slug}
            const platformKey = process.env.WHATSAPP_API_KEY;
            const platformUrl = process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081';
            if (!platformKey || !platformUrl) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn(`⚠️ WhatsApp do Estúdio ${studioId} não configurado e plataforma sem WHATSAPP_API_KEY.`);
                return {
                    success: false,
                    error: 'A API de WhatsApp não está configurada.'
                };
            }
            const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('slug').eq('id', studioId).maybeSingle();
            if (!studio?.slug) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn(`⚠️ Estúdio ${studioId} sem slug.`);
                return {
                    success: false,
                    error: 'Estúdio sem identificador.'
                };
            }
            apiKey = platformKey;
            apiUrl = platformUrl;
            instanceId = `df_${studio.slug}`;
        }
    } else {
        // 2. Se NÃO tiver studioId, é uma mensagem de SISTEMA (ex: Código de Verificação)
        // Usamos a API do SuperAdmin (definida no .env)
        apiKey = process.env.WHATSAPP_API_KEY || '';
        apiUrl = process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081';
        instanceId = 'danceflow'; // Instância padrão do sistema
    }
    if (!apiKey || !apiUrl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn('⚠️ WhatsApp API não configurada. Mensagem não enviada:', {
            to,
            message,
            studioId
        });
        return {
            success: false,
            error: 'Configurações de API ausentes'
        };
    }
    try {
        // Evolution API v1.8.2 uses /message/sendText/{instance}
        const sendUrl = `${apiUrl}/message/sendText/${instanceId}`;
        const response = await fetch(sendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': apiKey
            },
            body: JSON.stringify({
                number: formatPhoneNumber(to),
                textMessage: {
                    text: message
                }
            })
        });
        const result = await response.json();
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info('📤 Resposta do envio WhatsApp:', JSON.stringify(result, null, 2));
        // Evolution API retorna status: 201 Created quando envia com sucesso
        if (response.ok || response.status === 201) {
            return {
                success: true,
                data: result
            };
        }
        return {
            success: false,
            error: result
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao enviar mensagem WhatsApp:', error);
        return {
            success: false,
            error
        };
    }
}
async function getWhatsAppConnection(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guardModule"])('whatsapp');
    // 1. Se NÃO tiver studioId ou for o ID do SuperAdmin, usamos a instância global
    if (!studioId || studioId === '00000000-0000-0000-0000-000000000000') {
        const apiKey = process.env.WHATSAPP_API_KEY || '';
        if (!apiKey) {
            return {
                success: false,
                error: 'WHATSAPP_API_KEY não configurada. Defina no .env.'
            };
        }
        const instanceId = 'danceflow';
        const baseUrl = (process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081').split('/message')[0].replace(/\/$/, "");
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`📡 Verificando instância SuperAdmin: ${instanceId} em ${baseUrl}`);
        return await handleWhatsAppInstance(instanceId, apiKey, baseUrl);
    }
    // 2. Buscar chaves específicas do estúdio (ou usar fallback da plataforma)
    const { data: studioKeys } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('studio_api_keys').select('*, studio:studios(slug)').eq('studio_id', studioId).eq('service_name', 'whatsapp').maybeSingle();
    let apiKey;
    let instanceId;
    let baseUrl;
    if (studioKeys && studioKeys.api_key) {
        apiKey = studioKeys.api_key;
        instanceId = studioKeys.instance_id || studioKeys?.studio?.slug ? `df_${studioKeys.studio.slug}` : 'danceflow';
        baseUrl = studioKeys.settings?.api_url || process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081';
        if (instanceId === 'danceflow' && studioId) {
            const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('slug').eq('id', studioId).maybeSingle();
            if (studio?.slug) instanceId = `df_${studio.slug}`;
        }
    } else {
        // Fallback: usar Evolution API da plataforma - cliente só escaneia QR, sem configurar nada
        const platformKey = process.env.WHATSAPP_API_KEY;
        const platformUrl = process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081';
        if (!platformKey || !platformUrl) {
            return {
                success: false,
                error: 'WHATSAPP_API_KEY não configurada. Configure no .env da plataforma.'
            };
        }
        const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('slug').eq('id', studioId).maybeSingle();
        if (!studio?.slug) {
            return {
                success: false,
                error: 'Estúdio sem slug. Contate o suporte.'
            };
        }
        apiKey = platformKey;
        instanceId = `df_${studio.slug}`;
        baseUrl = platformUrl;
    }
    baseUrl = baseUrl.split('/message')[0].replace(/\/$/, "");
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`📡 Verificando instância: ${instanceId} em ${baseUrl}`);
    return await handleWhatsAppInstance(instanceId, apiKey, baseUrl);
}
/**
 * Lógica compartilhada para gerenciar instâncias (verificar, criar e conectar)
 */ async function handleWhatsAppInstance(instanceId, apiKey, baseUrl) {
    try {
        // 1. Tentar ver se a instância existe
        const statusRes = await fetch(`${baseUrl}/instance/connectionState/${instanceId}`, {
            method: 'GET',
            headers: {
                'apikey': apiKey
            },
            cache: 'no-store'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`📊 Status da instância ${instanceId}: ${statusRes.status}`);
        if (statusRes.status === 404) {
            // 2. Se não existe, criar a instância automaticamente
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`🔨 Instância não encontrada. Criando ${instanceId}...`);
            const createRes = await fetch(`${baseUrl}/instance/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': apiKey
                },
                body: JSON.stringify({
                    instanceName: instanceId,
                    token: `${apiKey}_${Date.now()}`,
                    qrcode: true,
                    integration: 'WHATSAPP-BAILEYS'
                })
            });
            if (!createRes.ok) {
                const err = await createRes.text();
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error(`❌ Falha ao criar instância:`, err);
                return {
                    success: false,
                    error: `Falha ao criar instância: ${err}`
                };
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`✅ Instância ${instanceId} criada com sucesso.`);
            // Pequena pausa para a API processar a criação
            await new Promise((resolve)=>setTimeout(resolve, 1000));
        }
        // 3. Buscar o QR Code / Status de Conexão
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`🔗 Solicitando QR Code/Conexão para: ${instanceId}`);
        const response = await fetch(`${baseUrl}/instance/connect/${instanceId}`, {
            method: 'GET',
            headers: {
                'apikey': apiKey
            },
            cache: 'no-store'
        });
        const result = await response.json();
        // 4. Buscar também o estado atual para garantir
        const stateRes = await fetch(`${baseUrl}/instance/connectionState/${instanceId}`, {
            method: 'GET',
            headers: {
                'apikey': apiKey
            },
            cache: 'no-store'
        });
        const stateData = await stateRes.json();
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`📦 Estado da instância ${instanceId}:`, JSON.stringify(stateData));
        // Normalizar o estado (Evolution API pode retornar state em locais diferentes)
        const currentState = stateData.instance?.state || stateData.state || stateData.status || 'disconnected';
        // Se já estiver conectado, não precisamos do QR Code novamente
        if (currentState === 'open') {
            return {
                success: true,
                data: {
                    instance: {
                        instanceName: instanceId,
                        state: 'open'
                    }
                }
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info('📦 Resposta da Evolution API recebida (QR Code):', JSON.stringify(result));
        // Normalizar o QR Code (suporte a v1 e v2 da Evolution API)
        let base64 = result.base64;
        if (!base64 && result.qrcode) {
            if (typeof result.qrcode === 'string') {
                base64 = result.qrcode;
            } else if (result.qrcode.base64) {
                base64 = result.qrcode.base64;
            }
        }
        // Se ainda não tiver base64, verificar se está na propriedade 'url' ou 'code' (algumas versões)
        if (!base64 && result.url) base64 = result.url;
        if (!base64 && result.code) base64 = result.code;
        // Garantir que o base64 comece com o prefixo correto se não tiver
        if (base64 && !base64.startsWith('data:image')) {
            base64 = `data:image/png;base64,${base64}`;
        }
        // Atualizar o objeto result com o base64 normalizado
        if (base64) {
            result.base64 = base64;
        }
        return {
            success: true,
            data: {
                ...result,
                base64: base64,
                instance: {
                    ...stateData.instance,
                    state: currentState
                }
            }
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao buscar conexão WhatsApp:', error);
        return {
            success: false,
            error: error.message || 'Erro ao conectar com o motor de WhatsApp. Certifique-se que o Docker está rodando.'
        };
    }
}
async function logoutWhatsApp(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["guardModule"])('whatsapp');
    // 1. Se NÃO tiver studioId ou for o ID do SuperAdmin, usamos a instância global
    if (!studioId || studioId === '00000000-0000-0000-0000-000000000000') {
        const apiKey = process.env.WHATSAPP_API_KEY || '';
        if (!apiKey) {
            return {
                success: false,
                error: 'WHATSAPP_API_KEY não configurada. Defina no .env.'
            };
        }
        const instanceId = 'danceflow';
        const baseUrl = (process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081').split('/message')[0].replace(/\/$/, "");
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`📡 Desconectando instância SuperAdmin: ${instanceId} em ${baseUrl}`);
        try {
            await fetch(`${baseUrl}/instance/logout/${instanceId}`, {
                method: 'DELETE',
                headers: {
                    'apikey': apiKey
                }
            });
            await fetch(`${baseUrl}/instance/delete/${instanceId}`, {
                method: 'DELETE',
                headers: {
                    'apikey': apiKey
                }
            });
            return {
                success: true
            };
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao desconectar WhatsApp SuperAdmin:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }
    const { data: studioKeys } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('studio_api_keys').select('*, studio:studios(slug)').eq('studio_id', studioId).eq('service_name', 'whatsapp').maybeSingle();
    let apiKey;
    let instanceId;
    let baseUrl;
    if (studioKeys && studioKeys.api_key) {
        apiKey = studioKeys.api_key;
        instanceId = studioKeys.instance_id || studioKeys?.studio?.slug ? `df_${studioKeys.studio.slug}` : 'danceflow';
        baseUrl = studioKeys.settings?.api_url || process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081';
        if (instanceId === 'danceflow' && studioId) {
            const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('slug').eq('id', studioId).maybeSingle();
            if (studio?.slug) instanceId = `df_${studio.slug}`;
        }
    } else {
        const platformKey = process.env.WHATSAPP_API_KEY;
        const platformUrl = process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081';
        if (!platformKey || !platformUrl) return {
            success: false,
            error: 'Configurações não encontradas.'
        };
        const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('slug').eq('id', studioId).maybeSingle();
        if (!studio?.slug) return {
            success: false,
            error: 'Estúdio sem slug.'
        };
        apiKey = platformKey;
        instanceId = `df_${studio.slug}`;
        baseUrl = platformUrl;
    }
    baseUrl = baseUrl.split('/message')[0];
    try {
        // 1. Logout da instância (desconecta o celular)
        await fetch(`${baseUrl}/instance/logout/${instanceId}`, {
            method: 'DELETE',
            headers: {
                'apikey': apiKey
            }
        });
        // 2. Deletar a instância (opcional, mas bom para reset completo)
        await fetch(`${baseUrl}/instance/delete/${instanceId}`, {
            method: 'DELETE',
            headers: {
                'apikey': apiKey
            }
        });
        return {
            success: true
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao desconectar WhatsApp:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function provisionWhatsAppForStudio(studioId, slug) {
    const apiKey = process.env.WHATSAPP_API_KEY;
    const apiUrl = process.env.WHATSAPP_API_URL || 'http://127.0.0.1:8081';
    if (!apiKey || !apiUrl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info('⏭️ WhatsApp provisionamento ignorado: WHATSAPP_API_KEY/URL não configuradas.');
        return;
    }
    try {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studio_api_keys').upsert({
            studio_id: studioId,
            service_name: 'whatsapp',
            api_key: apiKey,
            instance_id: `df_${slug}`,
            settings: {
                api_url: apiUrl
            },
            status: 'active',
            updated_at: new Date().toISOString()
        }, {
            onConflict: 'studio_id,service_name'
        });
        if (error) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`✅ WhatsApp provisionado para estúdio ${studioId} (df_${slug})`);
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn('Erro ao provisionar WhatsApp:', e);
    }
}
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 11) {
        return `55${cleaned}`;
    }
    return cleaned;
}
async function notifyLowCredits(studentId, studioId, remainingCredits) {
    if (remainingCredits > 2 || remainingCredits <= 0) return;
    try {
        const { data: student } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('students').select('name, phone').eq('id', studentId).single();
        if (!student || !student.phone) return;
        const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('studios').select('name').eq('id', studioId).single();
        const studioName = studio?.name || "seu estúdio de dança";
        const message = remainingCredits === 2 ? `Olá *${student.name}*! 👋 Notamos que você tem apenas *2 créditos* de aula restantes na *${studioName}*. Que tal garantir seu próximo pacote para não interromper sua evolução? 💃✨` : `Olá *${student.name}*! 👋 Você tem apenas *1 crédito* de aula restante na *${studioName}*. Garanta seu novo pacote agora para continuar dançando conosco! 💃🚀`;
        await sendWhatsAppMessage({
            to: student.phone,
            message,
            studioId
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`📢 Notificação de crédito baixo enviada para ${student.name} (${remainingCredits} restates)`);
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao enviar notificação de crédito baixo:', error);
    }
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/apps/web/lib/auth/require-studio-access.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioAccessError",
    ()=>StudioAccessError,
    "allowInternalAiCall",
    ()=>allowInternalAiCall,
    "checkStudioAccess",
    ()=>checkStudioAccess,
    "repairStudentLink",
    ()=>repairStudentLink,
    "requireStudioAccess",
    ()=>requireStudioAccess,
    "requireStudioAccessWithValidation",
    ()=>requireStudioAccessWithValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.8.0_@supabase+supabase-js@2.99.3/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.8.0_@supabase+supabase-js@2.99.3/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/admin-logs.ts [app-route] (ecmascript)");
;
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU");
class StudioAccessError extends Error {
    status;
    constructor(message, status){
        super(message), this.status = status;
        this.name = 'StudioAccessError';
    }
}
async function requireStudioAccess(request, studioId) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
        cookies: {
            get: (name)=>request.cookies.get(name)?.value,
            set: ()=>{},
            remove: ()=>{}
        }
    });
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        throw new StudioAccessError('Não autenticado', 401);
    }
    // Otimização: RPC de 1 query (migration 118)
    const { data: rpcRows, error: rpcErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].rpc('get_user_studio_access', {
        p_user_id: user.id,
        p_studio_id: studioId
    }).single();
    if (!rpcErr && rpcRows) {
        const row = rpcRows;
        if (!row.authorized) {
            if (row.reason === 'studio_not_found') throw new StudioAccessError('Studio não encontrado', 404);
            if (row.reason === 'studio_inactive') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAdmin"])('warning', 'auth/studio-access', `Acesso bloqueado: studio ${studioId} inativo. User: ${user.id}`, {
                    studio: studioId,
                    metadata: {
                        userId: user.id,
                        reason: 'studio_inactive'
                    }
                });
                throw new StudioAccessError('Sua assinatura expirou ou o estúdio foi desativado.', 402);
            }
            if (row.reason === 'trial_expired') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAdmin"])('warning', 'auth/studio-access', `Acesso bloqueado: trial expirado para studio ${studioId}. User: ${user.id}`, {
                    studio: studioId,
                    metadata: {
                        userId: user.id,
                        reason: 'trial_expired'
                    }
                });
                throw new StudioAccessError('Seu período de teste expirou. Assine um plano para continuar.', 402);
            }
            // no_access: verifica metadata mas NÃO escreve aqui (sem side-effects no hot path de auth)
            // Para novos alunos com vínculo pendente, use repairStudentLink() explicitamente no fluxo de registro.
            if (hasStudentMetadata(user, studioId)) {
                return {
                    userId: user.id,
                    role: 'student'
                };
            }
            throw new StudioAccessError('Acesso negado a este studio', 403);
        }
        return {
            userId: user.id,
            role: row.role
        };
    }
    // Fallback: RPC não existe (migration 118 não aplicada) — fluxo N+1 original
    return requireStudioAccessFallback(user, studioId);
}
/**
 * Verifica (read-only) se o usuário tem metadata de student para o studio.
 * Não escreve no banco — sem side-effects no hot path de autenticação.
 */ function hasStudentMetadata(user, studioId) {
    const metaStudioId = user.user_metadata?.studio_id;
    const metaRole = user.user_metadata?.role || user.app_metadata?.role;
    return metaStudioId === studioId && (!metaRole || metaRole === 'student');
}
async function repairStudentLink(user, studioId) {
    if (!hasStudentMetadata(user, studioId)) return false;
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').upsert({
        id: user.id,
        studio_id: studioId,
        name: user.user_metadata?.name || user.email?.split('@')[0] || 'Aluno',
        email: user.email || '',
        phone: user.user_metadata?.phone || null,
        status: 'active'
    }, {
        onConflict: 'id'
    });
    return !error;
}
/** Fluxo N+1 original — usado como fallback quando migration 118 não foi aplicada. */ async function requireStudioAccessFallback(user, studioId) {
    const role = user.user_metadata?.role || user.app_metadata?.role || '';
    if (role === 'super_admin') return {
        userId: user.id,
        role
    };
    const { data: studioRecord } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('id, owner_id, status, subscription_status, trial_ends_at').eq('id', studioId).maybeSingle();
    if (!studioRecord) throw new StudioAccessError('Studio não encontrado', 404);
    if (studioRecord.status === 'inactive') {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAdmin"])('warning', 'auth/studio-access', `Acesso bloqueado: studio ${studioId} inativo. User: ${user.id}`, {
            studio: studioId,
            metadata: {
                userId: user.id,
                reason: 'studio_inactive'
            }
        });
        throw new StudioAccessError('Sua assinatura expirou ou o estúdio foi desativado.', 402);
    }
    if (studioRecord.subscription_status === 'trialing' && studioRecord.trial_ends_at) {
        const trialEnd = new Date(studioRecord.trial_ends_at);
        if (trialEnd < new Date()) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAdmin"])('warning', 'auth/studio-access', `Acesso bloqueado: trial expirado para studio ${studioId}. User: ${user.id}`, {
                studio: studioId,
                metadata: {
                    userId: user.id,
                    reason: 'trial_expired',
                    trialEnd: studioRecord.trial_ends_at
                }
            });
            throw new StudioAccessError('Seu período de teste expirou. Assine um plano para continuar.', 402);
        }
    }
    if (studioRecord.owner_id === user.id) return {
        userId: user.id,
        role
    };
    const { data: ui } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users_internal').select('studio_id, role').eq('id', user.id).eq('studio_id', studioId).maybeSingle();
    if (ui) return {
        userId: user.id,
        role: ui.role || role
    };
    const { data: prof } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').select('studio_id, professional_type').eq('user_id', user.id).eq('studio_id', studioId).eq('status', 'active').maybeSingle();
    if (prof) return {
        userId: user.id,
        role
    };
    const { data: student } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').select('studio_id').eq('id', user.id).eq('studio_id', studioId).maybeSingle();
    if (student) return {
        userId: user.id,
        role
    };
    if (hasStudentMetadata(user, studioId)) {
        return {
            userId: user.id,
            role: 'student'
        };
    }
    throw new StudioAccessError('Acesso negado a este studio', 403);
}
function allowInternalAiCall(request) {
    const key = request.headers.get('x-internal-ai-key');
    const secret = process.env.INTERNAL_AI_SECRET;
    if (!secret) {
        console.warn('[allowInternalAiCall] INTERNAL_AI_SECRET não configurado — chamadas internas de AI bloqueadas');
        return false;
    }
    if (!key) return false;
    const a = Buffer.from(key, 'utf8');
    const b = Buffer.from(secret, 'utf8');
    return a.length === b.length && __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)").timingSafeEqual(a, b);
}
async function checkStudioAccess(request, studioId) {
    if (!studioId) {
        return {
            authorized: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'studioId é obrigatório'
            }, {
                status: 400
            })
        };
    }
    try {
        const { userId, role } = await requireStudioAccess(request, studioId);
        return {
            authorized: true,
            userId,
            role
        };
    } catch (err) {
        if (err instanceof StudioAccessError) {
            return {
                authorized: false,
                response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: err.message
                }, {
                    status: err.status
                })
            };
        }
        return {
            authorized: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Erro interno de autorização'
            }, {
                status: 500
            })
        };
    }
}
async function requireStudioAccessWithValidation(request, studioId, options = {}) {
    const basic = await requireStudioAccess(request, studioId);
    // Se for Super Admin e operação for crítica, exigir confirmação explícita
    if (options.requireExplicit && basic.role === 'super_admin') {
        const confirmation = request.headers.get('x-admin-confirmation');
        const operation = options.operationType || 'read';
        if (!confirmation) {
            throw new StudioAccessError(`Operação ${operation} crítica requer confirmação explícita. Header: x-admin-confirmation`, 428);
        }
        // Log adicional para auditoria de operações críticas
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logAdmin"])('warning', 'auth/critical-operation', `Super Admin realizando operação crítica em studio ${studioId}`, {
            studio: studioId,
            metadata: {
                userId: basic.userId,
                operation,
                confirmation: confirmation.substring(0, 8) + '***'
            }
        });
    }
    return basic;
}
}),
"[project]/apps/web/lib/auth/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/require-studio-access.ts [app-route] (ecmascript)");
;
}),
"[project]/apps/web/app/api/whatsapp/send/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/whatsapp.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/require-studio-access.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const { to, message, studioId } = await request.json();
        if (!to || !message || !studioId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Destinatário, mensagem e studioId são obrigatórios'
            }, {
                status: 400
            });
        }
        const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkStudioAccess"])(request, studioId);
        if (!access.authorized) return access.response;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendWhatsAppMessage"])({
            to,
            message,
            studioId
        });
        if (result.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                data: result.data
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: result.error || 'Erro ao enviar via Evolution API'
            }, {
                status: 500
            });
        }
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# debugId=4aa88585-7120-5940-4439-e0a3d933b4ca
//# sourceMappingURL=%5Broot-of-the-server%5D__ada7866c._.js.map