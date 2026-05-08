import { Helmet } from "react-helmet-async"
import Navbar from "../components/Navbar"
import SignsAcNeedsCleaningSection from "../components/SignsAcNeedsCleaningSection"
import CuciACPricingSection from "../components/CuciACPricingSection"
import CuciACCTASection from "../components/CuciACCTASection"

export default function CuciAC() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Helmet>
        <title>Cuci AC Purwokerto | Jasa Pembersihan AC Berkala</title>
        <meta name="description" content="Layanan cuci AC rutin dan berkala di Purwokerto. AC tetap dingin, hemat listrik, dan lebih awet dengan perawatan berkala dari teknisi profesional kami." />
        <meta property="og:title" content="Cuci AC Purwokerto - Perawatan & Pembersihan AC Berkala" />
        <meta property="og:description" content="Jasa pembersihan AC profesional untuk menjaga performa AC tetap optimal, hemat energi, dan panjang umur." />
      </Helmet>

      <Navbar />

      <section className="bg-gradient-to-b from-[#07122b] to-[#050816] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Cuci AC Purwokerto
          </h1>

          <p className="text-xl text-cyan-100 max-w-2xl">
            Layanan cuci AC rutin agar AC tetap dingin,
            hemat listrik, dan lebih awet.
          </p>
        </div>
      </section>

      <SignsAcNeedsCleaningSection />
      <CuciACPricingSection />
      <CuciACCTASection />
    </div>
  )
}