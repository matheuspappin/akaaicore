module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/apps/web/config/verticalizations.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuração centralizada de verticalizações (nichos).
 * Adicionar novos nichos aqui — o proxy.ts lê esta config automaticamente.
 */ __turbopack_context__.s([
    "VERTICALIZATIONS",
    ()=>VERTICALIZATIONS,
    "getRoleRedirect",
    ()=>getRoleRedirect,
    "getVerticalizationByHostname",
    ()=>getVerticalizationByHostname,
    "getVerticalizationByPath",
    ()=>getVerticalizationByPath,
    "roleCanAccessPath",
    ()=>roleCanAccessPath
]);
const VERTICALIZATIONS = [
    {
        key: 'fire-protection',
        basePath: 'fire-protection',
        subdomains: /^(fire-protection|fireprotection|fire)\./i,
        loginPath: '/solutions/fire-protection/login',
        protectedPaths: [
            'dashboard',
            'engineer',
            'technician',
            'client'
        ],
        roleRedirects: {
            super_admin: '/admin',
            engineer: '/solutions/fire-protection/engineer',
            technician: '/solutions/fire-protection/technician',
            teacher: '/solutions/fire-protection/technician',
            student: '/solutions/fire-protection/client',
            seller: '/seller',
            finance: '/finance'
        },
        pathRoles: {
            engineer: [
                'engineer',
                'super_admin'
            ],
            technician: [
                'technician',
                'teacher',
                'super_admin'
            ],
            client: [
                'student',
                'super_admin'
            ]
        }
    },
    {
        key: 'estudio-de-danca',
        basePath: 'estudio-de-danca',
        subdomains: /^(danceflow|studio-danca|danca)\./i,
        loginPath: '/solutions/estudio-de-danca/login',
        protectedPaths: [
            'dashboard',
            'teacher',
            'student'
        ],
        roleRedirects: {
            super_admin: '/admin',
            student: '/solutions/estudio-de-danca/student',
            teacher: '/solutions/estudio-de-danca/teacher'
        },
        pathRoles: {
            teacher: [
                'teacher',
                'super_admin'
            ],
            student: [
                'student',
                'super_admin'
            ]
        }
    },
    {
        key: 'agroflowai',
        basePath: 'agroflowai',
        subdomains: /^(agroflow|agroflowai|agro)\./i,
        loginPath: '/solutions/agroflowai/login',
        protectedPaths: [
            'dashboard',
            'client'
        ],
        roleRedirects: {
            super_admin: '/admin',
            student: '/solutions/agroflowai/client',
            client: '/solutions/agroflowai/client'
        },
        pathRoles: {
            client: [
                'student',
                'client',
                'super_admin'
            ]
        }
    }
];
function getVerticalizationByPath(pathname) {
    return VERTICALIZATIONS.find((v)=>pathname.startsWith(`/solutions/${v.basePath}`));
}
function getVerticalizationByHostname(hostname) {
    return VERTICALIZATIONS.find((v)=>v.subdomains.test(hostname));
}
function getRoleRedirect(v, role) {
    return v.roleRedirects[role] ?? `/solutions/${v.basePath}/dashboard`;
}
function roleCanAccessPath(v, subPath, role) {
    const allowedRoles = v.pathRoles[subPath];
    if (!allowedRoles) return true // sub-rota sem restrição específica
    ;
    return allowedRoles.includes(role);
}
}),
"[project]/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.10_@babel+core@7.29.0_@opentelemetry+api@1.9.0_react-dom@19.2.0_react@19.2.0/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$verticalizations$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/config/verticalizations.ts [middleware] (ecmascript)");
;
;
;
async function proxy(request) {
    // Create an initial response
    let response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: request.headers
        }
    });
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://drgibkczwshwjjsdauoj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZ2lia2N6d3Nod2pqc2RhdW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMzU4MDQsImV4cCI6MjA4NTkxMTgwNH0.THix7zl_jOYnwJx4nGdPA5xA6KNItS2lNgows8hu_HU"), {
        cookies: {
            get (name) {
                return request.cookies.get(name)?.value;
            },
            set (name, value, options) {
                // Update request cookies for the current request
                request.cookies.set({
                    name,
                    value,
                    ...options
                });
                // Re-create the response object to include updated request cookies
                // This ensures the next middleware/route handler sees the new cookies
                response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request: {
                        headers: request.headers
                    }
                });
                // Update the response cookies (Set-Cookie header)
                response.cookies.set({
                    name,
                    value,
                    ...options
                });
            },
            remove (name, options) {
                // Update request cookies for the current request
                request.cookies.set({
                    name,
                    value: '',
                    ...options
                });
                // Re-create the response object to include updated request cookies
                response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
                    request: {
                        headers: request.headers
                    }
                });
                // Update the response cookies (Set-Cookie header)
                response.cookies.set({
                    name,
                    value: '',
                    ...options
                });
            }
        }
    });
    const { data: { user } } = await supabase.auth.getUser();
    // SEGURANÇA: user-role cookie é SEMPRE sobrescrito pelo metadata do JWT.
    // Nunca confiar no valor do cookie para autorização — apenas para cache de redirect.
    // Qualquer decisão de acesso a dados usa checkStudioAccess() ou o JWT diretamente.
    let userRole;
    if (user) {
        const metadataRole = user.user_metadata?.role || user.app_metadata?.role;
        const cookieRole = request.cookies.get('user-role')?.value;
        userRole = metadataRole;
        if (metadataRole && metadataRole !== cookieRole) {
            response.cookies.set('user-role', metadataRole, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                path: '/'
            });
        }
    }
    const url = request.nextUrl.clone();
    const pathname = url.pathname;
    const host = request.headers.get('host') || '';
    const hostname = host.split(':')[0].toLowerCase();
    // Admin (3001) não tem /login, /home, etc. — redirecionar para o app web (3000)
    const isAdminApp = host.includes(':3001');
    const webAppBase = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
    const redirectUrl = (path)=>isAdminApp && !path.startsWith('/admin') ? `${webAppBase}${path.startsWith('/') ? path : '/' + path}` : new URL(path, request.url).toString();
    // ─── Subdomínios e Domínios Customizados (AKAAI CORE) ─────────────────────
    // Redireciona subdomínios para /solutions/<basePath> usando config centralizada
    const vByHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$verticalizations$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getVerticalizationByHostname"])(hostname);
    if (vByHost) {
        const base = `/solutions/${vByHost.basePath}`;
        if (!pathname.startsWith(base)) {
            url.pathname = base + (pathname === '/' ? '' : pathname);
            return Response.redirect(url);
        }
    }
    // ─── Arquivos estáticos e rotas internas do Next.js ───────────────────────
    if (pathname.startsWith('/_next') || pathname.startsWith('/favicon') || /\.(svg|png|jpg|jpeg|gif|webp|ico|css|js|map|woff2?|ttf|eot)$/i.test(pathname)) {
        return response;
    }
    // ─── Rotas de API públicas ─────────────────────────────────────────────────
    const PUBLIC_API_ROUTES = [
        '/api/auth/login',
        '/api/auth/logout',
        '/api/auth/register',
        '/api/auth/verify-email',
        '/api/auth/verify-phone',
        '/api/auth/resend-confirmation',
        '/api/webhooks',
        '/api/cron'
    ];
    if (PUBLIC_API_ROUTES.some((r)=>pathname.startsWith(r))) {
        return response;
    }
    // ─── Modo Manutenção ──────────────────────────────────────────────────────
    // APÓS rotas públicas (auth/cron/webhooks devem funcionar em manutenção)
    if (process.env.MAINTENANCE_MODE === 'true') {
        const isAdminPath = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
        const isMaintenancePage = pathname === '/maintenance';
        if (!isAdminPath && !isMaintenancePage) {
            // APIs regulares recebem 503 JSON; páginas recebem redirect
            if (pathname.startsWith('/api/')) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Sistema em manutenção. Tente novamente em alguns minutos.'
                }, {
                    status: 503
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/maintenance'));
        }
    }
    // ─── API admin: 401 se não autenticado ────────────────────────────────────
    if (pathname.startsWith('/api/admin') && !user) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Não autorizado'
        }, {
            status: 401
        });
    }
    // ─── Verticalizações: detecta nicho e sub-rota protegida ──────────────────
    const activeVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$verticalizations$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getVerticalizationByPath"])(pathname);
    const isVerticalizationProtected = activeVertical ? activeVertical.protectedPaths.some((p)=>pathname.startsWith(`/solutions/${activeVertical.basePath}/${p}`)) : false;
    // Retrocompat: variáveis booleanas usadas abaixo nas regras genéricas
    const isFireProtectionProtected = !!activeVertical && activeVertical.key === 'fire-protection' && isVerticalizationProtected;
    const isDanceFlowProtected = !!activeVertical && activeVertical.key === 'estudio-de-danca' && isVerticalizationProtected;
    const isAgroFlowProtected = !!activeVertical && activeVertical.key === 'agroflowai' && isVerticalizationProtected;
    // ─── Generic routes ────────────────────────────────────────────────────────
    const isAuthRoute = pathname === '/login' || pathname === '/register' || pathname === '/forgot-password' || pathname === '/reset-password' || pathname.startsWith('/auth/') || pathname.startsWith('/s/');
    const isPublicRoute = pathname === '/' || pathname === '/home' || pathname === '/white-label' || pathname === '/shop' || pathname.startsWith('/shop/') || pathname === '/portal/login' || pathname === '/portal/register' || pathname === '/portal/affiliate' || pathname === '/portal/affiliate/login' || pathname === '/portal/affiliate/register' || pathname === '/auth/set-password' || pathname === '/subscription-expired' || pathname.startsWith('/setup/invite/') || pathname.startsWith('/solutions') && !isVerticalizationProtected;
    const isDashboardRoute = pathname.startsWith('/dashboard');
    const isEngineerRoute = pathname.startsWith('/engineer');
    const isTeacherRoute = pathname.startsWith('/teacher');
    const isTechnicianRoute = pathname.startsWith('/technician');
    const isStudentRoute = pathname.startsWith('/student');
    const isSellerRoute = pathname.startsWith('/seller');
    const isFinanceRoute = pathname.startsWith('/finance');
    const isAffiliateRoute = pathname.startsWith('/portal/affiliate');
    // ─── Verticalizações: lógica genérica (lê config/verticalizations.ts) ─────
    if (isVerticalizationProtected && activeVertical) {
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl(activeVertical.loginPath));
        }
        const role = userRole || '';
        // Dashboard: redirecionar para sub-rota correta por role
        if (pathname === `/solutions/${activeVertical.basePath}/dashboard`) {
            const redirect = activeVertical.roleRedirects[role];
            if (redirect) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl(redirect));
            // admin / sem redirect específico → mantém no dashboard
            return response;
        }
        // Sub-rotas com restrição de role
        for (const [subPath, allowedRoles] of Object.entries(activeVertical.pathRoles)){
            if (pathname.startsWith(`/solutions/${activeVertical.basePath}/${subPath}`)) {
                if (!allowedRoles.includes(role)) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl(activeVertical.loginPath));
                }
                break;
            }
        }
        return response;
    }
    // Se está na página de login de um nicho mas já está autenticado
    if (activeVertical && pathname === activeVertical.loginPath && user && userRole) {
        const redirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$config$2f$verticalizations$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getRoleRedirect"])(activeVertical, userRole);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl(redirect));
    }
    // ─── Generic route logic ───────────────────────────────────────────────────
    // Para rotas protegidas de student/technician/engineer sem role no cookie ainda
    // (primeiro request após login), permitir passagem — o cookie será sincronizado acima
    // effectiveRole: sempre deriva do JWT/metadata, nunca do cookie cru
    const effectiveRole = user?.user_metadata?.role || user?.app_metadata?.role;
    if (user && effectiveRole) {
        if (isAuthRoute) {
            if (effectiveRole === 'seller') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/seller'));
            if (effectiveRole === 'finance') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/finance'));
            if (effectiveRole === 'affiliate' || effectiveRole === 'partner') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/portal/affiliate/dashboard'));
            if (effectiveRole === 'engineer') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/engineer'));
            if (effectiveRole === 'technician') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/technician'));
            if (effectiveRole === 'teacher') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/estudio-de-danca/teacher'));
            // student: redirecionar para o portal correto baseado no niche do user_metadata
            if (effectiveRole === 'student') {
                const niche = user?.user_metadata?.niche || user?.user_metadata?.vertical || '';
                if (niche === 'fire_protection') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/client'));
                if (niche === 'agroflowai' || niche === 'agro') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/agroflowai/client'));
                // Default: portal genérico de aluno (dance/gym/outros)
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/student'));
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/dashboard'));
        }
        if (isEngineerRoute && effectiveRole !== 'engineer' && effectiveRole !== 'super_admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/login'));
        }
        if (isTechnicianRoute && effectiveRole !== 'technician' && effectiveRole !== 'teacher' && effectiveRole !== 'super_admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/login'));
        }
        if (isTeacherRoute && effectiveRole !== 'teacher' && effectiveRole !== 'super_admin') {
            if (effectiveRole === 'engineer') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/engineer'));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/estudio-de-danca/login'));
        }
        if (isStudentRoute && effectiveRole !== 'student' && effectiveRole !== 'super_admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/login'));
        }
        if (isSellerRoute && effectiveRole !== 'seller' && effectiveRole !== 'admin' && effectiveRole !== 'super_admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/login'));
        }
        if (isFinanceRoute && effectiveRole !== 'finance' && effectiveRole !== 'admin' && effectiveRole !== 'super_admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/login'));
        }
        if (isDashboardRoute && effectiveRole !== 'admin' && effectiveRole !== 'teacher' && effectiveRole !== 'finance' && effectiveRole !== 'super_admin') {
            if (effectiveRole === 'seller') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/seller'));
            if (effectiveRole === 'finance') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/finance'));
            if (effectiveRole === 'affiliate' || effectiveRole === 'partner') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/portal/affiliate/dashboard'));
            if (effectiveRole === 'engineer') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/engineer'));
            if (effectiveRole === 'technician') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/technician'));
            if (effectiveRole === 'teacher') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/estudio-de-danca/teacher'));
            if (effectiveRole === 'student') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/student'));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/login'));
        }
        if (isAffiliateRoute && effectiveRole !== 'affiliate' && effectiveRole !== 'partner' && effectiveRole !== 'super_admin') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/login'));
        }
        // Afiliado logado em /portal/affiliate/login → dashboard
        if ((pathname === '/portal/affiliate/login' || pathname === '/portal/affiliate/register') && (effectiveRole === 'affiliate' || effectiveRole === 'partner')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/portal/affiliate/dashboard'));
        }
    } else if (!user && !isAuthRoute && !isPublicRoute) {
        if (isEngineerRoute || isTechnicianRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/solutions/fire-protection/login'));
        }
        if (isAffiliateRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/portal/affiliate/login'));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl('/login'));
    }
    // --- White-Label / Custom Domain Logic ---
    return response;
}
const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fee0303f._.js.map