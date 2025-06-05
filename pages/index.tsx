'use client'
import { motion } from 'framer-motion'
import {
  Quote,
  MonitorSmartphone,
  ShieldCheck,
} from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import ServiceCard from '../components/ServiceCard'
import { servicesData } from '../data/ServicesData'
import IndustryGrid from '../components/IndustryGrid'
export default function Home() {
  const industries = [
    {
      label: 'Hospitality',
      // icon: <UtensilsCrossed size={36} className="text-pink-500" />,
      icon: <Image src="/assets/Hospital-room.svg" alt="Hospitality" width={600} height={400} className="w-full h-auto rounded-xl" />,
      desc: 'Streamlined booking, dining, and guest services with powerful digital tools.'
    },
    {
      label: 'E-commerce',
      // icon: <ShoppingCart size={36} className="text-yellow-500" />,
      icon: <Image src="/assets/Ecommerce.svg" alt="Ecommerce" width={600} height={400} className="w-full h-auto rounded-xl" />,
      desc: 'Sell smarter with optimized storefronts, carts, and backend logistics.'
    },

    {
      label: 'Automobile',
      // icon: <Car size={36} className="text-green-600" />,
      icon: <Image src="/assets/automobile.svg" alt="Automobile" width={600} height={400} className="w-full h-auto rounded-xl" />,
      desc: 'Automate inventory, bookings, and servicing for the automotive industry.'
    },
    {
      label: 'Real Estate',
      // icon: <Blocks size={36} className="text-purple-600" />, c:\Users\alamu\Downloads\Realestate.svg
      icon: <Image src="/assets/Realestate.svg" alt="Real Estate" width={600} height={400} className="w-full h-auto rounded-xl" />,
      desc: 'Showcase listings and manage leads with modern property tech platforms.'
    },
    {
      label: 'Healthcare',
      // icon: <ShieldCheck size={36} className="text-red-600" />,
      icon: <Image src="/assets/Health-care.svg" alt="Health care" width={600} height={400} className="w-full h-auto rounded-xl" />,
      desc: 'Digital solutions for appointment scheduling, records, and patient engagement.'
    },
    {
      label: 'Logistics',
      // icon: <Car size={36} className="text-indigo-500" />, 
      icon: <Image src="/assets/Logistics.svg" alt="Logistics" width={600} height={400} className="w-full h-auto rounded-xl" />,
      desc: 'Track fleets, optimize deliveries, and manage operations efficiently.'
    },
    {
      label: 'Education',
      // icon: <ShieldCheck size={36} className="text-red-600" />,
      icon: <Image src="/assets/Education.svg" alt="Education" width={600} height={400} className="w-full h-auto rounded-xl" />,
      desc: 'Empowering schools and learners with digital classrooms and portals.'
    }
  ];
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 }
    })
  };

  return (
    <main className="w-full bg-white text-blue-900 overflow-x-hidden">
      <div className='max-w-[1440px] mx-auto px-6'>
        {/* Sub Hero section */}
        <motion.section
          className="py-14 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Empowering Your Digital Transformation Journey
            </h1>
            <p className="text-black leading-relaxed mb-6">
              At Anantha Web Solutions, we specialize in crafting innovative digital solutions tailored to your business needs. From web and mobile applications to eCommerce and AI-powered tools, we are here to elevate your brand in the digital landscape.
            </p>
            <a
              href="#"
              className="text-lg font-semibold text-blue-700 underline hover:text-blue-900 transition"
            >
              Learn More
            </a>
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/assets/digital-transformation.webp"
              alt="Digital transformation team"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </motion.section>
        {/* Services Section */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-14 px-6 bg-white"
        >

          <h1 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Industries Section */}
      
        <IndustryGrid></IndustryGrid>
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
          <blockquote className="italic border-l-4 border-blue-900 pl-6 text-black max-w-3xl mx-auto">
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
                  <p className="text-black">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}