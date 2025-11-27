import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages, set base: "/repo-name/"
export default defineConfig({
  plugins: [react()],
  base: "/sytpro-web/",   // Change later when deploying to GitHub Pages
})
