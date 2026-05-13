import { useMemo, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { AlertTriangle, ArrowRight, Calculator, CheckCircle2, Ruler, Snowflake, Zap } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const DEFAULT_TARIFF = 1444.7
const roomConditions = {
  normal: { label: "Normal", multiplier: 1, note: "Ruangan cukup tertutup dan tidak terlalu panas." },
  hot: { label: "Cukup panas", multiplier: 1.12, note: "Ada paparan matahari, plafon agak tinggi, atau ruangan mudah panas." },
  veryHot: { label: "Sangat panas", multiplier: 1.25, note: "Banyak kaca, panas matahari kuat, plafon tinggi, atau aktivitas ramai." },
}
const pkOptions = [
  { pk: "1/2 PK", maxBtu: 5000, watt: 350, category: "/katalog/ac-low-watt" },
  { pk: "3/4 PK", maxBtu: 7000, watt: 500, category: "/katalog/ac-split-rumah" },
  { pk: "1 PK", maxBtu: 9000, watt: 750, category: "/artikel/ac-1-pk-untuk-ruangan-berapa" },
  { pk: "1.5 PK", maxBtu: 12000, watt: 1100, category: "/katalog/ac-split-rumah" },
  { pk: "2 PK", maxBtu: 18000, watt: 1500, category: "/katalog/ac-kantor-komersial" },
]
const roomTypes = ["Kamar tidur", "Ruang keluarga", "Ruang kerja", "Toko kecil", "Kantor"]
const quickTips = ["Hasil ini estimasi awal.", "Ruangan panas butuh kapasitas lebih besar.", "Pemakaian lama cocok pertimbangkan inverter.", "Daya terbatas bisa cek opsi low watt."]

function formatNumber(value, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("id-ID", { maximumFractionDigits }).format(value)
}
function formatCurrency(value) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value)
}
function getRecommendation(btu) {
  return pkOptions.find((option) => btu <= option.maxBtu) || pkOptions[pkOptions.length - 1]
}
function inputClassName() {
  return "w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
}
function Field({ label, children }) {
  return <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-white/55">{label}</span>{children}</label>
}
function ResultCard({ icon: Icon, label, value, highlight = false }) {
  return <div className={`rounded-2xl border p-4 ${highlight ? "border-[#25D366]/25 bg-[#25D366]/10" : "border-white/10 bg-slate-950/55"}`}><div className="mb-2 flex items-center gap-2 text-cyan-300"><Icon className="h-4 w-4" /><p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">{label}</p></div><p className="text-xl font-black text-white sm:text-2xl">{value}</p></div>
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
    const area = Math.max(Number(length) || 0, 0) * Math.max(Number(width) || 0, 0)
    const safeHeight = Math.max(Number(height) || 0, 0)
    const safePeople = Math.max(Number(people) || 0, 0)
    const selectedCondition = roomConditions[condition] || roomConditions.normal
    const heightFactor = safeHeight > 3 ? 1 + Math.min((safeHeight - 3) * 0.08, 0.24) : 1
    const peopleExtraBtu = Math.max(safePeople - 2, 0) * 600
    const estimatedBtu = Math.ceil(((area * 500) * selectedCondition.multiplier * heightFactor + peopleExtraBtu) / 100) * 100
    const recommendation = getRecommendation(estimatedBtu)
    const dailyKwh = (recommendation.watt / 1000) * (Number(hoursPerDay) || 0)
    const monthlyKwh = dailyKwh * (Number(daysPerMonth) || 0)
    const monthlyCost = monthlyKwh * (Number(tariff) || DEFAULT_TARIFF)
    return { area, estimatedBtu, recommendation, dailyKwh, monthlyKwh, monthlyCost, selectedCondition }
  }, [condition, daysPerMonth, height, hoursPerDay, length, people, tariff, width])

  const whatsappMessage = `Halo RADJA AC, saya sudah cek kebutuhan AC di website.\n\nJenis ruangan: ${roomType}\nUkuran ruangan: ${length} x ${width} meter\nLuas ruangan: ${formatNumber(result.area)} m²\nTinggi plafon: ${height} meter\nKondisi ruangan: ${result.selectedCondition.label}\nJumlah orang: ${people}\nRekomendasi awal: AC ${result.recommendation.pk}\nEstimasi kebutuhan: ±${formatNumber(result.estimatedBtu, 0)} BTU/h\nEstimasi listrik: ±${formatCurrency(result.monthlyCost)}/bulan\n\nSaya mau konsultasi produk AC yang cocok.`
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Bagaimana cara menghitung kebutuhan PK AC?", acceptedAnswer: { "@type": "Answer", text: "Kebutuhan PK AC bisa diperkirakan dari luas ruangan, tinggi plafon, jumlah orang, dan kondisi panas ruangan." } }, { "@type": "Question", name: "Apakah hasil kalkulator PK AC pasti akurat?", acceptedAnswer: { "@type": "Answer", text: "Hasil kalkulator bersifat estimasi. Rekomendasi final tetap perlu mempertimbangkan posisi ruangan, arah matahari, jumlah kaca, kebiasaan pemakaian, dan kondisi instalasi." } }] }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead title="Kalkulator PK AC & Estimasi Listrik | RADJA AC Purwokerto" description="Cek kebutuhan PK AC berdasarkan ukuran ruangan dan estimasi biaya listrik bulanan. Dapatkan rekomendasi awal sebelum konsultasi beli AC di RADJA AC Purwokerto." canonicalPath="/kalkulator-pk-ac" />
      <Helmet><script type="application/ld+json">{JSON.stringify(faqSchema)}</script></Helmet>
      <Navbar />
      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden"><div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" /><div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/16 blur-[120px]" /></div>
        <section className="mx-auto max-w-7xl px-6 pb-14 pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="mb-8 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"><Calculator className="h-4 w-4" />Kalkulator AC RADJA AC</div>
            <div className="mb-4 text-sm text-white/50"><Link to="/" className="transition hover:text-cyan-300">Beranda</Link><span className="mx-2">/</span><span className="text-white/80">Kalkulator AC</span></div>
            <h1 className="mb-4 text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl">Cek PK AC & estimasi listrik dalam 1 menit</h1>
            <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base">Isi ukuran ruangan, kondisi panas, dan lama pemakaian. Hasilnya bisa langsung dikirim ke WhatsApp untuk rekomendasi produk.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_28px_80px_rgba(8,20,47,0.24)] sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Input</p><h2 className="mt-1 text-2xl font-black">Data ruangan</h2></div><Ruler className="h-8 w-8 text-cyan-300" /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Panjang (m)"><input className={inputClassName()} type="number" min="0" step="0.1" value={length} onChange={(event) => setLength(event.target.value)} /></Field>
                <Field label="Lebar (m)"><input className={inputClassName()} type="number" min="0" step="0.1" value={width} onChange={(event) => setWidth(event.target.value)} /></Field>
                <Field label="Plafon (m)"><input className={inputClassName()} type="number" min="0" step="0.1" value={height} onChange={(event) => setHeight(event.target.value)} /></Field>
                <Field label="Orang"><input className={inputClassName()} type="number" min="0" step="1" value={people} onChange={(event) => setPeople(event.target.value)} /></Field>
                <Field label="Jenis ruang"><select className={inputClassName()} value={roomType} onChange={(event) => setRoomType(event.target.value)}>{roomTypes.map((item) => <option key={item}>{item}</option>)}</select></Field>
                <Field label="Kondisi panas"><select className={inputClassName()} value={condition} onChange={(event) => setCondition(event.target.value)}>{Object.entries(roomConditions).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}</select></Field>
                <Field label="Jam / hari"><input className={inputClassName()} type="number" min="0" step="1" value={hoursPerDay} onChange={(event) => setHoursPerDay(event.target.value)} /></Field>
                <Field label="Hari / bulan"><input className={inputClassName()} type="number" min="0" step="1" value={daysPerMonth} onChange={(event) => setDaysPerMonth(event.target.value)} /></Field>
              </div>
              <div className="mt-4"><Field label="Tarif listrik / kWh"><input className={inputClassName()} type="number" min="0" step="1" value={tariff} onChange={(event) => setTariff(event.target.value)} /></Field></div>
            </div>
            <div className="rounded-[30px] border border-cyan-300/15 bg-cyan-300/5 p-5 shadow-[0_28px_80px_rgba(8,145,178,0.16)] sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Hasil</p><h2 className="mt-1 text-2xl font-black">Rekomendasi awal</h2></div><Snowflake className="h-8 w-8 text-cyan-300" /></div>
              <div className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <ResultCard icon={Ruler} label="Luas" value={`${formatNumber(result.area)} m²`} />
                <ResultCard icon={Snowflake} label="PK AC" value={result.recommendation.pk} highlight />
                <ResultCard icon={Calculator} label="BTU" value={`±${formatNumber(result.estimatedBtu, 0)}`} />
                <ResultCard icon={Zap} label="Listrik" value={`±${formatCurrency(result.monthlyCost)}`} highlight />
              </div>
              <div className="mb-5 rounded-3xl border border-white/10 bg-slate-950/60 p-5"><h3 className="mb-2 text-xl font-black">AC {result.recommendation.pk} untuk ruangan ±{formatNumber(result.area)} m²</h3><p className="text-sm leading-7 text-white/65">Estimasi pendinginan ±{formatNumber(result.estimatedBtu, 0)} BTU/h. Konsumsi listrik kira-kira ±{formatNumber(result.dailyKwh)} kWh/hari atau ±{formatNumber(result.monthlyKwh)} kWh/bulan. {result.selectedCondition.note}</p></div>
              <div className="mb-5 grid gap-3 sm:grid-cols-2"><Link to={result.recommendation.category} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 font-bold text-white/90 transition hover:bg-white/[0.06]">Lihat produk cocok <ArrowRight className="h-4 w-4" /></Link><a href={buildWhatsAppUrl(whatsappMessage)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-slate-950 transition hover:bg-[#20BA5A]"><WhatsappIcon className="h-5 w-5" />Kirim ke WhatsApp</a></div>
              <div className="rounded-3xl border border-amber-300/15 bg-amber-300/5 p-4"><div className="mb-2 flex items-center gap-2 text-amber-200"><AlertTriangle className="h-4 w-4" /><p className="font-bold text-white">Catatan estimasi</p></div><p className="text-sm leading-7 text-white/62">Hasil final tetap perlu cek arah matahari, jumlah kaca, posisi indoor/outdoor, panjang pipa, dan daya listrik rumah.</p></div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24"><div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 sm:p-6"><div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Tips cepat</p><h2 className="text-2xl font-black tracking-[-0.03em] sm:text-3xl">Biar tidak salah beli AC</h2></div><p className="max-w-xl text-sm leading-7 text-white/58">Setelah hasil keluar, kirim ke admin RADJA AC supaya pilihan brand dan tipe disesuaikan dengan stok terbaru.</p></div><div className="grid gap-3 md:grid-cols-4">{quickTips.map((tip) => <div key={tip} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/55 p-4 text-sm leading-6 text-white/70"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" /><span>{tip}</span></div>)}</div></div></section>
      </main>
      <Footer />
    </div>
  )
}
