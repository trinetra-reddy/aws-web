'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => router.pathname === href
  const pathname = usePathname()
  return (
    <>
      <header className="bg-blue-900 shadow-md sticky top-0 z-50 transition">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-extrabold"
          >
            Anantha Web Solutions
          </motion.h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded transition-colors font-medium ${isActive(link.href)
                    ? 'text-white underline underline-offset-4'
                    : 'text-white hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden px-4 pb-4 space-y-2 bg-blue-900 text-white shadow-md"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-2 text-sm font-medium rounded ${isActive(link.href)
                    ? 'bg-blue-800 text-white font-semibold'
                    : 'hover:bg-blue-800 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Hero Section only for the home page */}
      {pathname == '/' && (
        <motion.div>
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-6 py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 text-blue-900 rounded-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/assets/hero.png"
                  alt="Service Graphic"
                  width={600}
                  height={500}
                  className="rounded-lg drop-shadow-md"
                />
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                  Build Smarter.<br className="hidden md:block" /> Grow Faster.
                </h1>
                <p className="text-lg text-black mb-6">
                  We design high-performance web and mobile apps to help startups and businesses scale faster.
                </p>
                <button className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded font-semibold shadow transition">
                  Request a Demo
                </button>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      )}
      <main className="min-h-screen bg-blue-50">{children}</main>

      {/* <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        
        <p>&copy; {new Date().getFullYear()} Anantha Web Solutions. All rights reserved.</p>
      </footer> */}
      <footer className="bg-blue-900 text-white py-12 px-6 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h2 className="text-2xl font-signature italic font-semibold mb-4">Logo</h2>
          </div>
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Case Studies</li>
              <li>FAQs</li>
              <li>Testimonials</li>
              <li>Support</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Stay Connected</h3>
            <ul className="space-y-2 text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Subscribe</h3>
            <p className="text-sm mb-3">Join our newsletter for updates on features and releases.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded border border-white bg-transparent text-white placeholder-white text-sm"
              />
              <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium">Subscribe</button>
            </form>
            <p className="text-xs mt-2">By subscribing, you agree to our Privacy Policy and consent to updates.</p>
          </div>
        </div>
        <hr className="my-8 border-white/20" />
        <div className="text-center text-sm space-x-4">
          <span>© 2024 Anantha Web Solutions. All rights reserved.</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </footer>
    </>
  )
}
