import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import SectionHeading from "../components/ui/SectionHeading"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { createFAQSchema } from "../utils/schemaUtils"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const PANASONIC_WA_MESSAGE =
  "Halo RADJA AC, saya mau cek stok AC Panasonic. Mohon bantu info tipe yang ready, harga terbaru, rekomendasi PK, dan estimasi pemasangan untuk ruangan saya."

const panasonicBenefits = [
  "Brand familiar untuk pembeli yang mencari AC rumah dengan kesan rapi dan modern.",
  "Cocok dicek untuk kamar, rumah harian, ruang kerja, dan kebutuhan keluarga.",
  "Tipe dan ketersediaan stok perlu dicek dulu karena bisa mengikuti update supplier.",
  "RADJA AC bantu arahkan PK, daya listrik, dan kebutuhan pemasangan sebelum beli.",
]

const recommendationCards = [
  {
    title: "Panasonic untuk Kamar",
    description: "Cocok dicek untuk kamar tidur, kamar anak, kos, atau ruangan kecil yang butuh AC nyaman harian.",
    badge: "Kamar",
  },
  {
    title: "Panasonic untuk Rumah Harian",
    description: "Pilihan untuk ruang santai, rumah keluarga, dan penggunaan harian yang butuh brand familiar.",
    badge: "Rumah",
  },
  {
    title: "Panasonic Sesuai Stok Terbaru",
    description: "Tipe final mengikuti stok terbaru. Chat dulu untuk cek unit ready, harga, dan rekomendasi PK.",
    badge: "Cek stok",
  },
]

const useCases = [
  {
    title: "Kamar Tidur",
    description: "Cek kapasitas PK yang tepat supaya ruangan nyaman tanpa asal pilih unit.",
  },
  {
    title: "Rumah & Kantor Kecil",
    description: "Cocok untuk kebutuhan harian yang mengutamakan brand familiar dan pemasangan yang dihitung dari kondisi real.",
  },
]

const faqItems = [
  {
    question: "Apakah RADJA AC menjual AC Panasonic?",
    answer: "Ya, RADJA AC bisa bantu cek ketersediaan AC Panasonic sesuai stok terbaru untuk area Purwokerto, Banyumas, dan sekitarnya.",
  },
  {
    question: "Apakah tipe Panasonic selalu ready?",
    answer: "Stok dan tipe bisa berubah mengikuti supplier. Sebaiknya chat WhatsApp dulu untuk cek unit yang sedang ready dan harga terbarunya.",
  },
  {
    question: "Bisa konsultasi PK sebelum beli Panasonic?",
    answer: "Bisa. Kirim ukuran ruangan, daya listrik, lokasi pemasangan, dan budget agar tim RADJA AC bisa bantu arahkan pilihan yang lebih tepat.",
  },
  {
    question: "Apakah bisa tanya estimasi pemasangan?",
    answer: "Bisa. Estimasi pemasangan perlu melihat kondisi titik indoor, outdoor, panjang pipa, dan area pemasangan.",
  },
]

function WhatsAppButton({ children = "Cek Stok Panasonic via WhatsApp", className = "", message = PANASONIC_WA_MESSAGE }) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

export default function PanasonicPurwokerto() {
  const faqSchema = createFAQSchema(faqItems)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoHead
        title="AC Panasonic Purwokerto | Cek Stok di RADJA AC"
        description="Cari AC Panasonic Purwokerto? RADJA AC bantu cek stok Panasonic terbaru, harga, rekomendasi PK, dan estimasi pemasangan area Purwokerto-Banyumas."
        canonicalPath="/brand/panasonic"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <section className="px-6 pb-14 pt-24 lg:px-8 lg:pb-16 lg:pt-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-5">
              CEK AC PANASONIC PURWOKERTO
            </span>

            <div className="mb-6 text-sm text-slate-400">
              <Link to="/" className="hover:text-cyan-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Panasonic Purwokerto</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
              Cari AC Panasonic?
              <span className="block text-cyan-300">Cek stok terbarunya dulu.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Panasonic bisa jadi pilihan untuk kamar, rumah, dan pemakaian harian. Karena stok dan tipe bisa berubah, chat RADJA AC dulu untuk cek unit yang tersedia, harga terbaru, rekomendasi PK, dan estimasi pemasangan.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-4 gap-4">
              <WhatsAppButton />
              <a href="#rekomendasi" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10">
                Lihat Kebutuhan Panasonic
              </a>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm text-white/60">
              {["Cek stok terbaru", "Rekomendasi PK", "Area Purwokerto-Banyumas", "Bisa paket pasang"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Kenapa Panasonic Layak Dicek?</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Jangan langsung tanya harga unit saja. Pastikan dulu stok, kapasitas PK, daya listrik, dan kebutuhan pasangnya cocok dengan kondisi ruangan.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {panasonicBenefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <p className="text-slate-200 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="rekomendasi" className="px-6 pb-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Kebutuhan Panasonic yang Bisa Dicek</SectionHeading>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Tanpa gambar produk dulu. Fokusnya memastikan Panasonic yang tersedia cocok untuk ruangan, budget, dan kondisi pemasangan Anda.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {recommendationCards.map((unit) => (
              <article key={unit.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-white">{unit.title}</h3>
                  <span className="rounded-full border border-white/10 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">{unit.badge}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{unit.description}</p>
                <WhatsAppButton className="px-4 py-3 text-sm">Cek Stok & Harga</WhatsAppButton>
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
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Mau Panasonic tapi belum tahu tipe yang ready?</h2>
            <p className="text-slate-200 mb-6">Kirim ukuran ruangan, daya listrik, lokasi area Purwokerto/Banyumas, dan kebutuhan penggunaan. Tim RADJA AC bantu cek stok Panasonic dan pilihan yang paling masuk akal.</p>
            <WhatsAppButton>Cek Panasonic via WhatsApp</WhatsAppButton>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
