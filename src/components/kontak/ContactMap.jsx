import WhatsappIcon from "../ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../../utils/whatsapp"

const WA_MESSAGE = "Halo RADJA AC, saya mau tanya harga AC, cek stok, dan rekomendasi yang cocok."

const contactHighlights = [
  "Konsultasi brand AC, tipe, dan kapasitas PK",
  "Cek stok unit, estimasi harga, dan area pengiriman",
  "Bisa lanjut diskusi kebutuhan instalasi AC baru",
]

export default function ContactMap() {
  return (
    <aside className="rounded-[28px] sm:rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-500/10 p-5 sm:p-8 shadow-[0_30px_80px_rgba(8,20,47,0.65)] flex flex-col justify-between gap-6 sm:gap-8">
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Konsultasi langsung dengan RADJA AC
        </h2>

        <p className="text-slate-300 leading-relaxed mb-6">
          Sampaikan kebutuhan ruangan, daya listrik, pilihan brand, dan lokasi pemasangan. Tim RADJA AC akan bantu arahkan pilihan AC yang sesuai untuk area Purwokerto, Banyumas, dan sekitarnya.
        </p>

        <div className="mb-5 rounded-[24px] border border-cyan-300/15 bg-cyan-300/10 p-5 text-sm leading-7 text-cyan-50/80">
          Area showroom &amp; stok RADJA AC berada di Pamijen, dekat RS Margono, Purwokerto Timur – Banyumas.
        </div>

        <div className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-slate-950/70 p-5 sm:p-6">
          <p className="font-semibold text-white mb-4">
            Yang bisa dikonsultasikan
          </p>

          <div className="space-y-3">
            {contactHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-slate-950/80 p-5 sm:p-8 shadow-[0_0_60px_rgba(14,116,144,0.18)]">
        <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs mb-3">
          Butuh Bantuan Cepat?
        </p>

        <h3 className="text-white text-2xl font-bold mb-4">
          Chat WhatsApp untuk cek stok dan rekomendasi AC
        </h3>

        <p className="text-slate-300 leading-relaxed mb-6">
          Hubungi RADJA AC untuk tanya harga, cek ketersediaan unit, rekomendasi PK, dan kebutuhan instalasi.
        </p>

        <a
          href={buildWhatsAppUrl(WA_MESSAGE)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-2xl sm:rounded-full bg-[#25D366] px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
            <WhatsappIcon className="w-5 h-5 text-slate-950" />
          </span>

          Chat WhatsApp Sekarang
        </a>
      </div>
    </aside>
  )
}