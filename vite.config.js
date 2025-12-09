import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/grok-dashboard/'  // 🔥 critical: match your repo name
})
