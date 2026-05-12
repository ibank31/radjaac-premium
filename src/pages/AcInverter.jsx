import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  BadgeCheck,
  BatteryCharging,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Home,
  MessageCircle,
  Moon,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Timer,
  Wind,
  Zap,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const inverterBenefits = [
  {
    title: "Suhu lebih stabil",
    description: "Kompresor menyesuaikan kerja pendinginan setelah suhu mendekati target, jadi ruangan terasa lebih nyaman untuk pemakaian lama.",
    icon: Gauge,
  },
  {
    title: "Nyaman untuk pemakaian harian",
    description: "Cocok untuk kamar tidur, ruang keluarga, kantor kecil, dan ruangan yang AC-nya sering menyala berjam-jam.",
    icon: Timer,
  },
  {
    title: "Potensi hemat jangka panjang",
    description: "Jika dipakai rutin dan PK-nya sesuai, inverter bisa membantu penggunaan listrik lebih efisien dibanding pola hidup-mati penuh.",
    icon: BatteryCharging,
  },
]

const comparison = [
  ["Harga awal", "Lebih ringan", "Biasanya lebih tinggi"],
  ["Cara kerja", "Kompresor sering hidup-mati", "Kompresor menyesuaikan kecepatan"],
  ["Kenyamanan suhu", "Lebih terasa naik-turun", "Lebih stabil untuk pemakaian lama"],
  ["Paling cocok", "Pemakaian sesekali", "Pemakaian rutin/harian"],
  ["Catatan", "Praktis untuk budget awal", "Worth it kalau dipakai cukup sering"],
]

const worthItItems = [
  {
    title: "Kamar tidur dipakai semalaman",
    description: "Inverter cocok untuk kamar yang AC-nya menyala lama karena suhu lebih stabil dan tidak terlalu naik-turun.",
    icon: Moon,
  },
  {
    title: "Ruang keluarga sering dipakai",
    description: "Untuk aktivitas harian keluarga, inverter membantu menjaga kenyamanan ruangan lebih konsisten.",
    icon: Home,
  },
  {
    title: "Kantor kecil atau ruang kerja",
    description: "Cocok untuk ruangan yang butuh suhu nyaman dalam durasi panjang, terutama saat jam kerja.",
    icon: Wind,
  },
]

const lessPriority = [
  "AC hanya dipakai sebentar-sebentar",
  "Ruangan sering terbuka atau pintu sering keluar-masuk",
  "Budget awal sangat ketat",
  "Kapasitas PK belum sesuai dengan luas ruangan",
]

const buyingChecklist = [
  "Luas ruangan dan tinggi plafon",
  "Durasi pemakaian AC setiap hari",
  "Daya listrik rumah yang tersedia",
  "Kapasitas PK yang sesuai",
  "Paparan matahari langsung",
  "Posisi indoor dan outdoor",
  "Estimasi panjang pipa instalasi",
  "Budget unit dan pemasangan",
]

const brands = [
  { name: "Daikin", href: "/brand/daikin", note: "Pilihan premium untuk kenyamanan stabil dan pemakaian rutin." },
  { name: "Gree", href: "/brand/gree", note: "Value kuat dengan pilihan inverter yang menarik untuk rumah." },
  { name: "Midea", href: "/brand/midea", note: "Pilihan modern dan praktis untuk kebutuhan harian." },
  { name: "Hisense", href: "/brand/hisense", note: "Fitur modern dengan opsi inverter sesuai stok terbaru." },
  { name: "Sansui", href: "/brand/sansui", note: "Alternatif ekonomis, cek opsi sesuai ketersediaan stok." },
  { name: "Brand Lainnya", href: "/brand/lainnya", note: "Sharp, Panasonic, LG, Samsung, dan brand lain bisa dicek via WhatsApp." },
]

