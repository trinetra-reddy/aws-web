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
    <div className={`${ubuntu.variable} font-sans text-blue-900`}>
      <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/" aria-label="Go to homepage" prefetch>
            <Image src="/assets/logos/anantha_white.png" alt="Anantha Web Solutions Logo" width={160} height={60} priority />
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex space-x-6 text-lg font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                prefetch
                className={`px-3 py-2 ${isActive(link.href) ? 'underline underline-offset-4' : 'hover:underline'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <motion.button
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden px-4 pb-4 bg-blue-900 text-white shadow-md text-base font-medium"
              aria-label="Mobile navigation"
            >
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  className={`block py-2 ${isActive(link.href) ? 'font-semibold underline' : 'hover:underline'}`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {pathname === '/' && <Hero />}

      <main id="main-content" className="min-h-screen bg-blue-50">
        {children}
      </main>
      <footer className="bg-blue-900 text-white py-12 px-6" role="contentinfo">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <Image
            src="/assets/logos/anantha_white.png"
            alt="Anantha Web Solutions Logo"
            width={160}
            height={60}
          />

          <nav aria-label="Footer - Quick Links">
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/services', label: 'Services' },
                { href: '/industries', label: 'Industries' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:underline ${router.pathname === link.href ? 'underline font-semibold' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer - Social">
            <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/anantha-web-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                 href="https://wa.me/917013594249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="my-8 border-white/20" />
        <div className="text-center text-sm space-x-4">
          <span>© 2024 Anantha Web Solutions. All rights reserved.</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </footer>
    </div>
  )
}
