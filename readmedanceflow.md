# 💃 DanceFlow - Dossiê Executivo da Vertical (AKAAI CORE)

> **Este documento é uma análise especializada focada exclusivamente na vertical "DanceFlow" (Artes & Movimento), integrante do ecossistema AKAAI CORE (Workflow Pro Builder).**

## 🎯 1. Visão Executiva e Proposta de Valor
O **DanceFlow** é o motor de verticalização construído especificamente para **Estúdios de Dança, Artes, Movimento e Escolas de Performance**. Diferente de um ERP genérico, ele carrega em seu core a ontologia exata do negócio, moldando toda a infraestrutura para a realidade de turmas, aulas, modalidades, professores e alunos. 

Ele atua sob o modelo de negócio **Monetário (MONETARY)** focado em assinaturas/mensalidades (recorrência) e vendas pontuais (PDV), substituindo o modelo básico de créditos avulsos, garantindo maior previsibilidade financeira para os donos de estúdios.

---

## 🗣️ 2. Ontologia e Vocabulário Específico
Toda a plataforma adapta seus termos dinamicamente (via `niche-dictionary.ts`) para falar a língua do cliente:

* **Negócio / Estabelecimento:** Estúdio (Studio)
* **Cliente Final:** Aluno (Student)
* **Prestador / Operador:** Professor (Teacher)
* **Unidade de Serviço:** Aula (Class)
* **Categoria / Agrupamento:** Modalidade (Modality)

---

## 🏗️ 3. Arquitetura de Portais Exclusivos
A vertical DanceFlow opera através de rotas dedicadas (`/solutions/estudio-de-danca`) e provê três interfaces otimizadas por perfil:

1. **Portal do Estúdio (Dashboard):** Controle gerencial, comercial e operacional para o dono do estúdio e equipe administrativa.
2. **Portal do Aluno (Student Portal):** Interface *mobile/web* exclusiva para o aluno. Permite acesso ao QR Code de entrada, acompanhamento de turmas, pagamentos (financeiro), desempenho em gamificação e comunicados.
3. **Portal do Professor (Teacher Portal):** Ferramenta mobile e desktop focada na operação de sala de aula: chamada digital, lançamento de conteúdo programático, agenda de aulas e envio de feedback individual.

---

## 🧩 4. Módulos e Funcionalidades Core (Exclusivas da Vertical)
As funcionalidades a seguir foram desenvolvidas e ativadas especificamente para a vertical de dança (com base nas migrações SQL 61 a 70):

* **Scanner QR (Controle de Acesso):** Portaria digital integrada. O aluno apresenta seu QR Code via aplicativo e o sistema valida a adimplência e a presença na turma em tempo real, sem necessidade de hardware caro.
* **Grade Inteligente (Classes & Schedule):** Gestão e otimização avançada de turmas, alocação de salas, professores e horários de aulas. Controle automático de conflitos de agenda.
* **Pagamentos de Professores (Payroll):** Módulo dedicado para o cálculo complexo de repasses e horas-aula dos professores e instrutores do estúdio (`/dashboard/pagamentos-professores`).
* **Gamificação:** Sistema nativo de pontos, conquistas e ranking de alunos. Altamente focado em engajamento, retenção infantil e juvenil.
* **Aulas ao Vivo (Live Classes):** Infraestrutura para gestão e linkagem de aulas remotas ou ensino híbrido (`/dashboard/ao-vivo`), crucial para masterclasses ou alunos EAD.
* **Consolidação Financeira & Monetary Scanner:** Fechamento mensal automático (`71_danceflow_consolidation`) que gera relatórios de performance de turmas, rentabilidade por modalidade e saúde do negócio (mensalidades ativas, inadimplência e projeção de MRR).
* **Gestão de Eventos e Shows (Em Roadmap de Evolução):** Organização de apresentações de final de ano, festivais, inscrições e gestão de ingressos.
* **Multi-Unidade (Multi-Unit):** Suporte nativo para estúdios ou academias com filiais, unificando relatórios de caixa e base de alunos.

---

## 🧭 5. Estrutura de Navegação da Gestão (Sitemap do Estúdio)

A navegação (`dance-studio-nav.ts`) é dividida em três pilares estratégicos de gestão:

### Operacional (O Core da Dança)
* **Dashboard:** Visão geral diária.
* **Alunos:** CRM do alunado, anamnese e histórico.
* **Turmas & Aulas:** Grade horária.
* **Professores:** Gestão do corpo docente.
* **Pagamentos Professores:** Borderôs e repasses.
* **Scanner QR:** Interface de validação de catraca/porta.
* **Aulas ao Vivo:** Gestão de streaming/links de aulas.

### Comercial (Atração e Venda)
* **PDV (Ponto de Venda):** Venda rápida de uniformes, sapatilhas, garrafinhas e matrículas de balcão.
* **Clientes (CRM / Leads):** Gestão de aulas experimentais e funil de conversão.
* **WhatsApp:** Comunicação omnichannel, alertas de faltas e cobranças.
* **Chat IA:** Automação de atendimento via Gemini/OpenAI para responder dúvidas de horários e preços.

### Gestão (Backoffice e Saúde Financeira)
* **Gamificação:** Controle das regras de pontos do estúdio.
* **Financeiro:** Fluxo de caixa, recebimentos de mensalidades, PIX e cartões (via Stripe).
* **Relatórios:** BI de rentabilidade por turma/modalidade.
* **Emissor Fiscal (NF-e):** Emissão automatizada de notas de serviço (NFS-e).
* **Estoque:** Controle de itens de loja/boutique de dança.

---

## ⚙️ 6. Implementação Técnica e Banco de Dados
No contexto do banco de dados (PostgreSQL via Supabase), o DanceFlow isola os dados via modelo *Multi-Tenant* (`studio_id`), garantindo RLS (Row Level Security).

**Principais Migrações Exclusivas:**
* **`70_danceflow_monetary_scanner.sql`:** Atualiza o modelo de cobrança da vertical inteira para `MONETARY` e habilita permanentemente os módulos `scanner`, `gamification`, `multi_unit`, entre outros.
* **`71_danceflow_consolidation.sql`:** Configura as regras de fechamento financeiro consolidadas.
* **`72_fix_danceflow_slug.sql`:** Corrige e estabiliza as rotas para `/solutions/estudio-de-danca`.

## 📈 7. O Impacto Estratégico (Diferencial)
Enquanto a maioria das escolas de dança utiliza planilhas misturadas com sistemas genéricos de academias de ginástica, o **DanceFlow** cria um ecossistema focado na cultura do movimento: do acompanhamento individual do aluno em sala (pelo App do Professor) até a catraca virtual (QR Code), transformando o estúdio em uma operação SaaS Enterprise escalável.