export const SITE_URL = "https://www.radjaac.com"

export function buildCanonicalUrl(path = "/") {
  const normalized = `/${String(path).trim().replace(/^\/+/g, "").replace(/\/+$/g, "")}`
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`
}
