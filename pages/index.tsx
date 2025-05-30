'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { MonitorSmartphone, Smartphone, Rocket, ShieldCheck } from 'lucide-react'
import { UtensilsCrossed, ShoppingCart, Car, Blocks } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <main className="w-full max-w-7xl mx-auto my-6 p-4 sm:p-6 bg-gradient-to-br from-white via-blue-50 to-yellow-50 rounded-xl shadow-xl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl p-10 shadow-lg max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/assets/hero-graphic-formatted.png"
              alt="Service Graphic"
              width={600}
              height={500}
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
              Build Smarter, Grow Faster
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
              We craft high-performance web and mobile apps to launch your ideas and scale your business.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded shadow transition font-semibold">
              Request a Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 px-6 bg-gradient-to-b from-blue-50 to-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            icon: <MonitorSmartphone size={40} className="text-blue-700" />,
            title: 'Web Applications',
            desc: 'Tailored web apps that align with your business objectives.'
          }, {
            icon: <Smartphone size={40} className="text-indigo-600" />,
            title: 'Mobile Apps',
            desc: 'Cross-platform mobile solutions with native performance.'
          }, {
            icon: <Rocket size={40} className="text-yellow-600" />,
            title: 'Product Launch',
            desc: 'Go from idea to launch with our rapid MVP development.'
          }].map((service, i) => (
            <motion.div
              key={i}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
              <div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-14 px-6 bg-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <UtensilsCrossed size={36} className="text-pink-500 mb-2" />, label: 'Hospitality' },
            { icon: <ShoppingCart size={36} className="text-yellow-500 mb-2" />, label: 'E-commerce' },
            { icon: <Car size={36} className="text-green-600 mb-2" />, label: 'Automobile' },
            { icon: <Blocks size={36} className="text-purple-600 mb-2" />, label: 'Others' }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.06 }}
            >
              {item.icon}
              <p className="text-blue-800 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 px-6 bg-gradient-to-br from-white to-blue-50" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">What Our Clients Say</h2>
        <blockquote className="italic border-l-4 border-blue-900 pl-6 text-gray-700 max-w-3xl mx-auto">
          “Anantha Web Solutions delivered a product that transformed our workflow. They were fast, professional, and responsive.”
        </blockquote>
        <p className="text-right font-medium mt-2 text-gray-700 max-w-3xl mx-auto">— John D, CTO</p>
      </section>

      {/* Expertise Section */}
      <section className="py-14 px-6 bg-gradient-to-b from-blue-50 to-white" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[{
            icon: <MonitorSmartphone size={36} className="text-blue-700" />,
            title: 'Frontend Engineering',
            desc: 'React, Next.js, Tailwind and responsive UIs that perform.'
          }, {
            icon: <ShieldCheck size={36} className="text-green-600" />,
            title: 'Secure Backend APIs',
            desc: 'Scalable Node.js + Supabase + Auth with security in mind.'
          }].map((exp, i) => (
            <motion.div
              key={i}
              className="cursor-pointer bg-white p-6 border rounded-xl shadow-md flex items-start gap-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {exp.icon}
              <div>
                <h4 className="text-xl font-bold mb-2 text-blue-800">{exp.title}</h4>
                <p className="text-gray-600">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}