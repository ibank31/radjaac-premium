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
  "Halo RADJA AC, saya mau konsultasi pengadaan AC banyak unit/proyek. Lokasi: Jumlah unit: Kebutuhan: unit saja / pengiriman / pemasangan. Mohon dibantu rekomendasi dan cek stoknya."
const WA_LINK = buildWhatsAppUrl(WA_MESSAGE)
const CERTIFICATE_IMAGE = "/assets/brands/daikin/sertificate-daikin.webp"

const projectNeeds = [
  {
    title: "Kos-kosan & kontrakan",
    description: "Pengadaan beberapa kamar sampai banyak unit, dengan pilihan AC yang disesuaikan budget dan daya listrik.",
    icon: Home,
  },
  {
    title: "Kantor & ruang kerja",
    description: "AC untuk ruang kerja, meeting room, lobby, admin, dan area operasional yang dipakai rutin.",
    icon: Building2,
  },
  {
    title: "Ruko & tempat usaha",
    description: "Untuk toko, salon, klinik, showroom, ruang tunggu, dan tempat usaha yang butuh AC siap pakai.",
    icon: Store,
  },
  {
    title: "Sekolah & lembaga",
    description: "Kebutuhan ruang kelas, kantor, ruang guru, ruang administrasi, atau pengadaan bertahap.",
    icon: School,
  },
  {
    title: "Rumah banyak ruangan",
    description: "Cocok untuk rumah baru, renovasi, atau pembelian beberapa unit sekaligus agar pilihan PK lebih rapi.",
    icon: Users,
  },
  {
    title: "Kontraktor & developer",
    description: "Bisa dibahas untuk proyek bangunan, kebutuhan banyak unit, pengiriman luar kota, atau pembelian bertahap.",
    icon: PackageCheck,
  },
]

