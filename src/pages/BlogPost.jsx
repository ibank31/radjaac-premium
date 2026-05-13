import { Helmet } from "react-helmet-async"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, CalendarDays, CheckCircle2, Clock, MessageCircle } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import NotFound from "./NotFound"
import { SITE_DATA } from "../constants/siteData"
import { buildWhatsAppUrl } from "../utils/whatsapp"
import { BLOG_POSTS, getBlogPostBySlug } from "../data/blogPosts"

function createArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    dateModified: post.updatedAt,
    datePublished: post.updatedAt,
    author: {
      "@type": "Organization",
      name: SITE_DATA.businessName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_DATA.businessName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
      },
    },
    mainEntityOfPage: `${SITE_DATA.baseUrl}/artikel/${post.slug}`,
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) return <NotFound />

  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 2)
  const articleSchema = createArticleSchema(post)

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title={`${post.title} | RADJA AC`}
        description={post.description}
        canonicalPath={`/artikel/${post.slug}`}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <article className="mx-auto max-w-4xl px-6 pb-12 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <Link
            to="/artikel"
            className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke artikel
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-white/55">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-semibold text-cyan-200">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              Update {post.updatedAt}
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <p className="mb-10 text-lg leading-8 text-white/72">
            {post.intro}
          </p>

          <div className="mb-10 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60">
                {keyword}
              </span>
            ))}
          </div>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading} className="rounded-[30px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
                <div className="mb-4 flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <h2 className="text-2xl font-black tracking-[-0.02em] text-white sm:text-3xl">
                    {section.heading}
                  </h2>
                </div>

                <div className="space-y-4 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-[34px] border border-[#25D366]/20 bg-[#25D366]/10 p-6 text-center sm:p-8">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-slate-950">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.02em] sm:text-3xl">
              Masih bingung pilih AC?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/68">
              Chat RADJA AC untuk cek stok, tanya rekomendasi PK, dan pilih tipe AC yang sesuai kebutuhan ruangan.
            </p>
            <a
              href={buildWhatsAppUrl(post.ctaMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 transition hover:bg-[#20BA5A]"
            >
              {post.ctaLabel}
            </a>
          </section>

          {relatedPosts.length > 0 ? (
            <section className="mt-12">
              <h2 className="mb-5 text-2xl font-black tracking-[-0.02em]">Artikel terkait</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/artikel/${item.slug}`}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
                  >
                    <p className="mb-2 text-xs font-semibold text-cyan-300">{item.category}</p>
                    <h3 className="mb-2 text-lg font-black text-white">{item.shortTitle}</h3>
                    <p className="text-sm leading-6 text-white/55">{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </main>

      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}
