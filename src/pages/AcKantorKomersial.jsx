import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Coffee,
  Factory,
  Home,
  Landmark,
  MessageCircle,
  PackageCheck,
  School,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
  Wind,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const WA_MESSAGE = "Halo RADJA AC, saya mau konsultasi kebutuhan AC untuk kost/kantor/proyek/banyak unit. Mohon bantu cek rekomendasi unit, jumlah AC, brand, stok, dan estimasi pemasangan."
const WA_LINK = buildWhatsAppUrl(WA_MESSAGE)

const commercialNeeds = [
  {
    title: "Jam operasional lebih lama",
    description: "Kost, kantor, toko, cafe, dan ruang usaha biasanya butuh AC menyala lebih lama dibanding rumah biasa.",
    icon: Users,
  },
  {
    title: "Beban panas lebih besar",
    description: "Jumlah orang, lampu, mesin, pintu sering terbuka, dan aktivitas ruangan bisa membuat AC bekerja lebih berat.",
    icon: Factory,
  },
  {
    title: "Banyak titik perlu rapi",
    description: "Untuk kost, kantor, dan proyek, penempatan indoor-outdoor perlu dipikirkan agar instalasi rapi dan mudah dirawat.",
    icon: Wind,
  },
]

const acTypes = [
  {
    title: "AC Split Wall",
    description: "Cocok untuk kamar kost, kontrakan, kantor kecil, ruang meeting, toko kecil, ruang admin, atau ruangan khusus.",
    icon: Home,
  },
  {
    title: "AC Cassette",
    description: "Cocok untuk kantor, cafe, showroom, atau ruangan yang membutuhkan sebaran udara lebih merata.",
    icon: Building2,
  },
  {
    title: "AC Floor Standing",
    description: "Cocok untuk aula, toko besar, rumah ibadah, event room, atau ruangan dengan plafon tinggi.",
    icon: Landmark,
  },
  {
    title: "Multi / Kebutuhan Proyek",
    description: "Cocok untuk banyak kamar, banyak ruangan, proyek pengadaan, kantor cabang, developer, dan pembelian partai besar.",
    icon: PackageCheck,
  },
]

const cassetteHighlights = [
  "Tampilan lebih rapi karena unit menyatu di plafon",
  "Sebaran udara lebih merata untuk area kantor, cafe, showroom, dan ruang tunggu",
  "Cocok untuk ruangan komersial yang ingin terlihat rapi dan profesional",
  "Perlu cek plafon, drainase, jalur pipa, dan posisi outdoor sebelum pemasangan",
]

const cassetteGallery = [
  {
    brand: "Midea Cassette",
    src: "/assets/midea-cassette-display.webp",
    alt: "Display AC cassette Midea di showroom RADJA AC",
    note: "Foto utama display cassette",
  },
  {
    brand: "Daikin Cassette",
    src: "/assets/daikin-cassette-display.webp",
    alt: "Display AC cassette Daikin di showroom RADJA AC",
    note: "Pilihan brand premium",
  },
  {
    brand: "Sansui Cassette",
    src: "/assets/sansui-cassette-display.webp",
    alt: "Display AC cassette Sansui di showroom RADJA AC",
    note: "Alternatif multibrand",
  },
]

const areas = [
  { title: "Kost / Kontrakan", icon: Home },
  { title: "Kantor", icon: Building2 },
  { title: "Toko / Minimarket", icon: Store },
  { title: "Cafe / Restoran", icon: Coffee },
  { title: "Klinik / Ruang Tunggu", icon: ShieldCheck },
  { title: "Showroom", icon: ShoppingBag },
  { title: "Sekolah / Ruang Kelas", icon: School },
  { title: "Proyek / Partai Besar", icon: PackageCheck },
]

const projectSupply = [
  "Pembelian banyak unit untuk kost, kontrakan, kantor, toko, sekolah, proyek, atau developer",
  "Bantu pilih brand dan tipe sesuai kebutuhan ruangan dan budget",
  "Cek ketersediaan stok dan alternatif unit yang masuk akal",
  "Bisa koordinasi kebutuhan pengiriman dan instalasi banyak titik",
  "Cocok untuk pemilik kost, kontraktor, pemilik usaha, pengadaan kantor, dan proyek perumahan",
]

