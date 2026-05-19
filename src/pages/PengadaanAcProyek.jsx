import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Home,
  MapPin,
  MessageCircle,
  PackageCheck,
  School,
  Send,
  Store,
  Truck,
  Users,
  Warehouse,
} from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import WhatsappIcon from "../components/ui/WhatsappIcon"
import { buildWhatsAppUrl } from "../utils/whatsapp"

const WA_MESSAGE =
  "Halo RADJA AC, saya mau konsultasi pengadaan AC untuk proyek/banyak unit. Lokasi: Jumlah ruangan/unit: Kebutuhan: unit saja / dengan pemasangan. Mohon dibantu rekomendasinya."
const WA_LINK = buildWhatsAppUrl(WA_MESSAGE)

const CERTIFICATE_IMAGE = "/assets/brands/daikin/sertificate-daikin.webp"

const projectNeeds = [
  {
    title: "Kos-kosan & kontrakan",
    description: "Kebutuhan AC beberapa kamar dengan pilihan unit yang menyesuaikan budget, daya listrik, dan target pemakaian.",
    icon: Home,
  },
  {
    title: "Kantor & ruang kerja",
    description: "Rekomendasi AC untuk ruang kerja, meeting room, lobby, ruang admin, dan area operasional.",
    icon: Building2,
  },
  {
    title: "Ruko & tempat usaha",
    description: "Cocok untuk toko, salon, klinik kecil, ruang tunggu, showroom, dan usaha lokal lain.",
    icon: Store,
  },
  {
    title: "Sekolah & lembaga",
    description: "Bisa konsultasi kebutuhan AC untuk ruang kelas, ruang guru, kantor, atau ruang administrasi.",
    icon: School,
  },
  {
    title: "Rumah banyak ruangan",
    description: "Untuk rumah baru, renovasi, atau kebutuhan beberapa kamar sekaligus agar pemilihan PK lebih rapi.",
    icon: Users,
  },
  {
    title: "Kontraktor & developer",
    description: "Bisa dibahas untuk proyek bangunan, renovasi, pengadaan bertahap, atau pembelian banyak unit.",
    icon: PackageCheck,
  },
]

const trustItems = [
  {
    title: "Dokumentasi pengiriman AC",
    description: "Dokumentasi pengiriman unit AC untuk pelanggan rumah, usaha, dan kebutuhan pembelian banyak unit.",
    caption: "Unit AC dikirim sesuai kebutuhan dan ketersediaan stok.",
    images: [
      {
        src: "/assets/gallery/pengiriman/restock-ac-daikin.webp",
        alt: "Restock unit AC Daikin RADJA AC untuk kebutuhan banyak unit",
      },
      {
        src: "/assets/gallery/pengiriman/radja-ac-pengiriman-stok-aqua-truk-putih.webp",
        alt: "Pengiriman stok AC RADJA AC dengan banyak unit",
      },
    ],
    icon: Truck,
  },
  {
    title: "Stok gudang",
    description: "Beberapa unit tersedia melalui stok gudang. Ketersediaan tipe dan jumlah unit dapat dikonsultasikan terlebih dahulu.",
    caption: "Stok dapat berubah, konsultasikan kebutuhan unit terlebih dahulu.",
    images: [
      {
        src: "/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp",
        alt: "Rak gudang stok AC RADJA AC dengan banyak unit",
      },
      {
        src: "/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp",
        alt: "Stok gudang AC Daikin dan Gree RADJA AC",
      },
    ],
    icon: Warehouse,
  },
  {
    title: "Showroom multibrand",
    description: "Dokumentasi showroom membantu calon pembeli melihat gambaran pilihan brand AC yang dapat dikonsultasikan.",
    caption: "Pilihan brand dan tipe unit menyesuaikan stok serta kebutuhan ruangan.",
    images: [
      {
        src: "/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp",
        alt: "Showroom multibrand RADJA AC dengan banyak merek AC",
      },
      {
        src: "/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp",
        alt: "Showroom Daikin dan Gree RADJA AC",
      },
    ],
    icon: BadgeCheck,
  },
]

