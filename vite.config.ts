import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure for SPA routing in development
  server: {
    historyApiFallback: true,
    port: 5173,
    host: true
  },
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Optimize for production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          forms: ['react-hook-form', 'react-hot-toast']
        }
      }
    }
  },
  // Preview configuration (for local testing of built app)
  preview: {
    port: 4173,
    host: true
  }
})