const savingTips = [
  "Pilih PK sesuai luas ruangan, jangan kekecilan.",
  "Atur suhu nyaman, tidak perlu terlalu rendah terus-menerus.",
  "Tutup pintu dan jendela saat AC menyala.",
  "Bersihkan filter secara rutin agar aliran udara tetap lancar.",
  "Pastikan instalasi pipa, outdoor, dan drainase rapi.",
  "Jangan tempatkan outdoor di area yang terlalu terkurung panas.",
]

const faqItems = [
  {
    question: "Apa bedanya AC inverter dan non-inverter?",
    answer: "AC inverter menyesuaikan kerja kompresor sesuai kebutuhan suhu, sedangkan non-inverter cenderung hidup-mati dengan daya penuh. Karena itu inverter biasanya terasa lebih stabil untuk pemakaian lama.",
  },
  {
    question: "Apakah AC inverter pasti lebih hemat listrik?",
    answer: "Tidak selalu. Inverter paling terasa manfaatnya jika AC dipakai rutin, kapasitas PK sesuai, dan ruangan cukup tertutup. Jika AC hanya dipakai sebentar, selisih hematnya bisa tidak terlalu terasa.",
  },
  {
    question: "Kapan sebaiknya pilih AC inverter?",
    answer: "Pilih inverter jika AC sering dipakai berjam-jam, misalnya kamar tidur semalaman, ruang keluarga harian, kantor kecil, atau ruangan yang butuh suhu stabil.",
  },
  {
    question: "Apakah AC inverter cocok untuk kamar tidur?",
    answer: "Cocok, terutama untuk kamar yang dipakai tidur malam karena suhu lebih stabil dan nyaman untuk durasi panjang.",
  },
  {
    question: "Apakah RADJA AC bisa bantu pilih inverter yang tepat?",
    answer: "Bisa. Kirim ukuran ruangan, daya listrik, durasi pemakaian, dan budget. Tim RADJA AC akan bantu rekomendasikan kapasitas dan brand yang paling sesuai.",
  },
]

