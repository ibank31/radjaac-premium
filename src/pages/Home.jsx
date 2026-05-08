import { Helmet } from "react-helmet-async"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import TrustStripSection from "../components/TrustStripSection"
import ServicesSection from "../components/ServicesSection"
import BrandsSection from "../components/BrandsSection"
import WhyChooseUs from "../components/WhyChooseUs"
import PortfolioSection from "../components/PortfolioSection"
import TestimonialsSection from "../components/TestimonialsSection"
import ClosingCTA from "../components/ClosingCTA"
import Footer from "../components/Footer"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import MiniReviewSection from "../components/MiniReviewSection"
import PricingPreviewSection from "../components/PricingPreviewSection"
import AboutTrustSection from "../components/AboutTrustSection"
import BeforeAfterSection from "../components/BeforeAfterSection"
import AreaCoverageSection from "../components/AreaCoverageSection"
import InternalLinksSection from "../components/InternalLinksSection"

export default function Home() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      <Helmet>
      <title>
        Radja AC Purwokerto | Service, Cuci & Instalasi AC
      </title>

      <meta
        name="description"
        content="Jasa service AC Purwokerto dan Banyumas. Melayani cuci AC, isi freon, instalasi, dan perbaikan AC panggilan rumah maupun kantor."
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Berapa biaya service AC di Purwokerto?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Biaya service AC menyesuaikan jenis kerusakan dan kebutuhan unit. Estimasi umum mulai dari Rp75.000.",
              },
            },
          ],
        })}
      </script>
      </Helmet>

      <Helmet>
        <title>RADJA AC Purwokerto | Jual, Instalasi, Service & Cuci AC Terpercaya</title>
        <meta name="description" content="Dealer AC profesional di Purwokerto Banyumas. Jual AC branded, instalasi AC, service AC, maintenance, dan cuci AC dengan teknisi bersertifikat." />
        <meta property="og:title" content="RADJA AC Purwokerto - Solusi AC Premium untuk Rumah & Bisnis" />
        <meta property="og:description" content="Distributor dan jasa service AC terpercaya. Menyediakan penjualan AC, instalasi profesional, service AC panggilan, maintenance rutin, dan cuci AC." />
      </Helmet>
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 pt-20">
        <HeroSection />
        <TrustStripSection />
        <ServicesSection />
        <InternalLinksSection />
        <BrandsSection />
        <WhyChooseUs />
        <PortfolioSection />
        <BeforeAfterSection />
        <MiniReviewSection />
        <PricingPreviewSection />
        <AboutTrustSection />
        <AreaCoverageSection />
        <TestimonialsSection />
        <ClosingCTA />
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}