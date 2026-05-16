import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-sokaraja",
  seoTitle: "Jual AC Sokaraja Bisa COD | Stok & Pemasangan — RADJA AC",
  seoDescription:
    "RADJA AC melayani jual AC area Sokaraja dan sekitarnya. Bisa konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Sokaraja dan sekitarnya, termasuk cek stok, rekomendasi PK, opsi COD, dan estimasi pemasangan.",
  heroBadge: "JUAL AC AREA SOKARAJA",
  h1: "Jual AC Sokaraja",
  heroHighlight: "cek stok, rekomendasi PK, dan pemasangan",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Sokaraja dan sekitarnya. Konsultasi stok, harga, kapasitas PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi lokasi.",
  primaryCta: "Tanya AC Sokaraja",
  waMessage:
    "Halo RADJA AC, saya dari area Sokaraja. Mau tanya AC yang bisa COD/bayar di tempat. Mohon bantu cek stok, harga, rekomendasi PK, dan estimasi pemasangan AC.",
  schemaAreas: ["Sokaraja", "Sokaraja Kulon", "Sokaraja Wetan", "Karangnanas", "Kembaran", "Kalibagor", "Patikraja", "Purwokerto Timur", "Purwokerto Selatan", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Purwokerto", "/jual-ac-purwokerto"], ["Ajibarang", "/jual-ac-ajibarang"]],
  valueTitle: "Beli AC area Sokaraja lebih jelas dari awal",
  valueDescription:
    "Sokaraja dekat dengan Purwokerto, tapi stok, jadwal, dan kondisi pemasangan tetap perlu dicek agar estimasi pembelian lebih rapi.",
  valueStockText:
    "Stok unit, pilihan brand, dan estimasi harga dibahas dulu lewat WhatsApp sebelum jadwal dikunci.",
  valuePkText:
    "Kirim ukuran ruangan, daya listrik, dan kebutuhan pemakaian agar pilihan PK lebih sesuai untuk rumah, toko, atau kos.",
  valueInstallText:
    "Untuk area Sokaraja dan sekitar Kembaran/Kalibagor, pemasangan menyesuaikan rute, akses lokasi, dan titik indoor-outdoor.",
  processDescription:
    "Estimasi harga dan pemasangan area Sokaraja akan lebih akurat setelah lokasi, ukuran ruangan, dan kondisi titik pemasangan dicek dari awal.",
  processSteps: [
    ["Kirim lokasi & ukuran ruangan", "Sebutkan area Sokaraja, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, low watt/inverter, dan kisaran harga."],
    ["Konfirmasi harga & jadwal", "Estimasi pemasangan, tambahan pekerjaan, dan opsi COD/bayar di tempat dikonfirmasi sebelum unit dikirim."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Sokaraja?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Sokaraja, Karangnanas, Kembaran, Kalibagor, dan area terdekat sesuai rute."],
    ["Apakah bisa beli AC area Sokaraja dengan COD?", "Bisa untuk area dan kondisi tertentu setelah stok, jadwal, lokasi, dan kebutuhan pemasangan dikonfirmasi."],
    ["Apakah bisa bantu pilih AC sesuai daya listrik?", "Bisa. Kirim daya listrik, ukuran ruangan, kebiasaan pemakaian, dan budget agar pilihan low watt atau inverter lebih sesuai."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Sokaraja?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, kapasitas PK, estimasi pemasangan, dan opsi COD sesuai konfirmasi.",
}

export default function JualAcSokaraja() {
  return <CompactAreaSalesPage config={areaConfig} />
}
