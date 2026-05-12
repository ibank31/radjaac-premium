import { motion } from "framer-motion";
import { SITE_DATA } from "../constants/siteData";
import WhatsappIcon from "./ui/WhatsappIcon";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-7 sm:pb-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/10 to-transparent pointer-events-none" />

        <div className="absolute right-[-120px] top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 rounded-full text-cyan-300 text-sm mb-5">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              DEALER AC RESMI & MULTIBRAND
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] sm:leading-tight tracking-[-0.03em] mb-5 max-w-xl">
              Dealer AC Resmi
              <span className="block text-cyan-300">
                Purwokerto & Banyumas
              </span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base leading-7 max-w-xl mb-6">
              Penjualan AC original berbagai brand resmi, mulai dari Daikin,
              Gree, Midea, Hisense, Sansui, hingga brand populer lainnya.
              Didukung konsultasi produk, instalasi rapi, dan layanan after-sales.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 mb-4">
              <a
                href={SITE_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 font-bold px-6 py-4 rounded-full shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <WhatsappIcon className="w-5 h-5 text-slate-950" />
                Tanya Harga AC
              </a>

              <a
                href="#brand-lainnya"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-white/10 text-white/90 font-semibold transition hover:bg-white/[0.05]"
              >
                Lihat Brand AC
              </a>
            </div>

            <p className="text-white/60 text-sm max-w-xl mb-4 sm:mb-6">
              Ready stock • Brand resmi • Instalasi rapi • Konsultasi produk
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-3 lg:mt-0"
          >
            <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-br from-cyan-400/16 via-blue-500/8 to-transparent blur-2xl" />
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-cyan-500/12 blur-3xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-2 shadow-[0_28px_80px_rgba(8,20,47,0.42)]">
              <div className="pointer-events-none absolute inset-2 z-10 rounded-[26px] bg-gradient-to-t from-[#050816]/65 via-transparent to-white/5" />
              <div className="pointer-events-none absolute inset-x-8 bottom-2 z-10 h-px bg-cyan-300/40" />

              <img
                src="/assets/showroom/Showroom-utama.webp"
                alt="Showroom dealer AC RADJA AC di Purwokerto"
                fetchPriority="high"
                decoding="async"
                className="relative h-[310px] w-full rounded-[26px] object-cover object-center sm:h-[380px] lg:h-[520px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
