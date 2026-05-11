import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import AboutHero from "../components/tentang/AboutHero"
import AboutProfile from "../components/tentang/AboutProfile"
import AboutTrust from "../components/tentang/AboutTrust"

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Tentang Kami | Radja AC Purwokerto"
        description="Kenali Radja AC sebagai partner penjualan AC multibrand untuk rumah, kantor, dan usaha di Purwokerto & Banyumas. Dapatkan konsultasi produk, pengadaan unit, instalasi rapi, dan dukungan after-sales yang responsif."
        canonicalPath="/tentang-kami"
      />

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <AboutHero />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <AboutProfile />
          </div>

          <AboutTrust />
        </div>
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
