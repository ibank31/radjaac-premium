import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, Home, MapPin, MessageCircle, ShoppingBag, Store, Zap } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const WA_MESSAGE =
  "Halo RADJA AC, saya cari toko AC terdekat di Purwokerto/Banyumas. Saya mau cek stok, harga terbaru, rekomendasi PK, dan kebutuhan pemasangan."

const areaLinks = [
  ["Purwokerto", "/jual-ac-purwokerto"],
  ["Banyumas", "/jual-ac-banyumas"],
  ["Sokaraja", "/jual-ac-sokaraja"],
  ["Ajibarang", "/jual-ac-ajibarang"],
  ["Cilongok", "/jual-ac-cilongok"],
  ["Purbalingga", "/jual-ac-purbalingga"],
  ["Banjarnegara", "/jual-ac-banjarnegara"],
  ["Cilacap", "/jual-ac-cilacap"],
]

const needCards = [
  ["AC untuk rumah & kamar", "Cek AC split 1/2 PK sampai 1 PK untuk kamar, kos, kontrakan, dan ruang keluarga.", Home, "/katalog/ac-split-rumah"],
  ["AC low watt", "Pilihan untuk rumah dengan daya listrik terbatas atau pemakaian harian yang tetap nyaman.", Zap, "/katalog/ac-low-watt"],
  ["AC toko & kantor", "Untuk toko, kantor kecil, cafe, ruang usaha, dan pembelian beberapa unit sekaligus.", Building2, "/katalog/ac-kantor-komersial"],
]

const brandLinks = [
  ["Daikin", "/brand/daikin"],
  ["Gree", "/brand/gree"],
  ["Midea", "/brand/midea"],
  ["Hisense", "/brand/hisense"],
  ["Sharp", "/brand/sharp"],
  ["Panasonic", "/brand/panasonic"],
  ["Sansui", "/brand/sansui"],
  ["Brand lainnya", "/brand/lainnya"],
]

const faqItems = [
  [
    "Apakah RADJA AC bisa jadi pilihan toko AC terdekat di Purwokerto?",
    "Bisa. RADJA AC melayani calon pembeli AC untuk area Purwokerto, Banyumas, Sokaraja, dan sekitarnya. Anda bisa chat dulu untuk cek stok, harga, rekomendasi PK, dan pemasangan.",
  ],
  [
    "Apakah harus datang ke toko dulu untuk tanya harga AC?",
    "Tidak harus. Anda bisa mulai dari WhatsApp untuk cek stok, kisaran harga, pilihan brand, dan estimasi kebutuhan pemasangan sebelum datang atau membeli.",
  ],
  [
    "Apa saja brand AC yang bisa dicek lewat RADJA AC?",
    "RADJA AC menyediakan pilihan brand seperti Daikin, Gree, Midea, Hisense, Sharp, Panasonic, Sansui, LG, Samsung, Aqua, Polytron, TCL, Ariston, Mitsubishi, Toshiba, Modena, FLife, Reiwa, dan opsi lain sesuai stok terbaru.",
  ],
  [
    "Apakah bisa dibantu pilih AC berdasarkan ukuran ruangan?",
    "Bisa. Kirim ukuran ruangan, daya listrik, lokasi pemasangan, dan budget agar rekomendasi AC lebih masuk akal sebelum membeli.",
  ],
]

