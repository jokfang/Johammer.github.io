import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Johammer.github.io/',
  plugins: [react()],
  server: {
    proxy: {
      '/.netlify/functions': 'http://localhost:8888'
    }
  }
})
