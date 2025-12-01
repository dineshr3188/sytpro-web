import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying to GitHub Pages, set base: "/repo-name/"
export default defineConfig({
  plugins: [react()],
  define: {
      // 🔥 Force the production build to include API base URL
      'import.meta.env.VITE_API_BASE': JSON.stringify('https://api.sytpro.in/api')
    }
})
