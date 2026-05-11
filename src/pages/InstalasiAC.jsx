import { Helmet } from "react-helmet-async"
import { businessSchema, createServiceSchema } from "../utils/schemaUtils"
import AreaCoverageSection from "../components/AreaCoverageSection"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import Footer from "../components/Footer"
import InternalLinksSection from "../components/InternalLinksSection"
import MiniReviewSection from "../components/MiniReviewSection"
import Navbar from "../components/Navbar"
import PrimaryCTASection from "../components/PrimaryCTASection"
import SeoHead from "../components/SeoHead"
import TrustStripSection from "../components/TrustStripSection"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const installationBenefits = [
  {
    title: "Pemasangan Rapi",
    desc: "Pemasangan AC dilakukan dengan finish yang bersih dan aman, tanpa merusak dinding atau plafon.",
  },
  {
    title: "Teknisi Bersertifikat",
    desc: "Tim kami ahli memasang AC split, cassette, dan multi-split untuk rumah maupun bisnis.",
  },
  {
    title: "Kabel & Pipa Rapi",
    desc: "Penataan kabel, pipa, dan saluran drainase dibuat tertata agar tampilan tetap profesional.",
  },
  {
    title: "Garansi Pengerjaan",
    desc: "Pemasangan aman dengan garansi jasa, sehingga Anda lebih tenang menggunakan AC baru.",
  },
]

const installPackages = [
  {
    title: "Instalasi AC Split",
    price: "Mulai Rp250.000",
    desc: "Pemasangan satu unit AC split standar termasuk bracket dan saluran pipa.",
  },
  {
    title: "Instalasi AC Cassette",
    price: "Mulai Rp450.000",
    desc: "Paket pemasangan untuk AC cassette atau ducted dengan finishing rapi.",
  },
  {
    title: "Instalasi Multi Split",
    price: "Estimasi Custom",
    desc: "Solusi pemasangan multi split untuk ruang besar, kantor, dan ruangan komersial.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Konsultasi Lokasi",
    desc: "Teknisi survei lokasi untuk menentukan posisi outdoor, routing kabel, dan kebutuhan material.",
  },
  {
    step: "02",
    title: "Persiapan & Setup",
    desc: "Persiapan peralatan, bracket, pipa, dan bahan-bahan lain sesuai spesifikasi lokasi.",
  },
  {
    step: "03",
    title: "Pemasangan Unit",
    desc: "Pemasangan bracket, unit outdoor, unit indoor, dan koneksi saluran pipa dengan presisi.",
  },
  {
    step: "04",
    title: "Pengujian & Finishing",
    desc: "Pengujian fungsi AC, pengecekan listrik, dan penyelesaian finishing agar terlihat profesional.",
  },
]

const commonProblems = [
  {
    title: "Pipa AC Tidak Tersusun Rapi",
    desc: "Pipa dan kabel yang terpasang sembarangan berisiko bocor, sulit dibersihkan, dan mengurangi estetika ruangan.",
  },
  {
    title: "Daya Listrik Tidak Sesuai",
    desc: "Sambungan listrik yang kurang kuat dapat menyebabkan AC mati total atau membuat beban listrik berlebih.",
  },
  {
    title: "Unit AC Berguncang",
    desc: "Bracket yang kurang kuat atau paraf tidak terpasang tepat dapat membuat unit outdoor bergetar berlebihan.",
  },
  {
    title: "Drainase Tersumbat",
    desc: "Drainase tidak pas menyebabkan air menetes dan dapat merusak dinding atau lantai di bawah AC.",
  },
]

const faqItems = [
  {
    question: "Berapa lama pemasangan AC biasa?",
    answer:
      "Pemasangan AC split rata-rata selesai 2-4 jam, tergantung akses lokasi dan jenis instalasi.",
  },
  {
    question: "Apakah saya perlu menyiapkan material?",
    answer:
      "Teknisi membawa material standar. Bila diperlukan tambahan material, kami informasikan sebelum pemasangan.",
  },
  {
    question: "Apakah instalasi termasuk pengecekan listrik?",
    answer:
      "Ya, kami memeriksa sambungan listrik dan memastikan arus sesuai kapasitas unit AC.",
  },
  {
    question: "Apakah ada garansi setelah pemasangan?",
    answer:
      "Setiap instalasi mendapatkan garansi pengerjaan, sehingga Anda terlindungi setelah pemasangan selesai.",
  },
  {
    question: "Berapa biaya jika ruangan jauh dari lokasi outdoor?",
    answer:
      "Pipa panjang akan mempengaruhi harga. Kami memberikan estimate setelah surveи lokasi.",
  },
]

