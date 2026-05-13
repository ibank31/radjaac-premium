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
  '/brand/sharp',
  '/brand/panasonic',
  '/brand/lainnya',
  '/katalog/ac-split-rumah',
  '/katalog/ac-inverter',
  '/katalog/ac-low-watt',
  '/katalog/ac-kantor-komersial',
  '/artikel',
  '/artikel/ac-1-pk-untuk-ruangan-berapa',
  '/artikel/ac-inverter-vs-low-watt',
  '/artikel/cara-memilih-ac-untuk-kamar-3x4',
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
      hostname: 'https://www.radjaac.com',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/katalog': 0.9,
        '/brand/daikin': 0.95,
        '/brand/gree': 0.9,
        '/brand/midea': 0.9,
        '/brand/hisense': 0.9,
        '/brand/sharp': 0.85,
        '/brand/panasonic': 0.85,
        '/katalog/ac-inverter': 0.85,
        '/katalog/ac-low-watt': 0.85,
        '/katalog/ac-split-rumah': 0.85,
        '/artikel': 0.75,
        '/kontak': 0.75,
      },
    }),
  ],
})