'use client'
import { motion } from 'framer-motion'
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function LeadMagnetCTA() {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with your email service/CRM
    console.log('Lead captured:', { email, company })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setCompany('')
    }, 3000)
  }

  const benefits = [
    'Identify AI opportunities in your business',
    'Get personalized recommendations',
    'Understand potential ROI',
    'No commitment required',
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-deep-space via-[#1a1f3a] to-deep-space relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF10_1px,transparent_1px),linear-gradient(to_bottom,#0066FF10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neural-green/20 border border-neural-green/30 text-neural-green mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Free AI Assessment</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Discover How AI Can Transform Your Business
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Get a personalized AI readiness assessment worth $500 - absolutely free. 
                  We'll analyze your business and identify opportunities for AI automation.
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-neural-green flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-accent group"
                    >
                      Get Free Assessment
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      No credit card required • 15-minute assessment • Instant results
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-16 h-16 bg-neural-green/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-neural-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-300">
                      We'll send your AI assessment to {email}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

