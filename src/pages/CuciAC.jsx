import SeoHead from "../components/SeoHead"
import { Helmet } from "react-helmet-async"
import { businessSchema, createServiceSchema } from "../utils/schemaUtils"
import Navbar from "../components/Navbar"
import CuciACPricingSection from "../components/CuciACPricingSection"
import PrimaryCTASection from "../components/PrimaryCTASection"
import CuciACFAQSection from "../components/CuciACFAQSection"
import TrustStripSection from "../components/TrustStripSection"
import MiniReviewSection from "../components/MiniReviewSection"
import AreaCoverageSection from "../components/AreaCoverageSection"
import InternalLinksSection from "../components/InternalLinksSection"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import Footer from "../components/Footer"

const benefits = [
  {
    title: "Cuci Indoor & Outdoor",
    desc: "Layanan lengkap membersihkan unit indoor dan outdoor untuk kinerja AC yang kembali maksimal.",
  },
  {
    title: "Hemat Listrik",
    desc: "AC bersih mengurangi beban kerja dan konsumsi listrik pada unit pendingin Anda.",
  },
  {
    title: "Udara Lebih Sehat",
    desc: "Debu, kotoran, dan jamur dibersihkan untuk udara yang lebih segar dan nyaman.",
  },
  {
    title: "Teknisi Rapi & Cepat",
    desc: "Teknisi kami datang dengan peralatan lengkap dan bekerja rapi di rumah atau kantor Anda.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Inspeksi AC",
    desc: "Teknisi memeriksa kondisi unit indoor dan outdoor untuk menentukan tingkat kekotoran.",
  },
  {
    step: "02",
    title: "Pembersihan Menyeluruh",
    desc: "Cuci indoor, outdoor, ganti filter, dan bersihkan saluran drainase dengan teliti.",
  },
  {
    step: "03",
    title: "Pengecekan Fungsi",
    desc: "Verifikasi AC dingin merata, aliran angin lancar, dan drainase berfungsi baik.",
  },
  {
    step: "04",
    title: "Laporan Hasil",
    desc: "Teknisi memberikan laporan kondisi AC dan rekomendasi perawatan selanjutnya.",
  },
]

