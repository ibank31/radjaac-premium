import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-wangon",
  seoTitle: "Jual AC Wangon | Stok, PK & Banyak Unit — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Wangon. Cek stok, harga, rekomendasi PK, pengiriman, pemasangan, dan kebutuhan banyak unit untuk toko, kost, ruko, atau kantor.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Wangon dan sekitarnya, termasuk cek stok, rekomendasi PK, pilihan brand, pengiriman, pemasangan, dan kebutuhan banyak unit sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA WANGON",
  h1: "Jual AC Wangon",
  heroHighlight: "cek stok, rekomendasi PK, dan pembelian banyak unit",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Wangon dan sekitarnya. Bisa bantu cek stok, harga, rekomendasi PK, pengiriman, serta kebutuhan banyak unit untuk toko, kost, ruko, atau kantor sesuai konfirmasi lokasi dan jadwal.",
  primaryCta: "Tanya AC Wangon",
  waMessage:
    "Halo RADJA AC, saya dari area Wangon. Mau konsultasi pembelian AC.",
  heroChips: ["Cek stok dulu", "Bisa banyak unit", "Rekomendasi PK", "Jadwal dikonfirmasi"],
  schemaAreas: ["Wangon", "Wangon Kulon", "Wangon Wetan", "Jambu", "Rawaheng", "Cikakak", "Randegan", "Ajibarang", "Lumbir", "Jatilawang", "Purwojati", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Ajibarang", "/jual-ac-ajibarang"], ["Jatilawang", "/jual-ac-jatilawang"]],
  valueTitle: "Beli AC area Wangon lebih jelas dari awal",
  valueDescription:
    "Konsultasi awal membantu memastikan stok, harga, jumlah unit, pengiriman, dan estimasi pemasangan tidak mengambang.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, dan kebutuhan pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Wangon, pengiriman dan pemasangan menyesuaikan rute, lokasi, jumlah unit, dan jadwal teknisi.",
  processDescription:
    "Pembelian satu unit maupun banyak unit area Wangon tetap perlu dikonfirmasi dulu berdasarkan alamat, jumlah AC, stok, dan kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Wangon, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan."],
    ["Konfirmasi harga & jadwal", "Stok, pengiriman, tambahan pekerjaan, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Wangon?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Wangon dan sekitarnya sesuai stok, rute, lokasi, dan jadwal."],
    ["Apakah bisa beli AC beberapa unit sekaligus?", "Bisa. Untuk toko, kost, ruko, atau kantor, jumlah unit akan dicek dulu sesuai stok, kebutuhan ruangan, pengiriman, dan jadwal pemasangan."],
    ["Apakah bisa pemasangan AC ke Wangon?", "Bisa untuk area dan kondisi tertentu setelah alamat, jumlah unit, akses lokasi, dan kebutuhan pemasangan dikonfirmasi terlebih dahulu."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, jumlah unit, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Wangon?",
  finalCtaDescription:
    "Kirim lokasi, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcWangon() {
  return <CompactAreaSalesPage config={areaConfig} />
}
