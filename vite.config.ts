import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      'greater-leaves-personnel-delivers.trycloudflare.com'
    ]
  }
})