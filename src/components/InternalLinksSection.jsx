import { Link } from "react-router-dom"

const internalLinks = [
  {
    title: "Jual AC Purwokerto",
    desc: "Pilih AC original untuk rumah, kantor, toko, dan usaha dengan konsultasi kebutuhan ruangan sebelum membeli.",
    link: "/jual-ac-purwokerto",
    anchorText: "jual AC Purwokerto",
  },
  {
    title: "Panduan Pilih AC",
    desc: "Mulai dari ukuran ruangan, daya listrik, kapasitas PK, sampai tipe AC yang sesuai kebutuhan harian.",
    link: "/katalog",
    anchorText: "panduan pilih AC",
  },
  {
    title: "Panduan Instalasi AC Baru",
    desc: "Pelajari hal penting sebelum AC dipasang: posisi indoor, outdoor, jalur pipa, drainase, dan listrik.",
    link: "/artikel/panduan-instalasi-ac-baru",
    anchorText: "panduan instalasi AC baru",
  },
  {
    title: "AC Inverter",
    desc: "Panduan memilih AC inverter untuk pemakaian rutin, kamar tidur, ruang kerja, dan kebutuhan hemat energi.",
    link: "/katalog/ac-inverter",
    anchorText: "AC inverter",
  },
  {
    title: "AC Low Watt",
    desc: "Pilihan AC untuk rumah dengan daya listrik terbatas agar pembelian lebih aman dan sesuai kebutuhan.",
    link: "/katalog/ac-low-watt",
    anchorText: "AC low watt",
  },
  {
    title: "Daikin Purwokerto",
    desc: "Lihat informasi AC Daikin original, pilihan tipe, dan konsultasi kapasitas PK untuk area Purwokerto.",
    link: "/brand/daikin",
    anchorText: "Daikin Purwokerto",
  },
  {
    title: "AC Kantor & Komersial",
    desc: "Pilihan AC untuk kantor, toko, cafe, ruang usaha, cassette, dan kebutuhan pembelian banyak unit.",
    link: "/katalog/ac-kantor-komersial",
    anchorText: "AC kantor dan komersial",
  },
  {
    title: "Gallery RADJA AC",
    desc: "Lihat dokumentasi showroom, gudang, stok produk, pengiriman, dan aktivitas RADJA AC.",
    link: "/gallery",
    anchorText: "gallery RADJA AC",
  },
  {
    title: "Tentang RADJA AC",
    desc: "Kenali RADJA AC sebagai partner penjualan AC multibrand untuk Purwokerto dan Banyumas.",
    link: "/tentang-kami",
    anchorText: "tentang RADJA AC",
  },
]

export default function InternalLinksSection() {
  return (
    <section className="px-6 py-20 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan-300 font-medium mb-3">
            Panduan Lengkap Sebelum Beli AC
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Temukan AC yang Sesuai Kebutuhan Anda
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Mulai dari rekomendasi PK, pilihan brand, tipe AC, sampai hal penting sebelum pemasangan unit baru.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {internalLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-5">
                {item.desc}
              </p>

              <span className="text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors">
                Pelajari {item.anchorText} →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Butuh arahan sebelum membeli? <Link to="/jual-ac-purwokerto" className="text-cyan-300 hover:text-cyan-200 font-medium">Konsultasi kebutuhan AC</Link> atau
            <Link to="/artikel/panduan-instalasi-ac-baru" className="text-cyan-300 hover:text-cyan-200 font-medium ml-1">baca panduan instalasi AC baru</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/tentang-kami" className="text-slate-400 hover:text-cyan-300 transition-colors">
              Tentang Kami
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/gallery" className="text-slate-400 hover:text-cyan-300 transition-colors">
              Gallery
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/katalog" className="text-slate-400 hover:text-cyan-300 transition-colors">
              Katalog AC
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
