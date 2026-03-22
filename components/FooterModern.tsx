'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useRouter } from 'next/router'
import { useTheme } from '../context/ThemeContext'

export default function FooterModern() {
const router = useRouter()
const { theme } = useTheme()
  return (
     <footer className={`relative py-20 px-6 border-t-2 overflow-hidden ${
       theme === 'sunset'
         ? 'bg-gradient-to-br from-cream via-soft-peach to-cream border-coral-red/20 text-deep-charcoal'
         : 'bg-gradient-to-br from-sage via-mint to-sage border-forest-green/20 text-deep-navy'
     }`} role="contentinfo">
              {/* Decorative gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${
                theme === 'sunset' ? 'from-soft-peach/30 to-transparent' : 'from-mint/30 to-transparent'
              }`}></div>
      
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
                        style={{
                          filter: theme === 'sunset'
                            ? 'brightness(0) saturate(100%) invert(18%) sepia(15%) saturate(1234%) hue-rotate(180deg) brightness(95%) contrast(92%)'
                            : 'brightness(0) saturate(100%) invert(28%) sepia(28%) saturate(1234%) hue-rotate(115deg) brightness(95%) contrast(92%)'
                        }}
                      />
                    </div>
                    <p className={`text-base leading-relaxed mb-6 ${
                      theme === 'sunset' ? 'text-deep-charcoal/80' : 'text-deep-navy/80'
                    }`}>
                      Empowering businesses with innovative digital solutions and cutting-edge technology.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com/company/anantha-web-solutions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          theme === 'sunset'
                            ? 'bg-coral-red/10 hover:bg-coral-red text-deep-charcoal hover:text-white'
                            : 'bg-forest-green/10 hover:bg-forest-green text-deep-navy hover:text-white'
                        }`}
                        aria-label="LinkedIn"
                      >
                        <span className="text-lg">in</span>
                      </a>
                      <a
                        href="https://wa.me/917013594249"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          theme === 'sunset'
                            ? 'bg-coral-red/10 hover:bg-green-600 text-deep-charcoal hover:text-white'
                            : 'bg-forest-green/10 hover:bg-green-600 text-deep-navy hover:text-white'
                        }`}
                        aria-label="WhatsApp"
                      >
                        <span className="text-lg">💬</span>
                      </a>
                    </div>
                  </div>
      
                  <nav aria-label="Footer - Quick Links">
                    <h3 className={`font-bold text-xl mb-6 relative inline-block ${
                      theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
                    }`}>
                      Quick Links
                      <span className={`absolute bottom-0 left-0 w-12 h-1 rounded-full ${
                        theme === 'sunset' ? 'bg-coral-red' : 'bg-forest-green'
                      }`}></span>
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
                            className={`group inline-flex items-center gap-2 transition-all duration-300 ${
                              theme === 'sunset'
                                ? `text-deep-charcoal/80 hover:text-deep-charcoal ${router.pathname === link.href ? 'text-deep-charcoal font-semibold' : ''}`
                                : `text-deep-navy/80 hover:text-deep-navy ${router.pathname === link.href ? 'text-deep-navy font-semibold' : ''}`
                            }`}
                          >
                            <span className={`w-0 h-0.5 group-hover:w-4 transition-all duration-300 ${
                              theme === 'sunset' ? 'bg-coral-red' : 'bg-forest-green'
                            }`}></span>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
      
                  <nav aria-label="Footer - Services">
                    <h3 className={`font-bold text-xl mb-6 relative inline-block ${
                      theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
                    }`}>
                      Our Services
                      <span className={`absolute bottom-0 left-0 w-12 h-1 rounded-full ${
                        theme === 'sunset' ? 'bg-coral-red' : 'bg-forest-green'
                      }`}></span>
                    </h3>
                    <ul className={`space-y-3 ${
                      theme === 'sunset' ? 'text-deep-charcoal/80' : 'text-deep-navy/80'
                    }`}>
                      <li className={`transition-colors duration-200 ${
                        theme === 'sunset' ? 'hover:text-deep-charcoal' : 'hover:text-deep-navy'
                      }`}>Web Development</li>
                      <li className={`transition-colors duration-200 ${
                        theme === 'sunset' ? 'hover:text-deep-charcoal' : 'hover:text-deep-navy'
                      }`}>Mobile Apps</li>
                      <li className={`transition-colors duration-200 ${
                        theme === 'sunset' ? 'hover:text-deep-charcoal' : 'hover:text-deep-navy'
                      }`}>AI Solutions</li>
                      <li className={`transition-colors duration-200 ${
                        theme === 'sunset' ? 'hover:text-deep-charcoal' : 'hover:text-deep-navy'
                      }`}>Cloud Services</li>
                    </ul>
                  </nav>

                  <div>
                    <h3 className={`font-bold text-xl mb-6 relative inline-block ${
                      theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
                    }`}>
                      Contact Info
                      <span className={`absolute bottom-0 left-0 w-12 h-1 rounded-full ${
                        theme === 'sunset' ? 'bg-coral-red' : 'bg-forest-green'
                      }`}></span>
                    </h3>
                    <ul className={`space-y-4 ${
                      theme === 'sunset' ? 'text-deep-charcoal/80' : 'text-deep-navy/80'
                    }`}>
                      <li className="flex items-start gap-3">
                        <span className={`mt-1 ${
                          theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
                        }`}>📞</span>
                        <a href="tel:+917013594249" className={`transition-colors duration-200 ${
                          theme === 'sunset' ? 'hover:text-deep-charcoal' : 'hover:text-deep-navy'
                        }`}>
                          +91 7013594249
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className={`mt-1 ${
                          theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
                        }`}>✉️</span>
                        <a href="mailto:account@ananthawebsolutions.com" className={`transition-colors duration-200 break-all ${
                          theme === 'sunset' ? 'hover:text-deep-charcoal' : 'hover:text-deep-navy'
                        }`}>
                          account@ananthawebsolutions.com
                        </a>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className={`mt-1 ${
                          theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
                        }`}>📍</span>
                        <span className="text-sm leading-relaxed">
                          HPR LUXURY HOUSES,<br />
                          Kakkalapalle Rural,<br />
                          Andhra Pradesh, India
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
      
                <div className={`border-t pt-8 ${
                  theme === 'sunset' ? 'border-deep-charcoal/10' : 'border-deep-navy/10'
                }`}>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className={`text-sm ${
                      theme === 'sunset' ? 'text-deep-charcoal/70' : 'text-deep-navy/70'
                    }`}>
                      © {new Date().getFullYear()} Anantha Web Solutions. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <a href="#" className={`transition-colors duration-200 ${
                        theme === 'sunset' ? 'text-deep-charcoal/70 hover:text-deep-charcoal' : 'text-deep-navy/70 hover:text-deep-navy'
                      }`}>Privacy Policy</a>
                      <a href="#" className={`transition-colors duration-200 ${
                        theme === 'sunset' ? 'text-deep-charcoal/70 hover:text-deep-charcoal' : 'text-deep-navy/70 hover:text-deep-navy'
                      }`}>Terms of Service</a>
                      <a href="#" className={`transition-colors duration-200 ${
                        theme === 'sunset' ? 'text-deep-charcoal/70 hover:text-deep-charcoal' : 'text-deep-navy/70 hover:text-deep-navy'
                      }`}>Cookies</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
  )
}

