;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="c2dcf858-63c7-4bfb-cada-8aea2d06f803")}catch(e){}}();
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
"[project]/apps/web/app/api/dance-studio/financeiro/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.99.3/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/auth/require-studio-access.ts [app-route] (ecmascript)");
;
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
function getAdmin() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$99$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
}
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const studioId = searchParams.get('studioId');
    if (!studioId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'studioId obrigatório'
        }, {
            status: 400
        });
    }
    const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkStudioAccess"])(request, studioId);
    if (!access.authorized) return access.response;
    const supabase = getAdmin();
    try {
        const now = new Date();
        const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        const startOfMonth = `${currentMonth}-01`;
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
        const [paymentsRes, expensesRes, professionalFinancesRes] = await Promise.all([
            supabase.from('payments').select('id, amount, description, status, due_date, payment_date, created_at, student_id, payment_method, reference_month, payment_source, credits_used, reference_id, student:students(id, name)').eq('studio_id', studioId).order('due_date', {
                ascending: false
            }),
            supabase.from('expenses').select('*').eq('studio_id', studioId).order('due_date', {
                ascending: false
            }),
            supabase.from('professional_finances').select('*, professional:professionals(id, name)').eq('studio_id', studioId).order('created_at', {
                ascending: false
            }).limit(50)
        ]);
        const payments = (paymentsRes.data || []).map((p)=>({
                ...p,
                student_name: p.student?.name ?? 'Aluno'
            }));
        const expenses = expensesRes.data || [];
        const professionalFinances = (professionalFinancesRes.data || []).map((f)=>({
                ...f,
                professional_name: f.professional?.name ?? 'Professor'
            }));
        // KPI: receitas do mês atual (paid)
        const monthPaidPayments = payments.filter((p)=>p.status === 'paid' && (p.payment_date?.startsWith(currentMonth) || p.due_date?.startsWith(currentMonth)));
        const totalReceita = monthPaidPayments.reduce((s, p)=>s + Number(p.amount || 0), 0);
        // KPI: despesas do mês
        const monthExpenses = expenses.filter((e)=>e.due_date?.startsWith(currentMonth));
        const totalDespesas = monthExpenses.reduce((s, e)=>s + Number(e.amount || 0), 0);
        // KPI: inadimplência (overdue + pending)
        const inadimplencia = payments.filter((p)=>p.status === 'overdue').reduce((s, p)=>s + Number(p.amount || 0), 0);
        // Monthly chart data (last 6 months)
        const monthlyData = {};
        for(let i = 5; i >= 0; i--){
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
            const monthLabel = d.toLocaleDateString('pt-BR', {
                month: 'short',
                year: '2-digit'
            });
            monthlyData[key] = {
                month: monthLabel,
                receita: 0,
                despesas: 0
            };
        }
        payments.forEach((p)=>{
            if (p.status !== 'paid') return;
            const key = (p.payment_date || p.due_date || '').substring(0, 7);
            if (monthlyData[key]) monthlyData[key].receita += Number(p.amount || 0);
        });
        expenses.forEach((e)=>{
            const key = (e.due_date || '').substring(0, 7);
            if (monthlyData[key]) monthlyData[key].despesas += Number(e.amount || 0);
        });
        // Expenses by category
        const categoryMap = {};
        expenses.forEach((e)=>{
            categoryMap[e.category] = (categoryMap[e.category] || 0) + Number(e.amount || 0);
        });
        const expensesByCategory = Object.entries(categoryMap).map(([category, valor])=>({
                category,
                valor
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            payments,
            expenses,
            professionalFinances,
            stats: {
                totalReceita,
                totalDespesas,
                lucroLiquido: totalReceita - totalDespesas,
                inadimplencia
            },
            chartData: {
                monthly: Object.values(monthlyData),
                byCategory: expensesByCategory
            }
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ [DANCE-STUDIO/FINANCEIRO GET] Erro:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    const body = await request.json();
    const { studioId, student_id, amount, description, due_date, payment_method, reference_month } = body;
    if (!studioId || !amount) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'studioId e amount são obrigatórios'
        }, {
            status: 400
        });
    }
    const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkStudioAccess"])(request, studioId);
    if (!access.authorized) return access.response;
    const supabase = getAdmin();
    try {
        const { data, error } = await supabase.from('payments').insert({
            studio_id: studioId,
            student_id: student_id || null,
            amount: Number(amount),
            description: description || 'Mensalidade',
            due_date: due_date || null,
            status: 'pending',
            payment_method: payment_method || null,
            reference_month: reference_month || null,
            payment_source: 'manual'
        }).select('id, amount, description, status, due_date, payment_method, reference_month').single();
        if (error) throw error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: 201
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ [DANCE-STUDIO/FINANCEIRO POST] Erro:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
async function PATCH(request) {
    const body = await request.json();
    const { studioId, paymentId, status, payment_method } = body;
    if (!studioId || !paymentId || !status) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'studioId, paymentId e status são obrigatórios'
        }, {
            status: 400
        });
    }
    const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkStudioAccess"])(request, studioId);
    if (!access.authorized) return access.response;
    const supabase = getAdmin();
    try {
        const updateData = {
            status
        };
        if (status === 'paid') {
            updateData.payment_date = new Date().toISOString().split('T')[0];
            if (payment_method) updateData.payment_method = payment_method;
        }
        const { data, error } = await supabase.from('payments').update(updateData).eq('id', paymentId).eq('studio_id', studioId).select('id, status, payment_date').single();
        if (error) throw error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ [DANCE-STUDIO/FINANCEIRO PATCH] Erro:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const studioId = searchParams.get('studioId');
    const paymentId = searchParams.get('paymentId');
    if (!studioId || !paymentId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'studioId e paymentId são obrigatórios'
        }, {
            status: 400
        });
    }
    const access = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$auth$2f$require$2d$studio$2d$access$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkStudioAccess"])(request, studioId);
    if (!access.authorized) return access.response;
    const supabase = getAdmin();
    try {
        const { error } = await supabase.from('payments').delete().eq('id', paymentId).eq('studio_id', studioId);
        if (error) throw error;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('❌ [DANCE-STUDIO/FINANCEIRO DELETE] Erro:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# debugId=c2dcf858-63c7-4bfb-cada-8aea2d06f803
//# sourceMappingURL=%5Broot-of-the-server%5D__73b12211._.js.map