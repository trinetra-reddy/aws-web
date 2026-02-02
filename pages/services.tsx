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

      <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 text-slate-900">
        {/* Hero */}
        <motion.section
          className="py-20 md:py-28 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6 font-medium text-sm">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  Comprehensive Solutions
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Empowering Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Transformation</span> Journey
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  At Anantha Web Solutions, we specialize in crafting innovative digital solutions tailored to your business needs.
                </p>
                <a
                  href="#services-list"
                  className="btn-primary"
                >
                  Explore Our Services
                </a>
              </motion.div>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=533&fit=crop&q=80"
                    alt="Team collaborating on digital solutions"
                    width={600}
                    height={400}
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services List */}
        <section id="services-list" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                data-aos="fade-up"
              >
                <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Comprehensive digital solutions designed to drive your business forward
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
