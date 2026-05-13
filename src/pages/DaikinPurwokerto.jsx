import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  Home,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const HERO_IMAGE = "/assets/brands/daikin/daikin-showcase.webp"
const CERTIFICATE_IMAGE = "/assets/brands/daikin/sertificate-daikin.webp"
const DAIKIN_WA_MESSAGE =
  "Halo RADJA AC, saya mau konsultasi AC Daikin. Mohon bantu rekomendasi tipe dan PK yang cocok untuk kebutuhan saya."

const benefits = [
  {
    title: "Daikin original bergaransi resmi",
    description:
      "RADJA AC membantu pelanggan memilih AC Daikin original dengan dukungan garansi resmi dan konsultasi sebelum membeli.",
    icon: ShieldCheck,
  },
  {
    title: "Konsultasi PK sebelum beli",
    description:
      "Ukuran ruangan, daya listrik, dan pola pemakaian dicek dulu agar pilihan AC Daikin lebih tepat untuk kebutuhan rumah atau usaha.",
    icon: CheckCircle2,
  },
  {
    title: "Bisa bantu instalasi profesional",
    description:
      "Pembelian AC Daikin dapat dilanjutkan dengan instalasi rapi agar performa pendinginan lebih optimal dan aman digunakan.",
    icon: Snowflake,
  },
]

const products = [
  {
    title: "Daikin Inverter",
    badge: "Pemakaian rutin",
    image: "/assets/brands/daikin/ac-daikin-inventer.webp",
    fit: "Kamar utama, ruang keluarga, dan kantor kecil",
    priority: "Hemat energi dan suhu lebih stabil",
    description:
      "Cocok untuk pelanggan yang memakai AC cukup sering dan mengutamakan kenyamanan suhu harian.",
    highlights: ["Suhu stabil", "Nyaman harian", "Efisien"],
  },
  {
    title: "Daikin Low Watt",
    badge: "Daya terbatas",
    image: "/assets/brands/daikin/ac-daikin-low-watt.webp",
    fit: "Rumah, kos, kontrakan, dan kamar tidur",
    priority: "Beban listrik lebih ringan",
    description:
      "Pilihan untuk rumah dengan daya listrik terbatas atau pelanggan yang ingin beban listrik lebih aman.",
    highlights: ["Daya ringan", "Rumah tinggal", "Praktis"],
  },
  {
    title: "Daikin Standard",
    badge: "Pilihan aman",
    image: "/assets/brands/daikin/ac-daikin-standar.webp",
    fit: "Kamar tidur, toko kecil, dan ruang santai",
    priority: "Pendinginan harian yang simple",
    description:
      "Pilihan praktis untuk kebutuhan pendinginan harian dengan perawatan yang mudah dan penggunaan sederhana.",
    highlights: ["Simple", "Ready use", "Perawatan mudah"],
  },
]

const useCases = [
  {
    title: "Untuk kamar tidur",
    description:
      "Biasanya mulai dari ½ PK, ¾ PK, atau 1 PK tergantung ukuran kamar, posisi ruangan, dan paparan panas.",
    icon: Home,
  },
  {
    title: "Untuk ruang keluarga",
    description:
      "Butuh kapasitas lebih besar karena ruangan sering terbuka, dipakai beberapa orang, dan aktivitasnya lebih padat.",
    icon: Wind,
  },
  {
    title: "Untuk pemakaian rutin",
    description:
      "Daikin inverter bisa dipertimbangkan untuk penggunaan harian yang membutuhkan suhu lebih stabil dan nyaman.",
    icon: Zap,
  },
]

const internalLinks = [
  {
    title: "AC Inverter",
    description: "Bandingkan pilihan inverter untuk pemakaian rutin.",
    href: "/katalog/ac-inverter",
  },
  {
    title: "AC Low Watt",
    description: "Cek pilihan AC untuk daya listrik terbatas.",
    href: "/katalog/ac-low-watt",
  },
  {
    title: "AC Split Rumah",
    description: "Rekomendasi AC untuk kamar dan rumah tinggal.",
    href: "/katalog/ac-split-rumah",
  },
  {
    title: "AC 1 PK untuk ruangan berapa?",
    description: "Baca panduan sebelum menentukan kapasitas AC.",
    href: "/artikel/ac-1-pk-untuk-ruangan-berapa",
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
    question: "Apakah RADJA AC menjual AC Daikin original bergaransi resmi?",
    answer:
      "Ya. RADJA AC menyediakan pilihan AC Daikin original untuk area Purwokerto, Banyumas, dan sekitarnya dengan dukungan garansi resmi sesuai ketentuan produk.",
  },
  {
    question: "Apakah bisa konsultasi ukuran PK sebelum membeli AC Daikin?",
    answer:
      "Bisa. Tim RADJA AC dapat membantu rekomendasi kapasitas AC Daikin berdasarkan luas ruangan, tinggi plafon, daya listrik, dan kebutuhan penggunaan.",
  },
  {
    question: "Apakah tersedia AC Daikin inverter?",
    answer:
      "Ya, tersedia pilihan Daikin inverter untuk pelanggan yang mengutamakan kenyamanan suhu stabil dan pemakaian rutin. Ketersediaan stok dapat dicek via WhatsApp.",
  },
  {
    question: "Apakah pembelian AC Daikin bisa dibantu pemasangan?",
    answer:
      "Bisa. Pembelian AC Daikin dapat dilanjutkan dengan layanan instalasi profesional agar pemasangan lebih rapi, aman, dan nyaman digunakan.",
  },
  {
    question: "Bagaimana cara cek stok dan rekomendasi Daikin terbaru?",
    answer:
      "Klik tombol WhatsApp di halaman ini untuk cek stok Daikin, konsultasi tipe, rekomendasi kapasitas PK, dan kebutuhan instalasi.",
  },
]

