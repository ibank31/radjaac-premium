import { SITE_DATA } from "../constants/siteData"

const DEFAULT_MESSAGE =
  "Halo RADJA AC, saya mau tanya harga dan rekomendasi AC yang cocok."

const CATEGORY_MESSAGES = {
  "/kalkulator-pk-ac":
    "Halo RADJA AC, saya mau cek kebutuhan PK AC dan estimasi listrik. Mohon bantu rekomendasi produk yang cocok.",
  "/katalog/ac-split-rumah":
    "Halo RADJA AC, saya mau konsultasi beli AC split rumah. Mohon bantu rekomendasi PK dan brand yang cocok untuk ruangan saya.",
  "/katalog/ac-inverter":
    "Halo RADJA AC, saya mau konsultasi AC inverter. Mohon bantu rekomendasi unit yang cocok untuk pemakaian harian.",
  "/katalog/ac-low-watt":
    "Halo RADJA AC, saya mau konsultasi AC low watt. Mohon bantu cek pilihan yang aman untuk daya listrik rumah/kos saya.",
  "/katalog/ac-kantor-komersial":
    "Halo RADJA AC, saya mau konsultasi kebutuhan AC kantor/komersial. Mohon bantu rekomendasi unit dan kebutuhan pemasangan.",
}

const BRAND_MESSAGES = {
  "/brand/daikin": "Halo RADJA AC, saya mau tanya stok dan rekomendasi AC Daikin.",
  "/brand/gree": "Halo RADJA AC, saya mau tanya stok dan rekomendasi AC Gree.",
  "/brand/midea": "Halo RADJA AC, saya mau tanya stok dan rekomendasi AC Midea.",
  "/brand/hisense": "Halo RADJA AC, saya mau tanya stok dan rekomendasi AC Hisense.",
  "/brand/sansui": "Halo RADJA AC, saya mau tanya stok dan rekomendasi AC Sansui.",
  "/brand/sharp": "Halo RADJA AC, saya mau tanya stok dan rekomendasi AC Sharp.",
  "/brand/panasonic": "Halo RADJA AC, saya mau tanya stok dan rekomendasi AC Panasonic.",
  "/brand/lainnya": "Halo RADJA AC, saya mau tanya stok AC brand lainnya. Mohon bantu rekomendasinya.",
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
    return "Halo RADJA AC, saya mau konsultasi dan tanya ketersediaan AC."
  }

  if (normalizedPath === "/instalasi-profesional" || normalizedPath === "/instalasi-ac-banyumas") {
    return "Halo RADJA AC, saya mau konsultasi pembelian AC sekaligus kebutuhan instalasi."
  }

  return DEFAULT_MESSAGE
}

export function buildWhatsAppUrlForPath(pathname) {
  return buildWhatsAppUrl(getWhatsAppMessageForPath(pathname))
}
