import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-ajibarang",
  seoTitle: "Jual AC Ajibarang Bisa COD | Stok & Pemasangan — RADJA AC",
  seoDescription:
    "RADJA AC melayani jual AC area Ajibarang dan sekitarnya. Bisa konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Ajibarang dan sekitarnya, termasuk cek stok, rekomendasi PK, opsi COD, dan estimasi pemasangan.",
  heroBadge: "JUAL AC AREA AJIBARANG",
  h1: "Jual AC Ajibarang",
  heroHighlight: "cek stok, rekomendasi PK, dan pemasangan",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Ajibarang dan sekitarnya. Konsultasi stok, harga, kapasitas PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi lokasi.",
  primaryCta: "Tanya AC Ajibarang",
  waMessage:
    "Halo RADJA AC, saya dari Ajibarang. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  schemaAreas: ["Ajibarang", "Ajibarang Kulon", "Ajibarang Wetan", "Pancasan", "Lesmana", "Kracak", "Cilongok", "Pekuncen", "Wangon", "Karanglewas", "Purwojati", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Cilongok", "/jual-ac-cilongok"], ["Wangon", "/jual-ac-wangon"]],
  valueTitle: "Beli AC area Ajibarang lebih jelas dari awal",
  valueDescription:
    "Untuk area Ajibarang, konsultasi awal membantu memastikan stok, estimasi harga, dan pemasangan tidak mengambang.",
  valueStockText:
    "Cek stok, tipe AC, dan kisaran harga dulu agar pilihan unit sesuai kebutuhan dan budget.",
  valuePkText:
    "Kirim ukuran ruangan dan daya listrik agar rekomendasi PK, low watt, atau inverter lebih tepat.",
  valueInstallText:
    "Pemasangan area Ajibarang menyesuaikan rute, akses lokasi, kebutuhan pipa/kabel, dan titik indoor-outdoor.",
  processDescription:
    "Estimasi harga area Ajibarang akan lebih rapi setelah lokasi pemasangan, ukuran ruangan, dan kondisi pekerjaan dicek dari awal.",
  processSteps: [
    ["Kirim lokasi & ukuran ruangan", "Sebutkan area Ajibarang, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, low watt/inverter, dan kisaran harga."],
    ["Konfirmasi harga & jadwal", "Estimasi pemasangan, tambahan pekerjaan, dan opsi COD/bayar di tempat dikonfirmasi sebelum unit dikirim."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Ajibarang?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Ajibarang, Pancasan, Lesmana, Kracak, dan area terdekat sesuai rute."],
    ["Apakah bisa beli AC area Ajibarang dengan COD?", "Bisa untuk area dan kondisi tertentu setelah stok, jadwal, lokasi, dan kebutuhan pemasangan dikonfirmasi."],
    ["Apakah harga sudah termasuk pemasangan?", "Tergantung tipe AC, paket, dan kondisi lokasi. Kebutuhan pipa/kabel tambahan, akses lokasi, dan pekerjaan khusus akan dicek dulu."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Ajibarang?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, kapasitas PK, estimasi pemasangan, dan opsi COD sesuai konfirmasi.",
}

export default function JualAcAjibarang() {
  return <CompactAreaSalesPage config={areaConfig} />
}