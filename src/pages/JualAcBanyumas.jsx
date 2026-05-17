import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-banyumas",
  seoTitle: "Jual AC Banyumas | Stok, PK & Banyak Unit — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Banyumas. Cek stok, harga, rekomendasi PK, pengiriman, pemasangan, dan kebutuhan banyak unit untuk toko, kost, ruko, kantor, atau proyek.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Banyumas dan sekitarnya, termasuk cek stok, rekomendasi PK, pilihan brand, pengiriman, pemasangan, dan kebutuhan banyak unit sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA BANYUMAS",
  h1: "Jual AC Banyumas",
  heroHighlight: "cek stok, rekomendasi PK, dan pembelian banyak unit",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Banyumas dan sekitarnya. Bisa bantu cek stok, harga, rekomendasi PK, pengiriman, serta kebutuhan banyak unit untuk toko, kost, ruko, kantor kecil, atau proyek sesuai konfirmasi lokasi dan jadwal.",
  primaryCta: "Tanya AC Banyumas",
  waMessage:
    "Halo RADJA AC, saya dari area Banyumas. Mau konsultasi pembelian AC.",
  heroChips: ["Cek stok dulu", "Bisa banyak unit", "Rekomendasi PK", "Jadwal dikonfirmasi"],
  schemaAreas: ["Purwokerto", "Sokaraja", "Kembaran", "Baturraden", "Karanglewas", "Kedungbanteng", "Cilongok", "Ajibarang", "Wangon", "Banyumas", "Patikraja", "Kalibagor"],
  relatedAreaLinks: [["Sokaraja", "/jual-ac-sokaraja"], ["Ajibarang", "/jual-ac-ajibarang"], ["Wangon", "/jual-ac-wangon"], ["Cilongok", "/jual-ac-cilongok"], ["Jatilawang", "/jual-ac-jatilawang"]],
  valueTitle: "Beli AC area Banyumas lebih jelas dari awal",
  valueDescription:
    "Untuk area luar Purwokerto, konsultasi awal penting supaya stok, harga, jumlah unit, pengiriman, dan estimasi pemasangan tidak mengambang.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, dan kebutuhan pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Banyumas, pengiriman dan pemasangan menyesuaikan rute, lokasi, jumlah unit, dan jadwal teknisi.",
  processDescription:
    "Karena area Banyumas cukup luas, pembelian satu unit maupun banyak unit tetap perlu dikonfirmasi dulu berdasarkan alamat, jumlah AC, stok, dan kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Banyumas, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan."],
    ["Konfirmasi harga & jadwal", "Stok, pengiriman, tambahan pekerjaan, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian.",
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Banyumas?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Banyumas dan sekitarnya sesuai stok, rute, lokasi, dan jadwal."],
    ["Apakah bisa beli AC beberapa unit sekaligus?", "Bisa. Untuk toko, kost, ruko, kantor kecil, atau proyek, jumlah unit akan dicek dulu sesuai stok, kebutuhan ruangan, pengiriman, dan jadwal pemasangan."],
    ["Apakah bisa pemasangan AC ke Banyumas?", "Bisa untuk area dan kondisi tertentu setelah alamat, jumlah unit, akses lokasi, dan kebutuhan pemasangan dikonfirmasi terlebih dahulu."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, jumlah unit, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia."],
  ],
  finalCtaTitle: "Mau beli AC area Banyumas?",
  finalCtaDescription:
    "Kirim lokasi, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcBanyumas() {
  return <CompactAreaSalesPage config={areaConfig} />
}
