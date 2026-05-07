import { motion } from "framer-motion";

export default function App() {
  const brands = [
    {
      title: "Daikin",
      image: "/hero-daikin.jpg",
      desc: "Premium cooling system dengan teknologi hemat listrik.",
    },
    {
      title: "Gree",
      image: "/gree-display.jpg",
      desc: "Favorit market Banyumas dengan performa dan harga terbaik.",
    },
    {
      title: "Midea",
      image: "/midea-display.jpg",
      desc: "Solusi modern untuk rumah dan kebutuhan komersial.",
    },
  ];

  const services = [
    {
      icon: "❄️",
      title: "Penjualan AC",
      desc: "Berbagai brand premium dengan garansi resmi dan harga kompetitif.",
    },
    {
      icon: "🛠️",
      title: "Instalasi",
      desc: "Pemasangan profesional, rapi, aman, sesuai standar teknisi.",
    },
    {
      icon: "⚡",
      title: "Service AC",
      desc: "Perbaikan cepat untuk AC kurang dingin, bocor, mati total, dan lainnya.",
    },
    {
      icon: "🔧",
      title: "Maintenance",
      desc: "Perawatan berkala agar AC lebih awet dan tetap optimal.",
    },
  ];

  const advantages = [
    {
      title: "Pengerjaan Rapi",
      desc: "Instalasi lebih bersih dan profesional.",
    },
    {
      title: "Fast Response",
      desc: "Tim cepat merespon kebutuhan service dan konsultasi.",
    },
    {
      title: "Teknisi Berpengalaman",
      desc: "Ditangani teknisi yang memahami berbagai jenis AC.",
    },
    {
      title: "Garansi Pekerjaan",
      desc: "Memberikan rasa aman untuk setiap pemasangan.",
    },
  ];

  const stats = [
    {
      number: "1000+",
      label: "Pelanggan",
    },
    {
      number: "500+",
      label: "Project",
    },
    {
      number: "7+",
      label: "Tahun",
    },
    {
      number: "<5m",
      label: "Response",
    },
  ];

  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px]" />
      </div>

      {/* GRID */}
      <div className="fixed inset-0 -z-20 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-3 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="flex justify-between items-center px-4 md:px-6 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo-radjaac.png"
              alt="RADJA AC"
              className="w-10 h-10 object-contain"
            />

            <div>
              <h1 className="font-black text-lg md:text-xl">
                RADJA AC
              </h1>

              <p className="text-xs text-gray-400">
                Purwokerto • Banyumas
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/62882008246099"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2.5 rounded-full text-sm font-bold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16">
        <div className="absolute inset-0">
          <img
            src="/hero-daikin.jpg"
            alt="AC Premium"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/50 via-[#050816]/80 to-[#050816]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-cyan-300 text-xs md:text-sm font-semibold tracking-wide">
                  PREMIUM COOLING SOLUTION
                </span>
              </div>

              <h2 className="text-4xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
                AC Premium
                <br />
                Untuk Rumah
                <br />
                Modern
              </h2>

              <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-2xl mb-8">
                Penjualan AC, instalasi profesional,
                servis, dan maintenance untuk rumah,
                cafe, kantor, hingga proyek komersial
                di Banyumas dan sekitarnya.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Authorized Dealer", "Daikin", "Gree", "Midea"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/62882008246099"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-500 transition px-7 py-4 rounded-full font-bold"
                >
                  Konsultasi Sekarang
                </a>

                <a
                  href="#brand"
                  className="border border-white/15 hover:border-white/40 transition px-7 py-4 rounded-full font-semibold"
                >
                  Lihat Produk
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="hidden lg:block"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl">
                    ❄️
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">
                      Premium Service
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Fast • Clean • Professional
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Teknisi
                    </span>

                    <span className="text-cyan-300 font-bold">
                      7+ Tahun
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Pelanggan
                    </span>

                    <span className="text-cyan-300 font-bold">
                      1000+
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Response
                    </span>

                    <span className="text-cyan-300 font-bold">
                      &lt; 5 Menit
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-black text-cyan-300 mb-2">
                {item.number}
              </h3>

              <p className="text-gray-300 text-sm md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Layanan Premium
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Solusi lengkap kebutuhan pendingin
              ruangan untuk rumah, bisnis,
              hingga proyek komersial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
              >
                <div className="text-4xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-5 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-300 text-xs md:text-sm font-semibold tracking-wide">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Teknisi Profesional
              <br />
              Dengan Standar
              <br />
              Premium
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              Kami mengutamakan kualitas pengerjaan,
              kerapihan instalasi, serta pelayanan cepat
              untuk memastikan kenyamanan pelanggan.
            </p>
          </div>

          <div className="grid gap-4">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
              >
                <h3 className="text-xl font-black mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section
        id="brand"
        className="px-5 py-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Brand Pilihan
            </h2>

            <p className="text-gray-400">
              Distributor dan penyedia AC berbagai brand terpercaya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {brands.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                }}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16">
        <div className="max-w-6xl mx-auto rounded-[36px] overflow-hidden relative">
          <div className="absolute inset-0">
            <img
              src="/showroom-radjaac.jpeg"
              alt="Showroom"
              className="w-full h-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-cyan-500/70" />
          </div>

          <div className="relative z-10 px-6 py-16 md:px-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Butuh AC Baru?
            </h2>

            <p className="text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed text-base md:text-xl">
              Konsultasikan kebutuhan AC rumah,
              cafe, toko, kantor, maupun proyek Anda
              bersama RADJA AC Purwokerto.
            </p>

            <a
              href="https://wa.me/62882008246099"
              target="_blank"
              className="bg-white text-black px-8 py-4 rounded-full font-black inline-block hover:scale-105 transition"
            >
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING BUTTON */}
      <motion.a
        href="https://wa.me/62882008246099"
        target="_blank"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{
          scale: 1.08,
        }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(34,197,94,0.5)]"
      >
        💬
      </motion.a>
    </div>
  );
}