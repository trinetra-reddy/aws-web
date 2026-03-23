'use client'

import Head from 'next/head'

// Import UNIQUE modern components with GSAP animations
import ThemeSwitcher from '../components/ThemeSwitcher'
import ScrollRevealServices from '../components/ScrollRevealServices'
import HorizontalScrollProjects from '../components/HorizontalScrollProjects'
import AnimatedStats from '../components/AnimatedStats'
import TestimonialsModern from '../components/TestimonialsModern'
import CTAModern from '../components/CTAModern'
import GEO, { generateFAQSchema } from '../components/GEO'
import { organizationSchema } from '../components/SEO'

export default function Home() {
  // FAQ data for AI engines
  const faqs = [
    {
      question: "What services does Anantha Web Solutions offer?",
      answer: "Anantha Web Solutions offers web development, mobile app development, e-commerce solutions, UI/UX design, cloud & DevOps services, Adobe Experience Manager (AEM) implementation, and 24/7 support & maintenance services."
    },
    {
      question: "Where is Anantha Web Solutions located?",
      answer: "Anantha Web Solutions has offices in three countries: India (headquarters in Andhra Pradesh), Canada (London, Ontario), and USA (Cumming, Georgia)."
    },
    {
      question: "What technologies does Anantha Web Solutions use?",
      answer: "We use modern technologies including React, Next.js, Node.js, TypeScript, React Native, Flutter, AWS, Azure, Google Cloud, Docker, Kubernetes, and Adobe Experience Manager."
    },
    {
      question: "How can I contact Anantha Web Solutions?",
      answer: "You can contact us at +91-7013594249, email account@ananthawebsolutions.com, or visit our contact page at https://ananthawebsolutions.com/contact"
    }
  ]

  return (
    <>
      <Head>
        <title>Anantha Web Solutions | Custom Web & Mobile Development Services</title>
        <meta name="description" content="Leading web and mobile development company. Custom websites, mobile apps, e-commerce, UI/UX design, cloud services. 500+ projects, 98% satisfaction. Global offices in India, Canada, USA." />
        <meta name="keywords" content="web development, mobile app development, e-commerce solutions, UI/UX design, cloud services, DevOps, Adobe Experience Manager, AEM, React, Next.js, custom software development" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Anantha Web Solutions | Custom Web & Mobile Development" />
        <meta property="og:description" content="Transform your business with custom web and mobile solutions. Expert team delivering innovative digital solutions globally." />
        <meta property="og:image" content="https://ananthawebsolutions.com/assets/logos/ananthaweb.png" />
        <meta property="og:url" content="https://ananthawebsolutions.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data for AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
        />
        <meta name="twitter:title" content="Anantha Web Solutions | Custom Web & Mobile Development" />
        <meta name="twitter:description" content="Transform your business with custom web and mobile solutions." />
        <meta name="twitter:image" content="https://ananthawebsolutions.com/assets/logos/ananthaweb.png" />
      </Head>

      {/* GEO Component for AI Optimization */}
      <GEO
        title="Anantha Web Solutions - Web & Mobile Development Company"
        description="Leading web and mobile development company providing custom digital solutions globally. Services include web development, mobile apps, e-commerce, UI/UX design, cloud services, and Adobe Experience Manager."
        keywords="web development, mobile app development, e-commerce, UI/UX design, cloud services, DevOps, AEM"
        expertise={[
          "Web Development",
          "Mobile App Development",
          "E-commerce Solutions",
          "UI/UX Design",
          "Cloud & DevOps",
          "Adobe Experience Manager"
        ]}
        sources={[
          "https://ananthawebsolutions.com",
          "https://ananthawebsolutions.com/services",
          "https://ananthawebsolutions.com/about"
        ]}
        citations={[
          "Anantha Web Solutions. (2024). Company Overview. Retrieved from https://ananthawebsolutions.com"
        ]}
      />

      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Animated Stats with Lottie */}
      <AnimatedStats />

      {/* Scroll-Reveal Services (Diagonal Layout) */}
      <ScrollRevealServices />

      {/* Horizontal Scroll Projects (Apple-style) */}
      <HorizontalScrollProjects />

      {/* Modern Testimonials Carousel */}
      <TestimonialsModern />

      {/* CTA Section with Lottie */}
      <CTAModern />
    </>
  )
}

