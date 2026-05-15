import { SITE_DATA } from "../constants/siteData"

const DEFAULT_MESSAGE =
  "Halo RADJA AC, saya mau tanya harga AC dan rekomendasi yang cocok."

const CATEGORY_MESSAGES = {
  "/kalkulator-pk-ac":
    "Halo RADJA AC, saya mau cek kebutuhan PK AC. Mohon bantu rekomendasi AC yang cocok.",
  "/katalog/ac-split-rumah":
    "Halo RADJA AC, saya mau cari AC split rumah. Mohon bantu cek pilihan dan kisaran harganya.",
  "/katalog/ac-inverter":
    "Halo RADJA AC, saya mau cari AC inverter. Mohon bantu cek pilihan dan kisaran harganya.",
  "/katalog/ac-low-watt":
    "Halo RADJA AC, saya mau cari AC low watt. Mohon bantu cek pilihan dan kisaran harganya.",
  "/katalog/ac-kantor-komersial":
    "Halo RADJA AC, saya mau cari AC untuk kantor/kost/proyek. Mohon bantu cek pilihan dan kisaran harganya.",
}

const BRAND_MESSAGES = {
  "/brand/daikin": "Halo RADJA AC, saya mau tanya stok dan harga AC Daikin.",
  "/brand/gree": "Halo RADJA AC, saya mau tanya stok dan harga AC Gree.",
  "/brand/midea": "Halo RADJA AC, saya mau tanya stok dan harga AC Midea.",
  "/brand/hisense": "Halo RADJA AC, saya mau tanya stok dan harga AC Hisense.",
  "/brand/sansui": "Halo RADJA AC, saya mau tanya stok dan harga AC Sansui.",
  "/brand/sharp": "Halo RADJA AC, saya mau tanya stok dan harga AC Sharp.",
  "/brand/panasonic": "Halo RADJA AC, saya mau tanya stok dan harga AC Panasonic.",
  "/brand/lainnya": "Halo RADJA AC, saya mau tanya stok dan harga AC brand lainnya.",
}

export function buildWhatsAppUrl(message = DEFAULT_MESSAGE) {
  if (!message) return SITE_DATA.whatsappUrl

  return `${SITE_DATA.whatsappUrl}?text=${encodeURIComponent(message)}`
}

export function getWhatsAppMessageForPath(pathname = "/") {
  const normalizedPath = `/${String(pathname).replace(/^\/+|\/+$/g, "")}`

  if (CATEGORY_MESSAGES[normalizedPath]) return CATEGORY_MESSAGES[normalizedPath]
  if (BRAND_MESSAGES[normalizedPath]) return BRAND_MESSAGES[normalizedPath]

  if (normalizedPath === "/kontak") {
    return "Halo RADJA AC, saya mau tanya harga AC, cek stok, dan rekomendasi yang cocok."
  }

  if (normalizedPath === "/instalasi-profesional" || normalizedPath === "/instalasi-ac-banyumas") {
    return "Halo RADJA AC, saya mau beli AC dan konsultasi kebutuhan instalasi."
  }

  return DEFAULT_MESSAGE
}

export function buildWhatsAppUrlForPath(pathname) {
  return buildWhatsAppUrl(getWhatsAppMessageForPath(pathname))
}