export default function CuciAC() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Cuci AC Purwokerto Murah & Bersih | Radja AC"
        description="Jasa cuci AC Purwokerto untuk rumah, kost, kantor, dan toko. Pembersihan menyeluruh agar AC kembali dingin dan hemat listrik."
        canonicalPath="/cuci-ac-purwokerto"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createServiceSchema(
            "Cuci AC",
            "Jasa cuci AC Purwokerto untuk rumah, kost, kantor, dan toko. Pembersihan menyeluruh agar AC kembali dingin dan hemat listrik."
          ))}
        </script>
      </Helmet>

      {/* BACKGROUND GRADIENTS */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-5 pt-20">
        <section className="pb-16 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/10 to-transparent pointer-events-none" />
          <div className="absolute right-[-120px] top-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute left-[-120px] bottom-0 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                CUCI AC PURWOKERTO • LAYANAN PANGGILAN
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight sm:leading-tight md:leading-[0.95] tracking-[-0.03em] mb-6 max-w-2xl">
                Cuci AC Profesional
                <span className="text-cyan-300"> AC Lebih Dingin & Hemat Listrik</span>
              </h1>

              <p className="text-white/70 text-base md:text-lg leading-relaxed md:leading-8 max-w-xl mb-8">
                Layanan cuci AC rutin dengan teknisi berpengalaman. Kami membersihkan unit AC secara menyeluruh agar performa kembali optimal, hemat listrik, dan bebas bau jamur.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-4">
                <a
                  href="https://wa.me/62882008246099"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-black font-bold px-7 py-4 rounded-full shadow-[0_20px_60px_rgba(37,211,102,0.18)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  Cuci AC Sekarang
                </a>

                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/10 text-white/90 font-semibold transition hover:bg-white/[0.05]"
                >
                  Lihat Harga
                </a>
              </div>

              <p className="text-white/60 text-sm md:text-base max-w-xl mb-8">
                Fast response • 30-60 menit per unit • Teknisi profesional • Garansi layanan
              </p>

              <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
                {["Pembersihan Menyeluruh", "Filter Baru", "Drainase Aman", "Laporan Hasil"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80"
                    >
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent rounded-[32px] opacity-50" />
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 shadow-xl shadow-cyan-500/10">
                <img
                  src="https://images.unsplash.com/photo-1591047139829-6f61c3a0ce94?auto=format&fit=crop&w=1200&q=80"
                  alt="Teknisi AC membersihkan unit indoor AC"
                  className="h-full w-full object-cover aspect-square"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* TRUST SECTION */}
      <TrustStripSection />

      {/* BENEFITS SECTION */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <section className="px-6 py-16 bg-slate-950 rounded-3xl border border-slate-800/50">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              KEUNGGULAN LAYANAN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mengapa Pilih Cuci AC Radja AC?
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Kami fokus pada kebersihan, performa, dan kenyamanan AC. Setiap kunjungan ditangani teknisi berpengalaman dengan hasil yang bisa dirasakan langsung.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* PROCESS SECTION */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <section className="rounded-3xl border border-slate-800/50">
          <div className="text-center mb-12 px-6 pt-16">
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              PROSES LAYANAN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tahapan Cuci AC yang Profesional
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Kami bekerja sistematis untuk memastikan setiap bagian AC dibersihkan dengan sempurna.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 px-6 pb-16">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1"
              >
                <div className="text-3xl font-black text-cyan-300 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* BEFORE/AFTER SECTION */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <section className="rounded-3xl border border-slate-800/50 bg-slate-900/20 px-6 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              HASIL NYATA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformasi AC Setelah Cuci
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Lihat perubahan nyata pada performa AC setelah layanan pembersihan profesional kami.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Performa Dingin",
                before: "AC kurang dingin, angin lemah",
                after: "AC dingin merata, aliran angin kuat",
                icon: "❄️",
              },
              {
                title: "Kualitas Udara",
                before: "Bau tak sedap, udara lembab",
                after: "Udara segar, rumah terasa nyaman",
                icon: "💨",
              },
              {
                title: "Efisiensi Listrik",
                before: "Listrik boros, kompressor bekerja keras",
                after: "Hemat listrik, AC lebih efisien",
                icon: "⚡",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
                    <p className="text-sm text-red-300 font-medium">Sebelum:</p>
                    <p className="text-sm text-red-200/70">{item.before}</p>
                  </div>
                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3">
                    <p className="text-sm text-green-300 font-medium">Sesudah:</p>
                    <p className="text-sm text-green-200/70">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* SIGNS AC NEEDS CLEANING */}
      <div className="max-w-7xl mx-auto px-5">
        <SignsAcNeedsCleaningSection />
      </div>

      {/* PRICING */}
      <div className="max-w-7xl mx-auto px-5" id="pricing">
        <CuciACPricingSection />
      </div>

      {/* REVIEWS */}
      <div className="max-w-7xl mx-auto px-5">
        <MiniReviewSection />
      </div>

      {/* AREA COVERAGE */}
      <div className="max-w-7xl mx-auto px-5">
        <AreaCoverageSection />
      </div>

      {/* INTERNAL LINKS */}
      <div className="max-w-7xl mx-auto px-5">
        <InternalLinksSection />
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-5">
        <CuciACFAQSection />
      </div>

      {/* CTA */}
      <PrimaryCTASection
        pretitle="Booking Cuci AC"
        title="Jaga AC tetap dingin dan hemat listrik"
        description="Jadwalkan cuci AC profesional untuk rumah atau usaha Anda. Teknisi kami membersihkan unit secara lengkap dan menjaga udara tetap segar."
        buttonLabel="Chat WhatsApp Sekarang"
        subText="Fast response • Area Purwokerto & Banyumas • Teknisi berpengalaman"
      />

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}