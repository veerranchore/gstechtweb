import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['3D-Earth-main'],
    entries: ['index.html', 'src/**/*.{ts,tsx}'],
  },
  server: {
    watch: {
      ignored: ['**/3D-Earth-main/**'],
    },
  },
})
