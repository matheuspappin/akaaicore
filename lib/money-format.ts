/**
 * Entrada monetária / numérica no padrão brasileiro: vírgula como decimal e ponto como milhar (ex.: 1.234,56).
 */

export function parseMoneyInput(raw: string): number {
  let s = raw.trim().replace(/\s/g, "")
  if (!s) return 0

  if (s.includes(",") && s.includes(".")) {
    const lastComma = s.lastIndexOf(",")
    const lastDot = s.lastIndexOf(".")
    if (lastComma > lastDot) {
      s = s.replace(/\./g, "").replace(",", ".")
    } else {
      s = s.replace(/,/g, "")
    }
  } else if (s.includes(",")) {
    s = s.replace(",", ".")
  }

  const n = parseFloat(s)
  return Number.isFinite(n) ? n : 0
}

export function formatMoneyBr(value: number): string {
  if (!Number.isFinite(value)) return ""
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}
