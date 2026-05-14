import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'
import { BLOG_POSTS } from './src/data/blogPosts.js'

const staticRoutes = [
  '/',
  '/katalog',
  '/kalkulator-pk-ac',
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
  '/instalasi-ac-banyumas',
  '/instalasi-profesional',
  '/tentang-kami',
  '/kontak',
  '/portfolio',
]

const routes = Array.from(new Set([
  ...staticRoutes,
  ...BLOG_POSTS.map((post) => `/artikel/${post.slug}`),
]))

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
        '/kalkulator-pk-ac': 0.9,
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