import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Home,
  MessageCircle,
  Moon,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Sun,
  Wind,
  Zap,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const roomNeeds = [
  {
    title: "Kamar tidur kecil",
    area: "± 9–12 m²",
    pk: "½ PK",
    note: "Cocok untuk kamar anak, ruang kerja kecil, atau kamar kos dengan pemakaian malam hari.",
    icon: Moon,
  },
  {
    title: "Kamar utama / kamar sedang",
    area: "± 12–20 m²",
    pk: "¾ – 1 PK",
    note: "Pilihan aman untuk kamar yang dipakai rutin, terutama jika ruangan tertutup dan tidak terlalu panas.",
    icon: Home,
  },
  {
    title: "Ruang keluarga",
    area: "± 20–30 m²",
    pk: "1.5 PK",
    note: "Perlu kapasitas lebih besar karena biasanya dipakai banyak orang dan durasi pemakaian lebih lama.",
    icon: Building2,
  },
  {
    title: "Toko kecil / ruang usaha",
    area: "menyesuaikan kondisi",
    pk: "1 – 2 PK",
    note: "Perlu cek bukaan pintu, paparan panas, jumlah orang, dan posisi indoor-outdoor sebelum menentukan unit.",
    icon: Sun,
  },
]

const pkGuide = [
  ["½ PK", "± 9–12 m²", "Kamar kecil, ruang kerja, kamar kos"],
  ["¾ PK", "± 12–15 m²", "Kamar sedang atau ruang santai"],
  ["1 PK", "± 15–20 m²", "Kamar besar atau ruang keluarga kecil"],
  ["1.5 PK", "± 20–30 m²", "Ruang keluarga, kantor kecil, toko kecil"],
  ["2 PK", "± 30–40 m²", "Ruangan besar atau area usaha"],
]

const acTypes = [
  {
    title: "AC Standard",
    badge: "Ekonomis",
    description: "Pilihan praktis untuk kamar tidur, toko kecil, atau ruangan yang tidak dipakai terlalu lama setiap hari.",
    points: ["Harga lebih ringan", "Perawatan mudah", "Cocok untuk kebutuhan dasar"],
    icon: Snowflake,
  },
  {
    title: "AC Low Watt",
    badge: "Daya ringan",
    description: "Cocok untuk rumah dengan daya listrik terbatas atau pelanggan yang ingin tarikan listrik awal lebih aman.",
    points: ["Beban listrik lebih ringan", "Nyaman untuk rumah tinggal", "Pendinginan bertahap"],
    icon: Gauge,
  },
  {
    title: "AC Inverter",
    badge: "Nyaman harian",
    description: "Direkomendasikan untuk pemakaian rutin karena suhu lebih stabil dan konsumsi listrik bisa lebih efisien dalam jangka panjang.",
    points: ["Suhu lebih stabil", "Cocok pemakaian lama", "Lebih nyaman untuk harian"],
    icon: Zap,
  },
]

const brands = [
  { name: "Daikin", href: "/brand/daikin", note: "Premium, nyaman, dan banyak dicari untuk rumah maupun kantor." },
  { name: "Gree", href: "/brand/gree", note: "Value menarik dengan pilihan inverter dan low watt." },
  { name: "Midea", href: "/brand/midea", note: "Pilihan modern untuk kebutuhan rumah tinggal." },
  { name: "Hisense", href: "/brand/hisense", note: "Fitur lengkap dengan pilihan smart dan hemat energi." },
  { name: "Sansui", href: "/brand/sansui", note: "Alternatif ekonomis untuk kebutuhan AC rumah." },
  { name: "Brand Lainnya", href: "/brand/lainnya", note: "Sharp, Panasonic, LG, Samsung, dan brand populer lain sesuai stok." },
]

const buyingChecklist = [
  "Luas ruangan dan tinggi plafon",
  "Daya listrik rumah yang tersedia",
  "Paparan matahari langsung",
  "Jumlah orang di ruangan",
  "Posisi indoor dan outdoor",
  "Estimasi panjang pipa instalasi",
  "Frekuensi pemakaian harian",
  "Budget unit dan pemasangan",
]

