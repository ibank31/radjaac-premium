import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-jatilawang",
  seoTitle: "Jual AC Jatilawang | Jalur Selatan Banyumas, Rumah, Toko & Kost — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Jatilawang dan jalur selatan Banyumas. Cocok untuk rumah, toko, kost, ruko, banyak unit, pengiriman, dan pemasangan by konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Jatilawang dan jalur selatan Banyumas, termasuk kebutuhan rumah, toko, kost, ruko, kantor kecil, cek stok, rekomendasi PK, pilihan brand, pengiriman, dan pemasangan sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA JATILAWANG",
  h1: "Jual AC Jatilawang",
  heroHighlight: "RADJA AC Layani Jatilawang",
  heroDescription:
    "Beli AC untuk rumah, kos, toko, atau usaha di Jatilawang sebaiknya jangan asal pilih yang paling murah. Yang penting AC-nya sesuai ruangan, daya listrik aman, dan kebutuhan pemasangan jelas dari awal. RADJA AC bantu konsultasi dulu lewat WhatsApp. Anda cukup kirim ukuran ruangan, foto titik pemasangan, budget, dan lokasi. Nanti kami bantu cek pilihan unit, stok, kisaran harga, dan kebutuhan instalasinya.",
  primaryCta: "Chat WhatsApp untuk AC Jatilawang",
  waMessage:
    "Halo RADJA AC, saya dari Jatilawang. Mau tanya AC untuk rumah/toko/kost/ruko area selatan Banyumas, cek stok, harga, rekomendasi PK, dan opsi pengiriman atau pemasangan.",
  heroChips: ["Selatan Banyumas", "Rumah & toko", "Kost/ruko", "Bisa banyak unit", "Rute dicek dulu"],
  schemaAreas: ["Jatilawang", "Tunjung", "Tinggarjaya", "Kedungwringin", "Karanglewas", "Gunung Wetan", "Adisara", "Margasana", "Wangon", "Purwojati", "Rawalo", "Banyumas"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Wangon", "/jual-ac-wangon"], ["Ajibarang", "/jual-ac-ajibarang"]],
  bulkPurchase: {
    eyebrow: "JALUR SELATAN BANYUMAS",
    title: "Butuh AC untuk rumah, toko, kost, atau ruko area Jatilawang?",
    description:
      "Untuk area Jatilawang, Rawalo, Wangon, dan jalur selatan Banyumas, konsultasi awal membantu memperjelas kebutuhan unit, ukuran ruangan, daya listrik, rute pengiriman, pilihan brand, dan jadwal pemasangan.",
    cards: [
      ["Rumah & Kamar", "Bantu pilih AC untuk kamar tidur, ruang keluarga kecil, ruang kerja, atau pemakaian harian."],
      ["Toko & Ruko", "Cocok untuk ruang usaha, area pelanggan, kasir, display produk, atau ruang tunggu."],
      ["Kost & Banyak Unit", "Bisa diskusi beberapa unit untuk kamar kost, kontrakan, kantor kecil, atau kebutuhan usaha."],
    ],
    ctaLabel: "Tanya AC Area Jatilawang",
    waMessage:
      "Halo RADJA AC, saya dari Jatilawang. Mau konsultasi AC untuk rumah/toko/kost/ruko atau banyak unit. Mohon bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, dan opsi pemasangan.",
  },
  valueTitle: "Beli AC area Jatilawang perlu cek rute dari awal",
  valueDescription:
    "Karena Jatilawang berada di jalur selatan Banyumas, data alamat, rute, jenis ruangan, jumlah unit, dan kondisi pemasangan membantu estimasi lebih akurat.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, jenis ruangan, dan jam pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Jatilawang, pengiriman dan pemasangan menyesuaikan rute, alamat, akses lokasi, jumlah unit, kebutuhan material, dan jadwal teknisi.",
  processDescription:
    "Pembelian satu unit maupun banyak unit area Jatilawang tetap perlu dikonfirmasi dulu berdasarkan alamat, jenis ruangan, jumlah AC, stok, rute, dan kondisi titik pemasangan.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Jatilawang, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan rumah atau usaha."],
    ["Konfirmasi rute & jadwal", "Stok, pengiriman, tambahan material, akses lokasi, rute, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari jenis ruangan, ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian.",
  faqItems: [
    ["Apakah saya harus pilih AC paling murah di Jatilawang?", "Tidak. Kami sarankan pilih AC yang sesuai ruangan dan daya listrik, bukan sekadar murah."],
    ["Bagaimana cara konsultasi AC Jatilawang?", "Chat WhatsApp, kirim ukuran ruangan, foto titik pemasangan, budget, dan lokasi. Nanti kami bantu cek pilihan unit dan instalasinya."],
    ["Apakah pemasangan bisa direncanakan sejak awal?", "Bisa. Setelah pilihan unit cocok, kami bantu konfirmasi stok, jadwal, dan kebutuhan instalasi."],
  ],
  finalCtaTitle: "Mau beli AC area Jatilawang?",
  finalCtaDescription:
    "Kirim lokasi, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, rute, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcJatilawang() {
  return <CompactAreaSalesPage config={areaConfig} />
}
