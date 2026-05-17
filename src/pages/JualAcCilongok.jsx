import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-cilongok",
  seoTitle: "Jual AC Cilongok Bisa COD | Stok & Pemasangan — RADJA AC",
  seoDescription:
    "RADJA AC melayani jual AC area Cilongok dan sekitarnya. Bisa konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Cilongok dan sekitarnya, termasuk cek stok, rekomendasi PK, opsi COD, dan estimasi pemasangan.",
  heroBadge: "JUAL AC AREA CILONGOK",
  h1: "Jual AC Cilongok",
  heroHighlight: "cek stok, rekomendasi PK, dan pemasangan",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Cilongok dan sekitarnya. Konsultasi stok, harga, kapasitas PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi lokasi.",
  primaryCta: "Tanya AC Cilongok",
  waMessage:
    "Halo RADJA AC, saya dari Cilongok. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  schemaAreas: ["Cilongok", "Pernasidi", "Panembangan", "Cikidang", "Karanglo", "Kasegeran", "Pageraji", "Sambirata", "Ajibarang", "Karanglewas", "Kedungbanteng", "Purwokerto Barat"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Ajibarang", "/jual-ac-ajibarang"], ["Purwokerto", "/jual-ac-purwokerto"]],
  valueTitle: "Beli AC area Cilongok lebih jelas dari awal",
  valueDescription:
    "Untuk Cilongok dan sekitarnya, konsultasi awal membantu menyesuaikan pilihan AC dengan ruangan, listrik, dan kondisi pemasangan.",
  valueStockText:
    "Cek stok, tipe AC, dan estimasi harga lebih dulu agar pembelian tidak hanya mengejar harga termurah.",
  valuePkText:
    "Kirim ukuran ruangan dan daya listrik agar rekomendasi PK, low watt, atau inverter lebih sesuai.",
  valueInstallText:
    "Pemasangan area Cilongok menyesuaikan rute, akses lokasi, kebutuhan pipa/kabel, dan titik indoor-outdoor.",
  processDescription:
    "Estimasi harga dan jadwal area Cilongok akan lebih jelas setelah lokasi, ukuran ruangan, dan kondisi pemasangan dicek.",
  processSteps: [
    ["Kirim lokasi & ukuran ruangan", "Sebutkan area Cilongok, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, low watt/inverter, dan kisaran harga."],
    ["Konfirmasi harga & jadwal", "Estimasi pemasangan, tambahan pekerjaan, dan opsi COD/bayar di tempat dikonfirmasi sebelum unit dikirim."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Cilongok?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Cilongok, Pageraji, Karanglewas, Ajibarang, dan area terdekat sesuai rute."],
    ["Apakah bisa beli AC area Cilongok dengan COD?", "Bisa untuk area dan kondisi tertentu setelah stok, jadwal, lokasi, dan kebutuhan pemasangan dikonfirmasi."],
    ["Apakah bisa bantu pilih AC sesuai daya listrik?", "Bisa. Kirim daya listrik, ukuran ruangan, kebiasaan pemakaian, dan budget agar pilihan low watt atau inverter lebih sesuai."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Cilongok?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, kapasitas PK, estimasi pemasangan, dan opsi COD sesuai konfirmasi.",
}

export default function JualAcCilongok() {
  return <CompactAreaSalesPage config={areaConfig} />
}