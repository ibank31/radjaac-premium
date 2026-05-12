import { Link } from "react-router-dom"
import { BadgeCheck, Building2, Home, MessageCircle, Power, Ruler, Sparkles, Zap } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const catalogItems = [
  {
    title: "AC Split Rumah",
    description: "Pilihan paling umum untuk kamar tidur, ruang keluarga, kos, ruang kerja, dan toko kecil.",
    href: "/katalog/ac-split-rumah",
    icon: Home,
    active: true,
  },
  {
    title: "AC Inverter",
    description: "Cocok untuk pemakaian rutin dan pelanggan yang ingin konsumsi listrik lebih efisien jangka panjang.",
    href: "#konsultasi-katalog",
    icon: Zap,
  },
  {
    title: "AC Low Watt",
    description: "Pilihan untuk rumah dengan daya listrik terbatas atau penggunaan bersama perangkat elektronik lain.",
    href: "#konsultasi-katalog",
    icon: Power,
  },
  {
    title: "AC Kantor / Komersial",
    description: "Untuk kantor, toko, ruang usaha, ruang meeting, atau area yang membutuhkan kapasitas lebih besar.",
    href: "#konsultasi-katalog",
    icon: Building2,
  },
  {
    title: "Panduan Kapasitas AC",
    description: "Bantu memperkirakan kebutuhan ½ PK, ¾ PK, 1 PK, 1.5 PK, hingga 2 PK sesuai ukuran ruangan.",
    href: "#panduan-pk",
    icon: Ruler,
  },
]

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil / ruang kerja"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang"],
  ["1 PK", "± 15–20 m²", "Kamar besar / ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga / kantor kecil"],
  ["2 PK", "± 30–40 m²", "Ruangan besar / usaha"],
]

function WhatsAppButton({ children = "Konsultasi Pilihan AC" }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

export default function KatalogAc() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Katalog AC Purwokerto & Banyumas | Panduan Pilih AC RADJA AC"
        description="Panduan memilih AC berdasarkan kebutuhan: AC Split Rumah, Inverter, Low Watt, AC Kantor, dan kapasitas PK. RADJA AC bantu rekomendasi unit sesuai ruangan, daya listrik, dan budget."
        canonicalPath="/katalog"
      />

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 text-center lg:px-8 lg:pb-14 lg:pt-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              PANDUAN KATALOG AC
            </div>

            <h1 className="mb-5 text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
              Pilih AC berdasarkan
              <span className="block text-cyan-300">kebutuhan ruangan Anda</span>
            </h1>

            <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Katalog RADJA AC dibuat sebagai panduan memilih jenis AC, bukan daftar stok real-time. Untuk harga, tipe terbaru, dan ketersediaan unit, tim kami akan bantu cek via WhatsApp.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton />
              <a
                href="#kategori-katalog"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
              >
                Lihat Kategori
              </a>
            </div>
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
            {catalogItems.map(({ title, description, href, icon: Icon, active }) => (
              <Link
                key={title}
                to={href.startsWith("/") ? href : undefined}
                href={!href.startsWith("/") ? href : undefined}
                className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-6 text-white/60">{description}</p>
                <div className="mt-4 text-xs font-semibold text-cyan-300">
                  {active ? "Lihat Detail" : "Konsultasikan"}
                </div>
              </Link>
            ))}
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
              RADJA AC menyediakan brand unggulan seperti Daikin, Gree, Midea, Hisense, Sansui, serta brand populer lainnya sesuai ketersediaan stok.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {["Daikin", "Gree", "Midea", "Hisense", "Sansui", "Brand Lainnya"].map((brand) => (
                <span key={brand} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                  {brand}
                </span>
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
                Kirim ukuran ruangan, daya listrik, dan budget. Tim RADJA AC akan bantu arahkan kategori AC dan brand yang paling sesuai.
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
