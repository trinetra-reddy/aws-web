'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/ServicesData';

export default function Services() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 }
    })
  };

  return (
    <main className="w-full bg-blue-50 text-blue-900 py-8">
      {/* Sub Hero section */}
      <div className='bg-white'>
        <motion.section
          className="py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center container mx-auto"
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
            <p className="text-base text-blue-900 leading-relaxed mb-6">
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
      </div>
      
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>      
    </main>
  );
}
