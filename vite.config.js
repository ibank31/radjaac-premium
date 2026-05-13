import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

const routes = [
  '/',
  '/katalog',
  '/brand/daikin',
  '/brand/gree',
  '/brand/midea',
  '/brand/hisense',
  '/brand/sansui',
  '/brand/lainnya',
  '/daikin-purwokerto',
  '/gree-purwokerto',
  '/midea-purwokerto',
  '/hisense-purwokerto',
  '/sansui-purwokerto',
  '/sharp-purwokerto',
  '/panasonic-purwokerto',
  '/katalog/ac-split-rumah',
  '/katalog/ac-inverter',
  '/katalog/ac-low-watt',
  '/katalog/ac-kantor-komersial',
  '/instalasi-ac-banyumas',
  '/instalasi-profesional',
  '/tentang-kami',
  '/kontak',
  '/portfolio',
]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://radjaac.com',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/katalog': 0.9,
        '/brand/daikin': 0.95,
        '/brand/gree': 0.9,
        '/brand/midea': 0.9,
        '/brand/hisense': 0.9,
        '/katalog/ac-inverter': 0.85,
        '/katalog/ac-low-watt': 0.85,
        '/katalog/ac-split-rumah': 0.85,
        '/kontak': 0.75,
      },
    }),
  ],
})