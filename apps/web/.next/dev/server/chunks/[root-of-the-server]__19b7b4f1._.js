;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="5c1a3951-2de9-7f61-debb-33d3aa92be71")}catch(e){}}();
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
"[project]/apps/web/lib/errors.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppError",
    ()=>AppError
]);
class AppError extends Error {
    statusCode;
    errorCode;
    isOperational;
    constructor(message, statusCode, errorCode = 'INTERNAL_SERVER_ERROR'){
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.isOperational = true; // Erros operacionais são aqueles que podem ser tratados
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
}),
"[project]/apps/web/lib/schemas/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginSchema",
    ()=>loginSchema,
    "registerSchema",
    ()=>registerSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'E-mail ou telefone é obrigatório').trim(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Senha é obrigatória'),
    portal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    studioSlug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const registerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'Nome deve ter pelo menos 2 caracteres').trim(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('E-mail inválido').trim(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
    studioName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().default('admin'),
    taxId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(11, 'CPF/CNPJ é obrigatório'),
    taxIdType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'cpf',
        'cnpj'
    ]).optional().default('cpf'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, 'Telefone é obrigatório'),
    birthDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    niche: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    businessModel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    plan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    studioId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    modules: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    multiUnitQuantity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().default(1),
    professionalsTier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    professionalRegistration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    verticalizationSlug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
}),
"[project]/apps/web/lib/rate-limit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Rate limiter para login/registro.
 * - Produção (UPSTASH_* definidos): Redis/Upstash – funciona entre múltiplas instâncias
 * - Desenvolvimento: fallback em memória por instância
 */ __turbopack_context__.s([
    "checkAiRateLimit",
    ()=>checkAiRateLimit,
    "checkAuthRateLimit",
    ()=>checkAuthRateLimit
]);
const WINDOW_MS = 60 * 1000 // 1 minuto
;
const MAX_ATTEMPTS = 10 // máx por janela
;
function getClientKey(request) {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() ?? request.headers.get('x-real-ip') ?? 'unknown';
    return `auth:${ip}`;
}
// Fallback em memória (desenvolvimento ou quando Upstash não está configurado)
const memStore = new Map();
function memCleanup() {
    const now = Date.now();
    for (const [key, data] of memStore.entries()){
        if (data.resetAt < now) memStore.delete(key);
    }
}
function memCheck(request) {
    memCleanup();
    const key = getClientKey(request);
    const now = Date.now();
    const entry = memStore.get(key);
    if (!entry) {
        memStore.set(key, {
            count: 1,
            resetAt: now + WINDOW_MS
        });
        return {
            allowed: true
        };
    }
    if (entry.resetAt < now) {
        memStore.set(key, {
            count: 1,
            resetAt: now + WINDOW_MS
        });
        return {
            allowed: true
        };
    }
    entry.count++;
    if (entry.count > MAX_ATTEMPTS) {
        const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
        return {
            allowed: false,
            retryAfter
        };
    }
    return {
        allowed: true
    };
}
// Upstash Redis (produção)
async function upstashCheck(request) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) {
        return memCheck(request);
    }
    try {
        const { Ratelimit } = await __turbopack_context__.A("[project]/node_modules/@upstash/ratelimit/dist/index.js [app-route] (ecmascript, async loader)");
        const { Redis } = await __turbopack_context__.A("[project]/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript, async loader)");
        const redis = new Redis({
            url,
            token
        });
        const ratelimit = new Ratelimit({
            redis,
            limiter: Ratelimit.slidingWindow(MAX_ATTEMPTS, `${WINDOW_MS / 1000} s`),
            analytics: true
        });
        const key = getClientKey(request);
        const { success, limit, reset, remaining } = await ratelimit.limit(key);
        if (!success) {
            const retryAfter = Math.ceil((reset - Date.now()) / 1000);
            return {
                allowed: false,
                retryAfter
            };
        }
        return {
            allowed: true
        };
    } catch (err) {
        // Em produção, falha fechado (429) para evitar bypass do rate limit
        // Em dev, permite a requisição com aviso
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        console.warn('[rate-limit] Upstash falhou, usando fallback em memória (dev):', err?.message);
        return memCheck(request);
    }
}
async function checkAuthRateLimit(request) {
    if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
        return upstashCheck(request);
    }
    return memCheck(request);
}
// Limites para AI: mais generosos que auth, mas necessários para proteger a cota da API
const AI_WINDOW_MS = 60 * 1000;
const AI_MAX_REQUESTS_PER_STUDIO = 30 // 30 req/min por estúdio
;
const aiMemStore = new Map();
function aiMemCheck(key) {
    const now = Date.now();
    const entry = aiMemStore.get(key);
    if (!entry || entry.resetAt < now) {
        aiMemStore.set(key, {
            count: 1,
            resetAt: now + AI_WINDOW_MS
        });
        return {
            allowed: true
        };
    }
    entry.count++;
    if (entry.count > AI_MAX_REQUESTS_PER_STUDIO) {
        return {
            allowed: false,
            retryAfter: Math.ceil((entry.resetAt - now) / 1000)
        };
    }
    return {
        allowed: true
    };
}
async function checkAiRateLimit(studioId) {
    const key = `ai:${studioId}`;
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) return aiMemCheck(key);
    try {
        const { Ratelimit } = await __turbopack_context__.A("[project]/node_modules/@upstash/ratelimit/dist/index.js [app-route] (ecmascript, async loader)");
        const { Redis } = await __turbopack_context__.A("[project]/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript, async loader)");
        const redis = new Redis({
            url,
            token
        });
        const ratelimit = new Ratelimit({
            redis,
            limiter: Ratelimit.slidingWindow(AI_MAX_REQUESTS_PER_STUDIO, `${AI_WINDOW_MS / 1000} s`)
        });
        const { success, reset } = await ratelimit.limit(key);
        if (!success) return {
            allowed: false,
            retryAfter: Math.ceil((reset - Date.now()) / 1000)
        };
        return {
            allowed: true
        };
    } catch (err) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return aiMemCheck(key);
    }
}
}),
"[project]/apps/web/lib/sanitize-logs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/web/lib/api-response.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "errorResponse",
    ()=>errorResponse,
    "forbiddenResponse",
    ()=>forbiddenResponse,
    "missingParamResponse",
    ()=>missingParamResponse,
    "notFoundResponse",
    ()=>notFoundResponse,
    "successResponse",
    ()=>successResponse,
    "unauthorizedResponse",
    ()=>unauthorizedResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