const documentationItems = [
  {
    title: "Restock AC Daikin",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/restock-ac-daikin.webp",
    alt: "Restock unit AC Daikin RADJA AC",
  },
  {
    title: "Pengiriman Stok Aqua",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/radja-ac-pengiriman-stok-aqua-truk-putih.webp",
    alt: "Pengiriman stok AC Aqua RADJA AC dengan banyak unit",
  },
  {
    title: "Rak Gudang Stok AC",
    category: "Stok Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp",
    alt: "Rak gudang stok AC RADJA AC",
  },
  {
    title: "Stok Daikin dan Gree",
    category: "Stok Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp",
    alt: "Stok AC Daikin dan Gree RADJA AC",
  },
  {
    title: "Showroom Multibrand",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp",
    alt: "Showroom multibrand RADJA AC Purwokerto",
  },
  {
    title: "Showroom Daikin dan Gree",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp",
    alt: "Showroom Daikin dan Gree RADJA AC",
  },
]

const supportItems = [
  "Konsultasi kebutuhan AC berdasarkan jumlah dan ukuran ruangan",
  "Bantu estimasi kapasitas PK dan jenis AC yang lebih sesuai",
  "Rekomendasi brand sesuai budget, stok, dan target pemakaian",
  "Pembelian unit AC satuan, banyak unit, atau kebutuhan bertahap",
  "Pengiriman menyesuaikan area dan kondisi kebutuhan proyek",
  "Pemasangan dapat dibahas sesuai lokasi, jumlah unit, dan kondisi lapangan",
]

const acTypes = [
  ["Standard", "Budget awal lebih hemat", "Cocok untuk penggunaan normal dan kebutuhan banyak unit dengan biaya awal lebih ringan."],
  ["Low watt", "Daya listrik terbatas", "Cocok untuk rumah, kos, atau ruangan dengan kapasitas listrik yang perlu dijaga."],
  ["Inverter", "Pemakaian rutin harian", "Cocok untuk ruangan yang dipakai lama karena suhu lebih stabil dan nyaman."],
]

const processSteps = [
  ["1", "Kirim kebutuhan", "Sampaikan lokasi, jumlah ruangan, ukuran ruangan, dan perkiraan jumlah unit."],
  ["2", "Cek rekomendasi", "Kami bantu arahkan kapasitas PK, jenis AC, dan pilihan brand yang masuk akal."],
  ["3", "Cek stok & estimasi", "Kebutuhan unit, alternatif brand, harga, dan pengiriman dapat dibahas lebih lanjut."],
  ["4", "Atur pembelian", "Skema unit saja, pengiriman, atau pemasangan dibahas sesuai area dan kondisi proyek."],
]

const checklist = [
  "Lokasi proyek atau area pengiriman",
  "Jumlah ruangan dan perkiraan jumlah unit",
  "Ukuran tiap ruangan jika sudah ada",
  "Fungsi ruangan: kamar, kantor, toko, kelas, atau ruang usaha",
  "Budget perkiraan dan preferensi brand jika ada",
  "Kebutuhan unit saja atau sekalian pemasangan",
  "Target waktu pembelian atau kebutuhan unit",
]

const brands = [
  { title: "Daikin", href: "/brand/daikin", note: "Pilihan premium untuk kebutuhan rumah, kantor, dan proyek tertentu." },
  { title: "Gree", href: "/brand/gree", note: "Value menarik untuk kebutuhan usaha dan pembelian beberapa unit." },
  { title: "Midea", href: "/brand/midea", note: "Pilihan kompetitif untuk rumah, kos, kantor, dan ruang usaha." },
  { title: "Hisense", href: "/brand/hisense", note: "Alternatif budget yang bisa dicek sesuai stok dan kebutuhan ruangan." },
  { title: "Sharp", href: "/brand/sharp", note: "Brand familiar untuk rumah dan kebutuhan usaha tertentu." },
  { title: "Brand lainnya", href: "/brand/lainnya", note: "Sansui, Panasonic, LG, Samsung, dan pilihan lain dapat dikonsultasikan." },
]

const areas = [
  "Purwokerto",
  "Banyumas",
  "Sokaraja",
  "Purbalingga",
  "Banjarnegara",
  "Cilacap",
  "Kebumen",
  "Tegal",
  "Yogyakarta",
]

