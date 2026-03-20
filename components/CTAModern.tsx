'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Player } from '@lottiefiles/react-lottie-player'
import { useTheme } from '../context/ThemeContext'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CTAModern() {
  const sectionRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate CTA on scroll
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: '.cta-content',
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Floating animation for Lottie
      gsap.to('.cta-lottie', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-32 ${
        theme === 'sunset' 
          ? 'bg-gradient-to-br from-deep-charcoal to-gray-900' 
          : 'bg-gradient-to-br from-deep-navy to-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="cta-content relative max-w-6xl mx-auto">
          <div className={`relative rounded-3xl overflow-hidden ${
            theme === 'sunset' 
              ? 'bg-gradient-to-br from-coral-red to-sunset-orange' 
              : 'bg-gradient-to-br from-forest-green to-emerald'
          } p-12 lg:p-20 shadow-2xl`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-bold">Limited Time Offer</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Get a free consultation and discover how we can help you achieve your goals. 
                  No commitment required.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-white text-coral-red font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                  >
                    View Our Work
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/20">
                  <div className="text-white">
                    <div className="text-2xl font-black">500+</div>
                    <div className="text-sm opacity-80">Happy Clients</div>
                  </div>
                  <div className="text-white">
                    <div className="text-2xl font-black">98%</div>
                    <div className="text-sm opacity-80">Satisfaction</div>
                  </div>
                  <div className="text-white">
                    <div className="text-2xl font-black">24/7</div>
                    <div className="text-sm opacity-80">Support</div>
                  </div>
                </div>
              </div>

              {/* Right: Lottie Animation */}
              <div className="cta-lottie flex justify-center">
                <div className="w-full max-w-md">
                  <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_V9t630.json"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

