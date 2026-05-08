import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import PrimaryCTASection from "../components/PrimaryCTASection"

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
      <SeoHead
        title="Service AC Purwokerto Bergaransi | Radja AC"
        description="Jasa service AC Purwokerto untuk AC tidak dingin, bocor, mati total, dan perawatan rutin. Teknisi cepat datang dan bergaransi."
        canonicalPath="/service-ac-purwokerto"
      />

      <Navbar />

      <section className="pt-28 pb-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto grid gap-10 xl:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-200 mb-5 animate-pulse">
              Specialist Service AC • Purwokerto & Banyumas
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-6 max-w-3xl">
              Service AC Purwokerto
              <span className="block text-cyan-300">
                Fast response, dingin maksimal, teknisi bersertifikat
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Solusi service AC panggilan untuk rumah, kantor, dan bisnis di Purwokerto. Teknisi kami menangani AC tidak dingin, bocor, freon habis, hingga mati total dengan proses rapi dan transparan.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4 mb-6">
              <a
                href="https://wa.me/62882008246099"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-slate-950 shadow-[0_24px_60px_rgba(37,211,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                Konsultasi WhatsApp
              </a>

              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 transition hover:bg-white/10"
              >
                Lihat FAQ
              </a>
            </div>

            <p className="text-slate-400 text-sm md:text-base max-w-2xl mb-10">
              Fast response • Layanan panggilan desa dan kota • Garansi pengerjaan • Teknisi profesional
            </p>

            <div className="grid gap-3 sm:grid-cols-2 max-w-xl">
              {[
                "Kunjungan cepat",
                "Teknisi bersertifikat",
                "Estimasi transparan",
                "Pembayaran aman",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-900 shadow-[0_30px_80px_rgba(14,116,144,0.14)]">
            <img
              src="https://images.unsplash.com/photo-1591047139829-6f61c3a0ce94?auto=format&fit=crop&w=1200&q=80"
              alt="Teknisi AC profesional memeriksa unit"
              className="h-full w-full object-cover aspect-[4/5]"
              loading="lazy"
            />
          </div>
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

      <section id="faq" className="px-6 py-16">
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

      <PrimaryCTASection
        pretitle="Booking Service AC"
        title="Butuh service AC cepat hari ini?"
        description="Slot teknisi terbatas setiap hari. Hubungi kami sekarang melalui WhatsApp untuk jadwal tercepat, layanan rapi, dan hasil AC kembali dingin optimal."
        buttonLabel="Chat WhatsApp Sekarang"
        subText="Respon cepat • Estimasi transparan • Garansi pengerjaan"
      />

      <FloatingWhatsapp />
    </div>
  )
}