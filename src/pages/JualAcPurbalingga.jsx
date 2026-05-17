import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-purbalingga",
  seoTitle: "Jual AC Purbalingga | Konsultasi PK, Stok & Pemasangan — RADJA AC",
  seoDescription:
    "RADJA AC melayani konsultasi pembelian AC untuk area Purbalingga dan sekitarnya. Cek stok, harga, rekomendasi PK, estimasi pemasangan, dan jadwal sesuai konfirmasi lokasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Purbalingga dan sekitarnya, termasuk cek stok, rekomendasi PK, pilihan brand, dan estimasi pemasangan.",
  heroBadge: "JUAL AC AREA PURBALINGGA",
  h1: "Jual AC Purbalingga",
  heroHighlight: "cek stok, rekomendasi PK, dan estimasi pemasangan",
  heroDescription:
    "RADJA AC Purwokerto melayani konsultasi pembelian AC untuk area Purbalingga dan sekitarnya. Bantu cek stok, harga, kapasitas PK, pilihan brand, dan estimasi pemasangan sesuai konfirmasi lokasi.",
  primaryCta: "Tanya AC Purbalingga",
  waMessage:
    "Halo RADJA AC, saya dari area Purbalingga. Mau tanya AC yang bisa konsultasi stok, harga, rekomendasi PK, dan estimasi pemasangan. Mohon bantu cek jadwal dan opsi pembelian sesuai lokasi saya.",
  schemaAreas: ["Purbalingga", "Kalimanah", "Padamara", "Bojongsari", "Bobotsari", "Mrebet", "Bukateja", "Kutasari", "Kemangkon", "Purwokerto", "Sokaraja", "Banyumas"],
  relatedAreaLinks: [["Purwokerto", "/jual-ac-purwokerto"], ["Banyumas", "/jual-ac-banyumas"], ["Sokaraja", "/jual-ac-sokaraja"]],
  valueTitle: "Beli AC area Purbalingga lebih jelas dari awal",
  valueDescription:
    "Untuk area Purbalingga, konsultasi awal membantu memastikan stok, pilihan PK, estimasi harga, dan jadwal pemasangan tidak mengambang.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dibahas dulu lewat WhatsApp sebelum jadwal dikunci.",
  valuePkText:
    "Kirim ukuran ruangan, daya listrik, dan kebutuhan pemakaian agar pilihan AC tidak asal dan lebih sesuai budget.",
  valueInstallText:
    "Untuk area Purbalingga, estimasi pemasangan menyesuaikan rute, akses lokasi, kebutuhan pipa/kabel, dan titik indoor-outdoor.",
  processDescription:
    "Karena Purbalingga berada di luar area inti Purwokerto, estimasi harga, jadwal, dan pemasangan perlu dikonfirmasi dulu berdasarkan lokasi serta kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & ukuran ruangan", "Sebutkan area Purbalingga, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, low watt/inverter, dan kisaran harga yang sesuai kebutuhan."],
    ["Konfirmasi harga & jadwal", "Estimasi pemasangan, tambahan pekerjaan, dan opsi pembayaran dikonfirmasi sebelum unit dikirim atau jadwal dipasang."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Purbalingga?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Purbalingga dan sekitarnya sesuai stok, rute, dan jadwal pemasangan."],
    ["Apakah bisa COD untuk area Purbalingga?", "Bisa untuk area dan kondisi tertentu setelah lokasi, stok, jadwal, dan kebutuhan pemasangan dikonfirmasi terlebih dahulu."],
    ["Apakah harga sudah termasuk pemasangan?", "Tergantung tipe AC, paket, jarak, dan kondisi lokasi. Kebutuhan pipa/kabel tambahan, akses lokasi, dan pekerjaan khusus akan dicek dulu sebelum estimasi final."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia agar rekomendasi lebih jelas."],
  ],
  finalCtaTitle: "Mau beli AC area Purbalingga?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi pemasangan, dan jadwal sesuai konfirmasi.",
}

export default function JualAcPurbalingga() {
  return <CompactAreaSalesPage config={areaConfig} />
}
