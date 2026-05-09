// Image SEO and optimization utilities
export const IMAGE_CONFIG = {
  // Lazy loading for below-the-fold images
  lazy: {
    loading: "lazy",
    decoding: "async",
  },
  // High priority for above-the-fold images
  eager: {
    loading: "eager",
    decoding: "async",
    fetchPriority: "high",
  },
}

// Generate SEO-friendly alt text
export function generateAltText(baseText, context = "") {
  let alt = baseText

  if (context) {
    alt += ` - ${context}`
  }

  // Add relevant keywords naturally
  if (!alt.includes("AC") && !alt.includes("teknisi")) {
    alt += " - Service AC profesional"
  }

  return alt
}

// Portfolio images with improved alt texts
export const PORTFOLIO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1591047139829-6f61c3a0ce94?auto=format&fit=crop&w=900&q=70",
    alt: "Teknisi AC profesional memeriksa unit indoor di rumah pelanggan Purwokerto",
  },
  {
    src: "https://images.unsplash.com/photo-1512149673959-0f1d44020c0b?auto=format&fit=crop&w=900&q=70",
    alt: "Pemasangan AC Daikin di ruang tamu modern oleh teknisi bersertifikat",
  },
  {
    src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=70",
    alt: "Proses cuci AC menyeluruh oleh tim teknisi Radja AC Purwokerto",
  },
  {
    src: "https://images.unsplash.com/photo-1592735817023-5ae581aa2d61?auto=format&fit=crop&w=900&q=70",
    alt: "Tim teknisi AC Radja AC menyiapkan peralatan service di lokasi pelanggan",
  },
]

// Brand images with proper alt texts
export const BRAND_IMAGES = [
  {
    name: "Daikin",
    src: "/logo-product/daikin-logo.webp",
    alt: "Logo AC Daikin - Merk AC premium yang didukung service Radja AC",
  },
  {
    name: "LG",
    src: "/logo-product/lg-logo.webp",
    alt: "Logo AC LG - Merk AC terpercaya dengan dukungan teknisi resmi Radja AC",
  },
  {
    name: "Panasonic",
    src: "/logo-product/panasonic-logo.webp",
    alt: "Logo AC Panasonic - Merk AC berkualitas dengan service profesional Radja AC",
  },
  {
    name: "Samsung",
    src: "/logo-product/samsung-logo.webp",
    alt: "Logo AC Samsung - Merk AC modern yang didukung perbaikan Radja AC",
  },
  {
    name: "Sharp",
    src: "/logo-product/sharp-logo.webp",
    alt: "Logo AC Sharp - Merk AC inovatif dengan dukungan teknisi Radja AC",
  },
  {
    name: "Mitsubishi",
    src: "/logo-product/mitsubishi-logo.webp",
    alt: "Logo AC Mitsubishi - Merk AC premium dengan service lengkap Radja AC",
  },
  {
    name: "Gree",
    src: "/logo-product/gree-logo.webp",
    alt: "Logo AC Gree - Merk AC hemat energi dengan dukungan service Radja AC",
  },
  {
    name: "Midea",
    src: "/logo-product/midea-logo.webp",
    alt: "Logo AC Midea - Merk AC terjangkau dengan kualitas terjamin Radja AC",
  },
]