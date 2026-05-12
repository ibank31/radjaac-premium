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
  PlugZap,
  ShieldCheck,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const lowWattBenefits = [
  {
    title: "Tarikan daya lebih ringan",
    description: "Low watt membantu mengurangi beban listrik awal sehingga lebih aman untuk rumah dengan daya terbatas.",
    icon: PlugZap,
  },
  {
    title: "Cocok untuk kamar dan kos",
    description: "Pilihan praktis untuk kamar tidur, kamar kos, kontrakan, dan ruangan kecil sampai sedang.",
    icon: Home,
  },
  {
    title: "Lebih tenang saat banyak alat menyala",
    description: "Cocok untuk pelanggan yang ingin pasang AC tapi khawatir listrik turun saat alat elektronik lain dipakai.",
    icon: ShieldCheck,
  },
]

const comparison = [
  ["Fokus utama", "Harga awal ekonomis", "Daya listrik lebih ringan", "Suhu stabil untuk pemakaian lama"],
  ["Pendinginan", "Normal", "Bertahap", "Stabil setelah suhu tercapai"],
  ["Cocok untuk", "Pemakaian ringan", "Listrik terbatas", "Pemakaian rutin berjam-jam"],
  ["Budget awal", "Biasanya paling ringan", "Menengah", "Biasanya lebih tinggi"],
  ["Catatan", "Tidak fokus hemat daya", "Tidak selalu paling cepat dingin", "Worth it kalau sering dipakai"],
]

const suitableItems = [
  {
    title: "Rumah daya terbatas",
    description: "Cocok untuk rumah yang perlu menjaga beban listrik agar tidak mudah turun saat AC menyala.",
    icon: BatteryCharging,
  },
  {
    title: "Kamar tidur kecil/sedang",
    description: "Low watt cocok untuk kamar yang ukurannya sesuai dan pemakaian tidak terlalu ekstrem.",
    icon: Moon,
  },
  {
    title: "Kos atau kontrakan",
    description: "Pilihan aman untuk penghuni kos yang butuh AC nyaman tapi tetap memperhatikan daya listrik.",
    icon: Wind,
  },
]

const notIdealItems = [
  "Ruangan terlalu besar tapi memilih PK kecil",
  "Pintu sering terbuka atau banyak orang keluar-masuk",
  "Butuh dingin sangat cepat dalam waktu singkat",
  "Outdoor ditempatkan di area panas dan sempit",
]

const buyingChecklist = [
  "Daya listrik rumah atau kos",
  "Ukuran MCB dan beban alat lain",
  "Luas ruangan dan tinggi plafon",
  "Kapasitas PK yang sesuai",
  "Paparan matahari langsung",
  "Durasi pemakaian AC",
  "Posisi indoor dan outdoor",
  "Budget unit dan instalasi",
]

const brands = [
  { name: "Daikin", href: "/brand/daikin", note: "Cek opsi low watt atau mode hemat sesuai seri dan stok terbaru." },
  { name: "Gree", href: "/brand/gree", note: "Pilihan value untuk kebutuhan rumah, kos, dan kamar tidur." },
  { name: "Midea", href: "/brand/midea", note: "Pilihan modern untuk kebutuhan harian dengan daya yang disesuaikan." },
  { name: "Hisense", href: "/brand/hisense", note: "Cek opsi hemat daya sesuai tipe yang tersedia." },
  { name: "Sansui", href: "/brand/sansui", note: "Alternatif ekonomis untuk kebutuhan AC rumah dan kos." },
  { name: "Brand Lainnya", href: "/brand/lainnya", note: "Sharp, Panasonic, LG, Samsung, dan brand lain bisa dicek via WhatsApp." },
]

