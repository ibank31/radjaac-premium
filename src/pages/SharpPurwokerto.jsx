import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, Home, ShieldCheck, Snowflake, Sparkles, Wind, Zap } from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const HERO_IMAGE = "/assets/brands/sharp/ac-sharp-bey.webp"
const SHARP_WA_MESSAGE =
  "Halo RADJA AC, saya mau cek stok AC Sharp BEY. Mohon bantu info harga terbaru, rekomendasi PK, dan kebutuhan pemasangan di area saya."

const benefits = [
  {
    title: "Brand familiar untuk rumah",
    description: "Sharp cocok untuk pembeli yang mencari brand AC yang sudah familiar untuk kamar, rumah harian, kos, atau toko kecil.",
    icon: BadgeCheck,
  },
  {
    title: "Pilihan praktis untuk kebutuhan harian",
    description: "Sharp BEY bisa dipertimbangkan untuk pelanggan yang ingin AC split rumah dengan fungsi pendinginan harian yang jelas dan mudah dikonsultasikan.",
    icon: Snowflake,
  },
  {
    title: "Bisa cek PK sebelum beli",
    description: "RADJA AC bantu cek ukuran ruangan, daya listrik, harga terbaru, dan kebutuhan pemasangan supaya pilihan AC Sharp lebih pas.",
    icon: Zap,
  },
]

const products = [
  {
    title: "Sharp BEY 1/2 PK",
    badge: "Ready check",
    image: HERO_IMAGE,
    fit: "Kamar tidur, kos, kontrakan, ruang santai, dan toko kecil",
    priority: "AC Sharp standard untuk kebutuhan rumah harian",
    description: "Pilihan Sharp yang masuk di daftar supplier RADJA AC untuk paket 1/2 PK + pemasangan standard sesuai stok terbaru.",
    highlights: ["Sharp BEY", "1/2 PK", "Rumah harian"],
    cta: "Cek Stok Sharp BEY",
    message: "Halo RADJA AC, saya mau cek stok dan harga Sharp BEY 1/2 PK. Mohon bantu rekomendasi PK, estimasi pemasangan, dan kecocokan untuk ruangan saya.",
  },
  {
    title: "Sharp untuk Kamar",
    badge: "Kamar",
    image: HERO_IMAGE,
    fit: "Kamar tidur, kamar anak, kos, dan ruangan kecil",
    priority: "Cek ukuran ruangan sebelum memilih kapasitas",
    description: "Untuk kamar, yang paling penting adalah cek luas ruangan, panas matahari, daya listrik, dan kebutuhan pemakaian harian.",
    highlights: ["Kamar", "Kos", "Cek PK"],
    cta: "Konsultasi Sharp untuk Kamar",
    message: "Halo RADJA AC, saya mau konsultasi AC Sharp untuk kamar. Mohon bantu cek PK yang cocok, harga terbaru, dan kebutuhan pemasangan.",
  },
  {
    title: "Sharp untuk Rumah/Toko Kecil",
    badge: "Harian",
    image: HERO_IMAGE,
    fit: "Rumah harian, ruang santai, toko kecil, dan usaha rumahan",
    priority: "Pendinginan praktis untuk penggunaan harian",
    description: "Sharp bisa dipertimbangkan untuk kebutuhan harian yang mengutamakan brand familiar dan unit yang mudah dicek stoknya.",
    highlights: ["Rumah", "Toko kecil", "Praktis"],
    cta: "Cek Sharp untuk Rumah/Toko",
    message: "Halo RADJA AC, saya mau cek AC Sharp untuk rumah atau toko kecil. Mohon bantu rekomendasi PK, harga terbaru, dan estimasi pemasangan.",
  },
]

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil, kos, atau ruang kerja pribadi"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang dan ruang santai"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor, atau toko"],
]

const internalLinks = [
  {
    title: "Toko AC Terdekat Purwokerto",
    description: "Sebelum OTW, cek stok, harga, brand yang ready, dan kebutuhan pemasangan di RADJA AC.",
    href: "/toko-ac-terdekat-purwokerto",
  },
  {
    title: "AC Split Rumah",
    description: "Lihat pilihan AC untuk kamar, kos, kontrakan, dan rumah tinggal.",
    href: "/katalog/ac-split-rumah",
  },
  {
    title: "Jual AC Purwokerto",
    description: "Mulai dari halaman pusat pembelian AC untuk cek brand, stok, harga, dan rekomendasi PK.",
    href: "/jual-ac-purwokerto",
  },
  {
    title: "Katalog AC RADJA AC",
    description: "Bandingkan pilihan brand dan kategori AC yang tersedia sesuai kebutuhan ruangan.",
    href: "/katalog",
  },
]

const faqItems = [
  {
    question: "Apakah RADJA AC menjual AC Sharp BEY?",
    answer: "Ya. Sharp BEY masuk dalam daftar unit supplier RADJA AC untuk paket 1/2 PK + pemasangan standard sesuai stok terbaru.",
  },
  {
    question: "Apakah Sharp cocok untuk kamar atau kos?",
    answer: "Cocok untuk dipertimbangkan. Tim RADJA AC tetap perlu cek ukuran ruangan, daya listrik, dan kebutuhan pemakaian agar rekomendasi kapasitasnya lebih pas.",
  },
  {
    question: "Apakah tersedia Sharp inverter atau low watt?",
    answer: "Stok Sharp mengikuti ketersediaan supplier. Untuk saat ini, cek langsung via WhatsApp agar tim RADJA AC bisa memastikan tipe yang ready dan harga terbaru.",
  },
  {
    question: "Bagaimana cara cek stok dan harga Sharp terbaru?",
    answer: "Klik tombol WhatsApp di halaman ini untuk cek stok Sharp BEY, harga terbaru, rekomendasi PK, dan estimasi pemasangan.",
  },
]

