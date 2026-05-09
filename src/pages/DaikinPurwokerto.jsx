import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import SectionHeading from "../components/ui/SectionHeading"
import { createFAQSchema } from "../utils/schemaUtils"

const daikinBenefits = [
  "Hemat listrik dan performa stabil",
  "Pendinginan cepat untuk rumah modern",
  "Tahan lama dengan brand internasional",
  "Cocok untuk rumah, kantor, dan ruang bisnis",
]

const featuredDaikinProducts = [
  {
    title: "Daikin Standard",
    description: "Pilihan AC Daikin andalan untuk hunian yang butuh kesejukan handal.",
    badge: "Rumah",
    cta: "Tanya Harga Daikin",
  },
  {
    title: "Daikin Inverter",
    description: "Solusi premium hemat energi untuk ruang keluarga dan kantor kecil.",
    badge: "Inverter",
    cta: "Konsultasi AC Daikin",
  },
  {
    title: "Daikin Low Watt",
    description: "AC low watt siap membantu pelanggan yang ingin konsumsi listrik lebih ringan.",
    badge: "Low Watt",
    cta: "Cek Ketersediaan",
  },
  {
    title: "Daikin Kantor",
    description: "Unit AC berkapasitas tepat untuk pendinginan ruang kerja dan kantor modern.",
    badge: "Kantor",
    cta: "Konsultasi Gratis",
  },
]

const whyRadjaAC = [
  {
    title: "Dealer Daikin Terpercaya",
    description: "Penyedia AC Daikin resmi untuk rumah dan bisnis di Purwokerto & Banyumas.",
  },
  {
    title: "Instalasi dan Koneksi Rapi",
    description: "Teknisi kami memasang AC dengan finishing rapi dan penataan kabel bersih.",
  },
  {
    title: "Konsultasi Pilih PK",
    description: "Dapatkan rekomendasi PK AC sesuai ukuran ruangan dan kebutuhan pendinginan.",
  },
  {
    title: "Layanan After-Sales",
    description: "Dukungan service dan pemeliharaan untuk menjaga performa AC Daikin Anda.",
  },
]

const installationHighlights = [
  "Instalasi profesional untuk AC rumah & kantor",
  "Konsultasi tipe AC Daikin sesuai ruang dan budget",
  "Bantuan menentukan PK yang ideal untuk ruangan Anda",
  "Pengaturan unit dan remote agar nyaman digunakan",
]

const faqItems = [
  {
    question: "Apakah tersedia AC Daikin inverter?",
    answer: "Ya, RADJA AC menyediakan AC Daikin inverter premium untuk hemat energi dan pendinginan lebih nyaman.",
  },
  {
    question: "Bagaimana memilih PK AC Daikin yang tepat?",
    answer: "Tim kami akan membantu menentukan PK berdasarkan ukuran ruangan, jumlah penghuni, dan penggunaan sehari-hari.",
  },
  {
    question: "Apakah instalasi AC Daikin termasuk layanan?",
    answer: "Ya, kami menyediakan instalasi profesional untuk semua pembelian AC Daikin di Purwokerto & Banyumas.",
  },
  {
    question: "Apakah bisa konsultasi sebelum membeli?",
    answer: "Bisa. Konsultasi gratis tersedia untuk rekomendasi unit, tipe, dan estimasi biaya pemasangan.",
  },
  {
    question: "Apakah Radja AC melayani Banyumas?",
    answer: "Tentu. RADJA AC melayani penjualan dan instalasi AC Daikin untuk area Purwokerto dan Banyumas.",
  },
]

export default function DaikinPurwokerto() {
  const faqSchema = createFAQSchema(faqItems)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoHead
        title="Dealer AC Daikin Purwokerto | Jual AC Daikin Banyumas - RADJA AC"
        description="RADJA AC menyediakan penjualan AC Daikin di Purwokerto & Banyumas untuk rumah, kantor, dan bisnis lengkap dengan instalasi profesional dan konsultasi gratis."
        canonicalPath="/daikin-purwokerto"
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
                Dealer AC Daikin Purwokerto & Banyumas
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
                Dealer AC Daikin di Purwokerto & Banyumas
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
                RADJA AC menyediakan AC Daikin untuk rumah, kantor, dan bisnis lengkap dengan instalasi profesional serta konsultasi gratis untuk pilihan unit terbaik.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-7">
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Tanya Harga Daikin
                </Link>
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Konsultasi AC Daikin
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
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=70"
                alt="AC Daikin premium untuk rumah dan kantor"
                className="h-full w-full object-cover aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Kenapa Pilih Daikin</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Daikin jadi pilihan banyak rumah dan kantor karena kombinasi pendinginan nyaman, efisiensi energi, dan ketahanan yang kuat.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {daikinBenefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <p className="text-cyan-300 font-semibold mb-3">•</p>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Featured Daikin Products</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Pilihan produk Daikin terbaik untuk rumah, kantor, dan ruang usaha dengan fokus pada kenyamanan dan efisiensi.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredDaikinProducts.map((product) => (
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
              Ingin juga melihat pilihan AC Gree value for money?{' '}
              <Link to="/gree-purwokerto" className="font-semibold text-cyan-300 hover:text-cyan-200">
                Lihat juga AC Gree
              </Link>
            </p>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Kenapa Beli di RADJA AC</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              RADJA AC menghadirkan pengalaman pembelian AC Daikin yang premium, terpercaya, dan fokus pada hasil yang memuaskan.
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
              Kami membantu menentukan tipe AC Daikin, kapasitas PK, dan proses instalasi untuk hasil terbaik.
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
            <SectionHeading className="text-4xl sm:text-5xl">FAQ Daikin Purwokerto</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Pertanyaan umum tentang pembelian dan instalasi AC Daikin di Purwokerto & Banyumas.
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
              Daikin Purwokerto Premium
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Siap bantu bisnis dan rumah Anda dengan AC Daikin terbaik
            </h2>
            <p className="text-slate-100 text-lg leading-relaxed mb-8">
              Hubungi RADJA AC untuk informasi harga, ketersediaan unit, dan instalasi profesional Daikin di Purwokerto & Banyumas.
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
