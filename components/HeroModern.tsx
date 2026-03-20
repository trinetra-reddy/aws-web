'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { Player } from '@lottiefiles/react-lottie-player'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroModern() {
  const heroRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation - split reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word')
        gsap.from(words, {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
        })
      }

      // Subline fade in
      gsap.from(sublineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      })

      // CTA buttons
      gsap.from(ctaRef.current?.children || [], {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.8,
        ease: 'back.out(1.7)',
      })

      // Image reveal with parallax
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
      })

      // Parallax scroll effect
      gsap.to(imageRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const { theme } = useTheme()

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex items-center overflow-hidden pt-20 ${
        theme === 'sunset'
          ? 'bg-gradient-to-br from-cream via-soft-peach to-cream'
          : 'bg-gradient-to-br from-sage via-mint to-sage'
      }`}
    >
      {/* Enhanced Decorative Elements */}
      <div className={`absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse ${
        theme === 'sunset' ? 'bg-coral-red/20' : 'bg-forest-green/20'
      }`} />
      <div className={`absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse ${
        theme === 'sunset' ? 'bg-sunset-orange/20' : 'bg-emerald/20'
      }`} style={{ animationDelay: '1s' }} />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full ${
          theme === 'sunset' ? 'bg-coral-red/40' : 'bg-forest-green/40'
        } animate-bounce`} style={{ animationDelay: '0.5s' }} />
        <div className={`absolute top-1/3 right-1/3 w-3 h-3 rounded-full ${
          theme === 'sunset' ? 'bg-sunset-orange/40' : 'bg-emerald/40'
        } animate-bounce`} style={{ animationDelay: '1.5s' }} />
        <div className={`absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full ${
          theme === 'sunset' ? 'bg-golden-yellow/40' : 'bg-amber/40'
        } animate-bounce`} style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Headline with word-by-word reveal */}
            <h1
              ref={headlineRef}
              className={`text-6xl lg:text-7xl xl:text-8xl font-black leading-tight ${
                theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
              }`}
              style={{ perspective: '1000px' }}
            >
              <span className="word inline-block mr-4">Build</span>
              <span className="word inline-block mr-4">The</span>
              <br />
              <span className={`word inline-block mr-4 bg-gradient-to-r ${
                theme === 'sunset'
                  ? 'from-coral-red to-sunset-orange'
                  : 'from-forest-green to-emerald'
              } bg-clip-text text-transparent`}>
                Future
              </span>
              <br />
              <span className="word inline-block mr-4">With</span>
              <span className="word inline-block">Us</span>
            </h1>

            {/* Subline */}
            <p
              ref={sublineRef}
              className="text-xl lg:text-2xl text-gray-700 max-w-xl leading-relaxed"
            >
              We transform businesses through innovative technology solutions. 
              From AI automation to custom software, we're your partner in digital excellence.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className={`group px-8 py-4 bg-gradient-to-r ${
                  theme === 'sunset'
                    ? 'from-coral-red to-sunset-orange hover:shadow-glow-coral'
                    : 'from-forest-green to-emerald hover:shadow-glow-green'
                } text-white font-bold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105`}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className={`group px-8 py-4 bg-white border-2 ${
                  theme === 'sunset'
                    ? 'border-coral-red text-coral-red hover:bg-coral-red'
                    : 'border-forest-green text-forest-green hover:bg-forest-green'
                } font-bold rounded-full hover:text-white transition-all duration-300 flex items-center gap-2`}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-300">
              <div>
                <div className={`text-4xl font-black ${
                  theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
                }`}>500+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className={`text-4xl font-black ${
                  theme === 'sunset' ? 'text-sunset-orange' : 'text-emerald'
                }`}>98%</div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div>
                <div className={`text-4xl font-black ${
                  theme === 'sunset' ? 'text-golden-yellow' : 'text-amber'
                }`}>10+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right: Lottie Animation - SIGNIFICANTLY INCREASED SIZE */}
          <div ref={imageRef} className="relative lg:-mr-20 xl:-mr-32">
            {/* Glow effect behind animation */}
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${
              theme === 'sunset' ? 'bg-coral-red' : 'bg-forest-green'
            }`} />

            {/* Animation Container - MUCH LARGER - Almost Full Width */}
            <div className="relative w-full mx-auto" style={{ maxWidth: '800px' }}>
              <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json"
                style={{ width: '100%', height: '100%', minHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

