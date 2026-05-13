import { Camera, ImagePlus, MapPin, PackageCheck, Warehouse } from "lucide-react"

import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"

const gallerySlots = [
  {
    title: "Foto Gudang",
    description: "Tempat untuk menampilkan stok unit indoor, outdoor, dan display produk RADJA AC.",
    icon: Warehouse,
  },
  {
    title: "Showroom",
    description: "Dokumentasi display brand, area konsultasi, dan suasana toko RADJA AC Purwokerto.",
    icon: Camera,
  },
  {
    title: "Pengiriman Unit",
    description: "Foto proses pengiriman AC ke pelanggan rumah, kantor, toko, dan proyek.",
    icon: PackageCheck,
  },
  {
    title: "Pemasangan",
    description: "Dokumentasi instalasi indoor-outdoor, jalur pipa, dan hasil pemasangan yang rapi.",
    icon: ImagePlus,
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
              Halaman ini disiapkan untuk menampilkan foto asli RADJA AC, mulai dari gudang, stok unit, display showroom, pengiriman, hingga pemasangan AC di lokasi pelanggan.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {gallerySlots.map(({ title, description, icon: Icon }) => (
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
          <div className="rounded-[34px] border border-cyan-300/20 bg-cyan-300/5 p-6 text-center sm:p-10 lg:p-14">
            <MapPin className="mx-auto mb-5 h-10 w-10 text-cyan-300" />
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">
              Siap diisi foto asli RADJA AC
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
              Nanti foto gudang, showroom, stok produk, dan dokumentasi pekerjaan bisa ditambahkan ke halaman ini agar calon pelanggan lebih percaya sebelum membeli AC.
            </p>
          </div>
        </section>
      </main>

      <FloatingWhatsapp />
      <Footer />
    </div>
  )
}
