import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-kebumen",
  seoTitle: "Jual AC Kebumen | Unit Only, Pasang & Banyak Unit — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Kebumen. Bisa unit only atau sekalian pasang sesuai konfirmasi lokasi untuk rumah, toko, kost, ruko, kantor, dan kebutuhan banyak unit.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Kebumen dan sekitarnya, termasuk unit only, rekomendasi PK, pilihan brand, opsi pengiriman, pemasangan, dan kebutuhan banyak unit sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA KEBUMEN",
  h1: "Jual AC Kebumen",
  heroHighlight: "unit only, sekalian pasang, dan banyak unit",
  heroDescription:
    "RADJA AC melayani konsultasi pembelian AC untuk area Kebumen, Gombong, Karanganyar, Pejagoan, Kutowinangun, Prembun, Petanahan, dan sekitarnya. Bisa unit only untuk yang sudah punya teknisi, atau sekalian pemasangan sesuai konfirmasi lokasi, rute, jumlah unit, dan jadwal teknisi.",
  primaryCta: "Tanya AC Kebumen",
  waMessage:
    "Halo RADJA AC, saya dari Kebumen. Mau tanya AC unit only / sekalian pasang, cek stok, harga, dan estimasi pengiriman atau pemasangan.",
  heroChips: ["Unit only bisa", "Sekalian pasang", "Bisa banyak unit", "Cek stok dulu", "Rute dikonfirmasi"],
  schemaAreas: ["Kebumen", "Gombong", "Karanganyar", "Pejagoan", "Kutowinangun", "Prembun", "Petanahan", "Ayah", "Rowokele", "Purwokerto", "Banyumas", "Wangon"],
  relatedAreaLinks: [["Wangon", "/jual-ac-wangon"], ["Cilacap", "/jual-ac-cilacap"], ["Purwokerto", "/jual-ac-purwokerto"]],
  bulkPurchase: {
    eyebrow: "UNIT ONLY & PASANG",
    title: "Butuh AC untuk rumah, kost, toko, ruko, atau usaha area Kebumen?",
    description:
      "Untuk Kebumen, pembelian AC bisa disesuaikan dari awal: hanya unit saja, sekalian pasang, atau beberapa unit sekaligus. RADJA AC bantu cek stok, pilihan brand, rekomendasi PK, estimasi harga, opsi pengiriman, dan kebutuhan pemasangan sesuai lokasi.",
    cards: [
      ["Rumah & Hunian", "Bantu pilih AC sesuai ukuran kamar, ruang keluarga, daya listrik, dan budget."],
      ["Unit Only", "Cocok untuk pembeli yang sudah punya teknisi sendiri, pengelola kost, kontraktor, atau kebutuhan pengadaan."],
      ["Toko, Kost & Ruko", "Cek kebutuhan beberapa ruangan, pilihan brand, estimasi pengiriman, dan jadwal pemasangan."],
    ],
    ctaLabel: "Tanya Unit Only / Pasang",
    waMessage:
      "Halo RADJA AC, saya dari Kebumen. Mau tanya AC unit only / sekalian pasang. Mohon bantu cek stok, harga, dan estimasi pengiriman atau pemasangan.",
  },
  valueTitle: "Beli AC area Kebumen lebih jelas dari awal",
  valueDescription:
    "Untuk area Kebumen dan sekitarnya, konsultasi awal penting supaya kebutuhan unit, stok, harga, opsi pengiriman, dan pemasangan tidak mengambang.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, jumlah unit, dan kebutuhan pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk Kebumen, pengiriman dan pemasangan menyesuaikan rute, lokasi, jumlah unit, akses titik pemasangan, dan jadwal teknisi.",
  processDescription:
    "Pembelian AC area Kebumen perlu dikonfirmasi dulu berdasarkan alamat, jumlah unit, kebutuhan unit only atau pasang, stok, rute, dan kondisi titik pemasangan. Ini membantu estimasi harga dan jadwal lebih jelas.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Kebumen/Gombong/sekitarnya, jumlah unit, kebutuhan unit only atau pasang, ukuran ruangan, daya listrik, dan budget."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, estimasi harga, dan opsi pengiriman."],
    ["Konfirmasi harga & jadwal", "Stok, rute pengiriman, tambahan material, akses titik pemasangan, dan jadwal teknisi dikonfirmasi sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, jumlah unit, dan target pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Kebumen?", "Ya. RADJA AC melayani konsultasi pembelian AC untuk area Kebumen dan sekitarnya, termasuk unit only, sekalian pasang sesuai konfirmasi lokasi, dan pembelian banyak unit."],
    ["Bisa beli unit only tanpa pemasangan?", "Bisa. Unit only cocok untuk pembeli yang sudah punya teknisi sendiri, kontraktor, pengelola kost, toko, ruko, atau kebutuhan pengadaan."],
    ["Apakah bisa pemasangan AC ke Kebumen?", "Bisa dikonsultasikan dulu. Pemasangan menyesuaikan alamat, jumlah unit, akses lokasi, kebutuhan material, rute, dan jadwal teknisi."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi, jumlah unit, kebutuhan unit only atau pasang, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Kebumen?",
  finalCtaDescription:
    "Kirim lokasi, jumlah unit, kebutuhan unit only atau sekalian pasang, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, opsi pengiriman, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcKebumen() {
  return <CompactAreaSalesPage config={areaConfig} />
}
