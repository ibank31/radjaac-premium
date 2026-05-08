import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://www.radjaac.com',
      dynamicRoutes: [
        '/service-ac-purwokerto',
        '/cuci-ac-purwokerto',
        '/instalasi-ac-banyumas'
      ],
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/service-ac-purwokerto': 0.8,
        '/cuci-ac-purwokerto': 0.8,
        '/instalasi-ac-banyumas': 0.8
      }
    })
  ],
})