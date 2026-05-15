import { Helmet } from "react-helmet-async"
import SeoHead from "../components/SeoHead"

import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"

import SalesLandingSection from "../components/home/SalesLandingSection"
import CategorySection from "../components/home/CategorySection"
import TrustSection from "../components/home/TrustSection"
import BrandsSection from "../components/home/BrandsSection"
import WhyChooseSection from "../components/home/WhyChooseSection"

import ClosingCTA from "../components/ClosingCTA"
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import Footer from "../components/Footer"
import { SITE_DATA } from "../constants/siteData"

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Brand AC apa saja yang tersedia di RADJA AC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RADJA AC menyediakan AC original berbagai brand seperti Daikin, Gree, Midea, Hisense, Sansui, Sharp, Panasonic, LG, Samsung, TCL, Toshiba, Mitsubishi, Aqua, Polytron, Bestlife, Akari, Ariston, Modena, Flife, dan lainnya.",
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
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Store", "LocalBusiness"],
    name: SITE_DATA.businessName,
    url: SITE_DATA.baseUrl,
    logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    image: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    description: SITE_DATA.businessDescription,
    telephone: SITE_DATA.phoneNumber,
    priceRange: "Rp3 jutaan-Rp6 jutaan+",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Purwokerto",
      addressRegion: "Jawa Tengah",
      addressCountry: "ID",
    },
    areaServed: SITE_DATA.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
  }

  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      <SeoHead
        title="Toko AC Purwokerto — Dealer AC Daikin, Midea, Hisense | RADJA AC"
        description="RADJA AC adalah toko AC Purwokerto yang menjual AC Daikin, Midea, Hisense, Gree, Sharp, Panasonic dan brand resmi lainnya. Konsultasi gratis, stok ready, garansi resmi, dan bisa bantu instalasi."
        canonicalPath="/"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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

        <TrustSection />

        <SalesLandingSection />

        <CategorySection />

        <BrandsSection />

        <WhyChooseSection />

        <ClosingCTA />
      </div>

      <FloatingWhatsapp />
      <Footer />
    </div>
  );
}