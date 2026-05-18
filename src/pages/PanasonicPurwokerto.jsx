import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import SectionHeading from "../components/ui/SectionHeading"
import { createFAQSchema } from "../utils/schemaUtils"

const panasonicBenefits = [
  "Inverter nyaman untuk pemakaian harian jangka panjang.",
  "Lebih hemat listrik untuk keluarga modern.",
  "Pendinginan stabil untuk kamar dan ruang kerja.",
  "Desain modern, cocok untuk interior rumah masa kini.",
]

const recommendedUnits = [
  {
    title: "Panasonic Standard 1 PK",
    description: "Pilihan seimbang untuk kamar dan ruang keluarga.",
    badge: "Rumah",
  },
  {
    title: "Panasonic Inverter 1 PK",
    description: "Konsumsi listrik lebih efisien untuk penggunaan rutin.",
    badge: "Inverter",
  },
  {
    title: "Panasonic Inverter 1.5 PK",
    description: "Cocok untuk ruangan lebih luas dengan kenyamanan stabil.",
    badge: "Kamar Besar",
  },
]

const useCases = [
  {
    title: "Kamar Tidur",
    description: "Nyaman untuk istirahat malam dengan suhu stabil dan penggunaan harian.",
  },
  {
    title: "Rumah & Kantor Kecil",
    description: "Ideal untuk ruang kerja rumahan dan area aktivitas keluarga.",
  },
]

const faqItems = [
  {
    question: "AC Panasonic cocok untuk rumah atau kantor?",
    answer: "Keduanya cocok, terutama untuk rumah, kamar, dan kantor kecil yang butuh AC nyaman harian.",
  },
  {
    question: "Apakah ada pilihan Panasonic inverter hemat listrik?",
    answer: "Ya, tersedia beberapa opsi inverter Panasonic sesuai kebutuhan luas ruangan dan budget.",
  },
  {
    question: "Bisa tanya dulu sebelum memutuskan beli?",
    answer: "Bisa. Tim RADJA AC siap membantu rekomendasi unit dan pilihan yang sesuai sebelum Anda chat order.",
  },
]

export default function PanasonicPurwokerto() {
  const faqSchema = createFAQSchema(faqItems)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoHead
        title="Dealer AC Panasonic Purwokerto | Jual AC Panasonic Banyumas - RADJA AC"
        description="RADJA AC menyediakan AC Panasonic di Purwokerto & Banyumas untuk rumah dan kamar, lengkap dengan opsi inverter hemat listrik serta konsultasi WhatsApp."
        canonicalPath="/brand/panasonic"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-5">
              Dealer AC Panasonic Purwokerto & Banyumas
            </span>

            <div className="mb-6 text-sm text-slate-400">
              <Link to="/" className="hover:text-cyan-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Panasonic Purwokerto</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
              AC Panasonic Hemat Listrik untuk Hunian Modern
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              RADJA AC bantu pembelian AC Panasonic untuk kamar tidur, rumah keluarga, ruang kerja, dan kebutuhan harian di Purwokerto, Sokaraja, Banyumas, dan sekitarnya.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-4 gap-4">
              <Link to="/kontak" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">
                Tanya Harga Panasonic
              </Link>
              <Link to="#rekomendasi" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10">
                Lihat Rekomendasi
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Keunggulan Panasonic</SectionHeading>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {panasonicBenefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <p className="text-slate-200 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="rekomendasi" className="px-6 pb-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Rekomendasi Unit Panasonic</SectionHeading>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {recommendedUnits.map((unit) => (
              <article key={unit.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-white">{unit.title}</h3>
                  <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">{unit.badge}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{unit.description}</p>
                <Link to="/kontak" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Cek Stok & Harga
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Use Case Rumah & Kantor</SectionHeading>
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
            <SectionHeading className="text-4xl sm:text-5xl">FAQ Panasonic Purwokerto</SectionHeading>
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
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Siap Upgrade ke AC Panasonic?</h2>
            <p className="text-slate-200 mb-6">Kirim ukuran ruangan, daya listrik, lokasi area Purwokerto/Banyumas, dan kebutuhan penggunaan. Tim RADJA AC akan bantu rekomendasi unit Panasonic yang sesuai.</p>
            <Link to="/kontak" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">
              Konsultasi kebutuhan AC
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}