import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-sokaraja",
  seoTitle: "Jual AC Sokaraja | Stok, PK & Banyak Unit — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Sokaraja. Cek stok, harga, rekomendasi PK, pengiriman, pemasangan, dan kebutuhan banyak unit untuk toko, kost, ruko, kantor, atau proyek.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Sokaraja dan sekitarnya, termasuk cek stok, rekomendasi PK, pilihan brand, pengiriman, pemasangan, dan kebutuhan banyak unit sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA SOKARAJA",
  h1: "Jual AC Sokaraja",
  heroHighlight: "cek stok, rekomendasi PK, dan pembelian banyak unit",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Sokaraja dan sekitarnya. Bisa bantu cek stok, harga, rekomendasi PK, pengiriman, serta kebutuhan banyak unit untuk toko, kost, ruko, kantor kecil, atau proyek sesuai konfirmasi lokasi dan jadwal.",
  primaryCta: "Tanya AC Sokaraja",
  waMessage:
    "Halo RADJA AC, saya dari Sokaraja. Mau tanya AC, cek stok, harga, dan estimasi pemasangan.",
  heroChips: ["Cek stok dulu", "Bisa banyak unit", "Rekomendasi PK", "Jadwal dikonfirmasi"],
  schemaAreas: ["Sokaraja", "Sokaraja Kulon", "Sokaraja Wetan", "Karangnanas", "Kembaran", "Kalibagor", "Patikraja", "Purwokerto Timur", "Purwokerto Selatan", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Purwokerto", "/jual-ac-purwokerto"], ["Ajibarang", "/jual-ac-ajibarang"]],
  valueTitle: "Beli AC area Sokaraja lebih jelas dari awal",
  valueDescription:
    "Untuk area luar Purwokerto, konsultasi awal penting supaya stok, harga, jumlah unit, pengiriman, dan estimasi pemasangan tidak mengambang.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, dan kebutuhan pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Sokaraja, pengiriman dan pemasangan menyesuaikan rute, lokasi, jumlah unit, dan jadwal teknisi.",
  processDescription:
    "Karena Sokaraja berada di luar halaman inti Purwokerto, pembelian satu unit maupun banyak unit tetap perlu dikonfirmasi dulu berdasarkan alamat, jumlah AC, stok, dan kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Sokaraja, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan."],
    ["Konfirmasi harga & jadwal", "Stok, pengiriman, tambahan pekerjaan, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Sokaraja?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Sokaraja dan sekitarnya sesuai stok, rute, lokasi, dan jadwal."],
    ["Apakah bisa beli AC beberapa unit sekaligus?", "Bisa. Untuk toko, kost, ruko, kantor kecil, atau proyek, jumlah unit akan dicek dulu sesuai stok, kebutuhan ruangan, pengiriman, dan jadwal pemasangan."],
    ["Apakah bisa pemasangan AC ke Sokaraja?", "Bisa untuk area dan kondisi tertentu setelah alamat, jumlah unit, akses lokasi, dan kebutuhan pemasangan dikonfirmasi terlebih dahulu."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, jumlah unit, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Sokaraja?",
  finalCtaDescription:
    "Kirim lokasi, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcSokaraja() {
  return <CompactAreaSalesPage config={areaConfig} />
}