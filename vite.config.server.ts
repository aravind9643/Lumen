import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

/**
 * Server build, used only by `scripts/prerender.mjs`.
 *
 * Emits Node-loadable modules into `dist/server/` so the prerenderer can call
 * `render(url)` and read the content registry. Output is deleted after
 * prerendering — it never ships.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  build: {
    ssr: true,
    outDir: 'dist/server',
    emptyOutDir: true,
    // Keep the build from wiping dist/ (the client output lives there).
    copyPublicDir: false,
    rollupOptions: {
      input: {
        'entry-server': path.resolve(import.meta.dirname, 'src/entry-server.tsx'),
        content: path.resolve(import.meta.dirname, 'src/content/index.ts'),
        config: path.resolve(import.meta.dirname, 'src/config.ts'),
      },
      output: { format: 'esm', entryFileNames: '[name].js' },
    },
  },
})
