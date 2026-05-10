## Objetivo

Comunicar com clareza que a Fluxor usa **Inteligência Artificial** como parte do sistema — automatizando tarefas, gerando insights e acelerando decisões — sem quebrar a identidade visual atual (preto, grafite, azul vibrante).

## Onde inserir IA no site

### 1. Hero — reforço sutil
Adicionar uma pequena tag/eyebrow acima do H1:
`SISTEMAS COM INTELIGÊNCIA ARTIFICIAL`

### 2. Subheadline do Hero — micro-ajuste
De:
> "Implantamos um sistema completo integrando Comercial, Financeiro, Operacional e BI em um único fluxo de crescimento."

Para:
> "Implantamos um sistema completo com **Inteligência Artificial** integrando Comercial, Financeiro, Operacional e BI em um único fluxo de crescimento."

### 3. Nova seção dedicada: "Inteligência Artificial aplicada ao seu negócio"
Inserida após `SystemOverviewSection` (antes de `ProcessSection`). Fundo escuro (`fluxor-black`/`fluxor-graphite`) para contraste com as seções claras vizinhas.

Estrutura:
- Eyebrow: `INTELIGÊNCIA ARTIFICIAL`
- Título: **"IA que trabalha junto com sua operação"**
- Subtítulo: "Automatizamos tarefas repetitivas, geramos insights em tempo real e antecipamos decisões — tudo dentro do seu sistema."
- Grid de **3 cards** (ícones lucide):
  1. **Automação de tarefas** (`Bot`) — "Rotinas manuais executadas automaticamente, sem retrabalho."
  2. **Insights inteligentes** (`Sparkles`) — "A IA analisa seus dados e mostra oportunidades e riscos."
  3. **Previsões e alertas** (`TrendingUp`) — "Antecipe quedas de venda, atrasos e desvios financeiros."

### 4. SystemOverviewSection — adicionar 5º item
Card **"IA e automação inteligente"** (`Sparkles`) ao lado dos 4 atuais. Grid passa para 5 colunas em lg.

### 5. WhatWeDoSection — atualizar subtítulo
> "Criamos e implantamos um sistema sob medida, **potencializado por IA**, para sua empresa operar com controle, previsibilidade e escala."

### 6. ProcessSection — incluir IA na etapa 03
> "Conectamos áreas, aplicamos IA e criamos dashboards inteligentes."

### 7. Calculadora (SimulationSection)
> "Estimamos que até 70% desse custo pode ser eliminado com **automação, IA**, processos estruturados e BI integrado."

## Arquivos afetados

- `src/components/HeroSection.tsx` — eyebrow + subheadline
- `src/components/SystemOverviewSection.tsx` — novo card IA
- `src/components/WhatWeDoSection.tsx` — subtítulo
- `src/components/ProcessSection.tsx` — texto da etapa 03
- `src/components/SimulationSection.tsx` — texto explicativo
- **Novo:** `src/components/AISection.tsx`
- `src/pages/Index.tsx` — importar e posicionar `AISection` após `SystemOverviewSection`

## Identidade visual

- Preto/grafite de fundo na nova seção, azul vibrante `#2F80ED` para ícones e destaques
- Ícones `lucide-react` (`Bot`, `Sparkles`, `TrendingUp`)
- Animações `useInView` consistentes com o resto do site
- Sem verde, sem emojis, mantendo o tom premium/corporativo