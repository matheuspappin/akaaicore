;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="d2c0651b-a9f3-9e70-b21a-d853bc6ab783")}catch(e){}}();
module.exports = [
"[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.8.0_@supabase+supabase-js@2.99.3/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.8.0_@supabase+supabase-js@2.99.3/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU") || '';
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$8$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'placeholder-key', {
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
"[project]/apps/web/lib/server-utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdminClient",
    ()=>getAdminClient,
    "getAuthenticatedClient",
    ()=>getAuthenticatedClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.99.3/node_modules/@supabase/supabase-js/dist/index.mjs [app-rsc] (ecmascript) <locals>");
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
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const token = cookieStore.get('sb-access-token')?.value || cookieStore.get('sb-auth-token')?.value || cookieStore.getAll().find((c)=>c.name.includes('auth-token') && c.value.length > 20)?.value;
        if (token) {
            const manualClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU"), {
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
        const adminClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co"), serviceKey, {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
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
const getServerOrganizationConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
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
"[project]/apps/web/lib/actions/inventory.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4016f4057d5176ced1c78890dc18df645a70cf88a6":"getInventory","40aa970573708620973f4b545121f4f8ff0d2646c4":"getRecentTransactions","600cc50b64c9a47912773a1ded737263ded3277718":"createProduct","6097436fdc476398d7294ba11eaf61aed93939ed5b":"getProductBySku","60e0974d392386f2cb069609e9ec799c4ac30d24f4":"deleteProduct","706f4edabf2a603ef50affeec57f6626c94a4e63f7":"updateProduct","7f3978fc4c880969bf9c366376071b8b15d69fba5c":"registerTransaction"},"",""] */ __turbopack_context__.s([
    "createProduct",
    ()=>createProduct,
    "deleteProduct",
    ()=>deleteProduct,
    "getInventory",
    ()=>getInventory,
    "getProductBySku",
    ()=>getProductBySku,
    "getRecentTransactions",
    ()=>getRecentTransactions,
    "registerTransaction",
    ()=>registerTransaction,
    "updateProduct",
    ()=>updateProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/modules-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function getProductBySku(sku, studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('inventory', {
        studioId
    });
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('products').select('*').eq('studio_id', studioId).eq('sku', sku).maybeSingle();
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao buscar por SKU:', error);
        return null;
    }
    return data;
}
async function getInventory(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('inventory', {
        studioId
    });
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('products').select('*').eq('studio_id', studioId).eq('status', 'active').order('name', {
        ascending: true
    });
    if (error) throw error;
    // Cálculo de KPIs de Estoque
    const totalItems = data.reduce((acc, curr)=>acc + curr.quantity, 0);
    const totalCostValue = data.reduce((acc, curr)=>acc + curr.quantity * curr.cost_price, 0);
    const totalSalesValue = data.reduce((acc, curr)=>acc + curr.quantity * curr.selling_price, 0);
    const potentialProfit = totalSalesValue - totalCostValue;
    return {
        products: data,
        stats: {
            totalItems,
            totalCostValue,
            totalSalesValue,
            potentialProfit
        }
    };
}
async function createProduct(productData, studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('inventory', {
        studioId
    });
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const sku = productData.sku?.toString?.()?.trim?.();
    const existingProduct = sku ? await getProductBySku(sku, studioId) : null;
    if (existingProduct) {
        // Se o produto com o mesmo SKU já existe, atualiza o estoque e, opcionalmente, os preços
        const newQuantity = existingProduct.quantity + (productData.quantity || 0);
        const updatedProduct = await updateProduct(existingProduct.id, {
            quantity: newQuantity,
            cost_price: productData.cost_price || existingProduct.cost_price,
            selling_price: productData.selling_price || existingProduct.selling_price,
            status: 'active' // Garante que seja reativado caso estivesse arquivado
        }, studioId);
        // Registrar transação de entrada para o estoque adicionado
        await registerTransaction(existingProduct.id, 'in', productData.quantity || 0, `Entrada de estoque via ERP (SKU unificado)`, studioId, productData.cost_price // Usar o custo do novo lote
        );
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/estoque');
        return updatedProduct;
    } else {
        // Se não existe, cria um novo produto (apenas campos válidos para a tabela)
        const insertData = {
            studio_id: studioId,
            name: productData.name || 'Produto sem nome',
            category: productData.category || 'Geral',
            quantity: productData.quantity ?? 0,
            min_quantity: productData.min_quantity ?? 5,
            cost_price: productData.cost_price ?? 0,
            selling_price: productData.selling_price ?? 0,
            status: 'active'
        };
        const skuVal = productData.sku?.toString?.()?.trim?.();
        if (skuVal) insertData.sku = skuVal;
        // Se sku vazio, não enviamos (evita conflito UNIQUE com outros produtos sem SKU)
        if (productData.ncm?.trim()) insertData.ncm = productData.ncm.trim();
        if (productData.description?.trim()) insertData.description = productData.description.trim();
        if (productData.image_url?.trim()) insertData.image_url = productData.image_url.trim();
        const sub = productData.subcategory?.toString?.()?.trim?.();
        if (sub) insertData.subcategory = sub;
        const { data, error } = await supabase.from('products').insert(insertData).select().single();
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('createProduct insert error:', error);
            throw new Error(error.message || 'Erro ao salvar produto no estoque');
        }
        // Registrar transação de entrada para estoque inicial (aparece em Últimas Movimentações)
        const initialQty = productData.quantity ?? 0;
        if (data && initialQty > 0) {
            await registerTransaction(data.id, 'in', initialQty, 'Entrada Via Cadastro', studioId, productData.cost_price);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/estoque');
        return data;
    }
}
async function updateProduct(productId, updates, studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('inventory', {
        studioId
    });
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data, error } = await supabase.from('products').update(updates).eq('id', productId).eq('studio_id', studioId).select().single();
    if (error) throw error;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/estoque');
    return data;
}
async function deleteProduct(productId, studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('inventory', {
        studioId
    });
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { error } = await supabase.from('products').update({
        status: 'archived'
    }) // Soft delete em vez de exclusão permanente
    .eq('id', productId).eq('studio_id', studioId);
    if (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao arquivar produto:', error);
        throw error;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/estoque');
    return true;
}
async function registerTransaction(productId, type, quantity, reason, studioId, unitPrice, paymentMethod, studentId// Novo parâmetro
) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('inventory', {
        studioId
    });
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    // 1. Buscar produto atual para validações
    const { data: product } = await supabase.from('products').select('quantity, selling_price, cost_price').eq('id', productId).single();
    if (!product) throw new Error('Produto não encontrado');
    // Validação de Estoque Negativo
    if ((type === 'out' || type === 'sale') && product.quantity < quantity) {
        throw new Error(`Estoque insuficiente. Atual: ${product.quantity}`);
    }
    // 2. Calcular novo saldo e Custo Médio Ponderado (se for entrada)
    let newQuantity = type === 'in' ? product.quantity + quantity : product.quantity - quantity;
    let newCostPrice = product.cost_price;
    // Lógica de Custo Médio Ponderado:
    // (Valor Total Antigo + Valor Total Novo) / Quantidade Total Nova
    if (type === 'in' && unitPrice !== undefined && unitPrice > 0) {
        const currentTotalValue = product.quantity * product.cost_price;
        const incomingTotalValue = quantity * unitPrice;
        // Evita divisão por zero se for o primeiro item
        if (newQuantity > 0) {
            newCostPrice = (currentTotalValue + incomingTotalValue) / newQuantity;
        } else {
            newCostPrice = unitPrice;
        }
    }
    // 3. Atualizar Produto
    const { data: updatedProduct, error: updateError } = await supabase.from('products').update({
        quantity: newQuantity,
        cost_price: newCostPrice,
        status: 'active' // Garante que o produto seja desativado/arquivado seja reativado
    }).eq('id', productId).eq('studio_id', studioId).select().single();
    if (updateError) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao atualizar produto:', updateError);
        throw updateError;
    }
    // 4. Criar Log de Transação (Audit Trail)
    const transactionPrice = unitPrice !== undefined ? unitPrice : type === 'in' ? product.cost_price || 0 : product.selling_price || 0;
    const txInsert = {
        studio_id: studioId,
        product_id: productId,
        type,
        quantity,
        unit_price: transactionPrice,
        reason,
        total_value: quantity * transactionPrice
    };
    if (paymentMethod) txInsert.payment_method = paymentMethod;
    if (studentId) txInsert.student_id = studentId;
    const { error: logError } = await supabase.from('inventory_transactions').insert(txInsert);
    if (logError) __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].error('Erro ao logar transação:', logError);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/estoque');
    return true;
}
async function getRecentTransactions(studioId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$modules$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["guardModule"])('inventory', {
        studioId
    });
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    const { data } = await supabase.from('inventory_transactions').select('*, product:products(name)').eq('studio_id', studioId).order('created_at', {
        ascending: false
    }).limit(10);
    return data;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProductBySku,
    getInventory,
    createProduct,
    updateProduct,
    deleteProduct,
    registerTransaction,
    getRecentTransactions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductBySku, "6097436fdc476398d7294ba11eaf61aed93939ed5b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInventory, "4016f4057d5176ced1c78890dc18df645a70cf88a6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProduct, "600cc50b64c9a47912773a1ded737263ded3277718", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "706f4edabf2a603ef50affeec57f6626c94a4e63f7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "60e0974d392386f2cb069609e9ec799c4ac30d24f4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerTransaction, "7f3978fc4c880969bf9c366376071b8b15d69fba5c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecentTransactions, "40aa970573708620973f4b545121f4f8ff0d2646c4", null);
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/estoque/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/inventory.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/inventory.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/estoque/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/web/lib/actions/inventory.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4016f4057d5176ced1c78890dc18df645a70cf88a6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInventory"],
    "40aa970573708620973f4b545121f4f8ff0d2646c4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecentTransactions"],
    "600cc50b64c9a47912773a1ded737263ded3277718",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProduct"],
    "6097436fdc476398d7294ba11eaf61aed93939ed5b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductBySku"],
    "60e0974d392386f2cb069609e9ec799c4ac30d24f4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"],
    "706f4edabf2a603ef50affeec57f6626c94a4e63f7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProduct"],
    "7f3978fc4c880969bf9c366376071b8b15d69fba5c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerTransaction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f2e$next$2d$internal$2f$server$2f$app$2f$solutions$2f$estudio$2d$de$2d$danca$2f$dashboard$2f$estoque$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/apps/web/.next-internal/server/app/solutions/estudio-de-danca/dashboard/estoque/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/web/lib/actions/inventory.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/actions/inventory.ts [app-rsc] (ecmascript)");
}),
];

//# debugId=d2c0651b-a9f3-9e70-b21a-d853bc6ab783
//# sourceMappingURL=apps_web_4404497a._.js.map