import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, BadgeCheck, MessageCircle, SearchCheck, ShieldCheck, Sparkles } from "lucide-react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SeoHead from "../components/SeoHead"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { SITE_DATA } from "../constants/siteData"

const WA_LINK = SITE_DATA.whatsappUrl

const otherBrands = [
  {
    name: "Panasonic",
    description: "Cocok untuk pelanggan yang mencari AC rumah modern dengan kenyamanan harian. Detail tipe mengikuti stok supplier terbaru.",
    href: "/brand/panasonic",
  },
  {
    name: "Mitsubishi",
    description: "Pilihan premium untuk rumah, kantor, dan pemakaian jangka panjang yang mengutamakan performa stabil.",
  },
  {
    name: "Bestlife",
    description: "Pilihan ekonomis untuk kamar, kos, kontrakan, dan kebutuhan pendinginan harian dengan budget ringan.",
  },
  {
    name: "Akari",
    description: "Alternatif praktis untuk kebutuhan AC rumah, kamar, dan ruang kecil dengan harga yang tetap rasional.",
  },
  {
    name: "Samsung",
    description: "Pilihan Samsung inverter untuk kamar, rumah harian, dan pembeli yang mencari AC inverter dari brand besar.",
    href: "/brand/samsung",
  },
  {
    name: "Polytron",
    description: "Brand elektronik lokal yang praktis untuk kebutuhan AC rumah tangga dengan pilihan harga rasional.",
  },
  {
    name: "Toshiba",
    description: "Cocok untuk pelanggan yang mencari AC rumah dengan performa stabil dan penggunaan harian yang nyaman.",
  },
  {
    name: "Sharp",
    description: "Sharp BEY cocok untuk pelanggan yang membutuhkan AC praktis, brand familiar, dan mudah dikonsultasikan.",
    href: "/brand/sharp",
  },
  {
    name: "Ariston",
    description: "Cocok untuk pelanggan yang mencari solusi pendinginan praktis dari brand elektronik rumah tangga.",
  },
  {
    name: "Aqua",
    description: "Pilihan ekonomis-praktis untuk kamar, kos, dan kebutuhan rumah dengan budget terkontrol.",
  },
  {
    name: "TCL",
    description: "Cocok untuk rumah modern yang mencari AC praktis dengan pilihan fitur dan harga kompetitif.",
  },
  {
    name: "LG",
    description: "Cocok untuk pelanggan yang mencari AC modern dengan fokus efisiensi, kenyamanan, dan pemakaian rutin.",
  },
  {
    name: "Modena",
    description: "Pilihan AC rumah modern untuk pelanggan yang mencari tampilan rapi dan kebutuhan pendinginan harian.",
  },
  {
    name: "Flife",
    description: "Alternatif ekonomis untuk kamar, kos, dan ruangan kecil sesuai stok dan kebutuhan budget pelanggan.",
  },
]

const featuredBrands = [
  { name: "Daikin", href: "/brand/daikin" },
  { name: "Gree", href: "/brand/gree" },
  { name: "Midea", href: "/brand/midea" },
  { name: "Hisense", href: "/brand/hisense" },
  { name: "Sharp", href: "/brand/sharp" },
  { name: "Samsung", href: "/brand/samsung" },
  { name: "Sansui", href: "/brand/sansui" },
]

const recommendationPoints = [
  {
    title: "Cek stok dan pilihan brand",
    description: "Tim RADJA AC bantu cek ketersediaan brand yang Anda cari sesuai kebutuhan ruangan dan budget.",
    icon: SearchCheck,
  },
  {
    title: "Rekomendasi tipe AC",
    description: "Kami bantu pilih tipe standar, inverter, low watt, atau kapasitas PK yang paling sesuai.",
    icon: Sparkles,
  },
  {
    title: "Pengadaan dan instalasi rapi",
    description: "Pembelian unit dapat dilanjutkan dengan pemasangan yang rapi untuk rumah, toko, kantor, dan bisnis.",
    icon: ShieldCheck,
  },
]

const faqItems = [
  {
    question: "Apakah RADJA AC menyediakan brand AC selain Daikin, Gree, Midea, Hisense, dan Sansui?",
    answer: "Ya. RADJA AC juga melayani penjualan AC original dari berbagai brand populer lain sesuai ketersediaan stok dan kebutuhan pelanggan.",
  },
  {
    question: "Bagaimana cara cek stok brand AC lainnya?",
    answer: "Hubungi RADJA AC melalui WhatsApp untuk cek ketersediaan brand, rekomendasi tipe, harga terbaru, dan estimasi pemasangan.",
  },
]

