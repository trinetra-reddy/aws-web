'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IndustryGrid from '../components/IndustryGrid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { industriesData } from '../data/IndustriesData';

export default function Industries() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Head>
        <title>Industries We Support | Anantha Web Solutions</title>
        <meta
          name="description"
          content="We build custom digital solutions for healthcare, logistics, education, e-commerce, hospitality, and more. Explore how we help industries transform."
        />
        <link rel="canonical" href="https://ananthawebsolutions.com/industries" />
      </Head>

      <main className="w-full bg-white text-blue-900 py-14 font-sans" role="main">
        <div className="mx-auto container">
          {/* Hero Section */}
          <section
            aria-labelledby="industries-heading"
            className="flex flex-col md:flex-row items-center gap-10 mb-20"
          >
            <motion.div
              className="w-full md:w-3/5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h1
                id="industries-heading"
                className="text-4xl font-bold text-[#1d3a70] mb-4 leading-tight"
              >
                Industries We Support
              </h1>
              <p className="text-[#5c6c8a] text-lg leading-relaxed">
                We empower businesses across diverse industries by delivering tailored software
                solutions that drive efficiency, growth, and innovation. From streamlining
                operations to enabling digital transformation, we align technology with your needs —
                in healthcare, logistics, education, e-commerce, hospitality and more.
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-2/5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Image
                src="/assets/IndustriesSupport.svg"
                alt="Illustration representing industries served"
                width={600}
                height={450}
                className="rounded-xl w-full h-auto"
                priority
              />
            </motion.div>
          </section>
        </div>

        {/* Industry Grid */}
        <div className="bg-blue-50">
          <section
            className="mb-20 mx-auto container"
            aria-labelledby="industry-cards"
          >
            <h2 id="industry-cards" className="sr-only">
              Industry Cards
            </h2>
            <IndustryGrid items={industriesData} />
          </section>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <section
            className="container mx-auto px-4 py-14"
            aria-labelledby="cta-heading"
          >
            <motion.div
              className="mb-10 max-w-6xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="cta-heading" className="text-3xl font-bold text-[#1d3a70] mb-4">
                Ready to Start?
              </h2>
              <p className="text-[#5c6c8a] text-lg">
                Connect with us today and let’s explore how we can build your next big idea.
              </p>
            </motion.div>

            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
                {[
                  { title: 'Ready to Start', desc: 'Reach out to explore tailored solutions.' },
                  { title: 'Get in Touch', desc: 'Discuss your needs with our expert team.' },
                ].map((cta, i) => (
                  <motion.div
                    key={i}
                    className="cursor-pointer bg-white border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition w-full hover:scale-[1.03]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    role="region"
                    aria-labelledby={`cta-title-${i}`}
                  >
                    <h3
                      id={`cta-title-${i}`}
                      className="text-lg font-semibold text-[#1d3a70] mb-2"
                    >
                      {cta.title}
                    </h3>
                    <p className="text-[#5c6c8a]">{cta.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
