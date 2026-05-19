import { useMemo, useState } from "react"
import { Camera, ImagePlus, PackageCheck, PlayCircle, Warehouse } from "lucide-react"

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

const galleryFilters = ["Semua", "Pengiriman", "Gudang", "Showroom", "Display Produk", "Material Instalasi", "Pemasangan"]

const galleryVideos = [
  {
    title: "Pengiriman AC RADJA AC",
    category: "Pengiriman",
    video: "/assets/gallery/videos/pengiriman-ac-radja-ac-purwokerto-01.mp4",
    thumbnail: "/assets/gallery/video-thumbnails/pengiriman-ac-radja-ac-purwokerto-01.webp",
  },
  {
    title: "Pengiriman Stok AC",
    category: "Pengiriman",
    video: "/assets/gallery/videos/pengiriman-stok-ac-radja-ac-purwokerto-02.mp4",
    thumbnail: "/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-purwokerto-02.webp",
  },
  {
    title: "Stok AC Siap Kirim",
    category: "Stok & Aktivitas",
    video: "/assets/gallery/videos/pengiriman-stok-ac-radja-ac-clean.mp4",
    thumbnail: "/assets/gallery/video-thumbnails/pengiriman-stok-ac-radja-ac-clean.webp",
  },
]

const galleryItems = [
  {
    title: "Pemasangan AC Cassette",
    category: "Pemasangan",
    image: "/assets/gallery/pemasangan/pemasangan-ac-cassete.webp",
    thumbnail: "/assets/gallery/pemasangan/pemasangan-ac-cassete.webp",
  },
  {
    title: "Outdoor AC Cassette",
    category: "Pemasangan",
    image: "/assets/gallery/pemasangan/outdoor-ac-cassete.webp",
    thumbnail: "/assets/gallery/pemasangan/outdoor-ac-cassete.webp",
  },
  {
    title: "Pengiriman Sharp & Midea",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/pengiriman-sharp-midea.webp",
    thumbnail: "/assets/gallery/pengiriman/pengiriman-sharp-midea.webp",
  },
  {
    title: "Showroom Gree RADJA AC Purwokerto",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/showroom-gree-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Gudang Stok AC Gree",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC Gree Low Watt",
    category: "Display Produk",
    image: "/assets/gallery/large/display-ac-gree-low-watt-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-ac-gree-low-watt-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC Gree Showroom",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-gree-radja-ac-purwokerto-02.webp",
    thumbnail: "/assets/gallery/thumb/showroom-gree-radja-ac-purwokerto-02-thumb.webp",
  },
  {
    title: "Gudang Stok AC Aqua",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-aqua-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-aqua-radja-ac-01-thumb.webp",
  },
  {
    title: "Display AC FLife",
    category: "Display Produk",
    image: "/assets/gallery/large/display-ac-flife-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-ac-flife-radja-ac-01-thumb.webp",
  },
  {
    title: "Pengiriman Stok Aqua Truk Putih",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/radja-ac-pengiriman-stok-aqua-truk-putih.webp",
    thumbnail: "/assets/gallery/pengiriman/radja-ac-pengiriman-stok-aqua-truk-putih.webp",
  },
  {
    title: "Showroom Multibrand RADJA AC",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-multibrand-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/showroom-multibrand-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Rak Gudang Stok AC",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-radja-ac-purwokerto-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-radja-ac-purwokerto-01-thumb.webp",
  },
  {
    title: "Display AC Cassette Daikin",
    category: "Display Produk",
    image: "/assets/gallery/large/daikin-cassette-display-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/daikin-cassette-display-radja-ac-01-thumb.webp",
  },
  {
    title: "Persiapan Pengiriman RADJA AC",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/radja-ac-persiapan-pengiriman.webp",
    thumbnail: "/assets/gallery/pengiriman/radja-ac-persiapan-pengiriman.webp",
  },
  {
    title: "Showroom Daikin dan Gree",
    category: "Showroom",
    image: "/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/large/showroom-daikin-gree-radja-ac-01.webp",
  },
  {
    title: "Stok AC Daikin dan Gree",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-daikin-gree-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-daikin-gree-radja-ac-01-thumb.webp",
  },
  {
    title: "Display Outdoor Daikin",
    category: "Display Produk",
    image: "/assets/gallery/large/display-outdoor-daikin-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-outdoor-daikin-radja-ac-01-thumb.webp",
  },
  {
    title: "Stok AC Sharp RADJA AC",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/radja-ac-stok-sharp.webp",
    thumbnail: "/assets/gallery/pengiriman/radja-ac-stok-sharp.webp",
  },
  {
    title: "Display Daikin dan Sansui",
    category: "Showroom",
    image: "/assets/gallery/large/display-daikin-sansui-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-daikin-sansui-radja-ac-01-thumb.webp",
  },
  {
    title: "Stok AC Gree Gudang",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-02.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-02-thumb.webp",
  },
  {
    title: "Display Daikin Nusantara",
    category: "Display Produk",
    image: "/assets/gallery/large/display-daikin-nusantara-radja-ac-01.webp",
    thumbnail: "/assets/gallery/thumb/display-daikin-nusantara-radja-ac-01-thumb.webp",
  },
  {
    title: "Gudang AC Gree RADJA AC",
    category: "Gudang",
    image: "/assets/gallery/large/gudang-stok-ac-gree-radja-ac-03.webp",
    thumbnail: "/assets/gallery/thumb/gudang-stok-ac-gree-radja-ac-03-thumb.webp",
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
  {
    title: "Pengiriman Ariston dan Daikin",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/pengiriman-ariston-daikin.webp",
    thumbnail: "/assets/gallery/pengiriman/pengiriman-ariston-daikin.webp",
  },
  {
    title: "Pengiriman AC Ariston",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/pengiriman-ac-ariston.webp",
    thumbnail: "/assets/gallery/pengiriman/pengiriman-ac-ariston.webp",
  },
  {
    title: "Restock Outdoor Daikin",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/outdoor-ac-daikin-restock.webp",
    thumbnail: "/assets/gallery/pengiriman/outdoor-ac-daikin-restock.webp",
  },
  {
    title: "Loading AC Ariston",
    category: "Pengiriman",
    image: "/assets/gallery/pengiriman/loading-ac-ariston.webp",
    thumbnail: "/assets/gallery/pengiriman/loading-ac-ariston.webp",
  },
  {
    title: "Display AC Ariston",
    category: "Display Produk",
    image: "/assets/showroom/display-ariston-radja-ac.webp",
    thumbnail: "/assets/showroom/display-ariston-radja-ac.webp",
  },
  {
    title: "Display AC Daikin",
    category: "Display Produk",
    image: "/assets/showroom/display-daikin-radja-ac.webp",
    thumbnail: "/assets/showroom/display-daikin-radja-ac.webp",
  },
  {
    title: "Display AC Gree FLife",
    category: "Display Produk",
    image: "/assets/showroom/display-gree-flife-radja-ac.webp",
    thumbnail: "/assets/showroom/display-gree-flife-radja-ac.webp",
  },
  {
    title: "Display AC Gree Inverter",
    category: "Display Produk",
    image: "/assets/showroom/display-gree-inverter-radja-ac.webp",
    thumbnail: "/assets/showroom/display-gree-inverter-radja-ac.webp",
  },
  {
    title: "Display Gree Residential AC",
    category: "Display Produk",
    image: "/assets/showroom/display-gree-residential-ac-radja-ac.webp",
    thumbnail: "/assets/showroom/display-gree-residential-ac-radja-ac.webp",
  },
  {
    title: "Display Midea Cassette & Floor Standing",
    category: "Display Produk",
    image: "/assets/showroom/display-midea-cassette-floor-standing-radja-ac.webp",
    thumbnail: "/assets/showroom/display-midea-cassette-floor-standing-radja-ac.webp",
  },
  {
    title: "Display Sansui dan Gree",
    category: "Display Produk",
    image: "/assets/showroom/display-sansui-gree-radja-ac.webp",
    thumbnail: "/assets/showroom/display-sansui-gree-radja-ac.webp",
  },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Semua")

  const filteredGalleryItems = useMemo(() => {
    if (activeFilter === "Semua") return galleryItems
    return galleryItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

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

        <section className="mx-auto max-w-5xl px-5 py-4 lg:px-8 lg:py-6">
          <div className="mb-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">VIDEO AKTIVITAS</p>
            <h2 className="mb-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl">
              Cuplikan stok dan pengiriman RADJA AC
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {galleryVideos.map((item) => (
              <a
                key={item.video}
                href={item.video}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.04] shadow-[0_10px_22px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06] sm:rounded-[18px]"
              >
                <div className="relative overflow-hidden bg-slate-900/25">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 320px, 33vw"
                    className="aspect-[4/5] w-full bg-slate-900/25 object-cover transition duration-500 group-hover:scale-[1.03] sm:aspect-[3/4] lg:aspect-[4/5]"
                  />
                  <span className="absolute left-1.5 top-1.5 rounded-full border border-cyan-300/20 bg-slate-950/55 px-1.5 py-0.5 text-[8px] font-semibold text-cyan-100 backdrop-blur sm:left-2 sm:top-2 sm:px-2 sm:py-1 sm:text-[10px]">
                    {item.category}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-100 transition group-hover:from-slate-950/10">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/20 text-white shadow-[0_8px_24px_rgba(15,23,42,0.28)] backdrop-blur sm:h-11 sm:w-11">
                      <PlayCircle className="h-5 w-5 drop-shadow sm:h-6 sm:w-6" />
                    </span>
                  </span>
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="line-clamp-2 text-[11px] font-black leading-4 text-white sm:text-sm sm:leading-5">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-12 pt-5 lg:px-8 lg:pb-16 lg:pt-8">
          <div className="mb-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">FOTO AKTIVITAS</p>
            <h2 className="mb-3 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
              Showroom, gudang, stok, dan display produk
            </h2>
          </div>

          <div className="mb-6 overflow-x-auto pb-1">
            <div className="flex min-w-max justify-center gap-2 px-1 sm:min-w-0 sm:flex-wrap">
              {galleryFilters.map((filter) => {
                const isActive = activeFilter === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${
                      isActive
                        ? "border-cyan-300/40 bg-cyan-300 text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.18)]"
                        : "border-white/10 bg-white/[0.04] text-white/68 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-100"
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredGalleryItems.map((item) => (
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
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1280px) 240px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
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