function WhatsAppButton({ children = "Konsultasi AC Daikin", className = "" }) {
  return (
    <a
      href={buildWhatsAppUrl(DAIKIN_WA_MESSAGE)}
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
        title="Jual AC Daikin Purwokerto — Dealer Resmi Bergaransi | RADJA AC"
        description="RADJA AC menyediakan AC Daikin original bergaransi resmi di Purwokerto & Banyumas. Konsultasi gratis pilih PK, inverter, low watt, dan kebutuhan instalasi."
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

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                DEALER AC DAIKIN PURWOKERTO
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">
                  Beranda
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Daikin</span>
              </div>

              <h1 className="mb-5 max-w-xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                Jual AC Daikin Purwokerto
                <span className="block text-cyan-300">Dealer resmi bergaransi</span>
              </h1>

              <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                RADJA AC menyediakan AC Daikin original untuk rumah, kantor, toko, cafe, dan kebutuhan proyek di Purwokerto & Banyumas. Konsultasikan kebutuhan ruangan Anda untuk mendapatkan rekomendasi tipe dan PK yang paling tepat.
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <WhatsAppButton />
                <a
                  href="#produk-daikin"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Rekomendasi Daikin
                </a>
              </div>

              <div className="flex max-w-xl flex-wrap justify-center gap-2 text-center text-sm text-white/65 sm:justify-start">
                {["Daikin Original", "Garansi Resmi", "Konsultasi PK", "Bisa Bantu Instalasi"].map((item) => (
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

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
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
                Sertifikat Authorized Dealer Daikin menjadi trust signal utama halaman ini. Calon pelanggan bisa lebih yakin bahwa RADJA AC membantu pembelian AC Daikin original, bergaransi resmi, dan didukung konsultasi sebelum membeli.
              </p>

              <div className="flex justify-center lg:justify-start">
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

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Keunggulan Daikin</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Kenapa banyak pelanggan memilih AC Daikin?
            </h2>
            <p className="leading-7 text-white/65">
              Daikin dikenal sebagai brand AC premium yang nyaman untuk penggunaan harian. RADJA AC membantu pelanggan memilih tipe Daikin yang sesuai ruangan, daya listrik, dan kebutuhan pemakaian.
            </p>
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

        <section id="produk-daikin" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Rekomendasi Produk</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Pilihan AC Daikin di RADJA AC
            </h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">
              Pilih berdasarkan kebutuhan ruangan. Untuk stok dan rekomendasi tipe terbaru, klik WhatsApp agar tim RADJA AC bisa bantu cek langsung.
            </p>
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

                  <WhatsAppButton className="w-full py-3 text-sm">Cek Stok & Rekomendasi</WhatsAppButton>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Pilih Sesuai Kebutuhan</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Daikin untuk kamar, rumah, dan usaha
            </h2>
            <p className="leading-7 text-white/65">
              Belum tahu harus pilih Daikin tipe apa? Mulai dari kebutuhan ruangan dulu, lalu sesuaikan dengan kapasitas PK, daya listrik, dan intensitas pemakaian.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {useCases.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <Icon className="mb-4 h-7 w-7 text-cyan-300" />
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="mb-6 max-w-3xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Panduan PK</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Pilih kapasitas AC Daikin sesuai ruangan
            </h2>
            <p className="leading-7 text-white/65">
              Panduan cepat untuk memperkirakan kapasitas AC sebelum konsultasi. Ukuran final tetap menyesuaikan kondisi ruangan, panas matahari, jumlah pengguna, dan titik pemasangan.
            </p>
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

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="mb-8 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Baca Juga</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Panduan sebelum beli AC Daikin
            </h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">
              Link berikut membantu Anda memahami tipe AC, kapasitas PK, dan kebutuhan ruangan sebelum konsultasi.
            </p>
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
                  Lihat panduan
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="rounded-[34px] border border-cyan-400/20 bg-cyan-400/5 p-6 text-center shadow-[0_35px_90px_rgba(6,78,122,0.16)] sm:p-10 lg:p-14">
            <div className="mb-4 flex justify-center text-cyan-300">
              <Wind className="h-10 w-10" />
            </div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Bingung pilih AC Daikin yang cocok?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">
              Kirim ukuran ruangan, daya listrik, dan kebutuhan penggunaan. Tim RADJA AC akan bantu rekomendasi unit Daikin yang sesuai.
            </p>
            <WhatsAppButton>Konsultasi Daikin via WhatsApp</WhatsAppButton>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">FAQ</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Pertanyaan seputar AC Daikin
            </h2>
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
