'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { FileText, CheckCircle, AlertCircle, Scale, Ban, RefreshCw } from 'lucide-react'

export default function TermsAndConditions() {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: `By accessing and using the Anantha Web Solutions website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and others who access or use our services. We reserve the right to update these terms at any time, and your continued use of our services constitutes acceptance of any changes.`
    },
    {
      icon: FileText,
      title: 'Services Description',
      content: `Anantha Web Solutions provides:

• Web development and design services
• Mobile application development
• E-commerce solutions
• UI/UX design services
• Cloud and DevOps services
• Adobe Experience Manager (AEM) solutions
• Technical support and maintenance

All services are provided subject to availability and our acceptance of your project requirements. We reserve the right to refuse service to anyone for any reason at any time.`
    },
    {
      icon: Scale,
      title: 'Intellectual Property Rights',
      content: `All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of Anantha Web Solutions and are protected by international copyright, trademark, and other intellectual property laws.

For client projects:
• Upon full payment, clients receive ownership of deliverables as specified in the project agreement
• We retain the right to showcase completed work in our portfolio unless otherwise agreed
• Any pre-existing intellectual property remains our property
• Third-party licenses and tools are subject to their respective terms`
    },
    {
      icon: AlertCircle,
      title: 'User Responsibilities',
      content: `When using our services, you agree to:

• Provide accurate and complete information
• Maintain the confidentiality of your account credentials
• Notify us immediately of any unauthorized use
• Use our services only for lawful purposes
• Not interfere with or disrupt our services
• Not attempt to gain unauthorized access to our systems
• Respect intellectual property rights
• Comply with all applicable laws and regulations`
    },
    {
      icon: Ban,
      title: 'Limitation of Liability',
      content: `To the maximum extent permitted by law:

• Our services are provided "as is" without warranties of any kind
• We are not liable for any indirect, incidental, special, or consequential damages
• Our total liability shall not exceed the amount paid for the specific service
• We are not responsible for third-party services or content
• We do not guarantee uninterrupted or error-free service
• Force majeure events are excluded from liability

Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.`
    },
    {
      icon: RefreshCw,
      title: 'Payment and Refund Policy',
      content: `Payment Terms:
• Payment schedules are defined in individual project agreements
• We accept various payment methods as specified in invoices
• Late payments may incur additional charges
• All prices are in the currency specified in the agreement

Refund Policy:
• Refunds are considered on a case-by-case basis
• Completed work is generally non-refundable
• Deposits and advance payments may be non-refundable
• Refund requests must be submitted in writing
• Processing time for approved refunds is 14-30 business days`
    }
  ]

  return (
    <>
      <Head>
        <title>Terms and Conditions | Anantha Web Solutions</title>
        <meta name="description" content="Read the terms and conditions for using Anantha Web Solutions services." />
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
              <FileText className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Terms and <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. These terms govern your use of our website and services.
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
              Welcome to <strong className="text-blue-600">Anantha Web Solutions</strong>. These Terms and Conditions outline the rules and regulations for the use of our website and services.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use Anantha Web Solutions if you do not agree to all of the terms and conditions stated on this page.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
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

