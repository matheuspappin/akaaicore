;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="4b20fbea-1565-d961-7845-1d281e3e01ce")}catch(e){}}();
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
"[project]/apps/web/app/api/dance-studio/config/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/require-studio-access.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/modules.ts [app-route] (ecmascript)");
;
;
;
;
async function GET(req) {
    try {
        const studioId = req.nextUrl.searchParams.get('studioId');
        const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkStudioAccess"])(req, studioId);
        if (!access.authorized) return access.response;
        const { data: settings, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('organization_settings').select('enabled_modules').eq('studio_id', studioId).maybeSingle();
        if (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error.message
            }, {
                status: 500
            });
        }
        // enabled_modules vem do plano (sincronizado via admin)
        const raw = settings?.enabled_modules ?? {};
        const enabledModules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$modules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeModules"])(raw);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            enabledModules,
            planControlled: true
        });
    } catch (e) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e.message
        }, {
            status: 500
        });
    }
}
}),
];

//# debugId=4b20fbea-1565-d961-7845-1d281e3e01ce
//# sourceMappingURL=%5Broot-of-the-server%5D__0b4e871e._.js.map