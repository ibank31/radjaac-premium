import { useMemo, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  Home,
  MessageCircle,
  Ruler,
  Snowflake,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const DEFAULT_TARIFF = 1444.7

const roomConditions = {
  normal: {
    label: "Normal",
    multiplier: 1,
    note: "Ruangan cukup tertutup dan tidak terkena panas berlebih.",
  },
  hot: {
    label: "Cukup panas",
    multiplier: 1.12,
    note: "Ada paparan matahari, plafon agak tinggi, atau ruangan sering terasa panas.",
  },
  veryHot: {
    label: "Sangat panas",
    multiplier: 1.25,
    note: "Paparan matahari kuat, banyak kaca, plafon tinggi, atau aktivitas cukup ramai.",
  },
}

const pkOptions = [
  { pk: "1/2 PK", maxBtu: 5000, watt: 350, category: "/katalog/ac-low-watt" },
  { pk: "3/4 PK", maxBtu: 7000, watt: 500, category: "/katalog/ac-split-rumah" },
  { pk: "1 PK", maxBtu: 9000, watt: 750, category: "/artikel/ac-1-pk-untuk-ruangan-berapa" },
  { pk: "1.5 PK", maxBtu: 12000, watt: 1100, category: "/katalog/ac-split-rumah" },
  { pk: "2 PK", maxBtu: 18000, watt: 1500, category: "/katalog/ac-kantor-komersial" },
]

const usageProfiles = [
  "Kamar tidur",
  "Ruang keluarga",
  "Ruang kerja",
  "Toko kecil",
  "Kantor",
]

const tips = [
  "Pilih PK sesuai luas dan kondisi panas ruangan, jangan terlalu kecil.",
  "Untuk pemakaian lama setiap hari, pertimbangkan AC inverter.",
  "Untuk daya listrik terbatas, cek opsi low watt sesuai stok terbaru.",
  "Pastikan posisi indoor, outdoor, pipa, dan drainase bisa dipasang rapi.",
]

function formatNumber(value, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("id-ID", { maximumFractionDigits }).format(value)
}

function formatCurrency(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value)
}

function getRecommendation(btu) {
  return pkOptions.find((option) => btu <= option.maxBtu) || pkOptions[pkOptions.length - 1]
}

function Field({ label, children, helper }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white/85">{label}</span>
      {children}
      {helper ? <span className="mt-2 block text-xs leading-5 text-white/45">{helper}</span> : null}
    </label>
  )
}

function inputClassName() {
  return "w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
}

function SectionLabel({ children }) {
  return (
    <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
      {children}
    </div>
  )
}