const faqItems = [
  {
    question: "AC split rumah cocok untuk ruangan apa saja?",
    answer: "AC split rumah cocok untuk kamar tidur, ruang keluarga, kamar kos, ruang kerja, toko kecil, dan ruangan usaha skala kecil. Kapasitas PK tetap perlu disesuaikan dengan luas dan kondisi ruangan.",
  },
  {
    question: "Lebih baik AC standard, low watt, atau inverter?",
    answer: "AC standard cocok untuk kebutuhan ekonomis, low watt cocok untuk daya listrik terbatas, sedangkan inverter lebih cocok untuk pemakaian rutin karena suhu lebih stabil dan nyaman untuk jangka panjang.",
  },
  {
    question: "Berapa PK AC untuk kamar tidur?",
    answer: "Sebagai gambaran awal, kamar kecil biasanya mulai dari ½ PK, kamar sedang ¾ PK, dan kamar besar 1 PK. Kondisi panas ruangan, tinggi plafon, dan jumlah penghuni tetap perlu dicek.",
  },
  {
    question: "Apakah RADJA AC bisa bantu rekomendasi sebelum beli?",
    answer: "Bisa. Kirim ukuran ruangan, daya listrik, foto lokasi pemasangan, dan budget. Tim RADJA AC akan bantu arahkan pilihan kapasitas dan brand yang paling masuk akal.",
  },
  {
    question: "Apakah pembelian AC bisa sekalian instalasi?",
    answer: "Bisa. RADJA AC melayani pembelian unit AC sekaligus instalasi profesional untuk area Purwokerto, Banyumas, dan sekitarnya.",
  },
]

