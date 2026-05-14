import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatsappIcon from "./ui/WhatsappIcon";
import { buildWhatsAppUrl } from "../utils/whatsapp";

const CONSULTATION_MESSAGE =
  "Halo RADJA AC, saya mau konsultasi beli AC. Mohon rekomendasi brand, PK, dan harga yang cocok untuk kebutuhan saya."

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-6 sm:pb-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/10 to-transparent pointer-events-none" />

        <div className="absolute right-[-120px] top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="grid lg:grid-cols-2 gap-7 lg:gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-2 rounded-full text-cyan-300 text-xs sm:text-sm mb-5">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              TOKO AC MULTIBRAND DI PURWOKERTO
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] sm:leading-tight tracking-[-0.03em] mb-5 max-w-xl">
              Toko AC Purwokerto
              <span className="block text-cyan-300">
                Dealer AC Resmi Bergaransi
              </span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base leading-7 max-w-xl mb-5 sm:mb-6">
              Jual AC original berbagai brand resmi seperti Daikin, Gree,
              Midea, Hisense, Sansui, Sharp, Panasonic, dan brand populer lainnya
              untuk rumah, toko, kantor, cafe, dan proyek di Purwokerto & Banyumas.
            </p>

            <div className="relative z-20 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 mb-4">
              <a
                href={buildWhatsAppUrl(CONSULTATION_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                className="relative z-20 inline-flex w-full items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 font-bold px-6 py-3.5 sm:py-4 rounded-full shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 sm:w-auto sm:min-w-[260px]"
              >
                <WhatsappIcon className="w-5 h-5 text-slate-950" />
                Konsultasi Beli AC
              </a>

              <Link
                to="/jual-ac-purwokerto"
                className="relative z-20 inline-flex w-full items-center justify-center px-6 py-3.5 sm:py-4 rounded-full border border-white/10 text-white/90 font-semibold transition hover:bg-white/[0.05] sm:w-auto sm:min-w-[220px]"
              >
                Lihat Rekomendasi AC
              </Link>
            </div>

            <p className="mx-auto max-w-xl text-center text-sm text-white/60 mb-3 sm:mx-0 sm:text-left sm:mb-6">
              Ready stock • Garansi resmi • Konsultasi PK • Bisa bantu instalasi
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-2 lg:mt-0"
          >
            <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-br from-cyan-400/14 via-blue-500/7 to-transparent blur-2xl" />
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-2 shadow-[0_28px_80px_rgba(8,20,47,0.42)]">
              <div className="pointer-events-none absolute inset-2 z-10 rounded-[26px] bg-gradient-to-t from-[#050816]/55 via-transparent to-white/5" />
              <div className="pointer-events-none absolute inset-x-8 bottom-2 z-10 h-px bg-cyan-300/40" />

              <img
                src="/assets/showroom/Showroom-utama.webp"
                alt="Showroom toko AC RADJA AC di Purwokerto"
                fetchPriority="high"
                decoding="async"
                className="relative h-[290px] w-full rounded-[26px] object-cover object-center sm:h-[380px] lg:h-[520px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
