import { Helmet } from "react-helmet-async"
import { businessSchema, createServiceSchema } from "../utils/schemaUtils"
import { SITE_DATA } from "../constants/siteData"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import SeoHead from "../components/SeoHead"
import PrimaryCTASection from "../components/PrimaryCTASection"
import TrustStripSection from "../components/TrustStripSection"
import InternalLinksSection from "../components/InternalLinksSection"
import MiniReviewSection from "../components/MiniReviewSection"

// Service data structure for different types
const SERVICE_DATA = {
  // Service pages
  "isi-freon-ac": {
    type: "service",
    title: "Isi Freon AC Purwokerto | Harga Terjangkau & Bergaransi",
    description: "Jasa isi freon AC Purwokerto dengan teknisi profesional. Freon R32, R410, R22 untuk AC dingin kembali maksimal. Harga mulai Rp150.000.",
    heroTitle: "Isi Freon AC Purwokerto",
    heroSubtitle: "Kembalikan Kinerja AC Dingin Maksimal",
    heroDescription: "Layanan isi freon AC profesional dengan freon berkualitas dan teknisi bersertifikat. AC dingin kembali dalam hitungan jam.",
    benefits: [
      "Freon Berkualitas Garansi",
      "Teknisi Bersertifikat",
      "Harga Transparan",
      "Garansi 30 Hari",
    ],
    processSteps: [
      { title: "Diagnosa AC", desc: "Periksa tekanan dan kebocoran freon" },
      { title: "Vacuum & Isi Freon", desc: "Kosongkan sistem dan isi freon baru" },
      { title: "Test Kinerja", desc: "Verifikasi AC dingin merata dan stabil" },
    ],
    faqItems: [
      {
        question: "Berapa harga isi freon AC?",
        answer: "Harga mulai dari Rp150.000 tergantung kapasitas AC dan jenis freon.",
      },
    ],
  },
  "ac-daikin-tidak-dingin": {
    type: "problem",
    title: "Perbaikan AC Daikin Tidak Dingin | Service AC Daikin Purwokerto",
    description: "Solusi AC Daikin tidak dingin di Purwokerto. Diagnosa akurat, perbaikan efektif dengan sparepart original. Teknisi ahli Daikin.",
    heroTitle: "AC Daikin Tidak Dingin?",
    heroSubtitle: "Solusi Cepat & Tepat untuk AC Daikin Anda",
    heroDescription: "Masalah AC Daikin tidak dingin sering disebabkan freon bocor, kompresor rusak, atau filter kotor. Kami siap bantu perbaiki.",
    benefits: [
      "Sparepart Original Daikin",
      "Teknisi Ahli Daikin",
      "Diagnosa Akurat",
      "Garansi Perbaikan",
    ],
    processSteps: [
      { title: "Diagnosa Masalah", desc: "Identifikasi penyebab AC tidak dingin" },
      { title: "Perbaikan & Penggantian", desc: "Ganti komponen rusak dengan original" },
      { title: "Test & Optimasi", desc: "Pastikan AC dingin maksimal" },
    ],
    faqItems: [
      {
        question: "Mengapa AC Daikin tidak dingin?",
        answer: "Bisa disebabkan freon bocor, kompresor rusak, filter kotor, atau masalah elektronik.",
      },
    ],
  },
  "service-ac-lg": {
    type: "brand",
    title: "Service AC LG Purwokerto | Teknisi Resmi LG | Radja AC",
    description: "Layanan service AC LG Purwokerto dengan teknisi resmi dan bergaransi. Cuci AC, perbaikan, instalasi AC LG untuk rumah dan kantor.",
    heroTitle: "Service AC LG Purwokerto",
    heroSubtitle: "Teknisi Resmi LG Siap Melayani",
    heroDescription: "Layanan lengkap untuk semua produk AC LG Anda. Dari cuci rutin hingga perbaikan kompleks dengan garansi resmi LG.",
    benefits: [
      "Teknisi Resmi LG",
      "Sparepart Original",
      "Garansi Resmi LG",
      "Service Cepat",
    ],
    processSteps: [
      { title: "Konsultasi & Diagnosa", desc: "Identifikasi masalah dan solusi terbaik" },
      { title: "Perbaikan Profesional", desc: "Gunakan sparepart original LG" },
      { title: "Test & Verifikasi", desc: "Pastikan AC bekerja optimal" },
    ],
    faqItems: [
      {
        question: "Apakah ada garansi service AC LG?",
        answer: "Ya, kami berikan garansi resmi LG sesuai ketentuan pabrikan.",
      },
    ],
  },
}

export default function ServicePageTemplate({ serviceSlug }) {
  const service = SERVICE_DATA[serviceSlug]

  if (!service) {
    return <div>Service not found</div>
  }

  const canonicalPath = `/${serviceSlug}`

  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title={service.title}
        description={service.description}
        canonicalPath={canonicalPath}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(createServiceSchema(
            service.heroTitle,
            service.description
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
                {service.type.toUpperCase()} AC • LAYANAN PROFESIONAL
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {service.heroTitle}
              </h1>

              <h2 className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6">
                {service.heroSubtitle}
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {service.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={SITE_DATA.whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-400 shadow-lg hover:shadow-cyan-500/25"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Konsultasi Gratis
                </a>

                <a
                  href={`tel:${SITE_DATA.phoneNumber}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/30 bg-white/5 px-8 py-4 text-lg font-semibold text-cyan-200 transition hover:bg-white/10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {SITE_DATA.phoneNumber}
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/20 to-sky-500/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.heroTitle}</h3>
                  <p className="text-slate-300">Layanan Profesional & Bergaransi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PROCESS SECTION */}
      <section className="px-6 py-20 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Proses {service.type === 'service' ? 'Layanan' : service.type === 'problem' ? 'Perbaikan' : 'Service'}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cara Kerja Layanan Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl font-bold text-cyan-400">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <PrimaryCTASection />

      {/* TRUST STRIP */}
      <TrustStripSection />

      {/* REVIEWS */}
      <MiniReviewSection />

      {/* INTERNAL LINKS */}
      <InternalLinksSection />

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}