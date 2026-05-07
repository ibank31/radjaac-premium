import { motion } from "framer-motion";

const stats = [
  { number: "1000+", label: "Pelanggan" },
  { number: "500+", label: "Project" },
  { number: "7+", label: "Tahun" },
  { number: "<5m", label: "Response" },
];

const services = [
  {
    icon: "❄️",
    title: "Penjualan AC",
    desc: "Berbagai brand premium dengan garansi resmi.",
  },
  {
    icon: "🛠️",
    title: "Instalasi",
    desc: "Pemasangan profesional dan rapi.",
  },
  {
    icon: "⚡",
    title: "Service AC",
    desc: "Perbaikan AC cepat dan tepat.",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    desc: "Perawatan berkala agar AC tetap optimal.",
  },
];

const brands = [
  {
    name: "Daikin",
    desc: "Premium cooling system hemat listrik.",
    image: "/hero-daikin.jpg",
  },
  {
    name: "Gree",
    desc: "Favorit market Banyumas.",
    image: "/gree-display.jpg",
  },
  {
    name: "Midea",
    desc: "Solusi modern rumah & komersial.",
    image: "/midea-display.jpg",
  },
];

const reasons = [
  {
    title: "Pengerjaan Rapi",
    desc: "Instalasi lebih bersih dan profesional.",
  },
  {
    title: "Fast Response",
    desc: "Respon cepat untuk service & konsultasi.",
  },
  {
    title: "Teknisi Berpengalaman",
    desc: "Ditangani teknisi profesional.",
  },
  {
    title: "Garansi Pekerjaan",
    desc: "Memberikan rasa aman untuk pelanggan.",
  },
];

export default function App() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-150px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full" />
      </div>

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-5">

        {/* NAVBAR */}
        <div className="sticky top-3 z-50 py-3">
          <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-[28px] px-5 py-4 flex items-center justify-between shadow-2xl">

            <div className="flex items-center gap-3">
              <img
                src="/logo-radjaac.png"
                alt="RADJA AC"
                className="w-11 h-11 object-contain"
              />

              <div>
                <h1 className="font-semibold text-lg">RADJA AC</h1>
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
        </div>

        {/* HERO */}
        <section className="pt-10 pb-14">

          <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            PREMIUM COOLING SOLUTION
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-black leading-[0.95] mb-6"
              >
                AC Premium
                <br />
                Untuk Rumah
                <br />
                Modern
              </motion.h1>

              <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-7">
                Penjualan AC, instalasi profesional, servis, dan maintenance
                untuk rumah, cafe, kantor hingga proyek komersial di Banyumas
                dan sekitarnya.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Authorized Dealer", "Daikin", "Gree", "Midea"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm"
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
                  className="bg-blue-600 hover:bg-blue-500 transition px-7 py-4 rounded-full font-bold inline-flex items-center gap-2"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />

                  <span>WhatsApp</span>
                </a>

                <a
                  href="#brand"
                  className="border border-white/10 hover:bg-white/5 transition px-7 py-4 rounded-full font-semibold"
                >
                  Lihat Produk
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px]" />

              <img
                src="/hero-daikin.jpg"
                alt="Hero"
                className="rounded-[32px] border border-white/10 shadow-2xl"
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
                <h3 className="text-cyan-300 text-4xl font-black mb-3">
                  {item.number}
                </h3>

                <p className="text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-14">

          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Layanan Premium
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Solusi lengkap kebutuhan pendingin ruangan untuk rumah,
              bisnis, hingga proyek komersial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8"
              >
                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="py-14">

          <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            WHY CHOOSE US
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            <div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Teknisi Profesional Dengan Standar Premium
              </h2>

              <p className="text-white/65 text-lg leading-relaxed">
                Kami mengutamakan kualitas pengerjaan,
                kerapihan instalasi, serta pelayanan cepat
                untuk memastikan kenyamanan pelanggan.
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

                  <p className="text-white/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section id="brand" className="py-14">

          <div className="text-center mb-10">
            <h2 className="text-5xl font-black mb-4">
              Brand Pilihan
            </h2>

            <p className="text-white/60">
              Distributor dan penyedia AC berbagai brand terpercaya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {brands.map((item, i) => (
              <div
                key={i}
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

                  <p className="text-white/60">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">

          <div
            className="rounded-[40px] overflow-hidden relative border border-white/10 p-10 md:p-16 text-center"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(37,99,235,0.9), rgba(34,211,238,0.8)), url('/gree-display.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-5xl font-black mb-6">
              Butuh AC Baru?
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8 leading-relaxed">
              Konsultasikan kebutuhan AC rumah, cafe, toko,
              kantor maupun proyek Anda bersama RADJA AC Purwokerto.
            </p>

            <a
              href="https://wa.me/62882008246099"
              target="_blank"
              className="bg-white text-black px-8 py-5 rounded-full font-black inline-flex items-center gap-3 hover:scale-105 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />

              WhatsApp
            </a>
          </div>
        </section>

      </div>

      {/* FLOATING BUTTON */}
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