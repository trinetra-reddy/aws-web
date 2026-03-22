'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  service: {
    title: string
    image: string
    desc: string
    link: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Link href={service.link}>
      <motion.div
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-300 transform hover:-translate-y-2 cursor-pointer"
        data-aos="fade-up"
        data-aos-delay={index * 100}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
      <div className="relative overflow-hidden h-56">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={250}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-base leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
          {service.desc}
        </p>

        <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
            Learn More
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
      </motion.div>
    </Link>
  )
}
