import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Award, BadgeCheck, CheckCircle2, ShieldCheck, Snowflake, Sparkles, Wind, Zap } from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const certificateImage = "/assets/brand/daikin/IMG_20260511_131440.jpg"
const heroImage = "/asset/display-ac-wall-mounted.webp"

const benefits = [
  {
    title: "Hemat listrik untuk pemakaian harian",
    description: "Pilihan AC Daikin inverter dan low watt cocok untuk rumah, kamar tidur, ruang keluarga, kantor, toko, hingga cafe.",
    icon: Zap,
  },
  {
    title: "Pendinginan nyaman dan stabil",
    description: "Daikin dikenal dengan performa pendinginan yang merata, stabil, dan nyaman untuk penggunaan jangka panjang.",
    icon: Snowflake,
  },
  {
    title: "Brand premium dengan garansi resmi",
    description: "RADJA AC membantu pembelian unit Daikin original lengkap dengan konsultasi, instalasi, dan dukungan after-sales.",
    icon: ShieldCheck,
  },
]

const productGroups = [
  {
    title: "Daikin Inverter",
    badge: "Paling dicari",
    description: "Untuk pelanggan yang ingin AC lebih hemat energi, suhu lebih stabil, dan kenyamanan premium.",
  },
  {
    title: "Daikin Low Watt",
    badge: "Rumah",
    description: "Solusi untuk rumah dengan daya listrik terbatas tanpa mengorbankan kenyamanan pendinginan.",
  },
  {
    title: "Daikin Standard",
    badge: "Ekonomis",
    description: "Pilihan praktis untuk kamar, ruang keluarga, toko, dan kebutuhan pendinginan harian.",
  },
]

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar tidur kecil atau ruang kerja kecil"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang dan ruang santai"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
  ["2 PK", "± 30–40 m²", "Ruangan besar dan kebutuhan komersial"],
]

const faqItems = [
  {
    question: "Apakah RADJA AC menjual AC Daikin original?",
    answer: "Ya. RADJA AC menyediakan pilihan AC Daikin untuk kebutuhan rumah, kantor, toko, dan proyek area Purwokerto, Banyumas, dan sekitarnya.",
  },
  {
    question: "Apakah bisa konsultasi ukuran PK sebelum membeli?",
    answer: "Bisa. Tim RADJA AC dapat membantu rekomendasi kapasitas AC berdasarkan luas ruangan, fungsi ruangan, dan daya listrik yang tersedia.",
  },
  {
    question: "Apakah tersedia jasa instalasi AC Daikin?",
    answer: "Ya. Pembelian AC Daikin dapat dilengkapi layanan instalasi profesional agar pemasangan rapi, aman, dan nyaman digunakan.",
  },
  {
    question: "Bagaimana cara cek harga dan stok Daikin terbaru?",
    answer: "Klik tombol WhatsApp di halaman ini untuk mendapatkan informasi stok, harga terbaru, rekomendasi unit, dan estimasi pemasangan.",
  },
]

function WhatsAppButton({ children = "Tanya Harga Daikin", className = "" }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.22)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

