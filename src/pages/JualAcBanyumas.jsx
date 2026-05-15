import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  MessageCircle,
  Ruler,
  ShoppingBag,
  Store,
  Truck,
  Zap,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const WA_MESSAGE =
  "Halo RADJA AC, saya dari area Banyumas. Mohon bantu cek stok, harga, rekomendasi PK, dan estimasi pemasangan AC."

const banyumasAreas = [
  "Purwokerto",
  "Sokaraja",
  "Kembaran",
  "Baturraden",
  "Karanglewas",
  "Kedungbanteng",
  "Cilongok",
  "Ajibarang",
  "Wangon",
  "Banyumas",
  "Patikraja",
  "Kalibagor",
]

const buyerNeeds = [
  ["Rumah & kamar tidur", "Bantu pilih AC 1/2 PK, 3/4 PK, 1 PK, low watt, atau inverter sesuai ukuran ruangan.", Home],
  ["Toko, kantor & cafe", "Cek kebutuhan pendinginan untuk ruang usaha, ruang kerja, display, dan area pelanggan.", Building2],
  ["Kos, kontrakan & proyek", "Bisa konsultasi pembelian beberapa unit, stok, jadwal, dan kebutuhan instalasi bertahap.", Store],
]

const processSteps = [
  ["Kirim lokasi & ukuran ruangan", "Sebutkan area Banyumas, ukuran ruangan, daya listrik, dan foto titik indoor-outdoor jika ada."],
  ["Cek rekomendasi unit", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, low watt/inverter, dan kisaran harga."],
  ["Estimasi stok & pemasangan", "Jadwal pengiriman/pemasangan luar Purwokerto menyesuaikan rute, stok, dan kondisi lokasi."],
]

const brandLinks = [
  ["Daikin", "/brand/daikin"],
  ["Gree", "/brand/gree"],
  ["Midea", "/brand/midea"],
  ["Hisense", "/brand/hisense"],
  ["Sharp", "/brand/sharp"],
  ["Brand Lainnya", "/brand/lainnya"],
]

const categoryLinks = [
  ["AC Split Rumah", "/katalog/ac-split-rumah", Home],
  ["AC Inverter", "/katalog/ac-inverter", Zap],
  ["AC Low Watt", "/katalog/ac-low-watt", Ruler],
  ["AC Kantor & Komersial", "/katalog/ac-kantor-komersial", Building2],
]

const faqItems = [
  [
    "Apakah RADJA AC melayani jual AC area Banyumas?",
    "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Banyumas dan sekitarnya. Untuk pengiriman dan pemasangan, jadwal serta biaya menyesuaikan lokasi dan kondisi pekerjaan.",
  ],
  [
    "Apakah harga AC Banyumas sama dengan Purwokerto?",
    "Harga unit mengikuti stok dan tipe AC. Untuk area luar Purwokerto, kebutuhan tambahan seperti jarak, pipa/kabel, akses lokasi, dan pekerjaan khusus akan dicek dulu sebelum estimasi final.",
  ],
  [
    "Bisa bantu pilih AC untuk listrik 900 watt atau 1300 watt?",
    "Bisa. Kirim daya listrik, ukuran ruangan, kebiasaan pemakaian, dan budget agar RADJA AC bisa bantu arahkan pilihan low watt atau inverter yang lebih sesuai.",
  ],
  [
    "Apakah bisa beli AC sekaligus pemasangan?",
    "Bisa. Pembelian AC dapat dilanjutkan dengan pemasangan sesuai jadwal, stok, dan hasil cek kondisi lokasi.",
  ],
]

function WhatsAppButton({ children = "Konsultasi AC Area Banyumas", className = "" }) {
  return (
    <a
      href={buildWhatsAppUrl(WA_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{description}</p> : null}
    </div>
  )
}

export default function JualAcBanyumas() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Store", "LocalBusiness"],
    name: SITE_DATA.businessName,
    description:
      "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Banyumas dan sekitarnya, termasuk cek stok, rekomendasi PK, dan estimasi pemasangan.",
    url: `${SITE_DATA.baseUrl}/jual-ac-banyumas`,
    logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    image: `${SITE_DATA.baseUrl}/assets/showroom/Showroom-utama.webp`,
    telephone: SITE_DATA.phoneNumber,
    priceRange: "Rp3 jutaan-Rp6 jutaan+",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Purwokerto",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    areaServed: banyumasAreas.map((area) => ({ "@type": "City", name: area })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Jual AC Banyumas | Konsultasi, Stok & Pemasangan AC — RADJA AC"
        description="RADJA AC melayani jual AC area Banyumas dan sekitarnya. Konsultasi pilihan Daikin, Gree, Midea, Hisense, low watt, inverter, cek stok, harga, PK, dan estimasi pemasangan."
        canonicalPath="/jual-ac-banyumas"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <MapPin className="h-4 w-4" />
                JUAL AC AREA BANYUMAS
              </div>
              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl xl:text-6xl">
                Jual AC Banyumas
                <span className="block text-cyan-300">konsultasi PK, stok, dan pemasangan</span>
              </h1>
              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                RADJA AC Purwokerto melayani konsultasi pembelian AC untuk area Banyumas dan sekitarnya. Cocok untuk rumah, kamar, kos, toko, kantor, cafe, dan proyek yang butuh pilihan AC resmi, bantuan pilih PK, serta estimasi pemasangan sesuai lokasi.
              </p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton />
                <Link to="/katalog" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]">
                  Lihat Katalog AC
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-white/62">
                {["Cek stok", "Tanya harga", "Rekomendasi PK", "Low watt & inverter", "Estimasi pemasangan"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">{item}</span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]">
                <img
                  src="/assets/showroom/Showroom-utama.webp"
                  alt="Showroom RADJA AC untuk konsultasi jual AC Banyumas"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[360px] w-full rounded-[26px] object-cover object-center sm:h-[460px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle
            eyebrow="KEBUTUHAN PEMBELI"
            title="Bantu pilih AC berdasarkan ruangan dan daya listrik"
            description="Untuk area Banyumas, konsultasi awal penting agar pembelian AC tidak hanya mengejar harga, tetapi juga sesuai kapasitas ruangan, listrik, dan rencana pemasangan."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {buyerNeeds.map(([title, description, Icon]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center">
                <Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
                <h2 className="mb-3 text-xl font-black text-white">{title}</h2>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Truck className="h-4 w-4" />
                ALUR BELI AC
              </div>
              <h2 className="mb-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Konsultasi dulu sebelum menentukan unit</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                Karena area Banyumas cukup luas, RADJA AC mengecek kebutuhan unit dan kondisi lokasi lebih dulu. Tujuannya supaya rekomendasi AC, stok, harga, dan estimasi pemasangan lebih jelas sejak awal.
              </p>
              <WhatsAppButton>Cek Kebutuhan AC</WhatsAppButton>
            </div>
            <div className="grid gap-4">
              {processSteps.map(([title, description], index) => (
                <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">{index + 1}</span>
                    <h3 className="text-lg font-black text-white">{title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-white/58">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cyan-200">
                  <MapPin className="h-4 w-4" />
                  AREA BANYUMAS
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl">Area yang bisa konsultasi pembelian AC</h2>
                <p className="text-sm leading-7 text-white/64 sm:text-base">
                  Area layanan dan pemasangan menyesuaikan jadwal, stok, jarak, dan kondisi lokasi. Untuk area yang belum tertulis, tetap bisa konsultasi lewat WhatsApp.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {banyumasAreas.map((area) => (
                  <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/75">{area}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle
            eyebrow="PILIHAN AC"
            title="Mulai dari brand atau kategori kebutuhan"
            description="Jika belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, dan jam pemakaian."
          />
          <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {brandLinks.map(([title, href]) => (
              <Link key={href} to={href} className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <BadgeCheck className="mb-4 h-6 w-6 text-cyan-300" />
                <h3 className="mb-3 text-2xl font-black text-white">{title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">Lihat pilihan <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categoryLinks.map(([title, href, Icon]) => (
              <Link key={href} to={href} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/30">
                <Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-lg font-black text-white">{title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <ShoppingBag className="mb-5 h-8 w-8 text-cyan-300" />
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em]">Cari harga AC area Banyumas?</h2>
              <p className="mb-6 text-sm leading-7 text-white/62 sm:text-base">
                Untuk cek harga, kirim kebutuhan ruangan dan area pemasangan. RADJA AC akan bantu arahkan pilihan AC 1/2 PK, low watt, inverter, atau brand yang sesuai budget.
              </p>
              <Link to="/jual-ac-purwokerto" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                Lihat juga halaman jual AC Purwokerto <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <MessageCircle className="mb-5 h-8 w-8 text-[#25D366]" />
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em]">Data yang sebaiknya dikirim</h2>
              <ul className="space-y-3 text-sm leading-7 text-white/62 sm:text-base">
                {[
                  "Area/lokasi pemasangan di Banyumas",
                  "Ukuran ruangan dan tinggi plafon",
                  "Daya listrik rumah atau toko",
                  "Budget dan brand yang diminati",
                  "Foto titik indoor dan outdoor jika tersedia",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#25D366]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle eyebrow="FAQ" title="Pertanyaan umum jual AC Banyumas" />
          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map(([question, answer]) => (
              <div key={question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="mb-3 font-bold text-white">{question}</h3>
                <p className="text-sm leading-7 text-white/60">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10 lg:p-14">
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mau beli AC area Banyumas?</h2>
            <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Kirim area, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, pilihan brand, kapasitas PK, dan estimasi pemasangan.
            </p>
            <WhatsAppButton>Konsultasi Sekarang</WhatsAppButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
