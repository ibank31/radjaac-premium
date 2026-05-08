export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness"],
  name: "Radja AC",
  description: "Layanan service, cuci, dan instalasi AC profesional di Purwokerto dan Banyumas",
  url: "https://radjaac.com",
  telephone: "+62882008246099",
  priceRange: "$$",
  areaServed: [
    {
      "@type": "City",
      name: "Purwokerto",
    },
    {
      "@type": "City",
      name: "Banyumas",
    },
    {
      "@type": "City",
      name: "Sokaraja",
    },
    {
      "@type": "City",
      name: "Ajibarang",
    },
    {
      "@type": "City",
      name: "Purbalingga",
    },
    {
      "@type": "City",
      name: "Cilacap",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+62882008246099",
  },
  sameAs: [
    "https://wa.me/62882008246099",
  ],
}

export function createServiceSchema(serviceName, serviceDescription) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Radja AC",
      url: "https://radjaac.com",
      telephone: "+62882008246099",
      areaServed: ["Purwokerto", "Banyumas"],
    },
  }
}

export function createFAQSchema(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
