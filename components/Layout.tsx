'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Hero from './Hero'
import Image from 'next/image'
import { Ubuntu } from 'next/font/google'
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => router.pathname === href

  return (
    <section className={ubuntu.variable}>
      <header className="bg-blue-900 shadow-md sticky top-0 z-50 transition font-sans">
        <div className="container mx-auto py-4 flex justify-between items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/logos/anantha_white.png"
              alt="logo"
              width={200}
              height={200}
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center text-lg font-semibold tracking-wide">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded transition-colors ${isActive(link.href)
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
              className="md:hidden px-4 pb-4 space-y-2 bg-blue-900 text-white shadow-md text-lg"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-2 font-medium rounded ${isActive(link.href)
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

      {/* Hero Section only for home page */}
      {pathname === '/' && <Hero />}

      <main className="min-h-screen bg-blue-50 font-sans text-base md:text-lg">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6 font-sans">
        <div className="container items-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-base">
          <div>
            {/* <h2 className="text-2xl font-bold italic mb-4">Anantha Web Solutions</h2> */}
            <Image
              src="/assets/logos/anantha_white.png"
              alt="logo"
              width={200}
              height={200}
              priority
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">About Us</li>
              <li className="cursor-pointer hover:underline">Services</li>
              <li className="cursor-pointer hover:underline">Contact Us</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Resources</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">Case Studies</li>
              <li className="cursor-pointer hover:underline">FAQs</li>
              <li className="cursor-pointer hover:underline">Testimonials</li>
              <li className="cursor-pointer hover:underline">Support</li>
              <li className="cursor-pointer hover:underline">Sitemap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">Facebook</li>
              <li className="cursor-pointer hover:underline">Twitter</li>
              <li className="cursor-pointer hover:underline">LinkedIn</li>
              <li className="cursor-pointer hover:underline">Instagram</li>
              <li className="cursor-pointer hover:underline">YouTube</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Subscribe</h3>
            <p className="mb-3 text-sm">Join our newsletter for updates on features and releases.</p>
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
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies Settings</a>
        </div>
      </footer>
    </section>
  )
}
