'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <section className="relative h-[90vh] w-full overflow-hidden font-sans scroll-smooth">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/assets/hero-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
          <motion.div
            className="max-w-4xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Trusted by 100+ Businesses</span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl font-medium tracking-wide mb-4 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Transform your business with modern web applications
            </motion.p>

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Empowering Your<br />
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              We craft innovative web and mobile solutions that drive growth, enhance user experience, and transform businesses in the digital age.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <a href="#next-section" aria-label="Scroll down" className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium text-white/80">Scroll Down</span>
            <ChevronDown size={32} className="text-white/80" />
          </a>
        </motion.div>
      </section>
    </>
  )
}