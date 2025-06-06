'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import IndustryGrid from '../components/IndustryGrid'
import { industriesData } from '../data/Industriesdata'

export default function Industries() {
  return (
    <main className="w-full bg-white text-blue-900 px-6 py-14 font-sans">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold text-[#1d3a70] mb-4 leading-tight">
              Industries We Support
            </h1>
            <p className="text-[#5c6c8a] text-lg leading-relaxed">
              We empower businesses across diverse industries by delivering tailored software solutions that drive efficiency, growth, and innovation. From streamlining operations and enhancing customer engagement to enabling digital transformation at scale, our technology expertise helps organizations stay ahead in a rapidly evolving digital world. Whether you're in healthcare, logistics, education, e-commerce, or hospitality, we align our tools and strategies with your unique needs — turning challenges into opportunities through intelligent automation and scalable platforms.
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/assets/IndustriesSupport.svg"
              alt="Industries Graphic"
              width={600}
              height={450}
              className="rounded-xl w-full h-auto"
            />
          </motion.div>
        </section>

        {/* Industry Cards */}
        <section className="mx-auto mb-20">
          <IndustryGrid items={industriesData} />
        </section>

        {/* CTA Section */}
        <section className="max-w-[1440px] mx-auto px-4 py-14">
          <motion.div
            className="mb-10 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#1d3a70] mb-4 text-center">
              Ready to Start?
            </h2>
            <p className="text-[#5c6c8a] text-lg text-center">
              Connect with us today and let’s explore how we can build your next big idea.
            </p>
          </motion.div>

          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
              {[
                { title: 'Ready to Start', desc: 'Reach out to explore tailored solutions.' },
                { title: 'Get in Touch', desc: 'Discuss your needs with our expert team.' }
              ].map((cta, i) => (
                <motion.div
                  key={i}
                  className="cursor-pointer bg-white border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition w-full hover:scale-[1.03]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  <h4 className="text-lg font-semibold text-[#1d3a70] mb-2">{cta.title}</h4>
                  <p className="text-[#5c6c8a]">{cta.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
