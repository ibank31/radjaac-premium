import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-tegal",
  seoTitle: "Jual AC Tegal | Unit Only, Pasang & Banyak Unit — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Tegal. Bisa unit only atau sekalian pasang sesuai konfirmasi lokasi untuk rumah, toko, ruko, kost, kantor, dan kebutuhan banyak unit.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Tegal dan sekitarnya, termasuk unit only, rekomendasi PK, pilihan brand, opsi pengiriman, pemasangan, dan kebutuhan banyak unit sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA TEGAL",
  h1: "Jual AC Tegal",
  heroHighlight: "unit only, sekalian pasang, dan banyak unit",
  heroDescription:
    "RADJA AC melayani konsultasi pembelian AC untuk area Tegal, Slawi, Adiwerna, Dukuhturi, Talang, Kramat, dan sekitarnya. Cocok untuk unit only, pengadaan beberapa unit, atau sekalian pemasangan yang dikonfirmasi dulu berdasarkan lokasi, jumlah unit, rute, dan jadwal teknisi.",
  primaryCta: "Tanya AC Tegal",
  waMessage:
    "Halo RADJA AC, saya dari Tegal. Mau tanya AC unit only / sekalian pasang, cek stok, harga, dan estimasi pengiriman atau pemasangan.",
  heroChips: ["Unit only bisa", "Sekalian pasang", "Bisa banyak unit", "Lokasi dicek dulu", "Harga proyek menyesuaikan"],
  schemaAreas: ["Tegal", "Slawi", "Adiwerna", "Dukuhturi", "Talang", "Kramat", "Lebaksiu", "Balapulang", "Bumijawa", "Brebes", "Purwokerto", "Banyumas"],
  relatedAreaLinks: [["Purwokerto", "/jual-ac-purwokerto"], ["Banyumas", "/jual-ac-banyumas"], ["Banjarnegara", "/jual-ac-banjarnegara"]],
  bulkPurchase: {
    eyebrow: "UNIT ONLY & BANYAK UNIT",
    title: "Butuh AC untuk toko, ruko, kost, kantor, atau pengadaan area Tegal?",
    description:
      "Untuk Tegal, pembelian AC paling aman dikonsultasikan dari awal: mau unit only, sekalian pasang, atau kebutuhan banyak unit. RADJA AC bantu cek stok, pilihan brand, rekomendasi PK, estimasi harga, opsi pengiriman, dan jadwal pemasangan sesuai konfirmasi lokasi.",
    cards: [
      ["Unit Only", "Cocok untuk pembeli yang sudah punya teknisi sendiri, kontraktor, pengelola kost, atau pengadaan beberapa unit."],
      ["Toko, Ruko & Kantor", "AC untuk ruang usaha, area pelanggan, display produk, kasir, ruang kerja, atau kantor kecil."],
      ["Kost & Banyak Kamar", "Bantu hitungkan kebutuhan AC beberapa ruangan dengan pilihan brand hemat, low watt, atau inverter."],
    ],
    ctaLabel: "Tanya Unit Only / Banyak Unit",
    waMessage:
      "Halo RADJA AC, saya dari Tegal. Mau tanya AC unit only / banyak unit. Mohon bantu cek stok, harga, dan opsi pengiriman atau pemasangan.",
  },
  valueTitle: "Beli AC area Tegal lebih fleksibel",
  valueDescription:
    "Karena Tegal berada di luar area inti Purwokerto, sistemnya dibuat fleksibel: unit only bisa, sekalian pasang bisa dikonsultasikan, dan pembelian banyak unit bisa dibuatkan estimasi khusus.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk Tegal dan sekitarnya, pengiriman dan pemasangan menyesuaikan rute, jumlah unit, akses lokasi, dan jadwal teknisi.",
  processDescription:
    "Pembelian AC area Tegal perlu dikonfirmasi dulu agar jelas sejak awal: apakah unit only, sekalian pasang, banyak unit, atau pengadaan bertahap. Data lokasi dan jumlah unit membantu estimasi lebih akurat.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Tegal/Slawi/sekitarnya, jumlah unit, kebutuhan unit only atau pasang, ukuran ruangan, daya listrik, dan budget."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, estimasi harga, dan opsi pengiriman."],
    ["Konfirmasi pengiriman / pemasangan", "Harga final, tambahan material, akses titik pemasangan, rute, dan jadwal teknisi dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, jumlah unit, dan target pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Tegal?", "Ya. RADJA AC melayani konsultasi pembelian AC untuk area Tegal dan sekitarnya, terutama untuk unit only, sekalian pasang sesuai konfirmasi lokasi, dan kebutuhan banyak unit."],
    ["Bisa beli unit only tanpa pemasangan?", "Bisa. Unit only cocok untuk pembeli yang sudah punya teknisi sendiri, kontraktor, pengelola kost, toko, ruko, atau pengadaan beberapa unit."],
    ["Apakah bisa pemasangan AC ke Tegal?", "Bisa dikonsultasikan dulu. Pemasangan menyesuaikan alamat, jumlah unit, akses lokasi, kebutuhan material, rute, dan jadwal teknisi."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi, jumlah unit, kebutuhan unit only atau pasang, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Tegal?",
  finalCtaDescription:
    "Kirim lokasi, jumlah unit, kebutuhan unit only atau sekalian pasang, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, opsi pengiriman, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcTegal() {
  return <CompactAreaSalesPage config={areaConfig} />
}
