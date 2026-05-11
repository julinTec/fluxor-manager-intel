## Objetivo

Aumentar o tamanho da logo na Navbar, que está aparecendo muito pequena/discreta no topo da página.

## Alteração

### `src/components/Navbar.tsx`
- Aumentar a altura do `<img>` da logo de `h-10` (~40px) para `h-16` (~64px).
- Aumentar a altura da própria navbar de `h-20` (80px) para `h-24` (96px), para acomodar a logo maior com respiro adequado acima/abaixo.
- Manter `w-auto object-contain` para preservar a proporção e o filtro `brightness-0 invert` para a renderização em branco.

## Arquivos afetados
- `src/components/Navbar.tsx` (apenas tamanhos: `h-20` → `h-24` no container, `h-10` → `h-16` no `<img>`).
