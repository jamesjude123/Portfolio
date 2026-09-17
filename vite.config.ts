import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves under /<repo-name>/ — MUST match your GitHub repo name
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