;
;
;
function missingParamResponse(param) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: `${param} é obrigatório`,
        success: false
    }, {
        status: 400
    });
}
function notFoundResponse(resource = 'Recurso') {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: `${resource} não encontrado`,
        success: false
    }, {
        status: 404
    });
}
function forbiddenResponse(message = 'Acesso negado') {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: message,
        success: false
    }, {
        status: 403
    });
}
function unauthorizedResponse(message = 'Não autenticado') {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: message,
        success: false
    }, {
        status: 401
    });
}
function successResponse(data, status = 200) {
    const responseBody = {
        success: true
    };
    if (data && typeof data === 'object' && !Array.isArray(data)) {
        // Espalha as propriedades do objeto no nível raiz
        Object.assign(responseBody, data);
        // Também mantém uma cópia em 'data' para compatibilidade com códigos que esperam data.data
        responseBody.data = data;
    } else {
        responseBody.data = data;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(responseBody, {
        status
    });
}
function errorResponse(error, status) {
    let statusCode = 500;
    let errorCode = 'INTERNAL_SERVER_ERROR';
    let message = 'Ocorreu um erro interno no servidor.';
    let details = undefined;
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]) {
        statusCode = error.statusCode;
        errorCode = error.errorCode;
        message = error.message;
    } else if (error instanceof Error) {
        message = error.message;
        if (status) statusCode = status;
    } else if (status) {
        statusCode = status;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error({
        message: 'API Error',
        errorName: error instanceof Error ? error.name : 'UnknownError',
        errorMessage: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        statusCode,
        errorCode,
        isOperational: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"] ? error.isOperational : false,
        requestStatus: status
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: false,
        error: message,
        code: errorCode,
        details
    }, {
        status: statusCode
    });
}
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
"[project]/apps/web/lib/utils/slug.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSlugBase",
    ()=>generateSlugBase,
    "generateUniqueSlug",
    ()=>generateUniqueSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/supabase/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
