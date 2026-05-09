import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import SectionHeading from "../components/ui/SectionHeading"
import { createFAQSchema } from "../utils/schemaUtils"

const heroBadges = [
  "Hemat listrik",
  "Multi-brand",
  "Instalasi profesional",
  "Konsultasi gratis",
]

const lowWattBenefits = [
  {
    title: "Konsumsi listrik lebih ringan",
    description: "AC low watt dirancang untuk menggunakan daya lebih kecil sehingga tagihan listrik lebih terkontrol.",
  },
  {
    title: "Cocok untuk daya listrik terbatas",
    description: "Ideal untuk rumah dengan kapasitas listrik 900–1300 VA yang tidak ingin sering trip MCB.",
  },
  {
    title: "Pendinginan tetap optimal",
    description: "Meski hemat daya, AC low watt tetap memberikan kesejukan yang nyaman untuk kamar dan ruang keluarga.",
  },
  {
    title: "Pilihan untuk rumah & kantor",
    description: "Solusi tepat untuk hunian, kos, ruang kerja kecil, dan bisnis yang ingin efisiensi biaya operasional.",
  },
]

const featuredLowWattProducts = [
  {
    brand: "Gree Low Watt",
    benefit: "Pilihan value for money dengan konsumsi daya rendah dan pendinginan merata.",
    badge: "Value",
    cta: "Tanya Harga",
  },
  {
    brand: "Panasonic Low Watt",
    benefit: "Teknologi hemat energi dari brand terpercaya untuk kenyamanan keluarga modern.",
    badge: "Modern",
    cta: "Konsultasi",
  },
  {
    brand: "Daikin Low Watt",
    benefit: "Performa stabil dengan konsumsi listrik lebih ringan untuk rumah premium.",
    badge: "Premium",
    cta: "Tanya Harga",
  },
  {
    brand: "Midea Low Watt",
    benefit: "Solusi serbaguna hemat listrik untuk kantor dan ruang kerja di Purwokerto.",
    badge: "Kantor",
    cta: "Konsultasi",
  },
]

const useCases = [
  {
    title: "Rumah dengan daya listrik terbatas",
    description: "AC low watt ideal untuk rumah 900–1300 VA agar tidak sering trip dan tetap sejuk sepanjang hari.",
  },
  {
    title: "Kamar tidur dan ruang keluarga",
    description: "Pendinginan nyaman untuk kamar tidur, ruang santai, dan ruang keluarga dengan biaya listrik lebih hemat.",
  },
  {
    title: "Kos dan hunian kecil",
    description: "Pilihan tepat untuk kos-kosan, kontrakan, dan hunian kecil yang butuh AC hemat dan terjangkau.",
  },
  {
    title: "Kantor dan ruang usaha",
    description: "Efisiensi biaya operasional untuk toko, kantor kecil, dan ruang usaha di Purwokerto & Banyumas.",
  },
]

const whyRadjaAC = [
  {
    title: "Konsultasi kebutuhan PK",
    description: "Dapatkan rekomendasi PK yang tepat berdasarkan luas ruangan, daya listrik, dan aktivitas harian.",
  },
  {
    title: "Instalasi rapi dan aman",
    description: "Pemasangan AC dilakukan dengan finishing bersih, tata kabel tertata, dan pengecekan performa.",
  },
  {
    title: "Ready stock multi-brand",
    description: "Stok AC low watt Gree, Panasonic, Daikin, dan Midea siap dipilih di Purwokerto.",
  },
  {
    title: "Support after-sales",
    description: "Layanan purnajual, service, dan garansi untuk menjaga kenyamanan AC low watt jangka panjang.",
  },
]

const faqItems = [
  {
    question: "Apa itu AC low watt?",
    answer: "AC low watt adalah AC yang dirancang dengan konsumsi daya listrik lebih rendah dibanding AC standar, cocok untuk rumah dengan kapasitas listrik terbatas.",
  },
  {
    question: "Apakah AC low watt cocok untuk rumah 900 VA?",
    answer: "Ya. AC low watt sangat direkomendasikan untuk rumah dengan daya listrik 900–1300 VA agar tidak sering trip MCB saat AC dinyalakan.",
  },
  {
    question: "Berapa PK AC low watt yang cocok untuk kamar?",
    answer: "Untuk kamar 12–15 m² cukup 1 PK, untuk 16–20 m² gunakan 1.5 PK. Tim kami siap membantu menentukan PK yang tepat.",
  },
  {
    question: "Apakah AC low watt sama dengan AC inverter?",
    answer: "Tidak sama, namun keduanya hemat listrik. AC low watt fokus pada konsumsi daya awal yang rendah, sedangkan AC inverter menyesuaikan kecepatan kompresor secara otomatis.",
  },
  {
    question: "Apakah RADJA AC menyediakan instalasi AC low watt?",
    answer: "Ya, instalasi profesional tersedia untuk semua pembelian AC low watt di Purwokerto dan Banyumas.",
  },
  {
    question: "Apakah RADJA AC melayani area Banyumas?",
    answer: "Tentu, kami melayani penjualan dan instalasi AC low watt di seluruh area Banyumas dan Purwokerto.",
  },
]