function WhatsAppButton({ children = "Cek Stok & Harga via WhatsApp", className = "" }) {
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

export default function TokoAcTerdekatPurwokerto() {
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
    "@type": ["Store", "LocalBusiness", "HVACBusiness"],
    name: SITE_DATA.businessName,
    alternateName: "RADJA AC Purwokerto",
    url: `${SITE_DATA.baseUrl}/toko-ac-terdekat-purwokerto`,
    logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    image: `${SITE_DATA.baseUrl}/assets/showroom/Showroom-utama.webp`,
    telephone: SITE_DATA.phoneNumber,
    priceRange: "Rp3 jutaan-Rp6 jutaan+",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Dr. Gumbreg, Pamijen",
      addressLocality: "Sokaraja",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    areaServed: SITE_DATA.serviceAreas.map((area) => ({ "@type": "City", name: area })),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      telephone: SITE_DATA.phoneNumber,
      areaServed: "ID",
      availableLanguage: "Indonesian",
    },
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Toko AC Terdekat Purwokerto | Cek Stok & Harga RADJA AC"
        description="Cari toko AC terdekat di Purwokerto dan Banyumas? RADJA AC bantu cek stok, harga terbaru, rekomendasi PK, pilihan brand, dan pemasangan via WhatsApp."
        canonicalPath="/toko-ac-terdekat-purwokerto"
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
                TOKO AC TERDEKAT PURWOKERTO
              </div>
              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl xl:text-6xl">
                Cari toko AC terdekat?
                <span className="block text-cyan-300">Cek stok & harga di RADJA AC</span>
              </h1>
              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Mau beli AC di Purwokerto, Sokaraja, Banyumas, atau area sekitar? Chat RADJA AC dulu untuk cek unit ready, harga terbaru, rekomendasi PK, pilihan brand, dan kebutuhan pemasangan sebelum datang atau membeli.
              </p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton />
                <Link to="/katalog" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]">
                  Lihat Katalog AC
                </Link>
              </div>
              <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2 text-sm text-white/62 lg:mx-0 lg:justify-start">
                {["Cek stok", "Tanya harga", "Pilih PK", "Cek brand", "Bisa bantu pemasangan"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-center">{item}</span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]">
                <img
                  src="/assets/showroom/Showroom-utama.webp"
                  alt="Toko AC terdekat RADJA AC Purwokerto"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[360px] w-full rounded-[26px] object-cover object-center sm:h-[460px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Mulai dari WhatsApp", "Tidak perlu bingung dulu. Kirim kebutuhan ruangan, daya listrik, area pemasangan, dan budget.", MessageCircle],
              ["Cek stok & harga", "RADJA AC bantu cek pilihan unit, brand, tipe, dan kisaran harga yang masuk akal.", ShoppingBag],
              ["Koordinasi pemasangan", "Pembelian unit bisa dilanjutkan dengan kebutuhan pemasangan sesuai kondisi lokasi.", CheckCircle2],
            ].map(([title, description, Icon]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center">
                <Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
                <h2 className="mb-3 text-xl font-black text-white">{title}</h2>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle
            eyebrow="PILIH KEBUTUHAN"
            title="Beli AC lebih gampang kalau mulai dari kebutuhan"
            description="Brand penting, tapi kapasitas PK, daya listrik, dan kondisi ruangan tetap harus dipikirkan sebelum membeli."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {needCards.map(([title, description, Icon, href]) => (
              <Link key={href} to={href} className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <Icon className="mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="mb-3 text-xl font-black text-white">{title}</h3>
                <p className="mb-5 text-sm leading-7 text-white/60">{description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                  Cek pilihan <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Store className="h-4 w-4" />
                BRAND & STOK
              </div>
              <h2 className="mb-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Cek brand AC yang ready sebelum datang</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                RADJA AC menyediakan pilihan AC dari brand populer dan opsi ekonomis sesuai stok terbaru. Kalau masih bingung pilih brand, mulai dari kebutuhan ruangan dan budget dulu.
              </p>
              <WhatsAppButton>Tanya Brand yang Ready</WhatsAppButton>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {brandLinks.map(([label, href]) => (
                  <Link key={href} to={href} className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-center text-sm font-bold text-white/76 transition hover:border-cyan-300/30 hover:text-cyan-200">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle
            eyebrow="AREA LAYANAN"
            title="Cari AC dari area Purwokerto dan sekitarnya"
            description="Pilih area terdekat untuk melihat halaman penjualan lokal, atau langsung chat jika ingin cek stok dan pemasangan."
          />
          <div className="flex flex-wrap justify-center gap-2.5">
            {areaLinks.map(([label, href]) => (
              <Link key={href} to={href} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/15">
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <SectionTitle
            eyebrow="FAQ"
            title="Pertanyaan sebelum beli AC"
            description="Jawaban singkat untuk calon pembeli yang sedang mencari toko AC terdekat di Purwokerto dan Banyumas."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map(([question, answer]) => (
              <div key={question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <h3 className="font-black text-white">{question}</h3>
                </div>
                <p className="text-sm leading-7 text-white/60">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 text-center shadow-[0_35px_90px_rgba(8,145,178,0.12)] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#25D366]/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex justify-center text-cyan-300"><MapPin className="h-10 w-10" /></div>
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mau cek toko AC terdekat sekarang?</h2>
              <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">
                Chat RADJA AC untuk cek stok, harga terbaru, rekomendasi PK, brand yang ready, dan kebutuhan pemasangan di area Anda.
              </p>
              <WhatsAppButton>Chat RADJA AC Sekarang</WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
