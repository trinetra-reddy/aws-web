// pages/contact.tsx
import { Mail, PhoneCall, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 py-10">
      {/* Page Heading */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">We’d love to hear from you. Reach out and we’ll respond as soon as we can.</p>
      </section>

      {/* Contact Form */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <form className="space-y-4 p-6 border rounded shadow-sm bg-white">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Your name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input type="tel" className="w-full px-4 py-2 border rounded" placeholder="Your phone number" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Requirement</label>
            <textarea className="w-full px-4 py-2 border rounded" rows={4} placeholder="Tell us what you need..." required />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Submit Inquiry
          </button>
        </form>

        {/* Office Info */}
        <div className="p-6 border rounded shadow-sm bg-white space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-blue-700 mt-1" />
            <div>
              <h4 className="font-semibold">Office Address</h4>
              <p>123 Business Street, Tech City, Country</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <PhoneCall className="text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircle className="text-green-500 mt-1" />
            <div>
              <h4 className="font-semibold">WhatsApp</h4>
              <a href="https://wa.me/1234567890" className="text-blue-600 hover:underline" target="_blank">Chat on WhatsApp</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-purple-600 mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <a href="mailto:info@ananthawebsolutions.com" className="text-blue-600 hover:underline">info@ananthawebsolutions.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="w-full">
        <iframe
          className="w-full h-80 border rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0194103464953!2d-122.4199066843827!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e339f8e08e3%3A0x408abf2a4c7b2f27!2sYour%20Company%20HQ!5e0!3m2!1sen!2sus!4v1618319605035!5m2!1sen!2sus"
          loading="lazy"
          allowFullScreen
        />
      </section>
    </main>
  )
}
