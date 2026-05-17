import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-sokaraja",
  seoTitle: "Jual AC Sokaraja | Rumah, Toko & Kost Dekat Purwokerto — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Sokaraja. Cocok untuk rumah, toko, kost, ruko, kantor kecil, cek stok, rekomendasi PK, pengiriman, dan pemasangan.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Sokaraja dan sekitarnya, termasuk kebutuhan rumah, toko, kost, ruko, kantor kecil, cek stok, rekomendasi PK, pilihan brand, pengiriman, dan pemasangan sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA SOKARAJA",
  h1: "Jual AC Sokaraja",
  heroHighlight: "dekat Purwokerto, cocok untuk rumah dan usaha",
  heroDescription:
    "RADJA AC Purwokerto melayani konsultasi pembelian AC untuk area Sokaraja, Sokaraja Kulon, Sokaraja Wetan, Karangnanas, dan sekitar. Cocok untuk rumah, toko, kost, ruko, kantor kecil, atau pembelian beberapa unit dengan cek stok, rekomendasi PK, pengiriman, dan pemasangan sesuai lokasi.",
  primaryCta: "Tanya AC Sokaraja",
  waMessage:
    "Halo RADJA AC, saya dari Sokaraja. Mau tanya AC untuk rumah/toko/kost, cek stok, harga, rekomendasi PK, dan estimasi pemasangan.",
  heroChips: ["Dekat Purwokerto", "Rumah & toko", "Kost/ruko", "Cek PK dulu", "Jadwal fleksibel"],
  schemaAreas: ["Sokaraja", "Sokaraja Kulon", "Sokaraja Wetan", "Karangnanas", "Kembaran", "Kalibagor", "Patikraja", "Purwokerto Timur", "Purwokerto Selatan", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Purwokerto", "/jual-ac-purwokerto"], ["Ajibarang", "/jual-ac-ajibarang"]],
  bulkPurchase: {
    eyebrow: "AREA DEKAT PURWOKERTO",
    title: "Butuh AC untuk rumah, toko, kost, atau ruko area Sokaraja?",
    description:
      "Sokaraja termasuk area dekat Purwokerto, jadi pembelian AC bisa dikonsultasikan lebih praktis: cek stok, rekomendasi PK, pilihan brand, estimasi pemasangan, dan jadwal teknisi sesuai alamat.",
    cards: [
      ["Rumah & Kamar", "Bantu pilih AC untuk kamar, ruang keluarga, ruang kerja, atau hunian harian."],
      ["Toko & Ruko", "Cocok untuk area pelanggan, kasir, display produk, ruang tunggu, atau usaha kecil."],
      ["Kost & Banyak Unit", "Bisa diskusi kebutuhan beberapa kamar dengan pilihan brand hemat, low watt, atau inverter."],
    ],
    ctaLabel: "Tanya AC Area Sokaraja",
    waMessage:
      "Halo RADJA AC, saya dari Sokaraja. Mau konsultasi AC untuk rumah/toko/kost/ruko. Mohon bantu cek stok, rekomendasi PK, estimasi harga, dan jadwal pemasangan.",
  },
  valueTitle: "Beli AC area Sokaraja lebih praktis dari awal",
  valueDescription:
    "Karena Sokaraja dekat dengan Purwokerto, konsultasi bisa fokus ke kebutuhan unit, ukuran ruangan, daya listrik, stok, dan jadwal pemasangan yang cocok.",
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
    ["Apakah RADJA AC melayani jual AC area Sokaraja?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Sokaraja dan sekitarnya sesuai stok, rute, lokasi, dan jadwal."],
    ["Apakah cocok untuk rumah, toko, ruko, dan kost?", "Bisa. Kebutuhan rumah, toko, ruko, kost, atau kantor kecil akan dicek berdasarkan ukuran ruangan, daya listrik, budget, dan jumlah unit."],
    ["Apakah bisa pemasangan AC ke Sokaraja?", "Bisa untuk area dan kondisi tertentu setelah alamat, akses titik pemasangan, kebutuhan material, dan jadwal teknisi dikonfirmasi terlebih dahulu."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Sokaraja?",
  finalCtaDescription:
    "Kirim lokasi, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcSokaraja() {
  return <CompactAreaSalesPage config={areaConfig} />
}