const trustItems = [
  {
    title: "Pengiriman AC banyak unit",
    description: "Dokumentasi pengiriman unit AC untuk pelanggan rumah, usaha, dan kebutuhan proyek. Jumlah unit, area pengiriman, dan teknis pengiriman bisa dibahas sesuai kebutuhan.",
    caption: "Pengiriman menyesuaikan jumlah unit, area, stok, dan kesiapan proyek.",
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
    description: "Stok unit dapat dicek berdasarkan brand, tipe, dan jumlah kebutuhan. Untuk pengadaan banyak unit, RADJA AC bantu arahkan opsi yang realistis dari sisi stok dan budget.",
    caption: "Cek stok dulu sebelum menentukan brand, tipe, dan jumlah unit final.",
    images: [
      {
        src: "/assets/gallery/stok-gudang/stock-gudang-gree-aqva.webp",
        alt: "Stok gudang AC Gree dan Aqua RADJA AC",
      },
      {
        src: "/assets/gallery/stok-gudang/stok-gudang-outdoor-gree.webp",
        alt: "Stok gudang outdoor AC Gree RADJA AC",
      },
    ],
    icon: Warehouse,
  },
  {
    title: "Showroom multibrand",
    description: "Pilihan brand bisa dibandingkan lebih mudah, mulai dari Daikin, Gree, Midea, Hisense, Sharp, Panasonic, Sansui, dan brand lain sesuai kebutuhan proyek.",
    caption: "Brand dan tipe unit dipilih menyesuaikan budget, stok, dan karakter ruangan.",
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
  ["Pengiriman Sharp & Midea", "Pengiriman", "/assets/gallery/pengiriman/pengiriman-sharp-midea.webp", "Pengiriman AC Sharp dan Midea RADJA AC"],
  ["Persiapan Pengiriman", "Pengiriman", "/assets/gallery/pengiriman/radja-ac-persiapan-pengiriman.webp", "Persiapan pengiriman unit AC RADJA AC"],
  ["Stok AC Sharp", "Pengiriman", "/assets/gallery/pengiriman/radja-ac-stok-sharp.webp", "Stok AC Sharp RADJA AC"],
  ["Gudang Stok AC Gree", "Stok Gudang", "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-01.webp", "Gudang stok AC Gree RADJA AC"],
  ["Gudang Stok AC Aqua", "Stok Gudang", "/assets/gallery/large/gudang-stok-ac-aqua-radja-ac-01.webp", "Gudang stok AC Aqua RADJA AC"],
  ["Stok AC Gree Gudang", "Stok Gudang", "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-02.webp", "Stok AC Gree di gudang RADJA AC"],
  ["Showroom Gree", "Showroom", "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp", "Showroom Gree RADJA AC Purwokerto"],
  ["Showroom Gree RADJA AC", "Showroom", "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp", "Showroom Gree RADJA AC"],
  ["Display Daikin dan Sansui", "Showroom", "/assets/gallery/large/display-daikin-sansui-radja-ac-01.webp", "Showroom display Daikin dan Sansui RADJA AC"],
]

const supportItems = [
  "Hitung kebutuhan AC berdasarkan jumlah dan ukuran ruangan",
  "Rekomendasi kapasitas PK untuk tiap ruangan",
  "Pilihan brand sesuai budget, stok, dan target pemakaian",
  "Cek stok untuk pembelian satuan sampai banyak unit",
  "Pengiriman unit ke area dalam kota dan luar kota",
  "Opsi unit saja atau dengan pemasangan sesuai lokasi",
  "Bantu susun kebutuhan awal untuk proyek, usaha, atau pembelian bertahap",
]

const acTypes = [
  ["Standard", "Biaya awal hemat", "Cocok untuk kebutuhan banyak unit dengan budget awal lebih ringan."],
  ["Low watt", "Daya listrik terbatas", "Cocok untuk rumah, kos, atau ruangan dengan kapasitas listrik yang perlu dijaga."],
  ["Inverter", "Pemakaian rutin", "Cocok untuk ruangan yang dipakai lama karena suhu lebih stabil dan nyaman."],
]

const processSteps = [
  ["1", "Kirim kebutuhan", "Lokasi, jumlah ruangan, jumlah unit, dan target pemakaian."],
  ["2", "Cek rekomendasi", "RADJA AC bantu arahkan kapasitas PK, tipe AC, dan brand yang sesuai."],
  ["3", "Cek stok & estimasi", "Stok, alternatif tipe, jumlah unit, dan estimasi biaya dibahas lebih lanjut."],
  ["4", "Atur pembelian & pengiriman", "Unit saja, pengiriman, atau pemasangan dibahas sesuai area dan jumlah unit."],
]

const checklist = [
  "Lokasi proyek / area pengiriman",
  "Jumlah unit yang dibutuhkan",
  "Jumlah dan ukuran ruangan",
  "Fungsi ruangan",
  "Preferensi brand",
  "Budget perkiraan",
  "Unit saja atau dengan pemasangan",
  "Target waktu pengiriman / pemasangan",
]

const brands = [
  { title: "Daikin", href: "/brand/daikin", note: "Pilihan premium untuk rumah, kantor, dan proyek tertentu." },
  { title: "Gree", href: "/brand/gree", note: "Value menarik untuk usaha dan pembelian banyak unit." },
  { title: "Midea", href: "/brand/midea", note: "Kompetitif untuk rumah, kos, kantor, dan ruang usaha." },
  { title: "Hisense", href: "/brand/hisense", note: "Alternatif budget yang bisa dicek sesuai stok dan kebutuhan." },
  { title: "Sharp", href: "/brand/sharp", note: "Brand familiar untuk rumah dan kebutuhan usaha tertentu." },
  { title: "Brand lainnya", href: "/brand/lainnya", note: "Sansui, Panasonic, LG, Samsung, dan pilihan lain." },
]

const areas = [
  { title: "Purwokerto", href: "/jual-ac-purwokerto" },
  { title: "Banyumas", href: "/jual-ac-banyumas" },
  { title: "Sokaraja", href: "/jual-ac-sokaraja" },
  { title: "Ajibarang", href: "/jual-ac-ajibarang" },
  { title: "Wangon", href: "/jual-ac-wangon" },
  { title: "Cilongok", href: "/jual-ac-cilongok" },
  { title: "Jatilawang", href: "/jual-ac-jatilawang" },
  { title: "Purbalingga", href: "/jual-ac-purbalingga" },
  { title: "Banjarnegara", href: "/jual-ac-banjarnegara" },
  { title: "Cilacap", href: "/jual-ac-cilacap" },
  { title: "Kebumen", href: "/jual-ac-kebumen" },
  { title: "Tegal", href: "/jual-ac-tegal" },
  { title: "Yogyakarta", href: "/jual-ac-yogyakarta" },
  { title: "Luar kota / proyek khusus" },
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
    question: "Apakah RADJA AC melayani pembelian AC banyak unit?",
    answer: "Ya. RADJA AC dapat membantu kebutuhan AC dari beberapa unit sampai pembelian banyak unit untuk rumah, kos, kantor, ruko, sekolah, kontraktor, dan proyek luar kota.",
  },
  {
    question: "Apakah bisa kirim AC ke luar kota?",
    answer: "Bisa dikonsultasikan. Skema pengiriman menyesuaikan lokasi, jumlah unit, tipe AC, dan ketersediaan stok.",
  },
  {
    question: "Apakah bisa beli unit saja tanpa pemasangan?",
    answer: "Bisa. Untuk kebutuhan luar kota atau proyek tertentu, pembelian unit saja dapat menjadi opsi yang lebih fleksibel.",
  },
  {
    question: "Apakah bisa bantu hitungkan kebutuhan PK?",
    answer: "Bisa. RADJA AC dapat membantu estimasi kapasitas PK berdasarkan ukuran ruangan, fungsi ruangan, jumlah orang, dan pola pemakaian.",
  },
  {
    question: "Apakah bisa cek stok untuk banyak unit?",
    answer: "Bisa. Calon pembeli dapat mengirim jumlah unit dan pilihan brand agar stok serta alternatif tipe bisa dicek terlebih dahulu.",
  },
  {
    question: "Apakah bisa minta estimasi awal sebelum membeli?",
    answer: "Bisa. Estimasi awal dapat dibahas berdasarkan jumlah unit, brand, lokasi, dan kebutuhan unit saja atau dengan pemasangan.",
  },
]