export default function InstalasiAC() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Instalasi AC Banyumas & Purwokerto | Radja AC"
        description="Jasa instalasi AC Banyumas dan Purwokerto untuk rumah dan kantor. Pemasangan rapi, aman, dan bergaransi teknisi berpengalaman."
        canonicalPath="/instalasi-ac-banyumas"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createServiceSchema(
            "Instalasi AC",
            "Jasa instalasi AC Banyumas dan Purwokerto untuk rumah dan kantor. Pemasangan rapi, aman, dan bergaransi teknisi berpengalaman."
          ))}
        </script>
      </Helmet>

      {/* BACKGROUND GRADIENTS */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px]" />
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
                INSTALASI AC BANYUMAS • PEMASANGAN PROFESIONAL
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight sm:leading-tight md:leading-[0.95] tracking-[-0.03em] mb-6 max-w-2xl">
                Instalasi AC Profesional
                <span className="text-cyan-300"> Rapi, Aman & Bergaransi</span>
              </h1>

              <p className="text-white/70 text-base md:text-lg leading-relaxed md:leading-8 max-w-xl mb-8">
                Layanan instalasi AC dengan standar profesional untuk rumah, kantor, dan tempat usaha. Teknisi bersertifikat, pengerjaan rapi, dan garansi kepuasan pelanggan.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-black font-bold px-7 py-4 rounded-full shadow-[0_20px_60px_rgba(37,211,102,0.18)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <WhatsappIcon className="w-5 h-5" />
                  Konsultasi Pemasangan
                </a>

                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/10 text-white/90 font-semibold transition hover:bg-white/[0.05]"
                >
                  Lihat Paket
                </a>
              </div>

              <p className="text-white/60 text-sm md:text-base max-w-xl mb-8">
                Survey gratis • 2-4 jam pemasangan • Garansi pengerjaan • Fast response
              </p>

              <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
                {["Teknisi Bersertifikat", "Pipa Rapi", "Listrik Aman", "Drainase Pas"].map(
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
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=70"
                  alt="Teknisi AC memasang unit pendingin di ruangan"
                  className="h-full w-full object-cover aspect-square"
                  loading="lazy"
                  decoding="async"
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
              KEUNGGULAN INSTALASI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mengapa Pilih Instalasi AC Radja AC?
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Kami menawarkan standar profesional dengan finish rapi, listrik aman, dan garansi kepuasan untuk setiap pemasangan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {installationBenefits.map((item) => (
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

      {/* PRICING SECTION */}
      <div className="max-w-7xl mx-auto px-5 py-20" id="pricing">
        <section className="rounded-3xl border border-slate-800/50">
          <div className="text-center mb-12 px-6 pt-16">
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              PAKET INSTALASI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Layanan Instalasi AC yang Sesuai Kebutuhan Anda
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Kami melayani pemasangan AC split, cassette, dan multi split dengan estimasi harga transparan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 px-6 pb-16">
            {installPackages.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold text-cyan-300 mb-4">
                  {item.price}
                </p>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* PROCESS SECTION */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <section className="rounded-3xl border border-slate-800/50 bg-slate-900/20 px-6 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              PROSES INSTALASI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tahapan Pemasangan AC yang Sistematis
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Kami bekerja dengan langkah-langkah terstruktur untuk memastikan setiap instalasi sempurna.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1"
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

      {/* COMMON PROBLEMS SECTION */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <section className="rounded-3xl border border-slate-800/50 px-6 py-16 bg-slate-900/40">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              MASALAH INSTALASI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hindari Kesalahan Pemasangan AC
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Beberapa kesalahan umum instalasi yang dapat mengurangi performa AC dan memperpendek umur unit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {commonProblems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 transition duration-300 hover:border-red-500/50 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-red-300 mb-3">
                  ⚠️ {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* PORTFOLIO / BEFORE-AFTER */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <section className="rounded-3xl border border-slate-800/50 px-6 py-16 bg-slate-950">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              DOKUMENTASI PROYEK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hasil Instalasi AC Radja AC
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Beberapa proyek instalasi AC yang telah kami selesaikan dengan hasil yang rapi dan profesional.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Instalasi Split Rumah", area: "Purwokerto Timur" },
              { title: "Instalasi Multi Split Kantor", area: "Banyumas" },
              { title: "Instalasi Cassette Toko", area: "Sokaraja" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 transition duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-slate-900 flex items-center justify-center">
                  <p className="text-slate-500 text-sm text-center px-4">
                    📸 Foto dokumentasi proyek instalasi AC
                  </p>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {item.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* REVIEWS */}
      <div className="max-w-7xl mx-auto px-5">
        <MiniReviewSection />
      </div>

      {/* AREA COVERAGE */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <AreaCoverageSection />
      </div>

      {/* INTERNAL LINKS */}
      <div className="max-w-7xl mx-auto px-5">
        <InternalLinksSection />
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-7xl mx-auto px-5 py-20">
        <section className="rounded-3xl border border-slate-800/50 px-6 py-16 bg-slate-900/40">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 rounded-full text-cyan-300 text-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pertanyaan Umum tentang Instalasi AC
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Jawaban untuk pertanyaan yang sering ditanyakan pelanggan sebelum dan sesudah instalasi.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:border-cyan-400/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  ❓ {item.question}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <PrimaryCTASection
        pretitle="Booking Instalasi AC"
        title="Siap pasang AC dengan tenang?"
        description="Hubungi tim kami untuk estimasi pemasangan gratis dan jadwalkan survei lokasi. Teknisi kami siap memberikan solusi pemasangan rapi dan aman."
        buttonLabel="Konsultasi WhatsApp Sekarang"
        subText="Gratis survey lokasi • Garansi pengerjaan • Area Banyumas & sekitarnya"
      />

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