;
;
function generateSlugBase(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hifens
    .replace(/--+/g, '-') // Remove múltiplos hifens
    .trim();
}
async function generateUniqueSlug(text, table, column = 'slug') {
    const base = generateSlugBase(text);
    let slug = base;
    let counter = 0;
    let isUnique = false;
    while(!isUnique){
        const currentSlug = counter === 0 ? slug : `${slug}-${counter}`;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$supabase$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from(table).select(column).eq(column, currentSlug).maybeSingle();
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error(`Erro ao verificar unicidade do slug em ${table}:`, error);
            // Se houver erro, adiciona um sufixo aleatório para garantir
            return `${currentSlug}-${Math.random().toString(36).substring(2, 7)}`;
        }
        if (!data) {
            isUnique = true;
            slug = currentSlug;
        } else {
            counter++;
            // Se tentarmos muitas vezes (ex: 10), adicionamos um sufixo aleatório
            if (counter > 10) {
                slug = `${base}-${Math.random().toString(36).substring(2, 7)}`;
                isUnique = true;
            }
        }
    }
    return slug;
}
}),
"[project]/apps/web/lib/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configurações constantes do sistema Workflow AI
 */ __turbopack_context__.s([
    "SYSTEM_CONFIG",
    ()=>SYSTEM_CONFIG
]);
const SYSTEM_CONFIG = {
    DEFAULT_PARTNER_COMMISSION: 10,
    TRIAL_DAYS: 15,
    SUPPORT_EMAIL: 'suporte@workflowai.com.br',
    PLATFORM_NAME: 'Workflow AI'
};
}),
"[project]/apps/web/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/errors.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$schemas$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/schemas/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/rate-limit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sanitize$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/sanitize-logs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/logger.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/api-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/utils/slug.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/config.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co") || '';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU") || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
/**
 * Função para buscar o perfil do usuário em todas as tabelas possíveis
 */ async function fetchUserProfile(dbClient, userId) {
    // 1. professionals (Novo formato para Engenheiros/Arquitetos e legado de Professores)
    // Usa limit para evitar erro quando há múltiplas linhas (ex: múltiplos vínculos de estúdio)
    // Prioriza registro com studio_id definido (nulls por último)
    const { data: profProfiles } = await dbClient.from('professionals').select('*').eq('user_id', userId).order('studio_id', {
        ascending: false,
        nullsFirst: false
    }).limit(1);
    const profProfile = profProfiles?.[0] ?? null;
    if (profProfile) {
        return {
            profile: profProfile,
            table: 'professionals',
            role: profProfile.professional_type === 'engineer' ? 'engineer' : profProfile.professional_type === 'architect' ? 'architect' : 'teacher'
        };
    }
    // 2. users_internal (Admins)
    const { data: adminProfile } = await dbClient.from('users_internal').select('*').eq('id', userId).maybeSingle();
    if (adminProfile) {
        return {
            profile: adminProfile,
            table: 'users_internal',
            role: adminProfile.role || 'admin'
        };
    }
    // 3. teachers (Professores - fallback para legados que ainda não estão em professionals)
    const { data: teacherProfile } = await dbClient.from('teachers').select('*').eq('user_id', userId).maybeSingle();
    if (teacherProfile) {
        return {
            profile: teacherProfile,
            table: 'teachers',
            role: teacherProfile.professional_type === 'engineer' ? 'engineer' : teacherProfile.professional_type === 'architect' ? 'architect' : 'teacher'
        };
    }
    // 4. students (Alunos)
    const { data: studentProfile } = await dbClient.from('students').select('*').eq('id', userId).maybeSingle();
    if (studentProfile) {
        return {
            profile: studentProfile,
            table: 'students',
            role: 'student'
        };
    }
    // 5. partners (Afiliados)
    const { data: partnerProfile } = await dbClient.from('partners').select('*').eq('user_id', userId).maybeSingle();
    if (partnerProfile) {
        return {
            profile: partnerProfile,
            table: 'partners',
            role: 'partner'
        };
    }
    return null;
}
/**
 * Protocolo de auto-reparação de perfil
 */ async function repairUserProfile(dbClient, authUser, identifier) {
    const metadata = authUser.user_metadata || {};
    const role = metadata.role;
    const name = metadata.name || identifier.split('@')[0];
    const studioId = metadata.studio_id;
    const userId = authUser.id;
    if (!role) return null;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`[AUTH] Iniciando auto-reparação para ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$sanitize$2d$logs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["maskEmail"])(authUser.email)} (Role: ${role})`);
    try {
        if (role === 'admin' || role === 'super_admin') {
            let targetStudioId = studioId;
            if (!targetStudioId) {
                const { data: firstStudio } = await dbClient.from('studios').select('id').limit(1).maybeSingle();
                targetStudioId = firstStudio?.id;
            }
            if (targetStudioId) {
                const { data: newProfile } = await dbClient.from('users_internal').insert({
                    id: userId,
                    studio_id: targetStudioId,
                    name,
                    email: authUser.email,
                    role: 'admin',
                    status: 'active'
                }).select().single();
                if (newProfile) return {
                    profile: newProfile,
                    table: 'users_internal',
                    role: role
                };
            }
        } else if (role === 'student' && studioId) {
            const { data: newProfile } = await dbClient.from('students').insert({
                id: userId,
                studio_id: studioId,
                name,
                email: authUser.email,
                status: 'active'
            }).select().single();
            if (newProfile) return {
                profile: newProfile,
                table: 'students',
                role: 'student'
            };
        } else if ([
            'teacher',
            'professional',
            'engineer',
            'architect'
        ].includes(role)) {
            const { data: newProfile } = await dbClient.from('professionals').insert({
                user_id: userId,
                studio_id: studioId || null,
                name,
                email: authUser.email,
                professional_type: role === 'engineer' ? 'engineer' : role === 'architect' ? 'architect' : 'technician',
                status: 'active'
            }).select().single();
            if (newProfile) return {
                profile: newProfile,
                table: 'professionals',
                role: role === 'engineer' || role === 'architect' ? role : 'teacher'
            };
        } else if (role === 'partner' || role === 'affiliate') {
            const slug = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$utils$2f$slug$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateUniqueSlug"])(name, 'partners');
            const { data: newProfile } = await dbClient.from('partners').insert({
                user_id: userId,
                name,
                slug,
                commission_rate: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SYSTEM_CONFIG"].DEFAULT_PARTNER_COMMISSION
            }).select().single();
            if (newProfile) return {
                profile: newProfile,
                table: 'partners',
                role: 'partner'
            };
        }
    } catch (err) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('[AUTH] Erro na auto-reparação:', err);
    }
    return null;
}
async function POST(request) {
    try {
        const rate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkAuthRateLimit"])(request);
        if (!rate.allowed) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Muitas tentativas. Aguarde um momento antes de tentar novamente.'
            }, {
                status: 429,
                headers: rate.retryAfter ? {
                    'Retry-After': String(rate.retryAfter)
                } : {}
            });
        }
        const body = await request.json();
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$schemas$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginSchema"].safeParse(body);
        if (!parsed.success) {
            const first = parsed.error.errors[0];
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"](first?.message ?? 'Dados inválidos', 400, 'VALIDATION_ERROR');
        }
        const { email: rawIdentifier, password, portal: rawPortal, language: loginLanguage, studioSlug: requestStudioSlug } = parsed.data;
        const identifier = rawIdentifier.trim();
        let portal = rawPortal;
        if (portal === 'client') portal = 'student';
        // 1. Inicializar Supabase SSR com captura de cookies
        // Criamos uma resposta que será preenchida com os cookies de sessão pelo Supabase
        let response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
            cookies: {
                get (name) {
                    return request.cookies.get(name)?.value;
                },
                set (name, value, options) {
                    response.cookies.set({
                        name,
                        value,
                        ...options
                    });
                },
                remove (name, options) {
                    response.cookies.set({
                        name,
                        value: '',
                        ...options
                    });
                }
            }
        });
        const isEmail = (input)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
        const cleanIdentifier = isEmail(identifier) ? identifier : identifier.replace(/\D/g, '');
        // 2. Autenticação
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword(isEmail(identifier) ? {
            email: cleanIdentifier,
            password
        } : {
            phone: cleanIdentifier,
            password
        });
        if (authError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('[AUTH] Login Error:', {
                code: authError.message?.slice(0, 50)
            });
            if (authError.message.toLowerCase().includes('email not confirmed')) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]('Seu e-mail ainda não foi confirmado.', 401, 'EMAIL_NOT_CONFIRMED');
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]('Credenciais inválidas.', 401, 'INVALID_CREDENTIALS');
        }
        if (!authData.user || !authData.session) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]('Erro na sessão de autenticação.', 500, 'AUTH_SESSION_NULL');
        }
        // 3. Buscar Perfil (Bypass RLS para garantir que o perfil seja encontrado durante o login)
        const adminDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseServiceKey, {
            cookies: {
                get: ()=>'',
                set: ()=>{},
                remove: ()=>{}
            }
        });
        let profileResult = await fetchUserProfile(adminDb, authData.user.id);
        if (!profileResult) {
            profileResult = await repairUserProfile(adminDb, authData.user, identifier);
        }
        if (!profileResult) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]('Perfil de usuário não encontrado.', 404, 'USER_PROFILE_NOT_FOUND');
        }
        let { profile, role: detectedRole } = profileResult;
        let userRole = detectedRole;
        // Detecção Super Admin — baseada exclusivamente no role armazenado no banco de dados
        if (profile.role === 'super_admin') {
            userRole = 'super_admin';
        }
        // Validação de Portal
        if (portal === 'admin' && ![
            'admin',
            'super_admin',
            'professional',
            'receptionist',
            'seller',
            'finance'
        ].includes(userRole)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$errors$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"]('Acesso negado ao painel administrativo.', 403, 'FORBIDDEN_PORTAL');
        }
        // --- Lógica para vincular profissional a um estúdio se studioSlug for fornecido e ele não tiver um studio_id ---
        let studio = null;
        if (requestStudioSlug && !profile.studio_id && (userRole === 'engineer' || userRole === 'architect' || userRole === 'teacher' || userRole === 'professional')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info(`[AUTH] Profissional logado via URL de estúdio (${requestStudioSlug}) sem vínculo. Tentando vincular.`);
            const { data: targetStudio, error: fetchStudioError } = await adminDb.from('studios').select('id, name, slug, plan').eq('slug', requestStudioSlug).maybeSingle();
            if (fetchStudioError || !targetStudio) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].warn(`[AUTH] Estúdio com slug ${requestStudioSlug} não encontrado ou erro ao buscar:`, fetchStudioError?.message);
            // Prosseguir sem vínculo, o front-end redirecionará para a página de convite
            } else {
                const studioIdToLink = targetStudio.id;
                // Atualiza a tabela 'professionals' com o studio_id
                const { error: updateProfError } = await adminDb.from('professionals').upsert({
                    user_id: authData.user.id,
                    studio_id: studioIdToLink,
                    name: profile.name || authData.user.email?.split('@')[0],
                    email: authData.user.email,
                    professional_type: userRole === 'engineer' ? 'engineer' : userRole === 'architect' ? 'architect' : 'technician',
                    status: 'active'
                }, {
                    onConflict: 'user_id'
                } // Conflito pelo user_id do auth.users, que é único
                );
                if (updateProfError) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('[AUTH] Erro ao vincular profissional ao estúdio:', {
                        error: updateProfError.message
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].info('[AUTH] Profissional vinculado ao estúdio com sucesso.');
                    // Atualiza o objeto profile para refletir o novo vínculo
                    profile.studio_id = studioIdToLink;
                    studio = targetStudio; // Define o estúdio para a resposta
                }
            }
        }
        // Buscar Estúdio (se ainda não foi definido pela lógica acima ou se já tinha studio_id)
        if (!studio && profile.studio_id) {
            const { data: studioData } = await adminDb.from('studios').select('id, name, slug, plan').eq('id', profile.studio_id).maybeSingle();
            studio = studioData;
        }
        // 4. Sincronizar Metadados do Auth (IMPORTANTE: sempre atualizar para garantir consistência)
        const metadata = authData.user.user_metadata || {};
        // Apenas atualiza se houver uma mudança real ou se o studio_id foi recém-definido
        const updatedMetadata = {
            ...metadata,
            role: userRole,
            language: loginLanguage
        };
        if (profile.studio_id) {
            updatedMetadata.studio_id = profile.studio_id;
        } else {
            // Se não há studio_id, garanta que não estamos definindo um inválido
            delete updatedMetadata.studio_id;
        }
        if (metadata.role !== userRole || metadata.studio_id !== profile.studio_id) {
            await adminDb.auth.admin.updateUserById(authData.user.id, {
                user_metadata: updatedMetadata
            });
        }
        // 5. Construir Resposta Final
        // Agent log removed for production safety
        const userPayload = {
            id: authData.user.id,
            name: profile.name,
            email: profile.email,
            role: userRole,
            studio_id: profile.studio_id,
            studioName: studio?.name || "Workflow Studio",
            studioSlug: studio?.slug || "",
            plan: studio?.plan || "gratuito",
            professionalType: profile.professional_type || null
        };
        // Afiliados/parceiros: incluir partnerId para criar ecossistemas e exibir comissão
        if (profileResult.table === 'partners' && profile.id) {
            userPayload.partnerId = profile.id;
        }
        const responseData = {
            success: true,
            user: userPayload,
            session: authData.session,
            // Adiciona flag para redirecionar para a página de join no front-end, se necessário
            redirectToJoin: (userRole === 'engineer' || userRole === 'architect' || userRole === 'teacher' || userRole === 'professional') && !profile.studio_id && requestStudioSlug
        };
        // Atualizamos o corpo da resposta mantendo os cookies já setados no objeto 'response'
        const finalResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(responseData, {
            status: 200,
            headers: response.headers // Importante: mantém os headers (cookies) setados pelo Supabase
        });
        // Setar cookies de compatibilidade adicionais se necessário
        const cookieOptions = {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'strict',
            maxAge: authData.session.expires_in,
            path: '/'
        };
        finalResponse.cookies.set('user-role', userRole, cookieOptions);
        finalResponse.cookies.set('user-plan', studio?.plan || "gratuito", cookieOptions);
        return finalResponse;
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$logger$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].error('[AUTH] Fatal Login Error:', error);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$api$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])(error);
    }
}
}),
];

//# debugId=5c1a3951-2de9-7f61-debb-33d3aa92be71
//# sourceMappingURL=%5Broot-of-the-server%5D__19b7b4f1._.js.map