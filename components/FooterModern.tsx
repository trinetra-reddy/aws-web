'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FooterModern() {
  const footerRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer sections on scroll
      gsap.from('.footer-section', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      ref={footerRef}
      className={`relative ${
        theme === 'sunset' ? 'bg-deep-charcoal' : 'bg-deep-navy'
      } text-white pt-20 pb-10`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div className="footer-section">
            <h3 className="text-2xl font-black mb-6">
              <span className={`bg-gradient-to-r ${
                theme === 'sunset' 
                  ? 'from-coral-red to-sunset-orange' 
                  : 'from-forest-green to-emerald'
              } bg-clip-text text-transparent`}>
                Anantha
              </span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions. Your partner in digital excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${
                  theme === 'sunset' 
                    ? 'bg-coral-red/20 hover:bg-coral-red' 
                    : 'bg-forest-green/20 hover:bg-forest-green'
                } flex items-center justify-center transition-all duration-300 hover:scale-110`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${
                  theme === 'sunset' 
                    ? 'bg-coral-red/20 hover:bg-coral-red' 
                    : 'bg-forest-green/20 hover:bg-forest-green'
                } flex items-center justify-center transition-all duration-300 hover:scale-110`}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${
                  theme === 'sunset' 
                    ? 'bg-coral-red/20 hover:bg-coral-red' 
                    : 'bg-forest-green/20 hover:bg-forest-green'
                } flex items-center justify-center transition-all duration-300 hover:scale-110`}
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {['AI & Automation', 'Web Development', 'Mobile Apps', 'E-commerce', 'UI/UX Design', 'Cloud & DevOps'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Case Studies', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className={`w-5 h-5 mt-1 ${
                  theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
                }`} />
                <a href="mailto:hello@anantha.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@anantha.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className={`w-5 h-5 mt-1 ${
                  theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
                }`} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className={`w-5 h-5 mt-1 ${
                  theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
                }`} />
                <span className="text-gray-400">
                  Bangalore, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Anantha Web Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full ${
          theme === 'sunset' 
            ? 'bg-gradient-to-br from-coral-red to-sunset-orange hover:shadow-glow-coral' 
            : 'bg-gradient-to-br from-forest-green to-emerald hover:shadow-glow-green'
        } text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 z-40`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}

