import { motion } from "framer-motion";

export default function HeroSection() {
  const stats = [
    { number: "1000+", label: "Pelanggan" },
    { number: "500+", label: "Project" },
    { number: "7+", label: "Tahun Pengalaman" },
    { number: "<5m", label: "Fast Response" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              DEALER & SERVICE AC PROFESIONAL
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black leading-[0.95] mb-6"
            >
              Solusi AC
              <br />
              Premium Untuk
              <br />
              Rumah Modern
            </motion.h1>

            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
              Penjualan AC, instalasi profesional,
              service, maintenance, hingga proyek
              pendingin ruangan untuk rumah, cafe,
              kantor, dan bisnis di Banyumas.
            </p>

            {/* TRUST CHIPS */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Authorized Dealer",
                "Garansi Resmi",
                "Teknisi Bersertifikat",
                "Fast Response",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/62882008246099"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-full font-bold flex items-center gap-3"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                Konsultasi Sekarang
              </a>

              <a
                href="#produk"
                className="border border-white/10 hover:bg-white/[0.03] transition px-8 py-4 rounded-full font-semibold"
              >
                Lihat Produk
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px]" />

            <img
              src="/hero-daikin.jpg"
              alt="AC Premium"
              className="rounded-[34px] border border-white/10 shadow-2xl"
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
