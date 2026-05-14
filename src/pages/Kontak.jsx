import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import ContactHero from "../components/kontak/ContactHero"
import OperationalHours from "../components/kontak/OperationalHours"
import ServiceAreas from "../components/kontak/ServiceAreas"
import ContactMap from "../components/kontak/ContactMap"

export default function Kontak() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <SeoHead
        title="Kontak | Radja AC Purwokerto"
        description="Hubungi Radja AC Purwokerto untuk konsultasi beli AC, cek stok, tanya harga, rekomendasi PK, dan area pengiriman di Purwokerto dan Banyumas."
        canonicalPath="/kontak"
      />

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <ContactHero />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 sm:space-y-8">

            <OperationalHours />
            <ServiceAreas />
          </div>

          <ContactMap />
        </div>
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  )
}