import { Link } from "react-router-dom"
import { ArrowRight, BookOpen, Clock } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import { BLOG_POSTS } from "../data/blogPosts"

export default function Blog() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Artikel & Panduan AC Purwokerto | RADJA AC"
        description="Kumpulan artikel RADJA AC untuk membantu memilih AC rumah, AC inverter, AC low watt, ukuran PK, dan kebutuhan pendingin ruangan."
        canonicalPath="/artikel"
      />

      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="mb-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <BookOpen className="h-4 w-4" />
              PANDUAN MEMILIH AC
            </div>

            <h1 className="mb-5 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Artikel AC untuk bantu Anda memilih unit yang tepat
            </h1>

            <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Panduan singkat dari RADJA AC untuk memahami kapasitas PK, tipe AC, kebutuhan ruangan, dan hal penting sebelum membeli AC.
            </p>
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
