import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base = subpasta do GitHub Pages. Trocar para '/' quando for pro domínio próprio.
export default defineConfig({
  base: '/impar-ooh/',
  plugins: [react(), tailwindcss()],
})
