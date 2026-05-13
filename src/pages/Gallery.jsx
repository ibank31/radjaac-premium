import { Camera, ImagePlus, PackageCheck, Warehouse } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"

const galleryCategories = [
  {
    title: "Showroom",
    description: "Display brand dan suasana toko RADJA AC.",
    icon: Camera,
  },
  {
    title: "Gudang",
    description: "Stok unit indoor, outdoor, dan berbagai brand AC.",
    icon: Warehouse,
  },
  {
    title: "Display Produk",
    description: "Indoor, outdoor, cassette, portable, dan unit display.",
    icon: PackageCheck,
  },
  {
    title: "Material Instalasi",
    description: "Stok pipa dan perlengkapan pemasangan AC.",
    icon: ImagePlus,
  },
]

const galleryItems = [
  {
    title: "Showroom Gree RADJA AC Purwokerto",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/showroom-gree-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Display AC Gree Showroom",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp",
    thumbnail: "/assets/gallery/thumb/showroom-gree-radja-ac-purwokerto-02-thumb.webp",
  },
  {
    title: "Showroom Multibrand RADJA AC",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/showroom-multibrand-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Showroom Daikin dan Gree",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp",
  },
  {
    title: "Display Daikin dan Sansui",
    category: "Showroom",
    image: "/assets/gallery/large/display-daikin-sansui-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-daikin-sansui-radja-ac-01-thumb.webp",
  },
  {
    title: "Gudang Stok AC Gree",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-01-thumb.webp",
  },
  {
    title: "Gudang Stok AC Aqua",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-aqua-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-aqua-radja-ac-01-thumb.webp",
  },
  {
    title: "Rak Gudang Stok AC",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Stok AC Daikin dan Gree",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-daikin-gree-radja-ac-01-thumb.webp",
  },
  {
    title: "Stok AC Gree Gudang",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-02.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-02-thumb.webp",
  },
  {
    title: "Gudang AC Gree RADJA AC",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-03.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-03-thumb.webp",
  },
  {
    title: "Display AC Gree Low Watt",
    category: "Display Produk",
    image: "/assets/gallery/large/display-ac-gree-low-watt-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-ac-gree-low-watt-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC FLife",
    category: "Display Produk",
    image: "/assets/gallery/large/display-ac-flife-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-ac-flife-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC Cassette Daikin",
    category: "Display Produk",
    image: "/assets/gallery/large/daikin-cassette-display-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/daikin-cassette-display-radja-ac-01-thumb.webp",
  },
  {
    title: "Display Outdoor Daikin",
    category: "Display Produk",
    image: "/assets/gallery/large/display-outdoor-daikin-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-outdoor-daikin-radja-ac-01-thumb.webp",
  },
  {
    title: "Display Daikin Nusantara",
    category: "Display Produk",
    image: "/assets/gallery/large/display-daikin-nusantara-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-daikin-nusantara-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC Reiwa Portable",
    category: "Display Produk",
    image: "/assets/gallery/large/display-reiwa-portable-ac-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-reiwa-portable-ac-radja-ac-01-thumb.webp",
  },
  {
    title: "Material Instalasi AC",
    category: "Material Instalasi",
    image: "/assets/gallery/large/material-instalasi-ac-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/material-instalasi-ac-radja-ac-01-thumb.webp",
  },
  {
    title: "Stok Pipa AC",
    category: "Material Instalasi",
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

        <section className="mx-auto max-w-7xl px-5 pb-6 pt-24 lg:px-8 lg:pb-8 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Camera className="h-4 w-4" />
              GALLERY RADJA AC
            </div>

            <h1 className="mb-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Bukti nyata showroom, stok, dan aktivitas RADJA AC
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
              Foto asli untuk menunjukkan toko aktif, stok tersedia, display produk lengkap, dan aktivitas operasional RADJA AC Purwokerto.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-5 lg:px-8 lg:py-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {galleryCategories.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mb-2 text-sm font-black text-white sm:text-base">{title}</h2>
                <p className="text-xs leading-5 text-white/55">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-12 pt-5 lg:px-8 lg:pb-16 lg:pt-8">
          <div className="mb-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">FOTO ASLI</p>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Showroom, gudang, stok, dan display produk
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/60">
              Disusun padat agar pengunjung cepat melihat bukti toko, stok, dan produk RADJA AC.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {galleryItems.map((item, index) => (
              <a
                key={item.image}
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] shadow-[0_12px_28px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="relative overflow-hidden bg-slate-950/70">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading={index < 6 ? "eager" : "lazy"}
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-2 top-2 rounded-full border border-cyan-300/20 bg-slate-950/75 px-2 py-1 text-[10px] font-semibold text-cyan-100 backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="line-clamp-2 text-sm font-black leading-5 text-white">{item.title}</h3>
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
