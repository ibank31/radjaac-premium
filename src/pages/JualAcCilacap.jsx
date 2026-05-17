import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-cilacap",
  seoTitle: "Jual AC Cilacap | Konsultasi PK, Stok & Pengiriman — RADJA AC",
  seoDescription:
    "RADJA AC melayani konsultasi pembelian AC untuk area Cilacap dan sekitarnya. Cek stok, harga, rekomendasi PK, pengiriman, dan estimasi pemasangan sesuai konfirmasi lokasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Cilacap dan sekitarnya, termasuk cek stok, rekomendasi PK, pilihan brand, pengiriman, dan estimasi pemasangan sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA CILACAP",
  h1: "Jual AC Cilacap",
  heroHighlight: "cek stok, rekomendasi PK, dan opsi pengiriman",
  heroDescription:
    "RADJA AC Purwokerto melayani konsultasi pembelian AC untuk area Cilacap dan sekitarnya. Bantu cek stok, harga, kapasitas PK, pilihan brand, opsi pengiriman, dan estimasi pemasangan sesuai konfirmasi lokasi.",
  primaryCta: "Tanya AC Cilacap",
  waMessage:
    "Halo RADJA AC, saya dari area Cilacap. Mau tanya AC yang bisa konsultasi stok, harga, rekomendasi PK, opsi pengiriman, dan estimasi pemasangan. Mohon bantu cek jadwal dan opsi pembelian sesuai lokasi saya.",
  schemaAreas: ["Cilacap", "Maos", "Kroya", "Sampang", "Adipala", "Kesugihan", "Jeruklegi", "Majenang", "Sidareja", "Purwokerto", "Banyumas", "Wangon"],
  relatedAreaLinks: [["Wangon", "/jual-ac-wangon"], ["Banyumas", "/jual-ac-banyumas"], ["Purwokerto", "/jual-ac-purwokerto"]],
  valueTitle: "Beli AC area Cilacap perlu dicek lebih jelas",
  valueDescription:
    "Karena wilayah Cilacap cukup luas, konsultasi awal membantu memastikan stok, pilihan AC, opsi pengiriman, dan estimasi pemasangan sesuai lokasi.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum opsi pembelian dikunci.",
  valuePkText:
    "Kirim ukuran ruangan, daya listrik, budget, dan pola pemakaian agar rekomendasi PK lebih sesuai kebutuhan.",
  valueInstallText:
    "Untuk area Cilacap, estimasi pemasangan atau pengiriman menyesuaikan alamat, rute, akses lokasi, dan kebutuhan pipa/kabel.",
  processDescription:
    "Cilacap memiliki area yang luas, jadi stok, pengiriman, jadwal, dan estimasi pemasangan perlu dikonfirmasi dulu berdasarkan alamat serta kondisi titik pemasangan.",
  processSteps: [
    ["Kirim alamat & kebutuhan", "Sebutkan area Cilacap, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan kisaran harga sesuai kebutuhan."],
    ["Konfirmasi opsi terbaik", "Opsi pengiriman, estimasi pemasangan, tambahan pekerjaan, dan pembayaran dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Cilacap?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Cilacap dan sekitarnya sesuai stok, rute, opsi pengiriman, dan jadwal pemasangan."],
    ["Apakah bisa pemasangan AC ke Cilacap?", "Bisa untuk area dan kondisi tertentu setelah alamat, stok, jadwal, akses lokasi, dan kebutuhan pemasangan dikonfirmasi terlebih dahulu."],
    ["Apakah bisa hanya beli unit AC untuk dikirim?", "Bisa dikonsultasikan. Opsi pembelian unit, pengiriman, dan pemasangan akan menyesuaikan stok, alamat, dan kebutuhan pelanggan."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia agar rekomendasi lebih jelas."],
  ],
  finalCtaTitle: "Mau beli AC area Cilacap?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, opsi pengiriman, dan estimasi pemasangan sesuai konfirmasi.",
}

export default function JualAcCilacap() {
  return <CompactAreaSalesPage config={areaConfig} />
}
