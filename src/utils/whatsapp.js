import { SITE_DATA } from "../constants/siteData"

const DEFAULT_MESSAGE = "Halo RADJA AC, saya mau konsultasi pembelian AC."

const BRAND_MESSAGES = {
  "/brand/daikin":
    "Halo RADJA AC, saya tertarik AC Daikin. Mohon dibantu cek stok, kisaran harga paket pemasangan, dan rekomendasi tipe/PK yang cocok untuk ruangan saya.",
  "/brand/gree":
    "Halo RADJA AC, saya tertarik AC Gree. Mohon dibantu cek stok, kisaran harga paket pemasangan, dan rekomendasi tipe/PK yang cocok untuk ruangan saya.",
  "/brand/midea":
    "Halo RADJA AC, saya tertarik AC Midea. Mohon dibantu cek stok, kisaran harga paket pemasangan, dan rekomendasi tipe/PK yang cocok untuk ruangan saya.",
  "/brand/hisense":
    "Halo RADJA AC, saya tertarik AC Hisense. Mohon dibantu cek stok, kisaran harga paket pemasangan, dan rekomendasi tipe/PK yang cocok untuk ruangan saya.",
  "/brand/sansui":
    "Halo RADJA AC, saya tertarik AC Sansui. Mohon dibantu cek stok, kisaran harga paket pemasangan, dan rekomendasi tipe/PK yang cocok untuk ruangan saya.",
  "/brand/sharp":
    "Halo RADJA AC, saya tertarik AC Sharp. Mohon dibantu cek stok, kisaran harga paket pemasangan, dan rekomendasi tipe/PK yang cocok untuk ruangan saya.",
  "/brand/panasonic":
    "Halo RADJA AC, saya tertarik AC Panasonic. Mohon dibantu cek stok, kisaran harga paket pemasangan, dan rekomendasi tipe/PK yang cocok untuk ruangan saya.",
  "/brand/lainnya":
    "Halo RADJA AC, saya mau konsultasi pilihan merek AC. Mohon dibantu cek stok, kisaran harga paket pemasangan, dan rekomendasi tipe/PK yang cocok untuk ruangan saya.",
}

function getCurrentPathname() {
  if (typeof window === "undefined") return "/"
  return window.location.pathname
}

export function getWhatsAppMessageForPath(pathname = "/") {
  return BRAND_MESSAGES[pathname] || DEFAULT_MESSAGE
}

export function buildWhatsAppUrl(message = DEFAULT_MESSAGE) {
  const pathname = getCurrentPathname()
  const contextualMessage = getWhatsAppMessageForPath(pathname)
  const resolvedMessage = contextualMessage !== DEFAULT_MESSAGE ? contextualMessage : message || DEFAULT_MESSAGE

  return `${SITE_DATA.whatsappUrl}?text=${encodeURIComponent(resolvedMessage)}`
}

export function buildWhatsAppUrlForPath(pathname) {
  const message = getWhatsAppMessageForPath(pathname)
  return `${SITE_DATA.whatsappUrl}?text=${encodeURIComponent(message)}`
}
