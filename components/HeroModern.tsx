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
      // Enhanced Headline animation - split reveal with 3D effect
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word')

        // Create a timeline for coordinated animations
        const headlineTimeline = gsap.timeline()

        headlineTimeline.from(words, {
          y: 150,
          opacity: 0,
          rotateX: -90,
          rotateY: 20,
          scale: 0.5,
          stagger: {
            each: 0.12,
            ease: 'power2.out'
          },
          duration: 1.2,
          ease: 'power4.out',
          transformOrigin: 'center bottom',
        })

        // Add subtle bounce to each word after reveal
        words.forEach((word, index) => {
          gsap.to(word, {
            y: -10,
            duration: 0.6,
            delay: 1.5 + (index * 0.1),
            ease: 'power2.out',
            yoyo: true,
            repeat: 1,
          })
        })
      }

      // Enhanced Subline with character reveal
      if (sublineRef.current) {
        gsap.from(sublineRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          delay: 0.6,
          ease: 'power3.out',
        })

        // Add subtle scale animation
        gsap.from(sublineRef.current, {
          scale: 0.95,
          duration: 1,
          delay: 0.7,
          ease: 'back.out(1.5)',
        })
      }

      // Enhanced CTA buttons with magnetic effect
      if (ctaRef.current) {
        const buttons = ctaRef.current.children

        gsap.from(buttons, {
          y: 50,
          opacity: 0,
          scale: 0.8,
          stagger: 0.15,
          duration: 1,
          delay: 1,
          ease: 'elastic.out(1, 0.5)',
        })

        // Add floating animation to buttons
        Array.from(buttons).forEach((button, index) => {
          gsap.to(button, {
            y: -5,
            duration: 2,
            delay: 2 + (index * 0.2),
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          })
        })
      }

      // Enhanced Image reveal with rotation and scale
      gsap.from(imageRef.current, {
        scale: 0.6,
        opacity: 0,
        rotation: -10,
        duration: 1.5,
        delay: 0.4,
        ease: 'power4.out',
      })

      // Parallax scroll effect with rotation
      gsap.to(imageRef.current, {
        y: 100,
        rotation: 5,
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
            {/* AI Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              theme === 'sunset'
                ? 'bg-coral-red/10 border border-coral-red/30'
                : 'bg-forest-green/10 border border-forest-green/30'
            } backdrop-blur-sm mb-4`}>
              <div className={`w-2 h-2 rounded-full ${
                theme === 'sunset' ? 'bg-coral-red' : 'bg-forest-green'
              } animate-pulse`} />
              <span className={`text-sm font-bold ${
                theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
              }`}>
                AI-Powered Solutions
              </span>
            </div>

            {/* Headline with word-by-word reveal */}
            <h1
              ref={headlineRef}
              className={`text-5xl lg:text-6xl xl:text-7xl font-black leading-tight ${
                theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
              }`}
              style={{ perspective: '1000px' }}
            >
              <span className="word inline-block mr-4">Transform</span>
              <span className="word inline-block mr-4">Your</span>
              <br />
              <span className="word inline-block mr-4">Business</span>
              <span className="word inline-block mr-4">With</span>
              <br />
              <span className={`word inline-block mr-4 bg-gradient-to-r ${
                theme === 'sunset'
                  ? 'from-coral-red via-sunset-orange to-golden-yellow'
                  : 'from-forest-green via-emerald to-amber'
              } bg-clip-text text-transparent`}>
                AI Intelligence
              </span>
            </h1>

            {/* Subline */}
            <p
              ref={sublineRef}
              className="text-xl lg:text-2xl text-gray-700 max-w-xl leading-relaxed"
            >
              We build intelligent systems powered by <strong>machine learning and AI</strong> that drive growth,
              reduce costs, and create competitive advantages through automation and predictive analytics.
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
                Explore AI Solutions
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
                See AI in Action
              </Link>
            </div>
          </div>

          {/* Right: AI-Focused Lottie Animation */}
          <div ref={imageRef} className="relative lg:-mr-20 xl:-mr-32">
            {/* Glow effect behind animation */}
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${
              theme === 'sunset' ? 'bg-coral-red' : 'bg-forest-green'
            }`} />

            {/* Animation Container - AI Development/Coding Animation */}
            <div className="relative w-full mx-auto" style={{ maxWidth: '800px' }}>
              <Player
                autoplay
                loop
                src="/assets/animations/ai-coding.json"
                style={{ width: '100%', height: '100%', minHeight: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

