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

export default function Home() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">
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
        <BrandsSection />
        <WhyChooseUs />
        <PortfolioSection />
        <TestimonialsSection />
        <ClosingCTA />
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}