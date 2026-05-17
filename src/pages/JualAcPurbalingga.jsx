import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-purbalingga",
  seoTitle: "Jual AC Purbalingga | Stok, PK & Banyak Unit — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Purbalingga. Cek stok, harga, rekomendasi PK, pengiriman, pemasangan, dan kebutuhan banyak unit untuk toko, kost, ruko, kantor, atau proyek.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Purbalingga dan sekitarnya, termasuk cek stok, rekomendasi PK, pilihan brand, pengiriman, pemasangan, dan kebutuhan banyak unit sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA PURBALINGGA",
  h1: "Jual AC Purbalingga",
  heroHighlight: "cek stok, rekomendasi PK, dan pembelian banyak unit",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Purbalingga dan sekitarnya. Bisa bantu cek stok, harga, rekomendasi PK, pengiriman, serta kebutuhan banyak unit untuk toko, kost, ruko, kantor kecil, atau proyek sesuai konfirmasi lokasi dan jadwal.",
  primaryCta: "Tanya AC Purbalingga",
  waMessage:
    "Halo RADJA AC, saya dari Purbalingga. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  heroChips: ["Cek stok dulu", "Bisa banyak unit", "Rekomendasi PK", "Jadwal dikonfirmasi"],
  schemaAreas: ["Purbalingga", "Kalimanah", "Padamara", "Bojongsari", "Bobotsari", "Mrebet", "Bukateja", "Kutasari", "Kemangkon", "Purwokerto", "Sokaraja", "Banyumas"],
  relatedAreaLinks: [["Purwokerto", "/jual-ac-purwokerto"], ["Banyumas", "/jual-ac-banyumas"], ["Sokaraja", "/jual-ac-sokaraja"]],
  bulkPurchase: {
    eyebrow: "KEBUTUHAN BANYAK UNIT",
    title: "Butuh AC untuk toko, kost, ruko, atau proyek?",
    description:
      "Untuk pembelian banyak unit, RADJA AC bantu cek kebutuhan ruangan, stok unit, pilihan brand, estimasi harga, pengiriman, dan jadwal pemasangan. Semua dikonfirmasi dulu supaya pembelian lebih jelas dari awal.",
    cards: [
      ["Toko & Ruko", "AC untuk ruang usaha, kasir, display produk, ruang tunggu, atau area pelanggan."],
      ["Kost & Kontrakan", "Bantu pilih AC sesuai jumlah kamar, ukuran ruangan, daya listrik, dan budget."],
      ["Kantor & Proyek Ringan", "Cek kebutuhan beberapa ruangan, stok unit, estimasi pengiriman, dan jadwal pemasangan."],
    ],
    ctaLabel: "Tanya Pembelian Banyak Unit",
    waMessage:
      "Halo RADJA AC, saya dari Purbalingga. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  },
  valueTitle: "Beli AC area Purbalingga lebih jelas dari awal",
  valueDescription:
    "Untuk area luar Purwokerto, konsultasi awal penting supaya stok, harga, jumlah unit, pengiriman, dan estimasi pemasangan tidak mengambang.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, dan kebutuhan pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Purbalingga, pengiriman dan pemasangan menyesuaikan rute, lokasi, jumlah unit, dan jadwal teknisi.",
  processDescription:
    "Karena Purbalingga berada di luar area inti Purwokerto, pembelian satu unit maupun banyak unit tetap perlu dikonfirmasi dulu berdasarkan alamat, jumlah AC, stok, dan kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Purbalingga, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan."],
    ["Konfirmasi harga & jadwal", "Stok, pengiriman, tambahan pekerjaan, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Purbalingga?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Purbalingga dan sekitarnya sesuai stok, rute, lokasi, dan jadwal."],
    ["Apakah bisa beli AC beberapa unit sekaligus?", "Bisa. Untuk toko, kost, ruko, kantor kecil, atau proyek, jumlah unit akan dicek dulu sesuai stok, kebutuhan ruangan, pengiriman, dan jadwal pemasangan."],
    ["Apakah bisa pemasangan AC ke Purbalingga?", "Bisa untuk area dan kondisi tertentu setelah alamat, jumlah unit, akses lokasi, dan kebutuhan pemasangan dikonfirmasi terlebih dahulu."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, jumlah unit, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Purbalingga?",
  finalCtaDescription:
    "Kirim lokasi, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcPurbalingga() {
  return <CompactAreaSalesPage config={areaConfig} />
}
