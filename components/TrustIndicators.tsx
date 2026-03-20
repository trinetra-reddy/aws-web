'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Award, Users, Rocket, Target } from 'lucide-react'

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration, hasAnimated])

  return { count, ref }
}

export default function TrustIndicators() {
  const stats = [
    { icon: Rocket, value: 500, suffix: '+', label: 'Projects Delivered', color: 'text-electric-blue' },
    { icon: Users, value: 98, suffix: '%', label: 'Client Satisfaction', color: 'text-neural-green' },
    { icon: Target, value: 50, suffix: '+', label: 'AI Solutions Deployed', color: 'text-cyber-purple' },
    { icon: Award, value: 10, suffix: '+', label: 'Years Experience', color: 'text-accent-orange' },
  ]

  return (
    <section className="section-padding bg-soft-white">
      <div className="container-custom">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const { count, ref } = useCounter(stat.value)
            const Icon = stat.icon
            
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-extrabold mb-2 ${stat.color}`}>
                  {count}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8 font-semibold">
            Trusted by Leading Companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {/* Featured Client Projects */}
            <motion.a
              href="https://www.onert.ai/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="px-6 py-3 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
                  Onert.ai
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://sweatoutgym.fit/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="px-6 py-3 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-neural-green to-electric-blue bg-clip-text text-transparent">
                  SweatOut Gym
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://www.iconstructions.in/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="px-6 py-3 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-accent-orange to-cyber-purple bg-clip-text text-transparent">
                  iConstructions
                </span>
              </div>
            </motion.a>

            <motion.a
              href="https://homedairy.in/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="px-6 py-3 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyber-purple to-neural-green bg-clip-text text-transparent">
                  HomeDairy
                </span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

