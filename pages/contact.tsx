'use client'
import { Mail, PhoneCall, MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 py-10 font-sans">
      
      {/* Page Heading */}
      <motion.section
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          We’d love to hear from you. Reach out and we’ll respond as soon as we can.
        </p>
      </motion.section>

      {/* Contact Form + Info */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        
        {/* Contact Form */}
        <motion.form
          className="space-y-4 p-6 border rounded shadow-sm bg-white"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { label: 'Name', type: 'text', placeholder: 'Your name' },
            { label: 'Email', type: 'email', placeholder: 'you@example.com' },
            { label: 'Phone', type: 'tel', placeholder: 'Your phone number' },
          ].map((field, i) => (
            <div key={i}>
              <label className="block mb-1 font-medium">{field.label}</label>
              <input
                type={field.type}
                className="w-full px-4 py-2 border rounded"
                placeholder={field.placeholder}
                required={field.type !== 'tel'}
              />
            </div>
          ))}
          <div>
            <label className="block mb-1 font-medium">Requirement</label>
            <textarea
              className="w-full px-4 py-2 border rounded"
              rows={4}
              placeholder="Tell us what you need..."
              required
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300">
            Submit Inquiry
          </button>
        </motion.form>

        {/* Office Info */}
        <motion.div
          className="p-6 border rounded shadow-sm bg-white space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            {
              icon: <MapPin className="text-blue-700 mt-1" />,
              title: 'Office Address',
              content: (
                <p>
                  Anantha Web Solutions Pvt Ltd<br />
                  HPR LUXURY HOUSES, Kakkalapalle Rural,<br />
                  Andhra Pradesh, India
                </p>
              )
            },
            {
              icon: <PhoneCall className="text-green-600 mt-1" />,
              title: 'Call Us',
              content: (
                <a href="tel:+917013594249" className="text-blue-600 hover:underline">
                  +91 7013594249
                </a>
              )
            },
            {
              icon: <MessageCircle className="text-green-500 mt-1" />,
              title: 'WhatsApp',
              content: (
                <a
                  href="https://wa.me/917013594249"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Chat on WhatsApp
                </a>
              )
            },
            {
              icon: <Mail className="text-purple-600 mt-1" />,
              title: 'Email',
              content: (
                <a
                  href="mailto:account@ananthawebsolutions.com"
                  className="text-blue-600 hover:underline"
                >
                  account@ananthawebsolutions.com
                </a>
              )
            }
          ].map((info, idx) => (
            <div key={idx} className="flex items-start gap-4">
              {info.icon}
              <div>
                <h4 className="font-semibold">{info.title}</h4>
                {info.content}
              </div>
            </div>
          ))}

          <div className="pt-6">
            <h4 className="text-lg font-semibold mb-1">Hours</h4>
            <p className="text-gray-700">
              Open today <span className="text-blue-600 font-medium">09:00 am – 05:00 pm</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Map Embed */}
      <motion.section
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <iframe
          className="w-full h-80 border rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194103464953!2d-122.4199066843827!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e339f8e08e3%3A0x408abf2a4c7b2f27!2sYour%20Company%20HQ!5e0!3m2!1sen!2sus!4v1618319605035!5m2!1sen!2sus"
          loading="lazy"
          allowFullScreen
        />
      </motion.section>
    </main>
  )
}
