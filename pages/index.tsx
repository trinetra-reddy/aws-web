'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { MonitorSmartphone, Smartphone } from 'lucide-react'
import { UtensilsCrossed, ShoppingCart, Car, Blocks } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <main className="w-full max-w-7xl mx-auto my-10 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-14">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/assets/hero-graphic-formatted.png"
            alt="Hero Graphic"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
            Innovative Solutions for Your Business
          </h2>
          <p className="mb-6 text-gray-700">
            We develop web and mobile applications tailored to your business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.07 }}
            className="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-blue-900 px-6 py-3 font-semibold rounded shadow-md transition"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{
            icon: <MonitorSmartphone size={36} className="text-blue-600" />,
            title: 'Web Applications',
            desc: 'Custom web app development tailored to your business goals.'
          }, {
            icon: <Smartphone size={36} className="text-indigo-500" />,
            title: 'Mobile Applications',
            desc: 'Cross-platform mobile apps with sleek performance and UX.'
          }].map((s, i) => (
            <motion.div
              key={i}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start gap-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {s.icon}
              <div>
                <h4 className="text-xl font-semibold mb-2 text-blue-800">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 px-6 bg-white" data-aos="zoom-in-up">
        <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">Industries We Serve</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <UtensilsCrossed size={36} className="text-rose-500 mb-2" />, label: 'Hospitality' },
            { icon: <ShoppingCart size={36} className="text-yellow-500 mb-2" />, label: 'E-commerce' },
            { icon: <Car size={36} className="text-green-600 mb-2" />, label: 'Automobile' },
            { icon: <Blocks size={36} className="text-purple-600 mb-2" />, label: 'Other Domains' }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="cursor-pointer bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md border border-gray-200 transition"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <span className="block font-medium text-blue-800">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">Success Stories</h3>
        <blockquote className="italic border-l-4 border-blue-900 pl-4 mb-2 text-gray-700">
          “Anantha Web Solutions delivered a web application that exceeded our expectations. Their expertise and dedication are truly commendable.”
        </blockquote>
        <p className="text-right font-medium mt-2 text-gray-700">— John D, Client</p>
      </section>

      {/* Our Expertise */}
      <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">Our Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{
            icon: <MonitorSmartphone size={36} className="text-blue-700" />,
            title: 'Web Applications',
            desc: 'Custom web application development for diverse business requirements'
          }, {
            icon: <Smartphone size={36} className="text-orange-500" />,
            title: 'Mobile Applications',
            desc: 'Creating user-friendly mobile-apps for both iOS and Android platforms'
          }].map((expertise, i) => (
            <motion.div
              key={i}
              className="cursor-pointer bg-white p-6 border rounded-xl shadow-sm flex items-start gap-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {expertise.icon}
              <div>
                <h4 className="text-xl font-bold mb-2 text-blue-800">{expertise.title}</h4>
                <p className="text-gray-600">{expertise.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}