const internalLinks = [
  { title: "Katalog AC", href: "/katalog", description: "Lihat kategori AC rumah, inverter, low watt, dan komersial." },
  { title: "AC kantor & komersial", href: "/katalog/ac-kantor-komersial", description: "Panduan AC untuk kantor, usaha, cassette, dan partai besar." },
  { title: "AC inverter", href: "/katalog/ac-inverter", description: "Pilihan untuk pemakaian rutin dan ruangan yang sering digunakan." },
  { title: "AC low watt", href: "/katalog/ac-low-watt", description: "Pilihan untuk daya listrik terbatas dan kebutuhan lebih ringan." },
  { title: "Jual AC Cilacap", href: "/jual-ac-cilacap", description: "Konsultasi pengadaan AC untuk area Cilacap dan sekitarnya." },
  { title: "Jual AC Yogyakarta", href: "/jual-ac-yogyakarta", description: "Konsultasi unit AC untuk area Yogyakarta dan kebutuhan luar kota." },
]

const faqItems = [
  {
    question: "Apakah RADJA AC melayani pengadaan AC banyak unit?",
    answer: "Ya. RADJA AC dapat membantu konsultasi pembelian AC banyak unit untuk rumah, kos, kantor, ruko, tempat usaha, sekolah, dan kebutuhan proyek tertentu sesuai stok dan kesepakatan.",
  },
  {
    question: "Apakah bisa konsultasi dulu sebelum menentukan merek AC?",
    answer: "Bisa. Calon pembeli dapat mengirim jumlah ruangan, ukuran ruangan, lokasi, budget, dan preferensi brand agar pilihan AC bisa diarahkan lebih sesuai.",
  },
  {
    question: "Apakah bisa untuk proyek luar Purwokerto?",
    answer: "Bisa dikonsultasikan. Untuk area luar Purwokerto, skema pengiriman dan pemasangan akan menyesuaikan lokasi, jumlah unit, ketersediaan stok, dan kondisi proyek.",
  },
  {
    question: "Apakah bisa beli unit AC saja tanpa pemasangan?",
    answer: "Bisa. Untuk beberapa kebutuhan proyek atau area luar kota, pembelian unit saja dapat menjadi opsi yang lebih fleksibel. Pemasangan dapat dibahas terpisah jika dibutuhkan.",
  },
  {
    question: "Brand AC apa saja yang bisa dikonsultasikan?",
    answer: "Pilihan brand dapat menyesuaikan stok dan kebutuhan, seperti Daikin, Gree, Midea, Hisense, Sharp, Panasonic, Sansui, dan brand lainnya.",
  },
  {
    question: "Apakah bisa bantu hitungkan kebutuhan PK?",
    answer: "Bisa. Estimasi kapasitas PK dapat dibantu berdasarkan ukuran ruangan, fungsi ruangan, paparan panas, jumlah orang, dan pola pemakaian.",
  },
]

function WhatsAppButton({ children = "Konsultasi Pengadaan AC", className = "" }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-bold text-slate-950 shadow-[0_18px_50px_rgba(37,211,102,0.2)] ring-1 ring-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
      {children}
    </div>
  )
}

