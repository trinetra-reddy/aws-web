'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Player } from '@lottiefiles/react-lottie-player'
import { useTheme } from '../context/ThemeContext'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AnimatedStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, solutions: 0, years: 0 })

  const stats = [
    {
      key: 'projects',
      end: 500,
      suffix: '+',
      label: 'Projects Delivered',
      lottie: 'https://assets2.lottiefiles.com/packages/lf20_touohxv0.json', // Rocket
    },
    {
      key: 'satisfaction',
      end: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      lottie: 'https://assets9.lottiefiles.com/packages/lf20_5tl1xxnz.json', // Heart
    },
    {
      key: 'solutions',
      end: 50,
      suffix: '+',
      label: 'AI Solutions Deployed',
      lottie: 'https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json', // Brain
    },
    {
      key: 'years',
      end: 10,
      suffix: '+',
      label: 'Years Experience',
      lottie: 'https://assets10.lottiefiles.com/packages/lf20_myejiggj.json', // Trophy
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats on scroll
      stats.forEach((stat, index) => {
        const element = `.stat-${index}`
        
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            onEnter: () => {
              // Animate counter
              let current = 0
              const increment = stat.end / 60 // 60 frames
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.end) {
                  current = stat.end
                  clearInterval(timer)
                }
                setCounts(prev => ({ ...prev, [stat.key]: Math.floor(current) }))
              }, 16) // ~60fps
            },
          },
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-32 ${
        theme === 'sunset' 
          ? 'bg-gradient-to-br from-soft-peach to-cream' 
          : 'bg-gradient-to-br from-sage to-mint'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
          }`}>
            Proven <span className={`bg-gradient-to-r ${
              theme === 'sunset' 
                ? 'from-coral-red to-sunset-orange' 
                : 'from-forest-green to-emerald'
            } bg-clip-text text-transparent`}>Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak louder than words
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-${index} text-center group`}
            >
              {/* Lottie Animation */}
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 group-hover:scale-110 transition-transform duration-300">
                  <Player
                    autoplay
                    loop
                    src={stat.lottie}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>

              {/* Number */}
              <div className={`text-6xl font-black mb-3 bg-gradient-to-r ${
                theme === 'sunset' 
                  ? 'from-coral-red to-sunset-orange' 
                  : 'from-forest-green to-emerald'
              } bg-clip-text text-transparent`}>
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>

              {/* Label */}
              <div className={`text-lg font-semibold ${
                theme === 'sunset' ? 'text-gray-700' : 'text-gray-800'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

