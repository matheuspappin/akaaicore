;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="23ea1065-6364-65b7-79e4-0b5856e40f5e")}catch(e){}}();
module.exports = [
"[project]/apps/web/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Next.js Instrumentation Hook — OpenTelemetry
 *
 * Ativa tracing distribuído via variáveis de ambiente.
 * Integrado com Vercel Observability (traces em Dashboard → Observability → Traces).
 *
 * Configuração via env: OTEL_SERVICE_NAME, OTEL_EXPORTER_OTLP_ENDPOINT, etc.
 */ __turbopack_context__.s([
    "register",
    ()=>register
]);
globalThis["_sentryNextJsVersion"] = "16.0.10";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring-tunnel";
async function register() {
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const { NodeSDK } = await __turbopack_context__.A("[project]/node_modules/@opentelemetry/sdk-node/build/src/index.js [instrumentation] (ecmascript, async loader)");
            const { getNodeAutoInstrumentations } = await __turbopack_context__.A("[project]/node_modules/@opentelemetry/auto-instrumentations-node/build/src/index.js [instrumentation] (ecmascript, async loader)");
            const sdk = new NodeSDK({
                serviceName: process.env.OTEL_SERVICE_NAME ?? 'akaai-workflow-pro',
                instrumentations: [
                    getNodeAutoInstrumentations({
                        '@opentelemetry/instrumentation-fs': {
                            enabled: false
                        },
                        '@opentelemetry/instrumentation-http': {
                            enabled: true
                        },
                        '@opentelemetry/instrumentation-pg': {
                            enabled: true
                        }
                    })
                ]
            });
            sdk.start();
        } catch  {
        // OpenTelemetry opcional — falha silenciosa se pacotes incompatíveis
        }
    }
}
}),
];

//# debugId=23ea1065-6364-65b7-79e4-0b5856e40f5e
//# sourceMappingURL=apps_web_instrumentation_ts_1e13771d._.js.map