import { Helmet } from "react-helmet-async"
import SeoHead from "../components/SeoHead"
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
import InternalLinksSection from "../components/InternalLinksSection"
import LocationSection from "../components/LocationSection"
import HomeFAQSection from "../components/HomeFAQSection"

export default function Home() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      <SeoHead
        title="Service AC Purwokerto | Cuci, Instalasi & Bongkar Pasang AC | Radja AC"
        description="Jasa service AC Purwokerto dan Banyumas. Cuci AC, isi freon, instalasi, bongkar pasang AC rumah dan kantor. Teknisi berpengalaman dan bergaransi."
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
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
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
        <section className="px-6 py-16 bg-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-300 font-medium mb-3">
              Area Layanan
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Siap Melayani Purwokerto dan Sekitarnya
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Radja AC melayani service, cuci, dan instalasi AC untuk rumah, kantor, toko, dan tempat usaha di berbagai area Banyumas dan sekitarnya termasuk Sokaraja, Ajibarang, Purbalingga, dan Cilacap.
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