function WhatsAppButton({ children = "Konsultasi AC Inverter", className = "" }) {
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

export default function AcInverter() {
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
        title="AC Inverter Purwokerto & Banyumas | Panduan Pilih AC RADJA AC"
        description="Panduan memilih AC inverter untuk kamar tidur, ruang keluarga, kantor kecil, dan pemakaian harian. RADJA AC bantu rekomendasi PK, brand, dan instalasi profesional."
        canonicalPath="/katalog/ac-inverter"
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
                KATEGORI AC INVERTER
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
                <span className="mx-2">/</span>
                <Link to="/katalog" className="transition hover:text-cyan-300">Katalog AC</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">AC Inverter</span>
              </div>

              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                AC Inverter untuk pemakaian harian yang lebih stabil
              </h1>

              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                AC inverter cocok untuk ruangan yang sering dipakai berjam-jam: kamar tidur, ruang keluarga, kantor kecil, dan toko tertentu. RADJA AC bantu cek apakah inverter benar-benar worth it untuk kebutuhan Anda.
              </p>

              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <WhatsAppButton />
                <a
                  href="#kapan-worth-it"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Kapan Cocok
                </a>
              </div>

              <div className="flex max-w-2xl flex-wrap gap-2 text-sm text-white/65">
                {["Suhu stabil", "Pemakaian rutin", "Konsultasi PK", "Instalasi rapi"].map((item) => (
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
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Kenapa inverter?</p>
                    <p className="mt-1 text-xl font-black text-white">Nyaman untuk durasi lama</p>
                  </div>
                  <Zap className="h-10 w-10 text-cyan-300" />
                </div>

                <div className="grid gap-3">
                  {[
                    ["1", "Kompresor menyesuaikan kerja"],
                    ["2", "Suhu ruangan lebih stabil"],
                    ["3", "Cocok untuk pemakaian rutin"],
                    ["4", "Lebih worth it kalau PK sesuai"],
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
                  Inverter bukan sekadar mahal atau hemat. Yang penting: cocok dengan pola pemakaian dan kondisi ruangan.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>Apa Itu Inverter</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Cara kerja AC inverter lebih fleksibel</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Pada AC inverter, kerja kompresor dapat naik-turun menyesuaikan kebutuhan pendinginan. Setelah suhu ruangan mendekati target, unit tidak harus terus bekerja penuh seperti pola hidup-mati yang umum pada non-inverter.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {inverterBenefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionLabel>Perbandingan</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Inverter vs non-inverter</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Pilihan terbaik bukan selalu yang paling mahal, tapi yang paling sesuai dengan pola pemakaian dan kondisi ruangan.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
            <div className="hidden grid-cols-[0.75fr_1fr_1fr] border-b border-white/10 bg-cyan-400/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80 sm:grid">
              <span>Aspek</span>
              <span>Non-Inverter</span>
              <span>Inverter</span>
            </div>
            <div className="divide-y divide-white/10">
              {comparison.map(([aspect, non, inv]) => (
                <div key={aspect} className="px-5 py-4 sm:grid sm:grid-cols-[0.75fr_1fr_1fr] sm:gap-4">
                  <div className="mb-2 text-sm font-black text-cyan-300 sm:mb-0">{aspect}</div>
                  <div className="mb-2 text-sm leading-6 text-white/60 sm:mb-0">{non}</div>
                  <div className="text-sm leading-6 text-white/85">{inv}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kapan-worth-it" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionLabel>Kapan Worth It</SectionLabel>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">AC inverter paling terasa manfaatnya saat dipakai rutin</h2>
              <p className="mb-8 text-sm leading-7 text-white/65 sm:text-base">
                Inverter biasanya lebih masuk akal untuk ruangan yang sering dipakai lama. Kalau AC hanya dinyalakan sebentar-sebentar, benefit hemat dan stabilnya bisa tidak terlalu terasa.
              </p>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                {worthItItems.map(({ title, description, icon: Icon }) => (
                  <article key={title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-white">{title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-white/60">{description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-amber-300/15 bg-amber-300/5 p-6 lg:sticky lg:top-28">
              <div className="mb-4 flex items-center gap-3 text-amber-200">
                <ShieldCheck className="h-6 w-6" />
                <h3 className="text-xl font-black text-white">Kapan bukan prioritas?</h3>
              </div>
              <p className="mb-5 text-sm leading-7 text-white/60">
                Supaya pembelian tidak mubazir, inverter tidak perlu dipaksakan untuk semua kondisi.
              </p>
              <div className="space-y-3">
                {lessPriority.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm text-white/70">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" />
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
              <SectionLabel>Sebelum Beli</SectionLabel>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Yang perlu dicek sebelum pilih inverter</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                AC inverter akan lebih optimal kalau kapasitas, durasi pemakaian, daya listrik, dan instalasinya sesuai. Jangan pilih inverter hanya karena label hemat.
              </p>
              <WhatsAppButton>Hitungkan Kebutuhan Inverter</WhatsAppButton>
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
          <div className="mb-10 text-center">
            <SectionLabel>Brand Inverter</SectionLabel>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Brand inverter bisa disesuaikan dengan kebutuhan</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Stok dan tipe inverter dapat berubah. Cek pilihan terbaru via WhatsApp agar rekomendasi sesuai ruangan, daya listrik, dan budget.
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
              <SectionLabel>Tips Hemat</SectionLabel>
              <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Biar inverter makin optimal</h2>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Unit inverter tetap butuh pemilihan dan pemakaian yang benar agar performanya terasa maksimal.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {savingTips.map((tip) => (
                <div key={tip} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-sm leading-6 text-white/70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{tip}</span>
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
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mau AC yang nyaman dipakai tiap hari?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Kirim ukuran ruangan, daya listrik, durasi pemakaian, dan budget. Tim RADJA AC bantu pilih AC inverter yang paling masuk akal.
              </p>
              <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="mb-10 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC inverter</h2>
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
