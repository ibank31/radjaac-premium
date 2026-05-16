import CompactAreaSalesPage from "../components/area/CompactAreaSalesPage"

const areaConfig = {
  canonicalPath: "/jual-ac-banyumas",
  seoTitle: "Jual AC Banyumas Bisa COD | Stok & Pemasangan — RADJA AC",
  seoDescription:
    "RADJA AC melayani jual AC area Banyumas dan sekitarnya. Bisa konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi.",
  localBusinessDescription:
    "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Banyumas dan sekitarnya, termasuk cek stok, rekomendasi PK, opsi COD, dan estimasi pemasangan.",
  heroBadge: "JUAL AC AREA BANYUMAS",
  h1: "Jual AC Banyumas",
  heroHighlight: "cek stok, rekomendasi PK, dan pemasangan",
  heroDescription:
    "RADJA AC Purwokerto melayani pembelian AC untuk area Banyumas dan sekitarnya. Konsultasi stok, harga, kapasitas PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi lokasi.",
  primaryCta: "Tanya AC Banyumas",
  waMessage:
    "Halo RADJA AC, saya dari area Banyumas. Mau tanya AC yang bisa COD/bayar di tempat. Mohon bantu cek stok, harga, rekomendasi PK, dan estimasi pemasangan AC.",
  schemaAreas: ["Purwokerto", "Sokaraja", "Kembaran", "Baturraden", "Karanglewas", "Kedungbanteng", "Cilongok", "Ajibarang", "Wangon", "Banyumas", "Patikraja", "Kalibagor"],
  relatedAreaLinks: [["Sokaraja", "/jual-ac-sokaraja"], ["Ajibarang", "/jual-ac-ajibarang"], ["Wangon", "/jual-ac-wangon"], ["Cilongok", "/jual-ac-cilongok"], ["Jatilawang", "/jual-ac-jatilawang"]],
  valueTitle: "Beli AC area Banyumas lebih jelas dari awal",
  valueDescription:
    "Fokusnya bukan menambah banyak pilihan, tapi membantu calon pembeli memilih AC yang sesuai ruangan, listrik, budget, dan kondisi pemasangan.",
  valueStockText:
    "Tipe AC, stok unit, kebutuhan pipa/kabel, dan estimasi biaya dibahas lewat WhatsApp sebelum jadwal dikunci.",
  valuePkText:
    "Kirim ukuran ruangan dan daya listrik agar pilihan AC tidak kekecilan, terlalu boros, atau kurang sesuai kebutuhan.",
  valueInstallText:
    "Untuk area Banyumas, jadwal dan biaya pemasangan menyesuaikan rute, akses lokasi, dan titik indoor-outdoor.",
  processDescription:
    "Karena area Banyumas cukup luas, estimasi harga dan pemasangan perlu menyesuaikan lokasi, stok unit, serta kondisi titik indoor-outdoor.",
  processSteps: [
    ["Kirim lokasi & ukuran ruangan", "Sebutkan area Banyumas, ukuran ruangan, daya listrik, budget, dan foto titik indoor-outdoor jika ada."],
    ["Cek stok, brand & PK", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, low watt/inverter, dan kisaran harga."],
    ["Konfirmasi harga & jadwal", "Estimasi pemasangan, tambahan pekerjaan, dan opsi COD/bayar di tempat dikonfirmasi sebelum unit dikirim."],
  ],
  faqItems: [
    ["Apakah RADJA AC melayani jual AC area Banyumas?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Banyumas dan sekitarnya, termasuk Sokaraja, Ajibarang, Wangon, Cilongok, Jatilawang, dan area terdekat sesuai rute."],
    ["Apakah bisa beli AC area Banyumas dengan COD?", "Bisa untuk area dan kondisi tertentu setelah stok, jadwal, lokasi, dan kebutuhan pemasangan dikonfirmasi. Pembayaran dapat diarahkan saat unit sampai atau saat pemasangan sesuai kesepakatan awal."],
    ["Apakah harga AC Banyumas sama dengan Purwokerto?", "Harga unit mengikuti stok dan tipe AC. Untuk area luar Purwokerto, kebutuhan tambahan seperti jarak, pipa/kabel, akses lokasi, dan pekerjaan khusus akan dicek dulu sebelum estimasi final."],
    ["Data apa yang perlu dikirim sebelum beli AC?", "Kirim lokasi pemasangan, ukuran ruangan, daya listrik, budget, brand yang diminati, dan foto titik indoor-outdoor jika tersedia agar rekomendasi dan estimasi lebih jelas."],
  ],
  finalCtaTitle: "Mau beli AC area Banyumas?",
  finalCtaDescription:
    "Kirim lokasi, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, kapasitas PK, estimasi pemasangan, dan opsi COD sesuai konfirmasi.",
}

export default function JualAcBanyumas() {
  return <CompactAreaSalesPage config={areaConfig} />
}
