
# Calculadora interativa de valor/perda operacional

Substituir `SimulationSection.tsx` por uma calculadora funcional com sliders e resultados em tempo real.

## Alterações

### 1. Reescrever `src/components/SimulationSection.tsx`

- Estado com `useState` para 3 variáveis: `hoursPerWeek` (8), `hourlyRate` (60), `people` (3)
- Cálculos reativos: horas/mês = hours × people × 4; custo mensal = horas/mês × rate; economia = 70%
- Layout 2 colunas (lg) / 1 coluna (mobile)
- Coluna esquerda: card branco com 3 sliders (`<input type="range">`)
- Coluna direita: card escuro (bg-fluxor-graphite) com 3 métricas calculadas + texto explicativo + botão CTA
- Header com tag "SIMULAÇÃO DE VALOR", título com "não automatizar?" em azul, subtítulo

### 2. Adicionar estilos de slider em `src/index.css`

Classe `.slider-fluxor` com estilização cross-browser (webkit + moz) para thumb e track usando azul vibrante #2F80ED, sem verde.

Nenhum outro arquivo precisa ser alterado — a seção já está importada no Index.tsx.
