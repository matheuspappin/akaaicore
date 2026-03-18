/**
 * Next.js Instrumentation Hook — OpenTelemetry
 *
 * Ativa tracing distribuído via variáveis de ambiente.
 * Integrado com Vercel Observability (traces em Dashboard → Observability → Traces).
 *
 * Configuração via env: OTEL_SERVICE_NAME, OTEL_EXPORTER_OTLP_ENDPOINT, etc.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    try {
      const { NodeSDK } = await import('@opentelemetry/sdk-node')
      const { getNodeAutoInstrumentations } = await import('@opentelemetry/auto-instrumentations-node')

      const sdk = new NodeSDK({
        serviceName: process.env.OTEL_SERVICE_NAME ?? 'akaai-workflow-pro',
        instrumentations: [
          getNodeAutoInstrumentations({
            '@opentelemetry/instrumentation-fs': { enabled: false },
            '@opentelemetry/instrumentation-http': { enabled: true },
            '@opentelemetry/instrumentation-pg': { enabled: true },
          }),
        ],
      })

      sdk.start()
    } catch {
      // OpenTelemetry opcional — falha silenciosa se pacotes incompatíveis
    }
  }
}
