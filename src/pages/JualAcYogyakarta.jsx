import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  BadgeCheck,
  Building2,
  Home,
  MapPin,
  MessageCircle,
  Ruler,
  ShoppingBag,
  Truck,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const canonicalPath = "/jual-ac-yogyakarta"
const waMessage =
  "Halo RADJA AC, saya dari Yogyakarta. Mau tanya AC unit only / sekalian pasang untuk kebutuhan beberapa unit."

const brandChips = [
  "Daikin",
  "Gree",
  "Midea",
  "Hisense",
  "Sharp",
  "Panasonic",
  "LG",
  "Samsung",
  "Sansui",
  "TCL",
  "Polytron",
  "Aqua",
  "Toshiba",
  "Modena",
  "Akari",
  "Bestlife",
]

const areaChips = [
  "Kota Jogja",
  "Sleman",
  "Bantul",
  "Kulon Progo",
  "Gunungkidul",
  "Sekitarnya",
]

const deliveryTrustImages = [
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
    label: "Pengiriman Sharp",
    src: "https://www.radjaac.com/assets/gallery/pengiriman/radja-ac-loading-ac-sharp-truk-kuning.webp",
    alt: "Pengiriman stok AC Sharp RADJA AC dengan truk kuning",
  },
  {
    label: "Pengiriman Aqua",
    src: "https://www.radjaac.com/assets/gallery/pengiriman/radja-ac-pengiriman-stok-aqua-truk-putih.webp",
    alt: "Pengiriman stok AC Aqua RADJA AC dengan truk putih",
  },
]

const targetCards = [
  ["Rumah & Hunian", "Bantu pilih AC sesuai ukuran kamar, ruang keluarga, daya listrik, dan budget.", Home],
  ["Kost & Kontrakan", "Cocok untuk pembelian beberapa unit sekaligus dengan opsi brand hemat dan mudah perawatan.", Building2],
  ["Ruko, Toko & Kantor", "AC untuk area pelanggan, kasir, display produk, ruang kerja, dan kebutuhan proyek kecil.", ShoppingBag],
]