function WhatsAppButton({ children = "Cek Stok Sharp BEY", className = "", message = SHARP_WA_MESSAGE }) {
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

export default function SharpPurwokerto() {
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
        title="AC Sharp BEY Purwokerto | Cek Stok & Harga RADJA AC"
        description="Cari AC Sharp BEY Purwokerto? RADJA AC bantu cek stok Sharp BEY 1/2 PK, harga terbaru, rekomendasi PK, dan pemasangan area Purwokerto-Banyumas."
        canonicalPath="/brand/sharp"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-6 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                AC SHARP BEY PURWOKERTO
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Sharp</span>
              </div>

              <h1 className="mx-auto mb-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl lg:mx-0">
                Cari AC Sharp BEY di Purwokerto?
                <span className="block text-cyan-300">Cek RADJA AC dulu</span>
              </h1>

              <p className="mx-auto mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                Sharp BEY cocok untuk pembeli yang mencari AC brand familiar untuk kamar, kos, kontrakan, rumah harian, atau toko kecil. Chat RADJA AC untuk cek stok, harga terbaru, rekomendasi PK, dan kebutuhan pemasangan area Purwokerto-Banyumas.
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                <WhatsAppButton />
                <a
                  href="#produk-sharp"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Pilihan Sharp
                </a>
              </div>

              <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-center text-sm text-white/65 lg:mx-0 lg:justify-start">
                {["Sharp BEY", "Brand familiar", "Cek stok & harga", "Standard • 1/2 PK • Rumah Harian"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-2 lg:mt-0">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute bottom-4 left-[-24px] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative mx-auto w-[88%] max-w-[360px] overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/70 p-2 shadow-2xl sm:max-w-[430px] lg:max-w-[480px]">
                <img
                  src={HERO_IMAGE}
                  alt="AC Sharp BEY di RADJA AC Purwokerto"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[390px] w-full rounded-[26px] object-cover object-center sm:h-[520px] lg:h-[600px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Keunggulan Sharp</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Kenapa Sharp BEY cocok dicek untuk kebutuhan rumah?</h2>
            <p className="leading-7 text-white/65">Sharp BEY masuk sebagai opsi AC standard yang mudah dipahami pembeli: brand familiar, cocok untuk kebutuhan harian, dan bisa dicek stok serta pemasangannya sebelum membeli.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="produk-sharp" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Pilihan Sharp</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mulai dari Sharp BEY sesuai stok supplier</h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">Untuk Sharp, jangan asal pilih dari nama brand saja. Cek dulu stok Sharp BEY, ukuran PK, kondisi ruangan, dan kebutuhan pemasangan agar pembelian lebih pas.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/14 via-slate-900 to-blue-950/70 p-3">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
                  <img
                    src={product.image}
                    alt={`${product.title} di RADJA AC`}
                    loading="lazy"
                    decoding="async"
                    className="h-[155px] w-full rounded-[22px] object-cover object-center"
                  />
                  <span className="absolute left-6 top-6 inline-flex rounded-full border border-cyan-300/20 bg-slate-950/70 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">
                    {product.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-center text-2xl font-black tracking-[-0.02em] text-white">{product.title}</h3>
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

                  <WhatsAppButton className="w-full py-3 text-sm" message={product.message}>{product.cta}</WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-6 max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Panduan PK</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Cek kapasitas AC Sharp sesuai ruangan</h2>
            <p className="leading-7 text-white/65">Panduan cepat untuk memperkirakan kapasitas AC sebelum konsultasi. Ukuran final tetap menyesuaikan kondisi ruangan, panas matahari, jumlah pengguna, dan daya listrik.</p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
            <div className="hidden grid-cols-[0.8fr_1fr_1.4fr] border-b border-white/10 bg-cyan-400/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80 sm:grid">
              <span>Kapasitas</span>
              <span>Estimasi Ruangan</span>
              <span>Cocok Untuk</span>
            </div>

            <div className="divide-y divide-white/10">
              {pkGuide.map(([pk, area, note]) => (
                <div key={pk} className="px-5 py-4 sm:grid sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-center sm:gap-4">
                  <div className="grid grid-cols-[64px_1fr] items-baseline gap-4 sm:contents">
                    <div className="text-xl font-black text-cyan-300 sm:text-xl">{pk}</div>
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
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Baca Juga</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Panduan sebelum beli AC Sharp</h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">Link berikut membantu Anda membandingkan kebutuhan AC Sharp dengan kategori dan panduan pembelian yang relevan.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {internalLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="mb-4 text-sm leading-6 text-white/55">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">
                  Buka halaman
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="rounded-[34px] border border-cyan-400/20 bg-cyan-400/5 p-6 text-center shadow-[0_35px_90px_rgba(14,116,144,0.16)] sm:p-10 lg:p-14">
            <div className="mb-4 flex justify-center text-cyan-300"><Wind className="h-10 w-10" /></div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mau Sharp BEY tapi belum yakin cocok?</h2>
            <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">Chat dulu untuk cek stok, harga terbaru, ukuran PK, dan kebutuhan pemasangan. Kirim ukuran ruangan, daya listrik, lokasi area Purwokerto/Banyumas, dan budget agar rekomendasi lebih pas.</p>
            <WhatsAppButton>Chat Cek Sharp Sekarang</WhatsAppButton>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">FAQ</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC Sharp</h2>
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
