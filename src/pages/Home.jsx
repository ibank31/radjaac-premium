import { Helmet } from "react-helmet-async"
import SeoHead from "../components/SeoHead"

import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"

import CategorySection from "../components/home/CategorySection"
import BrandsSection from "../components/home/BrandsSection"
import WhyChooseSection from "../components/home/WhyChooseSection"

import ClosingCTA from "../components/ClosingCTA"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      <SeoHead
        title="Dealer AC Resmi Purwokerto & Banyumas | RADJA AC"
        description="RADJA AC melayani penjualan AC original berbagai brand resmi seperti Daikin, Gree, Midea, Hisense, Sansui, Sharp, Panasonic, LG, Samsung dan lainnya di Purwokerto & Banyumas."
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
                  text: "RADJA AC menyediakan AC original berbagai brand seperti Daikin, Gree, Midea, Hisense, Sansui, Sharp, Panasonic, LG, Samsung, TCL, Toshiba, Mitsubishi, Aqua, Polytron, Changhong, Ariston, dan lainnya.",
                },
              },
              {
                "@type": "Question",
                name: "Apakah bisa konsultasi ukuran PK sebelum membeli AC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bisa. Tim RADJA AC dapat membantu rekomendasi kapasitas AC berdasarkan luas ruangan, fungsi ruangan, daya listrik, dan kebutuhan penggunaan.",
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
    </div>
  );
}