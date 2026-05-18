import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-ajibarang",
  seoTitle: "Jual AC Ajibarang | Hub Banyumas Barat untuk Rumah, Toko & Kost — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Ajibarang dan Banyumas barat. Konsultasi unit AC untuk rumah, toko, kost, ruko, banyak unit, pengiriman, dan pemasangan by konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Ajibarang dan sekitarnya, termasuk kebutuhan rumah, toko, kost, ruko, kantor kecil, banyak unit area Banyumas barat, cek stok, rekomendasi PK, pilihan brand, pengiriman, dan pemasangan sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA AJIBARANG",
  h1: "Jual AC Ajibarang",
  heroHighlight: "Dari Purwokerto, Kami Siap Layani",
  heroDescription:
    "Butuh AC untuk rumah, kos, toko, atau usaha di Ajibarang? RADJA AC bantu konsultasi dulu supaya pilihan AC lebih sesuai dengan ukuran ruangan, daya listrik, dan budget. Cukup chat WhatsApp, kirim foto lokasi pemasangan, ukuran ruangan, dan kebutuhan pemakaian. Nanti kami bantu cek pilihan unit, stok, kisaran harga, dan jadwal pemasangan.",
  primaryCta: "Tanya AC Ajibarang",
  waMessage:
    "Halo RADJA AC, saya dari Ajibarang. Mau tanya AC untuk rumah/toko/kost/ruko area Banyumas barat, cek stok, harga, rekomendasi PK, dan opsi pengiriman atau pemasangan.",
  heroChips: ["Banyumas barat", "Rumah & kamar", "Toko/ruko", "Kost/banyak unit", "Lokasi dicek dulu"],
  schemaAreas: ["Ajibarang", "Ajibarang Kulon", "Ajibarang Wetan", "Pancasan", "Lesmana", "Kracak", "Cilongok", "Pekuncen", "Wangon", "Karanglewas", "Purwojati", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Cilongok", "/jual-ac-cilongok"], ["Wangon", "/jual-ac-wangon"]],
  bulkPurchase: {
    eyebrow: "HUB BANYUMAS BARAT",
    title: "Butuh AC untuk rumah, toko, kost, atau ruko area Ajibarang?",
    description:
      "Ajibarang sering jadi titik strategis Banyumas barat. Kebutuhan AC bisa dimulai dari satu unit rumah, beberapa kamar kost, sampai toko dan ruko. RADJA AC bantu cek ukuran ruangan, daya listrik, stok, brand, estimasi harga, pengiriman, dan opsi pemasangan sesuai lokasi.",
    cards: [
      ["Rumah & Kamar", "Bantu pilih AC untuk kamar tidur, ruang keluarga kecil, ruang kerja, atau hunian harian."],
      ["Toko & Ruko", "Cocok untuk area pelanggan, kasir, display produk, ruang tunggu, atau ruang usaha kecil."],
      ["Kost & Banyak Unit", "Bisa konsultasi kebutuhan beberapa kamar dengan pilihan brand hemat, low watt, atau inverter."],
    ],
    ctaLabel: "Tanya AC Ajibarang",
    waMessage:
      "Halo RADJA AC, saya dari Ajibarang. Mau konsultasi AC untuk rumah/toko/kost/ruko atau banyak unit. Mohon bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, dan opsi pemasangan.",
  },
  valueTitle: "Beli AC area Ajibarang lebih jelas dari awal",
  valueDescription:
    "Untuk area Ajibarang dan Banyumas barat, data lokasi, jenis ruangan, jumlah unit, dan kondisi pemasangan membantu estimasi stok, harga, pengiriman, dan jadwal jadi lebih jelas.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, jenis ruangan, dan jam pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Ajibarang, pengiriman dan pemasangan menyesuaikan alamat, rute, akses lokasi, jumlah unit, kebutuhan material, dan jadwal teknisi.",
  processDescription:
    "Pembelian satu unit maupun banyak unit area Ajibarang tetap perlu dikonfirmasi dulu berdasarkan alamat, jenis ruangan, jumlah AC, stok, dan kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Ajibarang, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan rumah atau usaha."],
    ["Konfirmasi harga & jadwal", "Stok, pengiriman, tambahan material, akses lokasi, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari jenis ruangan, ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Ajibarang?", "Ya. RADJA AC dari Purwokerto melayani konsultasi AC untuk Ajibarang dan Banyumas barat."],
    ["Apakah bisa konsultasi dulu sebelum beli AC?", "Bisa. Cukup chat WhatsApp dan kirim data ruangan, daya listrik, dan foto titik pemasangan supaya rekomendasi lebih pas."],
    ["Apa yang perlu dikirim saat chat WhatsApp?", "Kirim foto lokasi pemasangan, ukuran ruangan, kebutuhan pemakaian, daya listrik, dan budget. Nanti kami bantu cek pilihan unit, stok, kisaran harga, dan jadwal pemasangan."],
  ],
  finalCtaTitle: "Mau beli AC area Ajibarang?",
  finalCtaDescription:
    "Kirim lokasi, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcAjibarang() {
  return <CompactAreaSalesPage config={areaConfig} />
}
