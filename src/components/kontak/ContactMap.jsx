import WhatsappIcon from "../ui/WhatsappIcon";
import { SITE_DATA } from "../../constants/siteData";

const WA_LINK = SITE_DATA.whatsappUrl;

export default function ContactMap() {
  return (
    <aside className="rounded-[28px] sm:rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-500/10 p-5 sm:p-8 shadow-[0_30px_80px_rgba(8,20,47,0.65)] flex flex-col justify-between gap-6 sm:gap-8">
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Tempatkan Google Maps bisnis di section ini
        </h2>

        <p className="text-slate-300 leading-relaxed mb-8">
          Placeholder untuk peta lokasi Radja AC. Ganti dengan embed Google Maps saat siap menampilkan lokasi kantor atau service area.
        </p>

        <div className="h-72 rounded-[24px] sm:rounded-[28px] border border-white/10 bg-slate-950/70 p-6 flex items-center justify-center text-center text-slate-400">
          <div>
            <p className="font-semibold text-white mb-2">
              Peta Lokasi
            </p>

            <p>
              Tempatkan Google Maps bisnis di section ini
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-slate-950/80 p-5 sm:p-8 shadow-[0_0_60px_rgba(14,116,144,0.18)]">
        <p className="text-cyan-300 uppercase tracking-[0.2em] text-xs mb-3">
          Butuh Bantuan Segera?
        </p>

        <h3 className="text-white text-2xl font-bold mb-4">
          Konsultasi WhatsApp untuk jadwal dan estimasi
        </h3>

        <p className="text-slate-300 leading-relaxed mb-6">
          Hubungi kami melalui WhatsApp untuk konfirmasi jadwal layanan AC dan estimasi biaya yang cepat.
        </p>

        <a
          href={WA_LINK}
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
  );
}