'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import Image from 'next/image'

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
      gradient: 'from-purple-50 via-blue-50 to-indigo-50',
      borderGradient: 'from-purple-400 to-blue-500',
      logo: '/assets/client-logos/oneRT.png',
    },
    {
      title: 'SweatOut Gym',
      subtitle: 'Fitness Tech',
      description: '300% engagement increase, 5K+ members, 4.8★ rating',
      url: 'https://sweatoutgym.fit/',
      gradient: 'from-orange-50 via-red-50 to-pink-50',
      borderGradient: 'from-orange-400 to-red-500',
      logo: '/assets/client-logos/sweatout-logo.png',
    },
    {
      title: 'iConstructions',
      subtitle: 'PropTech',
      description: '40% faster completion, AI scheduling, 100+ projects',
      url: 'https://www.iconstructions.in/',
      gradient: 'from-amber-50 via-yellow-50 to-orange-50',
      borderGradient: 'from-amber-400 to-orange-500',
      logo: '/assets/client-logos/iconstructions.jpg',
    },
    {
      title: 'HomeDairy',
      subtitle: 'E-commerce',
      description: '5X revenue growth, 50K+ customers, <2s load time',
      url: 'https://homedairy.in/',
      gradient: 'from-emerald-50 via-teal-50 to-cyan-50',
      borderGradient: 'from-emerald-400 to-teal-500',
      logo: '/assets/client-logos/home-dairy.png',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with split effect
      gsap.from('.projects-title h2', {
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.projects-title p', {
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })

      // Sequential card animations - one by one reveal
      const cards = gsap.utils.toArray('.project-card')

      cards.forEach((card: any, index) => {
        // Main card animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%',
          },
          scale: 0.8,
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2, // Stagger delay for sequential appearance
          ease: 'back.out(1.4)',
        })

        // Logo animation
        // gsap.from(card.querySelector('.project-logo'), {
        //   scrollTrigger: {
        //     trigger: '.projects-grid',
        //     start: 'top 70%',
        //   },
        //   scale: 0,
        //   rotation: -180,
        //   opacity: 1,
        //   duration: 0.6,
        //   delay: index * 0.2 + 0.3,
        //   ease: 'back.out(2)',
        // })

        // Content stagger animation
        gsap.from(card.querySelectorAll('.project-content > *'), {
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%',
          },
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: index * 0.2 + 0.4,
          ease: 'power2.out',
        })

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card.querySelector('.gradient-border'), {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          })
          gsap.to(card.querySelector('.project-logo'), {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card.querySelector('.gradient-border'), {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          })
          gsap.to(card.querySelector('.project-logo'), {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
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
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        {/* Title */}
        <div className="projects-title text-center">
          <h2 className={`text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
          }`}>
            Success <span className={`bg-gradient-to-r ${
              theme === 'sunset'
                ? 'from-coral-red via-sunset-orange to-golden-yellow'
                : 'from-forest-green via-emerald to-amber'
            } bg-clip-text text-transparent`}>Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've partnered with innovative companies to deliver exceptional digital solutions that drive measurable business growth and transform user experiences.
          </p>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group relative block"
          >
            {/* Gradient Border Effect */}
            <div className={`gradient-border absolute -inset-0.5 bg-gradient-to-br ${project.borderGradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />

            {/* Card Content */}
            <div className={`relative bg-gradient-to-br ${project.gradient} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full`}
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)' }}>

              <div className="relative p-8 flex flex-col h-full backdrop-blur-sm">
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.borderGradient} opacity-10 rounded-bl-full`} />

                {/* Top */}
                <div className="flex-1 project-content">
                  {/* Logo with background */}
                  <div className="project-logo mb-6 h-24 flex items-center justify-start">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={112}
                        height={64}
                        className="object-contain w-28 h-16"
                        priority
                      />
                    </div>
                  </div>

                  <h3 className={`text-2xl font-black mb-2 ${
                    theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm font-bold bg-gradient-to-r ${project.borderGradient} bg-clip-text text-transparent mb-4`}>
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className={`flex items-center gap-2 font-bold group-hover:gap-4 transition-all mt-6 bg-gradient-to-r ${project.borderGradient} bg-clip-text text-transparent`}>
                  <span>View Project</span>
                  <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
                </div>

                {/* Animated shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </a>
        ))}
        </div>
      </div>
    </section>
  )
}

