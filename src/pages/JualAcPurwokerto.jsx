import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, BookOpen, Building2, CheckCircle2, Home, MapPin, MessageCircle, Ruler, ShoppingBag, Store, Zap } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const WA_MESSAGE = "Halo RADJA AC, saya mau beli AC di Purwokerto. Mohon bantu rekomendasi merek, tipe, PK, stok, harga, dan estimasi pemasangan."

const brandLinks = [
  ["Daikin", "Brand premium untuk rumah, kantor, dan pemakaian rutin.", "/brand/daikin"],
  ["Midea", "Pilihan populer untuk rumah, kos, dan kebutuhan harian.", "/brand/midea"],
  ["Gree", "Pilihan AC untuk rumah dan kebutuhan komersial.", "/brand/gree"],
  ["Hisense", "Alternatif modern untuk rumah, toko, dan ruang keluarga.", "/brand/hisense"],
  ["Sansui", "Pilihan ekonomis untuk pendinginan harian.", "/brand/sansui"],
  ["Brand Lainnya", "Cek Sharp, Panasonic, dan stok brand lain.", "/brand/lainnya"],
]

const categoryLinks = [
  ["AC Split Rumah", "Untuk kamar tidur, ruang keluarga, kos, kontrakan, dan toko kecil.", "/katalog/ac-split-rumah", Home],
  ["AC Inverter", "Untuk pemakaian rutin yang butuh suhu stabil dan nyaman.", "/katalog/ac-inverter", Zap],
  ["AC Low Watt", "Untuk rumah dengan daya listrik terbatas.", "/katalog/ac-low-watt", Ruler],
  ["AC Kantor & Komersial", "Untuk kantor, toko, cafe, cassette, dan pembelian banyak unit.", "/katalog/ac-kantor-komersial", Building2],
]

