'use client'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Suresh Kumar",
      role: "CEO, TechStart Solutions",
      quote: "They helped us scale our platform in record time! The team's expertise and dedication exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80"
    },
    {
      name: "Anjali Sharma",
      role: "Product Manager, DesignHub",
      quote: "Fantastic design and great team to work with. They truly understood our vision and brought it to life beautifully.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80"
    },
    {
      name: "Rahul Patel",
      role: "Founder, E-Commerce Plus",
      quote: "True professionals in every aspect. From planning to execution, everything was handled with utmost care and precision.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80"
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-blue-50 via-purple-50/50 to-blue-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <Quote className="text-blue-600" size={40} />
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group bg-white shadow-lg hover:shadow-2xl p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Decorative gradient background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 -z-0"></div>

              {/* Quote icon */}
              <div className="absolute -top-2 -left-2 text-blue-200 opacity-50">
                <Quote size={60} />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(t.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-700 text-lg italic leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>

              {/* Author info */}
              <div className="relative z-10 border-t-2 border-slate-100 pt-4 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200 shadow-md">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">{t.name}</p>
                  <p className="text-blue-600 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
