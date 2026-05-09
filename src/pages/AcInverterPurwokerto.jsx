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

const inverterBenefits = [
  {
    title: "Hemat listrik hingga 30%",
    description: "Kompresor inverter menyesuaikan daya secara otomatis sehingga penggunaan listrik lebih efisien.",
  },
  {
    title: "Suhu stabil sepanjang hari",
    description: "AC inverter menjaga pendinginan tetap konsisten tanpa sering hidup-mati.",
  },
  {
    title: "Operasi lebih senyap",
    description: "Kinerja mesin yang lebih halus membuat ruangan tetap nyaman untuk istirahat dan bekerja.",
  },
  {
    title: "Cocok untuk rumah & kantor",
    description: "Solusi yang ideal untuk kamar, ruang kerja, meeting room, dan hunian modern.",
  },
]

const featuredInverterProducts = [
  {
    brand: "Daikin Inverter",
    benefit: "Hemat energi dan performa stabil untuk rumah premium.",
    badge: "Premium",
    cta: "Tanya Harga",
  },
  {
    brand: "Gree Inverter",
    benefit: "Pilihan value for money dengan pendinginan cepat dan efisien.",
    badge: "Value",
    cta: "Konsultasi",
  },
  {
    brand: "Panasonic Inverter",
    benefit: "Teknologi terbaru untuk kenyamanan keluarga modern.",
    badge: "Modern",
    cta: "Cek Ketersediaan",
  },
  {
    brand: "Midea Inverter",
    benefit: "Solusi serbaguna untuk kantor dan ruang kerja di Purwokerto.",
    badge: "Kantor",
    cta: "Konsultasi",
  },
]

const useCases = [
  {
    title: "Kamar dan rumah modern",
    description: "Hemat listrik dan desain AC yang pas untuk hunian minimalis di Purwokerto.",
  },
  {
    title: "Ruang kerja dan kantor",
    description: "Pendinginan stabil untuk meeting room, kantor kecil, dan ruang kerja produktif.",
  },
  {
    title: "Kantor lokal Banyumas",
    description: "AC inverter ideal untuk toko, kantor, dan bisnis yang butuh kenyamanan dan efisiensi.",
  },
  {
    title: "Penggunaan harian yang nyaman",
    description: "Cocok untuk aktivitas rutin keluarga, ruang belajar, dan ruang kerja di rumah.",
  },
]

const whyRadjaAC = [
  {
    title: "Konsultasi kebutuhan PK",
    description: "Dapatkan rekomendasi PK yang tepat berdasarkan luas ruangan dan aktivitas.",
  },
  {
    title: "Instalasi rapi dan aman",
    description: "Pemasangan AC dilakukan dengan finishing bersih dan tata kabel yang tertata.",
  },
  {
    title: "Ready stock multi-brand",
    description: "Stok AC inverter Daikin, Gree, Panasonic, dan Midea siap dipilih di Purwokerto.",
  },
  {
    title: "Support after-sales",
    description: "Layanan purnajual, service, dan garansi untuk menjaga kenyamanan jangka panjang.",
  },
]

const faqItems = [
  {
    question: "Apakah AC inverter lebih hemat listrik?",
    answer: "Ya. AC inverter menyesuaikan daya mesin sehingga konsumsi listrik lebih efisien dibanding AC non-inverter.",
  },
  {
    question: "Apakah AC inverter cocok untuk rumah?",
    answer: "Sangat cocok untuk rumah modern, kamar tidur, dan ruang keluarga yang membutuhkan kenyamanan stabil.",
  },
  {
    question: "Berapa PK AC inverter yang cocok untuk rumah?",
    answer: "Rekomendasi PK tergantung luas ruangan: 1 PK untuk 12-15 m², 1.5 PK untuk 16-20 m², dan 2 PK untuk 21-25 m².",
  },
  {
    question: "Apakah RADJA AC menyediakan instalasi AC inverter?",
    answer: "Ya, instalasi profesional tersedia untuk semua pembelian AC inverter di Purwokerto dan Banyumas.",
  },
  {
    question: "Apakah RADJA AC melayani Banyumas?",
    answer: "Tentu, kami melayani penjualan dan instalasi AC inverter di seluruh area Banyumas dan Purwokerto.",
  },
]

export default function AcInverterPurwokerto() {
  const faqSchema = createFAQSchema(faqItems)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoHead
        title="AC Inverter Purwokerto | Jual AC Inverter Hemat Listrik - RADJA AC"
        description="RADJA AC menyediakan penjualan AC inverter hemat listrik di Purwokerto & Banyumas dari berbagai brand seperti Daikin, Gree, Panasonic, dan Midea lengkap dengan instalasi profesional dan konsultasi gratis."
        canonicalPath="/ac-inverter-purwokerto"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto grid gap-10 xl:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-5">
                AC Inverter Purwokerto & Banyumas
              </span>

              <div className="mb-6 text-sm text-slate-400">
                <Link to="/" className="hover:text-cyan-300">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">AC Inverter Purwokerto</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
                AC Inverter Hemat Listrik di Purwokerto & Banyumas
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
                RADJA AC menyediakan pilihan AC inverter terbaik untuk rumah, kantor, dan bisnis lengkap dengan instalasi profesional, konsultasi gratis, dan layanan after-sales.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-7">
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Tanya Harga AC Inverter
                </Link>
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Konsultasi AC Inverter
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
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=70"
                alt="AC inverter hemat listrik untuk rumah dan kantor"
                className="h-full w-full object-cover aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Apa Itu AC Inverter?</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              AC inverter adalah teknologi pendinginan yang menyesuaikan kecepatan kompresor secara otomatis.
              Hasilnya lebih hemat listrik, suhu lebih stabil, dan cocok untuk penggunaan rumah maupun kantor.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {inverterBenefits.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Keuntungan AC Inverter</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              AC inverter memberi manfaat nyata untuk kebutuhan modern di Purwokerto & Banyumas.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {inverterBenefits.map((item) => (
              <article key={item.title} className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">Top</span>
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

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Featured Inverter Products</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Contoh pilihan AC inverter terbaik untuk rumah, kantor, dan bisnis lokal.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredInverterProducts.map((product) => (
              <article key={product.brand} className="group rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{product.brand}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{product.benefit}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
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

        <section className="px-6 py-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">AC Inverter untuk Rumah & Kantor</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Solusi AC inverter ideal untuk kebutuhan rumah modern dan ruang kerja di Purwokerto & Banyumas.
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

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Why Buy From RADJA AC</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              RADJA AC menggabungkan layanan lokal, stok multi-brand, dan instalasi yang siap pakai.
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

        <section id="faq" className="px-6 py-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">FAQ AC Inverter Purwokerto</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Pertanyaan umum tentang AC inverter, hemat listrik, dan layanan instalasi kami.
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

        <section className="px-6 pb-24 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-[32px] border border-cyan-400/20 bg-cyan-400/5 p-8 text-center shadow-[0_35px_90px_rgba(6,78,122,0.16)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200 font-semibold mb-4">
              AC Inverter Purwokerto
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Konsultasi dan Harga AC Inverter untuk Rumah & Kantor
            </h2>
            <p className="text-slate-100 text-lg leading-relaxed mb-8">
              Hubungi RADJA AC untuk cek ketersediaan unit, rekomendasi PK, dan instalasi profesional AC inverter di Purwokerto & Banyumas.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white border border-white/10 shadow-[0_24px_45px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
              >
                Konsultasi AC Inverter
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
