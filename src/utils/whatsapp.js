import { SITE_DATA } from "../constants/siteData"

const DEFAULT_MESSAGE =
  "Halo RADJA AC, saya mau tanya harga AC dan rekomendasi yang cocok."

const AREA_MESSAGES = {
  "/jual-ac-purwokerto": "Halo RADJA AC, saya dari Purwokerto. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-banyumas": "Halo RADJA AC, saya dari Banyumas. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-sokaraja": "Halo RADJA AC, saya dari Sokaraja. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-ajibarang": "Halo RADJA AC, saya dari Ajibarang. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-wangon": "Halo RADJA AC, saya dari Wangon. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-cilongok": "Halo RADJA AC, saya dari Cilongok. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-jatilawang": "Halo RADJA AC, saya dari Jatilawang. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-purbalingga": "Halo RADJA AC, saya dari Purbalingga. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-banjarnegara": "Halo RADJA AC, saya dari Banjarnegara. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  "/jual-ac-cilacap": "Halo RADJA AC, saya dari Cilacap. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
}

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
  const normalizedPath = `/${String(pathname).replace(/^\/+/, "").replace(/\/+$/, "")}`

  if (AREA_MESSAGES[normalizedPath]) return AREA_MESSAGES[normalizedPath]
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
