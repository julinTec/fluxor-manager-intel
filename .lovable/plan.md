## Objetivo

Substituir o texto "FLUXOR" do rodapé pela logo oficial enviada e adicionar o CNPJ da empresa ao final da página.

## Alterações

### 1. Logo da empresa
- Copiar `user-uploads://5.png` para `src/assets/fluxor-logo.png`.
- Importar a logo em `src/components/Footer.tsx` como ES6 module.
- Substituir o bloco textual `<p>FLUXOR</p>` + tagline por `<img src={fluxorLogo} alt="Fluxor — Inteligência, Gestão e Crescimento" />`, com altura controlada (~`h-16`) e `object-contain`.
- Como a logo é escura sobre fundo branco e o rodapé é `fluxor-black`, aplicar `brightness-0 invert` (ou similar) para renderizar a logo em branco, mantendo legibilidade e identidade.
- Remover a tagline em texto, já que a logo enviada já a contém ("Inteligência. Gestão. Crescimento.").

### 2. CNPJ no rodapé
- Em `src/components/Footer.tsx`, na faixa final (junto ao copyright), adicionar uma linha:
  > `CNPJ: 66.663.020/0001-50`
- Estilo: mesmo tom discreto do copyright (`text-fluxor-gray-medium/50 text-xs`), exibido acima ou ao lado do `© {year} Fluxor...`.

### 3. (Opcional, se fizer sentido visual) Navbar
- Não alterar nesta etapa — manter escopo apenas no rodapé conforme pedido.

## Arquivos afetados

- **Novo asset:** `src/assets/fluxor-logo.png` (cópia do upload)
- `src/components/Footer.tsx` — troca do texto pela logo + linha do CNPJ

## Identidade visual

- Logo renderizada em branco sobre o fundo preto do rodapé (via filtro CSS), mantendo o tom premium.
- CNPJ discreto, sem destaque, apenas como informação institucional padrão de rodapé.
