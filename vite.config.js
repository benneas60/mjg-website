import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mjg-website/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
  server: {
    port: 5173,
    open: true,
  },
})