function WhatsAppButton({ children = "Tanya Stok Brand" }) {
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

export default function BrandLainnya() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Brand AC Lainnya Purwokerto & Banyumas | RADJA AC"
        description="RADJA AC menyediakan berbagai brand AC original lainnya seperti Panasonic, Mitsubishi, Bestlife, Akari, Samsung, Polytron, Toshiba, Sharp, Ariston, Aqua, TCL, LG, Modena, Flife dan lainnya sesuai stok untuk area Purwokerto & Banyumas."
        canonicalPath="/brand/lainnya"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 lg:px-8 lg:pb-14 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              BRAND AC LAINNYA
            </div>

            <div className="mb-5 text-sm text-white/50">
              <Link to="/" className="transition hover:text-cyan-200">Beranda</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Brand Lainnya</span>
            </div>

            <h1 className="mb-5 text-3xl font-black leading-[1.08] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
              Brand AC Lainnya
              <span className="block text-cyan-300">sesuai kebutuhan Anda</span>
            </h1>

            <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Selain brand unggulan, RADJA AC bantu pembelian AC dari berbagai brand populer lain untuk rumah, kos, toko, kantor kecil, dan kebutuhan usaha di Purwokerto, Sokaraja, Banyumas, dan sekitarnya.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton />
              <a
                href="#daftar-brand"
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-4 font-semibold text-white/90 transition hover:bg-white/[0.05]"
              >
                Lihat Daftar Brand
              </a>
            </div>
          </div>
        </section>

        <section id="daftar-brand" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/15 bg-white/[0.035] p-5 shadow-[0_0_70px_rgba(34,211,238,0.10)] sm:p-7">
            <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative mx-auto mb-7 max-w-3xl text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300">BRAND POPULER</p>
              <h2 className="mb-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">Tersedia juga brand populer lainnya</h2>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                Ketersediaan brand dan tipe bisa berubah mengikuti stok. Hubungi RADJA AC untuk cek pilihan unit, harga terbaru, dan rekomendasi AC yang sesuai kebutuhan ruangan.
              </p>
            </div>

            <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherBrands.map((brand) => {
                const CardContent = (
                  <>
                    <h3 className="mb-2 text-lg font-black text-white">{brand.name}</h3>
                    <p className="mb-4 text-sm leading-6 text-white/58">{brand.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">
                      {brand.href ? "Lihat halaman" : "Tanya stok"}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </>
                )

                if (brand.href) {
                  return (
                    <Link
                      key={brand.name}
                      to={brand.href}
                      className="group rounded-[24px] border border-white/10 bg-slate-950/45 p-5 text-left transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                    >
                      {CardContent}
                    </Link>
                  )
                }

                return (
                  <a
                    key={brand.name}
                    href={WA_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[24px] border border-white/10 bg-slate-950/45 p-5 text-left transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                  >
                    {CardContent}
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {recommendationPoints.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.035] p-6 text-center sm:p-8 lg:p-10">
            <div className="mb-4 flex justify-center text-cyan-300"><BadgeCheck className="h-10 w-10" /></div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">Brand unggulan tetap tersedia sebagai halaman khusus</h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Untuk brand yang sudah memiliki halaman khusus, Anda bisa melihat rekomendasi produk, sertifikat, dan informasi lebih lengkap.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {featuredBrands.map((brand) => (
                <Link
                  key={brand.name}
                  to={brand.href}
                  className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/15"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300">FAQ</p>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Pertanyaan seputar brand AC lainnya</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Beberapa brand belum punya halaman khusus karena stok dan tipe bisa berubah. Tim RADJA AC bisa bantu cek pilihan yang tersedia.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 shrink-0 text-cyan-300" />
                  <h3 className="font-bold text-white">{item.question}</h3>
                </div>
                <p className="text-sm leading-7 text-white/60">{item.answer}</p>
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
              <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">Cari brand AC tertentu?</h2>
              <p className="mx-auto mb-6 max-w-2xl leading-7 text-white/70">
                Kirim nama brand, ukuran ruangan, daya listrik, lokasi area Purwokerto/Banyumas, dan kebutuhan penggunaan. Tim RADJA AC akan bantu cek stok serta rekomendasi unit yang sesuai.
              </p>
              <WhatsAppButton>Konsultasi Brand via WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
