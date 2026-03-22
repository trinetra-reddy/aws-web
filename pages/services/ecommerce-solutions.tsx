'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { ShoppingCart, Zap, Shield, CreditCard, Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

export default function EcommerceSolutions() {
  const features = [
    { icon: ShoppingCart, title: 'Custom Online Stores', description: 'Tailored e-commerce platforms built to match your brand and business needs' },
    { icon: CreditCard, title: 'Payment Integration', description: 'Secure payment gateways supporting multiple payment methods and currencies' },
    { icon: Shield, title: 'Secure Transactions', description: 'PCI-compliant security with SSL encryption and fraud protection' },
    { icon: Globe, title: 'Multi-Channel Selling', description: 'Sell across web, mobile, social media, and marketplaces' },
    { icon: Zap, title: 'Fast Performance', description: 'Lightning-fast page loads for better conversion rates' },
    { icon: TrendingUp, title: 'Analytics & Insights', description: 'Comprehensive reporting and analytics to track sales and customer behavior' }
  ]

  const technologies = [
    { name: 'Shopify', category: 'Platform' },
    { name: 'WooCommerce', category: 'Platform' },
    { name: 'Magento', category: 'Platform' },
    { name: 'Stripe', category: 'Payment' },
    { name: 'PayPal', category: 'Payment' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' }
  ]

  const benefits = [
    'Custom e-commerce development',
    'Mobile-responsive design',
    'Secure payment processing',
    'Inventory management',
    'Order tracking system',
    'Customer account management',
    'SEO optimization',
    'Marketing tools integration',
    'Multi-currency support',
    'Analytics and reporting'
  ]

  return (
    <>
      <Head>
        <title>E-commerce Solutions | Anantha Web Solutions</title>
        <meta name="description" content="Professional e-commerce development services. Custom online stores with Shopify, WooCommerce, and Magento." />
      </Head>
      <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
            <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">E-commerce Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                E-commerce Development <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Build powerful online stores that drive sales and deliver exceptional shopping experiences. From custom platforms to Shopify and WooCommerce solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-300 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="features" className="py-20 md:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Why Choose Our E-commerce Services?</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-blue-200 transform hover:-translate-y-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 text-center border-2 border-slate-100 hover:border-blue-300 transition-all duration-300 hover:scale-105" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                  <div className="text-2xl font-bold text-slate-900 mb-2">{tech.name}</div>
                  <div className="text-sm text-slate-600">{tech.category}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Benefits of Working With Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Launch Your Store?</h3>
                <p className="text-xl text-white/90 mb-8">Let's build an e-commerce platform that drives sales and growth.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
