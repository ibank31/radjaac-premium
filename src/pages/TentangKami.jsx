import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import AboutHero from "../components/tentang/AboutHero"
import AboutProfile from "../components/tentang/AboutProfile"
import AboutAreas from "../components/tentang/AboutAreas"
import AboutTrust from "../components/tentang/AboutTrust"

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Tentang Kami | Radja AC Purwokerto"
        description="Kenali Radja AC, layanan service, cuci, dan instalasi AC terbaik di Purwokerto dan Banyumas. Profesional, bergaransi, dan siap melayani kebutuhan AC Anda."
        canonicalPath="/tentang-kami"
      />

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <AboutHero />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <AboutProfile />
            <AboutAreas />
          </div>

          <AboutTrust />
        </div>
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}
