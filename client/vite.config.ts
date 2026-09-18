import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    proxy: {
      // Backend (FastAPI) doesn't exist until Phase 7 — this just means every
      // fetch to /api/* is ready to go the moment it does, no code changes needed.
      '/api': { target: 'http://localhost:8000', changeOrigin: true },
    },
  },
})
