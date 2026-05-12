import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { BadgeCheck, Leaf, ShieldCheck, Snowflake, Sparkles, Wind, Zap } from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl
const HERO_IMAGE = "/assets/brands/midea/midea-showcase.webp"
const CERTIFICATE_IMAGE = "/assets/brands/midea/sertificate-midea.webp"

const benefits = [
  {
    title: "Pilihan praktis untuk rumah modern",
    description: "Midea cocok untuk kamar tidur, ruang keluarga kecil, kos, toko kecil, dan kebutuhan pendinginan harian.",
    icon: Snowflake,
  },
  {
    title: "Fokus hemat daya",
    description: "Pilihan low watt dan inverter membantu pelanggan menyesuaikan AC dengan daya listrik dan kebiasaan pemakaian.",
    icon: Zap,
  },
  {
    title: "Original dengan dukungan dealer",
    description: "RADJA AC membantu pembelian AC Midea original, konsultasi kapasitas, instalasi rapi, dan after-sales.",
    icon: ShieldCheck,
  },
]

const products = [
  {
    title: "Midea Standard",
    badge: "Praktis",
    image: "/assets/brands/midea/ac-midea-standar.webp",
    fit: "Kamar tidur, kos, ruang santai, dan toko kecil",
    priority: "Pendinginan harian dengan pilihan yang lebih ekonomis",
    description: "Pilihan AC Midea original untuk pelanggan yang butuh pendinginan nyaman dan praktis untuk penggunaan harian.",
    highlights: ["Harian", "Ekonomis", "Praktis"],
  },
  {
    title: "Midea Low Watt",
    badge: "Daya ringan",
    image: "/assets/brands/midea/ac-midea-low-wat.webp",
    fit: "Rumah dengan daya listrik terbatas",
    priority: "Nyaman digunakan dengan beban listrik lebih ringan",
    description: "Solusi untuk rumah yang ingin tetap memakai AC nyaman tanpa membuat beban listrik terasa terlalu berat.",
    highlights: ["Low watt", "Rumah", "Efisien"],
  },
  {
    title: "Midea Inverter",
    badge: "Segera dilengkapi",
    image: HERO_IMAGE,
    fit: "Kamar utama, ruang keluarga, dan penggunaan rutin",
    priority: "Suhu lebih stabil dan efisiensi untuk pemakaian harian",
    description: "Placeholder rekomendasi inverter Midea. Foto produk akan diganti setelah asset inverter tersedia.",
    highlights: ["Inverter", "Stabil", "Hemat energi"],
  },
]

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil atau ruang kerja pribadi"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang dan ruang santai"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
  ["2 PK", "± 30–40 m²", "Ruangan besar dan kebutuhan komersial"],
]

const faqItems = [
  {
    question: "Apakah RADJA AC menjual AC Midea original?",
    answer: "Ya. RADJA AC menyediakan pilihan AC Midea original untuk kebutuhan rumah, kos, kantor, toko, dan bisnis area Purwokerto, Banyumas, dan sekitarnya.",
  },
  {
    question: "Apakah Midea cocok untuk rumah dengan daya listrik terbatas?",
    answer: "Bisa. Pilihan Midea low watt dapat menjadi opsi untuk rumah yang membutuhkan AC nyaman dengan beban daya lebih ringan.",
  },
  {
    question: "Apakah bisa konsultasi ukuran PK sebelum membeli?",
    answer: "Bisa. Kirim ukuran ruangan, daya listrik, dan kebutuhan penggunaan melalui WhatsApp agar tim RADJA AC bisa bantu rekomendasi kapasitas yang tepat.",
  },
  {
    question: "Bagaimana cara cek stok dan harga Midea terbaru?",
    answer: "Klik tombol WhatsApp di halaman ini untuk mendapatkan informasi stok, harga terbaru, rekomendasi unit, dan estimasi pemasangan.",
  },
]

