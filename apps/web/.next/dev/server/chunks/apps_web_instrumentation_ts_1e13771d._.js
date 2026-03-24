;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="caba0a07-988d-d49c-4912-437757124a38")}catch(e){}}();
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
globalThis["__SENTRY_SERVER_MODULES__"] = {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "1.2.2",
    "@radix-ui/react-alert-dialog": "1.1.4",
    "@radix-ui/react-aspect-ratio": "1.1.1",
    "@radix-ui/react-avatar": "1.1.2",
    "@radix-ui/react-checkbox": "1.1.3",
    "@radix-ui/react-collapsible": "1.1.2",
    "@radix-ui/react-context-menu": "2.2.4",
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-hover-card": "1.1.4",
    "@radix-ui/react-label": "2.1.1",
    "@radix-ui/react-menubar": "1.1.4",
    "@radix-ui/react-navigation-menu": "1.2.3",
    "@radix-ui/react-popover": "1.1.4",
    "@radix-ui/react-progress": "1.1.1",
    "@radix-ui/react-radio-group": "1.2.2",
    "@radix-ui/react-scroll-area": "1.2.2",
    "@radix-ui/react-select": "2.1.4",
    "@radix-ui/react-separator": "1.1.1",
    "@radix-ui/react-slider": "1.2.2",
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-switch": "1.1.2",
    "@radix-ui/react-tabs": "1.1.2",
    "@radix-ui/react-toast": "1.2.4",
    "@radix-ui/react-toggle": "1.1.1",
    "@radix-ui/react-toggle-group": "1.1.1",
    "@radix-ui/react-tooltip": "1.1.6",
    "@react-three/drei": "^10.7.7",
    "@react-three/fiber": "^9.5.0",
    "@opentelemetry/auto-instrumentations-node": "^0.71.0",
    "@opentelemetry/exporter-trace-otlp-http": "^0.213.0",
    "@opentelemetry/sdk-node": "^0.213.0",
    "@sentry/nextjs": "^10.38.0",
    "@sentry/node": "^10.38.0",
    "@supabase/ssr": "^0.8.0",
    "@supabase/supabase-js": "^2.95.3",
    "@upstash/ratelimit": "^2.0.8",
    "@upstash/redis": "^1.36.2",
    "@vercel/analytics": "1.3.1",
    "@vercel/speed-insights": "^1.3.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.0.4",
    "date-fns": "4.1.0",
    "dotenv": "^17.3.1",
    "embla-carousel-react": "8.5.1",
    "fast-xml-parser": "^5.3.5",
    "framer-motion": "^12.31.0",
    "html5-qrcode": "^2.3.8",
    "input-otp": "1.4.1",
    "jspdf": "^4.2.0",
    "jspdf-autotable": "^5.0.7",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.454.0",
    "next": "16.0.10",
    "next-themes": "^0.4.6",
    "nodemailer": "^8.0.1",
    "pino": "^10.3.1",
    "pino-pretty": "^13.1.3",
    "pino-sentry": "^0.15.0",
    "postgres": "^3.4.8",
    "react": "19.2.0",
    "react-day-picker": "9.8.0",
    "react-dom": "19.2.0",
    "react-hook-form": "^7.60.0",
    "react-leaflet": "^5.0.0",
    "react-qr-code": "^2.0.18",
    "react-resizable-panels": "^2.1.7",
    "react-signature-canvas": "^1.1.0-alpha.2",
    "recharts": "2.15.4",
    "resend": "^6.9.3",
    "sonner": "^1.7.4",
    "stripe": "^20.3.1",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.183.1",
    "vaul": "^1.1.2",
    "xlsx": "^0.18.5",
    "zod": "3.25.76",
    "@tailwindcss/postcss": "^4.1.9",
    "@types/leaflet": "^1.9.21",
    "@types/node": "^22",
    "@types/nodemailer": "^7.0.9",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/react-signature-canvas": "^1.0.7",
    "@types/three": "^0.183.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5",
    "tailwindcss": "^4.1.9",
    "tw-animate-css": "1.3.3",
    "typescript": "^5"
};
globalThis["_sentryNextJsVersion"] = "16.0.10";
globalThis["_sentryRewritesTunnelPath"] = "/monitoring-tunnel";
async function register() {
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const { NodeSDK } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@opentelemetry+sdk-node@0.213.0_@opentelemetry+api@1.9.0/node_modules/@opentelemetry/sdk-node/build/src/index.js [instrumentation] (ecmascript, async loader)");
            const { getNodeAutoInstrumentations } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@opentelemetry+auto-instrumentations-node@0.71.0_@opentelemetry+api@1.9.0_@opentelemetry+core@2.6.0/node_modules/@opentelemetry/auto-instrumentations-node/build/src/index.js [instrumentation] (ecmascript, async loader)");
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

//# debugId=caba0a07-988d-d49c-4912-437757124a38
//# sourceMappingURL=apps_web_instrumentation_ts_1e13771d._.js.map