function WhatsAppButton({ children = "Konsultasi Pengadaan AC", className = "" }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-black text-slate-950 shadow-[0_14px_38px_rgba(37,211,102,0.18)] ring-1 ring-[#25D366]/30 transition hover:-translate-y-0.5 hover:bg-[#20BA5A] sm:px-6 sm:py-4 ${className}`}
    >
      <WhatsappIcon className="h-5 w-5 text-slate-950" />
      {children}
    </a>
  )
}

function SectionLabel({ children }) {
  return <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">{children}</div>
}

function Section({ children, className = "" }) {
  return <section className={`mx-auto max-w-7xl px-6 py-7 lg:px-8 lg:py-10 ${className}`}>{children}</section>
}

export default function PengadaanAcProyek() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Pengadaan AC Banyak Unit & Proyek | RADJA AC Purwokerto"
        description="Pengadaan AC banyak unit untuk kos, kantor, ruko, sekolah, kontraktor, developer, dan proyek luar kota. Konsultasi stok, brand, pengiriman, dan pemasangan."
        canonicalPath="/pengadaan-ac-proyek"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(faqSchema)}</script></Helmet>
      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/16 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-6 pt-24 lg:px-8 lg:pb-10 lg:pt-30">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200 sm:text-sm">
              <PackageCheck className="h-4 w-4" />
              PENGADAAN AC PROYEK & BANYAK UNIT
            </div>

            <div className="mb-4 text-sm text-white/50">
              <Link to="/" className="transition hover:text-cyan-300">Beranda</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Pengadaan AC Proyek</span>
            </div>

            <h1 className="mb-4 text-3xl font-black leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl xl:text-6xl">
              Pengadaan AC banyak unit untuk proyek, usaha, dan luar kota
            </h1>
            <p className="mb-5 text-sm leading-7 text-white/72 sm:text-base">
              RADJA AC melayani kebutuhan AC dari beberapa unit sampai pengadaan skala besar untuk kos, kantor, ruko, sekolah, kontraktor, developer, dan proyek luar kota. Bantu cek kebutuhan, rekomendasi PK, pilihan brand, stok unit, pengiriman, sampai opsi pemasangan sesuai lokasi.
            </p>

            <div className="mb-4 flex w-full flex-col items-center gap-3 sm:flex-row">
              <WhatsAppButton className="w-full sm:w-auto" />
              <Link to="/katalog/ac-kantor-komersial" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-black text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 sm:w-auto sm:px-6 sm:py-4">
                Minta rekomendasi unit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="text-xs leading-6 text-white/48">
              Cocok untuk pembelian unit satuan, banyak unit, pengiriman luar kota, maupun kebutuhan proyek bertahap.
            </p>

            <div className="mt-4 rounded-[24px] border border-cyan-300/20 bg-white/[0.04] p-4 shadow-[0_14px_42px_rgba(15,23,42,0.22)] lg:max-w-xl">
              <div className="mb-2 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Dealer resmi
                </div>
              </div>
              <h2 className="mb-2 text-center text-lg font-black text-white">Produk original dari jalur dealer resmi</h2>
              <p className="mb-3 text-left text-xs leading-6 text-white/58">
                RADJA AC menyediakan pilihan AC original dan bergaransi resmi. Untuk kebutuhan banyak unit, calon pembeli bisa konsultasi stok, pilihan brand, dan ketersediaan tipe sebelum menentukan pembelian.
              </p>
              <img src={CERTIFICATE_IMAGE} alt="Sertifikat dealer resmi Daikin RADJA AC" loading="eager" decoding="async" className="aspect-[4/3] w-full rounded-[18px] bg-white object-contain p-2" />
            </div>
          </div>
        </section>

        <Section>
          <div className="mx-auto mb-5 max-w-3xl text-center">
            <SectionLabel>Kebutuhan proyek</SectionLabel>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Siap bantu kebutuhan AC untuk berbagai skala proyek</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">Mulai dari beberapa unit sampai banyak ruangan, RADJA AC bantu arahkan pilihan AC yang efisien dari sisi kapasitas, brand, daya listrik, stok, dan budget.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projectNeeds.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06] sm:p-5">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Icon className="h-5 w-5" /></div>
                <h3 className="mb-2 text-center text-base font-black text-white sm:text-lg">{title}</h3>
                <p className="text-left text-sm leading-6 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-5 max-w-3xl">
            <SectionLabel>Dokumentasi</SectionLabel>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Stok, pengiriman, dan showroom untuk kebutuhan banyak unit</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">Dokumentasi aktivitas RADJA AC untuk memberi gambaran stok, pengiriman, dan pilihan brand sebelum konsultasi kebutuhan proyek.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {trustItems.map(({ title, description, caption, images, icon: Icon }) => (
              <article key={title} className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] shadow-[0_16px_50px_rgba(15,23,42,0.2)]">
                <div className="grid grid-cols-2 gap-2 bg-slate-950/45 p-2">
                  {images.map((image) => (
                    <a key={image.src} href={image.src} target="_blank" rel="noreferrer" className="overflow-hidden rounded-[18px] bg-slate-900">
                      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" sizes="(min-width: 1024px) 16vw, 50vw" className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.03]" />
                    </a>
                  ))}
                </div>
                <div className="p-4 text-left sm:p-5">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Icon className="h-5 w-5" /></div>
                  <h3 className="mb-2 text-center text-lg font-black text-white">{title}</h3>
                  <p className="mb-3 text-left text-sm leading-6 text-white/62">{description}</p>
                  <p className="rounded-2xl border border-white/10 bg-slate-950/45 px-3 py-2.5 text-left text-xs leading-5 text-white/50">{caption}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-5 max-w-3xl">
            <SectionLabel>Foto aktivitas</SectionLabel>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Aktivitas stok, pengiriman, dan showroom RADJA AC</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">Foto pendukung lain dari aktivitas pengiriman, stok gudang, dan showroom yang tidak mengulang dokumentasi utama di atas.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-3">
            {documentationItems.map(([title, category, image, alt]) => (
              <a key={image} href={image} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.04] transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06] sm:rounded-[20px]">
                <div className="relative overflow-hidden bg-slate-900">
                  <img src={image} alt={alt} loading="lazy" decoding="async" sizes="33vw" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute left-1.5 top-1.5 rounded-full border border-cyan-300/20 bg-slate-950/70 px-1.5 py-0.5 text-[8px] font-semibold text-cyan-100 backdrop-blur sm:left-2 sm:top-2 sm:px-2 sm:py-1 sm:text-[10px]">{category}</span>
                </div>
                <div className="p-2 sm:p-3"><h3 className="line-clamp-2 text-[10px] font-black leading-3 text-white sm:text-sm sm:leading-5">{title}</h3></div>
              </a>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionLabel>Dukungan pengadaan</SectionLabel>
              <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Yang bisa RADJA AC bantu untuk pengadaan AC</h2>
              <p className="mb-5 text-sm leading-7 text-white/65 sm:text-base">Kebutuhan proyek bisa langsung dibahas dari jumlah unit, lokasi, brand, budget, stok, sampai opsi unit saja atau pemasangan.</p>
              <WhatsAppButton className="w-full sm:w-auto">Kirim kebutuhan proyek</WhatsAppButton>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {supportItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] p-3.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-white/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto mb-5 max-w-3xl text-center">
            <SectionLabel>Pilihan jenis AC</SectionLabel>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Pilih tipe AC sesuai pemakaian dan budget proyek</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">Untuk banyak unit, tipe AC berpengaruh ke biaya awal, listrik, dan kenyamanan pemakaian harian.</p>
          </div>
          <div className="grid gap-3 lg:grid-cols-3">
            {acTypes.map(([type, fit, note]) => (
              <div key={type} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Calculator className="h-5 w-5" /></div>
                <h3 className="mb-1 text-xl font-black text-white">{type}</h3>
                <p className="mb-2 text-sm font-semibold text-cyan-200">{fit}</p>
                <p className="text-sm leading-6 text-white/60">{note}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionLabel>Alur pengadaan</SectionLabel>
              <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Alur pengadaan dibuat jelas dari awal</h2>
              <p className="text-sm leading-7 text-white/65 sm:text-base">Tidak harus langsung punya data lengkap. Mulai dari jumlah unit, lokasi, dan gambaran kebutuhan.</p>
            </div>
            <div className="space-y-2.5">
              {processSteps.map(([number, title, description]) => (
                <div key={number} className="flex gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 font-black text-slate-950">{number}</div>
                  <div><h3 className="mb-1 font-black text-white">{title}</h3><p className="text-sm leading-6 text-white/60">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="rounded-[28px] border border-cyan-300/20 bg-cyan-300/[0.06] p-5 lg:p-7">
            <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionLabel>Data awal</SectionLabel>
                <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl">Kirim data ini agar estimasi lebih cepat</h2>
                <p className="mb-5 text-sm leading-7 text-white/65 sm:text-base">Data sederhana ini membantu mempercepat cek stok, estimasi, dan skema pengiriman.</p>
                <WhatsAppButton className="w-full sm:w-auto">Kirim data via WhatsApp</WhatsAppButton>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-3">
                    <ClipboardList className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-6 text-white/65">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto mb-5 max-w-3xl text-center">
            <SectionLabel>Brand AC</SectionLabel>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Pilihan brand untuk kebutuhan banyak unit</h2>
            <p className="text-sm leading-7 text-white/65 sm:text-base">Brand dipilih berdasarkan budget, stok, kapasitas ruangan, dan target penggunaan.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <Link key={brand.title} to={brand.href} className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <h3 className="mb-2 flex items-center justify-between text-lg font-black text-white">{brand.title}<ArrowRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" /></h3>
                <p className="text-sm leading-6 text-white/60">{brand.note}</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <SectionLabel>Area & pengiriman</SectionLabel>
              <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Pengadaan AC untuk Purwokerto, luar kota, dan kebutuhan proyek</h2>
              <p className="text-sm leading-7 text-white/65 sm:text-base">RADJA AC berbasis di Purwokerto dan melayani kebutuhan pengadaan AC untuk area sekitar Banyumas hingga luar kota. Untuk jumlah unit besar, skema pengiriman dibahas berdasarkan lokasi, jumlah unit, dan kesiapan stok.</p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {areas.map((area) => {
                const className = "flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-bold text-white/75 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.07] sm:text-sm"
                const content = <><MapPin className="h-4 w-4 shrink-0 text-cyan-300" />{area.title}</>

                return area.href ? (
                  <Link key={area.title} to={area.href} className={className}>{content}</Link>
                ) : (
                  <div key={area.title} className="flex items-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2.5 text-xs font-bold text-cyan-100 sm:text-sm">
                    <MapPin className="h-4 w-4 shrink-0 text-cyan-300" />{area.title}
                  </div>
                )
              })}
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto mb-5 max-w-3xl text-center">
            <SectionLabel>Panduan terkait</SectionLabel>
            <h2 className="text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Lihat juga katalog dan halaman pendukung</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {internalLinks.map((item) => (
              <Link key={item.href} to={item.href} className="group rounded-[22px] border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <h3 className="mb-2 flex items-center justify-between font-black text-white">{item.title}<ArrowRight className="h-4 w-4 text-cyan-300 transition group-hover:translate-x-1" /></h3>
                <p className="text-sm leading-6 text-white/60">{item.description}</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section className="max-w-4xl">
          <div className="mb-5 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Pertanyaan seputar pengadaan AC proyek</h2>
          </div>
          <div className="space-y-2.5">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                <summary className="cursor-pointer list-none font-black text-white marker:hidden"><span className="flex items-start justify-between gap-4">{item.question}<span className="text-cyan-300 transition group-open:rotate-45">+</span></span></summary>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="mx-auto max-w-5xl px-6 pb-14 pt-7 lg:px-8 lg:pb-20 lg:pt-10">
          <div className="rounded-[30px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/12 via-white/[0.05] to-blue-500/10 p-6 text-center shadow-[0_18px_70px_rgba(15,23,42,0.32)] lg:p-9">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300"><Send className="h-6 w-6" /></div>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">Siapkan kebutuhan AC proyek Anda sekarang</h2>
            <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">Kirim jumlah unit, lokasi, pilihan brand, dan kebutuhan ruangan. RADJA AC akan bantu arahkan pilihan AC untuk pembelian banyak unit, pengiriman luar kota, atau kebutuhan proyek bertahap.</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton className="w-full sm:w-auto">Konsultasi pengadaan via WhatsApp</WhatsAppButton>
              <Link to="/kontak" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-black text-white/90 transition hover:border-cyan-300/40 hover:bg-white/10 sm:w-auto sm:px-6 sm:py-4">
                <MessageCircle className="h-5 w-5" /> Kontak RADJA AC
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
