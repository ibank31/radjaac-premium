import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-tegal",
  seoTitle: "Jual AC Tegal | Stok, PK & Banyak Unit — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Tegal. Cek stok, harga, rekomendasi PK, opsi pengiriman, pemasangan, dan kebutuhan banyak unit untuk rumah, toko, kost, ruko, atau kantor.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Tegal dan sekitarnya, termasuk cek stok, rekomendasi PK, pilihan brand, opsi pengiriman, pemasangan, dan kebutuhan banyak unit sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA TEGAL",
  h1: "Jual AC Tegal",
  heroHighlight: "cek stok, rekomendasi PK, dan pembelian banyak unit",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Tegal dan sekitarnya. Bisa bantu cek stok, harga, rekomendasi PK, opsi pengiriman, serta kebutuhan banyak unit untuk rumah, toko, kost, ruko, atau kantor kecil sesuai konfirmasi lokasi, rute, dan jadwal.",
  primaryCta: "Tanya AC Tegal",
  waMessage:
    "Halo RADJA AC, saya dari Tegal. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  heroChips: ["Cek stok dulu", "Bisa banyak unit", "Rekomendasi PK", "Jadwal dikonfirmasi"],
  schemaAreas: ["Tegal", "Slawi", "Adiwerna", "Dukuhturi", "Talang", "Kramat", "Lebaksiu", "Balapulang", "Bumijawa", "Brebes", "Purwokerto", "Banyumas"],
  relatedAreaLinks: [["Purwokerto", "/jual-ac-purwokerto"], ["Banyumas", "/jual-ac-banyumas"], ["Banjarnegara", "/jual-ac-banjarnegara"]],
  bulkPurchase: {
    eyebrow: "KEBUTUHAN BANYAK UNIT",
    title: "Butuh AC untuk rumah, toko, kost, ruko, atau kantor?",
    description:
      "Untuk pembelian banyak unit, RADJA AC bantu cek kebutuhan ruangan, stok unit, pilihan brand, estimasi harga, opsi pengiriman, dan jadwal pemasangan. Semua dikonfirmasi dulu supaya pembelian lebih jelas dari awal.",
    cards: [
      ["Rumah & Hunian", "Bantu pilih AC sesuai ukuran kamar, ruang keluarga, daya listrik, dan budget."],
      ["Toko & Ruko", "AC untuk ruang usaha, kasir, display produk, ruang tunggu, atau area pelanggan."],
      ["Kost & Kantor Kecil", "Cek kebutuhan beberapa ruangan, stok unit, estimasi pengiriman, dan jadwal pemasangan."],
    ],
    ctaLabel: "Tanya Pembelian Banyak Unit",
    waMessage:
      "Halo RADJA AC, saya dari Tegal. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  },
  valueTitle: "Beli AC area Tegal lebih jelas dari awal",
  valueDescription:
    "Untuk area luar Purwokerto, konsultasi awal penting supaya stok, harga, jumlah unit, opsi pengiriman, dan estimasi pemasangan tidak mengambang.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, dan kebutuhan pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Tegal, pengiriman dan pemasangan menyesuaikan rute, lokasi, jumlah unit, dan jadwal teknisi.",
  processDescription:
    "Karena Tegal berada di luar area inti Purwokerto, pembelian satu unit maupun beberapa unit tetap perlu dikonfirmasi dulu berdasarkan alamat, jumlah AC, stok, rute, dan kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Tegal, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan."],
    ["Konfirmasi harga & jadwal", "Stok, opsi pengiriman, tambahan pekerjaan, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Tegal?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Tegal dan sekitarnya sesuai stok, rute, opsi pengiriman, lokasi, dan jadwal."],
    ["Apakah bisa beli AC beberapa unit sekaligus?", "Bisa. Untuk rumah, toko, kost, ruko, atau kantor kecil, jumlah unit akan dicek dulu sesuai stok, kebutuhan ruangan, pengiriman, dan jadwal pemasangan."],
    ["Apakah bisa pemasangan AC ke Tegal?", "Bisa untuk area dan kondisi tertentu setelah alamat, jumlah unit, akses lokasi, rute, dan kebutuhan pemasangan dikonfirmasi terlebih dahulu."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, jumlah unit, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Tegal?",
  finalCtaDescription:
    "Kirim lokasi, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, opsi pengiriman, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcTegal() {
  return <CompactAreaSalesPage config={areaConfig} />
}