const quotationChecklist = [
  "Jumlah kamar atau ruangan",
  "Ukuran tiap kamar / ruangan",
  "Estimasi jumlah unit yang dibutuhkan",
  "Daya listrik dan kondisi panel listrik",
  "Jam operasional ruangan",
  "Jenis usaha atau aktivitas ruangan",
  "Posisi indoor dan outdoor",
  "Kebutuhan instalasi dan panjang pipa",
  "Target budget dan pilihan brand",
  "Timeline pekerjaan atau kebutuhan unit",
  "Lokasi proyek / alamat pemasangan",
]

const brands = [
  { name: "Daikin", href: "/brand/daikin", note: "Pilihan premium untuk kantor, usaha, dan kebutuhan proyek tertentu." },
  { name: "Gree", href: "/brand/gree", note: "Value menarik untuk kebutuhan usaha dan pengadaan beberapa unit." },
  { name: "Midea", href: "/brand/midea", note: "Pilihan modern untuk kantor, toko, dan ruang komersial." },
  { name: "Hisense", href: "/brand/hisense", note: "Cek opsi sesuai kebutuhan ruangan, fitur, dan stok terbaru." },
  { name: "Sansui", href: "/brand/sansui", note: "Alternatif ekonomis untuk kebutuhan banyak unit tertentu." },
  { name: "Brand Lainnya", href: "/brand/lainnya", note: "Sharp, Panasonic, LG, Samsung, dan brand lain bisa dicek via WhatsApp." },
]

const processSteps = [
  ["1", "Kirim kebutuhan", "Jumlah kamar/ruangan, ukuran, lokasi, dan estimasi unit."],
  ["2", "Cek data ruangan", "Tim bantu membaca kebutuhan PK dan tipe AC yang cocok."],
  ["3", "Rekomendasi unit", "Brand, kapasitas, dan tipe disesuaikan dengan budget."],
  ["4", "Estimasi penawaran", "Untuk unit, pengadaan, dan instalasi jika dibutuhkan."],
]

const faqItems = [
  {
    question: "Apakah RADJA AC melayani pembelian AC partai besar?",
    answer: "Ya. RADJA AC melayani kebutuhan banyak unit untuk kost, kantor, toko, sekolah, proyek perumahan, pengadaan usaha, dan kebutuhan komersial lain sesuai stok dan kesepakatan.",
  },
  {
    question: "Apakah bisa konsultasi AC untuk kost atau kontrakan?",
    answer: "Bisa. Kirim jumlah kamar, ukuran tiap kamar, daya listrik, target budget, dan lokasi pemasangan. Tim RADJA AC bantu arahkan pilihan AC yang masuk akal untuk banyak kamar.",
  },
  {
    question: "AC apa yang cocok untuk kantor?",
    answer: "Kantor kecil bisa memakai AC split wall. Untuk ruangan lebih luas atau butuh sebaran udara merata, bisa dipertimbangkan cassette, floor standing, atau solusi proyek sesuai kondisi ruangan.",
  },
  {
    question: "Apakah RADJA AC melayani AC cassette?",
    answer: "Ya. RADJA AC bisa membantu kebutuhan AC cassette untuk kantor, cafe, showroom, klinik, ruang meeting, dan ruang komersial lain. Kebutuhan plafon, drainase, jalur pipa, dan posisi outdoor perlu dicek lebih dulu.",
  },
  {
    question: "Kapan perlu AC cassette atau floor standing?",
    answer: "Cassette cocok untuk ruangan yang butuh udara menyebar lebih merata dan tampilan plafon lebih rapi, sedangkan floor standing cocok untuk ruangan besar, plafon tinggi, aula, toko besar, atau ruang acara.",
  },
  {
    question: "Apakah bisa bantu survey atau hitung kebutuhan unit?",
    answer: "Bisa dikonsultasikan. Kirim data ruangan, foto lokasi, ukuran ruangan, dan kebutuhan unit. Tim RADJA AC bantu arahkan estimasi awal sebelum penawaran.",
  },
  {
    question: "Apakah bisa sekalian instalasi?",
    answer: "Bisa. Untuk kebutuhan komersial atau banyak unit, instalasi dapat dikonsultasikan sesuai lokasi, jumlah unit, tingkat kesulitan, dan jadwal pekerjaan.",
  },
]

