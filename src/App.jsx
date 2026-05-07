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
    desc: "Pemasangan profesional, rapi, dan aman.",
  },
  {
    icon: "⚡",
    title: "Service AC",
    desc: "Perbaikan cepat untuk AC kurang dingin, bocor, dan error.",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    desc: "Perawatan rutin agar AC tetap optimal dan hemat listrik.",
  },
];

const stats = [
  { number: "1000+", label: "Pelanggan" },
  { number: "500+", label: "Project" },
  { number: "7+", label: "Tahun Pengalaman" },
  { number: "<5m", label: "Fast Response" },
];

const brands = [
  "/daikin-logo.png",
  "/gree-logo.png",
  "/midea-logo.png",
  "/sharp-logo.png",
  "/panasonic-logo.png",
  "/samsung-logo.png",
];

const portfolios = [
  "/portfolio-1.jpg",
  "/portfolio-2.jpg",
  "/portfolio-3.jpg",
  "/portfolio-4.jpg",
];

const testimonials = [
  {
    name: "Budi Santoso",
    text: "Pemasangan sangat rapi dan teknisinya profesional.",
  },
  {
    name: "Rina Amelia",
    text: "Fast response, AC langsung dingin kembali.",
  },
  {
    name: "Andi Prasetyo",
    text: "Harga masuk akal dan pengerjaan bersih.",
  },
];

export default function App() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5">

        {/* NAVBAR */}
        <header className="sticky top-3 z-50 py-3">
          <div className="backdrop-blur-xl bg-black/35 border border-white/10 rounded-[28px] px-5 py-4 flex items-center justify-between">

            <div className="flex items-center gap-3">
              <img
                src="/logo-radjaac.png"
                alt="RADJA AC"
                className="w-11 h-11 object-contain"
              />

              <div>
                <h1 className="font-bold text-lg">
                  RADJA AC
                </h1>

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

        {/* SERVICES */}
        <section className="py-16">

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Layanan Kami
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Solusi lengkap kebutuhan pendingin ruangan
              untuk rumah hingga proyek komersial.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/[0.04] border border-white/10 rounded-[30px] p-7"
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

        {/* BRANDS */}
        <section id="produk" className="py-16">

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Brand Pilihan
            </h2>

            <p className="text-white/60">
              Dealer berbagai brand AC terpercaya.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

            {brands.map((brand, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-[24px] p-6 flex items-center justify-center"
              >
                <img
                  src={brand}
                  alt="Brand AC"
                  className="h-10 object-contain opacity-80"
                />
              </div>
            ))}

          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            <div>

              <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                WHY CHOOSE US
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-7">
                Teknisi Profesional
                <br />
                Dengan Standar Premium
              </h2>

              <p className="text-white/65 text-lg leading-relaxed">
                Kami mengutamakan kualitas pengerjaan,
                kerapihan instalasi, serta pelayanan cepat
                untuk memastikan kenyamanan pelanggan.
              </p>

            </div>

            <div className="grid gap-5">

              {[
                "Pengerjaan Rapi",
                "Fast Response",
                "Teknisi Bersertifikat",
                "Garansi Pekerjaan",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-white/10 rounded-[28px] p-6"
                >
                  <h3 className="text-2xl font-bold">
                    {item}
                  </h3>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* PORTFOLIO */}
        <section className="py-16">

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Portfolio Project
            </h2>

            <p className="text-white/60">
              Beberapa project yang telah kami kerjakan.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {portfolios.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[32px] border border-white/10"
              >
                <img
                  src={item}
                  alt="Portfolio"
                  className="w-full h-[260px] object-cover"
                />
              </div>
            ))}

          </div>

        </section>

        {/* TESTIMONIAL */}
        <section className="py-16">

          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Testimoni Pelanggan
            </h2>

            <p className="text-white/60">
              Review dari pelanggan RADJA AC.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {testimonials.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/10 rounded-[30px] p-7"
              >

                <p className="text-white/70 leading-relaxed mb-6">
                  "{item.text}"
                </p>

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

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
                "linear-gradient(to right, rgba(37,99,235,0.92), rgba(34,211,238,0.82)), url('/hero-daikin.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Butuh Survey atau Konsultasi?
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-white/90 leading-relaxed mb-8">
              Hubungi tim RADJA AC sekarang untuk konsultasi,
              survey lokasi, maupun penawaran harga terbaik.
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
        <footer className="py-12 border-t border-white/10 text-center">

          <img
            src="/logo-radjaac.png"
            alt="RADJA AC"
            className="w-16 h-16 object-contain mx-auto mb-4"
          />

          <h3 className="text-2xl font-bold mb-2">
            RADJA AC
          </h3>

          <p className="text-white/50 mb-6">
            Dealer & Service AC Profesional Banyumas
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">

            {[
              "Purwokerto",
              "Banyumas",
              "Sokaraja",
              "Ajibarang",
              "Cilacap",
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm"
              >
                {item}
              </div>
            ))}

          </div>

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