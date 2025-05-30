'use client'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    { title: "Web App Development", desc: "Robust and scalable web applications tailored to your needs." },
    { title: "Mobile App Development", desc: "Cross-platform mobile apps with seamless performance." },
    { title: "UI/UX Design", desc: "Modern, user-centric design for a great experience." },
    { title: "Custom Software", desc: "Unique software built for your business logic." },
    { title: "Tech Consulting", desc: "Expert advice to help you make the right tech decisions." },
  ];

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-20 bg-gradient-to-b from-blue-50 to-white">
      <section>
        <motion.h2
          className="text-4xl font-bold text-center text-blue-900 mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}