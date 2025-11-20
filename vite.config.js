import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config tuned for sandboxed preview environment
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    // Allow the reverse-proxy host used by the preview environment
    allowedHosts: true,
  },
})
