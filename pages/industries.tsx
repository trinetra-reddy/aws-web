'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Industries() {
  const industries = [
    { title: 'Software', desc: 'Custom development & technology services.' },
    { title: 'Hospitality', desc: 'Smart solutions for hotels & resorts.' },
    { title: 'E-commerce', desc: 'Online platforms & shopping systems.' }
  ]

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-14">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Industries We Support</h1>
          <p className="text-gray-700 leading-relaxed">
            We empower businesses in key sectors with custom software, automation, and digital transformation.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/assets/industries-hero-formatted.png"
            alt="Industries Graphic"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </section>

      {/* Industry Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
        {industries.map((item, i) => (
          <motion.div
            key={i}
            className="cursor-pointer bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h4 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Start?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Ready to Start', desc: 'Reach out to explore tailored solutions.' },
            { title: 'Get in Touch', desc: 'Discuss your needs with our expert team.' }
          ].map((cta, i) => (
            <motion.div
              key={i}
              className="cursor-pointer bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-lg font-semibold text-blue-800 mb-2">{cta.title}</h4>
              <p className="text-gray-600">{cta.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}