'use client'
import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedCaseStudies() {
  const caseStudies = [
    {
      title: 'Onert.ai',
      subtitle: 'AI-Powered Platform Development',
      description: 'Built a comprehensive AI platform that processes data 50% faster and serves 10,000+ active users.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
      url: 'https://www.onert.ai/',
      metrics: [
        { icon: Zap, label: '50% Faster', sublabel: 'Processing Speed' },
        { icon: Users, label: '10K+', sublabel: 'Active Users' },
        { icon: TrendingUp, label: '99.9%', sublabel: 'Uptime' },
      ],
      tags: ['AI/ML', 'Platform', 'Cloud'],
      gradient: 'from-electric-blue to-cyber-purple',
    },
    {
      title: 'SweatOut Gym',
      subtitle: 'Fitness Tech Transformation',
      description: 'Digital transformation solution that increased member engagement by 300% with mobile app and web platform.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80',
      url: 'https://sweatoutgym.fit/',
      metrics: [
        { icon: TrendingUp, label: '300%', sublabel: 'Engagement Increase' },
        { icon: Users, label: '5K+', sublabel: 'Members' },
        { icon: Zap, label: '4.8★', sublabel: 'App Rating' },
      ],
      tags: ['Mobile App', 'Web Platform', 'Fitness'],
      gradient: 'from-neural-green to-electric-blue',
    },
    {
      title: 'iConstructions',
      subtitle: 'Construction Management System',
      description: 'Custom software with AI scheduling that improved project completion rates by 40%.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80',
      url: 'https://www.iconstructions.in/',
      metrics: [
        { icon: TrendingUp, label: '40%', sublabel: 'Faster Completion' },
        { icon: Zap, label: 'AI-Powered', sublabel: 'Scheduling' },
        { icon: Users, label: '100+', sublabel: 'Projects Managed' },
      ],
      tags: ['Custom Software', 'AI', 'Construction'],
      gradient: 'from-accent-orange to-cyber-purple',
    },
    {
      title: 'HomeDairy',
      subtitle: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution that generated 5X revenue growth in just 6 months.',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop&q=80',
      url: 'https://homedairy.in/',
      metrics: [
        { icon: TrendingUp, label: '5X', sublabel: 'Revenue Growth' },
        { icon: Users, label: '50K+', sublabel: 'Customers' },
        { icon: Zap, label: '<2s', sublabel: 'Load Time' },
      ],
      tags: ['E-commerce', 'Full-Stack', 'Performance'],
      gradient: 'from-cyber-purple to-neural-green',
    },
  ]

  return (
    <section className="section-padding bg-white">
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
            Featured <span className="gradient-text-ai">Case Studies</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses transform with technology.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-electric-blue transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm font-semibold text-cyber-purple mb-3">
                    {study.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
                    {study.metrics.map((metric, i) => {
                      const Icon = metric.icon
                      return (
                        <div key={i} className="text-center">
                          <Icon className="w-5 h-5 text-electric-blue mx-auto mb-2" />
                          <div className="text-lg font-bold text-gray-900">{metric.label}</div>
                          <div className="text-xs text-gray-500">{metric.sublabel}</div>
                        </div>
                      )
                    })}
                  </div>

                  {/* CTA */}
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-electric-blue font-semibold group-hover:gap-4 transition-all duration-300"
                  >
                    <span>View Live Project</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

