import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  BadgeCheck,
  Cable,
  Check,
  ClipboardCheck,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const processItems = [
  {
    step: "01",
    title: "Konsultasi unit & ruangan",
    description: "Ceritakan ukuran ruangan, daya listrik, budget, dan rencana pemakaian agar pilihan AC dan kebutuhan pemasangan lebih tepat.",
  },
  {
    step: "02",
    title: "Cek titik pemasangan",
    description: "Posisi indoor, outdoor, jalur pipa, kabel, dan drainase dipertimbangkan sejak awal supaya hasilnya rapi dan nyaman digunakan.",
  },
  {
    step: "03",
    title: "Pemasangan unit baru",
    description: "Unit AC baru dipasang dengan bracket yang kokoh, jalur pipa tertata, dan finishing area kerja yang dibuat bersih.",
  },
  {
    step: "04",
    title: "Vacuum & pengecekan awal",
    description: "Sistem dicek sebelum digunakan untuk membantu menjaga performa pendinginan dan mengurangi risiko masalah awal.",
  },
  {
    step: "05",
    title: "Arahan penggunaan",
    description: "Teknisi membantu menjelaskan penggunaan dasar agar AC baru bisa dipakai dengan lebih nyaman dan efisien.",
  },
]

const standards = [
  {
    title: "Jalur pipa rapi",
    description: "Pipa dan insulasi ditata agar terlihat bersih dan tidak mengganggu tampilan ruangan.",
    icon: Cable,
  },
  {
    title: "Bracket outdoor kokoh",
    description: "Pemasangan outdoor memperhatikan kekuatan dudukan dan keamanan posisi unit.",
    icon: ShieldCheck,
  },
  {
    title: "Pengecekan sebelum selesai",
    description: "Unit diuji setelah pemasangan untuk memastikan AC baru menyala dan bekerja dengan normal.",
    icon: ClipboardCheck,
  },
  {
    title: "Finishing area kerja",
    description: "Area pemasangan dirapikan kembali supaya hasil akhir lebih bersih dan siap digunakan.",
    icon: BadgeCheck,
  },
]

const proofPoints = [
  "Pemasangan untuk AC baru",
  "Dibantu teknisi berpengalaman",
  "Konsultasi unit, PK, dan titik pasang",
]

function WhatsAppButton({ children = "Konsultasi Pembelian & Pemasangan" }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A]"
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

function InstallationVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[34px] border border-cyan-300/15 bg-slate-950/70 p-4 shadow-[0_28px_80px_rgba(8,20,47,0.42)] lg:mr-0">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-blue-500/12 blur-3xl" />

      <div className="relative rounded-[28px] border border-white/10 bg-white/[0.035] p-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Standar Pemasangan</p>
            <h3 className="text-xl font-black text-white">Siap dari unit sampai titik pasang</h3>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
            <Wrench className="h-6 w-6" />
          </div>
        </div>

        <div className="space-y-3">
          {[
            "Rekomendasi unit & PK",
            "Titik indoor & outdoor",
            "Jalur pipa, kabel, dan drainase",
            "Pengecekan awal unit",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-white/80">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4 text-sm leading-6 text-white/65">
          Fokus halaman ini adalah membantu pembelian AC baru agar pilihan unit dan kebutuhan pemasangannya lebih jelas dari awal.
        </div>
      </div>
    </div>
  )
}

export default function InstalasiProfesional() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Pemasangan AC Baru Purwokerto & Banyumas | RADJA AC"
        description="Dukungan pemasangan AC baru untuk pembelian di RADJA AC. Konsultasi pilihan unit, PK, titik indoor-outdoor, jalur pipa, dan pengecekan awal untuk area Purwokerto & Banyumas."
        canonicalPath="/instalasi-profesional"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Pemasangan AC Baru RADJA AC",
            provider: { "@type": "LocalBusiness", name: "RADJA AC" },
            areaServed: ["Purwokerto", "Banyumas"],
          })}
        </script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-24 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16">
            <div className="text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                PEMASANGAN AC BARU
              </div>

              <div className="mb-4 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-200">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Pemasangan AC Baru</span>
              </div>

              <h1 className="mb-5 max-w-2xl text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                Pemasangan AC baru
                <span className="block text-cyan-300">setelah pembelian unit</span>
              </h1>

              <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                RADJA AC membantu pembelian AC baru sekaligus mengarahkan kebutuhan pemasangannya, mulai dari pilihan PK, posisi indoor-outdoor, jalur pipa, hingga pengecekan awal unit.
              </p>

              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton />
                <a
                  href="#proses-instalasi"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
                >
                  Lihat Proses
                </a>
              </div>

              <div className="flex max-w-xl flex-wrap gap-2 text-left text-sm text-white/65">
                {proofPoints.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <InstallationVisual />
          </div>
        </section>

        <section id="proses-instalasi" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">PROSES PEMBELIAN & PEMASANGAN</p>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Alur dibuat jelas dari awal</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Proses dibuat sederhana agar pelanggan tahu apa yang perlu dicek sebelum membeli unit, saat menentukan titik pasang, dan sebelum AC baru digunakan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {processItems.map((item) => (
              <article key={item.step} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-black text-cyan-300">
                  {item.step}
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-white/60">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mx-0 lg:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">STANDAR PEMASANGAN</p>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Yang diperhatikan saat pasang AC baru</h2>
            <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Pemasangan yang rapi bukan cuma soal tampilan, tapi juga kenyamanan penggunaan, keamanan posisi unit, dan kemudahan perawatan ke depannya.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {standards.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-6 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 text-center shadow-[0_35px_90px_rgba(8,145,178,0.12)] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#25D366]/10 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex justify-center text-cyan-300"><MessageCircle className="h-10 w-10" /></div>
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Mau beli AC sekaligus pasang rapi?</h2>
              <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Kirim ukuran ruangan, daya listrik, lokasi pemasangan, dan budget AC. Tim RADJA AC bantu arahkan pilihan unit sekaligus kebutuhan pemasangannya.
              </p>
              <WhatsAppButton>Konsultasi via WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
