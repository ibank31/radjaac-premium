import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-cilongok",
  seoTitle: "Jual AC Cilongok | Barat Purwokerto untuk Rumah, Kost & Toko — RADJA AC",
  seoDescription:
    "RADJA AC melayani pembelian AC area Cilongok dan barat Purwokerto. Cocok untuk rumah, kost, toko, ruko, cek stok, rekomendasi PK, pengiriman, dan pemasangan by konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani pembelian AC untuk area Cilongok dan sekitarnya, termasuk kebutuhan rumah, kost, toko, ruko, kantor kecil, cek stok, rekomendasi PK, pilihan brand, pengiriman, dan pemasangan sesuai konfirmasi lokasi.",
  heroBadge: "JUAL AC AREA CILONGOK",
  h1: "Jual AC Cilongok",
  heroHighlight: "Dari Purwokerto, Kami Layani Cilongok",
  heroDescription:
    "Untuk kebutuhan AC di Cilongok, Anda tidak perlu bingung pilih sendiri. RADJA AC bantu cek dulu ukuran ruangan, daya listrik, posisi indoor-outdoor, dan kebutuhan pemakaian. Tujuannya sederhana: AC yang dipilih tidak terlalu kecil, tidak terlalu boros, dan tetap sesuai budget. Kalau sudah cocok, baru kami bantu cek stok, kisaran harga, dan jadwal pemasangan.",
  primaryCta: "Chat WhatsApp untuk AC Cilongok",
  waMessage:
    "Halo RADJA AC, saya dari Cilongok. Mau tanya AC untuk rumah/kost/toko/ruko area barat Purwokerto, cek stok, harga, rekomendasi PK, dan opsi pengiriman atau pemasangan.",
  heroChips: ["Barat Purwokerto", "Rumah & kost", "Toko/ruko", "Cek PK dulu", "Pasang by konfirmasi"],
  schemaAreas: ["Cilongok", "Pernasidi", "Panembangan", "Karanglo", "Kasegeran", "Pageraji", "Sambirata", "Ajibarang", "Karanglewas", "Kedungbanteng", "Purwokerto Barat"],
  relatedAreaLinks: [["Banyumas", "/jual-ac-banyumas"], ["Ajibarang", "/jual-ac-ajibarang"], ["Purwokerto", "/jual-ac-purwokerto"]],
  bulkPurchase: {
    eyebrow: "BARAT PURWOKERTO",
    title: "Butuh AC untuk rumah, kost, toko, atau ruko area Cilongok?",
    description:
      "Cilongok berada di sisi barat Purwokerto. Kebutuhan AC bisa dikonsultasikan dari alamat, ukuran ruangan, daya listrik, jumlah unit, stok, dan jadwal pemasangan. Cocok untuk rumah, kamar kost, toko, dan ruang usaha kecil.",
    cards: [
      ["Rumah & Kamar", "Bantu pilih AC untuk kamar tidur, ruang keluarga kecil, ruang kerja, atau pemakaian harian."],
      ["Kost & Kontrakan", "Cocok untuk beberapa kamar dengan pilihan brand hemat, low watt, atau inverter sesuai daya listrik."],
      ["Toko & Ruko", "AC untuk area pelanggan, kasir, display produk, ruang tunggu, atau ruang usaha kecil."],
    ],
    ctaLabel: "Tanya AC Area Cilongok",
    waMessage:
      "Halo RADJA AC, saya dari Cilongok. Mau konsultasi AC untuk rumah/kost/toko/ruko. Mohon bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, dan opsi pemasangan.",
  },
  valueTitle: "Beli AC area Cilongok lebih jelas dari awal",
  valueDescription:
    "Untuk area Cilongok dan barat Purwokerto, data lokasi, jenis ruangan, jumlah unit, dan titik pemasangan membantu estimasi stok, harga, rute, dan jadwal lebih jelas.",
  valueStockText:
    "Stok unit, pilihan brand, dan kisaran harga dicek dulu lewat WhatsApp sebelum pembelian dikunci.",
  valuePkText:
    "Ukuran ruangan, daya listrik, jenis ruangan, dan jam pemakaian bisa dikirim dulu agar pilihan AC tidak asal.",
  valueInstallText:
    "Untuk area Cilongok, pengiriman dan pemasangan menyesuaikan alamat, rute, akses lokasi, jumlah unit, kebutuhan material, dan jadwal teknisi.",
  processDescription:
    "Pembelian satu unit maupun banyak unit area Cilongok tetap perlu dikonfirmasi dulu berdasarkan alamat, jenis ruangan, jumlah AC, stok, rute, dan kondisi titik indoor-outdoor.",
  processSteps: [
    ["Kirim lokasi & kebutuhan", "Sebutkan area Cilongok, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga sesuai kebutuhan rumah, kost, atau usaha."],
    ["Konfirmasi rute & jadwal", "Stok, pengiriman, tambahan material, akses lokasi, rute, dan jadwal pemasangan dikonfirmasi dulu sebelum unit disiapkan."],
  ],
  choiceDescription:
    "Kalau belum yakin memilih merek, mulai dari jenis ruangan, ukuran ruangan, daya listrik, jumlah unit, dan jam pemakaian.",
  faqItems: [
    ["Bagaimana cara cek PK AC di Cilongok?", "Kirim ukuran ruangan, daya listrik, dan posisi indoor-outdoor. Dari situ RADJA AC bantu rekomendasi kapasitas yang pas."],
    ["Apakah bisa konsultasi dulu sebelum pilih brand?", "Bisa. Chat WhatsApp dan kami bantu pilih unit sesuai kebutuhan pemakaian, bukan sekadar nama merek."],
    ["Apakah pemasangan bisa diatur ke Cilongok?", "Bisa. Setelah pilihan AC dan stok cocok, kami bantu cek jadwal pemasangan."],
  ],
  finalCtaTitle: "Mau beli AC area Cilongok?",
  finalCtaDescription:
    "Kirim lokasi, jenis ruangan, jumlah unit, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, pengiriman, rute, dan jadwal pemasangan sesuai konfirmasi.",
}

export default function JualAcCilongok() {
  return <CompactAreaSalesPage config={areaConfig} />
}
