import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import SectionHeading from "../components/ui/SectionHeading"
import { createFAQSchema } from "../utils/schemaUtils"

const heroBadges = [
  "Dealer resmi",
  "Multi-brand",
  "Instalasi profesional",
  "Konsultasi gratis",
]

const acSales = [
  {
    title: "AC untuk rumah",
    description: "Lengkapi rumah di Purwokerto Selatan dengan AC yang tepat — tersedia berbagai PK dan jenis untuk hunian, perumahan, dan kos.",
  },
  {
    title: "AC untuk kantor & ruko",
    description: "Dukung produktivitas kerja dengan pendingin ruangan yang andal untuk kantor, ruko, dan ruang usaha di Purwokerto Selatan.",
  },
  {
    title: "Harga bersaing & transparan",
    description: "Dapatkan harga AC terbaik tanpa biaya tersembunyi — info lengkap diskon dan paket pemasangan tersedia untuk pelanggan Purwokerto Selatan.",
  },
  {
    title: "Garansi resmi dari brand",
    description: "Setiap unit AC dilengkapi garansi resmi dari Daikin, Gree, Panasonic, atau Sharp — tenang saat bertransaksi di RADJA AC.",
  },
]

const brands = [
  {
    name: "Daikin",
    tagline: "AC premium Jepang dengan teknologi inverter dan hemat listrik yang cocok untuk rumah dan kantor di Purwokerto Selatan.",
    link: "/daikin-purwokerto",
  },
  {
    name: "Gree",
    tagline: "AC berkualitas dengan harga terjangkau, pilihan tepat untuk perumahan dan ruko di area Purwokerto Selatan.",
    link: "/gree-purwokerto",
  },
  {
    name: "Panasonic",
    tagline: "AC modern dengan fitur smart dan efisiensi tinggi, ideal untuk hunian dan ruang usaha di Purwokerto Selatan.",
  },
  {
    name: "Sharp",
    tagline: "AC andal dengan plasma filter dan konsumsi daya rendah — solusi hemat untuk kebutuhan rumah dan kantor.",
  },
]

const instalasiLayanan = [
  {
    title: "Instalasi AC rumah",
    description: "Pasang AC untuk kamar tidur, ruang keluarga, atau seluruh rumah di perumahan Purwokerto Selatan dengan hasil rapi dan aman.",
  },
  {
    title: "Instalasi AC kantor & ruko",
    description: "Pemasangan AC untuk ruang kerja dan usaha di Purwokerto Selatan agar aktivitas tetap nyaman dan produktif.",
  },
  {
    title: "Survey kebutuhan ruangan",
    description: "Tim kami datang langsung ke lokasi untuk mengukur luas ruangan dan merekomendasikan PK serta jenis AC yang sesuai.",
  },
  {
    title: "Pemasangan rapi & terjamin",
    description: "Tata kabel tertata, bracket kokoh, pengecekan tekanan gas, dan simulasi operasi sebelum diserahkan ke pelanggan.",
  },
]

const whyRadjaAC = [
  {
    title: "Lokal Purwokerto Selatan",
    description: "Kami paham kebutuhan pendingin udara di lingkungan Purwokerto Selatan — dari perumahan hingga kawasan bisnis sekitar.",
  },
  {
    title: "Konsultasi kebutuhan AC",
    description: "Bingung menentukan PK atau jenis AC? Tim kami siap membantu konsultasi berdasarkan ukuran ruangan, daya listrik, dan budget.",
  },
  {
    title: "Survey ruangan langsung",
    description: "Kami lakukan survey ke lokasi untuk memastikan instalasi AC berjalan sesuai kondisi riil rumah atau usaha Anda.",
  },
  {
    title: "Instalasi profesional & rapi",
    description: "Pemasangan dikerjakan oleh teknisi berpengalaman dengan standar kerapian tinggi dan jaminan keamanan.",
  },
]

const faqItems = [
  {
    question: "Apakah RADJA AC melayani area Purwokerto Selatan?",
    answer: "Tentu. Kami melayani penjualan dan instalasi AC di seluruh area Purwokerto Selatan termasuk perumahan, ruko, dan kantor di sekitar wilayah tersebut.",
  },
  {
    question: "Apakah tersedia instalasi AC untuk rumah dan kantor?",
    answer: "Ya. Kami menyediakan jasa instalasi AC untuk rumah tinggal, kantor, ruko, dan berbagai ruang usaha di Purwokerto Selatan dengan pengerjaan profesional.",
  },
  {
    question: "Bisa konsultasi dulu sebelum beli AC?",
    answer: "Silakan. Tim RADJA AC siap konsultasi gratis untuk membantu Anda menentukan PK, jenis AC (standar/inverter/low watt), dan solusi yang paling sesuai.",
  },
  {
    question: "Apakah tersedia AC inverter di RADJA AC?",
    answer: "Tersedia. Kami menjual AC inverter dari berbagai brand seperti Daikin, Gree, dan Panasonic yang lebih hemat listrik untuk penggunaan jangka panjang.",
  },
  {
    question: "Berapa lama waktu pemasangan AC?",
    answer: "Pemasangan AC umumnya selesai dalam 2–4 jam tergantung kerumitan instalasi. Untuk jadwal pastinya bisa diatur sesuai kesepakatan.",
  },
  {
    question: "Apakah ada garansi untuk pembelian AC?",
    answer: "Setiap unit AC yang dibeli di RADJA AC dilengkapi garansi resmi dari brand terkait — baik untuk unit maupun jasa pemasangan sesuai ketentuan.",
  },
]

