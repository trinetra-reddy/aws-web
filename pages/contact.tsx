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
    <main className="w-full px-4 md:px-8 py-12 font-sans text-[16px] md:text-[18px] leading-relaxed bg-gray-50">

      {/* Page Heading */}
      <motion.section
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-3">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you. Reach out and we’ll respond as soon as we can.
        </p>
      </motion.section>

      {/* Address + Map */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

        {/* Address Info */}
        <motion.div
          className="p-6 md:p-8 border rounded-lg shadow-sm bg-white space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">Questions or Comments?</h2>
            <p className="text-gray-700 mb-6">
              We know that our clients have unique needs. Send us a message, and we’ll get back to you soon.
            </p>
            <a
              href="https://wa.me/917013594249"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-3 rounded shadow transition"
            >
              <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
              Website Inquiry
            </a>
          </div>

          <div className="space-y-4 text-lg">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900">Anantha Web Solutions Pvt Ltd</h3>
              <p className="text-gray-800">
                HPR LUXURY HOUSES, Kakkalapalle Rural,<br />
                Andhra Pradesh, India
              </p>
            </div>
            <div>
              <a href="tel:+917013594249" className="text-blue-900 font-medium hover:underline">
                +91 7013594249
              </a>
            </div>
            <div>
              <a
                href="mailto:account@ananthawebsolutions.com"
                className="text-blue-900 font-medium hover:underline"
              >
                account@ananthawebsolutions.com
              </a>
            </div>
          </div>

          <BusinessHours />
        </motion.div>

        {/* Map */}
        <motion.div
          className="rounded-lg overflow-hidden shadow border h-[350px] md:h-[500px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194103464953!2d-122.4199066843827!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e339f8e08e3%3A0x408abf2a4c7b2f27!2sYour%20Company%20HQ!5e0!3m2!1sen!2sus!4v1618319605035!5m2!1sen!2sus"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>
      </section>

      {/* Contact Form */}
      <motion.section
        className="p-6 border rounded shadow-sm bg-white max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold text-blue-900 mb-6">Send Us a Message</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {['name', 'email', 'phone'].map((field, i) => (
            <div key={i}>
              <label className="block mb-1 font-medium text-blue-900">
                {field[0].toUpperCase() + field.slice(1)}
              </label>
              <input
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Your ${field}`}
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                required={field !== 'phone'}
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 font-medium text-blue-900">Requirement</label>
            <textarea
              name="message"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Tell us what you need..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 rounded transition duration-300"
          >
            {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
          </button>

          {status === 'success' && <p className="text-green-600 mt-2">Email sent successfully!</p>}
          {status === 'error' && <p className="text-red-600 mt-2">Something went wrong. Try again.</p>}
        </form>
      </motion.section>
    </main>
  )
}
