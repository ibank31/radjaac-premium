import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, BookOpen, MessageCircle, SearchCheck } from "lucide-react"
import WhatsappIcon from "../ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../../utils/whatsapp"

const CHECK_AC_MESSAGE =
  "Halo RADJA AC, saya mau dicekkan pilihan AC yang cocok. Mohon bantu cek rekomendasi PK, brand yang ready, harga terbaru, dan kebutuhan pemasangan berdasarkan ukuran ruangan, daya listrik, lokasi, dan budget saya."

const points = [
  {
    title: "Jangan asal pilih PK",
    description: "Salah kapasitas bisa bikin ruangan lama dingin, listrik berat, dan biaya pasang tidak efisien.",
    icon: SearchCheck,
  },
  {
    title: "Cek brand yang benar-benar ready",
    description: "Daikin, Midea, Gree, Hisense, Sansui, Sharp, Samsung, Panasonic, dan brand lain dicek sesuai stok terbaru.",
    icon: BadgeCheck,
  },
  {
    title: "Harga dan pemasangan dihitung dari kondisi real",
    description: "Kirim ukuran ruangan, daya listrik, lokasi, dan titik pasang agar rekomendasi tidak asal murah.",
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
              CEK SEBELUM BELI
            </div>
            <h2 className="mb-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Jangan beli AC sebelum tahu PK, daya listrik, dan biaya pasangnya
            </h2>
            <p className="mb-6 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
              Banyak pembeli hanya lihat harga unit, lalu kecewa karena AC kurang dingin, listrik berat, atau kebutuhan pasang ternyata lebih panjang. RADJA AC bantu cek pilihan AC yang masuk akal sebelum Anda keluar uang.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(CHECK_AC_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
              >
                <WhatsappIcon className="h-5 w-5 text-slate-950" />
                Chat, Saya Mau Dicekkan AC
              </a>
              <Link
                to="/katalog"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 font-bold text-white/90 transition hover:bg-white/[0.05]"
              >
                Bandingkan Pilihan AC
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
