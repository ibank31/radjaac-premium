import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, Fan, ShieldCheck, Snowflake, Sparkles, Wind } from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl
const HERO_IMAGE = "/assets/brands/hisense/showcase-hisense.webp"
const CERTIFICATE_IMAGE = "/assets/brands/hisense/sertifikat-hisense.webp"

const benefits = [
  {
    title: "Pendinginan praktis untuk harian",
    description: "AC Hisense cocok untuk kamar, kos, ruang santai, dan toko kecil dengan pilihan kapasitas yang bisa disesuaikan.",
    icon: Snowflake,
  },
  {
    title: "Fitur perawatan lebih mudah",
    description: "Beberapa lini AC Hisense dilengkapi fitur seperti Self-Cleaning, Anti Mildew, dan 4 in 1 Filter untuk membantu menjaga kenyamanan pemakaian.",
    icon: Fan,
  },
  {
    title: "Perlindungan unit lebih tahan lama",
    description: "Fitur seperti Gold Fin dan perlindungan anti-korosi membantu mendukung ketahanan unit untuk penggunaan jangka panjang.",
    icon: ShieldCheck,
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
    title: "AC Inverter vs Low Watt",
    description: "Baca panduan perbedaan inverter dan low watt sebelum menentukan unit.",
    href: "/artikel/ac-inverter-vs-low-watt",
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
    question: "Apakah Hisense cocok untuk kamar tidur atau kos?",
    answer: "Cocok. AC Hisense dapat menjadi pilihan praktis untuk kamar tidur, kos, ruang santai, dan toko kecil dengan kapasitas yang disesuaikan luas ruangan.",
  },
  {
    question: "Apakah bisa konsultasi ukuran PK sebelum membeli?",
    answer: "Bisa. Kirim ukuran ruangan, daya listrik, dan kebutuhan penggunaan agar tim RADJA AC bisa bantu rekomendasi kapasitas yang tepat.",
  },
  {
    question: "Bagaimana cara cek stok dan harga Hisense terbaru?",
    answer: "Klik tombol WhatsApp di halaman ini untuk mendapatkan informasi stok, harga terbaru, rekomendasi unit, dan estimasi pemasangan.",
  },
]

function WhatsAppButton({ children = "Tanya Harga Hisense", className = "" }) {
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
        title="Dealer AC Hisense Purwokerto & Banyumas | RADJA AC"
        description="RADJA AC melayani penjualan AC Hisense Purwokerto dan Banyumas lengkap dengan konsultasi ukuran PK, pilihan AC standard dan inverter, instalasi rapi, serta layanan after-sales."
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
                BRAND PILIHAN RADJA AC
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-teal-300">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Hisense</span>
              </div>

              <h1 className="mx-auto mb-5 max-w-xl text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl lg:mx-0">
                AC Hisense Purwokerto & Banyumas
                <span className="block text-teal-300">Modern, praktis, dan nyaman</span>
              </h1>

              <p className="mx-auto mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                RADJA AC menyediakan AC Hisense original untuk rumah, kamar tidur, kos, toko kecil, kantor, dan kebutuhan harian. Konsultasikan ukuran ruangan, daya listrik, dan kebutuhan penggunaan agar pilihan unit Hisense lebih tepat.
              </p>

              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                <WhatsAppButton />
                <a
                  href="#produk-hisense"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Rekomendasi
                </a>
              </div>

              <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2 text-center text-sm text-white/65 lg:mx-0 lg:justify-start">
                {["Hisense Original", "Standard & Inverter", "Purwokerto & Banyumas"].map((item) => (
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
                <BadgeCheck className="h-4 w-4" />
                Sertifikat Resmi Hisense
              </div>

              <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:mx-0 lg:text-5xl">
                Bukti kepercayaan untuk pelanggan Hisense RADJA AC
              </h2>

              <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0">
                Sertifikat ini memperkuat kepercayaan pelanggan bahwa RADJA AC menyediakan pilihan AC Hisense original dengan dukungan konsultasi produk, pengadaan unit, instalasi rapi, dan after-sales.
              </p>

              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center text-sm text-white/80 sm:text-base">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-teal-300" />
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
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Kenapa banyak pelanggan memilih AC Hisense?</h2>
            <p className="leading-7 text-white/65">Hisense cocok untuk pelanggan yang mencari AC original dengan fitur modern, penggunaan praktis, dan pilihan kapasitas untuk kebutuhan harian.</p>
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
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Rekomendasi Produk</div>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilihan AC Hisense di RADJA AC</h2>
            <p className="mx-auto max-w-2xl leading-7 text-white/65">Untuk saat ini, produk utama Hisense ditampilkan sebagai single featured product supaya halaman tetap clean dan sesuai asset yang tersedia.</p>
          </div>

          <article className="mx-auto grid max-w-5xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_18px_45px_rgba(15,23,42,0.24)] md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-teal-400/14 via-slate-900 to-cyan-950/70 p-3 md:border-b-0 md:border-r">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal-300/20 blur-3xl" />
              <img
                src="/assets/brands/hisense/ac-hisense-standar.webp"
                alt="AC Hisense Standard di RADJA AC"
                loading="lazy"
                decoding="async"
                className="h-[220px] w-full rounded-[22px] object-cover object-center sm:h-[280px] md:h-full"
              />
              <span className="absolute left-6 top-6 inline-flex rounded-full border border-teal-300/20 bg-slate-950/70 px-3 py-1 text-xs font-bold text-teal-100 backdrop-blur">
                Standard
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="mb-4 text-center text-3xl font-black tracking-[-0.03em] text-white md:text-left">Hisense Standard</h3>
              <p className="mb-5 text-sm leading-7 text-white/60 sm:text-base">
                Pilihan praktis untuk kamar tidur, ruang keluarga kecil, kos, dan toko kecil. Cocok untuk pelanggan yang mencari AC split original dengan fitur pendinginan harian, mode pintar, self-cleaning, tampilan LED, dan perlindungan anti-korosi.
              </p>

              <div className="mb-5 space-y-3 rounded-3xl border border-white/10 bg-white/[0.035] p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-teal-200/70">Cocok untuk</p>
                  <p className="mt-1 text-sm font-medium text-white/85">Kamar tidur, kos, ruang santai, dan toko kecil</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-teal-200/70">Fokus utama</p>
                  <p className="mt-1 text-sm font-medium text-white/85">Pendinginan harian yang praktis dan ekonomis</p>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap justify-center gap-2 text-center md:justify-start">
                {["R32", "Smart Mode", "Self-Cleaning", "Gold Fin", "4 in 1 Filter"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                    {item}
                  </span>
                ))}
              </div>

              <WhatsAppButton className="w-full py-3 text-sm md:w-auto">Cek Stok & Harga</WhatsAppButton>
            </div>
          </article>
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
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Butuh rekomendasi AC Hisense yang paling cocok?</h2>
            <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">Kirim ukuran ruangan, daya listrik, dan kebutuhan penggunaan. Tim RADJA AC akan bantu rekomendasi unit Hisense yang sesuai.</p>
            <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
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
