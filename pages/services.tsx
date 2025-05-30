'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MonitorSmartphone, Smartphone, UserCog } from 'lucide-react'

export default function Services() {
    return (
        <main className="w-full max-w-7xl mx-auto px-20 py-20 bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Our Core Services</h1>
                    <p className="text-gray-700 mb-6 text-lg">
                        We help companies build scalable solutions through custom software, design, and strategy.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer shadow">
                            Mateo Us
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition cursor-pointer">
                            Section Work
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Image
                        src="/assets/services-hero-formatted.png"
                        alt="Service Illustration"
                        width={1200}
                        height={900}
                        className="rounded-xl shadow-md"
                    />
                </motion.div>
            </section>

            {/* What We Do Section */}
            <section>
                <motion.h2
                    className="text-3xl font-bold text-center text-blue-900 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    What We Do
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[{
                        icon: <MonitorSmartphone size={36} className="mx-auto mb-4 text-blue-600" />,
                        title: 'Web Applications',
                        desc: 'Custom scalable web apps using modern tech.'
                    }, {
                        icon: <Smartphone size={36} className="mx-auto mb-4 text-purple-600" />,
                        title: 'Mobile Apps',
                        desc: 'Android and iOS solutions for any use case.'
                    }, {
                        icon: <UserCog size={36} className="mx-auto mb-4 text-green-600" />,
                        title: 'Consulting',
                        desc: 'Tech strategy, audit, and optimization support.'
                    }].map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-6 text-center rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.15 }}
                        >
                            {item.icon}
                            <h4 className="text-lg font-semibold mb-2 text-blue-800">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    )
}