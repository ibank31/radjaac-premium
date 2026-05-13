import { SITE_DATA } from "../constants/siteData"

export function buildWhatsAppUrl(message) {
  if (!message) return SITE_DATA.whatsappUrl

  return `${SITE_DATA.whatsappUrl}?text=${encodeURIComponent(message)}`
}
