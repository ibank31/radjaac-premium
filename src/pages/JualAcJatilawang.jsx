import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { BadgeCheck, CheckCircle2, Home, MapPin, MessageCircle, Ruler, Truck, Zap } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const areas = ["Jatilawang", "Tunjung", "Tinggarjaya", "Kedungwringin", "Karanglewas", "Gunung Wetan", "Adisara", "Margasana", "Wangon", "Purwojati", "Rawalo", "Banyumas"]
const waMessage = "Halo RADJA AC, saya dari area Jatilawang. Mau tanya AC yang bisa COD/bayar di tempat. Mohon bantu cek stok, harga, rekomendasi PK, dan estimasi pemasangan AC."

function WhatsAppButton({ children = "Konsultasi AC Jatilawang" }) {
  return (
    <a href={buildWhatsAppUrl(waMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A]">
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

export default function JualAcJatilawang() {
  const faqItems = [
    ["Apakah RADJA AC melayani jual AC area Jatilawang?", "Ya. RADJA AC berbasis di Purwokerto dan melayani konsultasi pembelian AC untuk area Jatilawang dan sekitarnya."],
    ["Apakah bisa COD untuk area Jatilawang?", "Bisa untuk area dan kondisi tertentu setelah stok, jadwal, lokasi, dan kebutuhan pemasangan dikonfirmasi."],
    ["Bisa bantu pilih AC sesuai daya listrik?", "Bisa. Kirim daya listrik, ukuran ruangan, kebiasaan pemakaian, dan budget agar pilihan AC lebih sesuai."],
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Store", "LocalBusiness"],
    name: SITE_DATA.businessName,
    description: "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Jatilawang dan sekitarnya, termasuk cek stok, rekomendasi PK, opsi COD, dan estimasi pemasangan.",
    url: `${SITE_DATA.baseUrl}/jual-ac-jatilawang`,
    logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    image: `${SITE_DATA.baseUrl}/assets/showroom/Showroom-utama.webp`,
    telephone: SITE_DATA.phoneNumber,
    priceRange: "Rp3 jutaan-Rp6 jutaan+",
    address: { "@type": "PostalAddress", addressLocality: "Purwokerto", addressRegion: "Jawa Tengah", addressCountry: "ID" },
    areaServed: areas.map((area) => ({ "@type": "City", name: area })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead title="Jual AC Jatilawang Bisa COD | Stok & Pemasangan — RADJA AC" description="RADJA AC melayani jual AC area Jatilawang dan sekitarnya. Bisa konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi." canonicalPath="/jual-ac-jatilawang" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8">
        <section className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"><MapPin className="h-4 w-4" />JUAL AC AREA JATILAWANG</div>
            <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl xl:text-6xl">Jual AC Jatilawang<span className="block text-cyan-300">bisa COD, cek stok, dan pemasangan</span></h1>
            <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">RADJA AC Purwokerto melayani pembelian AC untuk area Jatilawang dan sekitarnya. Konsultasi stok, harga, rekomendasi PK, estimasi pemasangan, dan opsi COD/bayar di tempat sesuai konfirmasi lokasi, jadwal, serta kondisi pekerjaan.</p>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center"><WhatsAppButton>Tanya AC COD Jatilawang</WhatsAppButton><Link to="/katalog" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]">Lihat Katalog AC</Link></div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:mr-0"><div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]"><img src="/assets/showroom/Showroom-utama.webp" alt="Showroom RADJA AC untuk konsultasi jual AC Jatilawang" fetchPriority="high" decoding="async" className="h-[360px] w-full rounded-[26px] object-cover object-center sm:h-[460px]" /></div></div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto mb-9 max-w-3xl text-center"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">AMAN UNTUK LUAR PURWOKERTO</p><h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Beli AC area Jatilawang bisa lebih tenang</h2><p className="mx-auto max-w-2xl text-sm leading-7 text-white/62 sm:text-base">Untuk pembeli luar Purwokerto, stok, harga, jadwal, dan opsi pembayaran bisa dibahas dulu lewat WhatsApp.</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[["Bisa COD", "Pembayaran bisa diarahkan saat unit sampai atau saat pemasangan sesuai konfirmasi.", BadgeCheck], ["Cek stok dulu", "Tipe AC, harga, dan estimasi biaya dibahas sebelum jadwal dikunci.", MessageCircle], ["Pemasangan sesuai lokasi", "Rute, akses lokasi, dan titik indoor-outdoor dicek agar estimasi lebih jelas.", Truck]].map(([title, desc, Icon]) => <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center"><Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" /><h2 className="mb-3 text-lg font-black text-white">{title}</h2><p className="text-sm leading-7 text-white/60">{desc}</p></div>)}
          </div>
        </section>

        <section className="py-10"><div className="mx-auto mb-9 max-w-3xl text-center"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">AREA JATILAWANG</p><h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Area yang bisa konsultasi pembelian AC</h2></div><div className="flex flex-wrap justify-center gap-2.5">{areas.map((area) => <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/75">{area}</span>)}</div></section>

        <section className="py-10"><div className="grid gap-4 md:grid-cols-3">{[["AC Split Rumah", "/katalog/ac-split-rumah", Home], ["AC Inverter", "/katalog/ac-inverter", Zap], ["AC Low Watt", "/katalog/ac-low-watt", Ruler]].map(([title, href, Icon]) => <Link key={href} to={href} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/30"><Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" /><h3 className="text-lg font-black text-white">{title}</h3></Link>)}</div></section>

        <section className="py-10"><div className="mx-auto mb-9 max-w-3xl text-center"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">FAQ</p><h2 className="text-3xl font-black tracking-[-0.03em] sm:text-4xl">Pertanyaan umum jual AC Jatilawang</h2></div><div className="grid gap-5 md:grid-cols-2">{faqItems.map(([question, answer]) => <div key={question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"><h3 className="mb-3 font-bold text-white">{question}</h3><p className="text-sm leading-7 text-white/60">{answer}</p></div>)}</div></section>

        <section className="pb-8 pt-10"><div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10 lg:p-14"><h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mau beli AC area Jatilawang dengan COD?</h2><p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">Kirim area, ukuran ruangan, daya listrik, dan budget. RADJA AC bantu cek stok, pilihan brand, kapasitas PK, estimasi pemasangan, dan opsi COD sesuai konfirmasi.</p><WhatsAppButton>Tanya COD Sekarang</WhatsAppButton></div></section>
      </main>

      <Footer />
    </div>
  )
}