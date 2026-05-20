import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, Fan, Home, ShieldCheck, Snowflake, Sparkles, Wind, Zap } from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const HERO_IMAGE = "/assets/brands/hisense/showcase-hisense.webp"
const CERTIFICATE_IMAGE = "/assets/brands/hisense/sertifikat-hisense.webp"
const HISENSE_WA_MESSAGE =
  "Halo RADJA AC, saya mau cek stok AC Hisense. Mohon bantu info tipe yang ready, harga terbaru, rekomendasi PK, dan kebutuhan pemasangan di area saya."

const benefits = [
  {
    title: "Modern dengan budget terukur",
    description: "Hisense cocok untuk pembeli yang ingin AC modern dan nyaman tanpa membuat budget pembelian terasa terlalu berat.",
    icon: BadgeCheck,
  },
  {
    title: "Fitur praktis untuk harian",
    description: "Beberapa lini Hisense membawa fitur seperti Self-Cleaning, Anti Mildew, mode pintar, dan filter untuk membantu kenyamanan pemakaian.",
    icon: Fan,
  },
  {
    title: "Cocok rumah sampai toko kecil",
    description: "Bisa dipertimbangkan untuk kamar, ruang keluarga kecil, kos, kontrakan, toko kecil, atau usaha yang butuh pendinginan harian.",
    icon: Snowflake,
  },
]

const products = [
  {
    title: "Hisense Standard",
    badge: "Harian",
    image: "/assets/brands/hisense/ac-hisense-standar.webp",
    fit: "Kamar tidur, kos, ruang santai, dan toko kecil",
    priority: "Pendinginan harian yang praktis dan ekonomis",
    description: "Pilihan praktis untuk pembeli yang mencari AC split original dengan fitur pendinginan harian dan budget tetap terukur.",
    highlights: ["Standard", "Harian", "Value"],
    cta: "Cek Stok Hisense Standard",
    message: "Halo RADJA AC, saya mau cek stok dan harga Hisense Standard. Mohon bantu rekomendasi PK, estimasi pemasangan, dan tipe yang cocok untuk ruangan saya.",
  },
  {
    title: "Hisense Inverter",
    badge: "Rutin",
    image: HERO_IMAGE,
    fit: "Kamar utama, ruang keluarga, kantor kecil, dan pemakaian rutin",
    priority: "Suhu lebih stabil untuk penggunaan lebih lama",
    description: "Opsi Hisense untuk pelanggan yang ingin AC modern dengan suhu lebih stabil dan pemakaian harian yang lebih nyaman.",
    highlights: ["Inverter", "Stabil", "Modern"],
    cta: "Cek Stok Hisense Inverter",
    message: "Halo RADJA AC, saya mau cek stok dan harga Hisense Inverter. Mohon bantu rekomendasi PK, estimasi pemasangan, dan tipe yang cocok untuk pemakaian rutin.",
  },
  {
    title: "Hisense untuk Usaha Kecil",
    badge: "Usaha",
    image: "/assets/brands/hisense/ac-hisense-standar.webp",
    fit: "Toko kecil, ruang kerja, usaha rumahan, dan kantor kecil",
    priority: "Pilihan value untuk ruangan usaha yang dipakai harian",
    description: "Cocok untuk kebutuhan pendinginan di ruangan usaha kecil yang butuh AC nyaman, stok bisa dicek, dan budget tetap rasional.",
    highlights: ["Toko", "Kantor", "Usaha"],
    cta: "Cek Hisense untuk Usaha",
    message: "Halo RADJA AC, saya mau cek stok dan harga Hisense untuk toko/kantor kecil. Mohon bantu rekomendasi PK, estimasi pemasangan, dan pilihan yang cocok untuk ruangan usaha saya.",
  },
]

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil atau ruang kerja pribadi"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang dan ruang santai"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
  ["2 PK", "± 30–40 m²", "Ruangan besar dan kebutuhan komersial"],
]

