import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones de producción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor code para mejor caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
        }
      }
    },
    // Aumentar tamaño límite de chunks
    chunkSizeWarningLimit: 1000,
  },
  // Optimizaciones de servidor de desarrollo
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
  // Optimizaciones de assets
  assetsInclude: ['**/*.webp', '**/*.mp4'],
})
