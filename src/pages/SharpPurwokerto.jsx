import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import SectionHeading from "../components/ui/SectionHeading"
import { createFAQSchema } from "../utils/schemaUtils"

const sharpBenefits = [
  "Value for money untuk keluarga dan rumah pertama.",
  "Pendinginan cepat untuk kamar tidur dan ruang keluarga.",
  "Pilihan entry-mid market dengan fitur modern.",
  "Cocok untuk penggunaan harian di hunian lokal.",
]

const recommendedSharpUnits = [
  {
    title: "Sharp Standard 1 PK",
    price: "Mulai Rp 3 jutaan",
    description: "Pilihan populer untuk kamar utama dan ruang tamu ukuran menengah.",
    badge: "Rumah",
  },
  {
    title: "Sharp Inverter 1 PK",
    price: "Mulai Rp 4 jutaan",
    description: "Lebih hemat untuk pemakaian AC rutin setiap hari.",
    badge: "Inverter",
  },
  {
    title: "Sharp Low Watt",
    price: "Mulai Rp 3 jutaan",
    description: "Solusi nyaman untuk rumah dengan fokus biaya listrik terkontrol.",
    badge: "Low Watt",
  },
]

const useCases = [
  {
    title: "Rumah Keluarga",
    description: "Cocok untuk kamar tidur, ruang keluarga, dan area santai dengan kebutuhan pendinginan cepat.",
  },
  {
    title: "Home Office",
    description: "Nyaman untuk ruang kerja rumahan agar tetap fokus saat aktivitas harian.",
  },
]

const faqItems = [
  {
    question: "AC Sharp cocok untuk siapa?",
    answer: "AC Sharp cocok untuk keluarga yang mencari pendinginan cepat dengan harga yang tetap masuk akal.",
  },
  {
    question: "Apakah tersedia opsi inverter Sharp?",
    answer: "Ya, tersedia pilihan Sharp inverter untuk pemakaian harian yang lebih hemat listrik.",
  },
  {
    question: "Bisa konsultasi dulu sebelum beli?",
    answer: "Bisa. Tim RADJA AC siap bantu pilih PK, tipe unit, dan estimasi kebutuhan instalasi.",
  },
]

export default function SharpPurwokerto() {
  const faqSchema = createFAQSchema(faqItems)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoHead
        title="Dealer AC Sharp Purwokerto | Jual AC Sharp Banyumas - RADJA AC"
        description="RADJA AC menyediakan penjualan AC Sharp di Purwokerto & Banyumas dengan rekomendasi unit untuk rumah, harga transparan, dan konsultasi gratis via WhatsApp."
        canonicalPath="/sharp-purwokerto"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto grid gap-10 xl:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-5">
                Dealer AC Sharp Purwokerto & Banyumas
              </span>

              <div className="mb-6 text-sm text-slate-400">
                <Link to="/" className="hover:text-cyan-300">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white">Sharp Purwokerto</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
                AC Sharp untuk Rumah Nyaman & Value for Money
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
                Pilihan AC Sharp populer untuk keluarga, pendinginan cepat, dan budget entry-mid market dengan konsultasi unit langsung dari tim RADJA AC.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
                <Link to="/kontak" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Tanya Harga Sharp
                </Link>
                <Link to="#rekomendasi" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10">
                  Lihat Rekomendasi
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-900 shadow-[0_30px_70px_rgba(7,89,133,0.18)]">
              <img src="/assets/products/midea-display.jpg" alt="AC Sharp untuk rumah keluarga" className="h-full w-full object-cover aspect-[4/5]" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Keunggulan AC Sharp</SectionHeading>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sharpBenefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <p className="text-slate-200 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="rekomendasi" className="px-6 pb-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Rekomendasi Unit Sharp</SectionHeading>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {recommendedSharpUnits.map((unit) => (
              <article key={unit.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-white">{unit.title}</h3>
                  <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">{unit.badge}</span>
                </div>
                <p className="text-cyan-200 font-semibold mb-2">{unit.price}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{unit.description}</p>
                <Link to="/kontak" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Chat WhatsApp
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Cocok untuk Kebutuhan Ini</SectionHeading>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold text-cyan-200 mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="px-6 pb-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <SectionHeading className="text-4xl sm:text-5xl">FAQ Sharp Purwokerto</SectionHeading>
          </div>
          <div className="max-w-4xl mx-auto grid gap-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-slate-300 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-[32px] border border-cyan-400/30 bg-cyan-400/10 p-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Butuh Rekomendasi AC Sharp yang Tepat?</h2>
            <p className="text-slate-200 mb-6">Chat tim RADJA AC sekarang untuk konsultasi kebutuhan ruangan dan estimasi harga unit.</p>
            <Link to="/kontak" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">
              Tanya Harga
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}