const internalLinks = [
  {
    title: "Toko AC Terdekat Purwokerto",
    description: "Sebelum OTW, cek stok, harga, brand yang ready, dan kebutuhan pemasangan di RADJA AC.",
    href: "/toko-ac-terdekat-purwokerto",
  },
  {
    title: "AC Split Rumah",
    description: "Lihat panduan pilihan AC untuk kamar, kos, ruang santai, dan rumah tinggal.",
    href: "/katalog/ac-split-rumah",
  },
  {
    title: "AC Inverter Purwokerto",
    description: "Bandingkan pilihan AC inverter untuk pemakaian rutin dan suhu lebih stabil.",
    href: "/katalog/ac-inverter",
  },
  {
    title: "Jual AC Purwokerto",
    description: "Mulai dari halaman pusat pembelian AC untuk cek brand, stok, harga, dan rekomendasi PK.",
    href: "/jual-ac-purwokerto",
  },
]

const faqItems = [
  {
    question: "Apakah RADJA AC menjual AC Hisense original?",
    answer: "Ya. RADJA AC menyediakan pilihan AC Hisense original untuk kebutuhan rumah, kos, kantor, toko, dan bisnis area Purwokerto, Banyumas, dan sekitarnya.",
  },
  {
    question: "Apakah Hisense tersedia tipe standard dan inverter?",
    answer: "Hisense memiliki pilihan AC standard dan inverter. Untuk stok unit yang tersedia di RADJA AC, pelanggan bisa cek langsung melalui WhatsApp.",
  },
  {
    question: "Apakah Hisense cocok untuk toko kecil atau usaha?",
    answer: "Cocok. Hisense bisa dipertimbangkan untuk kamar, kos, ruang santai, toko kecil, kantor kecil, dan usaha rumahan dengan kapasitas yang disesuaikan luas ruangan.",
  },
  {
    question: "Bagaimana cara cek stok dan harga Hisense terbaru?",
    answer: "Klik tombol WhatsApp di halaman ini untuk mendapatkan informasi stok, harga terbaru, rekomendasi unit, dan estimasi pemasangan.",
  },
]

function WhatsAppButton({ children = "Cek Stok AC Hisense", className = "", message = HISENSE_WA_MESSAGE }) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

