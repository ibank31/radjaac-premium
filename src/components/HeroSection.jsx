import { motion } from "framer-motion";
import { SITE_DATA } from "../constants/siteData";

export default function HeroSection() {
  const stats = SITE_DATA.businessStats;

  return (
    <>
      {/* HERO */}
      <section className="pb-16 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/10 to-transparent pointer-events-none" />
        <div className="absolute right-[-120px] top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-[-120px] bottom-0 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              DEALER & SERVICE AC PROFESIONAL
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight sm:leading-tight md:leading-[0.95] tracking-[-0.03em] mb-6 max-w-2xl">
              Solusi AC premium untuk <span className="text-cyan-300">rumah modern</span> dan bisnis elite.
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-relaxed md:leading-8 max-w-xl mb-8">
              Instalasi, service, dan maintenance AC dengan standar profesional dan teknisi bersertifikat untuk kenyamanan maksimal di Purwokerto dan Banyumas.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-4">
              <a
                href={SITE_DATA.whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-black font-bold px-7 py-4 rounded-full shadow-[0_20px_60px_rgba(37,211,102,0.18)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                Konsultasi WhatsApp
              </a>

              <a
                href="#produk"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/10 text-white/90 font-semibold transition hover:bg-white/[0.05]"
              >
                Lihat Produk
              </a>
            </div>

            <p className="text-white/60 text-sm md:text-base max-w-xl mb-8">
              Fast response • Same day service • Teknisi berpengalaman • Garansi pengerjaan
            </p>

            <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
              {[
                "Bergaransi",
                "Teknisi Bersertifikat",
                "Fast Response",
                "Dealer & Service AC",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80"
                >
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 via-slate-900/10 to-transparent rounded-[38px] shadow-[0_0_80px_rgba(14,116,144,0.12)]" />
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-4 left-[-24px] w-56 h-56 rounded-full bg-sky-500/10 blur-3xl" />

            <img
              src="/hero-daikin.jpg"
              alt="AC Premium"
              className="relative rounded-[34px] border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 rounded-[28px] p-7 text-center"
            >
              <h3 className="text-cyan-300 text-4xl font-black mb-2">
                {item.number}
              </h3>

              <p className="text-white/60 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
