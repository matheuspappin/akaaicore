;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="f00d4038-755c-fa64-8356-3dc389294f30")}catch(e){}}();
module.exports = [
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/node_modules/.pnpm/@opentelemetry+resources@2.6.0_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/execAsync.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "execAsync",
    ()=>execAsync
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
;
;
const execAsync = __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"](__TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["exec"]); //# sourceMappingURL=execAsync.js.map
}),
"[project]/node_modules/.pnpm/@opentelemetry+resources@2.6.0_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId-bsd.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "getMachineId",
    ()=>getMachineId
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$6$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$execAsync$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@opentelemetry+resources@2.6.0_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/execAsync.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
;
;
;
async function getMachineId() {
    try {
        const result = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile('/etc/hostid', {
            encoding: 'utf8'
        });
        return result.trim();
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].debug(`error reading machine id: ${e}`);
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$resources$40$2$2e$6$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0$2f$node_modules$2f40$opentelemetry$2f$resources$2f$build$2f$esm$2f$detectors$2f$platform$2f$node$2f$machine$2d$id$2f$execAsync$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["execAsync"])('kenv -q smbios.system.uuid');
        return result.stdout.trim();
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$9$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"].debug(`error reading machine id: ${e}`);
    }
    return undefined;
} //# sourceMappingURL=getMachineId-bsd.js.map
}),
];

//# debugId=f00d4038-755c-fa64-8356-3dc389294f30
//# sourceMappingURL=%5Broot-of-the-server%5D__67477d61._.js.map