export default function AcLowWattPurwokerto() {
  const faqSchema = createFAQSchema(faqItems)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoHead
        title="AC Low Watt Purwokerto | Jual AC Hemat Listrik - RADJA AC"
        description="RADJA AC menyediakan penjualan AC low watt hemat listrik di Purwokerto & Banyumas lengkap dengan instalasi profesional dan konsultasi gratis untuk rumah, kantor, dan bisnis."
        canonicalPath="/ac-low-watt-purwokerto"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto grid gap-10 xl:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-5">
                AC Low Watt Purwokerto & Banyumas
              </span>

              <div className="mb-6 text-sm text-slate-400">
                <Link to="/" className="hover:text-cyan-300">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">AC Low Watt Purwokerto</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
                AC Low Watt Hemat Listrik di Purwokerto & Banyumas
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
                RADJA AC menyediakan pilihan AC low watt terbaik untuk rumah, kantor, dan bisnis lengkap dengan instalasi profesional, konsultasi gratis, dan layanan after-sales.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-7">
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Tanya Harga AC Low Watt
                </Link>
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Konsultasi AC Low Watt
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                {heroBadges.map((badge) => (
                  <div key={badge} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 text-center">
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-900 shadow-[0_30px_70px_rgba(7,89,133,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=70"
                alt="AC low watt hemat listrik untuk rumah dan kantor di Purwokerto"
                className="h-full w-full object-cover aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Apa Itu AC Low Watt */}
        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Apa Itu AC Low Watt?</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              AC low watt adalah AC yang dirancang dengan konsumsi daya listrik lebih rendah dari AC standar.
              Cocok untuk rumah dengan kapasitas listrik terbatas, kos-kosan, dan bisnis yang ingin menekan biaya operasional.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {lowWattBenefits.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Keuntungan AC Low Watt */}
        <section className="px-6 pb-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Keuntungan AC Low Watt</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              AC low watt memberi manfaat nyata untuk kebutuhan modern di Purwokerto & Banyumas.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {lowWattBenefits.map((item) => (
              <article key={item.title} className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200 shrink-0 ml-3">Top</span>
                </div>
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Konsultasi
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Featured Low Watt Products */}
        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Featured Low Watt Products</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Pilihan AC low watt terbaik dari berbagai brand untuk rumah, kantor, dan bisnis lokal.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredLowWattProducts.map((product) => (
              <article key={product.brand} className="group rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{product.brand}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{product.benefit}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200 shrink-0">
                    {product.badge}
                  </span>
                </div>
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {product.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Internal link to AC Inverter */}
        <section className="px-6 py-10 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 text-center">
            <p className="text-slate-300 text-base leading-relaxed">
              Ingin pilihan AC inverter dengan teknologi kompresor variabel?{' '}
              <Link to="/ac-inverter-purwokerto" className="font-semibold text-cyan-300 hover:text-cyan-200">
                Lihat juga AC Inverter Purwokerto
              </Link>
            </p>
          </div>
        </section>

        {/* AC Low Watt untuk Rumah & Kantor */}
        <section className="px-6 py-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">AC Low Watt untuk Rumah & Kantor</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Solusi AC low watt ideal untuk kebutuhan rumah modern dan ruang kerja di Purwokerto & Banyumas.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Buy From RADJA AC */}
        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Kenapa Beli di RADJA AC</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              RADJA AC menggabungkan layanan lokal, stok multi-brand, dan instalasi yang siap pakai di Purwokerto & Banyumas.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {whyRadjaAC.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <p className="text-cyan-300 font-semibold mb-4">{item.title}</p>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-6 py-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">FAQ AC Low Watt Purwokerto</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Pertanyaan umum tentang AC low watt, hemat listrik, dan layanan instalasi kami.
            </p>
          </div>

          <div className="grid gap-5">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-slate-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 pb-24 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-[32px] border border-cyan-400/20 bg-cyan-400/5 p-8 text-center shadow-[0_35px_90px_rgba(6,78,122,0.16)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200 font-semibold mb-4">
              AC Low Watt Purwokerto
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Konsultasi dan Harga AC Low Watt untuk Rumah & Kantor
            </h2>
            <p className="text-slate-100 text-lg leading-relaxed mb-8">
              Hubungi RADJA AC untuk cek ketersediaan unit, rekomendasi PK, dan instalasi profesional AC low watt di Purwokerto & Banyumas.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white border border-white/10 shadow-[0_24px_45px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
              >
                Konsultasi AC Low Watt
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/20"
              >
                Cek Ketersediaan
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
