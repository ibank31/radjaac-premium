import { Helmet } from "react-helmet-async"
import SeoHead from "../components/SeoHead"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import TrustStripSection from "../components/TrustStripSection"
import ServicesSection from "../components/ServicesSection"
import BrandsSection from "../components/BrandsSection"
import FeaturedProductsSection from "../components/FeaturedProductsSection"
import WhyChooseUs from "../components/WhyChooseUs"
import PortfolioSection from "../components/PortfolioSection"
import TestimonialsSection from "../components/TestimonialsSection"
import ClosingCTA from "../components/ClosingCTA"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import MiniReviewSection from "../components/MiniReviewSection"
import AboutTrustSection from "../components/AboutTrustSection"
import InternalLinksSection from "../components/InternalLinksSection"
import LocationSection from "../components/LocationSection"
import HomeFAQSection from "../components/HomeFAQSection"

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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <HeroSection />
        <TrustStripSection />
        <BrandsSection />
        <FeaturedProductsSection />
        <WhyChooseUs />
        <ServicesSection />
        <PortfolioSection />
        <MiniReviewSection />
        <AboutTrustSection />
        <InternalLinksSection />
        <section className="px-6 py-16 bg-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-300 font-medium mb-3">
              Area Layanan
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Siap Melayani Purwokerto dan Sekitarnya
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Radja AC melayani penjualan, instalasi, service, dan cuci AC untuk rumah, kantor, toko, dan tempat usaha di berbagai area Banyumas dan sekitarnya termasuk Sokaraja, Ajibarang, Purbalingga, dan Cilacap.
            </p>
          </div>
        </section>
        <LocationSection />
        <HomeFAQSection />
        <TestimonialsSection />
        <ClosingCTA />
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}