export default function BrandDaikin() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Dealer AC Daikin Purwokerto & Banyumas | RADJA AC"
        description="RADJA AC melayani penjualan AC Daikin Purwokerto dan Banyumas lengkap dengan konsultasi ukuran PK, instalasi profesional, garansi resmi, dan layanan after-sales."
        canonicalPath="/brand/daikin"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="relative">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-100px] top-[-200px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-400/20 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                BRAND UNGGULAN RADJA AC
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Daikin</span>
              </div>

              <h1 className="mb-5 max-w-xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                AC Daikin Purwokerto & Banyumas
                <span className="block text-cyan-300">Original, nyaman, dan bergaransi</span>
              </h1>

              <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                RADJA AC menyediakan AC Daikin untuk rumah, kantor, toko, cafe, dan kebutuhan proyek. Konsultasikan kebutuhan ruangan Anda untuk mendapatkan rekomendasi tipe dan PK yang paling tepat.
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <WhatsAppButton />
                <a
                  href="#produk-daikin"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Rekomendasi
                </a>
              </div>

              <p className="mb-6 max-w-xl text-sm text-white/60">
                Authorized dealer • Instalasi rapi • Konsultasi gratis • Area Purwokerto & Banyumas
              </p>

              <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {["Daikin Original", "Garansi Resmi", "Teknisi Profesional"].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    <CheckCircle2 className="mb-2 h-4 w-4 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              className="relative mt-4 lg:mt-0"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute bottom-4 left-[-24px] h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
              <img
                src={heroImage}
                alt="Showroom dealer AC premium RADJA AC di Purwokerto"
                fetchPriority="high"
                decoding="async"
                className="relative w-full rounded-[34px] border border-white/10 object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
                <Award className="h-4 w-4" />
                Sertifikat Resmi Daikin
              </div>

              <h2 className="mb-5 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Bukti kepercayaan untuk pelanggan Daikin RADJA AC
              </h2>

              <p className="mb-6 text-sm leading-7 text-white/70 sm:text-base">
                Sertifikat Authorized Dealer Daikin membantu calon pelanggan merasa lebih yakin sebelum konsultasi dan membeli. Section ini akan menjadi trust signal utama untuk halaman brand Daikin.
              </p>

              <div className="space-y-3">
                {["Authorized Dealer", "Sales, installation & warranty service", "Nama RADJA AC tercantum pada sertifikat"].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-white/80">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.45)]">
              <img
                src={certificateImage}
                alt="Sertifikat resmi Daikin Authorized Dealer untuk RADJA AC"
                loading="lazy"
                decoding="async"
                className="w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Keunggulan Daikin</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Kenapa banyak pelanggan memilih AC Daikin?</h2>
            <p className="text-white/65 leading-7">Konten ini memperkuat brand core bisnis RADJA AC: penjualan AC Daikin original, konsultasi kebutuhan PK, instalasi profesional, dan layanan after-sales.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="produk-daikin" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Rekomendasi Produk</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilihan AC Daikin di RADJA AC</h2>
            <p className="mx-auto max-w-2xl text-white/65 leading-7">Harga dan stok Daikin dapat berubah. CTA diarahkan ke WhatsApp agar pelanggan mendapat info terbaru dan rekomendasi yang sesuai.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {productGroups.map((product) => (
              <article key={product.title} className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-200">{product.badge}</span>
                <h3 className="mb-3 text-2xl font-bold text-white">{product.title}</h3>
                <p className="mb-6 text-sm leading-7 text-white/60">{product.description}</p>
                <WhatsAppButton className="w-full py-3 text-sm">Cek Stok & Harga</WhatsAppButton>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Panduan PK</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilih kapasitas AC Daikin sesuai ruangan</h2>
            <p className="text-white/65 leading-7">Section edukasi ini membantu pelanggan memahami kebutuhan dasar sebelum konsultasi, sekaligus memperkuat SEO untuk pencarian AC rumah dan kantor.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pkGuide.map(([pk, area, note]) => (
              <div key={pk} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-2 text-2xl font-black text-cyan-300">{pk}</div>
                <h3 className="mb-2 font-bold text-white">{area}</h3>
                <p className="text-sm leading-6 text-white/55">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="rounded-[34px] border border-cyan-400/20 bg-cyan-400/5 p-6 text-center shadow-[0_35px_90px_rgba(6,78,122,0.16)] sm:p-10 lg:p-14">
            <div className="mb-4 flex justify-center text-cyan-300">
              <Wind className="h-10 w-10" />
            </div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Butuh rekomendasi AC Daikin yang paling cocok?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/70 leading-7">Kirim ukuran ruangan, daya listrik, dan kebutuhan penggunaan. Tim RADJA AC akan bantu rekomendasi unit Daikin yang sesuai.</p>
            <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">FAQ</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC Daikin</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-cyan-300" />
                  <h3 className="font-bold text-white">{item.question}</h3>
                </div>
                <p className="text-sm leading-7 text-white/60">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
