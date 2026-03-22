'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { Shield, Lock, Eye, UserCheck, Database, Globe } from 'lucide-react'

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:

• Personal information (name, email, phone number) when you contact us or request our services
• Business information when you inquire about our solutions
• Technical information (IP address, browser type, device information) automatically collected when you visit our website
• Cookies and similar tracking technologies to enhance your browsing experience`
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Respond to your inquiries and provide customer support
• Send you technical notices, updates, and marketing communications
• Analyze usage patterns and optimize our website performance
• Protect against fraudulent or illegal activity
• Comply with legal obligations`
    },
    {
      icon: Database,
      title: 'Data Storage and Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information:

• Secure servers with encryption
• Regular security audits and updates
• Access controls and authentication
• Data backup and recovery procedures
• Employee training on data protection
• Compliance with industry standards`
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: `We do not sell your personal information. We may share your information with:

• Service providers who assist in our operations (hosting, analytics, email services)
• Professional advisors (lawyers, accountants, auditors)
• Law enforcement or regulatory authorities when required by law
• Business partners with your explicit consent
• Affiliated companies within our corporate group`
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: `You have the right to:

• Access your personal information
• Correct inaccurate or incomplete data
• Request deletion of your data
• Object to processing of your information
• Withdraw consent at any time
• Lodge a complaint with a supervisory authority
• Request data portability`
    },
    {
      icon: Globe,
      title: 'International Data Transfers',
      content: `We operate globally with offices in India, Canada, and USA. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy and applicable laws.`
    }
  ]

  return (
    <>
      <Head>
        <title>Privacy Policy | Anantha Web Solutions</title>
        <meta name="description" content="Learn how Anantha Web Solutions collects, uses, and protects your personal information." />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-20 pb-20">
        <div className="container mx-auto px-6 lg:px-12 pt-20">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-full mb-6">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Privacy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last Updated: March 22, 2026
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border-2 border-slate-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At <strong className="text-blue-600">Anantha Web Solutions</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-2 border-slate-100 hover:border-blue-200 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">{section.title}</h2>
                </div>
                <div className="text-slate-700 leading-relaxed whitespace-pre-line pl-0 md:pl-18">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>




          {/* Contact Section */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="mailto:account@ananthawebsolutions.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}