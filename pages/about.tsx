// pages/about.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { User, Target, Users, Zap, Award, Globe, TrendingUp } from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'
import Head from 'next/head'
import SEO, { organizationSchema } from '../components/SEO'
import GEO from '../components/GEO'

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 }
  })
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Anantha Web Solutions"
        description="Learn about Anantha Web Solutions - a leading web and mobile development company with global presence in India, Canada, and USA. 500+ projects delivered, 98% client satisfaction."
        keywords="about anantha web solutions, web development company, mobile app development, global offices, India, Canada, USA"
        canonical="https://ananthawebsolutions.com/about"
        structuredData={organizationSchema}
      />

      <GEO
        title="About Anantha Web Solutions"
        description="Leading web and mobile development company with offices in India, Canada, and USA. 500+ projects delivered with 98% client satisfaction."
        expertise={['Web Development', 'Mobile Development', 'E-commerce', 'UI/UX Design', 'Cloud Services', 'DevOps']}
        sources={['https://ananthawebsolutions.com/about']}
      />

      <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 text-slate-900 px-6 pt-20 pb-20">
        <div className="container mx-auto space-y-24 pt-20">
        {/* Page Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Who We Are</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Anantha Web Solutions</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Transforming businesses through innovative digital solutions and cutting-edge technology
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <motion.div
            className="rounded-2xl overflow-hidden order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative w-full max-w-md mx-auto">
                <Player
                  autoplay
                  loop
                  src="/assets/animations/web-design.json"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At <strong className="text-blue-600">Anantha Web Solutions</strong>, our mission is to empower businesses through innovative digital solutions.
              We aim to deliver exceptional value to our clients by focusing on their unique needs and challenges.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="badge">Innovation</span>
              <span className="badge">Excellence</span>
              <span className="badge">Client-Focused</span>
            </div>
          </motion.div>
        </motion.section>

        {/* Section: Team and Leadership */}
        <section>
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Meet Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[{
              name: 'Baba Fakruddin', title: 'Director & Operations Head', gender: 'male'
            },
            { name: 'Vivitha', title: 'Developer', gender: 'female' },
            { name: 'Teja Sree', title: 'Lead Developer', gender: 'female' }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
                custom={idx}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="show"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  <div className={`relative w-full h-full rounded-full shadow-lg border-4 border-white group-hover:border-blue-100 transition-all duration-300 flex items-center justify-center ${
                    member.gender === 'female'
                      ? 'bg-gradient-to-br from-pink-400 to-purple-500'
                      : 'bg-gradient-to-br from-blue-400 to-blue-600'
                  }`}>
                    <User size={56} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h4>
                <p className="text-sm text-slate-600 font-medium">{member.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section: Timeline of Growth */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Timeline of Growth</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Milestones that shaped our success story
            </p>
          </div>

          <ul className="space-y-8 border-l-4 border-blue-600 pl-8 md:pl-12 max-w-4xl mx-auto">
            {[{
              year: '2021', event: 'Company founded with vision to empower SMEs digitally.'
            },
            { year: '2022', event: 'Delivered 50+ custom apps for clients globally.' },
            { year: '2023', event: 'Opened second office and doubled team size.' }
            ].map((item, i) => (
              <motion.li
                key={i}
                className="relative pl-6 md:pl-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <span className="absolute -left-11 md:-left-14 top-1 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></span>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <strong className="text-2xl font-bold text-blue-600 block mb-2">{item.year}</strong>
                  <p className="text-slate-700 text-lg leading-relaxed">{item.event}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-white/90">Delivering excellence across the globe</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, value: '3', label: 'Global Offices', suffix: '' },
              { icon: Users, value: '500', label: 'Projects Delivered', suffix: '+' },
              { icon: Award, value: '98', label: 'Client Satisfaction', suffix: '%' },
              { icon: TrendingUp, value: '10', label: 'Industries Served', suffix: '+' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Client-Focused Approach',
                description: 'We prioritize your unique needs and challenges, delivering tailored solutions that drive real business value.'
              },
              {
                icon: Zap,
                title: 'Cutting-Edge Technology',
                description: 'Leveraging the latest technologies and best practices to build scalable, future-proof solutions.'
              },
              {
                icon: Globe,
                title: 'Global Presence',
                description: 'With offices in India, Canada, and USA, we provide 24/7 support and local expertise worldwide.'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-blue-200 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
    </>
  )
}