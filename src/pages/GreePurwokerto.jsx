import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import SectionHeading from "../components/ui/SectionHeading"
import { createFAQSchema } from "../utils/schemaUtils"

const greeBenefits = [
  "Nilai lebih untuk budget keluarga dan rumah modern",
  "AC Gree low watt hemat listrik tanpa mengorbankan kesejukan",
  "Pendinginan merata cocok untuk kamar dan ruang keluarga",
  "Desain compact yang pas untuk hunian dan kantor kecil",
]

const featuredGreeProducts = [
  {
    title: "Gree Standard",
    description: "Pilihan AC Gree andalan untuk pendinginan cepat dan nyaman di rumah.",
    badge: "Rumah",
    cta: "Tanya Harga Gree",
  },
  {
    title: "Gree Low Watt",
    description: "Unit hemat energi ideal untuk kamar tidur dan ruang keluarga kecil.",
    badge: "Low Watt",
    cta: "Konsultasi AC Gree",
  },
  {
    title: "Gree Inverter",
    description: "Solusi AC modern dengan konsumsi listrik lebih rendah dan performa stabil.",
    badge: "Inverter",
    cta: "Cek Ketersediaan",
  },
  {
    title: "Gree Rumah Modern",
    description: "Unit stylish untuk rumah modern yang ingin tetap nyaman dan efisien.",
    badge: "Modern",
    cta: "Konsultasi Gratis",
  },
]

const whyRadjaAC = [
  {
    title: "Dealer AC Gree Terpercaya",
    description: "RADJA AC dipercaya menyediakan AC Gree resmi untuk Purwokerto dan Banyumas.",
  },
  {
    title: "Harga Transparan",
    description: "Konsultasi harga dan estimasi instalasi disampaikan jelas sejak awal.",
  },
  {
    title: "Konsultasi PK dan Tipe",
    description: "Bantu pilih AC Gree sesuai ukuran ruangan, fungsi, dan konsumsi listrik.",
  },
  {
    title: "Support Pasca Pembelian",
    description: "Layanan instalasi dan service lanjutan untuk menjaga kenyamanan AC Anda.",
  },
]

const installationHighlights = [
  "Instalasi AC Gree profesional untuk rumah, kantor, dan bisnis",
  "Konsultasi tipe dan kapasitas sebelum pembelian",
  "Bantu tentukan AC low watt atau inverter yang sesuai", 
  "Pemasangan rapi dan pengecekan performa setelah selesai",
]

const faqItems = [
  {
    question: "Apakah Gree Purwokerto menyediakan AC inverter?",
    answer: "Ya, RADJA AC menawarkan AC Gree inverter sebagai pilihan hemat energi untuk rumah dan kantor.",
  },
  {
    question: "Apakah Gree low watt cocok untuk kamar tidur?",
    answer: "Cocok. AC Gree low watt kami direkomendasikan untuk kamar serta ruang keluarga dengan konsumsi listrik lebih ringan.",
  },
  {
    question: "Apakah instalasi AC Gree termasuk layanan?",
    answer: "Ya, setiap pembelian AC Gree dapat dilengkapi instalasi profesional di Purwokerto dan Banyumas.",
  },
  {
    question: "Bisakah konsultasi sebelum membeli?",
    answer: "Tentu. Konsultasi gratis tersedia untuk memilih unit Gree, menentukan PK, dan memetakan kebutuhan ruangan.",
  },
  {
    question: "Apakah layanan ini melayani Banyumas?",
    answer: "Ya, RADJA AC melayani penjualan dan instalasi AC Gree untuk area Purwokerto dan Banyumas.",
  },
]

export default function GreePurwokerto() {
  const faqSchema = createFAQSchema(faqItems)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoHead
        title="Dealer AC Gree Purwokerto | Jual AC Gree Banyumas - RADJA AC"
        description="RADJA AC menyediakan penjualan AC Gree di Purwokerto & Banyumas lengkap dengan instalasi profesional, konsultasi gratis, dan berbagai pilihan AC inverter serta low watt."
        canonicalPath="/gree-purwokerto"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto grid gap-10 xl:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-5">
                Dealer AC Gree Purwokerto & Banyumas
              </span>

              <div className="mb-6 text-sm text-slate-400">
                <Link to="/" className="hover:text-cyan-300">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">Gree Purwokerto</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
                Dealer AC Gree di Purwokerto & Banyumas
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
                RADJA AC menyediakan AC Gree untuk rumah, kantor, dan bisnis lengkap dengan instalasi profesional, pilihan inverter, dan low watt.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-7">
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Tanya Harga Gree
                </Link>
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Konsultasi AC Gree
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
                {[
                  "Ready Stock",
                  "Instalasi Profesional",
                  "Konsultasi Gratis",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-900 shadow-[0_30px_70px_rgba(7,89,133,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1512149673959-0f1d44020c0b?auto=format&fit=crop&w=900&q=70"
                alt="Interior rumah modern dengan AC Gree terpasang"
                className="h-full w-full object-cover aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Kenapa Pilih Gree</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Gree dikenal sebagai AC value for money, cocok untuk keluarga, rumah modern, dan pekerja yang butuh kepraktisan pendinginan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {greeBenefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <p className="text-cyan-300 font-semibold mb-3">•</p>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Featured Gree Products</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Pilihan ringkas AC Gree yang fokus pada efisiensi, kenyamanan keluarga, dan biaya listrik lebih terkontrol.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredGreeProducts.map((product) => (
              <article key={product.title} className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{product.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{product.description}</p>
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

        <section className="px-6 py-10 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 text-center">
            <p className="text-slate-300 text-base leading-relaxed">
              Ingin pilihan AC inverter hemat listrik?{' '}
              <Link to="/ac-inverter-purwokerto" className="font-semibold text-cyan-300 hover:text-cyan-200">
                Lihat juga AC Inverter Purwokerto
              </Link>
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Kenapa Beli di RADJA AC</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              RADJA AC membantu Anda mendapatkan AC Gree berkualitas, konsultasi relevan, dan instalasi rapi di Purwokerto & Banyumas.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyRadjaAC.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <p className="text-cyan-300 font-semibold mb-4">{item.title}</p>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Instalasi & Konsultasi</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Dapatkan layanan instalasi AC Gree yang rapi, serta konsultasi tipe dan PK yang sesuai kebutuhan rumah dan kantor.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {installationHighlights.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <p className="text-slate-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">FAQ Gree Purwokerto</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Jawaban singkat untuk pertanyaan umum pembelian dan instalasi AC Gree di Purwokerto & Banyumas.
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
              Gree Purwokerto Value
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Siap bantu rumah dan bisnis Anda dengan AC Gree hemat listrik
            </h2>
            <p className="text-slate-100 text-lg leading-relaxed mb-8">
              Hubungi RADJA AC untuk konsultasi gratis, harga terbaik, dan instalasi profesional AC Gree di Purwokerto & Banyumas.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white border border-white/10 shadow-[0_24px_45px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
              >
                Konsultasi Gratis
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
