import { Helmet } from "react-helmet-async"
import { buildCanonicalUrl, SITE_URL } from "../utils/seoUtils"
import { SITE_DATA } from "../constants/siteData"

const PATH_LABELS = {
  katalog: "Katalog AC",
  brand: "Brand AC",
  kontak: "Kontak",
  portfolio: "Portfolio",
  "tentang-kami": "Tentang Kami",
  "instalasi-ac-banyumas": "Instalasi AC Banyumas",
  "instalasi-profesional": "Instalasi Profesional",
  "ac-split-rumah": "AC Split Rumah",
  "ac-inverter": "AC Inverter",
  "ac-low-watt": "AC Low Watt",
  "ac-kantor-komersial": "AC Kantor & Komersial",
  daikin: "Daikin",
  gree: "Gree",
  midea: "Midea",
  hisense: "Hisense",
  sansui: "Sansui",
  sharp: "Sharp",
  panasonic: "Panasonic",
  lainnya: "Brand Lainnya",
}

function toTitleCase(value) {
  return String(value)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function createBreadcrumbSchema(canonicalPath = "/", currentTitle = SITE_DATA.businessName) {
  const cleanPath = String(canonicalPath || "/").replace(/^\/+|\/+$/g, "")

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: SITE_URL,
    },
  ]

  if (!cleanPath) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items,
    }
  }

  const segments = cleanPath.split("/").filter(Boolean)

  segments.forEach((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`
    const isLast = index === segments.length - 1

    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: isLast ? currentTitle.replace(/\s[-|].*$/, "") : PATH_LABELS[segment] || toTitleCase(segment),
      item: buildCanonicalUrl(path),
    })
  })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  }
}

function createWebPageSchema({ title, description, canonical }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_DATA.businessName,
      url: SITE_DATA.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_DATA.businessName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
      },
    },
  }
}

export default function SeoHead({ title, description, canonicalPath = "/" }) {
  const canonical = buildCanonicalUrl(canonicalPath)
  const breadcrumbSchema = createBreadcrumbSchema(canonicalPath, title)
  const webPageSchema = createWebPageSchema({ title, description, canonical })
  const imageUrl = `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`

  return (
    <Helmet>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_DATA.businessName} />
      <meta property="og:title" content={title} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  )
}