function WhatsAppButton({ children = "Tanya Harga Midea", className = "" }) {
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

export default function MideaPurwokerto() {
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
        title="Dealer AC Midea Purwokerto & Banyumas | RADJA AC"
        description="RADJA AC melayani penjualan AC Midea Purwokerto dan Banyumas lengkap dengan konsultasi ukuran PK, pilihan standard dan low watt, instalasi rapi, serta layanan after-sales."
        canonicalPath="/brand/midea"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-sky-500/20 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-400/18 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-6 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                BRAND PILIHAN RADJA AC
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-sky-300">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Midea</span>
              </div>

              <h1 className="mx-auto mb-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl lg:mx-0">
                AC Midea Purwokerto & Banyumas
                <span className="block text-sky-300">Modern, hemat, dan praktis</span>
              </h1>

              <p className="mx-auto mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                RADJA AC menyediakan AC Midea original untuk rumah, kos, kantor kecil, toko, dan kebutuhan harian. Konsultasikan ukuran ruangan, daya listrik, dan kebutuhan penggunaan agar pilihan unit lebih tepat.
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                <WhatsAppButton />
                <a
                  href="#produk-midea"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Rekomendasi
                </a>
              </div>

              <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-center text-sm text-white/65 lg:mx-0 lg:justify-start">
                {["Midea Original", "Standard & Low Watt", "Purwokerto & Banyumas"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-2 lg:mt-0">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
              <div className="absolute bottom-4 left-[-24px] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="relative mx-auto w-[88%] max-w-[360px] overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-2 shadow-2xl sm:max-w-[430px] lg:max-w-[480px]">
                <img
                  src={HERO_IMAGE}
                  alt="Showcase AC Midea di RADJA AC Purwokerto"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[390px] w-full rounded-[26px] object-cover object-center sm:h-[520px] lg:h-[600px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-200">
                <BadgeCheck className="h-4 w-4" />
                Sertifikat Resmi Midea
              </div>

              <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:mx-0 lg:text-5xl">
                Bukti kepercayaan untuk pelanggan Midea RADJA AC
              </h2>

              <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                Sertifikat ini memperkuat kepercayaan pelanggan bahwa RADJA AC menyediakan pilihan AC Midea original dengan dukungan konsultasi, pengadaan unit, instalasi rapi, dan after-sales.
              </p>

              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center text-sm text-white/80 sm:text-base">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-sky-300" />
                  <span>Authorized Dealer Certificate</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-sky-300/20 bg-slate-950/70 p-3 shadow-[0_0_55px_rgba(56,189,248,0.12),0_30px_90px_rgba(8,20,47,0.45)]">
              <img
                src={CERTIFICATE_IMAGE}
                alt="Sertifikat resmi Midea untuk RADJA AC"
                loading="lazy"
                decoding="async"
                className="w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Keunggulan Midea</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Kenapa banyak pelanggan memilih AC Midea?</h2>
            <p className="leading-7 text-white/65">Midea cocok untuk pelanggan yang ingin AC original, praktis, dan mudah disesuaikan dengan kebutuhan rumah modern.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="produk-midea" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Rekomendasi Produk</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilihan AC Midea di RADJA AC</h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">Harga dan stok Midea dapat berubah. CTA diarahkan ke WhatsApp agar pelanggan mendapat info terbaru dan rekomendasi yang sesuai.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.06]">
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-sky-400/14 via-slate-900 to-cyan-950/70 p-3">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-300/20 blur-3xl" />
                  <img
                    src={product.image}
                    alt={`${product.title} di RADJA AC`}
                    loading="lazy"
                    decoding="async"
                    className="h-[155px] w-full rounded-[22px] object-cover object-center"
                  />
                  <span className="absolute left-6 top-6 inline-flex rounded-full border border-sky-300/20 bg-slate-950/70 px-3 py-1 text-xs font-bold text-sky-100 backdrop-blur">
                    {product.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-center text-2xl font-black tracking-[-0.02em] text-white">{product.title}</h3>
                  <p className="mb-4 text-sm leading-7 text-white/60">{product.description}</p>

                  <div className="mb-5 space-y-3 rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-sky-200/70">Cocok untuk</p>
                      <p className="mt-1 text-sm font-medium text-white/85">{product.fit}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-sky-200/70">Fokus utama</p>
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

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Panduan PK</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilih kapasitas AC Midea sesuai ruangan</h2>
            <p className="leading-7 text-white/65">Section edukasi ini membantu pelanggan memahami kebutuhan dasar sebelum konsultasi, sekaligus memperkuat SEO untuk pencarian AC rumah dan kantor.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pkGuide.map(([pk, area, note]) => (
              <div key={pk} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-2 text-2xl font-black text-sky-300">{pk}</div>
                <h3 className="mb-2 font-bold text-white">{area}</h3>
                <p className="text-sm leading-6 text-white/55">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="rounded-[34px] border border-sky-400/20 bg-sky-400/5 p-6 text-center shadow-[0_35px_90px_rgba(14,116,144,0.16)] sm:p-10 lg:p-14">
            <div className="mb-4 flex justify-center text-sky-300"><Wind className="h-10 w-10" /></div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Butuh rekomendasi AC Midea yang paling cocok?</h2>
            <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">Kirim ukuran ruangan, daya listrik, dan kebutuhan penggunaan. Tim RADJA AC akan bantu rekomendasi unit Midea yang sesuai.</p>
            <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">FAQ</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC Midea</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-sky-300" />
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