function WhatsAppButton({ children = "Konsultasi AC Rumah", className = "" }) {
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

export default function AcSplitRumah() {
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

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Panduan AC Split Rumah RADJA AC",
    itemListElement: acTypes.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.title,
        description: item.description,
      },
    })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="AC Split Rumah Purwokerto & Banyumas | Panduan Pilih AC RADJA AC"
        description="Panduan memilih AC split rumah untuk kamar, ruang keluarga, kos, dan toko kecil. RADJA AC bantu rekomendasi PK, tipe AC, brand, dan instalasi profesional."
        canonicalPath="/katalog/ac-split-rumah"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                KATEGORI AC SPLIT RUMAH
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
                <span className="mx-2">/</span>
                <Link to="/katalog" className="transition hover:text-cyan-300">Katalog AC</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">AC Split Rumah</span>
              </div>

              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                AC Split Rumah untuk kamar, ruang keluarga, kos, dan toko kecil
              </h1>

              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Halaman ini membantu Anda memilih AC rumah dari kebutuhan ruangan dulu: ukuran PK, daya listrik, pola pemakaian, tipe AC, sampai brand yang paling cocok. RADJA AC bantu rekomendasi sebelum Anda membeli.
              </p>

              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <WhatsAppButton />
                <a
                  href="#panduan-pk"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Panduan PK
                </a>
              </div>

              <div className="flex max-w-2xl flex-wrap gap-2 text-sm text-white/65">
                {["Bantu hitung PK", "Cek daya listrik", "Rekomendasi brand", "Instalasi profesional"].map((item) => (
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
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Mulai dari</p>
                    <p className="mt-1 text-xl font-black text-white">Kebutuhan ruangan</p>
                  </div>
                  <Wind className="h-10 w-10 text-cyan-300" />
                </div>

                <div className="grid gap-3">
                  {[
                    ["1", "Ukur luas ruangan"],
                    ["2", "Cek daya listrik"],
                    ["3", "Pilih tipe AC"],
                    ["4", "Tentukan brand & instalasi"],
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
                  Kirim ukuran ruangan dan foto lokasi pemasangan, tim RADJA AC bantu arahkan pilihan AC yang paling masuk akal.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>Kondisi Ruangan</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mulai dari ruangan yang mau dipasang AC</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              AC yang cocok untuk kamar tidur belum tentu cocok untuk ruang keluarga atau toko kecil. Karena itu, kapasitas dan tipe AC sebaiknya dipilih berdasarkan kondisi ruangan dulu.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {roomNeeds.map(({ title, area, pk, note, icon: Icon }) => (
              <article key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <div className="mb-4 flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-cyan-200">{area}</span>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-white/70">{pk}</span>
                </div>
                <p className="text-sm leading-7 text-white/60">{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="panduan-pk" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Panduan PK</SectionLabel>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Estimasi kapasitas AC rumah</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                Tabel ini adalah panduan awal. Hasil akhir tetap perlu menyesuaikan tinggi plafon, panas matahari, jumlah orang, posisi ruangan, dan kebiasaan pemakaian.
              </p>
              <WhatsAppButton className="flex mx-auto w-fit lg:mx-0">Hitungkan PK via WhatsApp</WhatsAppButton>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
              <div className="hidden grid-cols-[0.7fr_1fr_1.4fr] border-b border-white/10 bg-cyan-400/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80 sm:grid">
                <span>Kapasitas</span>
                <span>Estimasi Luas</span>
                <span>Cocok Untuk</span>
              </div>
              <div className="divide-y divide-white/10">
                {pkGuide.map(([pk, area, note]) => (
                  <div key={pk} className="px-5 py-4 sm:grid sm:grid-cols-[0.7fr_1fr_1.4fr] sm:items-center sm:gap-4">
                    <div className="grid grid-cols-[74px_1fr] items-baseline gap-4 sm:contents">
                      <div className="text-xl font-black text-cyan-300">{pk}</div>
                      <div className="text-sm font-semibold text-white sm:text-base">{area}</div>
                      <div className="col-start-2 text-sm leading-6 text-white/55 sm:col-auto">{note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <SectionLabel>Pilih Tipe AC</SectionLabel>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Standard, low watt, atau inverter?</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Tipe AC sebaiknya dipilih dari pola pemakaian dan daya listrik rumah. Bukan hanya dari harga unitnya saja.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {acTypes.map(({ title, badge, description, points, icon: Icon }) => (
              <article key={title} className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="relative min-h-[110px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/14 via-slate-900 to-blue-950/70 p-5">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{badge}</span>
                    <Icon className="h-7 w-7 text-cyan-200/80" />
                  </div>
                  <h3 className="relative mt-6 text-2xl font-black tracking-[-0.02em] text-white">{title}</h3>
                </div>

                <div className="p-6">
                  <p className="mb-5 text-sm leading-7 text-white/60">{description}</p>
                  <div className="space-y-3">
                    {points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <SectionLabel>Brand Tersedia</SectionLabel>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pilih brand setelah kebutuhan ruangan jelas</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              RADJA AC menyediakan beberapa brand AC populer. Stok dan harga bisa berubah, jadi pengecekan final tetap diarahkan ke WhatsApp.
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
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionLabel>Sebelum Beli</SectionLabel>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Yang perlu dicek agar AC tidak salah pilih</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                Banyak kasus AC kurang dingin atau boros listrik bukan karena brand-nya jelek, tapi karena kapasitas, posisi pemasangan, atau kondisi ruangan tidak sesuai.
              </p>
              <Link
                to="/instalasi-profesional"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
              >
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                Lihat Instalasi Profesional
              </Link>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {buyingChecklist.map((item) => (
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
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 text-center shadow-[0_35px_90px_rgba(8,145,178,0.12)] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#25D366]/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex justify-center text-cyan-300"><MessageCircle className="h-10 w-10" /></div>
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Belum yakin pilih AC split yang mana?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Kirim ukuran ruangan, daya listrik, foto lokasi pemasangan, dan kisaran budget. Tim RADJA AC bantu rekomendasikan kapasitas, tipe AC, dan brand yang paling sesuai.
              </p>
              <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="mb-10 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC split rumah</h2>
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

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/70">
              <BadgeCheck className="h-5 w-5 shrink-0 text-cyan-300" />
              RADJA AC melayani area Purwokerto, Banyumas, dan sekitarnya.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
