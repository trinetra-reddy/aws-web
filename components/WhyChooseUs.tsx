'use client'
import { motion } from 'framer-motion'
import { Brain, Trophy, Layers, Zap, Shield, Clock, DollarSign, HeartHandshake } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Brain,
      title: 'AI Expertise',
      description: 'Certified AI engineers with deep expertise in machine learning, NLP, and computer vision.',
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
    },
    {
      icon: Trophy,
      title: 'Proven Track Record',
      description: '500+ successful projects delivered across 10+ industries with measurable results.',
      color: 'text-neural-green',
      bgColor: 'bg-neural-green/10',
    },
    {
      icon: Layers,
      title: 'Full-Stack Capability',
      description: 'End-to-end solutions from strategy and design to development and deployment.',
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
    },
    {
      icon: Zap,
      title: 'Agile Methodology',
      description: 'Fast, iterative delivery with 2-week sprints and continuous deployment.',
      color: 'text-accent-orange',
      bgColor: 'bg-accent-orange/10',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden costs. You know exactly what you\'re paying for.',
      color: 'text-neural-green',
      bgColor: 'bg-neural-green/10',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring to keep your systems running smoothly.',
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue/10',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption, compliance, and regular security audits.',
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Partnership',
      description: 'We\'re not just vendors, we\'re partners invested in your long-term success.',
      color: 'text-accent-orange',
      bgColor: 'bg-accent-orange/10',
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
            Why Choose <span className="gradient-text-ai">Anantha Web Solutions</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We combine AI expertise with proven delivery to transform your business
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-electric-blue/30">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${reason.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${reason.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-blue/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-600">
                Let's discuss how we can help transform your business with AI
              </p>
            </div>
            <a href="/contact" className="btn-primary whitespace-nowrap">
              Schedule Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

