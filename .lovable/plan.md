
# Site FLUXOR — Crescimento Empresarial

Site single-page moderno e premium com 10 seções, estética de consultoria tech, paleta escura com azul vibrante para CTAs.

## Design System

- Paleta: preto #0B0B0B, grafite #1A1A1A, branco #FFFFFF, azul profundo #1C2E4A, azul vibrante #2F80ED (apenas CTAs), cinza claro #F5F7FA, cinza médio #D9DDE3
- Tipografia Inter (já disponível no projeto) com peso variado para hierarquia
- Espaçamento generoso entre seções (py-24 a py-32)
- Bordas finas, ícones lineares (Lucide)

## Seções

1. **Hero** — Fundo escuro (#0B0B0B), headline grande "Crescimento previsível para empresas que querem escalar.", subheadline, botão azul vibrante. Gráfico ascendente animado com SVG (linhas finas, estilo minimalista).

2. **Problema** — Fundo cinza claro (#F5F7FA). Texto emocional com tipografia grande e espaçada. Destaque visual sutil.

3. **O que a Fluxor faz** — Fundo branco. Três blocos com ícones lineares: Dados → Decisões → Estratégia → Crescimento. Layout em grid.

4. **Como funciona** — 4 etapas horizontais (Diagnóstico, Estratégia, Execução, Escala) com ícones, números e descrições. Linha conectora entre etapas. Responsivo: vira vertical no mobile.

5. **Resultados** — Fundo escuro (#1A1A1A). Métricas grandes animadas com contadores (ex: +120%). Barras de progresso ou mini-gráficos SVG.

6. **Diferencial** — Fundo grafite com texto branco forte. "Não somos uma agência..." Layout centrado, impactante.

7. **Simulação** — Fundo cinza claro. Card centralizado com chamada e botão "Simular crescimento" (visual only, sem funcionalidade real).

8. **Dashboard visual** — Mockup de dashboard com gráficos SVG (linhas ascendentes, barras, KPIs). Fundo branco com card elevado simulando uma interface.

9. **CTA Final** — Fundo azul profundo (#1C2E4A). Texto branco, botão azul vibrante "Falar com especialista".

10. **Rodapé** — Fundo #0B0B0B. Logo FLUXOR, tagline, links simples, minimalista.

## Navegação

Header fixo transparente com logo FLUXOR e links âncora para seções principais. Scroll suave. Header ganha fundo sólido ao rolar.

## Animações

- Elementos aparecem com fade-in ao entrar no viewport (Intersection Observer)
- Contadores animados na seção de resultados
- Gráfico SVG do hero com animação de desenho de linha
- Transições suaves nos hovers dos botões

## Componentes

- `Navbar` — header fixo com transparência
- `HeroSection` — headline + gráfico animado
- `ProblemSection` — texto emocional
- `WhatWeDoSection` — grid de blocos
- `ProcessSection` — 4 etapas
- `ResultsSection` — métricas animadas
- `DifferentialSection` — texto impactante
- `SimulationSection` — CTA visual
- `DashboardSection` — mockup de dashboard
- `FinalCTASection` — conversão final
- `Footer` — rodapé institucional

Cada seção será um componente separado em `src/components/`, composto na página Index.

## Detalhes Técnicos

- CSS variables atualizadas no index.css para a nova paleta
- Animações via CSS + hook customizado `useInView` com Intersection Observer
- Gráficos SVG inline (sem dependências externas)
- Totalmente responsivo (mobile-first)
- Sem dependências adicionais necessárias
