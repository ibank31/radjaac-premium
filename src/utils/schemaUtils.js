import { SITE_DATA } from "../constants/siteData"

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness"],
  name: SITE_DATA.businessName,
  description: SITE_DATA.businessDescription,
  url: SITE_DATA.baseUrl,
  telephone: SITE_DATA.phoneNumber,
  priceRange: "$$",
  areaServed: SITE_DATA.serviceAreas.map(city => ({
    "@type": "City",
    name: city,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: SITE_DATA.phoneNumber,
  },
  sameAs: [
    SITE_DATA.whatsappUrl,
  ],
  openingHours: SITE_DATA.operationalHours.map(hour => {
    if (hour.label === "Senin - Jumat") return "Mo-Fr " + hour.value.replace(" - ", "-").replace(":", "")
    if (hour.label === "Sabtu") return "Sa " + hour.value.replace(" - ", "-").replace(":", "")
    return null
  }).filter(Boolean),
}

export function createServiceSchema(serviceName, serviceDescription, areaServed = null) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_DATA.businessName,
      url: SITE_DATA.baseUrl,
      telephone: SITE_DATA.phoneNumber,
    },
  }

  if (areaServed) {
    schema.areaServed = {
      "@type": "City",
      name: areaServed,
    }
  } else {
    schema.provider.areaServed = SITE_DATA.serviceAreas.map(city => ({
      "@type": "City",
      name: city,
    }))
  }

  return schema
}

export function createLocationSchema(locationName, locationDescription, locationUrl, nearbyAreas = []) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_DATA.businessName} ${locationName}`,
    description: locationDescription,
    url: locationUrl,
    telephone: SITE_DATA.phoneNumber,
    areaServed: {
      "@type": "City",
      name: locationName,
    },
    serviceArea: nearbyAreas.map(area => ({
      "@type": "City",
      name: area,
    })),
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

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_DATA.businessName,
    url: SITE_DATA.baseUrl,
    logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_DATA.phoneNumber,
      contactType: "Customer Service",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      SITE_DATA.whatsappUrl,
    ],
  }
}
