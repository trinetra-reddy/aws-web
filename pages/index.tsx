'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Head from 'next/head'
import { Quote, MonitorSmartphone, ShieldCheck } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import { servicesData } from '../data/ServicesData'

const IndustryGrid = dynamic(() => import('../components/IndustryGrid'), { ssr: false })

export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } })
  }

  return (
    <>
      <Head>
        <title>Anantha Web Solutions | Empower Your Digital Growth</title>
        <meta name="description" content="Custom web, mobile, and AI-powered platforms for businesses. Delivering secure, scalable, and performance-driven digital solutions." />
        <meta name="keywords" content="web development, mobile apps, AI integration, software consulting, anantha web solutions, anantha digital, India tech company" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Anantha Web Solutions | Empower Your Digital Growth" />
        <meta property="og:description" content="We deliver secure, scalable and performance-focused digital solutions, including web, mobile, and AI platforms." />
        <meta property="og:image" content="https://ananthadigital.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://ananthadigital.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anantha Web Solutions" />
        <meta name="twitter:description" content="AI-powered web and mobile application development services." />
        <meta name="twitter:image" content="https://ananthadigital.com/assets/og-image.jpg" />

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

      <main className="w-full bg-white text-blue-900 overflow-x-hidden font-sans">
        <div className="bg-blue-50">
          {/* Hero Section */}
          <motion.section
            className="min-h-[480px] md:min-h-[520px] py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center container mx-auto px-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Empower Your Digital Growth
              </h1>
              <p className="text-gray-700 mb-6">
                We craft modern digital products — web, mobile, eCommerce, and AI solutions to help you scale.
              </p>
              <a
                href="#services"
                className="text-lg font-semibold text-blue-700 underline hover:text-blue-900 transition"
                aria-label="Learn more about services"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <Image
                src="/assets/digital-transformation.webp"
                alt="Team working on digital transformation solutions"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl w-full h-auto"
                priority
              />
            </motion.div>
          </motion.section>

          {/* Services Section */}
          <motion.section
            id="services"
            className="py-16 container mx-auto px-4 bg-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Industries */}
          <IndustryGrid />

          {/* Testimonials */}
          <motion.section
            className="py-14 px-4 bg-white container mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Quote className="text-blue-600" /> What Our Clients Say
            </h2>
            <blockquote className="italic border-l-4 border-blue-900 pl-6 text-gray-800 max-w-3xl mx-auto">
              “Anantha Web Solutions transformed our operations with seamless digital tools. Fast, reliable, and forward-thinking.”
            </blockquote>
          </motion.section>

          {/* Expertise */}
          <motion.section
            className="py-14 px-4 bg-blue-50 container mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-10">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[{
                icon: <MonitorSmartphone size={36} className="text-blue-700" />,
                title: 'Frontend Engineering',
                desc: 'React, Next.js, Tailwind, and seamless UI experiences.'
              }, {
                icon: <ShieldCheck size={36} className="text-green-600" />,
                title: 'Secure Backend APIs',
                desc: 'Node.js, Supabase, scalable architecture and auth layers.'
              }].map((exp, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 border rounded-xl flex items-start gap-4 hover:shadow transition"
                  whileHover={{ scale: 1.02 }}
                >
                  {exp.icon}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-gray-700">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </>
  )
}
