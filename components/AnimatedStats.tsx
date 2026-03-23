'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import dynamic from 'next/dynamic'
import { useTheme } from '../context/ThemeContext'

// Dynamic import for Lottie Player to avoid SSR issues
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
)

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
      end: 50,
      suffix: '+',
      label: 'AI Projects Delivered',
      lottie: '/assets/animations/rocket.json', // Rocket
    },
    {
      key: 'satisfaction',
      end: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      lottie: '/assets/animations/heart.json', // Heart
    },
    {
      key: 'solutions',
      end: 5,
      suffix: '+',
      label: 'AI Solutions Deployed',
      lottie: '/assets/animations/brain.json', // Brain
    },
    {
      key: 'years',
      end: 10,
      suffix: '+',
      label: 'Years in Development',
      lottie: '/assets/animations/trophy.json', // Trophy
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
          <h2 className={`stats-title text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
          }`}>
            AI-Powered <span className={`bg-gradient-to-r ${
              theme === 'sunset'
                ? 'from-coral-red to-sunset-orange'
                : 'from-forest-green to-emerald'
            } bg-clip-text text-transparent`}>Excellence</span>
          </h2>
          <p className="stats-subtitle text-xl text-gray-600 max-w-2xl mx-auto">
            Building intelligent solutions that transform businesses
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-${index} text-center group cursor-pointer`}
              style={{ perspective: '1000px' }}
            >
              {/* Lottie Animation */}
              <div className="mb-6 flex justify-center">
                <div className="stat-lottie w-32 h-32 group-hover:scale-125 transition-transform duration-500">
                  <Player
                    autoplay
                    loop
                    src={stat.lottie}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>

              {/* Number */}
              <div className={`stat-number text-6xl font-black mb-3 bg-gradient-to-r ${
                theme === 'sunset'
                  ? 'from-coral-red to-sunset-orange'
                  : 'from-forest-green to-emerald'
              } bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {counts[stat.key as keyof typeof counts]}{stat.suffix}
              </div>

              {/* Label */}
              <div className={`stat-label text-lg font-semibold ${
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

