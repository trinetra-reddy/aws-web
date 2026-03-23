'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, Building2 } from 'lucide-react'
import Head from 'next/head'
import SEO, { localBusinessSchema } from '../components/SEO'
import GEO from '../components/GEO'
import GeoPersonalization from '../components/GeoPersonalization'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        requirement: form.message,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } else {
      console.error('Error:', data.message);
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7013594249',
      link: 'tel:+917013594249',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'account@ananthawebsolutions.com',
      link: 'mailto:account@ananthawebsolutions.com',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Andhra Pradesh, India',
      link: '#map',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      link: '#',
      color: 'orange'
    }
  ]

  return (
    <>
      <SEO
        title="Contact Us - Anantha Web Solutions"
        description="Get in touch with Anantha Web Solutions. Global offices in India, Canada, and USA. Contact us at +91-7013594249 or account@ananthawebsolutions.com"
        keywords="contact anantha web solutions, web development company contact, India office, Canada office, USA office"
        canonical="https://ananthawebsolutions.com/contact"
        structuredData={localBusinessSchema('india')}
      />

      <GEO
        title="Contact Anantha Web Solutions"
        description="Contact us for web development, mobile apps, and digital solutions. Offices in India, Canada, and USA. Phone: +91-7013594249"
        expertise={['Web Development', 'Mobile Development', 'E-commerce', 'Cloud Services']}
        sources={['https://ananthawebsolutions.com/contact']}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema('canada')) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema('usa')) }}
        />
      </Head>

      <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-20">
        {/* Modern Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Let's Start a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Conversation</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Get in touch and let's build something amazing together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Geo Personalization */}
        <section className="py-8">
          <div className="container mx-auto px-6 lg:px-12">
            <GeoPersonalization />
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${info.color}-500 to-${info.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{info.value}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>




        {/* Main Content: Form + Map */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
                    <p className="text-slate-600 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-slate-900 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                      >
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                      >
                        <MessageCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                        <p className="text-red-800 font-medium">Something went wrong. Please try again.</p>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Office Locations */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Global Offices</h3>

                {/* India Office */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">🇮🇳 India (Headquarters)</h4>
                      <p className="text-white/90 leading-relaxed">
                        Anantha Web Solutions Pvt Ltd<br />
                        HPR LUXURY HOUSES, Kakkalapalle Rural,<br />
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <a
                      href="https://wa.me/917013594249"
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="font-semibold">Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Canada Office */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-slate-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1 text-blue-600" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">🇨🇦 Canada Office</h4>
                      <p className="text-slate-600 leading-relaxed">
                        380 Southdale Road East,<br />
                        London, Ontario, Canada
                      </p>
                    </div>
                  </div>
                </div>

                {/* USA Office */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-slate-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1 text-blue-600" />
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">🇺🇸 USA Office</h4>
                      <p className="text-slate-600 leading-relaxed">
                        6115 Abbotts Bridge Rd Apt 1716,<br />
                        Johns Creek, GA 30097-5760, USA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div id="map" className="rounded-2xl overflow-hidden shadow-xl border-2 border-slate-100 h-[350px] mt-6">
                  <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d23119.360940874747!2d77.5504773!3d14.6600224!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bb13500291975ab%3A0x5034d51a4bc7bdb1!2sTrinethra%20Reddy%E2%80%99s%20bungalow%2C%20MH36%2BMJ7%2C%20Alamur%20Road%2C%20Alamur%2C%20Kakkalapalle%20Rural%2C%20Kakkalapalle%2C%20Andhra%20Pradesh%20515002!3m2!1d14.654164!2d77.56155799999999!5e1!3m2!1sen!2sin!4v1770054242091!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}