export default function PengadaanAcProyek() {
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
        title="Pengadaan AC Proyek & Banyak Unit | RADJA AC Purwokerto"
        description="Konsultasi pengadaan AC proyek dan pembelian banyak unit untuk kos, kantor, ruko, rumah, kontraktor, dan area luar Purwokerto."
        canonicalPath="/pengadaan-ac-proyek"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/16 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-8 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="mx-auto max-w-3xl">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
                <PackageCheck className="h-4 w-4" />
                PENGADAAN AC PROYEK
              </div>

              <div className="mb-5 text-sm text-white/50">
                <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
                <span className="mx-2">/</span>
                <span className="text-white/80">Pengadaan AC Proyek</span>
              </div>

              <h1 className="mb-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
                Pengadaan AC proyek & pembelian banyak unit
              </h1>

              <p className="mb-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                RADJA AC membantu konsultasi kebutuhan AC untuk kos-kosan, kantor, ruko, sekolah, klinik, rumah banyak ruangan, kontraktor, hingga kebutuhan luar kota. Pilihan unit bisa dibahas dari jumlah ruangan, kapasitas PK, brand, stok, dan skema pengiriman.
              </p>

              <div className="mx-auto mb-5 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:mx-0 lg:justify-start">
                <WhatsAppButton className="w-full sm:w-auto" />
                <Link
                  to="/katalog/ac-kantor-komersial"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 font-bold text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 sm:w-auto"
                >
                  Lihat AC komersial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="max-w-xl text-xs leading-6 text-white/45">
                Cocok untuk pembelian unit satuan, banyak unit, maupun kebutuhan proyek bertahap. Untuk area luar kota, pengiriman dan pemasangan menyesuaikan lokasi serta kondisi kebutuhan.
              </p>

              <div className="mt-5 rounded-[26px] border border-cyan-300/20 bg-white/[0.04] p-4 shadow-[0_16px_50px_rgba(15,23,42,0.24)] lg:max-w-xl">
                <div className="mb-3 flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Dealer resmi
                  </div>
                </div>
                <h2 className="mb-3 text-center text-lg font-black text-white">Sertifikat dealer resmi</h2>
                <p className="mb-4 text-left text-xs leading-6 text-white/58">
                  Sertifikat dealer resmi menjadi dokumen pendukung dalam penyediaan produk AC original dan bergaransi resmi sesuai ketentuan brand.
                </p>
                <img
                  src={CERTIFICATE_IMAGE}
                  alt="Sertifikat dealer resmi Daikin RADJA AC"
                  loading="eager"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-[20px] bg-white object-contain p-2"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <SectionLabel>Kebutuhan proyek</SectionLabel>
            <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Bisa dikonsultasikan untuk berbagai kebutuhan AC
            </h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Untuk banyak ruangan, pilihan AC sebaiknya tidak hanya dilihat dari harga. Kapasitas PK, daya listrik, durasi pemakaian, dan lokasi proyek juga perlu dipertimbangkan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectNeeds.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-left transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-center text-lg font-black text-white">{title}</h3>
                <p className="text-left text-sm leading-6 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="mb-8 max-w-3xl">
            <SectionLabel>Dokumentasi</SectionLabel>
            <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Dokumentasi pengiriman, stok gudang, dan showroom
            </h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Beberapa dokumentasi aktivitas RADJA AC, mulai dari pengiriman unit, stok gudang, hingga showroom sebagai gambaran awal sebelum konsultasi kebutuhan AC.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {trustItems.map(({ title, description, caption, images, icon: Icon }) => (
              <article key={title} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_60px_rgba(15,23,42,0.22)]">
                <div className="grid grid-cols-2 gap-2 bg-slate-950/45 p-2">
                  {images.map((image) => (
                    <a key={image.src} href={image.src} target="_blank" rel="noreferrer" className="overflow-hidden rounded-[20px] bg-slate-900">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 16vw, 50vw"
                        className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.03]"
                      />
                    </a>
                  ))}
                </div>
                <div className="p-5 text-left">
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-center text-lg font-black text-white">{title}</h3>
                  <p className="mb-4 text-left text-sm leading-6 text-white/62">{description}</p>
                  <p className="rounded-2xl border border-white/10 bg-slate-950/45 px-3 py-3 text-left text-xs leading-5 text-white/50">
                    {caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="mb-8 max-w-3xl">
            <SectionLabel>Foto aktivitas</SectionLabel>
            <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Pengiriman, stok gudang, dan showroom
            </h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Beberapa foto pendukung dari aktivitas pengadaan, restock, stok gudang, dan showroom multibrand.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {documentationItems.map((item) => (
              <a
                key={item.image}
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="relative overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-2 top-2 rounded-full border border-cyan-300/20 bg-slate-950/70 px-2 py-1 text-[10px] font-semibold text-cyan-100 backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="line-clamp-2 text-xs font-black leading-4 text-white sm:text-sm sm:leading-5">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionLabel>Dukungan pengadaan</SectionLabel>
              <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                Yang bisa dibantu sebelum membeli banyak unit
              </h2>
              <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                Setiap proyek bisa memiliki kebutuhan berbeda. Karena itu, pembahasan awal dibuat fleksibel: bisa mulai dari data ruangan, budget, pilihan brand, sampai opsi unit saja atau dengan pemasangan.
              </p>
              <WhatsAppButton className="w-full sm:w-auto">Kirim kebutuhan proyek</WhatsAppButton>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {supportItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-white/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <SectionLabel>Pilihan jenis AC</SectionLabel>
            <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Standard, low watt, atau inverter?
            </h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Untuk banyak unit, jenis AC berpengaruh ke biaya awal, konsumsi listrik, dan kenyamanan pemakaian harian.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {acTypes.map(([type, fit, note]) => (
              <div key={type} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Calculator className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-xl font-black text-white">{type}</h3>
                <p className="mb-3 text-sm font-semibold text-cyan-200">{fit}</p>
                <p className="text-sm leading-6 text-white/60">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionLabel>Alur konsultasi</SectionLabel>
              <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                Alur pengadaan dibuat sederhana
              </h2>
              <p className="text-sm leading-7 text-white/65 sm:text-base">
                Tidak harus langsung punya data lengkap. Calon pembeli bisa mulai dari jumlah ruangan, lokasi, dan gambaran kebutuhan unit.
              </p>
            </div>

            <div className="space-y-3">
              {processSteps.map(([number, title, description]) => (
                <div key={number} className="flex gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 font-black text-slate-950">
                    {number}
                  </div>
                  <div>
                    <h3 className="mb-1 font-black text-white">{title}</h3>
                    <p className="text-sm leading-6 text-white/60">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="rounded-[32px] border border-cyan-300/20 bg-cyan-300/[0.06] p-6 lg:p-8">
            <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionLabel>Data awal</SectionLabel>
                <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl">
                  Agar estimasi lebih mudah, siapkan data ini
                </h2>
                <p className="mb-6 text-sm leading-7 text-white/65 sm:text-base">
                  Data sederhana ini membantu mempercepat rekomendasi awal sebelum cek stok, harga, dan skema pengiriman.
                </p>
                <WhatsAppButton className="w-full sm:w-auto">Kirim data via WhatsApp</WhatsAppButton>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-3">
                    <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-6 text-white/65">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <SectionLabel>Brand AC</SectionLabel>
            <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Pilihan brand dapat disesuaikan dengan kebutuhan
            </h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              Pemilihan brand untuk proyek biasanya disesuaikan dengan budget, stok, target pemakaian, dan karakter ruangan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <Link key={brand.title} to={brand.href} className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <h3 className="mb-2 flex items-center justify-between text-lg font-black text-white">
                  {brand.title}
                  <ArrowRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" />
                </h3>
                <p className="text-sm leading-6 text-white/60">{brand.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Area</SectionLabel>
              <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                Konsultasi pengadaan untuk Purwokerto dan luar kota
              </h2>
              <p className="text-sm leading-7 text-white/65 sm:text-base">
                RADJA AC berfokus dari Purwokerto dan Banyumas, serta dapat membantu konsultasi kebutuhan AC untuk beberapa area luar kota sesuai skema pengiriman dan kebutuhan proyek.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/75">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <SectionLabel>Panduan terkait</SectionLabel>
            <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Lihat juga katalog dan halaman pendukung
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {internalLinks.map((item) => (
              <Link key={item.href} to={item.href} className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <h3 className="mb-2 flex items-center justify-between font-black text-white">
                  {item.title}
                  <ArrowRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" />
                </h3>
                <p className="text-sm leading-6 text-white/60">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-10 lg:px-8 lg:py-14">
          <div className="mb-8 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Pertanyaan seputar pengadaan AC proyek
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-5">
                <summary className="cursor-pointer list-none font-black text-white marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span className="text-cyan-300 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24">
          <div className="rounded-[34px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/12 via-white/[0.05] to-blue-500/10 p-7 text-center shadow-[0_22px_90px_rgba(15,23,42,0.35)] lg:p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <Send className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Butuh AC banyak unit untuk proyek?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Kirim kebutuhan ruangan, lokasi proyek, jumlah unit, dan perkiraan budget. RADJA AC akan bantu arahkan pilihan AC yang lebih sesuai sebelum membeli.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton className="w-full sm:w-auto">Konsultasi proyek via WhatsApp</WhatsAppButton>
              <Link to="/kontak" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 font-bold text-white/90 transition hover:border-cyan-300/40 hover:bg-white/10 sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Kontak RADJA AC
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}
