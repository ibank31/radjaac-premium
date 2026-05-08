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
import InternalLinksSection from "../components/InternalLinksSection"
import LocationSection from "../components/LocationSection"

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
        <TestimonialsSection />
        <ClosingCTA />
      </div>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}