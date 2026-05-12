import WhatsappIcon from "./ui/WhatsappIcon";
import { SITE_DATA } from "../constants/siteData";

const WA_LINK = SITE_DATA.whatsappUrl;

export default function CuciACCTASection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-500/10 p-10 shadow-[0_0_80px_rgba(14,116,144,0.16)] text-center">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-cyan-200 mb-6">
          Booking Cuci AC
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Cuci AC Sekarang, Performa AC Kembali Prima
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Jadwalkan pembersihan AC dengan teknisi kami dan rasakan udara lebih segar, dingin lebih cepat, dan penggunaan listrik lebih efisien.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-4 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
            <WhatsappIcon className="w-5 h-5 text-slate-950" />
          </span>
          Chat WhatsApp Sekarang
        </a>

        <p className="mt-5 text-sm text-slate-400">
          Fast response • Area Purwokerto & Banyumas • Teknisi profesional
        </p>
      </div>
    </section>
  )
}