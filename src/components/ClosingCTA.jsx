import { Clock, MapPin, MessageCircle } from "lucide-react"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

export default function ClosingCTA() {
  return (
    <section className="-mt-8 pb-14 sm:-mt-6 sm:pb-16">
      <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/15 bg-white/[0.035] px-5 py-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.10)] sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#25D366]/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            KONSULTASI AC
          </p>

          <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
            Bingung Pilih AC?
          </h2>

          <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Kami bantu rekomendasikan tipe AC sesuai ukuran ruangan, daya listrik, dan kebutuhan penggunaan.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-slate-950 shadow-[0_24px_70px_rgba(37,211,102,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:w-auto sm:min-w-[280px]"
          >
            <MessageCircle className="h-5 w-5" />
            Chat WhatsApp
          </a>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 text-sm text-white/50 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-300/80" />
              Area: Purwokerto & Banyumas
            </span>

            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-300/80" />
              Jam: 08.00 – 20.00 WIB
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}