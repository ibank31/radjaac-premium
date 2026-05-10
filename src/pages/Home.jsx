import { Helmet } from "react-helmet-async"
import SeoHead from "../components/SeoHead"

import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"

import CategorySection from "../components/home/CategorySection"
import BrandsSection from "../components/home/BrandsSection"
import WhyChooseSection from "../components/home/WhyChooseSection"

import ClosingCTA from "../components/ClosingCTA"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"

export default function Home() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      <SeoHead
        title="Dealer AC Purwokerto & Banyumas | Jual AC Daikin, Gree, Sharp - RADJA AC"
        description="RADJA AC menyediakan penjualan AC berbagai brand seperti Daikin, Gree, Sharp, Panasonic, LG, Midea dan lainnya di Purwokerto & Banyumas. Ready stock, instalasi profesional, dan konsultasi gratis."
        canonicalPath="/"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Brand AC apa saja yang tersedia di RADJA AC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kami menyediakan berbagai brand AC premium seperti Daikin, Gree, Sharp, Panasonic, LG, Midea, Samsung, TCL, Toshiba, Mitsubishi, Aqua, Polytron, Changhong, Hisense, Ariston, dan Sansui.",
                },
              },
              {
                "@type": "Question",
                name: "AC berapa PK yang cocok untuk ruangan saya?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rekomendasi PK AC tergantung luas ruangan dan jumlah penghuni. AC 1 PK untuk ruang 12-15m², 1.5 PK untuk 16-20m², 2 PK untuk 21-25m². Konsultasikan dengan tim kami untuk rekomendasi yang tepat.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <HeroSection />

        <CategorySection />

        <BrandsSection />

        <WhyChooseSection />

        <ClosingCTA />
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}