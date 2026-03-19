;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="338026fe-cb26-2582-ee18-3c4d099393b6")}catch(e){}}();
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
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
    _supabase = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, key);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
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
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
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
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
                response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: err.message
                }, {
                    status: err.status
                })
            };
        }
        return {
            authorized: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
"[project]/apps/web/app/api/notifications/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/require-studio-access.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
;
;
;
;
async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        const studioId = searchParams.get('studioId');
        if (!userId || !studioId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'userId e studioId são obrigatórios'
            }, {
                status: 400
            });
        }
        const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkStudioAccess"])(req, studioId);
        if (!access.authorized) return access.response;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('notifications').select('*').eq('user_id', userId).eq('studio_id', studioId).order('created_at', {
            ascending: false
        }).limit(20);
        if (error) throw error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('💥 Erro ao buscar notificações:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const { notificationId, read } = await req.json();
        if (!notificationId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'notificationId é obrigatório'
            }, {
                status: 400
            });
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('notifications').update({
            read
        }).eq('id', notificationId);
        if (error) throw error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('💥 Erro ao atualizar notificação:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# debugId=338026fe-cb26-2582-ee18-3c4d099393b6
//# sourceMappingURL=%5Broot-of-the-server%5D__e54e35e4._.js.map