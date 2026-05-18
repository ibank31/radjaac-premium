import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-sokaraja",
  seoTitle: "Jual AC Sokaraja | Dekat Purwokerto untuk Rumah, Toko & Kost — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Sokaraja yang dekat Purwokerto. Cocok untuk rumah, toko, ruko, kost, kantor kecil, cek stok, rekomendasi PK, pengiriman, dan pemasangan by konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Sokaraja dan sekitarnya, termasuk kebutuhan rumah dekat kota, toko, kost, ruko, kantor kecil, cek stok, rekomendasi PK, pilihan brand, pengiriman, dan pemasangan sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA SOKARAJA",
  h1: "Jual AC Sokaraja",
  heroHighlight: "Dekat Purwokerto, Lebih Mudah Konsultasi",
  heroDescription:
    "Beli AC di Sokaraja tidak perlu bingung pilih sendiri. RADJA AC bantu konsultasi pilihan AC untuk rumah, kos, toko, kantor kecil, atau usaha lokal. Cukup chat WhatsApp, kirim ukuran ruangan, daya listrik, foto titik indoor-outdoor, dan budget. Nanti kami bantu cek pilihan PK, brand, stok, kisaran harga, dan jadwal pemasangan.",
  primaryCta: "Tanya AC Sokaraja",
  waMessage:
    "Halo RADJA AC, saya dari Sokaraja. Mau tanya AC untuk rumah/toko/kost/ruko dekat Purwokerto, cek stok, harga, rekomendasi PK, dan estimasi pemasangan.",
  heroChips: ["Dekat Purwokerto", "Rumah & toko", "Kost/ruko", "Cek PK dulu", "Pasang by konfirmasi"],
  schemaAreas: ["Sokaraja", "Sokaraja Kulon", "Sokaraja Wetan", "Karangnanas", "Kembaran", "Kalibagor", "Patikraja", "Purwokerto Timur", "Purwokerto Selatan", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Purwokerto", "/jual-ac-purwokerto"], ["Ajibarang", "/jual-ac-ajibarang"]],
  bulkPurchase: {
    eyebrow: "AREA DEKAT PURWOKERTO",
    title: "Butuh AC untuk rumah, toko, kost, atau ruko area Sokaraja?",
    description:
      "Sokaraja termasuk area dekat Purwokerto, jadi pembelian AC bisa dikonsultasikan lebih praktis. RADJA AC bantu cek stok, rekomendasi PK, pilihan brand, estimasi kebutuhan pasang, dan jadwal teknisi sesuai alamat.",
    cards: [
      ["Rumah & Kamar", "Bantu pilih AC untuk kamar, ruang keluarga, ruang kerja, atau hunian harian sekitar Sokaraja."],
      ["Toko & Ruko", "Cocok untuk area pelanggan, kasir, display produk, ruang tunggu, atau usaha kecil dekat Purwokerto."],
      ["Kost & Banyak Unit", "Bisa diskusi kebutuhan beberapa kamar dengan pilihan brand hemat, low watt, atau inverter."],
    ],
    ctaLabel: "Tanya AC Area Sokaraja",
    waMessage:
      "Halo RADJA AC, saya dari Sokaraja. Mau konsultasi AC untuk rumah/toko/kost/ruko. Mohon bantu cek stok, rekomendasi PK, estimasi harga, dan jadwal pemasangan sesuai lokasi.",
  },
  valueTitle: "Beli AC area Sokaraja lebih praktis dari awal",
  valueDescription:
    "Karena Sokaraja dekat dengan Purwokerto, konsultasi bisa fokus ke kebutuhan unit, ukuran ruangan, daya listrik, stok, dan jadwal pemasangan yang realistis.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran kamar, ruang usaha, daya listrik, dan jam pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Sokaraja, pemasangan menyesuaikan alamat, akses titik indoor-outdoor, kebutuhan material, jumlah unit, dan jadwal teknisi.",
  processDescription:
    "Pembelian AC area Sokaraja tetap perlu dikonfirmasi dulu supaya jelas sejak awal: stok unit, kebutuhan PK, estimasi pemasangan, dan jadwal teknisi.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Sokaraja, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan rumah atau usaha."],
    ["Konfirmasi harga & jadwal", "Stok, biaya tambahan material, akses lokasi, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, jenis ruangan, dan target pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Sokaraja?", "Ya. RADJA AC dari Purwokerto melayani konsultasi dan pembelian AC untuk area Sokaraja dan sekitarnya."],
    ["Apakah bisa konsultasi dulu sebelum beli AC?", "Bisa. Cukup chat WhatsApp, lalu kirim ukuran ruangan, daya listrik, dan foto titik indoor-outdoor supaya pilihan AC lebih tepat."],
    ["Apa yang perlu dikirim saat chat WhatsApp?", "Sebutkan lokasi, ukuran ruangan, daya listrik, foto titik pemasangan indoor-outdoor, dan budget. Nanti kami bantu cek pilihan unit, stok, dan jadwal pemasangan."],
  ],
  finalCtaTitle: "Mau beli AC area Sokaraja?",
  finalCtaDescription:
    "Kirim lokasi, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcSokaraja() {
  return <CompactAreaSalesPage config={areaConfig} />
}
