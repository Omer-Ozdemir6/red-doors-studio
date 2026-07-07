import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 1. Bunu ekleyin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 2. Bunu buraya ekleyin
  ],
})