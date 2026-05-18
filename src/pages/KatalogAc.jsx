import { Link } from "react-router-dom"
import { BadgeCheck, Building2, Home, MessageCircle, Power, Ruler, Zap } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const WA_MESSAGE =
  "Halo RADJA AC, saya mau cari AC yang cocok. Mohon bantu cek pilihan dan kisaran harganya."

const catalogItems = [
  {
    title: "AC Split Rumah",
    description: "Untuk kamar tidur, ruang keluarga, kos, ruang kerja, dan toko kecil.",
    href: "/katalog/ac-split-rumah",
    icon: Home,
    active: true,
  },
  {
    title: "AC Inverter",
    description: "Untuk pemakaian rutin dan efisiensi listrik jangka panjang.",
    href: "/katalog/ac-inverter",
    icon: Zap,
    active: true,
  },
  {
    title: "AC Low Watt",
    description: "Untuk rumah dengan daya listrik terbatas.",
    href: "/katalog/ac-low-watt",
    icon: Power,
    active: true,
  },
  {
    title: "AC Kantor / Komersial",
    description: "Untuk kantor, toko, cassette, ruang usaha, dan pembelian banyak unit.",
    href: "/katalog/ac-kantor-komersial",
    icon: Building2,
    active: true,
  },
  {
    title: "Panduan Kapasitas AC",
    description: "Bantu perkirakan ½ PK sampai 2 PK sesuai ukuran ruangan.",
    href: "#panduan-pk",
    icon: Ruler,
  },
]

const heroCards = [
  ["AC Split Rumah", "Kamar, kos, ruang keluarga"],
  ["AC Inverter", "Pemakaian rutin"],
  ["Low Watt", "Daya listrik terbatas"],
]

const brandLinks = [
  { label: "Daikin", to: "/brand/daikin" },
  { label: "Gree", to: "/brand/gree" },
  { label: "Midea", to: "/brand/midea" },
  { label: "Hisense", to: "/brand/hisense" },
  { label: "Sansui", to: "/brand/sansui" },
  { label: "Brand Lainnya", to: "/brand/lainnya" },
]

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil / ruang kerja"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang"],
  ["1 PK", "± 15–20 m²", "Kamar besar / ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga / kantor kecil"],
  ["2 PK", "± 30–40 m²", "Ruangan besar / usaha"],
]

function WhatsAppButton({ children = "Konsultasi Pilihan AC", className = "" }) {
  return (
    <a
      href={buildWhatsAppUrl(WA_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

function CategoryLink({ item }) {
  const content = (
    <>
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
        <item.icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
      <p className="text-sm leading-6 text-white/60">{item.description}</p>
      <div className="mt-4 text-xs font-semibold text-cyan-300">
        {item.active ? "Lihat Detail" : "Lihat Panduan"}
      </div>
    </>
  )

  const className = "rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"

  if (item.href.startsWith("/")) {
    return <Link to={item.href} className={className}>{content}</Link>
  }

  return <a href={item.href} className={className}>{content}</a>
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[34px] border border-cyan-300/15 bg-slate-950/70 p-4 shadow-[0_28px_80px_rgba(8,20,47,0.42)] lg:mr-0">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-blue-500/12 blur-3xl" />

      <div className="relative rounded-[28px] border border-white/10 bg-white/[0.035] p-4">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Mulai dari kebutuhan</p>
        <div className="space-y-3">
          {heroCards.map(([title, note], index) => (
            <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-sm font-black text-cyan-300">
                {index + 1}
              </span>
              <div className="text-left">
                <h3 className="text-sm font-bold text-white">{title}</h3>
                <p className="mt-0.5 text-xs leading-5 text-white/50">{note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4 text-left">
          <p className="text-sm font-bold text-white">Belum tahu pilih yang mana?</p>
          <p className="mt-1 text-xs leading-5 text-white/55">Kirim ukuran ruangan dan daya listrik, tim RADJA AC bantu arahkan.</p>
        </div>
      </div>
    </div>
  )
}

export default function KatalogAc() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Katalog AC Purwokerto & Banyumas | Panduan Pilih AC RADJA AC"
        description="Panduan memilih AC untuk rumah, kos, kantor kecil, toko, dan kebutuhan usaha di Purwokerto & Banyumas. RADJA AC bantu rekomendasi unit sesuai ruangan, daya listrik, dan budget."
        canonicalPath="/katalog"
      />

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-24 lg:px-8 lg:pb-14 lg:pt-32">
          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16">
            <div className="text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                PANDUAN PILIH AC
              </div>

              <h1 className="mb-5 max-w-2xl text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                Pilih AC sesuai
                <span className="block text-cyan-300">kebutuhan ruangan</span>
              </h1>

              <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Mulai dari luas ruangan, daya listrik, dan pola pemakaian. RADJA AC membantu memilih AC untuk rumah, kos, kantor kecil, toko, dan kebutuhan usaha di Purwokerto, Sokaraja, Banyumas, dan sekitarnya.
              </p>

              <div className="mx-auto flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:mx-0 lg:justify-start">
                <WhatsAppButton className="w-full sm:w-auto" />
                <a
                  href="#kategori-katalog"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05] sm:w-auto"
                >
                  Lihat Kategori
                </a>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section id="kategori-katalog" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">KATEGORI AC</p>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mulai dari kebutuhan, baru pilih brand</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Jika belum tahu mau brand apa, mulai dari jenis ruangan, daya listrik, dan pola pemakaian harian.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {catalogItems.map((item) => <CategoryLink key={item.title} item={item} />)}
          </div>
        </section>

        <section id="panduan-pk" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="text-center lg:text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">PANDUAN PK</p>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Estimasi kapasitas AC untuk ruangan</h2>
              <p className="text-sm leading-7 text-white/60 sm:text-base">
                Panduan ini hanya estimasi awal. Kondisi ruangan, jumlah orang, paparan matahari, dan tinggi plafon tetap perlu dipertimbangkan sebelum membeli.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
              <div className="divide-y divide-white/10">
                {pkGuide.map(([pk, area, note]) => (
                  <div key={pk} className="grid grid-cols-[70px_1fr] gap-4 px-5 py-4 sm:grid-cols-[0.8fr_1fr_1.4fr] sm:items-center">
                    <div className="text-xl font-black text-cyan-300">{pk}</div>
                    <div className="text-sm font-semibold text-white sm:text-base">{area}</div>
                    <div className="col-start-2 text-sm leading-6 text-white/55 sm:col-auto">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 text-center sm:p-8 lg:p-10">
            <div className="mb-4 flex justify-center text-cyan-300"><BadgeCheck className="h-10 w-10" /></div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">Brand bisa disesuaikan setelah kebutuhan jelas</h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              RADJA AC menyediakan brand unggulan seperti Daikin, Gree, Midea, Hisense, Sansui, Sharp, Panasonic, serta brand populer lainnya sesuai stok dan kebutuhan ruangan.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {brandLinks.map((brand) => (
                <Link
                  key={brand.to}
                  to={brand.to}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/15"
                >
                  {brand.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="konsultasi-katalog" className="mx-auto max-w-7xl px-6 pb-14 pt-8 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 text-center shadow-[0_35px_90px_rgba(8,145,178,0.12)] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#25D366]/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex justify-center text-cyan-300"><MessageCircle className="h-10 w-10" /></div>
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Bingung mulai dari kategori mana?</h2>
              <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">
                Kirim ukuran ruangan, daya listrik, lokasi area Purwokerto/Banyumas, dan budget. Tim RADJA AC akan bantu arahkan kategori AC dan brand yang paling sesuai.
              </p>
              <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
