'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HorizontalScrollProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const projects = [
    {
      title: 'Onert.ai',
      subtitle: 'AI Platform',
      description: '50% faster processing, 10K+ users, 99.9% uptime',
      url: 'https://www.onert.ai/',
      gradient: 'from-coral-red to-sunset-orange',
      emoji: '🤖',
    },
    {
      title: 'SweatOut Gym',
      subtitle: 'Fitness Tech',
      description: '300% engagement increase, 5K+ members, 4.8★ rating',
      url: 'https://sweatoutgym.fit/',
      gradient: 'from-sunset-orange to-golden-yellow',
      emoji: '💪',
    },
    {
      title: 'iConstructions',
      subtitle: 'PropTech',
      description: '40% faster completion, AI scheduling, 100+ projects',
      url: 'https://www.iconstructions.in/',
      gradient: 'from-golden-yellow to-burnt-sienna',
      emoji: '🏗️',
    },
    {
      title: 'HomeDairy',
      subtitle: 'E-commerce',
      description: '5X revenue growth, 50K+ customers, <2s load time',
      url: 'https://homedairy.in/',
      gradient: 'from-burnt-sienna to-coral-red',
      emoji: '🛒',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from('.projects-title', {
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Individual card animations
      gsap.utils.toArray('.project-card').forEach((card: any, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={`relative py-32 overflow-hidden ${
      theme === 'sunset'
        ? 'bg-gradient-to-br from-soft-peach/30 via-white to-cream/50'
        : 'bg-gradient-to-br from-emerald/5 via-white to-mint/20'
    }`}>
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        {/* Title */}
        <div className="projects-title text-center">
          <h2 className={`text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
          }`}>
            Our <span className={`bg-gradient-to-r ${
              theme === 'sunset'
                ? 'from-coral-red to-golden-yellow'
                : 'from-forest-green to-amber'
            } bg-clip-text text-transparent`}>Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses transform.
          </p>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card group rounded-3xl bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-transparent ${
              theme === 'sunset' ? 'hover:border-coral-red/20' : 'hover:border-forest-green/20'
            }`}
          >
            {/* Card Content */}
            <div className="relative p-8 flex flex-col h-full">
              {/* Top */}
              <div className="flex-1">
                <div className="text-6xl mb-4">{project.emoji}</div>
                <h3 className={`text-2xl font-black mb-2 ${
                  theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                  {project.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom */}
              <div className={`flex items-center gap-2 font-bold group-hover:gap-4 transition-all mt-6 ${
                theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
              }`}>
                <span>View Project</span>
                <ExternalLink className="w-5 h-5" />
              </div>

              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
            </div>
          </a>
        ))}
        </div>
      </div>
    </section>
  )
}