export default function KalkulatorAc() {
  const [length, setLength] = useState(4)
  const [width, setWidth] = useState(3)
  const [height, setHeight] = useState(3)
  const [people, setPeople] = useState(2)
  const [condition, setCondition] = useState("normal")
  const [roomType, setRoomType] = useState("Kamar tidur")
  const [hoursPerDay, setHoursPerDay] = useState(8)
  const [daysPerMonth, setDaysPerMonth] = useState(30)
  const [tariff, setTariff] = useState(DEFAULT_TARIFF)

  const result = useMemo(() => {
    const safeLength = Math.max(Number(length) || 0, 0)
    const safeWidth = Math.max(Number(width) || 0, 0)
    const safeHeight = Math.max(Number(height) || 0, 0)
    const safePeople = Math.max(Number(people) || 0, 0)
    const area = safeLength * safeWidth
    const heightFactor = safeHeight > 3 ? 1 + Math.min((safeHeight - 3) * 0.08, 0.24) : 1
    const peopleExtraBtu = Math.max(safePeople - 2, 0) * 600
    const selectedCondition = roomConditions[condition] || roomConditions.normal
    const estimatedBtu = Math.ceil(((area * 500) * selectedCondition.multiplier * heightFactor + peopleExtraBtu) / 100) * 100
    const recommendation = getRecommendation(estimatedBtu)
    const dailyKwh = (recommendation.watt / 1000) * (Number(hoursPerDay) || 0)
    const monthlyKwh = dailyKwh * (Number(daysPerMonth) || 0)
    const monthlyCost = monthlyKwh * (Number(tariff) || DEFAULT_TARIFF)

    return {
      area,
      estimatedBtu,
      recommendation,
      dailyKwh,
      monthlyKwh,
      monthlyCost,
      selectedCondition,
    }
  }, [condition, daysPerMonth, height, hoursPerDay, length, people, tariff, width])

  const whatsappMessage = `Halo RADJA AC, saya sudah cek kebutuhan AC di website.\n\nJenis ruangan: ${roomType}\nUkuran ruangan: ${length} x ${width} meter\nLuas ruangan: ${formatNumber(result.area)} m²\nTinggi plafon: ${height} meter\nKondisi ruangan: ${result.selectedCondition.label}\nJumlah orang: ${people}\nRekomendasi awal: AC ${result.recommendation.pk}\nEstimasi kebutuhan: ±${formatNumber(result.estimatedBtu, 0)} BTU/h\nEstimasi listrik: ±${formatCurrency(result.monthlyCost)}/bulan\n\nSaya mau konsultasi produk AC yang cocok.`

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Bagaimana cara menghitung kebutuhan PK AC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kebutuhan PK AC bisa diperkirakan dari luas ruangan, tinggi plafon, jumlah orang, dan kondisi panas ruangan. Hasil kalkulator ini adalah estimasi awal untuk membantu konsultasi sebelum membeli AC.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah hasil kalkulator PK AC pasti akurat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hasil kalkulator bersifat estimasi. Rekomendasi final tetap perlu mempertimbangkan posisi ruangan, arah matahari, jumlah kaca, kebiasaan pemakaian, dan kondisi instalasi.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah RADJA AC bisa bantu pilih AC sesuai hasil kalkulator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bisa. Pengunjung dapat mengirim hasil kalkulator melalui WhatsApp agar tim RADJA AC membantu rekomendasi PK, brand, dan tipe AC yang sesuai.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Kalkulator PK AC & Estimasi Listrik | RADJA AC Purwokerto"
        description="Cek kebutuhan PK AC berdasarkan ukuran ruangan dan estimasi biaya listrik bulanan. Dapatkan rekomendasi awal sebelum konsultasi beli AC di RADJA AC Purwokerto."
        canonicalPath="/kalkulator-pk-ac"
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
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                KALKULATOR AC RADJA AC
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Kalkulator PK AC</span>
              </div>

              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                Cek kebutuhan PK AC & estimasi biaya listrik
              </h1>

              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Masukkan ukuran ruangan, kondisi panas, dan durasi pemakaian. Website akan memberi rekomendasi awal kapasitas AC, estimasi BTU, dan biaya listrik bulanan sebelum Anda konsultasi produk.
              </p>

              <div className="flex flex-wrap gap-2 text-sm text-white/65">
                {["Rekomendasi PK", "Estimasi BTU", "Estimasi listrik", "CTA WhatsApp otomatis"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-cyan-300/15 bg-slate-950/70 p-5 shadow-[0_28px_80px_rgba(8,20,47,0.42)]">
              <div className="mb-5 flex items-center justify-between gap-4 rounded-[26px] border border-white/10 bg-white/[0.04] p-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Hasil cepat</p>
                  <p className="mt-1 text-xl font-black text-white">AC {result.recommendation.pk}</p>
                </div>
                <Calculator className="h-10 w-10 text-cyan-300" />
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">Luas ruangan</p>
                  <p className="mt-1 text-2xl font-black text-white">{formatNumber(result.area)} m²</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">Estimasi pendinginan</p>
                  <p className="mt-1 text-2xl font-black text-white">±{formatNumber(result.estimatedBtu, 0)} BTU/h</p>
                </div>
                <div className="rounded-2xl border border-[#25D366]/20 bg-[#25D366]/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">Estimasi listrik</p>
                  <p className="mt-1 text-2xl font-black text-white">±{formatCurrency(result.monthlyCost)}/bulan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:sticky lg:top-28">
              <SectionLabel>Input Ruangan</SectionLabel>
              <h2 className="mb-5 text-2xl font-black tracking-[-0.03em] sm:text-3xl">Masukkan data ruangan</h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Panjang ruangan" helper="Dalam meter">
                  <input className={inputClassName()} type="number" min="0" step="0.1" value={length} onChange={(event) => setLength(event.target.value)} />
                </Field>
                <Field label="Lebar ruangan" helper="Dalam meter">
                  <input className={inputClassName()} type="number" min="0" step="0.1" value={width} onChange={(event) => setWidth(event.target.value)} />
                </Field>
                <Field label="Tinggi plafon" helper="Normalnya sekitar 2,7–3 meter">
                  <input className={inputClassName()} type="number" min="0" step="0.1" value={height} onChange={(event) => setHeight(event.target.value)} />
                </Field>
                <Field label="Jumlah orang" helper="Rata-rata orang di ruangan">
                  <input className={inputClassName()} type="number" min="0" step="1" value={people} onChange={(event) => setPeople(event.target.value)} />
                </Field>
                <Field label="Jenis ruangan">
                  <select className={inputClassName()} value={roomType} onChange={(event) => setRoomType(event.target.value)}>
                    {usageProfiles.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </Field>
                <Field label="Kondisi ruangan">
                  <select className={inputClassName()} value={condition} onChange={(event) => setCondition(event.target.value)}>
                    {Object.entries(roomConditions).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}
                  </select>
                </Field>
                <Field label="Pemakaian per hari" helper="Dalam jam">
                  <input className={inputClassName()} type="number" min="0" step="1" value={hoursPerDay} onChange={(event) => setHoursPerDay(event.target.value)} />
                </Field>
                <Field label="Pemakaian per bulan" helper="Dalam hari">
                  <input className={inputClassName()} type="number" min="0" step="1" value={daysPerMonth} onChange={(event) => setDaysPerMonth(event.target.value)} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Tarif listrik per kWh" helper="Default mendekati tarif rumah tangga umum. Bisa diganti sesuai kebutuhan.">
                    <input className={inputClassName()} type="number" min="0" step="1" value={tariff} onChange={(event) => setTariff(event.target.value)} />
                  </Field>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[32px] border border-cyan-300/15 bg-cyan-300/5 p-5 sm:p-6">
                <SectionLabel>Hasil Rekomendasi</SectionLabel>
                <div className="mb-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-center">
                    <Ruler className="mx-auto mb-2 h-6 w-6 text-cyan-300" />
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Luas</p>
                    <p className="mt-1 text-xl font-black">{formatNumber(result.area)} m²</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-center">
                    <Snowflake className="mx-auto mb-2 h-6 w-6 text-cyan-300" />
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">PK AC</p>
                    <p className="mt-1 text-xl font-black">{result.recommendation.pk}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-center">
                    <Zap className="mx-auto mb-2 h-6 w-6 text-cyan-300" />
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Daya acuan</p>
                    <p className="mt-1 text-xl font-black">±{result.recommendation.watt} W</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                  <h3 className="mb-3 text-xl font-black">Rekomendasi awal: AC {result.recommendation.pk}</h3>
                  <p className="mb-4 text-sm leading-7 text-white/65">
                    Estimasi kebutuhan pendinginan ruangan Anda sekitar ±{formatNumber(result.estimatedBtu, 0)} BTU/h. Kondisi: {result.selectedCondition.note}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Link to={result.recommendation.category} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 font-bold text-white/90 transition hover:bg-white/[0.06]">
                      Lihat referensi produk <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href={buildWhatsAppUrl(whatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-slate-950 transition hover:bg-[#20BA5A]">
                      <WhatsappIcon className="h-5 w-5" />
                      Kirim hasil ke WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <SectionLabel>Estimasi Listrik</SectionLabel>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Per hari</p>
                    <p className="mt-1 text-xl font-black">±{formatNumber(result.dailyKwh)} kWh</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Per bulan</p>
                    <p className="mt-1 text-xl font-black">±{formatNumber(result.monthlyKwh)} kWh</p>
                  </div>
                  <div className="rounded-2xl border border-[#25D366]/20 bg-[#25D366]/10 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">Biaya</p>
                    <p className="mt-1 text-xl font-black">±{formatCurrency(result.monthlyCost)}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-amber-300/15 bg-amber-300/5 p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-3 text-amber-200">
                  <AlertTriangle className="h-5 w-5" />
                  <h3 className="font-black text-white">Catatan penting</h3>
                </div>
                <p className="text-sm leading-7 text-white/65">
                  Hasil ini adalah estimasi awal, bukan keputusan final. Rekomendasi terbaik tetap perlu melihat arah matahari, jumlah kaca, posisi indoor/outdoor, panjang pipa, daya listrik, dan kebiasaan pemakaian.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8 text-center">
            <SectionLabel>Kenapa Ini Membantu</SectionLabel>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Beli AC jadi lebih terarah</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Kalkulator ini membantu calon pembeli memahami kebutuhan awal sebelum memilih brand, tipe, dan budget AC.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Tidak salah PK", description: "Kapasitas yang terlalu kecil bisa membuat AC bekerja berat dan ruangan kurang dingin.", icon: Home },
              { title: "Lebih paham listrik", description: "Estimasi kWh membantu membandingkan kebutuhan listrik harian dan bulanan.", icon: Zap },
              { title: "Mudah konsultasi", description: "Hasil kalkulator bisa langsung dikirim ke WhatsApp admin RADJA AC.", icon: MessageCircle },
            ].map(({ title, description, icon: Icon }) => (
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
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="mb-8 text-center">
              <SectionLabel>Tips Pilih AC</SectionLabel>
              <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Setelah tahu PK, pilih tipe yang cocok</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {tips.map((tip) => (
                <div key={tip} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-sm leading-6 text-white/70">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 text-center shadow-[0_35px_90px_rgba(8,145,178,0.12)] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#25D366]/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex justify-center text-cyan-300"><Sparkles className="h-10 w-10" /></div>
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Sudah dapat hasil? Konsultasikan ke RADJA AC</h2>
              <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Kirim hasil kalkulator ke admin. Tim RADJA AC bantu cek pilihan AC Daikin, Gree, Midea, Hisense, Sansui, Sharp, Panasonic, dan brand lain sesuai stok terbaru.
              </p>
              <a href={buildWhatsAppUrl(whatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]">
                <WhatsappIcon className="h-5 w-5 text-slate-950" />
                Kirim Hasil & Konsultasi
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
