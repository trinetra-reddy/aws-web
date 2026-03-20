'use client'

import Head from 'next/head'

// Import UNIQUE modern components with GSAP animations
import ThemeSwitcher from '../components/ThemeSwitcher'
import ScrollRevealServices from '../components/ScrollRevealServices'
import HorizontalScrollProjects from '../components/HorizontalScrollProjects'
import AnimatedStats from '../components/AnimatedStats'
import TestimonialsModern from '../components/TestimonialsModern'
import CTAModern from '../components/CTAModern'
import FooterModern from '../components/FooterModern'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anantha Web Solutions | AI-Powered Business Transformation</title>
        <meta name="description" content="Transform your business with AI-powered solutions. Expert AI consulting, custom software development, and intelligent automation. 500+ projects delivered, 98% client satisfaction." />
        <meta name="keywords" content="AI consulting, AI automation, machine learning, custom software development, web development, mobile apps, AI solutions, business transformation, digital transformation" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Anantha Web Solutions | AI-Powered Business Transformation" />
        <meta property="og:description" content="We build intelligent systems that drive growth, reduce costs, and create competitive advantages. From AI automation to custom software." />
        <meta property="og:image" content="https://ananthawebsolutions.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://ananthawebsolutions.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anantha Web Solutions | AI-Powered Business Transformation" />
        <meta name="twitter:description" content="Transform your business with AI-powered solutions and intelligent automation." />
        <meta name="twitter:image" content="https://ananthawebsolutions.com/assets/og-image.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Anantha Web Solutions Pvt Ltd",
              "url": "https://ananthadigital.com",
              "logo": "https://ananthadigital.com/assets/logo.webp",
              "sameAs": [
                "https://www.linkedin.com/company/ananthaweb",
                "https://twitter.com/ananthaweb"
              ],
              "description": "We build custom web, mobile, and AI-powered platforms for startups and enterprises."
            })
          }}
        />
      </Head>

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

      {/* Modern Footer */}
      <FooterModern />
    </>
  )
}

