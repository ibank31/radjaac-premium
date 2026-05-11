import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { Award, BadgeCheck, ShieldCheck, Snowflake, Sparkles, Wind, Zap } from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl
const HERO_IMAGE = "/assets/brands/daikin/daikin-showcase.webp"
const CERTIFICATE_IMAGE = "/assets/brands/daikin/sertificate-daikin.webp"

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

const products = [
  {
    title: "Daikin Inverter",
    badge: "Paling dicari",
    fit: "Kamar utama, ruang keluarga, dan kantor kecil",
    priority: "Hemat energi + suhu stabil",
    description: "Untuk pelanggan yang ingin AC lebih hemat energi, suhu lebih stabil, dan kenyamanan premium.",
    highlights: ["Nyaman harian", "Efisiensi listrik", "Premium"],
  },
  {
    title: "Daikin Low Watt",
    badge: "Rumah",
    fit: "Rumah dengan daya listrik terbatas",
    priority: "Dingin tetap nyaman dengan beban listrik lebih ringan",
    description: "Solusi untuk rumah dengan daya listrik terbatas tanpa mengorbankan kenyamanan pendinginan.",
    highlights: ["Daya ringan", "Rumah tinggal", "Praktis"],
  },
  {
    title: "Daikin Standard",
    badge: "Ekonomis",
    fit: "Kamar tidur, toko kecil, dan ruang santai",
    priority: "Pilihan aman untuk kebutuhan pendinginan harian",
    description: "Pilihan praktis untuk kamar, ruang keluarga, toko, dan kebutuhan pendinginan harian.",
    highlights: ["Harga efisien", "Ready use", "Perawatan mudah"],
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
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

export default function DaikinPurwokerto() {
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

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-100px] top-[-200px] h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-400/20 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
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

              <div className="flex max-w-xl flex-wrap justify-center gap-2 text-center text-sm text-white/65">
                {["Daikin Resmi", "Instalasi Rapi", "Area Purwokerto & Banyumas"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute bottom-4 left-[-24px] h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
              <div className="relative mx-auto w-[88%] max-w-[360px] overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-2 shadow-2xl sm:max-w-[430px] lg:max-w-[480px]">
                <img
                  src={HERO_IMAGE}
                  alt="Display showroom AC Daikin di RADJA AC Purwokerto"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[390px] w-full rounded-[26px] object-cover object-center sm:h-[520px] lg:h-[600px]"
                />
              </div>
            </div>
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
                Sertifikat Authorized Dealer Daikin membantu calon pelanggan merasa lebih yakin sebelum konsultasi dan membeli. Section ini menjadi trust signal utama untuk halaman brand Daikin.
              </p>

              <div className="flex justify-center">
                <div className="inline-flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center text-white/80">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-cyan-300" />
                  <span>Authorized Dealer</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.45)]">
              <img
                src={CERTIFICATE_IMAGE}
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
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
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
            {products.map((product) => (
              <article key={product.title} className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="relative min-h-[96px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/14 via-slate-900 to-blue-950/70 p-4">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
                  <div className="absolute -bottom-12 left-6 h-24 w-24 rounded-full bg-blue-400/20 blur-3xl" />
                  <div className="relative flex h-full min-h-[64px] flex-col justify-between">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{product.badge}</span>
                      <Snowflake className="h-6 w-6 text-cyan-200/80" />
                    </div>
                    <h3 className="text-center text-xl font-black tracking-[-0.02em] text-white sm:text-2xl">{product.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-4 text-sm leading-7 text-white/60">{product.description}</p>

                  <div className="mb-5 space-y-3 rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/70">Cocok untuk</p>
                      <p className="mt-1 text-sm font-medium text-white/85">{product.fit}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/70">Fokus utama</p>
                      <p className="mt-1 text-sm font-medium text-white/85">{product.priority}</p>
                    </div>
                  </div>

                  <div className="mb-6 flex flex-wrap justify-center gap-2 text-center">
                    {product.highlights.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                        {item}
                      </span>
                    ))}
                  </div>

                  <WhatsAppButton className="w-full py-3 text-sm">Cek Stok & Harga</WhatsAppButton>
                </div>
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
            <div className="mb-4 flex justify-center text-cyan-300"><Wind className="h-10 w-10" /></div>
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
    </div>
  )
}
