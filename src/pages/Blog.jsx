import { Link } from "react-router-dom"
import { ArrowRight, BookOpen, Clock, MapPin, MessageCircle, SearchCheck } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import { BLOG_POSTS } from "../data/allBlogPosts"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const articleGroups = [
  {
    title: "Cari berdasarkan merek",
    description: "Mulai dari Daikin, Midea, Hisense, Sansui, Gree, Sharp, Panasonic, sampai pilihan brand lain yang tersedia di RADJA AC.",
  },
  {
    title: "Cari berdasarkan kebutuhan ruangan",
    description: "Panduan memilih AC untuk kamar, rumah, kantor, toko, cafe, ruang keluarga, dan kebutuhan usaha di Purwokerto & Banyumas.",
  },
  {
    title: "Cari berdasarkan tipe AC",
    description: "Pelajari perbedaan AC inverter, low watt, standard, split rumah, dan kapasitas PK agar tidak salah beli.",
  },
]

const BLOG_WA_MESSAGE =
  "Halo RADJA AC, saya membaca artikel di website dan mau konsultasi pilih AC. Mohon bantu rekomendasi merek, tipe, dan PK yang cocok."

export default function Blog() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Artikel AC Purwokerto: Harga, PK, Inverter, Low Watt | RADJA AC"
        description="Pusat panduan AC RADJA AC Purwokerto. Baca tips memilih AC Daikin, inverter, low watt, ukuran PK, harga, pemasangan, dan konsultasi sebelum membeli."
        canonicalPath="/artikel"
      />

      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="mb-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <BookOpen className="h-4 w-4" />
              PANDUAN AC PURWOKERTO
            </div>

            <h1 className="mb-5 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Pusat artikel AC untuk bantu Anda memilih unit yang tepat
            </h1>

            <p className="max-w-3xl text-sm leading-7 text-white/68 sm:text-base">
              Kumpulan panduan RADJA AC untuk calon pembeli AC di Purwokerto, Banyumas, dan sekitarnya. Mulai dari harga AC Daikin, pilihan inverter, low watt, ukuran PK, kebutuhan ruangan, sampai hal penting sebelum pemasangan.
            </p>
          </div>

          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {articleGroups.map(({ title, description }) => (
              <div key={title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                <SearchCheck className="mb-4 h-6 w-6 text-cyan-300" />
                <h2 className="mb-2 text-lg font-black text-white">{title}</h2>
                <p className="text-sm leading-6 text-white/58">{description}</p>
              </div>
            ))}
          </div>

          <div className="mb-10 rounded-[30px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div className="mb-5 sm:mb-0">
              <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-[#8EF0B4]">
                <MapPin className="h-4 w-4" />
                Konsultasi lokal Purwokerto & Banyumas
              </div>
              <h2 className="mb-2 text-2xl font-black tracking-[-0.02em] text-white">Belum yakin pilih AC apa?</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/64">
                Kirim ukuran ruangan, daya listrik, foto titik indoor-outdoor, dan merek yang diminati. Tim RADJA AC bantu arahkan pilihan AC yang lebih masuk akal.
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(BLOG_WA_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            >
              <MessageCircle className="h-5 w-5" />
              Konsultasi via WhatsApp
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to={`/artikel/${post.slug}`}
                className="group flex min-h-[300px] flex-col rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 normal-case tracking-normal text-cyan-200">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/45">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mb-4 text-2xl font-black leading-tight tracking-[-0.02em] text-white">
                  {post.shortTitle}
                </h2>

                <p className="mb-6 flex-1 text-sm leading-7 text-white/62">
                  {post.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition group-hover:text-cyan-200">
                  Baca panduan
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}