const safeElectricTips = [
  "Pilih PK sesuai luas ruangan, jangan terlalu kecil.",
  "Cek daya listrik dan MCB sebelum menentukan unit.",
  "Hindari menyalakan banyak alat berat bersamaan saat AC baru menyala.",
  "Tutup pintu dan jendela agar AC tidak bekerja terlalu berat.",
  "Bersihkan filter rutin supaya aliran udara tetap lancar.",
  "Pastikan instalasi rapi agar performa unit tetap optimal.",
]

const faqItems = [
  {
    question: "Apa itu AC low watt?",
    answer: "AC low watt adalah AC yang dirancang dengan konsumsi daya lebih ringan, sehingga cocok untuk rumah, kos, atau kontrakan dengan daya listrik terbatas.",
  },
  {
    question: "Apakah AC low watt cocok untuk listrik 900 VA?",
    answer: "Bisa cocok pada kondisi tertentu, tetapi tetap perlu cek daya listrik, alat elektronik lain yang sering menyala, kapasitas PK, dan kondisi ruangan sebelum membeli.",
  },
  {
    question: "Apakah low watt lebih hemat dari inverter?",
    answer: "Tidak selalu. Low watt fokus pada tarikan daya yang lebih ringan, sedangkan inverter lebih fokus pada efisiensi dan kestabilan suhu untuk pemakaian rutin berjam-jam.",
  },
  {
    question: "Apakah AC low watt cepat dingin?",
    answer: "Pendinginan low watt biasanya lebih bertahap. Jika ingin dingin cepat, kapasitas PK dan kondisi ruangan harus benar-benar sesuai.",
  },
  {
    question: "Apakah RADJA AC bisa bantu hitung kebutuhan listrik?",
    answer: "Bisa. Kirim daya listrik rumah, ukuran ruangan, alat elektronik yang sering menyala, dan budget. Tim RADJA AC bantu arahkan pilihan yang lebih aman.",
  },
]

