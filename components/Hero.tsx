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
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/assets/hero-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content with Glassmorphism */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 md:px-20">
          <motion.div
            className="p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtitle */}
            <motion.p
              className="text-base md:text-xl font-light tracking-wide mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Transform your business with modern web applications.
            </motion.p>

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Empowering<br />Digital Solutions
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link
                href="#contact"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300 text-sm sm:text-base"
              >
                GET STARTED TODAY
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Arrow */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#next-section" aria-label="Scroll down">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </section>
    </>
  )
}