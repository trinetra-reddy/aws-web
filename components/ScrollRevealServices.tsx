'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useTheme } from '../context/ThemeContext'
import Link from 'next/link'
import WebDevelopmentAnimation from './animations/WebDevelopmentAnimation'
import MobileAppAnimation from './animations/MobileAppAnimation'
import EcommerceAnimation from './animations/EcommerceAnimation'
import UIUXAnimation from './animations/UIUXAnimation'
import CloudSolutionsAnimation from './animations/CloudSolutionsAnimation'
import AEMAnimation from './animations/AEMAnimation'
import SupportAnimation from './animations/SupportAnimation'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ScrollRevealServices() {
  const sectionRef = useRef<HTMLElement>(null)
  const { theme } = useTheme()

  const services = [
    {
      animation: WebDevelopmentAnimation,
      title: 'Web Development',
      desc: 'Create powerful, responsive websites and web applications that deliver exceptional user experiences. From corporate websites to complex web platforms, we build scalable solutions using modern technologies like React, Next.js, and Node.js that drive engagement and business growth.',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-500',
      hoverBg: 'hover:bg-blue-600',
      link: '/services/web-development'
    },
    {
      animation: MobileAppAnimation,
      title: 'Mobile Development',
      desc: 'Build native and cross-platform mobile applications for iOS and Android that users love. We create intuitive, high-performance mobile apps with seamless functionality, beautiful interfaces, and robust architecture that keeps users engaged and coming back.',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-500',
      hoverBg: 'hover:bg-purple-600',
      link: '/services/mobile-development'
    },
    {
      animation: EcommerceAnimation,
      title: 'E-commerce Solutions',
      desc: 'Launch and scale your online store with custom e-commerce platforms that convert visitors into customers. We develop secure, feature-rich shopping experiences with payment integration, inventory management, and analytics to maximize your revenue and streamline operations.',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-500',
      hoverBg: 'hover:bg-green-600',
      link: '/services/ecommerce-solutions'
    },
    {
      animation: UIUXAnimation,
      title: 'UI/UX Design',
      desc: 'Design beautiful, user-centered interfaces that delight customers and drive results. Our design team creates intuitive user experiences through research, prototyping, and testing, ensuring every interaction is purposeful, accessible, and aligned with your brand identity.',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      borderColor: 'border-pink-500',
      hoverBg: 'hover:bg-pink-600',
      link: '/services/ui-ux-design'
    },
    {
      animation: CloudSolutionsAnimation,
      title: 'Cloud & DevOps',
      desc: 'Modernize your infrastructure with cloud solutions and DevOps practices that improve reliability and accelerate delivery. We provide cloud architecture, CI/CD pipelines, containerization, and automation on AWS, Azure, and Google Cloud to scale your business efficiently.',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-500',
      hoverBg: 'hover:bg-orange-600',
      link: '/services/cloud-devops'
    },
    {
      animation: AEMAnimation,
      title: 'Adobe Experience Manager (AEM)',
      desc: 'Build powerful enterprise content management solutions with Adobe Experience Manager. We create scalable, personalized digital experiences through custom component development, template design, workflow automation, and seamless integrations that empower your marketing teams to deliver exceptional content.',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      borderColor: 'border-red-500',
      hoverBg: 'hover:bg-red-600',
      link: '/services/adobe-experience-manager'
    },
    {
      animation: SupportAnimation,
      title: 'Support & Maintenance',
      desc: 'Keep your applications running smoothly with ongoing support and maintenance services. We provide 24/7 monitoring, regular updates, security patches, performance optimization, and technical support to ensure your digital products remain secure, fast, and reliable.',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      borderColor: 'border-indigo-500',
      hoverBg: 'hover:bg-indigo-600',
      link: '/services/support-maintenance'
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Animate each service item from bottom to top
      services.forEach((_, index) => {
        const item = `.service-item-${index}`

        // Animate content from bottom
        gsap.from(`${item} .service-content`, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })

        // Animate animation from bottom with slight delay
        gsap.from(`${item} .service-animation`, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="overflow-hidden">
      {/* Section Title */}
      <div className={`section-title text-center py-20 ${
        theme === 'sunset'
          ? 'bg-gradient-to-br from-cream via-white to-soft-peach'
          : 'bg-gradient-to-br from-white via-mint/30 to-sage/50'
      }`}>
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className={`text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
          }`}>
            What We <span className={`bg-gradient-to-r ${
              theme === 'sunset'
                ? 'from-coral-red to-sunset-orange'
                : 'from-forest-green to-emerald'
            } bg-clip-text text-transparent`}>Create</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to elevate your business and deliver exceptional results
          </p>
        </div>
      </div>

      {/* Services - Each with Different Background */}
      {services.map((service, index) => {
        const AnimationComponent = service.animation
        const isEven = index % 2 === 0

        return (
          <div
            key={index}
            className={`service-item-${index} ${service.bgColor} py-20 lg:py-24`}
          >
            <div className="container mx-auto px-6 lg:px-12">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}>
                {/* Content Side */}
                <div className="service-content flex-1 text-center lg:text-left">
                  <h3 className={`text-4xl lg:text-5xl font-black mb-6 ${
                    theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                    {service.desc}
                  </p>
                  <Link href={service.link} className={`inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 ${service.borderColor} ${service.textColor} font-bold ${service.hoverBg} hover:text-white transition-all duration-300 hover:scale-105 group`}>
                    Learn More
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Animation Side */}
                <div className="service-animation flex-1 flex items-center justify-center">
                  <div className="w-full max-w-md lg:max-w-lg h-80 lg:h-96">
                    <AnimationComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

