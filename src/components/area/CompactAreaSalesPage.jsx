import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Home,
  MapPin,
  MessageCircle,
  Ruler,
  Truck,
  Zap,
} from "lucide-react"

import SeoHead from "../SeoHead"
import Navbar from "../Navbar"
import Footer from "../Footer"
import WhatsappIcon from "../ui/WhatsappIcon"
import { SITE_DATA } from "../../constants/siteData"
import { buildWhatsAppUrl } from "../../utils/whatsapp"

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

const heroTrustImages = [
  {
    label: "Stok AC",
    src: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-01-thumb.webp",
    alt: "Stok unit AC Gree RADJA AC Purwokerto",
  },
  {
    label: "Material",
    src: "/assets/gallery/thumb/material-instalasi-ac-radja-ac-01-thumb.webp",
    alt: "Material instalasi AC RADJA AC Purwokerto",
  },
  {
    label: "Gudang",
    src: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-02-thumb.webp",
    alt: "Gudang stok AC Gree RADJA AC Purwokerto",
  },
  {
    label: "Daikin Gree",
    src: "/assets/gallery/thumb/gudang-stok-ac-daikin-gree-radja-ac-01-thumb.webp",
    alt: "Gudang stok AC Daikin dan Gree RADJA AC Purwokerto",
  },
]

function WhatsAppButton({ message, children, className = "" }) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
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
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl text-sm leading-7 text-white/62 sm:text-base">{description}</p> : null}
    </div>
  )
}

export default function CompactAreaSalesPage({ config }) {
  const valueItems = [
    ["Cek stok & harga dulu", config.valueStockText, MessageCircle],
    ["Bantu pilih PK", config.valuePkText, BadgeCheck],
    ["Pemasangan sesuai lokasi", config.valueInstallText, Truck],
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Store", "LocalBusiness"],
    name: SITE_DATA.businessName,
    description: config.localBusinessDescription,
    url: `${SITE_DATA.baseUrl}${config.canonicalPath}`,
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
    areaServed: config.schemaAreas.map((area) => ({ "@type": "City", name: area })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title={config.seoTitle}
        description={config.seoDescription}
        canonicalPath={config.canonicalPath}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 lg:px-8 lg:pb-12 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <MapPin className="h-4 w-4" />
                {config.heroBadge}
              </div>
              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl xl:text-6xl">
                {config.h1}
                <span className="block text-cyan-300">{config.heroHighlight}</span>
              </h1>
              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                {config.heroDescription}
              </p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton message={config.waMessage}>{config.primaryCta}</WhatsAppButton>
                <Link to="/katalog" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]">
                  Lihat Katalog AC
                </Link>
              </div>
              <div className="mb-5 flex flex-wrap justify-center gap-2 text-sm text-white/62 lg:justify-start">
                {["Cek stok dulu", "Rekomendasi PK", "Estimasi pasang", "COD sesuai konfirmasi"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">{item}</span>
                ))}
              </div>
              {config.relatedAreaLinks?.length ? (
                <div className="text-center text-xs leading-6 text-white/45 sm:text-sm lg:text-left">
                  Area terkait: {config.relatedAreaLinks.map(([label, href], index) => (
                    <span key={href}>
                      <Link to={href} className="font-semibold text-cyan-200/80 hover:text-cyan-200">{label}</Link>
                      {index < config.relatedAreaLinks.length - 1 ? <span>, </span> : null}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]">
                <img
                  src="/assets/showroom/Showroom-utama.webp"
                  alt={`Showroom RADJA AC untuk konsultasi ${config.h1}`}
                  fetchPriority="high"
                  decoding="async"
                  className="h-[340px] w-full rounded-[26px] object-cover object-center sm:h-[430px]"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:gap-3">
                {heroTrustImages.map(({ label, src, alt }) => (
                  <div key={src} className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(8,20,47,0.24)] sm:rounded-[22px]">
                    <img
                      src={src}
                      alt={alt}
                      decoding="async"
                      className="h-[118px] w-full object-cover transition duration-300 group-hover:scale-105 sm:h-[140px] lg:h-[136px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/82 to-transparent px-2 pb-2 pt-7 text-center text-[11px] font-black text-white sm:text-xs">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <SectionTitle
            eyebrow="KONSULTASI PEMBELIAN"
            title={config.valueTitle}
            description={config.valueDescription}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {valueItems.map(([title, description, Icon]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center">
                <Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
                <h2 className="mb-3 text-xl font-black text-white">{title}</h2>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Truck className="h-4 w-4" />
                ALUR BELI AC
              </div>
              <h2 className="mb-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Cek kebutuhan dulu, baru kunci jadwal</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                {config.processDescription}
              </p>
              <WhatsAppButton message={config.waMessage}>Cek Harga & Jadwal</WhatsAppButton>
            </div>
            <div className="grid gap-4">
              {config.processSteps.map(([title, description], index) => (
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

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <SectionTitle
            eyebrow="PILIHAN AC"
            title="Mulai dari brand atau kebutuhan"
            description="Jika belum yakin memilih merek, mulai dari ukuran ruangan, daya listrik, dan jam pemakaian."
          />
          <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {brandLinks.map(([title, href]) => (
              <Link key={href} to={href} className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <BadgeCheck className="mb-3 h-5 w-5 text-cyan-300" />
                <h3 className="mb-2 text-lg font-black text-white">{title}</h3>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 sm:text-sm">Lihat pilihan <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categoryLinks.map(([title, href, Icon]) => (
              <Link key={href} to={href} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/30">
                <Icon className="mx-auto mb-4 h-7 w-7 text-cyan-300" />
                <h3 className="text-base font-black text-white sm:text-lg">{title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <SectionTitle eyebrow="FAQ" title={`Pertanyaan umum ${config.h1}`} />
          <div className="grid gap-5 md:grid-cols-2">
            {config.faqItems.map(([question, answer]) => (
              <div key={question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="mb-3 font-bold text-white">{question}</h3>
                <p className="text-sm leading-7 text-white/60">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-20 lg:pt-10">
          <div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10">
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">{config.finalCtaTitle}</h2>
            <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              {config.finalCtaDescription}
            </p>
            <WhatsAppButton message={config.waMessage}>Tanya AC Sekarang</WhatsAppButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
