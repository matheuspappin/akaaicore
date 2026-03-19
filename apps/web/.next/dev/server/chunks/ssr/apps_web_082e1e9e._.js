;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="33ffd54a-5fbf-1391-1c61-2dee442528d2")}catch(e){}}();
module.exports = [
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
"[project]/apps/web/lib/supabase/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
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
    _supabase = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, key);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn('Erro ao buscar students:', error.message);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn('Erro ao buscar teachers:', error.message);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn('Erro ao buscar leads:', error.message);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn('Erro ao buscar produtos:', error.message);
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
"[project]/apps/web/lib/server-utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminClient",
    ()=>getAdminClient,
    "getAuthenticatedClient",
    ()=>getAuthenticatedClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
;
;
;
async function getAuthenticatedClient() {
    try {
        const { createClient: createServerSupabase } = await __turbopack_context__.A("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript, async loader)");
        const ssrClient = await createServerSupabase();
        const { data: { user }, error } = await ssrClient.auth.getUser();
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('getAuthenticatedClient: auth error', error.message);
            return null;
        }
        if (user) return ssrClient;
        // Fallback: tokens em cookies legados (sb-access-token, sb-auth-token)
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const token = cookieStore.get('sb-access-token')?.value || cookieStore.get('sb-auth-token')?.value || cookieStore.getAll().find((c)=>c.name.includes('auth-token') && c.value.length > 20)?.value;
        if (token) {
            const manualClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU"), {
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
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('Manual token getUser failed');
            }
        }
        return null;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao criar cliente autenticado:', error);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn('⚠️ SUPABASE_SERVICE_ROLE_KEY não encontrada no ambiente');
        return null;
    }
    try {
        const adminClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co"), serviceKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false
            }
        });
        cachedAdminClient = adminClient;
        return adminClient;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao criar cliente admin:', error);
        return null;
    }
}
}),
"[project]/apps/web/lib/sanitize-logs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilitários para evitar vazamento de dados sensíveis em logs.
 * Use em logger.info/warn em vez de expor emails, IDs ou tokens.
 */ /**
 * Mascara e-mail para log: joao@email.com → j***@***l.com
 */ __turbopack_context__.s([
    "SENSITIVE_CODE",
    ()=>SENSITIVE_CODE,
    "maskEmail",
    ()=>maskEmail,
    "maskId",
    ()=>maskId
]);
function maskEmail(email) {
    if (!email || typeof email !== 'string') return '[sem email]';
    const [local, domain] = email.split('@');
    if (!domain) return '[email invalido]';
    const maskedLocal = local.length <= 2 ? '***' : `${local[0]}***`;
    const maskedDomain = domain.length <= 2 ? '***' : `***${domain.slice(-4)}`;
    return `${maskedLocal}@${maskedDomain}`;
}
function maskId(id) {
    if (!id || typeof id !== 'string') return '[id]';
    if (id.length <= 8) return '***';
    return `${id.slice(0, 4)}...${id.slice(-4)}`;
}
const SENSITIVE_CODE = '[codigo-omitido]';
}),
"[project]/apps/web/lib/supabase-admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
// Placeholders para evitar "supabaseKey is required" quando env ainda não carregou
const _url = supabaseUrl || 'https://placeholder.supabase.co';
const _key = supabaseServiceRoleKey || 'placeholder-key';
if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn('⚠️ Supabase Admin: URL ou Service Role Key não configurada. Configure .env.local e reinicie o servidor.');
}
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(_url, _key, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
}),
"[project]/apps/web/lib/admin-logs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logAdmin",
    ()=>logAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-rsc] (ecmascript)");
