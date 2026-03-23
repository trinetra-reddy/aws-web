import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonical?: string
  noindex?: boolean
  structuredData?: object
}

export default function SEO({
  title = 'Anantha Web Solutions | Custom Web & Mobile Development',
  description = 'Transform your business with custom web development, mobile apps, e-commerce solutions, and cloud services. Expert team delivering innovative digital solutions globally.',
  keywords = 'web development, mobile app development, e-commerce solutions, UI/UX design, cloud services, DevOps, Adobe Experience Manager, AEM, digital transformation',
  ogImage = 'https://ananthawebsolutions.com/assets/logos/ananthaweb.png',
  ogType = 'website',
  canonical,
  noindex = false,
  structuredData
}: SEOProps) {
  const siteUrl = 'https://ananthawebsolutions.com'
  const fullTitle = title.includes('Anantha') ? title : `${title} | Anantha Web Solutions`
  const canonicalUrl = canonical || siteUrl

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Anantha Web Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Anantha Web Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Andhra Pradesh" />
      <meta name="geo.position" content="14.6600224;77.5504773" />
      <meta name="ICBM" content="14.6600224, 77.5504773" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

// Helper function to generate Organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Anantha Web Solutions",
  "alternateName": "Anantha Web Solutions Pvt Ltd",
  "url": "https://ananthawebsolutions.com",
  "logo": "https://ananthawebsolutions.com/assets/logos/ananthaweb.png",
  "description": "Leading web and mobile development company providing custom digital solutions globally",
  "email": "account@ananthawebsolutions.com",
  "telephone": "+91-7013594249",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "HPR LUXURY HOUSES, Kakkalapalle Rural",
      "addressLocality": "Andhra Pradesh",
      "addressCountry": "IN",
      "name": "India Office (Headquarters)"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "380 Southdale Road East",
      "addressLocality": "London",
      "addressRegion": "Ontario",
      "addressCountry": "CA",
      "name": "Canada Office"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "6115 Abbotts Bridge Rd Apt 1716",
      "addressLocality": "Johns Creek",
      "addressRegion": "GA",
      "postalCode": "30097-5760",
      "addressCountry": "US",
      "name": "USA Office"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/anantha-web-solutions",
    "https://twitter.com/ananthaweb",
    "https://www.facebook.com/ananthawebsolutions"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7013594249",
    "contactType": "customer service",
    "email": "account@ananthawebsolutions.com",
    "availableLanguage": ["English", "Hindi"]
  }
}

// Helper function to generate LocalBusiness structured data
export const localBusinessSchema = (office: 'india' | 'canada' | 'usa') => {
  const offices = {
    india: {
      name: "Anantha Web Solutions - India (Headquarters)",
      address: {
        streetAddress: "HPR LUXURY HOUSES, Kakkalapalle Rural",
        addressLocality: "Andhra Pradesh",
        addressCountry: "IN"
      },
      telephone: "+91-7013594249",
      geo: { latitude: "14.6600224", longitude: "77.5504773" }
    },
    canada: {
      name: "Anantha Web Solutions - Canada",
      address: {
        streetAddress: "380 Southdale Road East",
        addressLocality: "London",
        addressRegion: "Ontario",
        addressCountry: "CA"
      },
      telephone: "+1-XXX-XXX-XXXX",
      geo: { latitude: "42.9849", longitude: "-81.2453" }
    },
    usa: {
      name: "Anantha Web Solutions - USA",
      address: {
        streetAddress: "6115 Abbotts Bridge Rd Apt 1716",
        addressLocality: "Johns Creek",
        addressRegion: "GA",
        postalCode: "30097-5760",
        addressCountry: "US"
      },
      telephone: "+1-470-225-0022",
      geo: { latitude: "34.0289", longitude: "-84.1986" }
    }
  }

  const officeData = offices[office]

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": officeData.name,
    "image": "https://ananthawebsolutions.com/assets/logos/ananthaweb.png",
    "url": "https://ananthawebsolutions.com",
    "telephone": officeData.telephone,
    "address": {
      "@type": "PostalAddress",
      ...officeData.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      ...officeData.geo
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  }
}

