'use client'
import { motion } from 'framer-motion'
import BusinessHours from '../components/BusinessHours'
import { useState } from 'react'

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
    setForm({ name: '', email: '', phone: '', message: '' }); // reset form
  } else {
    console.error('Error:', data.message);
    setStatus('error');
  }
};

  return (
    <main className="w-full px-4 md:px-8 py-20 font-sans text-[16px] md:text-[18px] leading-relaxed bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">

      {/* Page Heading */}
      <motion.section
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
          Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We’d love to hear from you. Reach out and we’ll respond as soon as we can.
        </p>
      </motion.section>


      {/* Address + Map */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 max-w-7xl mx-auto">

        {/* Address Info */}
        <motion.div
          className="p-8 md:p-10 border-2 border-slate-100 rounded-2xl shadow-xl bg-white space-y-8 hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Questions or Comments?</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              We know that our clients have unique needs. Send us a message, and we'll get back to you soon.
            </p>
            <a
              href="https://wa.me/917013594249"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
              Website Inquiry
            </a>
          </div>

          <div className="space-y-6 text-lg">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Anantha Web Solutions Pvt Ltd</h3>
              <p className="text-slate-700 leading-relaxed">
                HPR LUXURY HOUSES, Kakkalapalle Rural,<br />
                Andhra Pradesh, India
              </p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300">
              <span className="text-blue-600 font-bold text-xl">📞</span>
              <a href="tel:+917013594249" className="text-slate-900 font-semibold hover:text-blue-600 transition-colors duration-300">
                +91 7013594249
              </a>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300">
              <span className="text-blue-600 font-bold text-xl">✉️</span>
              <a
                href="mailto:account@ananthawebsolutions.com"
                className="text-slate-900 font-semibold hover:text-blue-600 transition-colors duration-300 break-all"
              >
                account@ananthawebsolutions.com
              </a>
            </div>
          </div>

          <BusinessHours />
        </motion.div>

        {/* Map */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-100 h-[400px] md:h-[600px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d23119.360940874747!2d77.5504773!3d14.6600224!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bb13500291975ab%3A0x5034d51a4bc7bdb1!2sTrinethra%20Reddy%E2%80%99s%20bungalow%2C%20MH36%2BMJ7%2C%20Alamur%20Road%2C%20Alamur%2C%20Kakkalapalle%20Rural%2C%20Kakkalapalle%2C%20Andhra%20Pradesh%20515002!3m2!1d14.654164!2d77.56155799999999!5e1!3m2!1sen!2sin!4v1770054242091!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>
      </section>

      {/* Contact Form */}
      <motion.section
        className="p-8 md:p-12 border-2 border-slate-100 rounded-3xl shadow-2xl bg-white max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Send Us a Message</h3>
          <p className="text-slate-600 text-lg">Fill out the form below and we'll get back to you shortly</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {['name', 'email', 'phone'].map((field, i) => (
            <div key={i}>
              <label className="block mb-2 font-semibold text-slate-900 text-lg">
                {field[0].toUpperCase() + field.slice(1)}
                {field !== 'phone' && <span className="text-red-500 ml-1">*</span>}
              </label>
              <input
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                placeholder={`Your ${field}`}
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                required={field !== 'phone'}
              />
            </div>
          ))}

          <div>
            <label className="block mb-2 font-semibold text-slate-900 text-lg">
              Requirement<span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              name="message"
              className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg resize-none"
              rows={5}
              placeholder="Tell us what you need..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
          </button>

          {status === 'success' && (
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
              <p className="text-green-700 font-semibold text-center">✓ Email sent successfully!</p>
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <p className="text-red-700 font-semibold text-center">✗ Something went wrong. Please try again.</p>
            </div>
          )}
        </form>
      </motion.section>
    </main>
  )
}
