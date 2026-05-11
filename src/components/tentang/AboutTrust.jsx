import WhatsappIcon from "../ui/WhatsappIcon"
import { SITE_DATA } from "../../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const trustPoints = [
  "Rekomendasi AC disesuaikan dengan ukuran ruangan, daya listrik, dan kebutuhan penggunaan.",
  "Pilihan brand resmi tersedia untuk kebutuhan rumah, kantor, toko, hingga usaha.",
  "Proses pembelian dibuat jelas sejak awal, mulai dari pilihan unit, estimasi biaya, hingga jadwal pemasangan.",
  "Setelah unit terpasang, pelanggan tetap bisa berkonsultasi untuk perawatan dan kebutuhan teknis berikutnya.",
]

export default function AboutTrust() {
  return (
    <aside className="rounded-[28px] border border-cyan-400/10 bg-cyan-500/5 p-6 text-center text-white/90 sm:p-8 lg:text-left">
      <h2 className="mb-5 text-2xl font-black tracking-[-0.02em] text-white">Kenapa memilih RADJA AC</h2>
      <ul className="space-y-3">
        {trustPoints.map((item) => (
          <li key={item} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">
            <p className="text-sm font-medium leading-7 sm:text-base">{item}</p>
          </li>
        ))}
      </ul>

      <div className="mt-7 rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_60px_rgba(14,116,144,0.18)] sm:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Hubungi Kami</p>
        <h3 className="mb-4 text-2xl font-bold text-white">Konsultasi produk via WhatsApp</h3>
        <p className="mb-6 text-sm leading-7 text-slate-300 sm:text-base">
          Tanyakan rekomendasi unit, ketersediaan stok, pilihan brand, dan penawaran terbaik untuk kebutuhan Anda.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:text-lg"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
            <WhatsappIcon className="h-5 w-5 text-slate-950" />
          </span>
          Chat WhatsApp RADJA AC
        </a>
      </div>
    </aside>
  )
}
