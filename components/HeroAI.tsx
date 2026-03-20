'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function HeroAI() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-space via-[#1a1f3a] to-deep-space">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF15_1px,transparent_1px),linear-gradient(to_bottom,#0066FF15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-electric-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyber-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-neural-green rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8"
          >
            <Sparkles className="w-4 h-4 text-neural-green" />
            <span className="text-sm font-semibold">AI-Powered Business Transformation</span>
            <Zap className="w-4 h-4 text-accent-yellow" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-electric-blue via-cyber-purple to-neural-green bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
              AI-Powered Solutions
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build intelligent systems that drive growth, reduce costs, and create competitive advantages. 
            From AI automation to custom software, we're your technology partner for the future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/contact" className="btn-primary group">
              Get Free AI Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View Our Work
              <TrendingUp className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neural-green rounded-full animate-pulse" />
              <span className="text-white font-semibold">500+</span> Projects Delivered
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-white font-semibold">98%</span> Client Satisfaction
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-white font-semibold">50+</span> AI Solutions Deployed
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-soft-white to-transparent" />
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-electric-blue rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

