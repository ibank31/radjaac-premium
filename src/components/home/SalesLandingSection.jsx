import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, BookOpen, MessageCircle, SearchCheck } from "lucide-react"

const points = [
  {
    title: "Cari AC berdasarkan kebutuhan",
    description: "Mulai dari kamar, rumah, kantor, toko, cafe, daya listrik, dan jam pemakaian.",
    icon: SearchCheck,
  },
  {
    title: "Bandingkan brand utama",
    description: "Masuk ke pilihan Daikin, Midea, Gree, Hisense, Sansui, Sharp, Panasonic, dan lainnya.",
    icon: BadgeCheck,
  },
  {
    title: "Baca panduan sebelum beli",
    description: "Pahami PK, inverter, low watt, harga, dan persiapan pemasangan sebelum chat WhatsApp.",
    icon: BookOpen,
  },
]

export default function SalesLandingSection() {
  return (
    <section className="py-8 lg:py-14">
      <div className="overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 shadow-[0_35px_90px_rgba(8,145,178,0.12)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-cyan-200">
              <MessageCircle className="h-4 w-4" />
              MULAI DARI SINI
            </div>
            <h2 className="mb-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Bingung cari AC di Purwokerto?
            </h2>
            <p className="mb-6 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
              RADJA AC menyiapkan halaman khusus untuk membantu calon pembeli memilih AC berdasarkan brand, tipe, ukuran ruangan, daya listrik, dan kebutuhan pemasangan.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/jual-ac-purwokerto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Panduan Pilih AC
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/katalog"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 font-bold text-white/90 transition hover:bg-white/[0.05]"
              >
                Lihat Katalog AC
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {points.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                <Icon className="mb-3 h-6 w-6 text-cyan-300" />
                <h3 className="mb-2 font-black text-white">{title}</h3>
                <p className="text-sm leading-6 text-white/56">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
