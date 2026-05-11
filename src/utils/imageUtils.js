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
    caption: "Instalasi AC Daikin di rumah keluarga Purwokerto Selatan.",
  },
  {
    src: "https://images.unsplash.com/photo-1512149673959-0f1d44020c0b?auto=format&fit=crop&w=900&q=70",
    alt: "Pemasangan AC Daikin di ruang tamu modern oleh teknisi bersertifikat",
    caption: "Pemasangan AC Gree di kantor Banyumas dengan pemasangan rapi.",
  },
  {
    src: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=70",
    alt: "Proses cuci AC menyeluruh oleh tim teknisi Radja AC Purwokerto",
    caption: "Cuci AC dan service di rumah Sokaraja untuk performa lebih dingin.",
  },
  {
    src: "https://images.unsplash.com/photo-1592735817023-5ae581aa2d61?auto=format&fit=crop&w=900&q=70",
    alt: "Tim teknisi AC Radja AC menyiapkan peralatan service di lokasi pelanggan",
    caption: "Survey kebutuhan AC untuk ruang meeting di Purwokerto Timur.",
  },
]

// Brand images with proper alt texts
export const BRAND_IMAGES = [
  {
    name: "Daikin",
    src: "/assets/logos/daikin-logo.webp",
    alt: "Logo AC Daikin - Merk AC premium yang didukung service Radja AC",
  },
  {
    name: "LG",
    src: "/assets/logos/lg-logo.webp",
    alt: "Logo AC LG - Merk AC terpercaya dengan dukungan teknisi resmi Radja AC",
  },
  {
    name: "Panasonic",
    src: "/assets/logos/panasonic-logo.webp",
    alt: "Logo AC Panasonic - Merk AC berkualitas dengan service profesional Radja AC",
  },
  {
    name: "Samsung",
    src: "/assets/logos/samsung-logo.webp",
    alt: "Logo AC Samsung - Merk AC modern yang didukung perbaikan Radja AC",
  },
  {
    name: "Sharp",
    src: "/assets/logos/sharp-logo.webp",
    alt: "Logo AC Sharp - Merk AC inovatif dengan dukungan teknisi Radja AC",
  },
  {
    name: "Mitsubishi",
    src: "/assets/logos/mitsubishi-logo.webp",
    alt: "Logo AC Mitsubishi - Merk AC premium dengan service lengkap Radja AC",
  },
  {
    name: "Gree",
    src: "/assets/logos/gree-logo.webp",
    alt: "Logo AC Gree - Merk AC hemat energi dengan dukungan service Radja AC",
  },
  {
    name: "Midea",
    src: "/assets/logos/midea-logo.webp",
    alt: "Logo AC Midea - Merk AC terjangkau dengan kualitas terjamin Radja AC",
  },
]