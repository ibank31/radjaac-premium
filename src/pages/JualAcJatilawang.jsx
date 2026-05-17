import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-jatilawang",
  seoTitle: "Jual AC Jatilawang Bisa COD | Stok & Pemasangan — RADJA AC",
  seoDescription:
    "RADJA AC melayani jual AC area Jatilawang dan sekitarnya. Bisa konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Jatilawang dan sekitarnya, termasuk cek stok, rekomendasi PK, opsi COD, dan estimasi pemasangan.",
  heroBadge: "JUAL AC AREA JATILAWANG",
  h1: "Jual AC Jatilawang",
  heroHighlight: "cek stok, rekomendasi PK, dan pemasangan",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Jatilawang dan sekitarnya. Konsultasi stok, harga, kapasitas PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi lokasi.",
  primaryCta: "Tanya AC Jatilawang",
  waMessage:
    "Halo RADJA AC, saya dari Jatilawang. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  schemaAreas: ["Jatilawang", "Tunjung", "Tinggarjaya", "Kedungwringin", "Karanglewas", "Gunung Wetan", "Adisara", "Margasana", "Wangon", "Purwojati", "Rawalo", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Wangon", "/jual-ac-wangon"], ["Ajibarang", "/jual-ac-ajibarang"]],
  valueTitle: "Beli AC area Jatilawang lebih jelas dari awal",
  valueDescription:
    "Untuk Jatilawang dan sekitarnya, pembelian AC lebih aman kalau stok, pilihan PK, dan kondisi pemasangan dicek dulu.",
  valueStockText:
    "Cek stok, tipe AC, dan estimasi harga sebelum jadwal dikunci agar pembelian lebih jelas.",
  valuePkText:
    "Kirim ukuran ruangan dan daya listrik agar rekomendasi PK, low watt, atau inverter tidak asal pilih.",
  valueInstallText:
    "Pemasangan area Jatilawang menyesuaikan rute, akses lokasi, kebutuhan pipa/kabel, dan posisi outdoor.",
  processDescription:
    "Untuk area Jatilawang, estimasi harga dan jadwal akan lebih jelas setelah lokasi, ukuran ruangan, dan kondisi titik indoor-outdoor dicek.",
  processSteps: [
    ["Kirim lokasi & ukuran ruangan", "Sebutkan area Jatilawang, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, low watt/inverter, dan kisaran harga."],
    ["Konfirmasi harga & jadwal", "Estimasi pemasangan, tambahan pekerjaan, dan opsi COD/bayar di tempat dikonfirmasi sebelum unit dikirim."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Jatilawang?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Jatilawang, Wangon, Rawalo, Purwojati, dan area terdekat sesuai rute."],
    ["Apakah bisa COD untuk area Jatilawang?", "Bisa untuk area dan kondisi tertentu setelah stok, jadwal, lokasi, dan kebutuhan pemasangan dikonfirmasi."],
    ["Apakah bisa bantu pilih AC sesuai daya listrik?", "Bisa. Kirim daya listrik, ukuran ruangan, kebiasaan pemakaian, dan budget agar pilihan low watt atau inverter lebih sesuai."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Jatilawang?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, kapasitas PK, estimasi pemasangan, dan opsi COD sesuai konfirmasi.",
}

export default function JualAcJatilawang() {
  return <CompactAreaSalesPage config={areaConfig} />
}