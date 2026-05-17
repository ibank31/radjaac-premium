import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-banjarnegara",
  seoTitle: "Jual AC Banjarnegara | Konsultasi PK, Stok & Pemasangan — RADJA AC",
  seoDescription:
    "RADJA AC melayani konsultasi pembelian AC untuk area Banjarnegara dan sekitarnya. Cek stok, harga, rekomendasi PK, estimasi pemasangan, dan jadwal sesuai konfirmasi lokasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Banjarnegara dan sekitarnya, termasuk cek stok, rekomendasi PK, pilihan brand, dan estimasi pemasangan sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA BANJARNEGARA",
  h1: "Jual AC Banjarnegara",
  heroHighlight: "cek stok, rekomendasi PK, dan estimasi pemasangan",
  heroDescription:
    "RADJA AC Purwokerto melayani konsultasi pembelian AC untuk area Banjarnegara dan sekitarnya. Bantu cek stok, harga, kapasitas PK, pilihan brand, dan estimasi pemasangan sesuai rute serta konfirmasi lokasi.",
  primaryCta: "Tanya AC Banjarnegara",
  waMessage:
    "Halo RADJA AC, saya dari area Banjarnegara. Mau tanya AC yang bisa konsultasi stok, harga, rekomendasi PK, dan estimasi pemasangan. Mohon bantu cek jadwal dan opsi pembelian sesuai lokasi saya.",
  schemaAreas: ["Banjarnegara", "Bawang", "Sigaluh", "Madukara", "Banjarmangu", "Rakit", "Purwareja Klampok", "Mandiraja", "Purwokerto", "Purbalingga", "Banyumas"],
  relatedAreaLinks: [["Purbalingga", "/jual-ac-purbalingga"], ["Purwokerto", "/jual-ac-purwokerto"], ["Banyumas", "/jual-ac-banyumas"]],
  valueTitle: "Beli AC area Banjarnegara lebih tenang dari awal",
  valueDescription:
    "Untuk area Banjarnegara, konsultasi awal membantu memastikan pilihan AC, stok, estimasi harga, dan jadwal pemasangan sebelum unit dikirim.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp agar pembelian tidak asal tebak.",
  valuePkText:
    "Ukuran ruangan, daya listrik, budget, dan pola pemakaian bisa dikirim dulu untuk bantu pilih kapasitas PK yang pas.",
  valueInstallText:
    "Estimasi pemasangan area Banjarnegara mengikuti rute, akses lokasi, jarak, kebutuhan pipa/kabel, dan titik indoor-outdoor.",
  processDescription:
    "Karena Banjarnegara berada di luar area inti Purwokerto, stok, harga, jadwal, dan pemasangan perlu dikonfirmasi dulu berdasarkan alamat serta kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Banjarnegara, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan kisaran harga sesuai kebutuhan."],
    ["Konfirmasi jadwal & biaya", "Estimasi pemasangan, tambahan pekerjaan, dan opsi pembayaran dikonfirmasi dulu sebelum unit dikirim atau jadwal dipasang."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Banjarnegara?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Banjarnegara dan sekitarnya sesuai stok, rute, dan jadwal pemasangan."],
    ["Apakah bisa pemasangan AC ke Banjarnegara?", "Bisa untuk area dan kondisi tertentu setelah alamat, stok, jadwal, akses lokasi, dan kebutuhan pemasangan dikonfirmasi terlebih dahulu."],
    ["Apakah harga sudah termasuk pemasangan?", "Tergantung tipe AC, paket, jarak, dan kondisi lokasi. Kebutuhan pipa/kabel tambahan, akses lokasi, dan pekerjaan khusus akan dicek dulu sebelum estimasi final."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia agar rekomendasi lebih jelas."],
  ],
  finalCtaTitle: "Mau beli AC area Banjarnegara?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi pemasangan, dan jadwal sesuai konfirmasi.",
}

export default function JualAcBanjarnegara() {
  return <CompactAreaSalesPage config={areaConfig} />
}