function WhatsAppButton({ children = "Konsultasi AC Low Watt", className = "" }) {
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

export default function AcLowWatt() {
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
        title="AC Low Watt Purwokerto & Banyumas | Panduan Pilih AC RADJA AC"
        description="Panduan memilih AC low watt untuk rumah, kamar, kos, dan kontrakan dengan daya listrik terbatas. RADJA AC bantu cek PK, daya listrik, brand, dan instalasi."
        canonicalPath="/katalog/ac-low-watt"
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
                KATEGORI AC LOW WATT
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
                <span className="mx-2">/</span>
                <Link to="/katalog" className="transition hover:text-cyan-300">Katalog AC</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">AC Low Watt</span>
              </div>

              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                AC Low Watt untuk rumah dengan daya listrik terbatas
              </h1>

              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                AC low watt cocok untuk rumah, kamar, kos, dan kontrakan yang perlu menjaga beban listrik. RADJA AC bantu cek daya, ukuran ruangan, dan pilihan unit yang paling aman.
              </p>

              <div className="mx-auto mb-5 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:mx-0 lg:justify-start">
                <WhatsAppButton className="w-full sm:w-auto" />
                <a
                  href="#cek-cocok"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05] sm:w-auto"
                >
                  Cek Cocoknya
                </a>
              </div>

              <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2 text-center text-sm text-white/65 lg:mx-0">
                {["Daya ringan", "Cocok untuk kos", "Cek MCB", "Instalasi rapi"].map((item) => (
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
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Kenapa low watt?</p>
                    <p className="mt-1 text-xl font-black text-white">Lebih aman untuk daya terbatas</p>
                  </div>
                  <Zap className="h-10 w-10 text-cyan-300" />
                </div>

                <div className="grid gap-3">
                  {[
                    ["1", "Cek daya listrik rumah"],
                    ["2", "Hitung beban elektronik lain"],
                    ["3", "Pilih PK sesuai ruangan"],
                    ["4", "Pastikan instalasi rapi"],
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
                  Low watt bukan berarti asal kecil PK. Unit tetap harus sesuai ruangan supaya tidak boros dan tidak kurang dingin.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>Apa Itu Low Watt</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Fokusnya membantu meringankan beban listrik</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              AC low watt dirancang agar konsumsi dayanya lebih ringan. Cocok untuk rumah atau kos yang perlu menjaga beban listrik, terutama saat ada alat elektronik lain yang juga sering menyala.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {lowWattBenefits.map(({ title, description, icon: Icon }) => (
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

        <section id="cek-cocok" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionLabel>Kapan Cocok</SectionLabel>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Low watt cocok kalau daya listrik perlu dijaga</h2>
              <p className="mb-8 text-sm leading-7 text-white/65 sm:text-base">
                Kuncinya bukan cuma memilih watt paling kecil, tapi memilih kapasitas AC yang sesuai dengan luas ruangan dan pola pemakaian.
              </p>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                {suitableItems.map(({ title, description, icon: Icon }) => (
                  <article key={title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-center lg:text-left">
                    <div className="mb-4 flex flex-col items-center gap-3 lg:flex-row">
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
                <h3 className="text-xl font-black text-white">Kapan kurang ideal?</h3>
              </div>
              <p className="mb-5 text-sm leading-7 text-white/60">
                Low watt tetap bisa kurang maksimal kalau kondisi ruangan terlalu berat atau kapasitas PK tidak sesuai.
              </p>
              <div className="space-y-3">
                {notIdealItems.map((item) => (
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
          <div className="mb-8 max-w-3xl">
            <SectionLabel>Perbandingan</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Standard vs low watt vs inverter</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Masing-masing tipe punya keunggulan. Pilihan terbaik bergantung pada daya listrik, durasi pemakaian, dan budget.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
            <div className="hidden grid-cols-[0.75fr_1fr_1fr_1fr] border-b border-white/10 bg-cyan-400/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80 sm:grid">
              <span>Aspek</span>
              <span>Standard</span>
              <span>Low Watt</span>
              <span>Inverter</span>
            </div>
            <div className="divide-y divide-white/10">
              {comparison.map(([aspect, standard, lowWatt, inverter]) => (
                <div key={aspect} className="px-5 py-4 sm:grid sm:grid-cols-[0.75fr_1fr_1fr_1fr] sm:gap-4">
                  <div className="mb-2 text-sm font-black text-cyan-300 sm:mb-0">{aspect}</div>
                  <div className="mb-2 text-sm leading-6 text-white/60 sm:mb-0">{standard}</div>
                  <div className="mb-2 text-sm leading-6 text-white/85 sm:mb-0">{lowWatt}</div>
                  <div className="text-sm leading-6 text-white/60">{inverter}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionLabel>Sebelum Beli</SectionLabel>
              <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Yang perlu dicek sebelum pilih low watt</h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                Low watt akan lebih aman kalau daya listrik, kapasitas PK, dan kondisi ruangan dicek dari awal. Jangan sampai unitnya hemat daya tapi kurang dingin.
              </p>
              <WhatsAppButton className="mx-auto flex w-full max-w-[432px] lg:mx-0 lg:w-fit lg:max-w-none">Hitungkan Kebutuhan Low Watt</WhatsAppButton>
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
            <SectionLabel>Brand Low Watt</SectionLabel>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Brand low watt bisa disesuaikan dengan daya listrik</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Stok dan tipe low watt dapat berubah. Cek pilihan terbaru via WhatsApp agar rekomendasi sesuai daya listrik, ruangan, dan budget.
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
              <SectionLabel>Tips Listrik Aman</SectionLabel>
              <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Biar AC low watt lebih optimal</h2>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Unit low watt tetap butuh pemilihan, pemakaian, dan instalasi yang benar agar listrik aman dan ruangan tetap nyaman.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {safeElectricTips.map((tip) => (
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
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Takut listrik turun setelah pasang AC?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Kirim daya listrik rumah, ukuran ruangan, alat elektronik yang sering menyala, dan budget. Tim RADJA AC bantu pilih AC low watt yang paling aman.
              </p>
              <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="mb-10 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar AC low watt</h2>
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