;
async function logAdmin(type, source, message, opts) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('admin_system_logs').insert({
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
"[project]/apps/web/lib/actions/super-admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40326e7b4237be2e4c05c2be81110d3ce092e81a29":"checkSuperAdminDetailed","40946ae18354ff50f5e2a1be48aa44bbfa95d9c471":"getGlobalSystemStats","603dade155aabcc4760e1ce9c41b19c23e3c5d3e07":"getOrCreateStudioInvite","60963e2fbcb190efcc176cdce5be440699b7b539a0":"saveSystemPlan","60b86a7e7a20cbe3d22815ec80f1d53f3854561426":"deletePartner","60d757fa814f4ba3d71e330842b1bbafe042780e30":"deleteTenant","60d86907e45661f0b46a0babd46a8fa791f6191306":"deleteStudio","60f10e23c67b0bc35b4e0932d8395bbba63cbf1f79":"deleteSystemPlan","70173feef6f77ad5096e247946519ca7b7e3eca9ee":"updateTenantSettings","7023d6cad867de4ac7c7728323b015287a615627ae":"getTenantsList","7054215b14b279c12cae05862327ec04d5f004761c":"updatePartner","707c92b09d5784032b854b9b302e9b5b8a9dad1c02":"updateTenantModules","70acc0770a04eafbcb2b8dfdc21d578107972639bc":"getPartnersList"},"",""] */ __turbopack_context__.s([
    "checkSuperAdminDetailed",
    ()=>checkSuperAdminDetailed,
    "deletePartner",
    ()=>deletePartner,
    "deleteStudio",
    ()=>deleteStudio,
    "deleteSystemPlan",
    ()=>deleteSystemPlan,
    "deleteTenant",
    ()=>deleteTenant,
    "getGlobalSystemStats",
    ()=>getGlobalSystemStats,
    "getOrCreateStudioInvite",
    ()=>getOrCreateStudioInvite,
    "getPartnersList",
    ()=>getPartnersList,
    "getTenantsList",
    ()=>getTenantsList,
    "saveSystemPlan",
    ()=>saveSystemPlan,
    "updatePartner",
    ()=>updatePartner,
    "updateTenantModules",
    ()=>updateTenantModules,
    "updateTenantSettings",
    ()=>updateTenantSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/server-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sanitize$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/sanitize-logs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/admin-logs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function checkSuperAdminDetailed(accessToken) {
    try {
        let user = null;
        const authClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticatedClient"])();
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAdminClient"])();
        // Tentativa 1: SSR
        if (authClient) {
            const { data: { user: authUser } } = await authClient.auth.getUser();
            if (authUser) user = authUser;
        }
        // Tentativa 2: Token explícito
        if (!user && accessToken && adminClient) {
            const { data: { user: tokenUser } } = await adminClient.auth.getUser(accessToken);
            if (tokenUser) user = tokenUser;
        }
        // Tentativa 3: Cookie Fallback
        if (!user && adminClient) {
            const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
            const token = cookieStore.get('sb-auth-token')?.value || cookieStore.get('sb-access-token')?.value;
            if (token) {
                const { data: { user: tokenUser } } = await adminClient.auth.getUser(token);
                if (tokenUser) user = tokenUser;
            }
        }
        if (!user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ checkSuperAdminDetailed: Usuário não identificado');
            return {
                isAdmin: false,
                user: null,
                authClient,
                adminClient
            };
        }
        // Debug
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('🔍 checkSuperAdminDetailed: Verificando usuário', {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sanitize$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["maskId"])(user.id)
        });
        // 1. Verifica metadata (cache rápido)
        const role = user.user_metadata?.role;
        if (role === 'super_admin') {
            return {
                isAdmin: true,
                user,
                authClient,
                adminClient
            };
        }
        // 2. Verifica na tabela users_internal (fonte da verdade segura)
        const dbReader = adminClient || authClient;
        if (!dbReader) return {
            isAdmin: false,
            user,
            authClient,
            adminClient
        };
        const { data: profile } = await dbReader.from('users_internal').select('role').eq('id', user.id).maybeSingle();
        if (profile?.role === 'super_admin') {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].info(`✅ checkSuperAdminDetailed: Acesso concedido via DB (users_internal)`);
            return {
                isAdmin: true,
                user,
                authClient,
                adminClient
            };
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn(`⛔ checkSuperAdminDetailed: Acesso NEGADO. Role DB: ${profile?.role}`);
        return {
            isAdmin: false,
            user,
            authClient,
            adminClient
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ checkSuperAdminDetailed: Erro crítico na verificação', error);
        return {
            isAdmin: false,
            user: null,
            authClient: null,
            adminClient: null
        };
    }
}
/**
 * Versão simplificada para manter compatibilidade
 */ async function checkSuperAdmin(accessToken) {
    const result = await checkSuperAdminDetailed(accessToken);
    return result.isAdmin;
}
async function getGlobalSystemStats(accessToken) {
    const { isAdmin, authClient, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        throw new Error("Unauthorized Access");
    }
    const client = adminClient || authClient || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"];
    // 1. Total de Tenants e Status
    const { count: totalTenants } = await client.from('studios').select('*', {
        count: 'exact',
        head: true
    });
    // 1.1 Total de Afiliados
    const { count: totalPartners } = await client.from('partners').select('*', {
        count: 'exact',
        head: true
    });
    // 2. Tenants por Nicho (Agregação)
    const { data: settings } = await client.from('organization_settings').select('niche, enabled_modules');
    const nicheDistribution = {};
    const moduleAdoption = {};
    settings?.forEach((setting)=>{
        // Nichos
        const niche = setting.niche || 'dance' // default
        ;
        nicheDistribution[niche] = (nicheDistribution[niche] || 0) + 1;
        // Módulos
        if (setting.enabled_modules) {
            Object.entries(setting.enabled_modules).forEach(([mod, enabled])=>{
                if (enabled) {
                    moduleAdoption[mod] = (moduleAdoption[mod] || 0) + 1;
                }
            });
        }
    });
    // Formatando para Recharts
    const nicheChartData = Object.entries(nicheDistribution).map(([name, value])=>({
            name,
            value
        }));
    const moduleChartData = Object.entries(moduleAdoption).map(([name, value])=>({
            name,
            value
        })).sort((a, b)=>b.value - a.value) // Mais usados primeiro
    ;
    // 3. Receita Recorrente (Estimativa baseada em planos ativos)
    const { data: activeStudios, error } = await client.from('studios').select('plan').eq('status', 'active');
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error("Erro ao buscar estúdios ativos para MRR:", error);
        throw new Error("Não foi possível buscar os dados de MRR.");
    }
    // Buscar preços dos planos para calcular
    const { data: plans } = await client.from('system_plans').select('id, price');
    const plansMap = new Map(plans?.map((p)=>[
            p.id,
            p.price
        ]) || []);
    const mrr = activeStudios.reduce((total, studio)=>{
        const price = Number(plansMap.get(studio.plan) ?? 0);
        return total + price;
    }, 0);
    // 4. System Health Check
    let systemHealth = {
        status: 'operational',
        uptime: '99.9',
        database: 'ok',
        storage: 'ok',
        auth: 'ok',
        message: 'Todos os serviços rodando conforme esperado.'
    };
    try {
        const healthStart = Date.now();
        const { error: dbError } = await client.from('admin_system_logs').select('id').limit(1);
        if (dbError) {
            systemHealth = {
                status: 'degraded',
                uptime: '99.5',
                database: 'error',
                storage: 'ok',
                auth: 'ok',
                message: 'Problemas de conexão com o banco de dados.'
            };
        }
    } catch (error) {
        systemHealth = {
            status: 'error',
            uptime: '98.0',
            database: 'error',
            storage: 'error',
            auth: 'error',
            message: 'Múltiplos serviços com problemas.'
        };
    }
    return {
        overview: {
            totalTenants: totalTenants || 0,
            activeTenants: totalTenants || 0,
            totalPartners: totalPartners || 0,
            mrr: mrr,
            churnRate: 0 // Implementar lógica de churn
        },
        nicheData: nicheChartData,
        moduleData: moduleChartData,
        systemHealth
    };
}
async function getTenantsList(page = 1, limit = 10, accessToken) {
    const { isAdmin, authClient, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ getTenantsList: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    const client = adminClient || authClient || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"];
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    const { data, count, error } = await client.from('studios').select(`
      id, 
      name, 
      created_at, 
      slug,
      plan,
      owner_id,
      organization_settings ( niche, vocabulary, enabled_modules ),
      studio_settings ( setting_key, setting_value ),
      users_internal ( id, email, name, role )
    `, {
        count: 'exact'
    }).range(from, to).order('created_at', {
        ascending: false
    });
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ getTenantsList: Erro ao buscar dados', error);
        throw error;
    }
    return {
        tenants: data,
        total: count
    };
}
async function deleteTenant(tenantId, accessToken) {
    const { isAdmin, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ deleteTenant: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    if (!adminClient) {
        throw new Error("Could not create admin client.");
    }
    // A política de RLS CASCADE deve cuidar de todas as tabelas filhas
    const { error } = await adminClient.from('studios').delete().eq('id', tenantId);
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ deleteTenant: Erro ao deletar tenant', error);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAdmin"])('error', 'super-admin', `Falha ao deletar tenant ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sanitize$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["maskId"])(tenantId)}`, {
            metadata: {
                tenantId,
                error: error.message
            }
        });
        throw error;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAdmin"])('warning', 'super-admin', `Tenant ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sanitize$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["maskId"])(tenantId)} deletado permanentemente`, {
        metadata: {
            tenantId
        }
    });
    return {
        success: true
    };
}
async function updateTenantSettings(tenantId, data, accessToken) {
    const { isAdmin, user, authClient, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) throw new Error("Unauthorized");
    const client = adminClient || authClient || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"];
    const updateData = {};
    if (data.modules) updateData.enabled_modules = data.modules;
    if (data.niche) updateData.niche = data.niche;
    if (data.vocabulary) updateData.vocabulary = data.vocabulary;
    const { error } = await client.from('organization_settings').update(updateData).eq('studio_id', tenantId);
    if (error) throw error;
    const changes = Object.keys(updateData).join(', ');
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAdmin"])('info', 'super-admin/policy', `Policy alterada para tenant ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sanitize$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["maskId"])(tenantId)}: ${changes}`, {
        studio: tenantId,
        metadata: {
            tenantId,
            adminUserId: user?.id,
            changes: updateData
        }
    });
    return {
        success: true
    };
}
async function updateTenantModules(tenantId, modules, accessToken) {
    return updateTenantSettings(tenantId, {
        modules
    }, accessToken);
}
async function getOrCreateStudioInvite(studioId, accessToken) {
    const { isAdmin, user, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ getOrCreateStudioInvite: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    if (!adminClient) {
        throw new Error("Could not create admin client.");
    }
    // 1. Verificar se existe um convite de ecossistema ativo e não expirado
    const now = new Date().toISOString();
    let { data: invite, error: fetchError } = await adminClient.from('studio_invites').select('token').eq('studio_id', studioId).eq('invite_type', 'ecosystem').is('used_at', null).gt('expires_at', now).order('created_at', {
        ascending: false
    }).limit(1).maybeSingle();
    if (fetchError) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao buscar convite existente:', fetchError);
        throw fetchError;
    }
    // 2. Se existir, retorna o token
    if (invite) {
        return {
            token: invite.token
        };
    }
    // 3. Se não existir, cria um novo
    const created_by = user?.id;
    if (!created_by) {
        throw new Error("Não foi possível identificar o usuário para criar o convite.");
    }
    const newToken = crypto.randomUUID();
    const expires_at = new Date();
    expires_at.setDate(expires_at.getDate() + 365); // Válido por 1 ano
    const { data: newInvite, error: insertError } = await adminClient.from('studio_invites').insert({
        studio_id: studioId,
        token: newToken,
        created_by: created_by,
        invite_type: 'ecosystem',
        metadata: {
            invite_type: 'ecosystem'
        },
        expires_at: expires_at.toISOString()
    }).select('token').single();
    if (insertError) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao criar novo convite:', insertError);
        throw insertError;
    }
    return {
        token: newInvite.token
    };
}
async function deleteStudio(studioId, accessToken) {
    const { isAdmin, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ deleteStudio: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    if (!adminClient) {
        throw new Error("Could not create admin client.");
    }
    // Excluir estúdio (Cascade cuidará do resto)
    const { error } = await adminClient.from('studios').delete().eq('id', studioId);
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao deletar estúdio:', error);
        throw error;
    }
    return {
        success: true
    };
}
async function deletePartner(partnerId, accessToken) {
    const { isAdmin, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ deletePartner: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    if (!adminClient) {
        throw new Error("Could not create admin client.");
    }
    // Busca o user_id do parceiro antes de excluir para poder excluir o usuário do Auth também
    const { data: partner } = await adminClient.from('partners').select('user_id').eq('id', partnerId).maybeSingle();
    // Excluir parceiro (Cascade pode não cuidar do Auth User)
    const { error } = await adminClient.from('partners').delete().eq('id', partnerId);
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ deletePartner: Erro ao deletar parceiro', error);
        throw error;
    }
    // Se tiver user_id, exclui também do Supabase Auth
    if (partner?.user_id) {
        const { error: authError } = await adminClient.auth.admin.deleteUser(partner.user_id);
        if (authError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn('⚠️ deletePartner: Parceiro excluído do DB, mas falha ao excluir do Auth:', authError.message);
        }
    }
    return {
        success: true
    };
}
async function getPartnersList(page = 1, limit = 10, accessToken) {
    const { isAdmin, authClient, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ getPartnersList: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    const client = adminClient || authClient || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"];
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    const { data, count, error } = await client.from('partners').select('*', {
        count: 'exact'
    }).range(from, to).order('created_at', {
        ascending: false
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('🔍 getPartnersList result:', {
        data_length: data?.length,
        count,
        error
    });
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ getPartnersList: Erro ao buscar parceiros', error);
        throw error;
    }
    return {
        partners: data,
        total: count
    };
}
async function updatePartner(partnerId, data, accessToken) {
    const { isAdmin, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ updatePartner: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    if (!adminClient) {
        throw new Error("Could not create admin client.");
    }
    // Verifica slug se foi alterado
    if (data.slug) {
        const { data: existing } = await adminClient.from('partners').select('id').eq('slug', data.slug).neq('id', partnerId).maybeSingle();
        if (existing) {
            throw new Error("Este slug já está em uso por outro afiliado.");
        }
    }
    const { error } = await adminClient.from('partners').update(data).eq('id', partnerId);
    if (error) throw error;
    return {
        success: true
    };
}
async function saveSystemPlan(planData, accessToken) {
    const { isAdmin, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ saveSystemPlan: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    if (!adminClient) {
        throw new Error("Could not create admin client.");
    }
    const { error } = await adminClient.from('system_plans').upsert(planData);
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ saveSystemPlan: Erro ao salvar plano', error);
        throw error;
    }
    return {
        success: true
    };
}
async function deleteSystemPlan(planId, accessToken) {
    const { isAdmin, adminClient } = await checkSuperAdminDetailed(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ deleteSystemPlan: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    if (!adminClient) {
        throw new Error("Could not create admin client.");
    }
    const { error } = await adminClient.from('system_plans').delete().eq('id', planId);
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ deleteSystemPlan: Erro ao excluir plano', error);
        throw error;
    }
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    checkSuperAdminDetailed,
    getGlobalSystemStats,
    getTenantsList,
    deleteTenant,
    updateTenantSettings,
    updateTenantModules,
    getOrCreateStudioInvite,
    deleteStudio,
    deletePartner,
    getPartnersList,
    updatePartner,
    saveSystemPlan,
    deleteSystemPlan
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkSuperAdminDetailed, "40326e7b4237be2e4c05c2be81110d3ce092e81a29", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGlobalSystemStats, "40946ae18354ff50f5e2a1be48aa44bbfa95d9c471", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTenantsList, "7023d6cad867de4ac7c7728323b015287a615627ae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTenant, "60d757fa814f4ba3d71e330842b1bbafe042780e30", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTenantSettings, "70173feef6f77ad5096e247946519ca7b7e3eca9ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTenantModules, "707c92b09d5784032b854b9b302e9b5b8a9dad1c02", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrCreateStudioInvite, "603dade155aabcc4760e1ce9c41b19c23e3c5d3e07", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteStudio, "60d86907e45661f0b46a0babd46a8fa791f6191306", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deletePartner, "60b86a7e7a20cbe3d22815ec80f1d53f3854561426", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPartnersList, "70acc0770a04eafbcb2b8dfdc21d578107972639bc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updatePartner, "7054215b14b279c12cae05862327ec04d5f004761c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveSystemPlan, "60963e2fbcb190efcc176cdce5be440699b7b539a0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSystemPlan, "60f10e23c67b0bc35b4e0932d8395bbba63cbf1f79", null);
}),
"[project]/apps/web/lib/actions/modules.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0061464f4e546b0c7c3bb01872bce47a82211e3e66":"getSystemModules","707932196243a79076e02e6d6ebe461187ecb445e4":"updateSystemModule"},"",""] */ __turbopack_context__.s([
    "getSystemModules",
    ()=>getSystemModules,
    "updateSystemModule",
    ()=>updateSystemModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$super$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/super-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function getSystemModules() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('system_modules').select('*').order('price', {
        ascending: true
    });
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ Erro ao buscar módulos do sistema:', error);
        return [];
    }
    return data;
}
async function updateSystemModule(moduleId, data, accessToken) {
    const { isAdmin, adminClient } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$super$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSuperAdminDetailed"])(accessToken);
    if (!isAdmin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ updateSystemModule: Acesso negado (não é Super Admin)');
        throw new Error("Unauthorized");
    }
    if (!adminClient) {
        throw new Error("Could not create admin client.");
    }
    const { error } = await adminClient.from('system_modules').update(data).eq('id', moduleId);
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('❌ updateSystemModule: Erro ao atualizar módulo', error);
        throw error;
    }
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSystemModules,
    updateSystemModule
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSystemModules, "0061464f4e546b0c7c3bb01872bce47a82211e3e66", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSystemModule, "707932196243a79076e02e6d6ebe461187ecb445e4", null);
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/modules.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/modules.ts [app-rsc] (ecmascript)");
;
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/modules.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0061464f4e546b0c7c3bb01872bce47a82211e3e66",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSystemModules"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$solutions$2f$estudio$2d$de$2d$danca$2f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/register/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/lib/actions/modules.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/modules.ts [app-rsc] (ecmascript)");
}),
];

//# debugId=33ffd54a-5fbf-1391-1c61-2dee442528d2
//# sourceMappingURL=apps_web_082e1e9e._.js.map