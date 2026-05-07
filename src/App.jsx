import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      {/* AMBIENT GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[140px]" />

      </div>
            {/* GRID BACKGROUND */}
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
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div className="flex items-center gap-4">
            <img
              src="/logo-radjaac.png"
              alt="RADJA AC"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="font-black text-2xl tracking-wide">
                RADJA AC
              </h1>

              <p className="text-sm text-gray-400">
                Purwokerto • Banyumas
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/62882008246099"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-500 transition px-7 py-3 rounded-full font-bold shadow-2xl"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32">

        <div className="absolute inset-0">
          <img
            src="/hero-daikin.jpg"
            alt="AC Premium"
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/40 via-[#050816]/80 to-[#050816]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-cyan-300 text-sm font-semibold tracking-wide">
                PREMIUM COOLING SOLUTION
              </span>
            </div>

            <motion.h1
  className="text-6xl md:text-[95px] font-black leading-[0.9] tracking-[-4px] mb-10"
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  AC Premium
  <br />
  Untuk Rumah
  <br />
  Modern
</motion.h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-14 font-light">
              Penjualan AC, instalasi profesional,
              servis, dan maintenance untuk rumah,
              cafe, kantor, hingga proyek komersial
              di Banyumas dan sekitarnya.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">

              <div className="px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-semibold text-gray-300">
                Authorized Dealer
              </div>

              <div className="px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-semibold text-gray-300">
                Daikin
              </div>

              <div className="px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-semibold text-gray-300">
                Gree
              </div>

              <div className="px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-semibold text-gray-300">
                Midea
              </div>

            </div>
            <div className="flex flex-wrap gap-5">

              <a
                href="https://wa.me/62882008246099"
                target="_blank"
                className="group relative overflow-hidden bg-blue-600 hover:scale-105 transition duration-300 px-10 py-5 rounded-full text-lg font-black shadow-[0_0_50px_rgba(37,99,235,0.5)]"
              >
                <span className="relative z-10">
  Konsultasi Sekarang
</span>

<div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/30 to-cyan-400/0 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-1000" />
              </a>

              <a
                href="#brand"
                className="border border-white/20 hover:border-white/50 transition px-10 py-5 rounded-full text-lg font-semibold backdrop-blur-md"
              >
                Lihat Produk
              </a>

            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2"
          >

            <div className="w-[340px] rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(37,99,235,0.15)]">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl">
                  ❄️
                </div>

                <div>
                  <h3 className="text-2xl font-black">
                    Premium Service
                  </h3>

                  <p className="text-gray-400">
                    Fast • Clean • Professional
                  </p>
                </div>

              </div>

              <div className="space-y-5">

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Teknisi Berpengalaman
                  </span>

                  <span className="font-bold text-cyan-300">
                    7+ Tahun
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Pelanggan
                  </span>

                  <span className="font-bold text-cyan-300">
                    1000+
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Response Time
                  </span>

                  <span className="font-bold text-cyan-300">
                    &lt; 5 Menit
                  </span>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      </section>
           <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      </div> 
      {/* BRANDS */}
      <motion.section
  id="brand"
  className="py-32 px-6"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

        <div className="max-w-7xl mx-auto">

          <div className="mb-20 text-center">

            <h2 className="text-5xl font-black mb-6">
              Brand Pilihan
            </h2>

            <p className="text-gray-400 text-xl">
              Distributor dan penyedia AC berbagai brand terpercaya.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Daikin",
                image: "/hero-daikin.jpg",
                desc: "Premium cooling system dengan teknologi hemat listrik."
              },
              {
                title: "Gree",
                image: "/gree-display.jpg",
                desc: "Favorit market Banyumas dengan performa dan harga terbaik."
              },
              {
                title: "Midea",
                image: "/midea-display.jpg",
                desc: "Solusi modern untuk rumah dan kebutuhan komersial."
              }
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
  y: -18,
  scale: 1.02,
}}
                className="group rounded-[35px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.03)]"
              >

                <div className="h-[320px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-3xl font-black mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </motion.section>
                  <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      {/* SERVICES */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-black mb-6"
            >
              Layanan Premium
            </motion.h2>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Solusi lengkap kebutuhan pendingin ruangan
              untuk rumah, bisnis, hingga proyek komersial.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: "❄️",
                title: "Penjualan AC",
                desc: "Berbagai brand premium dengan garansi resmi dan harga kompetitif."
              },
              {
                icon: "🛠️",
                title: "Instalasi",
                desc: "Pemasangan profesional, rapi, aman, dan sesuai standar teknisi."
              },
              {
                icon: "⚡",
                title: "Service AC",
                desc: "Perbaikan cepat untuk AC kurang dingin, bocor, mati total, dan lainnya."
              },
              {
                icon: "🔧",
                title: "Maintenance",
                desc: "Perawatan berkala agar AC lebih awet, hemat listrik, dan tetap optimal."
              }
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-2xl p-8 group shadow-[0_0_50px_rgba(255,255,255,0.03)]"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent" />

                <div className="relative z-10">

                  <div className="text-6xl mb-8 group-hover:scale-110 transition duration-500">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-black mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
                  <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>
            {/* WHY CHOOSE US */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >

                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 mb-8">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-cyan-300 text-sm font-semibold tracking-wide">
                    WHY CHOOSE US
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
                  Teknisi Profesional
                  <br />
                  Dengan Standar
                  <br />
                  Premium
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed mb-12">
                  Kami mengutamakan kualitas pengerjaan,
                  kerapihan instalasi, serta pelayanan cepat
                  untuk memastikan kenyamanan pelanggan tetap maksimal.
                </p>

              </motion.div>

            </div>

            <div className="grid gap-6">

              {[
                {
                  title: "Pengerjaan Rapi",
                  desc: "Standar instalasi modern dengan hasil lebih bersih dan profesional."
                },
                {
                  title: "Fast Response",
                  desc: "Tim cepat merespon kebutuhan service maupun konsultasi."
                },
                {
                  title: "Teknisi Berpengalaman",
                  desc: "Ditangani langsung oleh teknisi yang memahami berbagai jenis AC."
                },
                {
                  title: "Garansi Pekerjaan",
                  desc: "Memberikan rasa aman dan kepercayaan untuk setiap pemasangan."
                }
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    x: 10,
                  }}
                  className="rounded-[30px] border border-white/10 bg-gradient-to-r from-white/10 to-white/[0.03] backdrop-blur-2xl p-8"
                >

                  <h3 className="text-2xl font-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      </section>
      {/* TRUST SECTION */}
      <section className="px-6 pb-32">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                number: "1000+",
                label: "Pelanggan"
              },
              {
                number: "500+",
                label: "Project Selesai"
              },
              {
                number: "7+",
                label: "Tahun Pengalaman"
              },
              {
                number: "< 5 Menit",
                label: "Fast Response"
              }
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-[35px] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-10 text-center"
              >

                <h3 className="text-5xl font-black mb-4 text-cyan-300">
                  {item.number}
                </h3>

                <p className="text-xl text-gray-300">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>
      {/* CTA */}
      <section className="px-6 pb-32">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="max-w-6xl mx-auto rounded-[40px] overflow-hidden relative"
        >

          <div className="absolute inset-0">
            <img
              src="/showroom-radjaac.jpeg"
              alt="Showroom"
              className="w-full h-full object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-cyan-500/70" />
          </div>

          <div className="relative z-10 px-10 py-24 md:px-20 text-center">

            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Butuh AC Baru?
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Konsultasikan kebutuhan AC rumah,
              cafe, toko, kantor, maupun proyek Anda
              bersama RADJA AC Purwokerto.
            </p>

            <a
              href="https://wa.me/62882008246099"
              target="_blank"
              className="bg-white text-black px-10 py-5 rounded-full text-xl font-black inline-block hover:scale-110 transition duration-300"
            >
              Hubungi Sekarang
            </a>

          </div>

        </motion.div>
      </section>
      {/* FLOATING WHATSAPP */}
      <motion.a
        href="https://wa.me/62882008246099"
        target="_blank"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{
          scale: 1.1,
        }}
        className="fixed bottom-8 right-8 z-50 w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(34,197,94,0.6)]"
      >
        💬
      </motion.a>
    </div>
  );
}