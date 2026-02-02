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

      <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 text-slate-900 overflow-x-hidden font-sans">
        {/* Hero Section */}
        <motion.section
          id="next-section"
          className="py-20 md:py-28 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6 font-medium text-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  Digital Transformation Experts
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900">
                  Empower Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Growth</span>
                </h1>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We craft modern digital products — web, mobile, eCommerce, and AI solutions to help you scale and succeed in the digital age.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#services"
                    className="btn-primary text-center"
                    aria-label="Learn more about services"
                  >
                    Explore Our Services
                  </a>
                  <a
                    href="/contact"
                    className="btn-secondary text-center"
                    aria-label="Contact us"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=533&fit=crop&q=80"
                    alt="Team working on digital transformation solutions"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="relative rounded-2xl w-full h-auto shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="py-20 md:py-28 bg-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Comprehensive digital solutions tailored to your business needs
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </motion.section>


        {/* Industries */}
        <IndustryGrid />

        {/* Testimonials */}
        <motion.section
          className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-purple-50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                <Quote className="text-blue-600" size={40} /> 
                What Our Clients Say
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100">
              <blockquote className="relative">
                <div className="absolute -top-4 -left-2 text-blue-200 opacity-50">
                  <Quote size={60} />
                </div>
                <p className="text-xl md:text-2xl italic text-slate-700 leading-relaxed relative z-10">
                  Anantha Web Solutions transformed our operations with seamless digital tools. Fast, reliable, and forward-thinking.
                </p>
                <footer className="mt-6 text-right">
                  <cite className="text-blue-600 font-semibold not-italic">— Satisfied Client</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </motion.section>

        {/* Expertise */}
        <motion.section
          className="py-20 md:py-28 bg-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Expertise</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Cutting-edge technologies and best practices for exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[{
                icon: <MonitorSmartphone size={48} className="text-blue-600" />,
                title: 'Frontend Engineering',
                desc: 'React, Next.js, Tailwind, and seamless UI experiences that delight users and drive engagement.'
              }, {
                icon: <ShieldCheck size={48} className="text-emerald-600" />,
                title: 'Secure Backend APIs',
                desc: 'Node.js, Supabase, scalable architecture and auth layers that ensure data security and performance.'
              }].map((exp, i) => (
                <motion.div
                  key={i}
                  className="group bg-gradient-to-br from-white to-slate-50 p-8 border-2 border-slate-100 rounded-2xl flex items-start gap-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </>
  )
}

