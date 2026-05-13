import { SITE_DATA } from "../constants/siteData"

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["Store", "LocalBusiness", "HVACBusiness"],
  "@id": `${SITE_DATA.baseUrl}/#business`,
  name: SITE_DATA.businessName,
  description: SITE_DATA.businessDescription,
  url: SITE_DATA.baseUrl,
  image: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
  logo: `${SITE_DATA.baseUrl}${SITE_DATA.logoUrl}`,
  telephone: SITE_DATA.phoneNumber,
  areaServed: SITE_DATA.serviceAreas.map((city) => ({
    "@type": "City",
    name: city,
  })),
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "AC Split Rumah",
        category: "Air Conditioner",
      },
      availability: "https://schema.org/InStock",
      url: `${SITE_DATA.baseUrl}/katalog/ac-split-rumah`,
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "AC Inverter",
        category: "Air Conditioner",
      },
      availability: "https://schema.org/InStock",
      url: `${SITE_DATA.baseUrl}/katalog/ac-inverter`,
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "AC Low Watt",
        category: "Air Conditioner",
      },
      availability: "https://schema.org/InStock",
      url: `${SITE_DATA.baseUrl}/katalog/ac-low-watt`,
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "AC Kantor dan Komersial",
        category: "Air Conditioner",
      },
      availability: "https://schema.org/InStock",
      url: `${SITE_DATA.baseUrl}/katalog/ac-kantor-komersial`,
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: SITE_DATA.phoneNumber,
    availableLanguage: "Indonesian",
  },
  sameAs: [
    SITE_DATA.whatsappUrl,
  ],
  openingHours: SITE_DATA.operationalHours.map((hour) => {
    if (hour.label === "Senin - Jumat") return `Mo-Fr ${hour.value.replace(" - ", "-")}`
    if (hour.label === "Sabtu") return `Sa ${hour.value.replace(" - ", "-")}`
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
      "@id": `${SITE_DATA.baseUrl}/#business`,
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
    schema.provider.areaServed = SITE_DATA.serviceAreas.map((city) => ({
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
    serviceArea: nearbyAreas.map((area) => ({
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
    "@id": `${SITE_DATA.baseUrl}/#organization`,
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
