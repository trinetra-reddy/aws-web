'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Ubuntu } from 'next/font/google'

const Hero = dynamic(() => import('../components/Hero'), { ssr: false })
const ChatbotWidget = dynamic(() => import('../components/ChatbotWidget'), { ssr: false })

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-ubuntu' })

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isActive = (href: string) => router.pathname === href

  // Accessibility: prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  return (
    <div className={`${ubuntu.variable} font-sans text-slate-900`}>
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-md bg-opacity-98 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <Link href="/" aria-label="Go to homepage" prefetch className="group flex items-center gap-3">
            <div className="transform group-hover:scale-105 transition-transform duration-300">
              <Image src="/assets/logos/anantha_white.png" alt="Anantha Web Solutions Logo" width={160} height={60} priority className="h-10 md:h-12 w-auto" />
            </div>
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center space-x-2 text-base font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                className={`relative px-5 py-2.5 rounded-xl transition-all duration-300 group ${
                  isActive(link.href)
                    ? 'bg-white text-blue-900 font-bold shadow-lg'
                    : 'text-white/90 hover:bg-white/15 hover:text-white hover:shadow-md'
                }`}
              >
                {link.label}
                {!isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-3/4 transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </nav>

          <motion.button
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2.5 rounded-xl hover:bg-white/15 transition-all duration-200 active:scale-95"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-4 pb-6 bg-gradient-to-b from-blue-900/98 to-blue-950/98 backdrop-blur-md text-white shadow-2xl border-t border-white/10"
              aria-label="Mobile navigation"
            >
              <div className="space-y-2 pt-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      prefetch
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3.5 px-5 rounded-xl transition-all duration-300 ${
                        isActive(link.href)
                          ? 'bg-white text-blue-900 font-bold shadow-lg transform scale-105'
                          : 'text-white/90 hover:bg-white/15 hover:text-white hover:translate-x-2'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {pathname === '/' && <Hero />}

      <main id="main-content" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        {children}
      </main>
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-6 border-t-2 border-blue-500/20 overflow-hidden" role="contentinfo">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300 inline-block">
                <Image
                  src="/assets/logos/anantha_white.png"
                  alt="Anantha Web Solutions Logo"
                  width={180}
                  height={70}
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                Empowering businesses with innovative digital solutions and cutting-edge technology.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/anantha-web-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href="https://wa.me/917013594249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <span className="text-lg">💬</span>
                </a>
              </div>
            </div>

            <nav aria-label="Footer - Quick Links">
              <h3 className="font-bold text-xl mb-6 text-white relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/services', label: 'Services' },
                  { href: '/industries', label: 'Industries' },
                  { href: '/about', label: 'About Us' },
                  { href: '/contact', label: 'Contact Us' },
                ].map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group text-white/80 hover:text-white inline-flex items-center gap-2 transition-all duration-300 ${
                        router.pathname === link.href ? 'text-white font-semibold' : ''
                      }`}
                    >
                      <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer - Services">
              <h3 className="font-bold text-xl mb-6 text-white relative inline-block">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="hover:text-white transition-colors duration-200">Web Development</li>
                <li className="hover:text-white transition-colors duration-200">Mobile Apps</li>
                <li className="hover:text-white transition-colors duration-200">AI Solutions</li>
                <li className="hover:text-white transition-colors duration-200">Cloud Services</li>
              </ul>
            </nav>

            <div>
              <h3 className="font-bold text-xl mb-6 text-white relative inline-block">
                Contact Info
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">📞</span>
                  <a href="tel:+917013594249" className="hover:text-white transition-colors duration-200">
                    +91 7013594249
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✉️</span>
                  <a href="mailto:account@ananthawebsolutions.com" className="hover:text-white transition-colors duration-200 break-all">
                    account@ananthawebsolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">📍</span>
                  <span className="text-sm leading-relaxed">
                    HPR LUXURY HOUSES,<br />
                    Kakkalapalle Rural,<br />
                    Andhra Pradesh, India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-white/70 text-sm">
                © {new Date().getFullYear()} Anantha Web Solutions. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
}