export default function HisensePurwokerto() {
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
        title="AC Hisense Purwokerto | Modern, Value & Budget Terukur"
        description="Cari AC Hisense Purwokerto? RADJA AC bantu cek stok Hisense standard, inverter, harga terbaru, rekomendasi PK, dan pemasangan area Purwokerto-Banyumas."
        canonicalPath="/brand/hisense"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-teal-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-cyan-400/16 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-6 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm text-teal-200">
                <span className="h-2 w-2 rounded-full bg-teal-300" />
                AC HISENSE PURWOKERTO
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-teal-300">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Hisense</span>
              </div>

              <h1 className="mx-auto mb-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl lg:mx-0">
                Butuh AC modern dengan budget tetap terukur?
                <span className="block text-teal-300">Cek Hisense di RADJA AC</span>
              </h1>

              <p className="mx-auto mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                Hisense bisa jadi pilihan untuk kamar, ruang keluarga, toko kecil, atau usaha yang butuh AC nyaman dengan harga kompetitif. Chat RADJA AC untuk cek stok, tipe standard atau inverter, harga terbaru, rekomendasi PK, dan kebutuhan pemasangan.
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                <WhatsAppButton />
                <a
                  href="#produk-hisense"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Pilihan Hisense
                </a>
              </div>

              <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-center text-sm text-white/65 lg:mx-0 lg:justify-start">
                {["Modern & value", "Cocok rumah/usaha", "Cek stok & harga", "Standard • Inverter • Hemat Daya"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-2 lg:mt-0">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />
              <div className="absolute bottom-4 left-[-24px] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="relative mx-auto w-[88%] max-w-[360px] overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-2 shadow-2xl sm:max-w-[430px] lg:max-w-[480px]">
                <img
                  src={HERO_IMAGE}
                  alt="Showcase AC Hisense di RADJA AC Purwokerto"
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-200">
                <ShieldCheck className="h-4 w-4" />
                Dealer Certificate Hisense
              </div>

              <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:mx-0 lg:text-5xl">
                Hisense kuat di value, fitur, dan kebutuhan harian
              </h2>

              <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                Hisense cocok dicek kalau Anda ingin AC modern dengan budget tetap terukur. Mulai dari kebutuhan ruangan dulu, lalu cocokkan kapasitas PK, tipe unit, dan estimasi pemasangan.
              </p>

              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center text-sm text-white/80 sm:text-base">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-teal-300" />
                  <span>Dealer Certificate</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-teal-300/20 bg-slate-950/70 p-3 shadow-[0_0_55px_rgba(45,212,191,0.12),0_30px_90px_rgba(8,20,47,0.45)]">
              <img
                src={CERTIFICATE_IMAGE}
                alt="Sertifikat resmi Hisense untuk RADJA AC"
                loading="lazy"
                decoding="async"
                className="w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Keunggulan Hisense</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Kenapa Hisense layak dicek sebelum beli AC?</h2>
            <p className="leading-7 text-white/65">Hisense cocok untuk pelanggan yang mencari AC original dengan fitur modern, budget terukur, dan pilihan kapasitas untuk kebutuhan harian.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="produk-hisense" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Pilihan Tipe</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilih Hisense sesuai pola pemakaian</h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">Hisense standard untuk kebutuhan harian, inverter untuk pemakaian rutin, dan opsi usaha kecil untuk toko atau kantor kecil. Untuk stok dan harga terbaru, tim RADJA AC bisa bantu cek pilihan yang sesuai.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.06]">
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-teal-400/14 via-slate-900 to-cyan-950/70 p-3">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal-300/20 blur-3xl" />
                  <img
                    src={product.image}
                    alt={`${product.title} di RADJA AC`}
                    loading="lazy"
                    decoding="async"
                    className="h-[155px] w-full rounded-[22px] object-cover object-center"
                  />
                  <span className="absolute left-6 top-6 inline-flex rounded-full border border-teal-300/20 bg-slate-950/70 px-3 py-1 text-xs font-bold text-teal-100 backdrop-blur">
                    {product.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-center text-2xl font-black tracking-[-0.02em] text-white">{product.title}</h3>
                  <p className="mb-4 text-sm leading-7 text-white/60">{product.description}</p>

                  <div className="mb-5 space-y-3 rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-teal-200/70">Cocok untuk</p>
                      <p className="mt-1 text-sm font-medium text-white/85">{product.fit}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-teal-200/70">Fokus utama</p>
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

                  <WhatsAppButton className="w-full py-3 text-sm" message={product.message}>{product.cta}</WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-6 max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Panduan PK</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilih kapasitas AC Hisense sesuai ruangan</h2>
            <p className="leading-7 text-white/65">Panduan cepat untuk memperkirakan kapasitas AC sebelum konsultasi. Ukuran final tetap menyesuaikan kondisi ruangan, panas matahari, dan jumlah pengguna.</p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
            <div className="hidden grid-cols-[0.8fr_1fr_1.4fr] border-b border-white/10 bg-teal-400/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200/80 sm:grid">
              <span>Kapasitas</span>
              <span>Estimasi Ruangan</span>
              <span>Cocok Untuk</span>
            </div>

            <div className="divide-y divide-white/10">
              {pkGuide.map(([pk, area, note]) => (
                <div key={pk} className="px-5 py-4 sm:grid sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-center sm:gap-4">
                  <div className="grid grid-cols-[64px_1fr] items-baseline gap-4 sm:contents">
                    <div className="text-xl font-black text-teal-300 sm:text-xl">{pk}</div>
                    <div className="text-sm font-semibold text-white sm:text-base">{area}</div>
                    <div className="col-start-2 text-sm leading-6 text-white/55 sm:col-auto">{note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Baca Juga</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Panduan sebelum beli AC Hisense</h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">Link berikut membantu Anda membandingkan kebutuhan AC Hisense dengan kategori dan panduan pembelian yang relevan.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {internalLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.06]"
              >
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="mb-4 text-sm leading-6 text-white/55">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 group-hover:text-teal-200">
                  Buka halaman
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="rounded-[34px] border border-teal-400/20 bg-teal-400/5 p-6 text-center shadow-[0_35px_90px_rgba(13,148,136,0.16)] sm:p-10 lg:p-14">
            <div className="mb-4 flex justify-center text-teal-300"><Wind className="h-10 w-10" /></div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Jangan cuma bandingkan harga Hisense</h2>
            <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">Cek dulu ukuran ruangan, daya listrik, tipe unit, dan kebutuhan pemasangan. RADJA AC bantu arahkan pilihan Hisense yang paling masuk akal untuk rumah atau usaha Anda.</p>
            <WhatsAppButton>Chat Cek Hisense Sekarang</WhatsAppButton>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">FAQ</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC Hisense</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-teal-300" />
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
