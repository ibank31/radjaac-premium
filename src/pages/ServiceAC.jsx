import { Helmet } from "react-helmet-async"
import Navbar from "../components/Navbar"
import FloatingWhatsapp from "../components/FloatingWhatsapp";

const commonProblems = [
  "AC tidak dingin saat cuaca panas",
  "AC bocor air dan menetes ke lantai",
  "AC bau tidak sedap saat dinyalakan",
  "Freon habis dan dingin cepat hilang",
  "AC mati total atau tiba-tiba berhenti",
]

const whyChooseRadjaAC = [
  "Fast response via WhatsApp untuk kebutuhan mendesak",
  "Teknisi profesional dan berpengalaman menangani berbagai merek AC",
  "Garansi pengerjaan untuk memberikan rasa aman",
  "Bisa panggilan rumah, kantor, toko, hingga ruang usaha",
  "Fokus area Purwokerto & Banyumas dengan jadwal fleksibel",
]

const serviceProcess = [
  {
    title: "Konsultasi WhatsApp",
    description:
      "Ceritakan keluhan AC Anda, tim kami bantu estimasi awal dan jadwal kunjungan.",
  },
  {
    title: "Teknisi Datang",
    description:
      "Teknisi datang ke lokasi sesuai area Purwokerto dan sekitarnya dengan peralatan lengkap.",
  },
  {
    title: "AC Kembali Dingin",
    description:
      "Perbaikan dilakukan rapi dan cepat agar AC kembali optimal, sejuk, dan nyaman.",
  },
]

const faqItems = [
  {
    question: "Berapa biaya service AC?",
    answer:
      "Biaya service menyesuaikan jenis kerusakan dan kebutuhan sparepart. Kami berikan estimasi transparan sebelum pengerjaan dimulai.",
  },
  {
    question: "Berapa lama pengerjaan?",
    answer:
      "Rata-rata pengerjaan sekitar 30-90 menit tergantung kondisi AC. Untuk kasus kompleks, teknisi akan menjelaskan estimasi waktu sejak awal.",
  },
  {
    question: "Apakah bisa panggilan hari ini?",
    answer:
      "Bisa. Selama slot teknisi tersedia, kami dapat melayani panggilan di hari yang sama untuk area Purwokerto dan Banyumas.",
  },
]

export default function ServiceAC() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Helmet>
        <title>
          Service AC Purwokerto | Teknisi Profesional & Fast Response
        </title>

        <meta
          name="description"
          content="Service AC panggilan cepat di Purwokerto dan Banyumas: AC tidak dingin, bocor, bau, freon habis, hingga mati total. Teknisi profesional, bergaransi, dan bisa panggilan rumah atau kantor."
        />

        <meta
          name="keywords"
          content="service AC Purwokerto, service AC Banyumas, perbaikan AC Purwokerto, teknisi AC panggilan, AC tidak dingin"
        />

        <meta
          property="og:title"
          content="Service AC Purwokerto - Perbaikan AC Cepat & Profesional"
        />

        <meta
          property="og:description"
          content="Jasa service AC Purwokerto untuk rumah dan kantor. Fast response WhatsApp, teknisi berpengalaman, dan garansi pengerjaan."
        />
      </Helmet>

      <Navbar />

      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-200 mb-5 animate-pulse">
            Specialist Service AC • Purwokerto & Banyumas
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Service AC Purwokerto
            <span className="block text-cyan-300">
              Cepat Datang, Hasil Dingin Maksimal
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Solusi service AC panggilan untuk rumah, kantor, dan bisnis di
            Purwokerto. Kami menangani AC tidak dingin, bocor, freon habis,
            hingga mati total dengan proses cepat, profesional, dan transparan.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            Masalah AC yang Sering Terjadi
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {commonProblems.map((problem) => (
              <div
                key={problem}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:border-cyan-400/60 hover:-translate-y-1"
              >
                <p className="text-slate-200">• {problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            Kenapa Pelanggan Memilih Radja AC
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {whyChooseRadjaAC.map((reason) => (
              <div
                key={reason}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <p className="text-slate-200">✓ {reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            Proses Service 3 Langkah
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceProcess.map((step, index) => (
              <div
                key={step.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:border-cyan-400/60"
              >
                <p className="text-cyan-300 font-semibold mb-3">
                  Langkah {index + 1}
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-5">
            Area Layanan Service AC
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Kami melayani service AC panggilan di{" "}
            <strong className="text-slate-100">Purwokerto</strong>,
            <strong className="text-slate-100"> Sokaraja</strong>,
            <strong className="text-slate-100"> Banyumas</strong>,
            <strong className="text-slate-100"> Ajibarang</strong>, hingga
            <strong className="text-slate-100"> Purbalingga</strong>.
            Cakupan area luas membantu teknisi kami merespons lebih cepat
            untuk kebutuhan service AC mendesak.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            FAQ Service AC Purwokerto
          </h2>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.question}
                </h3>

                <p className="text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-slate-900 p-8 md:p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Butuh Service AC Hari Ini?
          </h2>

          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Slot teknisi terbatas setiap hari. Hubungi kami sekarang melalui
            WhatsApp untuk jadwal tercepat. Aman, bergaransi, dan ditangani
            teknisi profesional.
          </p>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-7 py-3 text-slate-950 font-semibold transition hover:bg-cyan-300"
          >
            Chat WhatsApp Sekarang
          </a>

          <p className="text-sm text-slate-400 mt-4">
            Respon cepat • Estimasi transparan • Garansi pengerjaan
          </p>
        </div>
      </section>

      <FloatingWhatsapp />
    </div>
  )
}