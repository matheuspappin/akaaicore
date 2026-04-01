# 🚀 AKAAI CORE - Motor de Verticalização de Negócios v0.1.2

![AKAAI CORE](public/akaaihub-logo.png)

> **A Plataforma Definitiva para Escala de Negócios Verticais.**
> Um ecossistema SaaS White-Label, Multi-Tenant e Omnichannel que transforma qualquer nicho de mercado em uma solução de software completa e escalável.
>
> **Also known as Artificial Intelligence HUB.**

---

## 📋 Índice

- [Ecossistema Técnico](#-ecossistema-técnico)
- [Visão Executiva](#-visão-executiva)
- [Arquitetura e Microserviços](#-arquitetura-e-microserviços)
- [Segurança e Multi-Tenancy](#-segurança-e-multi-tenancy)
- [Verticalizações e Nichos](#-verticalizações-e-nichos)
- [Modelo de Negócio](#-modelo-de-negócio)
- [Stack Tecnológica (Expert Choice)](#-stack-tecnológica-expert-choice)
- [Módulos e Funcionalidades Core](#-módulos-e-funcionalidades-core)
- [Implementação e Banco de Dados](#-implementação-e-banco-de-dados)
- [Guia de Instalação](#-guia-de-instalação)
- [Documentação de Referência](#-documentação-de-referência)
- [Roadmap 2026](#-roadmap-2026)

---

## 🔧 Ecossistema Técnico

### Identificação do Projeto

| Item | Valor |
| :--- | :--- |
| **Nome do pacote** | `workflow-pro-builder` |
| **Versão** | 0.1.2 |
| **Gerenciador de pacotes** | pnpm 8.15.0+ |
| **Runtime** | Node.js 20+ (LTS) |
| **Arquitetura** | Monorepo (Turbo) |

### Estrutura de Pastas Estratégica

```text
workflow-pro-builder/
├── app/                    # Next.js 16 App Router (Core UI)
│   ├── admin/              # Portal Super Admin (God Mode)
│   ├── partner/            # Portal do Parceiro (White-Label)
│   ├── dashboard/          # Dashboard genérico multi-tenant
│   ├── solutions/          # Verticalizações (Fire, Agro, Dance, etc.)
│   └── api/                # API Endpoints com Middlewares de Proteção
├── microservices/
│   └── fiscal-php/         # Emissor de NF-e (PHP 8.2 + Slim)
├── satellite-processor/    # Processamento de Imagens Satélite (Python)
├── core/                   # Lógica de negócio agnóstica
├── components/             # Biblioteca de componentes React/Radix UI
├── config/                 # Dicionários de nicho e rotas dinâmicas
├── database/migrations/    # 138+ Migrações SQL (PostgreSQL/Supabase)
├── scripts/                # 59+ Scripts de manutenção e automação
└── mcps/                   # Servidores MCP (Model Context Protocol)
```

### Scripts Principais (Turbo-Powered)

| Comando | Descrição |
| :--- | :--- |
| `pnpm dev` | Inicia o ecossistema completo via Turborepo |
| `pnpm build` | Build otimizado de todas as aplicações |
| `pnpm db:init` | Inicializa o banco de dados e sementes (Seeds) |
| `pnpm db:test` | Valida integridade da conexão com Supabase/Postgres |
| `pnpm migrate:[id]` | Aplica migrações específicas (ex: 122, 123, 124, 125) |
| `pnpm test` | Executa suite de testes Jest (Unitários) |
| `pnpm cypress:run` | Executa testes E2E em ambiente headless |

---

## 🎯 Visão Executiva

O **AKAAI CORE** representa a evolução dos sistemas ERP tradicionais para um **Motor de Verticalização Inteligente**. Nossa plataforma permite que qualquer negócio — desde estúdios de dança até empresas de engenharia — possa operar com software sob medida, mantendo a robustez de uma infraestrutura enterprise.

### 🏆 Diferenciais Competitivos

| Característica | Impacto no Negócio |
| :--- | :--- |
| **Verticalização Real-Time** | Adaptação instantânea a qualquer nicho de mercado via config |
| **IA Integrada** | Automação de 80% das operações repetitivas com Gemini/OpenAI |
| **Isolamento de Tenants** | Segurança de dados absoluta com Row Level Security (RLS) |
| **White-Label Nativo** | Domínios customizados, logos e cores por parceiro |
| **Split de Pagamentos** | Monetização automática para parceiros via Stripe Connect |

---

## 🏗️ Arquitetura e Microserviços

O AKAAI CORE utiliza uma arquitetura híbrida para maximizar performance e especialização:

1.  **Core Engine (Next.js 16)**: Gerencia a interface, autenticação e orquestração de módulos.
2.  **Fiscal Service (PHP)**: Microserviço dedicado para emissão de Notas Fiscais (NF-e/NFC-e), garantindo conformidade fiscal brasileira.
3.  **Satellite Processor (Python)**: Engine de processamento geoespacial que consome dados do Sentinel Hub e NASA FIRMS para o vertical de Agronegócio (AgroFlow AI).
4.  **AI Orchestrator**: Roteamento inteligente entre Google Gemini e OpenAI, com fine-tuning contextual por nicho.

---

## 🛡️ Segurança e Multi-Tenancy

Implementamos um rigoroso modelo de isolamento para garantir a integridade dos dados entre diferentes inquilinos (Tenants):

-   **Row Level Security (RLS)**: Todas as 138+ tabelas possuem políticas de RLS ativas no PostgreSQL.
-   **GuardModule**: Middleware server-side que valida se o Studio possui o módulo específico contratado antes de permitir a execução de qualquer Server Action ou rota de API.
-   **Enforcement de Status**: Bloqueio automático em tempo de execução para studios com `status = 'inactive'` ou trial expirado.
-   **Isolamento de Cache**: Upstash Redis configurado com prefixos por tenant para evitar colisão de dados.

---

## 🎪 Verticalizações e Nichos

Suportamos **70+ nichos** configuráveis dinamicamente.

### Verticais em Produção

| Solução | Slug | Perfil Público | Funcionalidades Específicas |
| :--- | :--- | :--- | :--- |
| **Fire Protection** | `fire-protection` | Engenharia/Segurança | QR Asset Tracking, Vistorias Digitais, PPCI |
| **AgroFlow AI** | `agroflowai` | Agronegócio/Campo | Monitoramento Satélite, NDVI, Alertas de Fogo |
| **DanceFlow** | `estudio-de-danca` | Artes/Educação | Grade Inteligente, Chamada QR, Gamificação |

---

## 💼 Modelo de Negócio

### Estrutura de Planos SaaS

| Plano | Preço | Limites | Verticalizações |
| :--- | :--- | :--- | :--- |
| **Starter** | $299/mês | 100 alunos, 3 usuários | 1 verticalização |
| **Professional** | $799/mês | 500 alunos, 10 usuários | 2 verticalizações |
| **Enterprise** | $1999/mês | Ilimitado, 25 usuários | Todas verticalizações |

### Split para Parceiros
- **Comissão Recorrente**: 20-30% sobre assinaturas mensais via Stripe Connect.
- **Taxas de Transação**: Splits automáticos de até 5% sobre pagamentos processados.

---

## 🛠️ Stack Tecnológica (Expert Choice)

### Frontend (Next.js 16 + React 19)
- **Framework**: Next.js 16.0.10 (App Router), React 19.2.0, TypeScript 5
- **Estilização**: Tailwind CSS 4.1.9, Framer Motion 12.31.0
- **Visualização**: Recharts 2.15.4, Leaflet 1.9.4 (Mapas), React Three Fiber (3D)
- **QR Code**: html5-qrcode (Leitura), react-qr-code (Geração)
- **Documentos**: jsPDF + jspdf-autotable, react-signature-canvas (Assinatura Digital)

### Backend & Cloud
- **DB**: Supabase (PostgreSQL), RLS, Realtime, Storage
- **Cache**: Upstash Redis (Edge-ready)
- **Pagamentos**: Stripe 20.3.1, Stripe Connect Express
- **WhatsApp**: Evolution API com webhooks HMAC
- **Monitoramento**: Sentry 10.38.0, Vercel Analytics

---

## 📊 Módulos e Funcionalidades Core

| Módulo | Funcionalidades | Status |
| :--- | :--- | :--- |
| **CRM 360°** | Funil de vendas, Automação de Leads, Histórico Unificado | ✅ Ativo |
| **Financeiro** | Fluxo de Caixa, DRE, Conciliação Bancária, Invoices | ✅ Ativo |
| **Omnichannel** | Integração WhatsApp + Email Transacional Automatizado | ✅ Ativo |
| **AI Assistant** | Chatbot treinado, Análise de Documentos, Roteamento IA | ✅ Ativo |
| **WMS Lite** | Controle de Estoque Multi-unidade e Rastreabilidade | ✅ Ativo |
| **POS / PDV** | Frente de caixa rápido com gestão de pedidos | ✅ Ativo |

---

## ⚙️ Implementação e Banco de Dados

### Evolução Estrutural (138+ Migrações)
- **01-40**: Core ERP, Marketplace, Invoices e Auth.
- **41-80**: Módulos de OS, Vistorias e Fire Protection (PPCI).
- **81-120**: Inteligência Artificial, Satellite Processing e DanceFlow.
- **121-138**: LGPD Compliance, Affiliate Commissions, Annual Plans e System Modules.

### Segurança de API Endpoints
Todas as rotas críticas utilizam `checkStudioAccess` para validação de ownership e `requireStudioAccess` para validação de status de licença em tempo real.

---

## 🚀 Guia de Instalação

### Requisitos Mínimos
- **Node.js**: 20+ (LTS recomendado)
- **pnpm**: 8+
- **Supabase**: Projeto configurado com PostgreSQL.
- **AI Keys**: Google Gemini ou OpenAI.

### Instalação em 3 Passos
```bash
# 1. Instalação e Configuração
pnpm install
cp .env.example .env.local # Edite suas chaves

# 2. Inicialização do Banco
pnpm db:init

# 3. Desenvolvimento
pnpm dev
# Web: http://127.0.0.1:3000 | Admin: http://127.0.0.1:3001
```

---

## 📚 Documentação de Referência

### Guias Técnicos
- **[Supabase Integration](./SUPABASE_INTEGRATION_COMPLETE.md)**: Setup completo do banco.
- **[Catarina Robustness Plan](./docs/CATARINA-ROBUSTNESS-PLAN.md)**: Roadmap de evolução IA.
- **[Plugin Architecture](./docs/PLUGIN-ARCHITECTURE.md)**: Estrutura de verticalizações.
- **[Payment Gateway](./docs/PAYMENT-GATEWAY.md)**: Documentação de pagamentos (PIX/Stripe).

### Auditoria e Qualidade
- **[Audit Ecosystem](./AUDIT-ECOSYSTEM.md)**: Relatório de segurança e isolamento multi-tenant.
- **[QA Analysis Report](./QA_ANALYSIS_REPORT.md)**: Relatório de qualidade e testes.

---

## 🎯 Roadmap 2026

- **Q1 (Finalizado)**: Lançamento do `fiscal-php` e `satellite-processor`. Migração para Next.js 16 e React 19. Implementação de planos anuais e comissões de afiliados.
- **Q2**: Lançamento das Apps Nativas (iOS/Android) via Flutter. Suporte para múltiplos domínios por tenant.
- **Q3**: Integração IoT para detecção proativa (Fire Protection). AI Agent Platform para automação de faturamento.
- **Q4**: Global Expansion (Suporte multi-moeda e multi-idioma v2). Machine Learning para previsões de churn e LTV.

---

## 📄 Licença e Contato

© 2026 AKAAI CORE. Engine of Excellence.

- **Website**: [akaai.com](https://akaai.com)
- **Suporte**: [support@akaai.com](mailto:support@akaai.com)
- **Parcerias**: [partners@akaai.com](mailto:partners@akaai.com)

**Built with ❤️ by the AKAAI Team**
*Transformando negócios em todas as verticalizações possíveis.*
