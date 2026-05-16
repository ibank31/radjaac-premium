import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, CheckCircle2, Home, MapPin, MessageCircle, Truck, Zap } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const areaName = "Cilongok"
const canonicalPath = "/jual-ac-cilongok"
const waMessage = "Halo RADJA AC, saya dari area Cilongok. Mau tanya AC yang bisa COD/bayar di tempat. Mohon bantu cek stok, harga, rekomendasi PK, dan estimasi pemasangan AC."

const areas = ["Cilongok", "Pernasidi", "Panembangan", "Cikidang", "Karanglo", "Kasegeran", "Pageraji", "Sambirata", "Ajibarang", "Karanglewas", "Kedungbanteng", "Purwokerto Barat"]

const trustItems = [
  ["Bisa COD / bayar di tempat", "Untuk area tertentu, pembayaran bisa dilakukan saat unit sampai atau saat pemasangan sesuai konfirmasi awal.", BadgeCheck],
  ["Cek stok & harga dulu", "Tipe AC, stok, kebutuhan pipa/kabel, dan estimasi biaya dibahas lewat WhatsApp sebelum jadwal dikunci.", MessageCircle],
  ["Pemasangan sesuai lokasi", "Tim menyesuaikan rute, jadwal, akses lokasi, dan kondisi titik indoor-outdoor agar estimasi lebih jelas.", Truck],
]

const faqItems = [
  ["Apakah RADJA AC melayani jual AC area Cilongok?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Cilongok dan sekitarnya."],
  ["Apakah bisa beli AC area Cilongok dengan COD?", "Bisa untuk area dan kondisi tertentu setelah stok, jadwal, lokasi, dan kebutuhan pemasangan dikonfirmasi."],
  ["Apakah bisa bantu pilih AC sesuai daya listrik?", "Bisa. Kirim daya listrik, ukuran ruangan, kebiasaan pemakaian, dan budget agar pilihan AC lebih sesuai."],
]

function WhatsAppButton({ children = "Konsultasi AC Area Cilongok" }) {
  return (
    <a href={buildWhatsAppUrl(waMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]">
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

export default function JualAcCilongok() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Store", "LocalBusiness"],
    name: SITE_DATA.businessName,
    description: `Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area ${areaName} dan sekitarnya, termasuk cek stok, rekomendasi PK, opsi COD, dan estimasi pemasangan.`,
    url: `${SITE_DATA.baseUrl}${canonicalPath}`,
    logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    image: `${SITE_DATA.baseUrl}/assets/showroom/Showroom-utama.webp`,
    telephone: SITE_DATA.phoneNumber,
    priceRange: "Rp3 jutaan-Rp6 jutaan+",
    address: { "@type": "PostalAddress", addressLocality: "Purwokerto", addressRegion: "Jawa Tengah", addressCountry: "ID" },
    areaServed: areas.map((area) => ({ "@type": "City", name: area })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead title="Jual AC Cilongok Bisa COD | Stok & Pemasangan — RADJA AC" description="RADJA AC melayani jual AC area Cilongok dan sekitarnya. Bisa konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi." canonicalPath={canonicalPath} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"><MapPin className="h-4 w-4" />JUAL AC AREA CILONGOK</div>
              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl xl:text-6xl">Jual AC Cilongok<span className="block text-cyan-300">bisa COD, cek stok, dan pemasangan</span></h1>
              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">RADJA AC Purwokerto melayani pembelian AC untuk area Cilongok dan sekitarnya. Konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi lokasi, jadwal, serta kondisi pekerjaan.</p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center"><WhatsAppButton>Tanya AC COD Cilongok</WhatsAppButton><Link to="/katalog" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]">Lihat Katalog AC</Link></div>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-white/62">{["Bisa COD", "Bayar di tempat", "Cek stok dulu", "Rekomendasi PK", "Estimasi pasang"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">{item}</span>)}</div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:mr-0"><div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]"><img src="/assets/showroom/Showroom-utama.webp" alt="Showroom RADJA AC untuk konsultasi jual AC Cilongok" fetchPriority="high" decoding="async" className="h-[360px] w-full rounded-[26px] object-cover object-center sm:h-[460px]" /></div></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle eyebrow="AMAN UNTUK LUAR PURWOKERTO" title="Beli AC area Cilongok bisa lebih tenang" description="Untuk pembeli luar Purwokerto, RADJA AC bantu jelaskan stok, harga, jadwal, dan opsi pembayaran dari awal supaya proses pembelian AC lebih jelas." />
          <div className="grid gap-5 md:grid-cols-3">{trustItems.map(([title, description, Icon]) => <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center"><Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" /><h2 className="mb-3 text-lg font-black text-white">{title}</h2><p className="text-sm leading-7 text-white/60">{description}</p></div>)}</div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionTitle eyebrow="AREA CILONGOK" title="Area yang bisa konsultasi pembelian AC" description="Area layanan, COD, dan pemasangan menyesuaikan jadwal, stok, jarak, dan kondisi lokasi. Untuk area yang belum tertulis, tetap bisa konsultasi lewat WhatsApp." /><div className="flex flex-wrap justify-center gap-2.5">{areas.map((area) => <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/75">{area}</span>)}</div></section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionTitle eyebrow="PILIHAN AC" title="Mulai dari brand atau kategori kebutuhan" description="Jika belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, dan jam pemakaian." /><div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[["Daikin", "/brand/daikin"], ["Gree", "/brand/gree"], ["Midea", "/brand/midea"], ["Hisense", "/brand/hisense"], ["Sharp", "/brand/sharp"], ["Brand Lainnya", "/brand/lainnya"]].map(([title, href]) => <Link key={href} to={href} className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"><BadgeCheck className="mb-4 h-6 w-6 text-cyan-300" /><h3 className="mb-3 text-2xl font-black text-white">{title}</h3><span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">Lihat pilihan <ArrowRight className="h-4 w-4" /></span></Link>)}</div><div className="grid gap-4 md:grid-cols-3">{[["AC Split Rumah", "/katalog/ac-split-rumah", Home], ["AC Inverter", "/katalog/ac-inverter", Zap], ["AC Low Watt", "/katalog/ac-low-watt", Ruler]].map(([title, href, Icon]) => <Link key={href} to={href} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/30"><Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" /><h3 className="text-lg font-black text-white">{title}</h3></Link>)}</div></section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16"><SectionTitle eyebrow="FAQ" title="Pertanyaan umum jual AC Cilongok" /><div className="grid gap-5 md:grid-cols-2">{faqItems.map(([question, answer]) => <div key={question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"><h3 className="mb-3 font-bold text-white">{question}</h3><p className="text-sm leading-7 text-white/60">{answer}</p></div>)}</div></section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16"><div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10 lg:p-14"><h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mau beli AC area Cilongok dengan COD?</h2><p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">Kirim area, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, pilihan brand, kapasitas PK, estimasi pemasangan, dan opsi COD sesuai konfirmasi.</p><WhatsAppButton>Tanya COD Sekarang</WhatsAppButton></div></section>
      </main>

      <Footer />
    </div>
  )
}
