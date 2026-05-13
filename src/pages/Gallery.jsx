import { Camera, ImagePlus, PackageCheck, Warehouse } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"

const galleryCategories = [
  {
    title: "Showroom",
    description: "Display brand, area konsultasi, dan suasana toko RADJA AC Purwokerto.",
    icon: Camera,
  },
  {
    title: "Gudang",
    description: "Stok unit indoor, outdoor, dan berbagai brand AC yang tersedia.",
    icon: Warehouse,
  },
  {
    title: "Display Produk",
    description: "Dokumentasi indoor, outdoor, cassette, portable, dan unit display di showroom.",
    icon: PackageCheck,
  },
  {
    title: "Material Instalasi",
    description: "Stok pipa dan perlengkapan pendukung pemasangan AC.",
    icon: ImagePlus,
  },
]

const galleryItems = [
  {
    title: "Showroom Gree RADJA AC Purwokerto",
    category: "Showroom",
    description: "Display showroom Gree RADJA AC Purwokerto dengan unit AC dan area konsultasi.",
    image: "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/showroom-gree-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Display AC Gree Showroom",
    category: "Showroom",
    description: "Area showroom Gree RADJA AC Purwokerto dengan display indoor-outdoor dan cassette AC.",
    image: "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp",
    thumbnail: "/assets/gallery/thumb/showroom-gree-radja-ac-purwokerto-02-thumb.webp",
  },
  {
    title: "Showroom Multibrand RADJA AC",
    category: "Showroom",
    description: "Area showroom multibrand RADJA AC dengan display Gree, FLife, Ariston, Hisense, dan Modena.",
    image: "/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/showroom-multibrand-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Showroom Daikin dan Gree",
    category: "Showroom",
    description: "Tampilan showroom RADJA AC dengan display Daikin, Gree, dan stok unit siap jual.",
    image: "/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp",
  },
  {
    title: "Display Daikin dan Sansui",
    category: "Showroom",
    description: "Area display Daikin dan Sansui di showroom RADJA AC Purwokerto.",
    image: "/assets/gallery/large/display-daikin-sansui-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-daikin-sansui-radja-ac-01-thumb.webp",
  },
  {
    title: "Gudang Stok AC Gree",
    category: "Gudang",
    description: "Lorong gudang stok AC Gree dan unit outdoor RADJA AC.",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-01-thumb.webp",
  },
  {
    title: "Gudang Stok AC Aqua",
    category: "Gudang",
    description: "Stok AC Aqua dan brand lain di gudang RADJA AC.",
    image: "/assets/gallery/large/gudang-stok-ac-aqua-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-aqua-radja-ac-01-thumb.webp",
  },
  {
    title: "Rak Gudang Stok AC",
    category: "Gudang",
    description: "Rak gudang berisi stok AC berbagai brand di RADJA AC Purwokerto.",
    image: "/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Stok AC Daikin dan Gree",
    category: "Gudang",
    description: "Stok AC Daikin dan Gree untuk kebutuhan pelanggan RADJA AC.",
    image: "/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-daikin-gree-radja-ac-01-thumb.webp",
  },
  {
    title: "Stok AC Gree Gudang",
    category: "Gudang",
    description: "Tumpukan stok AC Gree di area gudang RADJA AC.",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-02.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-02-thumb.webp",
  },
  {
    title: "Gudang AC Gree RADJA AC",
    category: "Gudang",
    description: "Stok AC Gree di gudang RADJA AC untuk kebutuhan rumah dan proyek.",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-03.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-03-thumb.webp",
  },
  {
    title: "Display AC Gree Low Watt",
    category: "Display Produk",
    description: "Display AC Gree low watt dan inverter series di showroom RADJA AC.",
    image: "/assets/gallery/large/display-ac-gree-low-watt-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-ac-gree-low-watt-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC FLife",
    category: "Display Produk",
    description: "Unit display AC FLife standard series di showroom RADJA AC.",
    image: "/assets/gallery/large/display-ac-flife-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-ac-flife-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC Cassette Daikin",
    category: "Display Produk",
    description: "Unit cassette Daikin sebagai contoh pilihan AC cassette untuk kebutuhan ruangan tertentu.",
    image: "/assets/gallery/large/daikin-cassette-display-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/daikin-cassette-display-radja-ac-01-thumb.webp",
  },
  {
    title: "Display Outdoor Daikin",
    category: "Display Produk",
    description: "Unit outdoor Daikin di area display showroom RADJA AC.",
    image: "/assets/gallery/large/display-outdoor-daikin-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-outdoor-daikin-radja-ac-01-thumb.webp",
  },
  {
    title: "Display Daikin Nusantara",
    category: "Display Produk",
    description: "Display AC Daikin Nusantara di showroom RADJA AC Purwokerto.",
    image: "/assets/gallery/large/display-daikin-nusantara-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-daikin-nusantara-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC Reiwa Portable",
    category: "Display Produk",
    description: "Display AC Reiwa portable dan unit window di showroom RADJA AC.",
    image: "/assets/gallery/large/display-reiwa-portable-ac-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-reiwa-portable-ac-radja-ac-01-thumb.webp",
  },
  {
    title: "Material Instalasi AC",
    category: "Material Instalasi",
    description: "Stok material instalasi AC seperti pipa dan perlengkapan pemasangan.",
    image: "/assets/gallery/large/material-instalasi-ac-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/material-instalasi-ac-radja-ac-01-thumb.webp",
  },
  {
    title: "Stok Pipa AC",
    category: "Material Instalasi",
    description: "Stok pipa AC dan material instalasi untuk pemasangan pelanggan.",
    image: "/assets/gallery/large/stok-pipa-ac-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/stok-pipa-ac-radja-ac-purwokerto-01-thumb.webp",
  },
]

export default function Gallery() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Gallery RADJA AC Purwokerto — Showroom, Gudang, dan Dokumentasi"
        description="Gallery RADJA AC Purwokerto untuk dokumentasi showroom, gudang, stok produk, pengiriman, dan pemasangan AC pelanggan."
        canonicalPath="/gallery"
      />

      <Navbar />

      <main>
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-220px] h-[360px] w-[360px] rounded-full bg-cyan-500/18 blur-[120px]" />
          <div className="absolute bottom-[-200px] right-[-120px] h-[360px] w-[360px] rounded-full bg-blue-500/14 blur-[120px]" />
        </div>

        <section className="mx-auto max-w-7xl px-6 pb-10 pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Camera className="h-4 w-4" />
              GALLERY RADJA AC
            </div>

            <h1 className="mb-5 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Dokumentasi showroom, gudang, dan aktivitas RADJA AC
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Foto asli RADJA AC untuk menunjukkan showroom, stok unit, gudang, material instalasi, dan aktivitas operasional agar calon pelanggan lebih percaya sebelum membeli AC.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {galleryCategories.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mb-3 text-xl font-black text-white">{title}</h2>
                <p className="text-sm leading-7 text-white/58">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">FOTO ASLI</p>
            <h2 className="mb-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Showroom, gudang, dan stok produk
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
              Foto dioptimasi ke format WebP agar halaman tetap ringan tanpa mengorbankan tampilan utama.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <a
                key={item.image}
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="relative overflow-hidden bg-slate-950/70">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-slate-950/75 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-black text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-white/58">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}
