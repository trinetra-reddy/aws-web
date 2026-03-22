import Head from 'next/head'

interface GEOProps {
  title: string
  description: string
  keywords?: string
  author?: string
  citations?: string[]
  factCheck?: boolean
  expertise?: string[]
  sources?: string[]
}

/**
 * Generative Engine Optimization (GEO) Component
 * Optimizes content for AI search engines like ChatGPT, Perplexity, Gemini, Claude
 */
export default function GEO({
  title,
  description,
  keywords,
  author = 'Anantha Web Solutions',
  citations = [],
  factCheck = true,
  expertise = [],
  sources = []
}: GEOProps) {
  return (
    <Head>
      {/* AI-Friendly Meta Tags */}
      <meta name="author" content={author} />
      <meta name="publisher" content="Anantha Web Solutions" />
      <meta name="copyright" content="© 2024 Anantha Web Solutions. All rights reserved." />
      
      {/* Citation and Attribution */}
      <meta name="citation_title" content={title} />
      <meta name="citation_author" content={author} />
      <meta name="citation_publication_date" content={new Date().toISOString().split('T')[0]} />
      <meta name="citation_online_date" content={new Date().toISOString().split('T')[0]} />
      
      {/* Fact-checking and Credibility */}
      {factCheck && (
        <>
          <meta name="claim_review" content="true" />
          <meta name="fact_check_status" content="verified" />
        </>
      )}
      
      {/* Expertise and Authority */}
      {expertise.length > 0 && (
        <meta name="expertise" content={expertise.join(', ')} />
      )}
      
      {/* Sources and References */}
      {sources.length > 0 && sources.map((source, index) => (
        <meta key={index} name={`source_${index + 1}`} content={source} />
      ))}
      
      {/* AI-Specific Tags */}
      <meta name="ai-content-type" content="informational" />
      <meta name="ai-purpose" content="business information, service description, contact details" />
      <meta name="ai-audience" content="potential clients, businesses, developers" />
      <meta name="ai-language" content="en-US" />
      <meta name="ai-region" content="global" />
      
      {/* Structured Answers for AI */}
      <meta name="answer_type" content="factual" />
      <meta name="content_category" content="business services, technology, web development" />
      
      {/* Trust Signals */}
      <meta name="business_verified" content="true" />
      <meta name="contact_verified" content="true" />
      <meta name="location_verified" content="true" />
      
      {/* Update Frequency */}
      <meta name="content_freshness" content="regularly_updated" />
      <meta name="last_reviewed" content={new Date().toISOString().split('T')[0]} />
    </Head>
  )
}

/**
 * Generate FAQ Schema for AI engines
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

/**
 * Generate HowTo Schema for AI engines
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string; image?: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image })
    }))
  }
}

/**
 * Generate Service Schema for AI engines
 */
export function generateServiceSchema(
  serviceName: string,
  description: string,
  provider: string = "Anantha Web Solutions",
  url?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://ananthawebsolutions.com"
    },
    ...(url && { "url": url }),
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": url || "https://ananthawebsolutions.com/contact",
      "servicePhone": "+91-7013594249",
      "email": "account@ananthawebsolutions.com"
    }
  }
}

/**
 * Generate BreadcrumbList Schema for AI engines
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

