'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { Cookie, Settings, BarChart, Shield, Globe, Trash2 } from 'lucide-react'

export default function CookiesPolicy() {
  const sections = [
    {
      icon: Cookie,
      title: 'What Are Cookies?',
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.

Cookies help us:
• Remember your preferences and settings
• Understand how you use our website
• Improve your browsing experience
• Provide personalized content
• Analyze website traffic and performance

Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.`
    },
    {
      icon: BarChart,
      title: 'Types of Cookies We Use',
      content: `We use different types of cookies on our website:

**Essential Cookies**
Required for the website to function properly. These cannot be disabled.
• Session management
• Security features
• Basic functionality

**Performance Cookies**
Help us understand how visitors interact with our website.
• Google Analytics
• Page load times
• Error tracking

**Functional Cookies**
Remember your preferences and choices.
• Language preferences
• Theme settings
• Cookie consent choices

**Marketing Cookies**
Used to deliver relevant advertisements.
• Ad targeting
• Campaign tracking
• Social media integration`
    },
    {
      icon: Settings,
      title: 'How to Manage Cookies',
      content: `You have several options to manage or delete cookies:

**Browser Settings**
Most browsers allow you to:
• Block all cookies
• Block third-party cookies only
• Delete cookies when you close the browser
• View and delete individual cookies

**Popular Browsers:**
• Chrome: Settings > Privacy and Security > Cookies
• Firefox: Options > Privacy & Security > Cookies
• Safari: Preferences > Privacy > Cookies
• Edge: Settings > Privacy > Cookies

**Our Cookie Banner**
When you first visit our site, you can:
• Accept all cookies
• Decline non-essential cookies
• Manage your preferences

Note: Blocking cookies may affect website functionality.`
    },
    {
      icon: Globe,
      title: 'Third-Party Cookies',
      content: `We use services from trusted third parties that may set cookies:

**Google Analytics**
• Tracks website usage and performance
• Helps us improve user experience
• Privacy Policy: https://policies.google.com/privacy

**Social Media Platforms**
• LinkedIn, Facebook, Twitter
• Enable social sharing features
• May track your activity across sites

**Advertising Partners**
• Deliver relevant advertisements
• Measure ad campaign effectiveness
• Subject to their own privacy policies

You can opt out of third-party cookies through:
• Browser settings
• Third-party opt-out tools
• Privacy preference centers`
    },
    {
      icon: Shield,
      title: 'Cookie Security',
      content: `We take cookie security seriously:

**Our Practices:**
• Use secure, encrypted cookies where possible
• Regularly review and update cookie usage
• Limit data collection to necessary information
• Comply with privacy regulations (GDPR, CCPA)
• Partner only with trusted third-party services

**Your Data:**
• Cookies do not contain personal information unless you provide it
• We do not sell cookie data to third parties
• Cookie data is stored securely
• You can delete cookies at any time

**Transparency:**
• We clearly disclose our cookie usage
• You have control over cookie preferences
• We respect your privacy choices`
    },
    {
      icon: Trash2,
      title: 'Deleting Cookies',
      content: `To delete cookies from your device:

**Desktop Browsers:**
1. Open browser settings/preferences
2. Navigate to Privacy or Security section
3. Find "Clear browsing data" or "Cookies"
4. Select time range (all time recommended)
5. Check "Cookies and site data"
6. Click "Clear data" or "Delete"

**Mobile Browsers:**
1. Open browser app settings
2. Find Privacy or Advanced settings
3. Select "Clear browsing data"
4. Choose "Cookies and site data"
5. Confirm deletion

**Important Notes:**
• Deleting cookies will log you out of websites
• Your preferences will be reset
• You may need to accept cookies again
• Some website features may not work properly

You can also use browser extensions or privacy tools to manage cookies automatically.`
    }
  ]

  return (
    <>
      <Head>
        <title>Cookie Policy | Anantha Web Solutions</title>
        <meta name="description" content="Learn about how Anantha Web Solutions uses cookies and how you can manage them." />
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
              <Cookie className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Cookie <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Learn about how we use cookies to improve your browsing experience and how you can manage your preferences.
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
              At <strong className="text-blue-600">Anantha Web Solutions</strong>, we use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and deliver personalized content.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences. By using our website, you consent to our use of cookies in accordance with this policy.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us.
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
