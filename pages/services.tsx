import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/ServicesData';
import Head from 'next/head';

export default function Services() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  return (
    <>
      <Head>
        <title>Services | Anantha Web Solutions</title>
        <meta
          name="description"
          content="Explore our custom web development, mobile app, eCommerce, and AI-powered services tailored for modern digital businesses."
        />
        <link rel="canonical" href="https://ananthawebsolutions.com/services" />
      </Head>

      <main className="w-full bg-blue-50 text-blue-900 py-8">
        {/* Hero */}
        <div className="bg-white">
          <motion.section
            className="py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center container mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Empowering Your Digital Transformation Journey
              </h1>
              <p className="text-base text-blue-900 leading-relaxed mb-6">
                At Anantha Web Solutions, we specialize in crafting innovative digital solutions tailored to your business needs.
              </p>
              <a
                href="#services-list"
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
                alt="Team collaborating on digital solutions"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </motion.div>
          </motion.section>
        </div>

        {/* Services List */}
        <section id="services-list" className="container mx-auto py-12 px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
