'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 transition">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-extrabold text-blue-900"
          >
            Anantha Web Solutions
          </motion.h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={`transition-colors font-medium ${isActive(link.href)
                    ? 'text-blue-700 underline underline-offset-4'
                    : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden text-blue-900"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu with animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 text-sm font-medium border-b ${isActive(link.href)
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="min-h-screen">{children}</main>

      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Anantha Web Solutions. All rights reserved.</p>
      </footer>
    </>
  )
}