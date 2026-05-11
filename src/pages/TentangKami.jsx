import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import AboutHero from "../components/tentang/AboutHero"
import AboutProfile from "../components/tentang/AboutProfile"
import AboutCredentials from "../components/tentang/AboutCredentials"
import AboutTrust from "../components/tentang/AboutTrust"

export default function TentangKami() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <SeoHead
        title="Tentang Kami | RADJA AC Purwokerto"
        description="Kenali RADJA AC sebagai partner penjualan AC multibrand untuk rumah, kantor, dan usaha di Purwokerto & Banyumas. Dapatkan konsultasi produk, pengadaan unit, instalasi rapi, dan dukungan after-sales yang responsif."
        canonicalPath="/tentang-kami"
      />

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pb-14 pt-28 lg:pb-20">
        <AboutHero />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-8">
            <AboutProfile />
            <AboutCredentials />
          </div>

          <AboutTrust />
        </div>
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