function WhatsAppButton({ children = "Konsultasi Proyek / Partai Besar", className = "" }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
      {children}
    </div>
  )
}

export default function AcKantorKomersial() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="AC Kantor, Kost & Komersial Purwokerto | Partai Besar RADJA AC"
        description="Konsultasi AC untuk kost, kantor, toko, cafe, showroom, AC cassette, dan pembelian partai besar. RADJA AC bantu rekomendasi unit, brand, dan instalasi."
        canonicalPath="/katalog/ac-kantor-komersial"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/16 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                KATEGORI AC KANTOR & KOMERSIAL
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
                <span className="mx-2">/</span>
                <Link to="/katalog" className="transition hover:text-cyan-300">Katalog AC</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">AC Kantor & Komersial</span>
              </div>

              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                AC Kantor & Komersial untuk ruang usaha dan partai besar
              </h1>

              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                RADJA AC melayani kebutuhan AC untuk kost, kontrakan, kantor, toko, cafe, showroom, ruang usaha, AC cassette, hingga pembelian banyak unit. Kami bantu arahkan tipe AC, kapasitas, brand, dan kebutuhan instalasi.
              </p>

              <div className="mx-auto mb-5 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:mx-0 lg:justify-start">
                <WhatsAppButton className="w-full sm:w-auto" />
                <a
                  href="#kebutuhan-ruangan"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05] sm:w-auto"
                >
                  Cek Kebutuhan Ruangan
                </a>
              </div>

              <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2 text-center text-sm text-white/65 lg:mx-0">
                {["Kost", "Kantor", "Toko", "Cafe", "Cassette", "Partai Besar"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[470px] lg:mr-0">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/15 bg-slate-950/70 p-5 shadow-[0_28px_80px_rgba(8,20,47,0.42)]">
                <div className="mb-5 flex items-center justify-between gap-4 rounded-[26px] border border-white/10 bg-white/[0.04] p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Komersial & project</p>
                    <p className="mt-1 text-xl font-black text-white">Dari 1 ruangan sampai banyak unit</p>
                  </div>
                  <PackageCheck className="h-10 w-10 text-cyan-300" />
                </div>

                <div className="grid gap-3">
                  {[
                    ["1", "Kirim data ruangan"],
                    ["2", "Cek kapasitas dan tipe AC"],
                    ["3", "Pilih brand sesuai budget"],
                    ["4", "Koordinasi unit dan instalasi"],
                  ].map(([number, text]) => (
                    <div key={number} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-sm font-black text-cyan-300">
                        {number}
                      </span>
                      <p className="text-sm font-semibold text-white/85">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-[#25D366]/20 bg-[#25D366]/10 p-4 text-sm leading-6 text-white/70">
                  Untuk kost, kantor, atau partai besar, rekomendasi terbaik biasanya perlu cek jumlah kamar/ruangan, lokasi, timeline, dan target budget.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kebutuhan-ruangan" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>Kebutuhan Komersial</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Kebutuhan AC usaha beda dari rumah</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Kost, kantor, dan ruang komersial biasanya punya jam operasional lebih panjang, aktivitas lebih padat, dan kebutuhan instalasi yang perlu direncanakan lebih rapi.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {commercialNeeds.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <SectionLabel>Tipe AC</SectionLabel>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Tipe AC yang biasa dipakai untuk usaha</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Tidak semua ruang usaha harus memakai tipe AC yang sama. Pilihan unit tergantung ukuran ruangan, plafon, aktivitas, jumlah titik, dan budget.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {acTypes.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-black text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/[0.055] p-5 shadow-[0_35px_90px_rgba(8,145,178,0.10)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <SectionLabel>AC Cassette</SectionLabel>
                <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">AC cassette untuk plafon rapi dan sebaran udara lebih merata</h2>
                <p className="mb-5 text-sm leading-7 text-white/70 sm:text-base">
                  RADJA AC juga bisa bantu kebutuhan AC cassette untuk kantor, cafe, restoran, showroom, klinik, ruang meeting, dan ruang komersial yang membutuhkan tampilan lebih rapi tanpa unit AC menonjol di dinding.
                </p>
                <p className="mb-6 rounded-3xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-white/60">
                  Foto display unit di showroom RADJA AC. Ketersediaan tipe dan brand bisa berubah sesuai stok.
                </p>
                <WhatsAppButton className="mx-auto flex w-full max-w-[432px] lg:mx-0 lg:w-fit lg:max-w-none">Konsultasi AC Cassette</WhatsAppButton>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/60 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
                  <img
                    src="/assets/midea-cassette-display.webp"
                    alt="Display AC cassette Midea di showroom RADJA AC"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full rounded-[24px] object-cover"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {cassetteHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-sm leading-6 text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {cassetteGallery.map((item) => (
                <article key={item.brand} className="overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/55 p-3">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full rounded-[20px] object-cover"
                  />
                  <div className="p-3 text-center">
                    <h3 className="font-black text-white">{item.brand}</h3>
                    <p className="mt-1 text-xs text-white/55">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <SectionLabel>Area Usaha</SectionLabel>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Cocok untuk berbagai kebutuhan komersial</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {areas.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-white/75">{title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionLabel>Partai Besar</SectionLabel>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Melayani pembelian banyak unit dan kebutuhan proyek</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                Untuk kebutuhan kost, kontrakan, kantor, developer, sekolah, toko, kontraktor, atau proyek pengadaan, RADJA AC bisa bantu koordinasi kebutuhan unit, rekomendasi brand, dan instalasi sesuai kondisi lapangan.
              </p>
              <WhatsAppButton className="mx-auto flex w-full max-w-[432px] lg:mx-0 lg:w-fit lg:max-w-none">Konsultasi Partai Besar</WhatsAppButton>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="space-y-3">
                {projectSupply.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-sm leading-6 text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionLabel>Sebelum Penawaran</SectionLabel>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Data yang membantu penawaran lebih tepat</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                Semakin lengkap data awal, semakin mudah menentukan kapasitas, jumlah unit, tipe AC, dan estimasi kebutuhan instalasi.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {quotationChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-sm text-white/70">
                    <ClipboardCheck className="h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <SectionLabel>Brand Komersial</SectionLabel>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Brand bisa disesuaikan dengan budget dan kebutuhan proyek</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Stok dan tipe dapat berubah. Cek pilihan terbaru via WhatsApp agar rekomendasi sesuai ruang usaha, jumlah unit, dan target budget.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                to={brand.href}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black text-white">{brand.name}</h3>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">Lihat</span>
                </div>
                <p className="text-sm leading-7 text-white/60">{brand.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="mb-8 text-center">
              <SectionLabel>Alur Project</SectionLabel>
              <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Alur konsultasi kebutuhan komersial</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {processSteps.map(([number, title, description]) => (
                <div key={number} className="rounded-[26px] border border-white/10 bg-slate-950/55 p-5 text-center">
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-black text-cyan-300">
                    {number}
                  </div>
                  <h3 className="mb-2 font-black text-white">{title}</h3>
                  <p className="text-sm leading-6 text-white/60">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 text-center shadow-[0_35px_90px_rgba(8,145,178,0.12)] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#25D366]/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex justify-center text-cyan-300"><MessageCircle className="h-10 w-10" /></div>
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Butuh AC untuk kost, kantor, atau pembelian banyak unit?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Kirim jumlah kamar/ruangan, ukuran, lokasi, estimasi jumlah unit, dan target budget. Tim RADJA AC bantu arahkan pilihan yang paling masuk akal.
              </p>
              <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="mb-10 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC kantor & partai besar</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-cyan-300" />
                  <h3 className="font-bold text-white">{item.question}</h3>
                </div>
                <p className="text-sm leading-7 text-white/60">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
