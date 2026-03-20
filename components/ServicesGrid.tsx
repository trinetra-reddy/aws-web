'use client'
import { motion } from 'framer-motion'
import { Bot, Code, Smartphone, Package, Palette, Cloud, TrendingUp, Headphones, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function ServicesGrid() {
  const services = [
    {
      icon: Bot,
      title: 'AI & Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      gradient: 'from-electric-blue to-cyber-purple',
      featured: true,
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for maximum performance.',
      gradient: 'from-cyber-purple to-electric-blue',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences.',
      gradient: 'from-neural-green to-electric-blue',
    },
    {
      icon: Package,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with AI-powered recommendations and seamless checkout.',
      gradient: 'from-accent-orange to-cyber-purple',
    },
    {
      icon: Sparkles,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your unique business needs.',
      gradient: 'from-electric-blue to-neural-green',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love and that drive conversions.',
      gradient: 'from-cyber-purple to-neural-green',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment pipelines.',
      gradient: 'from-electric-blue to-accent-orange',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that generate leads and grow your business.',
      gradient: 'from-neural-green to-cyber-purple',
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: '24/7 support and proactive maintenance to keep your systems running smoothly.',
      gradient: 'from-accent-orange to-electric-blue',
    },
  ]

  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Our <span className="gradient-text-ai">Services</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Comprehensive technology solutions powered by AI and delivered by experts
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                  <div className={`relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-electric-blue/20 ${
                    service.featured ? 'ring-2 ring-electric-blue/50' : ''
                  }`}>
                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full text-white text-xs font-bold shadow-lg">
                        ⭐ Featured
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-electric-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-electric-blue font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>

                    {/* Hover Gradient Border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

