import { motion } from "framer-motion";

const services = [
  {
    icon: "❄️",
    title: "Penjualan AC",
    desc: "Distributor berbagai brand AC premium dengan garansi resmi.",
  },
  {
    icon: "🛠️",
    title: "Instalasi AC",
    desc: "Pemasangan profesional, rapi, aman, dan sesuai standar teknisi.",
  },
  {
    icon: "⚡",
    title: "Service AC",
    desc: "Perbaikan cepat untuk AC kurang dingin, bocor, hingga mati total.",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    desc: "Perawatan rutin agar AC lebih awet dan hemat listrik.",
  },
];

const stats = [
  { number: "1000+", label: "Pelanggan" },
  { number: "500+", label: "Project" },
  { number: "7+", label: "Tahun Pengalaman" },
  { number: "<5m", label: "Fast Response" },
];

const brands = [
  {
    name: "Daikin",
    image: "/hero-daikin.jpg",
    desc: "Premium cooling system dengan teknologi hemat energi.",
  },
  {
    name: "Gree",
    image: "/gree-display.jpg",
    desc: "Brand favorit market Banyumas dengan performa terbaik.",
  },
  {
    name: "Midea",
    image: "/midea-display.jpg",
    desc: "Solusi modern untuk rumah dan kebutuhan komersial.",
  },
];

const reasons = [
  {
    title: "Pengerjaan Rapi",
    desc: "Instalasi lebih bersih dan profesional.",
  },
  {
    title: "Fast Response",
    desc: "Tim cepat merespon kebutuhan service maupun konsultasi.",
  },
  {
    title: "Teknisi Berpengalaman",
    desc: "Ditangani langsung oleh teknisi profesional.",
  },
  {
    title: "Garansi Pekerjaan",
    desc: "Memberikan rasa aman dan nyaman untuk pelanggan.",
  },
];

export default function App() {
  return (
    <div className="bg-[#040816] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5">

        {/* NAVBAR */}
        <header className="sticky top-3 z-50 py-3">
          <div className="backdrop-blur-xl bg-black/35 border border-white/10 rounded-[28px] px-5 py-4 flex items-center justify-between shadow-2xl">

            <div className="flex items-center gap-3">
              <img
                src="/logo-radjaac.png"
                alt="RADJA AC"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h1 className="font-bold text-lg">RADJA AC</h1>
                <p className="text-xs text-white/50">
                  Purwokerto • Banyumas
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/62882008246099"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />

              WhatsApp
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="pt-12 pb-16">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-7">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                PREMIUM COOLING SOLUTION
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] mb-7"
              >
                AC Premium
                <br />
                Untuk Rumah
                <br />
                Modern
              </motion.h1>

              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">
                Penjualan AC, instalasi profesional, service, dan maintenance
                untuk rumah, cafe, kantor, hingga proyek komersial di Banyumas
                dan sekitarnya.
              </p>

              <div className="flex flex-wrap gap-3 mb-9">
                {["Authorized Dealer", "Daikin", "Gree", "Midea"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-sm"
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
                  href="#brand"
                  className="border border-white/10 hover:bg-white/[0.03] transition px-8 py-4 rounded-full font-semibold"
                >
                  Lihat Produk
                </a>

              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="absolute inset-0 bg-blue-500/20 blur-[120px]" />

              <img
                src="/hero-daikin.jpg"
                alt="AC Premium"
                className="rounded-[34px] border border-white/10 shadow-2xl"
              />

              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-black/40 border border-white/10 rounded-[24px] p-5 flex items-center justify-between">

                <div>
                  <p className="text-white/50 text-sm mb-1">
                    Premium Service
                  </p>

                  <h3 className="font-bold text-xl">
                    Fast • Clean • Professional
                  </h3>
                </div>

                <div className="text-right">
                  <p className="text-cyan-300 font-black text-2xl">
                    7+
                  </p>

                  <p className="text-white/50 text-sm">
                    Tahun
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* STATS */}
        <section className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/[0.04] border border-white/10 rounded-[30px] p-8 text-center"
              >
                <h3 className="text-cyan-300 text-4xl md:text-5xl font-black mb-3">
                  {item.number}
                </h3>

                <p className="text-white/60">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16">

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-6xl font-black mb-5">
              Layanan Premium
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Solusi lengkap kebutuhan pendingin ruangan untuk rumah,
              bisnis, hingga proyek komersial.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8"
              >
                <div className="text-5xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* WHY US */}
        <section className="py-16">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div>

              <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                WHY CHOOSE US
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-7">
                Teknisi Profesional Dengan Standar Premium
              </h2>

              <p className="text-white/65 text-lg leading-relaxed">
                Kami mengutamakan kualitas pengerjaan,
                kerapihan instalasi, serta pelayanan cepat
                untuk memastikan kenyamanan pelanggan tetap maksimal.
              </p>

            </div>

            <div className="grid gap-5">

              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-white/10 rounded-[28px] p-7"
                >
                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* BRANDS */}
        <section id="brand" className="py-16">

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-6xl font-black mb-5">
              Brand Pilihan
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Distributor dan penyedia AC berbagai brand terpercaya.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {brands.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-7">

                  <h3 className="text-3xl font-bold mb-4">
                    {item.name}
                  </h3>

                  <p className="text-white/60 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="py-16">

          <div
            className="rounded-[40px] overflow-hidden relative border border-white/10 p-10 md:p-16 text-center"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(37,99,235,0.92), rgba(34,211,238,0.82)), url('/gree-display.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Butuh AC Baru?
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-9">
              Konsultasikan kebutuhan AC rumah, cafe, toko,
              kantor maupun proyek Anda bersama RADJA AC Purwokerto.
            </p>

            <a
              href="https://wa.me/62882008246099"
              target="_blank"
              className="bg-white text-black hover:scale-105 transition px-8 py-5 rounded-full font-black inline-flex items-center gap-3"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />

              Hubungi Sekarang
            </a>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 border-t border-white/10 text-center">

          <img
            src="/logo-radjaac.png"
            alt="RADJA AC"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />

          <h3 className="text-2xl font-bold mb-2">
            RADJA AC
          </h3>

          <p className="text-white/50 mb-5">
            Purwokerto • Banyumas
          </p>

          <a
            href="https://wa.me/62882008246099"
            target="_blank"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-full font-semibold"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-5 h-5"
            />

            WhatsApp
          </a>

        </footer>

      </div>

      {/* FLOATING WHATSAPP */}
      <motion.a
        href="https://wa.me/62882008246099"
        target="_blank"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="fixed bottom-7 right-7 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.7)]"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </motion.a>
    </div>
  );
}