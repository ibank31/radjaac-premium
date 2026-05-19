// Site-wide constants for RADJA AC
const whatsappNumber = String(
  import.meta.env.VITE_RADJAAC_WHATSAPP_NUMBER || "62882008246099"
).replace(/\D/g, "")

const whatsappDisplay =
  import.meta.env.VITE_RADJAAC_WHATSAPP_DISPLAY || "+62 882-0082-46099"

export const SITE_DATA = {
  // Business Information
  businessName: "RADJA AC",
  businessDescription: "Toko AC Purwokerto yang menjual AC original berbagai brand resmi untuk rumah, kantor, toko, dan proyek di Purwokerto dan Banyumas",

  // Contact Information
  whatsappNumber,
  whatsappDisplay,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  phoneNumber: `+${whatsappNumber}`,

  // Site URLs
  baseUrl: "https://www.radjaac.com",

  // Service Areas
  serviceAreas: [
    "Purwokerto",
    "Banyumas",
    "Cilacap",
    "Purbalingga",
    "Banjarnegara",
    "Kebumen",
    "Semarang",
    "Solo",
    "Magelang",
    "Tegal",
  ],

  // Operational Hours
  operationalHours: [
    { label: "Setiap hari", value: "09:00 - 20:00" },
  ],

  // SEO Defaults
  defaultTitle: "Toko AC Purwokerto — Dealer AC Daikin, Midea, Hisense | RADJA AC",
  defaultDescription: "RADJA AC adalah toko AC Purwokerto yang menjual AC Daikin, Midea, Hisense, Gree, Sharp, Panasonic dan brand resmi lainnya. Konsultasi gratis, stok ready, garansi resmi, dan bisa bantu instalasi.",

  // Social Media / External Links
  logoUrl: "/logo-radjaac.webp",

  // Business Stats (for hero section)
  businessStats: [
    { number: "1000+", label: "Pelanggan Puas" },
    { number: "500+", label: "Unit AC Terjual" },
    { number: "7+", label: "Tahun Pengalaman" },
    { number: "<5m", label: "Fast Response" },
  ],
};