const pkGuide = [
  ["1/2 PK", "± 9–12 m²", "Kamar kecil, kos, ruang kerja kecil"],
  ["3/4 PK", "± 12–15 m²", "Kamar sedang atau ruang santai"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor kecil, toko"],
  ["2 PK", "± 30–40 m²", "Ruangan besar dan kebutuhan usaha"],
]

const articleLinks = [
  ["Harga AC Daikin Purwokerto", "/artikel/harga-ac-daikin-purwokerto"],
  ["Daikin Inverter Purwokerto", "/artikel/daikin-inverter-purwokerto"],
  ["Toko AC Purwokerto + Konsultasi PK", "/artikel/toko-ac-purwokerto-yang-bisa-konsultasi-pk"],
  ["AC 1 PK untuk ruangan berapa?", "/artikel/ac-1-pk-untuk-ruangan-berapa"],
  ["AC Inverter vs Low Watt", "/artikel/ac-inverter-vs-low-watt"],
  ["AC untuk kamar 3x4", "/artikel/cara-memilih-ac-untuk-kamar-3x4"],
]

const faqItems = [
  ["Apakah RADJA AC menjual AC untuk Purwokerto dan Banyumas?", "Ya. RADJA AC melayani pembelian AC untuk Purwokerto, Banyumas, dan area sekitar dengan pilihan brand resmi sesuai stok yang tersedia."],
  ["Apakah bisa tanya harga AC sebelum datang ke toko?", "Bisa. Calon pembeli dapat menghubungi WhatsApp RADJA AC untuk cek stok, rekomendasi PK, pilihan brand, dan estimasi kebutuhan pemasangan."],
  ["Apakah bisa dibantu memilih AC berdasarkan ukuran ruangan?", "Bisa. Kirim ukuran ruangan, tinggi plafon, daya listrik, foto titik indoor-outdoor, dan kebutuhan pemakaian agar rekomendasi lebih akurat."],
  ["Apakah pembelian AC bisa sekaligus pemasangan?", "Bisa. Pembelian unit dapat dilanjutkan dengan layanan pemasangan sesuai kondisi lokasi dan kebutuhan instalasi."],
]

function WhatsAppButton({ children = "Konsultasi Beli AC", className = "" }) {
  return (
    <a href={buildWhatsAppUrl(WA_MESSAGE)} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] transition hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}>
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

export default function JualAcPurwokerto() {
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
    description: SITE_DATA.businessDescription,
    url: `${SITE_DATA.baseUrl}/jual-ac-purwokerto`,
    logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    image: `${SITE_DATA.baseUrl}/assets/showroom/Showroom-utama.webp`,
    telephone: SITE_DATA.phoneNumber,
    priceRange: "Rp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Purwokerto",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    areaServed: SITE_DATA.serviceAreas.map((area) => ({ "@type": "City", name: area })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Jual AC Purwokerto — Toko AC, Harga, Daikin, Inverter | RADJA AC"
        description="RADJA AC melayani jual AC Purwokerto & Banyumas. Pilihan Daikin, Midea, Gree, Hisense, Sansui, Sharp, Panasonic. Konsultasi PK, cek stok, harga, dan pemasangan via WhatsApp."
        canonicalPath="/jual-ac-purwokerto"
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
                <ShoppingBag className="h-4 w-4" />
                TOKO AC PURWOKERTO & BANYUMAS
              </div>
              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl xl:text-6xl">
                Jual AC Purwokerto
                <span className="block text-cyan-300">konsultasi dulu, baru pilih unit</span>
              </h1>
              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                RADJA AC membantu calon pembeli memilih AC yang sesuai untuk rumah, kamar, kos, kantor, toko, cafe, dan kebutuhan proyek. Cek pilihan Daikin, Midea, Gree, Hisense, Sansui, Sharp, Panasonic, stok unit, harga, kapasitas PK, dan kebutuhan pemasangan lewat WhatsApp.
              </p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton />
                <a href="#pilih-brand" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]">Lihat Brand & Kategori</a>
              </div>
              <div className="flex max-w-2xl flex-wrap gap-2 text-sm text-white/62">
                {["Jual AC Purwokerto", "Toko AC Purwokerto", "Harga AC Purwokerto", "AC Daikin Purwokerto", "AC inverter Purwokerto"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">{item}</span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]">
                <img src="/assets/showroom/Showroom-utama.webp" alt="Showroom dan toko AC RADJA AC Purwokerto" fetchPriority="high" decoding="async" className="h-[360px] w-full rounded-[26px] object-cover object-center sm:h-[460px]" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Konsultasi sebelum beli", "Ukuran ruangan, daya listrik, dan pemakaian dicek dulu agar pilihan AC lebih tepat.", MessageCircle],
              ["Pilihan brand lengkap", "Tersedia Daikin, Midea, Gree, Hisense, Sansui, Sharp, Panasonic, dan brand resmi lainnya.", Store],
              ["Bisa bantu instalasi", "Pembelian unit bisa dilanjutkan dengan pemasangan rapi sesuai kondisi lokasi.", CheckCircle2],
            ].map(([title, description, Icon]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <Icon className="mb-5 h-8 w-8 text-cyan-300" />
                <h2 className="mb-3 text-xl font-black text-white">{title}</h2>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pilih-brand" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle eyebrow="BRAND AC" title="Pilih brand AC yang sering dicari pembeli" description="Halaman brand membantu Anda membandingkan pilihan berdasarkan kebutuhan, bukan hanya nama merek." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {brandLinks.map(([title, description, href]) => (
              <Link key={href} to={href} className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <BadgeCheck className="mb-4 h-6 w-6 text-cyan-300" />
                <h3 className="mb-3 text-2xl font-black text-white">{title}</h3>
                <p className="mb-5 text-sm leading-7 text-white/58">{description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">Lihat pilihan <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle eyebrow="KATEGORI AC" title="Mulai dari kebutuhan ruangan" description="Jika belum yakin merek apa yang cocok, mulai dari tipe ruangan, daya listrik, dan jam pemakaian." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categoryLinks.map(([title, description, href, Icon]) => (
              <Link key={href} to={href} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/30">
                <Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="mb-3 text-xl font-black text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/58">{description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200"><Ruler className="h-4 w-4" />PANDUAN PK AC</div>
              <h2 className="mb-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Jangan salah kapasitas AC</h2>
              <p className="mb-6 text-sm leading-7 text-white/64 sm:text-base">Salah memilih PK bisa membuat ruangan lama dingin atau unit bekerja terlalu berat. Gunakan panduan ini sebagai perkiraan awal sebelum konsultasi.</p>
              <WhatsAppButton>Cek PK yang Cocok</WhatsAppButton>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
              <div className="divide-y divide-white/10">
                {pkGuide.map(([pk, area, note]) => (
                  <div key={pk} className="grid grid-cols-[70px_1fr] gap-4 px-5 py-4 sm:grid-cols-[0.75fr_1fr_1.35fr] sm:items-center">
                    <div className="text-xl font-black text-cyan-300">{pk}</div>
                    <div className="text-sm font-semibold text-white sm:text-base">{area}</div>
                    <div className="col-start-2 text-sm leading-6 text-white/55 sm:col-auto">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cyan-200"><MapPin className="h-4 w-4" />AREA LAYANAN</div>
                <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl">Melayani Purwokerto, Banyumas, dan sekitar</h2>
                <p className="text-sm leading-7 text-white/64 sm:text-base">Fokus utama RADJA AC adalah membantu pembeli AC lokal mendapatkan unit yang sesuai kebutuhan, mudah konsultasi, dan jelas tindak lanjutnya.</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SITE_DATA.serviceAreas.slice(0, 10).map((area) => <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/75">{area}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle eyebrow="PANDUAN PEMBELI" title="Baca dulu sebelum menentukan AC" description="Artikel ini membantu menangkap pertanyaan calon pembeli dari Google dan mengarahkan mereka ke pilihan yang lebih tepat." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articleLinks.map(([title, href]) => (
              <Link key={href} to={href} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <BookOpen className="mb-4 h-6 w-6 text-cyan-300" />
                <h3 className="mb-4 text-lg font-black text-white">{title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">Baca panduan <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle eyebrow="FAQ" title="Pertanyaan umum sebelum beli AC" />
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
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mau beli AC tapi belum yakin pilih yang mana?</h2>
            <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">Kirim ukuran ruangan, daya listrik, foto lokasi, dan budget. RADJA AC bantu cek pilihan brand, kapasitas PK, stok, harga, dan estimasi pemasangan.</p>
            <WhatsAppButton>Konsultasi & Cek Harga AC</WhatsAppButton>
          </div>
        </section>
      </main>

      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}
