module.exports = [
"[project]/apps/admin/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Next.js Instrumentation Hook — Admin app (minimal, sem OpenTelemetry)
 */ __turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
// Admin app não usa tracing distribuído
}
}),
];

//# sourceMappingURL=apps_admin_instrumentation_ts_ae32d6df._.js.map