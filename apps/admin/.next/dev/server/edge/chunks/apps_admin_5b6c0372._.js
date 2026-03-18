(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/apps_admin_5b6c0372._.js",
"[project]/apps/admin/instrumentation.ts [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/admin/edge-wrapper.js { MODULE => \"[project]/apps/admin/instrumentation.ts [instrumentation-edge] (ecmascript)\" } [instrumentation-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_context__.i("[project]/apps/admin/instrumentation.ts [instrumentation-edge] (ecmascript)"));
modProm.catch(()=>{});
self._ENTRIES["middleware_instrumentation"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}),
]);

//# sourceMappingURL=apps_admin_5b6c0372._.js.map