export default function AcPurwokertoSelatan() {
  const faqSchema = createFAQSchema(faqItems)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SeoHead
        title="Dealer AC Purwokerto Selatan | Jual & Instalasi AC - RADJA AC"
        description="RADJA AC menyediakan penjualan dan instalasi AC di Purwokerto Selatan untuk rumah, kantor, dan bisnis dengan pilihan brand lengkap serta konsultasi gratis."
        canonicalPath="/ac-purwokerto-selatan"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto grid gap-10 xl:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-5">
                AC Purwokerto Selatan
              </span>

              <div className="mb-6 text-sm text-slate-400">
                <Link to="/" className="hover:text-cyan-300">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">AC Purwokerto Selatan</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] mb-6">
                Dealer & Instalasi AC di Purwokerto Selatan
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
                RADJA AC melayani penjualan dan pemasangan AC di Purwokerto Selatan untuk rumah, kantor, ruko, dan perumahan dengan pilihan brand Daikin, Gree, Panasonic, Sharp serta konsultasi gratis.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-7">
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Tanya Harga AC
                </Link>
                <Link
                  to="/kontak"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Konsultasi Gratis
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
                {heroBadges.map((badge) => (
                  <div key={badge} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 text-center">
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-900 shadow-[0_30px_70px_rgba(7,89,133,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1600121848594-dced4f72c656?auto=format&fit=crop&w=900&q=70"
                alt="Dealer AC Purwokerto Selatan — jual dan instalasi AC untuk rumah, kantor, dan bisnis"
                className="h-full w-full object-cover aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Penjualan AC di Purwokerto Selatan */}
        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Penjualan AC di Purwokerto Selatan</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              RADJA AC menyediakan berbagai pilihan AC untuk kebutuhan rumah, kantor, ruko, perumahan, dan ruang usaha di Purwokerto Selatan dengan harga transparan dan garansi resmi.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {acSales.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand AC Tersedia */}
        <section className="px-6 py-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Brand AC Tersedia di Purwokerto Selatan</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Kami menyediakan berbagai brand AC ternama yang bisa dipilih sesuai kebutuhan hunian dan usaha Anda di Purwokerto Selatan.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {brands.map((brand) => (
              <article key={brand.name} className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:border-cyan-300/30">
                <h3 className="text-2xl font-semibold text-white mb-3">{brand.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{brand.tagline}</p>
                {brand.link ? (
                  <Link
                    to={brand.link}
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Lihat {brand.name}
                  </Link>
                ) : (
                  <Link
                    to="/kontak"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Tanya {brand.name}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Internal link section */}
        <section className="px-6 py-10 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 text-center">
            <p className="text-slate-300 text-base leading-relaxed">
              Cari AC inverter hemat listrik?{' '}
              <Link to="/ac-inverter-purwokerto" className="font-semibold text-cyan-300 hover:text-cyan-200">
                Lihat AC Inverter Purwokerto
              </Link>
              &nbsp;atau{' '}
              <Link to="/ac-low-watt-purwokerto" className="font-semibold text-cyan-300 hover:text-cyan-200">
                AC Low Watt Purwokerto
              </Link>
            </p>
          </div>
        </section>

        {/* Instalasi AC Rumah & Kantor */}
        <section className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Instalasi AC Rumah & Kantor di Purwokerto Selatan</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Layanan instalasi AC untuk rumah, kantor, ruko, perumahan, dan ruang usaha di Purwokerto Selatan dengan pengerjaan rapi oleh teknisi berpengalaman.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {instalasiLayanan.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real Local Trust Section */}
        <section className="px-6 py-16 lg:px-8 bg-slate-900/40">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">Mengapa Memilih RADJA AC di Purwokerto Selatan?</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Kami adalah dealer AC yang memahami kebutuhan pendingin udara khusus untuk wilayah Purwokerto Selatan — dari perumahan hingga pusat bisnis.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {whyRadjaAC.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition hover:border-cyan-300/30 hover:-translate-y-1">
                <p className="text-cyan-300 font-semibold mb-4">{item.title}</p>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-6 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <SectionHeading className="text-4xl sm:text-5xl">FAQ AC Purwokerto Selatan</SectionHeading>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Jawaban untuk pertanyaan umum seputar penjualan dan instalasi AC di Purwokerto Selatan.
            </p>
          </div>

          <div className="grid gap-5">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-slate-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 pb-24 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-[32px] border border-cyan-400/20 bg-cyan-400/5 p-8 text-center shadow-[0_35px_90px_rgba(6,78,122,0.16)]">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200 font-semibold mb-4">
              AC Purwokerto Selatan
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Siap Pasang AC di Rumah atau Kantor Anda?
            </h2>
            <p className="text-slate-100 text-lg leading-relaxed mb-8">
              Hubungi RADJA AC sekarang untuk konsultasi gratis, cek ketersediaan unit, dan jadwalkan instalasi AC di Purwokerto Selatan.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white border border-white/10 shadow-[0_24px_45px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
              >
                Konsultasi AC Gratis
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/20"
              >
                Cek Harga & Stok
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}