const processSteps = [
  ["Kirim lokasi & jumlah unit", "Sebutkan area Jogja, jumlah unit, kebutuhan unit only atau sekalian pasang, dan target budget."],
  ["Cek brand, PK & stok", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga."],
  ["Konfirmasi pengiriman / instalasi", "Harga final, rute, jadwal, dan kebutuhan material tambahan dikonfirmasi dulu sebelum unit disiapkan."],
]

const faqItems = [
  ["Apakah RADJA AC melayani jual AC area Yogyakarta?", "Ya. RADJA AC melayani konsultasi pembelian AC untuk area Yogyakarta dan sekitarnya, terutama untuk unit only, sekalian pasang, dan kebutuhan banyak unit sesuai konfirmasi lokasi."],
  ["Bisa beli unit only tanpa pemasangan?", "Bisa. Unit only cocok untuk pembeli yang sudah punya teknisi sendiri, kontraktor, pengelola kost, atau kebutuhan proyek."],
  ["Bisa sekalian instalasi di Jogja?", "Bisa dikonsultasikan dulu. Pemasangan menyesuaikan lokasi, jumlah unit, akses titik pemasangan, material tambahan, dan jadwal teknisi."],
  ["Apakah bisa pembelian banyak unit?", "Bisa. Untuk kost, ruko, toko, kantor, atau proyek, harga bisa dibuatkan penawaran khusus sesuai jumlah unit, brand, stok, lokasi, dan kebutuhan pemasangan."],
]

function WhatsAppButton({ children, message = waMessage, className = "" }) {
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

export default function JualAcYogyakarta() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Store", "LocalBusiness"],
    name: SITE_DATA.businessName,
    description:
      "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Yogyakarta dan sekitarnya, termasuk unit only, sekalian pasang, dan kebutuhan banyak unit sesuai konfirmasi lokasi.",
    url: `${SITE_DATA.baseUrl}${canonicalPath}`,
    logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    image: `${SITE_DATA.baseUrl}/assets/showroom/Showroom-utama.webp`,
    telephone: SITE_DATA.phoneNumber,
    priceRange: "Rp2 jutaan-Rp6 jutaan+",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Purwokerto",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    areaServed: ["Yogyakarta", "Sleman", "Bantul", "Kulon Progo", "Gunungkidul"].map((area) => ({
      "@type": "City",
      name: area,
    })),
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Jual AC Yogyakarta | Unit Only, Pasang & Banyak Unit — RADJA AC"
        description="RADJA AC melayani pembelian AC area Yogyakarta. Bisa unit only atau sekalian instalasi untuk rumah, kost, ruko, toko, kantor, dan kebutuhan banyak unit."
        canonicalPath={canonicalPath}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 lg:px-8 lg:pb-12 lg:pt-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <MapPin className="h-4 w-4" />
                JUAL AC AREA YOGYAKARTA
              </div>
              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.035em] sm:text-4xl md:text-5xl xl:text-6xl">
                Jual AC Yogyakarta
                <span className="block text-cyan-300">unit only, pasang, dan banyak unit</span>
              </h1>
              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                RADJA AC melayani konsultasi pembelian AC untuk area Yogyakarta dan sekitarnya. Cocok untuk rumah, kost, ruko, toko, kantor kecil, sampai kebutuhan proyek yang butuh unit only atau sekalian instalasi.
              </p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton>Tanya Harga AC Jogja</WhatsAppButton>
                <Link to="/katalog" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]">
                  Lihat Katalog AC
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-white/62 lg:justify-start">
                {["Unit only bisa", "Sekalian pasang", "Bisa banyak unit", "Cek stok dulu", "Harga proyek menyesuaikan"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">{item}</span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
              <div className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-950/75 p-3 shadow-[0_30px_90px_rgba(8,20,47,0.42)]">
                <img
                  src="/assets/showroom/Showroom-utama.webp"
                  alt="Showroom RADJA AC untuk konsultasi pembelian AC area Yogyakarta"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[340px] w-full rounded-[26px] object-cover object-center sm:h-[430px]"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:gap-3">
                {deliveryTrustImages.map(({ label, src, alt }) => (
                  <div key={src} className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(8,20,47,0.24)] sm:rounded-[22px]">
                    <img
                      src={src}
                      alt={alt}
                      decoding="async"
                      className="h-[112px] w-full object-cover transition duration-300 group-hover:scale-105 sm:h-[136px] lg:h-[132px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/82 to-transparent px-2 pb-2 pt-7 text-center text-[11px] font-black text-white sm:text-xs">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-center text-xs leading-6 text-white/45 sm:text-sm">
                Dokumentasi stok, material, dan pengiriman RADJA AC untuk bantu calon pembeli lebih yakin sebelum konsultasi.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <SectionTitle
            eyebrow="TARGET KEBUTUHAN"
            title="Cocok untuk rumah, kost, ruko, toko, kantor, dan proyek"
            description="Halaman ini dibuat untuk calon pembeli Jogja yang ingin cek AC satuan maupun banyak unit tanpa harus scroll terlalu panjang."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {targetCards.map(([title, description, Icon]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center">
                <Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
                <h2 className="mb-3 text-xl font-black text-white">{title}</h2>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <BadgeCheck className="mb-5 h-8 w-8 text-cyan-300" />
              <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl">Unit only</h2>
              <p className="mb-5 text-sm leading-7 text-white/62 sm:text-base">
                Cocok untuk pembeli yang sudah punya teknisi sendiri, kontraktor, pengelola kost, atau proyek yang hanya butuh pengadaan unit AC.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-white/62">
                {["Cek stok brand", "Harga banyak unit", "Pengiriman dikonfirmasi", "Cocok untuk proyek"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <Truck className="mb-5 h-8 w-8 text-cyan-300" />
              <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl">Unit + instalasi</h2>
              <p className="mb-5 text-sm leading-7 text-white/62 sm:text-base">
                Cocok untuk pembeli yang ingin sekalian dibantu estimasi titik indoor-outdoor, kebutuhan material, dan jadwal pemasangan.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-white/62">
                {["Pipa dicek dulu", "Kabel sesuai titik", "Jadwal teknisi", "Biaya transparan"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <SectionTitle
            eyebrow="ESTIMASI HARGA"
            title="Harga awal dibuat fleksibel sesuai jumlah unit"
            description="Untuk Jogja, harga final sebaiknya dikonfirmasi dulu karena tergantung stok, brand, jumlah unit, lokasi, dan kebutuhan instalasi."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["AC basic", "Unit only mulai 2 jutaan", "Pasang mulai 3 jutaan"],
              ["Low watt", "Unit only mulai 3 jutaan", "Pasang mulai 4 jutaan"],
              ["Inverter", "Unit only mulai 3 jutaan", "Pasang mulai 4 jutaan"],
              ["Banyak unit", "Bisa penawaran khusus", "Survey/konsultasi dulu"],
            ].map(([title, unit, install]) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-center">
                <h3 className="mb-3 text-lg font-black text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/62">{unit}</p>
                <p className="text-sm leading-7 text-cyan-200/80">{install}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <SectionTitle
                eyebrow="BRAND AC"
                title="Brand yang bisa dicek"
                description="Ditampilkan compact supaya tidak bikin halaman terlalu panjang. Stok dan harga tetap cek via WhatsApp."
              />
              <div className="flex flex-wrap justify-center gap-2">
                {brandChips.map((brand) => (
                  <span key={brand} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 text-sm font-semibold text-cyan-100">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <SectionTitle
                eyebrow="AREA JOGJA"
                title="Area layanan"
                description="Melayani Kota Yogyakarta, Sleman, Bantul, Kulon Progo, Gunungkidul, dan sekitar sesuai konfirmasi lokasi."
              />
              <div className="flex flex-wrap justify-center gap-2">
                {areaChips.map((area) => (
                  <span key={area} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-white/80">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <MessageCircle className="h-4 w-4" />
                CARA KONSULTASI
              </div>
              <h2 className="mb-5 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Kirim data singkat, nanti kami bantu arahkan</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                Untuk banyak unit, jangan buru-buru kunci harga. Kirim lokasi, jumlah unit, ukuran ruangan, dan kebutuhan unit only atau instalasi supaya estimasi lebih masuk.
              </p>
              <WhatsAppButton>Cek Harga & Stok Jogja</WhatsAppButton>
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

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <SectionTitle eyebrow="FAQ" title="Pertanyaan umum jual AC Yogyakarta" />
          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map(([question, answer]) => (
              <div key={question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="mb-3 font-bold text-white">{question}</h3>
                <p className="text-sm leading-7 text-white/60">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-20 lg:pt-10">
          <div className="rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-10">
            <Ruler className="mx-auto mb-4 h-8 w-8 text-[#25D366]" />
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">Mau cari AC area Jogja?</h2>
            <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Kirim lokasi, jumlah unit, kebutuhan unit only atau sekalian pasang, ukuran ruangan, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, dan opsi pemasangan.
            </p>
            <WhatsAppButton>Chat WhatsApp Sekarang</WhatsAppButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
