# Site — ímpar Propaganda OOH

Site institucional de uma página da **ímpar Propaganda OOH**, mídia exterior em São Luís/MA.

Protótipo: https://marcosleonam.github.io/impar-ooh/
Domínio do cliente (parado, 403): imparooh.com.br

## Stack

Vite + React 19 + Tailwind CSS v4 + lucide-react. Estático, sem backend.

## Rodar

```bash
npm install
npm run dev
npm run build     # gera dist/
```

## Onde mexer

Todo dado editável do cliente mora em **`src/config.js`** — WhatsApp, e-mail, redes,
os sete formatos e as etapas do processo. É o único arquivo que muda de conteúdo.
As cores e fontes ficam em `src/index.css`, no bloco `@theme`.

Marcadores `[CONFIRMAR]` no `config.js` são dados ainda não validados com o cliente.

## Design

Estrutura, tipografia (Oswald/Inter/Playfair) e movimento herdados do design system
`aex.aura.build`; a paleta foi trocada pela da marca da ímpar (navy `#033F57` +
azul `#24A9E1`, amostrados do logo).

**Não copiar o `assets/css/scroll-fixes.css` do template original.** Ele força
`opacity:1` e `transform:none` com `!important` em tudo — existe só para o preview
offline do export e mata todas as animações.

O reveal on-scroll tem fail-safe: a pausa da animação só vale sob `html.js-anim`,
classe posta no `index.html`. Se o JS não carregar, a página aparece inteira e
estática em vez de ficar em branco.

## Deploy

`npm run build` e sobe o conteúdo de `dist/` na branch `gh-pages` (com `.nojekyll`).
Ao migrar para o domínio próprio, trocar `base` no `vite.config.js` de
`'/impar-ooh/'` para `'/'`.
