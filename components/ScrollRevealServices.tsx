'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useTheme } from '../context/ThemeContext'
import AIAutomationAnimation from './animations/AIAutomationAnimation'
import WebDevelopmentAnimation from './animations/WebDevelopmentAnimation'
import MobileAppAnimation from './animations/MobileAppAnimation'
import CloudSolutionsAnimation from './animations/CloudSolutionsAnimation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollRevealServices() {
  const sectionRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()

  const services = [
    {
      animation: AIAutomationAnimation,
      title: 'AI & Automation',
      desc: 'Transform your business with intelligent systems powered by machine learning and AI. We build custom automation solutions that reduce costs, improve efficiency, and unlock new opportunities for growth through predictive analytics and smart decision-making.',
      gradient: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-600',
      hoverBg: 'hover:bg-purple-600'
    },
    {
      animation: WebDevelopmentAnimation,
      title: 'Web Development',
      desc: 'Build powerful, scalable web applications with cutting-edge technologies. From responsive websites to complex web platforms, we create fast, secure, and user-friendly solutions that drive engagement and deliver exceptional performance across all devices.',
      gradient: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      hoverBg: 'hover:bg-blue-600'
    },
    {
      animation: MobileAppAnimation,
      title: 'Mobile Apps',
      desc: 'Create stunning native and cross-platform mobile applications for iOS and Android. We design intuitive user experiences and build robust apps that engage users, drive retention, and help your business reach customers wherever they are.',
      gradient: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-500/10',
      textColor: 'text-green-600',
      borderColor: 'border-green-600',
      hoverBg: 'hover:bg-green-600'
    },
    {
      animation: CloudSolutionsAnimation,
      title: 'Cloud Solutions',
      desc: 'Leverage the power of cloud computing to scale your business efficiently. We provide comprehensive cloud architecture, migration, and management services using AWS, Azure, and Google Cloud to ensure reliability, security, and cost-effectiveness.',
      gradient: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-500/10',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-600',
      hoverBg: 'hover:bg-orange-600'
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Service items - one by one reveal
      services.forEach((_, index) => {
        const item = `.service-item-${index}`
        
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          rotation: index % 2 === 0 ? -5 : 5,
          duration: 1,
          ease: 'power3.out',
        })

        // Icon rotation on scroll
        gsap.to(`${item} .service-icon`, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
          rotation: 360,
          ease: 'none',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={`relative py-32 overflow-hidden ${
      theme === 'sunset'
        ? 'bg-gradient-to-br from-cream via-white to-soft-peach'
        : 'bg-gradient-to-br from-white via-mint/30 to-sage/50'
    }`}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="section-title text-center mb-24">
          <h2 className={`text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
          }`}>
            What We <span className={`bg-gradient-to-r ${
              theme === 'sunset'
                ? 'from-coral-red to-sunset-orange'
                : 'from-forest-green to-emerald'
            } bg-clip-text text-transparent`}>Create</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology solutions that drive real business results
          </p>
        </div>

        {/* Services - Modern Card Layout with Animated Illustrations */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const AnimationComponent = service.animation
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`service-item-${index} group`}
              >
                {/* Card with subtle background */}
                <div className={`relative p-8 lg:p-12 rounded-3xl bg-white/40 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:bg-white/60`}>
                  <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Animated Illustration Side */}
                    <div className="flex-shrink-0">
                      <div className={`service-icon relative w-48 h-48 lg:w-56 lg:h-56 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 p-6`}>
                        <div className="w-full h-full">
                          <AnimationComponent />
                        </div>

                        {/* Small number badge - subtle */}
                        <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                          <span className={`text-xl font-black ${service.textColor}`}>{index + 1}</span>
                        </div>

                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />
                      </div>
                    </div>

                    {/* Content Side - Better Alignment */}
                    <div className={`flex-1 text-center lg:text-left`}>
                      <h3 className={`text-3xl lg:text-4xl font-black mb-4 ${
                        theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 max-w-2xl">
                        {service.desc}
                      </p>
                      <button className={`inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 ${service.borderColor} ${service.textColor} font-bold ${service.hoverBg} hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group/btn`}>
                        Learn More
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

