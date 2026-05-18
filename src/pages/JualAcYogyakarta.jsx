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
  "Halo RADJA AC, saya dari Yogyakarta. Mau tanya AC unit only / pengadaan banyak unit untuk kost, ruko, toko, kantor, atau proyek. Mohon bantu cek stok, harga, dan opsi pengiriman."

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
    label: "Pengiriman Sharp & Midea",
    src: "/assets/gallery/pengiriman/pengiriman-sharp-midea.webp",
    alt: "Pengiriman stok AC Sharp dan Midea RADJA AC",
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
  ["Kirim lokasi & jumlah unit", "Sebutkan area Jogja, jumlah unit, kebutuhan unit only atau pengiriman, dan target budget."],
  ["Cek brand, PK & stok", "RADJA AC bantu arahkan pilihan brand, kapasitas PK, tipe low watt/inverter, dan estimasi harga."],
  ["Konfirmasi pengiriman / opsi pasang", "Harga final, rute, jadwal pengiriman, dan kemungkinan pemasangan dikonfirmasi dulu sesuai lokasi, jumlah unit, dan kesiapan teknisi."],
]

const faqItems = [
  ["Bisa bantu kebutuhan AC untuk kos atau guest house di Jogja?", "Bisa. Anda tinggal kirim jumlah ruangan, ukuran tiap kamar, daya listrik, dan budget. Nanti kami bantu arahkan pilihan AC yang lebih masuk akal, terutama kalau kebutuhannya lebih dari satu unit."],
  ["Kalau cuma mau tanya harga AC dulu bisa?", "Bisa. Chat WhatsApp saja. Sebutkan brand yang diminati, ukuran ruangan, dan lokasi di Jogja. Kami bantu cek pilihan unit, stok, dan kisaran harga."],
  ["Kalau butuh pemasangan di Jogja gimana?", "Bisa dibahas dulu. Kami perlu cek foto titik indoor-outdoor, akses lokasi, panjang pipa, dan kondisi listrik. Dari situ baru kebutuhan pemasangan bisa dihitung lebih jelas."],
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
      "Toko AC Purwokerto yang melayani konsultasi pembelian AC untuk area Yogyakarta dan sekitarnya, terutama unit only, pengadaan banyak unit, opsi pengiriman, dan pemasangan sesuai konfirmasi lokasi.",
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
        title="Jual AC Yogyakarta | Unit Only & Pengadaan Banyak Unit — RADJA AC"
        description="RADJA AC melayani pembelian AC area Yogyakarta untuk unit only, pengadaan banyak unit, kost, ruko, toko, kantor, proyek, dan opsi pengiriman sesuai konfirmasi."
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
                Mau Beli AC di Jogja?
                <span className="block text-cyan-300">Bisa Konsultasi Dulu, Apalagi Kalau Butuh Beberapa Unit</span>
              </h1>
              <div className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                <p className="mb-4">
                  Di Jogja, kebutuhan AC macam-macam. Ada yang buat kamar kos, rumah tinggal, kontrakan, guest house, toko, kantor kecil, sampai usaha yang butuh beberapa unit sekaligus.
                </p>
                <p className="mb-4">
                  Daripada langsung pilih AC asal murah, lebih aman konsultasi dulu. Ceritakan kebutuhan Anda: ruangannya berapa, dipakai berapa lama tiap hari, daya listriknya berapa, dan budget-nya di kisaran berapa.
                </p>
                <p>
                  Nanti RADJA AC bantu cek pilihan brand, kapasitas PK, stok, dan kisaran harga yang masuk akal. Kalau butuh pemasangan di Jogja, detail teknis seperti titik indoor-outdoor, akses lokasi, panjang pipa, dan jadwal bisa dibahas setelah kondisi ruangan lebih jelas.
                </p>
              </div>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton>Konsultasi AC Jogja</WhatsAppButton>
                <Link to="/katalog" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]">
                  Lihat Pilihan AC
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-white/62 lg:justify-start">
                {["Unit only", "Pengadaan banyak unit", "Kost/ruko/proyek", "Cek stok dulu", "Pasang by konfirmasi"].map((item) => (
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
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <SectionTitle
            eyebrow="TARGET KEBUTUHAN"
            title="Cocok untuk kost, ruko, toko, kantor, dan proyek"
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
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-center sm:p-8">
              <BadgeCheck className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
              <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl">Unit only</h2>
              <p className="mb-5 text-sm leading-7 text-white/62 sm:text-base">
                Cocok untuk pembeli yang sudah punya teknisi sendiri, kontraktor, pengelola kost, toko, ruko, kantor, atau proyek yang hanya butuh pengadaan unit AC.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-white/62">
                {["Cek stok brand", "Harga banyak unit", "Pengiriman dikonfirmasi", "Cocok untuk proyek"].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-center sm:p-8">
              <Truck className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
              <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl">Pengiriman & opsi pasang</h2>
              <p className="mb-5 text-sm leading-7 text-white/62 sm:text-base">
                Pengiriman dan kemungkinan pemasangan dibahas sesuai lokasi, jumlah unit, akses titik pemasangan, kebutuhan material, dan jadwal teknisi.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-white/62">
                {["Rute dicek dulu", "Jumlah unit dihitung", "Pasang by konfirmasi", "Estimasi transparan"].map((item) => (
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
            description="Untuk Jogja, harga final sebaiknya dikonfirmasi dulu karena tergantung stok, brand, jumlah unit, lokasi, pengiriman, dan opsi pemasangan bila memungkinkan."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["AC basic", "Unit only mulai 2 jutaan", "Pengiriman/pasang by konfirmasi"],
              ["Low watt", "Unit only mulai 3 jutaan", "Pengiriman/pasang by konfirmasi"],
              ["Inverter", "Unit only mulai 3 jutaan", "Pengiriman/pasang by konfirmasi"],
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
          <div className="grid gap-5 lg:grid-cols-2">
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
                title="Area pengiriman"
                description="Melayani Kota Yogyakarta, Sleman, Bantul, Kulon Progo, Gunungkidul, dan sekitar sesuai konfirmasi lokasi, jumlah unit, dan rute."
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
                Untuk banyak unit, jangan buru-buru kunci harga. Kirim lokasi, jumlah unit, ukuran ruangan, dan kebutuhan unit only atau pengiriman supaya estimasi lebih masuk.
              </p>
              <WhatsAppButton>Cek Stok & Harga Jogja</WhatsAppButton>
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
              Kirim lokasi, jumlah unit, kebutuhan unit only atau pengadaan, ukuran ruangan, dan budget. RADJA AC bantu cek stok, rekomendasi PK, estimasi harga, opsi pengiriman, dan pemasangan bila memungkinkan.
            </p>
            <WhatsAppButton>Chat WhatsApp Sekarang</WhatsAppButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
