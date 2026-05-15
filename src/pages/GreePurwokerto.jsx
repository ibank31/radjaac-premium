import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, Award, BadgeCheck, Snowflake, Sparkles, Wind, Zap } from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl
const HERO_IMAGE = "/assets/brands/gree/gree-showcase.webp"
const MURI_IMAGE = "/assets/brands/gree/rekor-muri-gree.webp"

const benefits = [
  {
    title: "Value kuat untuk kebutuhan harian",
    description: "Gree cocok untuk pelanggan yang mencari AC original dengan performa nyaman dan pilihan harga yang tetap rasional.",
    icon: BadgeCheck,
  },
  {
    title: "Pilihan hemat listrik",
    description: "Tersedia opsi low watt dan inverter untuk membantu pemakaian AC harian lebih efisien sesuai kebutuhan ruangan.",
    icon: Zap,
  },
  {
    title: "Nyaman untuk rumah modern",
    description: "Pilihan unit Gree dapat digunakan untuk kamar tidur, ruang keluarga, kantor kecil, toko, hingga kebutuhan usaha.",
    icon: Snowflake,
  },
]

const products = [
  {
    title: "Gree Standard",
    badge: "Praktis",
    image: "/assets/brands/gree/gree-standar.webp",
    fit: "Kamar tidur, ruang santai, dan toko kecil",
    priority: "Pendinginan harian dengan budget lebih efisien",
    description: "Pilihan praktis untuk pelanggan yang butuh AC Gree original dengan fungsi pendinginan nyaman untuk penggunaan harian.",
    highlights: ["Harian", "Rumah", "Praktis"],
  },
  {
    title: "Gree Low Watt",
    badge: "Hemat daya",
    image: "/assets/brands/gree/gree-low-wat.webp",
    fit: "Rumah dengan daya listrik terbatas",
    priority: "Nyaman digunakan tanpa beban listrik berlebihan",
    description: "Solusi untuk rumah yang ingin tetap nyaman memakai AC dengan konsumsi daya yang lebih bersahabat.",
    highlights: ["Low watt", "Daya ringan", "Efisien"],
  },
  {
    title: "Gree Inverter",
    badge: "Stabil",
    image: "/assets/brands/gree/gree-inverter.webp",
    fit: "Kamar utama, ruang keluarga, dan kantor kecil",
    priority: "Suhu lebih stabil untuk pemakaian rutin",
    description: "Untuk pelanggan yang mengutamakan kenyamanan stabil dan efisiensi energi pada penggunaan AC jangka panjang.",
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

const internalLinks = [
  {
    title: "Jual AC Purwokerto",
    description: "Mulai dari halaman pusat pembelian AC untuk cek brand, stok, harga, dan rekomendasi PK.",
    href: "/jual-ac-purwokerto",
  },
  {
    title: "AC Inverter Purwokerto",
    description: "Bandingkan pilihan AC inverter untuk pemakaian rutin dan suhu lebih stabil.",
    href: "/katalog/ac-inverter",
  },
  {
    title: "AC Low Watt Purwokerto",
    description: "Cek pilihan AC untuk rumah dengan daya listrik terbatas.",
    href: "/katalog/ac-low-watt",
  },
  {
    title: "AC Inverter vs Low Watt",
    description: "Baca panduan perbedaan inverter dan low watt sebelum menentukan unit.",
    href: "/artikel/ac-inverter-vs-low-watt",
  },
]

const faqItems = [
  {
    question: "Apakah RADJA AC menjual AC Gree original?",
    answer: "Ya. RADJA AC menyediakan pilihan AC Gree original untuk kebutuhan rumah, kantor, toko, dan bisnis area Purwokerto, Banyumas, dan sekitarnya.",
  },
  {
    question: "Apakah tersedia Gree low watt dan inverter?",
    answer: "Tersedia pilihan Gree standard, low watt, dan inverter. Tim RADJA AC dapat membantu memilih tipe yang sesuai daya listrik, luas ruangan, dan kebutuhan penggunaan.",
  },
  {
    question: "Apakah bisa konsultasi ukuran PK sebelum membeli?",
    answer: "Bisa. Kirim ukuran ruangan, perkiraan daya listrik, dan fungsi ruangan melalui WhatsApp agar tim RADJA AC bisa bantu rekomendasi kapasitas yang tepat.",
  },
  {
    question: "Bagaimana cara cek stok dan harga Gree terbaru?",
    answer: "Klik tombol WhatsApp di halaman ini untuk mendapatkan informasi stok, harga terbaru, rekomendasi unit, dan estimasi pemasangan.",
  },
]

function WhatsAppButton({ children = "Tanya Harga Gree", className = "" }) {
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

export default function GreePurwokerto() {
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
        title="Dealer AC Gree Purwokerto & Banyumas | RADJA AC"
        description="RADJA AC melayani penjualan AC Gree Purwokerto dan Banyumas lengkap dengan konsultasi ukuran PK, pilihan low watt dan inverter, instalasi rapi, serta layanan after-sales."
        canonicalPath="/brand/gree"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-blue-600/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-orange-500/14 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-6 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                BRAND VALUE RADJA AC
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-orange-300">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Gree</span>
              </div>

              <h1 className="mx-auto mb-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl lg:mx-0">
                AC Gree Purwokerto & Banyumas
                <span className="block text-blue-300">Hemat, nyaman, dan value kuat</span>
              </h1>

              <p className="mx-auto mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                RADJA AC menyediakan AC Gree original untuk rumah, kantor, toko, dan kebutuhan bisnis. Konsultasikan ukuran ruangan, daya listrik, dan kebutuhan penggunaan untuk mendapatkan rekomendasi unit Gree yang paling sesuai.
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                <WhatsAppButton />
                <a
                  href="#produk-gree"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:border-orange-300/30 hover:bg-white/[0.05]"
                >
                  Lihat Rekomendasi
                </a>
              </div>

              <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-center text-sm text-white/65 lg:mx-0 lg:justify-start">
                {["Gree Original", "Low Watt & Inverter", "Purwokerto & Banyumas"].map((item) => (
                  <span key={item} className="rounded-full border border-blue-300/10 bg-white/[0.035] px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-2 lg:mt-0">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/12 blur-3xl" />
              <div className="absolute bottom-4 left-[-24px] h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
              <div className="relative mx-auto w-[88%] max-w-[360px] overflow-hidden rounded-[34px] border border-blue-300/10 bg-slate-950/70 p-2 shadow-2xl sm:max-w-[430px] lg:max-w-[480px]">
                <img
                  src={HERO_IMAGE}
                  alt="Showcase AC Gree di RADJA AC Purwokerto"
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm font-semibold text-orange-200">
                <Award className="h-4 w-4" />
                Rekor MURI bersama Gree
              </div>

              <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:mx-0 lg:text-5xl">
                Bukti pencapaian brand partner Gree
              </h2>

              <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                RADJA AC menjadi bagian dari pencapaian Rekor MURI bersama Gree melalui performa penjualan dan dukungan brand partner. Ini menjadi trust signal penting untuk pelanggan yang mencari AC Gree original.
              </p>

              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center text-sm text-white/80 sm:text-base">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-orange-300" />
                  <span>Bagian dari pencapaian Rekor MURI Gree</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-blue-300/20 bg-slate-950/70 p-3 shadow-[0_0_55px_rgba(59,130,246,0.12),0_30px_90px_rgba(8,20,47,0.45)]">
              <img
                src={MURI_IMAGE}
                alt="Rekor MURI bersama Gree"
                loading="lazy"
                decoding="async"
                className="w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Keunggulan Gree</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Kenapa banyak pelanggan memilih AC Gree?</h2>
            <p className="leading-7 text-white/65">Gree cocok untuk pelanggan yang ingin AC original dengan value kuat, pilihan hemat listrik, dan performa nyaman untuk penggunaan harian.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="produk-gree" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Rekomendasi Produk</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilihan AC Gree di RADJA AC</h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">Harga dan stok Gree dapat berubah. CTA diarahkan ke WhatsApp agar pelanggan mendapat info terbaru dan rekomendasi yang sesuai.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.title} className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.06]">
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-500/14 via-slate-900 to-orange-950/50 p-3">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-300/20 blur-3xl" />
                  <img
                    src={product.image}
                    alt={`${product.title} di RADJA AC`}
                    loading="lazy"
                    decoding="async"
                    className="h-[155px] w-full rounded-[22px] object-cover object-center"
                  />
                  <span className="absolute left-6 top-6 inline-flex rounded-full border border-orange-300/20 bg-slate-950/70 px-3 py-1 text-xs font-bold text-orange-100 backdrop-blur">
                    {product.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-center text-2xl font-black tracking-[-0.02em] text-white">{product.title}</h3>
                  <p className="mb-4 text-sm leading-7 text-white/60">{product.description}</p>

                  <div className="mb-5 space-y-3 rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-200/70">Cocok untuk</p>
                      <p className="mt-1 text-sm font-medium text-white/85">{product.fit}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-200/70">Fokus utama</p>
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
          <div className="mx-auto mb-6 max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Panduan PK</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilih kapasitas AC Gree sesuai ruangan</h2>
            <p className="leading-7 text-white/65">Panduan cepat untuk memperkirakan kapasitas AC sebelum konsultasi. Ukuran final tetap menyesuaikan kondisi ruangan, panas matahari, dan jumlah pengguna.</p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
            <div className="hidden grid-cols-[0.8fr_1fr_1.4fr] border-b border-white/10 bg-blue-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/80 sm:grid">
              <span>Kapasitas</span>
              <span>Estimasi Ruangan</span>
              <span>Cocok Untuk</span>
            </div>

            <div className="divide-y divide-white/10">
              {pkGuide.map(([pk, area, note]) => (
                <div key={pk} className="px-5 py-4 sm:grid sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-center sm:gap-4">
                  <div className="grid grid-cols-[64px_1fr] items-baseline gap-4 sm:contents">
                    <div className="text-xl font-black text-blue-300 sm:text-xl">{pk}</div>
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
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Baca Juga</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Panduan sebelum beli AC Gree</h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">Link berikut membantu Anda membandingkan kebutuhan AC Gree dengan kategori dan panduan pembelian yang relevan.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {internalLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.06]"
              >
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="mb-4 text-sm leading-6 text-white/55">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 group-hover:text-blue-200">
                  Buka halaman
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="rounded-[34px] border border-blue-400/20 bg-blue-500/5 p-6 text-center shadow-[0_35px_90px_rgba(30,64,175,0.16)] sm:p-10 lg:p-14">
            <div className="mb-4 flex justify-center text-orange-300"><Wind className="h-10 w-10" /></div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Butuh rekomendasi AC Gree yang paling cocok?</h2>
            <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">Kirim ukuran ruangan, daya listrik, dan kebutuhan penggunaan. Tim RADJA AC akan bantu rekomendasi unit Gree yang sesuai.</p>
            <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12 pt-8 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">FAQ</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC Gree</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-blue-300" />
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
