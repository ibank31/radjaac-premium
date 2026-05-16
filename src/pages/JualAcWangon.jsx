import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-wangon",
  seoTitle: "Jual AC Wangon Bisa COD | Stok & Pemasangan — RADJA AC",
  seoDescription:
    "RADJA AC melayani jual AC area Wangon dan sekitarnya. Bisa konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Wangon dan sekitarnya, termasuk cek stok, rekomendasi PK, opsi COD, dan estimasi pemasangan.",
  heroBadge: "JUAL AC AREA WANGON",
  h1: "Jual AC Wangon",
  heroHighlight: "cek stok, rekomendasi PK, dan pemasangan",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Wangon dan sekitarnya. Konsultasi stok, harga, kapasitas PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi lokasi.",
  primaryCta: "Tanya AC Wangon",
  waMessage:
    "Halo RADJA AC, saya dari area Wangon. Mau tanya AC yang bisa COD/bayar di tempat. Mohon bantu cek stok, harga, rekomendasi PK, dan estimasi pemasangan AC.",
  schemaAreas: ["Wangon", "Wangon Kulon", "Wangon Wetan", "Jambu", "Rawaheng", "Cikakak", "Randegan", "Ajibarang", "Lumbir", "Jatilawang", "Purwojati", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Ajibarang", "/jual-ac-ajibarang"], ["Jatilawang", "/jual-ac-jatilawang"]],
  valueTitle: "Beli AC area Wangon lebih jelas dari awal",
  valueDescription:
    "Untuk Wangon dan sekitarnya, estimasi pembelian perlu menyesuaikan rute, stok, dan kondisi titik pemasangan.",
  valueStockText:
    "Stok unit, tipe AC, dan kisaran harga dibahas dulu lewat WhatsApp agar pilihan tidak meleset dari budget.",
  valuePkText:
    "Kirim ukuran ruangan dan daya listrik agar rekomendasi PK, low watt, atau inverter sesuai kebutuhan harian.",
  valueInstallText:
    "Pemasangan area Wangon menyesuaikan akses lokasi, jarak, kebutuhan pipa/kabel, dan posisi outdoor.",
  processDescription:
    "Untuk area Wangon, estimasi harga dan jadwal akan lebih jelas setelah lokasi, ukuran ruangan, dan kondisi pemasangan dicek.",
  processSteps: [
    ["Kirim lokasi & ukuran ruangan", "Sebutkan area Wangon, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, low watt/inverter, dan kisaran harga."],
    ["Konfirmasi harga & jadwal", "Estimasi pemasangan, tambahan pekerjaan, dan opsi COD/bayar di tempat dikonfirmasi sebelum unit dikirim."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Wangon?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Wangon, Rawaheng, Ajibarang, Jatilawang, dan area terdekat sesuai rute."],
    ["Apakah bisa beli AC area Wangon dengan COD?", "Bisa untuk area dan kondisi tertentu setelah stok, jadwal, lokasi, dan kebutuhan pemasangan dikonfirmasi."],
    ["Apakah harga sudah termasuk pemasangan?", "Tergantung tipe AC, paket, dan kondisi lokasi. Kebutuhan pipa/kabel tambahan, akses lokasi, dan pekerjaan khusus akan dicek dulu."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Wangon?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, kapasitas PK, estimasi pemasangan, dan opsi COD sesuai konfirmasi.",
}

export default function JualAcWangon() {
  return <CompactAreaSalesPage config={areaConfig} />
}
