'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
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
      {/* Hero Section */}
      <motion.div>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 text-blue-900 rounded-xl mb-12"
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
              <p className="text-lg text-blue-800 mb-6">
                We design high-performance web and mobile apps to help startups and businesses scale faster.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-3 rounded font-semibold shadow transition">
                Request a Demo
              </button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
      <main className="min-h-screen bg-blue-50">{children}</main>

      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Anantha Web Solutions. All rights reserved.</p>
      </footer>
    </>
  )
}
