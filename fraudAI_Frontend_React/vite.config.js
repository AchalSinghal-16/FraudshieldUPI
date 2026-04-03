import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This polyfills 'process.env' for browser compatibility (Fixes your Firebase error)
    'process.env': {}
  },
  resolve: {
    alias: {
      // Alias to browser-compatible modules
      '@': path.resolve(__dirname, './src'),
      path: 'path-browserify',
      url: 'url',
      'source-map': 'source-map-js',
    },
  },
  optimizeDeps: {
    include: ['path-browserify', 'url', 'source-map-js'], 
  },
  build: {
    sourcemap: false, 
  },
})