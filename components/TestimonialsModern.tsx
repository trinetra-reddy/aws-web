'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TestimonialsModern() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { theme } = useTheme()

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart Solutions',
      company: 'TechStart',
      quote: 'They transformed our entire digital infrastructure. The AI automation alone saved us 40% in operational costs. Absolutely phenomenal work!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Product Manager, DesignHub',
      company: 'DesignHub',
      quote: 'Working with this team was a game-changer. They understood our vision perfectly and delivered beyond expectations. The attention to detail is unmatched.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Founder, E-Commerce Plus',
      company: 'E-Commerce Plus',
      quote: 'Our revenue increased by 5X within 6 months of launching the new platform. The team\'s expertise in both technology and business is remarkable.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
      rating: 5,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section on scroll
      gsap.from('.testimonial-title', {
        scrollTrigger: {
          trigger: '.testimonial-title',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={sectionRef}
      className={`py-32 ${
        theme === 'sunset'
          ? 'bg-gradient-to-br from-cream via-soft-peach/30 to-white'
          : 'bg-gradient-to-br from-sage/40 via-mint/20 to-white'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div className="testimonial-title text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-black mb-6 ${
            theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
          }`}>
            Client <span className={`bg-gradient-to-r ${
              theme === 'sunset' 
                ? 'from-coral-red to-sunset-orange' 
                : 'from-forest-green to-emerald'
            } bg-clip-text text-transparent`}>Love</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div ref={carouselRef} className="overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === activeIndex ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className={`relative p-12 rounded-3xl ${
                  theme === 'sunset' 
                    ? 'bg-gradient-to-br from-soft-peach to-cream' 
                    : 'bg-gradient-to-br from-sage to-mint'
                } shadow-2xl`}>
                  {/* Quote Icon */}
                  <div className={`absolute top-8 left-8 w-16 h-16 rounded-full ${
                    theme === 'sunset' 
                      ? 'bg-coral-red/20' 
                      : 'bg-forest-green/20'
                  } flex items-center justify-center`}>
                    <Quote className={`w-8 h-8 ${
                      theme === 'sunset' ? 'text-coral-red' : 'text-forest-green'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="pt-16">
                    <p className={`text-2xl leading-relaxed mb-8 ${
                      theme === 'sunset' ? 'text-gray-800' : 'text-gray-900'
                    } font-medium italic`}>
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className={`text-xl font-bold ${
                          theme === 'sunset' ? 'text-deep-charcoal' : 'text-deep-navy'
                        }`}>
                          {testimonial.name}
                        </div>
                        <div className={`text-sm ${
                          theme === 'sunset' ? 'text-gray-600' : 'text-gray-700'
                        }`}>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className={`w-12 h-12 rounded-full ${
                theme === 'sunset' 
                  ? 'bg-coral-red hover:bg-sunset-orange' 
                  : 'bg-forest-green hover:bg-emerald'
              } text-white flex items-center justify-center transition-all duration-300 hover:scale-110`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className={`w-12 h-12 rounded-full ${
                theme === 'sunset' 
                  ? 'bg-coral-red hover:bg-sunset-orange' 
                  : 'bg-forest-green hover:bg-emerald'
              } text-white flex items-center justify-center transition-all duration-300 hover:scale-110`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? theme === 'sunset' 
                      ? 'bg-coral-red w-8' 
                      : 'bg-forest-green w-8'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

