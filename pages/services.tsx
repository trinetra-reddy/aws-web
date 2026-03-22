import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/ServicesData';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

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
        {/* Modern Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 pb-20 md:pb-28 bg-gradient-to-br from-blue-50 via-purple-50/30 to-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-200 rounded-full px-4 py-2 mb-6 font-medium text-sm">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700">Comprehensive Solutions</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Empowering Your{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Digital Transformation
                  </span>{' '}
                  Journey
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  At Anantha Web Solutions, we specialize in crafting innovative digital solutions tailored to your business needs. From web development to AI-powered automation, we've got you covered.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {['Custom Solutions', 'Expert Team', '24/7 Support', 'Proven Results'].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#services-list"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Explore Our Services
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-3xl"></div>
                  <div className="relative w-full max-w-lg mx-auto">
                    <Player
                      autoplay
                      loop
                      src="/assets/animations/software-development.json"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section id="services-list" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-bold">Ready to Get Started?</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get a free consultation and discover how our services can transform your business. No commitment required.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  View Industries We Serve
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
                <div className="text-white">
                  <div className="text-3xl md:text-4xl font-black mb-1">500+</div>
                  <div className="text-sm text-white/80">Projects Delivered</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl md:text-4xl font-black mb-1">98%</div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl md:text-4xl font-black mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
