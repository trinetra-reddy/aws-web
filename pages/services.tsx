'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'Custom Web Solutions',
    image: '/assets/CustomWebSolutions.png',
    desc: `At Anantha web solutions, we specialize in creating custom web solutions that cater to your specific business requirements. Our team of experts utilizes the latest technologies to build efficient, secure, and scalable applications.`
  },
  {
    title: 'Exceptional User Experience',
    image: '/assets/Exceptional-User-Experience.webp',
    desc: `User experience is at the forefront of what we do. Our design team is dedicated to crafting visually stunning and highly functional interfaces that resonate with your target audience.`
  },
  {
    title: 'Driving Innovation in Technology',
    image: '/assets/Driving-Innovation-Technology.webp',
    desc: `We are passionate about driving innovation. Our team is always exploring new tools, frameworks, and methodologies to bring the best solutions to our clients.`
  },
  {
    title: 'Future-Ready Digital Solutions',
    image: '/assets/Future-Ready-Digital-Solutions.webp',
    desc: `We design and develop applications that can adapt to future technological advancements. Our scalable architecture ensures you're prepared for what comes next.`
  },
  {
    title: 'Reliable Maintenance and Support',
    image: '/assets/Reliable-Maintenance-Support.webp',
    desc: `We offer reliable maintenance and support services to ensure the longevity of your digital solutions. Your success is our priority.`
  },
  {
    title: 'Industry-Specific Solutions',
    image: '/assets/Industry-Specific-Solutions.webp',
    desc: `We offer industry-specific solutions tailored to meet the unique challenges faced by each sector.`
  },
];

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
    <main className="w-full bg-white text-blue-900 px-6 py-8">
      {/* Sub Hero section */}
      <motion.section
        className="py-8 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
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
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-lg mx-auto mb-4 object-cover"
              />
              <h3 className="text-[20px] text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-[16px] leading-relaxed max-w-[90%] mx-auto text-black">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}