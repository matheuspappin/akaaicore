;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="26432768-4356-a593-10cb-8cb0f93c29e0")}catch(e){}}();
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
"[project]/apps/web/config/modules.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/web/lib/modules-server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServerOrganizationConfig",
    ()=>getServerOrganizationConfig,
    "guardModule",
    ()=>guardModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/server-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/modules.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/admin-logs.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const getServerOrganizationConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticatedClient"])();
    if (!supabase) return null;
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
        // Only log if it's an error, otherwise silent (user not logged in)
        if (userError) __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('getServerOrganizationConfig: Auth error', userError);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn(`getServerOrganizationConfig: User ${user.id} has no studio_id linked`);
        return null;
    }
    // Verificar se o studio está ativo (enforcement de subscription/lifecycle)
    const { data: studio } = await supabase.from('studios').select('status, subscription_status, trial_ends_at').eq('id', studioId).maybeSingle();
    if (!studio || studio.status === 'inactive') {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn(`getServerOrganizationConfig: Studio ${studioId} está inativo. Acesso bloqueado para user ${user.id}`);
        return null;
    }
    // Verificar trial expirado (proteção adicional caso o CRON não tenha rodado ainda)
    if (studio.subscription_status === 'trialing' && studio.trial_ends_at) {
        const trialEnd = new Date(studio.trial_ends_at);
        if (trialEnd < new Date()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn(`getServerOrganizationConfig: Trial expirado para studio ${studioId}. Acesso bloqueado para user ${user.id}`);
            return null;
        }
    }
    const { data: settings } = await supabase.from('organization_settings').select('*').eq('studio_id', studioId).maybeSingle();
    return {
        studioId: studioId,
        user,
        niche: settings?.niche || 'dance',
        vocabulary: settings?.vocabulary || null,
        enabledModules: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeModules"])(settings?.enabled_modules)
    };
});
/**
 * Carrega config usando studioId fornecido, após validar que o usuário tem acesso.
 * Usado quando o estúdio vem do cliente (ex: localStorage em verticalizações).
 * Usa supabaseAdmin para as queries de permissão (bypass RLS) - igual ao checkStudioAccess.
 */ async function getConfigForStudio(studioId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticatedClient"])();
    if (!supabase) return null;
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return null;
    // Super admin tem acesso global (igual requireStudioAccess)
    const role = user.user_metadata?.role || user.app_metadata?.role || '';
    if (role === 'super_admin') {
        const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('status, subscription_status, trial_ends_at').eq('id', studioId).maybeSingle();
        if (!studio || studio.status === 'inactive') return null;
        if (studio.subscription_status === 'trialing' && studio.trial_ends_at && new Date(studio.trial_ends_at) < new Date()) return null;
        const { data: settings } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('organization_settings').select('*').eq('studio_id', studioId).maybeSingle();
        const rawModules = settings?.enabled_modules;
        const enabledModules = rawModules && Object.keys(rawModules).length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeModules"])(rawModules) : {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeModules"])({}),
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
    const { data: studio } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('studios').select('status, subscription_status, trial_ends_at, owner_id').eq('id', studioId).maybeSingle();
    const isOwner = studio?.owner_id === user.id;
    const { data: internal } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users_internal').select('id').eq('id', user.id).eq('studio_id', studioId).maybeSingle();
    const { data: teacher } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('teachers').select('id').eq('user_id', user.id).eq('studio_id', studioId).maybeSingle();
    const { data: prof } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('professionals').select('id').eq('user_id', user.id).eq('studio_id', studioId).maybeSingle();
    const { data: student } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('students').select('id').eq('id', user.id).eq('studio_id', studioId).maybeSingle();
    if (!fromMeta && !isOwner && !internal && !teacher && !prof && !student) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn(`guardModule: User ${user.id} sem acesso ao studio ${studioId}`);
        return null;
    }
    if (!studio || studio.status === 'inactive') return null;
    if (studio.subscription_status === 'trialing' && studio.trial_ends_at && new Date(studio.trial_ends_at) < new Date()) return null;
    const { data: settings } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('organization_settings').select('*').eq('studio_id', studioId).maybeSingle();
    // Se não houver organization_settings, permitir inventory por padrão para DanceFlow (evita bloqueio em estúdios novos)
    const rawModules = settings?.enabled_modules;
    const enabledModules = rawModules && Object.keys(rawModules).length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeModules"])(rawModules) : {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeModules"])({}),
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
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$server$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticatedClient"])();
        const { data: { user } } = supabase ? await supabase.auth.getUser() : {
            data: {
                user: null
            }
        };
        if (user) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error(`guardModule: Falha ao carregar config para usuário ${user.id} tentando acessar ${moduleKey}`);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn(`guardModule: Tentativa de acesso não autenticado ao módulo ${moduleKey}`);
        }
        throw new Error("Não foi possível carregar as configurações da organização. Verifique se você está logado e vinculado a um estúdio.");
    }
    if (!config.enabledModules[moduleKey]) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error(`❌ Acesso bloqueado: Módulo [${moduleKey}] está desativado para o estúdio ${config.studioId}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$admin$2d$logs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logAdmin"])('warning', 'guard-module', `Módulo [${moduleKey}] bloqueado para studio ${config.studioId}`, {
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
"[project]/apps/web/lib/actions/marketplace.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4011b46916c0f02b72800f0bf9b50d8ebfaf077e8a":"getMarketplaceSettings","40337abb930bad6749613c7c5cf804eaa819e03d28":"getStoreBySlug","6062c9e74fde974a1a3f55eefd7ebc4dfb59788c5a":"updateMarketplaceSettings"},"",""] */ __turbopack_context__.s([
    "getMarketplaceSettings",
    ()=>getMarketplaceSettings,
    "getStoreBySlug",
    ()=>getStoreBySlug,
    "updateMarketplaceSettings",
    ()=>updateMarketplaceSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/modules-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function getMarketplaceSettings(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('marketplace');
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('marketplace_settings').select('*').eq('studio_id', studioId).single();
    if (error && error.code !== 'PGRST116') {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao buscar marketplace:', error);
    }
    return data;
}
async function updateMarketplaceSettings(studioId, settings) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('marketplace');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('DEBUG_SERVER: Tentando salvar configurações do marketplace para studioId:', studioId, 'com settings:', settings);
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('marketplace_settings').upsert({
        studio_id: studioId,
        ...settings,
        updated_at: new Date().toISOString()
    });
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('DEBUG_SERVER: ERRO ao salvar marketplace:', error);
        throw new Error(error.message); // Re-lança o erro para ser capturado no frontend
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('DEBUG_SERVER: Configurações do marketplace salvas com sucesso para studioId:', studioId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/marketplace');
}
async function getStoreBySlug(slug) {
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('DEBUG: Buscando loja pelo slug:', slug);
    const { data: store, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('marketplace_settings').select('*').eq('slug', slug).maybeSingle();
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('DEBUG: Erro no banco ao buscar loja:', error);
        return null;
    }
    if (!store) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn('DEBUG: Nenhuma loja encontrada com o slug:', slug);
        return null;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('DEBUG: Loja encontrada:', store.store_name, 'Ativa:', store.is_active);
    if (!store.is_active) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].warn('DEBUG: Loja encontrada, mas está DESATIVADA:', slug);
        return null;
    }
    // Busca produtos ativos deste estúdio
    const { data: products, error: productsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').eq('studio_id', store.studio_id).eq('status', 'active').gt('quantity', 0);
    if (productsError) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('DEBUG: Erro ao buscar produtos:', productsError);
        return {
            store,
            products: []
        };
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug('DEBUG: Produtos encontrados para a loja:', products.length);
    return {
        store,
        products
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getMarketplaceSettings,
    updateMarketplaceSettings,
    getStoreBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMarketplaceSettings, "4011b46916c0f02b72800f0bf9b50d8ebfaf077e8a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateMarketplaceSettings, "6062c9e74fde974a1a3f55eefd7ebc4dfb59788c5a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStoreBySlug, "40337abb930bad6749613c7c5cf804eaa819e03d28", null);
}),
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
"[project]/apps/web/lib/actions/erp.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40005b651e9939d7d2556ccadfead08b1e36a45054":"downloadInvoicePDF","402a69428f184278e6ef91f6cdc2f6414b4093c7d7":"getPurchaseOrders","402cd57efd661164ed67ccc4c1cc94fa3921d5765b":"getInvoices","402ddb1e6f8e1050afb424ecc706dc465936779aef":"getERPOrders","403f0b0cc93e7e34b0e3ff6ec22b3f303851d954c8":"getB2BStats","4045c81f09f43203e4efd4c5c6c6574b13ee86a78e":"getOrganizationSettings","40536cf14525cc1496415ce46a93e0708ec52b6bcb":"getChannels","40692c4c7a9be13b4ee3fabdb6943798231152c4df":"getERPCatalog","407b8457447eef809d966cf1d946f9957e647a3ddb":"getStudioPlan","408540d7406d5e7196f5d3524a6599e8eefd17a0ca":"getPendingInvoices","40aa532d580f20efe7d64d4eab5492cdd00e017fb6":"getERPDashboardStats","40d4e05b03932ed377b569e4360d2ccc9b7cbf931d":"getSuppliers","601b52c6cd1eca9a45ec7c162738a62cf775ab7f52":"updateBusinessType","6034e64f305dbade8a89b6438fd72dc47f448591e8":"createERPOrder","60b2b34fb88747b2153c6e2f04f3ed46f56adbadde":"createPublicERPOrder","60e346c17435b08b9b5b36fef836516f2520e461d9":"createSupplier","60e4290f3711514a4824e93f414897a80172f10ba8":"createPurchaseOrder","60e47135e1ad522c1dc7a0b0c5142e5a1429a5ed72":"emitInvoicesBatch","7073d7f3d222f9a44044ddfa2f58a89ab7724885cb":"updateERPOrderStatus","70bb311373bcec94f93b16aacdb169ceecf121a3df":"updateOrderShipping","7847a36eec4830ae5280686ac46bd1873708aee33a":"connectChannel"},"",""] */ __turbopack_context__.s([
    "connectChannel",
    ()=>connectChannel,
    "createERPOrder",
    ()=>createERPOrder,
    "createPublicERPOrder",
    ()=>createPublicERPOrder,
    "createPurchaseOrder",
    ()=>createPurchaseOrder,
    "createSupplier",
    ()=>createSupplier,
    "downloadInvoicePDF",
    ()=>downloadInvoicePDF,
    "emitInvoicesBatch",
    ()=>emitInvoicesBatch,
    "getB2BStats",
    ()=>getB2BStats,
    "getChannels",
    ()=>getChannels,
    "getERPCatalog",
    ()=>getERPCatalog,
    "getERPDashboardStats",
    ()=>getERPDashboardStats,
    "getERPOrders",
    ()=>getERPOrders,
    "getInvoices",
    ()=>getInvoices,
    "getOrganizationSettings",
    ()=>getOrganizationSettings,
    "getPendingInvoices",
    ()=>getPendingInvoices,
    "getPurchaseOrders",
    ()=>getPurchaseOrders,
    "getStudioPlan",
    ()=>getStudioPlan,
    "getSuppliers",
    ()=>getSuppliers,
    "updateBusinessType",
    ()=>updateBusinessType,
    "updateERPOrderStatus",
    ()=>updateERPOrderStatus,
    "updateOrderShipping",
    ()=>updateOrderShipping
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/modules-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function getOrganizationSettings(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('organization_settings').select('*').eq('studio_id', studioId).single();
    if (error && error.code !== 'PGRST116') {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao buscar configs:', error);
    }
    // Se não existir, retorna default (Workflow AI padrão)
    if (!data) {
        return {
            business_type: 'generic',
            nomenclature: {
                client: "Cliente",
                service: "Serviço",
                professional: "Profissional"
            }
        };
    }
    return data;
}
async function updateBusinessType(studioId, type) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Definições de nomenclatura por tipo
    const nomenclatureMap = {
        dance_school: {
            client: "Aluno",
            service: "Aula",
            professional: "Professor"
        },
        tattoo_studio: {
            client: "Cliente",
            service: "Sessão",
            professional: "Tatuador"
        },
        gym: {
            client: "Aluno",
            service: "Treino",
            professional: "Instrutor"
        },
        clinic: {
            client: "Paciente",
            service: "Consulta",
            professional: "Médico"
        },
        generic: {
            client: "Cliente",
            service: "Serviço",
            professional: "Profissional"
        }
    };
    const { error } = await supabase.from('organization_settings').upsert({
        studio_id: studioId,
        business_type: type,
        nomenclature: nomenclatureMap[type] || nomenclatureMap.generic
    }, {
        onConflict: 'studio_id'
    });
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard');
}
async function getStudioPlan(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp'); // ou outro módulo que dependa do plano, como 'financial'
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('studios').select('plan').eq('id', studioId).single();
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao buscar plano do estúdio:', error);
        return 'gratuito';
    }
    return data?.plan || 'gratuito';
}
async function getChannels(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('integration_channels').select('*').eq('studio_id', studioId);
    if (error) throw error;
    return data;
}
async function connectChannel(studioId, platform, name, apiKey) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    if (!apiKey || apiKey.trim().length < 8) {
        throw new Error('API Key inválida. Mínimo 8 caracteres.');
    }
    // Configurações de métricas padrão por plataforma — values iniciam nulos (sem dados ainda)
    const platformDefaults = {
        mercadolivre: {
            metric_label: 'Reputação',
            metric_unit: '/5',
            color: 'green'
        },
        amazon: {
            metric_label: 'SLA',
            metric_unit: '%',
            color: 'blue'
        },
        shopee: {
            metric_label: 'Avaliação',
            metric_unit: '/5',
            color: 'orange'
        },
        woocommerce: {
            metric_label: 'Uptime',
            metric_unit: '%',
            color: 'purple'
        }
    };
    const config = {
        ...platformDefaults[platform] ?? {
            metric_label: 'Score',
            metric_unit: '',
            color: 'gray'
        },
        metric_value: null
    };
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.from('integration_channels').insert({
        studio_id: studioId,
        platform,
        name,
        api_key: apiKey,
        status: 'active',
        last_sync: new Date().toISOString(),
        config
    });
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/erp');
}
async function getERPCatalog(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Contagem real de canais ativos — todos os produtos sincronizam com todos os canais ativos
    const { count: activeChannelsCount } = await supabase.from('integration_channels').select('*', {
        count: 'exact',
        head: true
    }).eq('studio_id', studioId).eq('status', 'active');
    const { data, error } = await supabase.from('products').select('*').eq('studio_id', studioId).order('name');
    if (error) throw error;
    return data.map((p)=>({
            ...p,
            channels: activeChannelsCount ?? 0,
            stock: p.quantity,
            price: p.selling_price
        }));
}
async function getERPOrders(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('erp_orders').select('*, integration_channels(name)').eq('studio_id', studioId).order('created_at', {
        ascending: false
    });
    if (error) throw error;
    return data;
}
async function createPublicERPOrder(studioId, orderData) {
    // Validação de entrada rigorosa para a função pública
    if (!studioId || typeof studioId !== 'string' || studioId.trim() === '') {
        throw new Error('ID do estúdio inválido.');
    }
    if (!orderData || typeof orderData !== 'object') {
        throw new Error('Dados do pedido inválidos.');
    }
    if (!orderData.customer_name || typeof orderData.customer_name !== 'string' || orderData.customer_name.trim() === '') {
        throw new Error('Nome do cliente inválido.');
    }
    if (typeof orderData.total_amount !== 'number' || orderData.total_amount <= 0) {
        throw new Error('Valor total do pedido inválido.');
    }
    if (!Array.isArray(orderData.items) || orderData.items.length === 0) {
        throw new Error('Itens do pedido inválidos ou vazios.');
    }
    for (const item of orderData.items){
        if (!item || typeof item !== 'object') {
            throw new Error('Item do pedido inválido.');
        }
        if (!item.product_id || typeof item.product_id !== 'string' || item.product_id.trim() === '') {
            throw new Error('ID do produto do item inválido.');
        }
        if (typeof item.qty !== 'number' || !Number.isInteger(item.qty) || item.qty <= 0) {
            throw new Error('Quantidade do item inválida.');
        }
        if (typeof item.price !== 'number' || item.price < 0) {
            throw new Error('Preço do item inválido.');
        }
    }
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Cria o Pedido ERP
    const { data: order, error: orderError } = await supabase.from('erp_orders').insert({
        studio_id: studioId,
        customer_name: orderData.customer_name,
        total_amount: orderData.total_amount,
        status: 'pending',
        items: orderData.items,
        external_id: `WEB-${Date.now().toString().slice(-6)}`
    }).select().single();
    if (orderError) throw orderError;
    // 2. Atualiza Estoque e Cria Log via RPC (Atômico)
    // Filtra itens que têm product_id
    const itemsToProcess = orderData.items.filter((item)=>item.product_id);
    if (itemsToProcess.length > 0) {
        const { error: rpcError } = await supabase.rpc('process_sale_transaction', {
            p_studio_id: studioId,
            p_items: itemsToProcess,
            p_reason: `Venda Online #${order.external_id}`,
            p_user_id: null // Público
        });
        if (rpcError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao processar estoque (RPC):', rpcError);
        // Não revertemos o pedido pois ele já foi criado, mas logamos o erro.
        // Em um sistema ideal, o pedido ficaria com status "error" ou similar.
        }
    }
    return order;
}
async function createERPOrder(studioId, orderData) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    // 1. Cria o Pedido ERP
    const { data: order, error: orderError } = await supabase.from('erp_orders').insert({
        studio_id: studioId,
        customer_name: orderData.customer_name,
        total_amount: orderData.total_amount,
        status: 'pending',
        items: orderData.items,
        external_id: `MANUAL-${Date.now().toString().slice(-6)}`
    }).select().single();
    if (orderError) throw orderError;
    // 2. Atualiza Estoque e Cria Log via RPC (Atômico)
    const itemsToProcess = orderData.items.filter((item)=>item.product_id);
    if (itemsToProcess.length > 0) {
        const { error: rpcError } = await supabase.rpc('process_sale_transaction', {
            p_studio_id: studioId,
            p_items: itemsToProcess,
            p_reason: `Venda ERP #${order.external_id}`,
            p_user_id: user?.id || null
        });
        if (rpcError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao processar estoque (RPC):', rpcError);
            throw rpcError;
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/erp');
    return order;
}
async function updateERPOrderStatus(studioId, orderId, newStatus) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('erp_orders').update({
        status: newStatus
    }).eq('id', orderId).eq('studio_id', studioId).select().single();
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/erp');
    return data;
}
async function updateOrderShipping(studioId, orderId, shippingInfo) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('erp_orders').update({
        status: 'shipped',
        shipping_info: {
            ...shippingInfo,
            status: 'In Transit',
            updated_at: new Date().toISOString()
        }
    }).eq('id', orderId).eq('studio_id', studioId).select().single();
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/erp');
    return data;
}
async function getSuppliers(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('suppliers').select('*').eq('studio_id', studioId).order('name');
    if (error) throw error;
    return data;
}
async function createSupplier(studioId, supplier) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.from('suppliers').insert({
        ...supplier,
        studio_id: studioId
    });
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/erp');
}
async function getPurchaseOrders(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('purchase_orders').select('*, suppliers(name)').eq('studio_id', studioId).order('created_at', {
        ascending: false
    });
    if (error) throw error;
    // Adiciona ref fictício se não existir
    return data.map((po)=>({
            ...po,
            ref: `PO-${po.created_at.slice(0, 4)}-${po.id.slice(0, 4).toUpperCase()}`
        }));
}
async function createPurchaseOrder(studioId, po) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.from('purchase_orders').insert({
        studio_id: studioId,
        supplier_id: po.supplier_id,
        total_amount: po.total_amount,
        items: po.items,
        expected_date: po.expected_date,
        status: 'draft'
    });
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/erp');
}
async function getPendingInvoices(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Busca pedidos pagos ou enviados que ainda não foram finalizados (sem nota emitida)
    const { data, error } = await supabase.from('erp_orders').select('*, integration_channels(name)').eq('studio_id', studioId).in('status', [
        'paid',
        'shipped'
    ]).order('created_at', {
        ascending: true
    });
    if (error) throw error;
    return data;
}
async function emitInvoicesBatch(studioId, orderIds) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('fiscal');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const results = [];
    for (const orderId of orderIds){
        // 1. Busca o pedido com itens
        const { data: order, error: fetchError } = await supabase.from('erp_orders').select('*').eq('id', orderId).eq('studio_id', studioId).single();
        if (fetchError || !order) continue;
        try {
            // 2. Chama a API NF-e (emissor fiscal próprio)
            const baseUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
            const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
            const headers = {
                'Content-Type': 'application/json'
            };
            const cookie = cookieStore.toString();
            if (cookie) headers['Cookie'] = cookie;
            const nfeResponse = await fetch(`${baseUrl}/api/nfe/emit`, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    studio_id: studioId,
                    order_id: orderId,
                    customer: {
                        name: order.customer_name || 'Cliente',
                        email: order.customer_email || undefined
                    },
                    items: (order.items || []).map((item)=>({
                            description: item.name || item.sku || 'Produto/Serviço',
                            quantity: item.qty || 1,
                            unit_price: item.price || 0
                        })),
                    total_amount: order.total_amount,
                    payment_method: order.payment_method,
                    observations: `Pedido ${order.external_id}`
                })
            });
            const nfeResult = await nfeResponse.json();
            if (!nfeResponse.ok) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error(`Erro NF-e para pedido ${orderId}:`, nfeResult);
                results.push({
                    order_id: order.external_id,
                    status: 'error',
                    error: nfeResult.error
                });
                continue;
            }
            results.push({
                order_id: order.external_id,
                status: 'success',
                invoice_number: nfeResult.invoice_number,
                provider: nfeResult.provider,
                simulated: nfeResult.simulated || false
            });
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error(`Erro ao emitir NF-e para pedido ${orderId}:`, err);
            results.push({
                order_id: order.external_id,
                status: 'error',
                error: err.message
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/erp');
    return results;
}
async function getInvoices(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Busca na tabela real de notas fiscais
    const { data, error } = await supabase.from('invoices').select(`
            *,
            order:erp_orders(external_id, customer_name)
        `).eq('studio_id', studioId).order('created_at', {
        ascending: false
    });
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao buscar notas fiscais:', error);
        throw error;
    }
    return data.map((i)=>({
            id: i.id,
            number: i.invoice_number,
            order_id: i.order?.external_id,
            customer: i.order?.customer_name,
            amount: i.amount,
            date: i.created_at,
            status: i.status
        }));
}
async function downloadInvoicePDF(invoiceId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // Busca a nota no banco para pegar url real do PDF
    const { data: invoice, error } = await supabase.from('invoices').select('invoice_number, pdf_url, provider, simulated').eq('id', invoiceId).single();
    if (error || !invoice) {
        throw new Error('Nota fiscal não encontrada');
    }
    // Se tiver URL real do PDF (FocusNFe DANFE ou PlugNotas PDF)
    if (invoice.pdf_url && !invoice.simulated) {
        return {
            url: invoice.pdf_url,
            filename: `${invoice.invoice_number || `NFe-${invoiceId.slice(0, 8)}`}.pdf`
        };
    }
    // Fallback: PDF de exemplo em homologação ou nota simulada
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].debug(`[NF-e] Nota ${invoiceId} é simulada ou sem PDF — retornando exemplo`);
    return {
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        filename: `${invoice.invoice_number || `NFe-${invoiceId.slice(0, 8)}`}.pdf`,
        simulated: true
    };
}
async function getERPDashboardStats(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Receita Omnichannel (Total de pedidos finalizados + vendas do PDV)
    const { data: revenueData } = await supabase.from('erp_orders').select('total_amount, created_at').eq('studio_id', studioId).eq('status', 'finished');
    const totalRevenue = revenueData?.reduce((acc, curr)=>acc + (Number(curr.total_amount) || 0), 0) || 0;
    // Cálculo de crescimento mensal
    const currentMonth = new Date().getMonth();
    const lastMonthRevenue = revenueData?.filter((o)=>new Date(o.created_at).getMonth() === currentMonth - 1).reduce((acc, curr)=>acc + (Number(curr.total_amount) || 0), 0) || 0;
    const currentMonthRevenue = revenueData?.filter((o)=>new Date(o.created_at).getMonth() === currentMonth).reduce((acc, curr)=>acc + (Number(curr.total_amount) || 0), 0) || 0;
    const growth = lastMonthRevenue > 0 ? Math.round((currentMonthRevenue - lastMonthRevenue) / lastMonthRevenue * 100) : 0;
    // 2. Pedidos em Aberto
    const { count: pendingOrders } = await supabase.from('erp_orders').select('*', {
        count: 'exact',
        head: true
    }).eq('studio_id', studioId).neq('status', 'finished').neq('status', 'cancelled');
    const { count: pendingShipping } = await supabase.from('erp_orders').select('*', {
        count: 'exact',
        head: true
    }).eq('studio_id', studioId).eq('status', 'paid') // Pago, mas não enviado
    ;
    // 3. Logística (Envios ativos)
    const { count: activeShipments } = await supabase.from('erp_orders').select('*', {
        count: 'exact',
        head: true
    }).eq('studio_id', studioId).eq('status', 'shipped');
    // Pedidos atrasados: pagos há mais de 3 dias sem despacho
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const { count: lateOrders } = await supabase.from('erp_orders').select('*', {
        count: 'exact',
        head: true
    }).eq('studio_id', studioId).eq('status', 'paid').lt('created_at', threeDaysAgo.toISOString());
    const shippedCount = activeShipments ?? 0;
    const lateCount = lateOrders ?? 0;
    const onTimePercentage = shippedCount + lateCount > 0 ? Math.round(shippedCount / (shippedCount + lateCount) * 100) : 100;
    // 4. Canais Ativos
    const { count: activeChannels } = await supabase.from('integration_channels').select('*', {
        count: 'exact',
        head: true
    }).eq('studio_id', studioId).eq('status', 'active');
    return {
        revenue: {
            total: totalRevenue,
            growth: growth
        },
        orders: {
            pending: pendingOrders || 0,
            waiting_collection: pendingShipping || 0
        },
        logistics: {
            active: shippedCount,
            on_time_percentage: onTimePercentage
        },
        channels: {
            active: activeChannels || 0,
            total: activeChannels || 0
        }
    };
}
async function getB2BStats(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('erp');
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: orders, error } = await supabase.from('erp_orders').select('customer_name, total_amount, created_at').eq('studio_id', studioId).neq('status', 'cancelled');
    if (error) throw error;
    // Agrega por cliente
    const customerMap = new Map();
    for (const order of orders ?? []){
        const key = (order.customer_name || 'Anônimo').trim();
        const existing = customerMap.get(key);
        const amount = Number(order.total_amount) || 0;
        const date = order.created_at || new Date().toISOString();
        if (existing) {
            existing.orderCount++;
            existing.totalSpend += amount;
            if (date > existing.lastOrder) existing.lastOrder = date;
        } else {
            customerMap.set(key, {
                orderCount: 1,
                totalSpend: amount,
                lastOrder: date
            });
        }
    }
    const allCustomers = Array.from(customerMap.entries()).map(([name, data])=>({
            name,
            ...data
        }));
    // Parceiros B2B = clientes com 2+ pedidos, ordenados por volume
    const partners = allCustomers.filter((c)=>c.orderCount >= 2).sort((a, b)=>b.totalSpend - a.totalSpend).slice(0, 10);
    const now = new Date();
    const totalOrders = orders?.length ?? 0;
    const totalAmount = allCustomers.reduce((acc, c)=>acc + c.totalSpend, 0);
    return {
        partners,
        totalPartners: allCustomers.filter((c)=>c.orderCount >= 2).length,
        totalGMV: totalAmount,
        avgOrderValue: totalOrders > 0 ? totalAmount / totalOrders : 0,
        activeThisMonth: allCustomers.filter((c)=>{
            const d = new Date(c.lastOrder);
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        }).length
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getOrganizationSettings,
    updateBusinessType,
    getStudioPlan,
    getChannels,
    connectChannel,
    getERPCatalog,
    getERPOrders,
    createPublicERPOrder,
    createERPOrder,
    updateERPOrderStatus,
    updateOrderShipping,
    getSuppliers,
    createSupplier,
    getPurchaseOrders,
    createPurchaseOrder,
    getPendingInvoices,
    emitInvoicesBatch,
    getInvoices,
    downloadInvoicePDF,
    getERPDashboardStats,
    getB2BStats
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOrganizationSettings, "4045c81f09f43203e4efd4c5c6c6574b13ee86a78e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBusinessType, "601b52c6cd1eca9a45ec7c162738a62cf775ab7f52", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStudioPlan, "407b8457447eef809d966cf1d946f9957e647a3ddb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getChannels, "40536cf14525cc1496415ce46a93e0708ec52b6bcb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(connectChannel, "7847a36eec4830ae5280686ac46bd1873708aee33a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getERPCatalog, "40692c4c7a9be13b4ee3fabdb6943798231152c4df", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getERPOrders, "402ddb1e6f8e1050afb424ecc706dc465936779aef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPublicERPOrder, "60b2b34fb88747b2153c6e2f04f3ed46f56adbadde", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createERPOrder, "6034e64f305dbade8a89b6438fd72dc47f448591e8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateERPOrderStatus, "7073d7f3d222f9a44044ddfa2f58a89ab7724885cb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateOrderShipping, "70bb311373bcec94f93b16aacdb169ceecf121a3df", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSuppliers, "40d4e05b03932ed377b569e4360d2ccc9b7cbf931d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSupplier, "60e346c17435b08b9b5b36fef836516f2520e461d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPurchaseOrders, "402a69428f184278e6ef91f6cdc2f6414b4093c7d7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createPurchaseOrder, "60e4290f3711514a4824e93f414897a80172f10ba8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPendingInvoices, "408540d7406d5e7196f5d3524a6599e8eefd17a0ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(emitInvoicesBatch, "60e47135e1ad522c1dc7a0b0c5142e5a1429a5ed72", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInvoices, "402cd57efd661164ed67ccc4c1cc94fa3921d5765b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(downloadInvoicePDF, "40005b651e9939d7d2556ccadfead08b1e36a45054", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getERPDashboardStats, "40aa532d580f20efe7d64d4eab5492cdd00e017fb6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getB2BStats, "403f0b0cc93e7e34b0e3ff6ec22b3f303851d954c8", null);
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/marketplace/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/marketplace.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/lib/actions/erp.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$marketplace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/marketplace.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$erp$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/erp.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/marketplace/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/marketplace.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/web/lib/actions/erp.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4011b46916c0f02b72800f0bf9b50d8ebfaf077e8a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$marketplace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMarketplaceSettings"],
    "40692c4c7a9be13b4ee3fabdb6943798231152c4df",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$erp$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getERPCatalog"],
    "6062c9e74fde974a1a3f55eefd7ebc4dfb59788c5a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$marketplace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateMarketplaceSettings"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$solutions$2f$estudio$2d$de$2d$danca$2f$dashboard$2f$marketplace$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$marketplace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$erp$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/marketplace/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/lib/actions/marketplace.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/web/lib/actions/erp.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$marketplace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/marketplace.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$erp$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/erp.ts [app-rsc] (ecmascript)");
}),
];

//# debugId=26432768-4356-a593-10cb-8cb0f93c29e0
//# sourceMappingURL=apps_web_a2360ddd._.js.map