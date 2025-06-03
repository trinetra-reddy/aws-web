'use client'
import { motion } from 'framer-motion'
import {
  Rocket,
  Factory,
  Quote,
  MonitorSmartphone,
  Smartphone,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import {
  UtensilsCrossed,
  ShoppingCart,
  Car,
  Blocks
} from 'lucide-react'
import { useRef, useState } from 'react'
export default function Home() {
  const industries = [
    {
      label: 'Hospitality',
      icon: <UtensilsCrossed size={36} className="text-pink-500" />,
      desc: 'Streamlined booking, dining, and guest services with powerful digital tools.'
    },
    {
      label: 'E-commerce',
      icon: <ShoppingCart size={36} className="text-yellow-500" />,
      desc: 'Sell smarter with optimized storefronts, carts, and backend logistics.'
    },
    {
      label: 'Automobile',
      icon: <Car size={36} className="text-green-600" />,
      desc: 'Automate inventory, bookings, and servicing for the automotive industry.'
    },
    {
      label: 'Real Estate',
      icon: <Blocks size={36} className="text-purple-600" />,
      desc: 'Showcase listings and manage leads with modern property tech platforms.'
    },
    {
      label: 'Healthcare',
      icon: <ShieldCheck size={36} className="text-red-600" />,
      desc: 'Digital solutions for appointment scheduling, records, and patient engagement.'
    },
    {
      label: 'Logistics',
      icon: <Car size={36} className="text-indigo-500" />,
      desc: 'Track fleets, optimize deliveries, and manage operations efficiently.'
    },
    {
      label: 'Education',
      icon: <MonitorSmartphone size={36} className="text-blue-600" />,
      desc: 'Empowering schools and learners with digital classrooms and portals.'
    }
  ];
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <main className="w-full bg-white text-blue-900">
      <div className='max-w-[1440px] mx-auto px-6'>
        {/* Services Section */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 px-6 bg-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
            <Rocket className="text-yellow-500" /> Our Services
          </h2>
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
              icon: <Rocket size={40} className="text-yellow-500" />,
              title: 'Product Launch',
              desc: 'Go from idea to launch with our rapid MVP development.'
            }].map((service, i) => (
              <motion.div
                key={i}
                className="cursor-pointer bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start gap-4 hover:shadow-md transition"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
                <div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-blue-800/80">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industries Section */}
        {/* <motion.section
          id="industries"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10 px-6 bg-blue-50"
        >
          <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
            <Factory className="text-blue-700" /> Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <UtensilsCrossed size={36} className="text-pink-500 mb-2" />, label: 'Hospitality' },
              { icon: <ShoppingCart size={36} className="text-yellow-500 mb-2" />, label: 'E-commerce' },
              { icon: <Car size={36} className="text-green-600 mb-2" />, label: 'Automobile' },
              { icon: <Blocks size={36} className="text-purple-600 mb-2" />, label: 'Others' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg hover:shadow-md transition"
                whileHover={{ scale: 1.06 }}
              >
                {item.icon}
                <p className="text-blue-900 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section> */}
        <section className="py-14 px-6 bg-blue-50 relative overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Industries We Serve</h2>

          <div className="relative max-w-[1440px] mx-auto px-10 overflow-x-hidden">
            {/* Navigation Buttons */}
            <button
              ref={prevRef as any}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-blue-100 w-10 h-10 flex items-center justify-center"
            >
              <ChevronLeft className="text-blue-700" />
            </button>
            <button
              ref={nextRef as any}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-blue-100 w-10 h-10 flex items-center justify-center"
            >
              <ChevronRight className="text-blue-700" />
            </button>

            <Swiper
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              speed={600}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current
              }}
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Navigation, Autoplay]}
              className="pl-12 pr-12 !overflow-visible"
            >
              {industries.map((item, idx) => (
                <SwiperSlide key={idx} className="!h-auto">
                  <motion.div
                    animate={{
                      scale: activeIndex === idx ? 1 : 0.97,
                      boxShadow: activeIndex === idx
                        ? '0 8px 30px rgba(59,130,246,0.15)'
                        : '0 1px 6px rgba(0,0,0,0.05)',
                      zIndex: activeIndex === idx ? 10 : 1
                    }}
                    transition={{ duration: 0.4 }}
                    className={`bg-white rounded-2xl text-center p-8 md:p-10 transition-all duration-300 cursor-pointer
        border ${activeIndex === idx ? 'border-blue-500 ring-2 ring-blue-200' : 'border-blue-100'}`}
                  >
                    <div className="mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="text-xl font-bold text-blue-900 tracking-tight mb-2">{item.label}</h3>
                    <p className="text-sm text-blue-800/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-8 px-6 bg-white"
        >
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Quote className="text-blue-600" /> What Our Clients Say
          </h2>
          <blockquote className="italic border-l-4 border-blue-900 pl-6 text-blue-800 max-w-3xl mx-auto">
            “Anantha Web Solutions delivered a product that transformed our workflow. They were fast, professional, and responsive.”
          </blockquote>
          <p className="text-right font-medium mt-2 text-blue-700 max-w-3xl mx-auto">— John D, CTO</p>
        </motion.section>

        {/* Expertise Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10 px-6 bg-blue-50"
        >
          <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
            <MonitorSmartphone className="text-blue-700" /> Our Expertise
          </h2>
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
                className="cursor-pointer bg-white p-6 border rounded-xl flex items-start gap-4 hover:shadow-md transition"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {exp.icon}
                <div>
                  <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                  <p className="text-blue-800/80">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
