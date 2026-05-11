## Objetivo

Substituir o texto "FLUXOR" da Navbar pela logo oficial enviada, mantendo a identidade visual.

## Alterações

### 1. Asset
- Copiar `user-uploads://5-2.png` para `src/assets/fluxor-logo.png` (sobrescrevendo a versão atual, já usada também no Footer — assim Navbar e Footer ficam consistentes com a nova arte).

### 2. `src/components/Navbar.tsx`
- Importar: `import fluxorLogo from "@/assets/fluxor-logo.png"`.
- Substituir o `<a>` com texto `FLUXOR` por:
  ```tsx
  <a href="#" className="flex items-center">
    <img
      src={fluxorLogo}
      alt="Fluxor — Inteligência, Gestão e Crescimento"
      className="h-10 w-auto object-contain brightness-0 invert"
    />
  </a>
  ```
- Altura `h-10` (~40px) para se ajustar à navbar `h-20`.
- Filtro `brightness-0 invert` para renderizar a logo em branco sobre o fundo escuro/transparente da navbar (mesma técnica já usada no Footer).

## Arquivos afetados
- `src/assets/fluxor-logo.png` (substituído pela nova arte)
- `src/components/Navbar.tsx` (logotipo textual → `<img>`)

## Observação
- Como o Footer já consome `@/assets/fluxor-logo.png`, ele passa a exibir automaticamente a nova versão da logo, mantendo coerência visual entre topo e rodapé.
