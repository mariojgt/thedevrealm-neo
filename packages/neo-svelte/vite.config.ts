import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte({ compilerOptions: { runes: false } })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TheDevRealmNeoSvelte',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['svelte', 'svelte/internal'],
      output: { exports: 'named' },
    },
  },
})
