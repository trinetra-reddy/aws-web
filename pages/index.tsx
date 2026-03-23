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
      answer: "Anantha Web Solutions offers web development, mobile app development, e-commerce solutions, UI/UX design, cloud & DevOps services, Adobe Experience Manager (AEM), digital marketing, SEO services, GEO optimization, social media marketing, content marketing, marketing management, and 24/7 support & maintenance services."
    },
    {
      question: "Do you provide digital marketing and SEO services?",
      answer: "Yes, we provide comprehensive digital marketing services including SEO (Search Engine Optimization), GEO (Generative Engine Optimization), social media marketing, content marketing, PPC advertising, email marketing, and marketing management."
    },
    {
      question: "Where is Anantha Web Solutions located?",
      answer: "Anantha Web Solutions has offices in three countries: India (headquarters in Andhra Pradesh), Canada (London, Ontario), and USA (Johns Creek, Georgia). We serve clients globally across all time zones."
    },
    {
      question: "What technologies does Anantha Web Solutions use?",
      answer: "We use modern technologies including React, Next.js, Node.js, TypeScript, React Native, Flutter, AWS, Azure, Google Cloud, Docker, Kubernetes, Adobe Experience Manager, Google Ads, Facebook Ads, SEMrush, Ahrefs, and more."
    },
    {
      question: "How can I contact Anantha Web Solutions?",
      answer: "You can contact us at +91-7013594249, email account@ananthadigital.com, or visit our contact page at https://ananthadigital.com/contact"
    }
  ]

  return (
    <>
      <Head>
        <title>Anantha Web Solutions | Anantha Digital | Best Website Developers in India, USA, Canada</title>
        <meta name="description" content="Anantha Web Solutions (Anantha Digital) - Best website developers in India, Andhra Pradesh, Telangana, Anantapur, USA, Canada. Custom websites, mobile apps, e-commerce. 500+ projects, 98% satisfaction. Expert web development company with global offices." />
        <meta name="keywords" content="Anantha Web Solutions, Anantha Digital, best website developers, best website developers in India, website developers in Andhra Pradesh, website developers in Telangana, website developers in Anantapur, website developers in USA, website developers in Canada, web development company India, mobile app development, e-commerce solutions, UI/UX design, cloud services, DevOps, Adobe Experience Manager, AEM, React, Next.js, custom software development, professional web developers, responsive website design" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Anantha Web Solutions | Anantha Digital | Best Website Developers" />
        <meta property="og:description" content="Best website developers in India, Andhra Pradesh, Telangana, Anantapur, USA, Canada. Transform your business with expert web development and mobile solutions." />
        <meta property="og:image" content="https://ananthadigital.com/assets/logos/ananthaweb.png" />
        <meta property="og:url" content="https://ananthadigital.com/" />
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
        <meta name="twitter:image" content="https://ananthadigital.com/assets/logos/ananthaweb.png" />
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
          "https://ananthadigital.com",
          "https://ananthadigital.com/services",
          "https://ananthadigital.com/about"
        ]}
        citations={[
          "Anantha Web Solutions. (2024). Company Overview. Retrieved from https://ananthadigital.com"
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

