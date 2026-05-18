import { SITE_DATA } from "../constants/siteData"

const DEFAULT_MESSAGE = "Halo RADJA AC, saya mau konsultasi pembelian AC."

export function buildWhatsAppUrl(_message = DEFAULT_MESSAGE) {
  return `${SITE_DATA.whatsappUrl}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`
}

export function getWhatsAppMessageForPath(_pathname = "/") {
  return DEFAULT_MESSAGE
}

export function buildWhatsAppUrlForPath(pathname) {
  return buildWhatsAppUrl(getWhatsAppMessageForPath(pathname))
}
