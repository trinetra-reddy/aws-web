// pages/services.tsx
import Image from 'next/image'
import { MonitorSmartphone, Smartphone, UserCog } from 'lucide-react'

export default function Services() {
    return (
        <main className="w-full max-w-6xl mx-auto px-4 py-10">
            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-10 mb-12">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h1>
                    <p className="text-gray-600 mb-6">
                        We help companies build scalable solutions through custom software, design, and strategy.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Mateo Us</button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">Section Work</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src="/assets/services-hero-formatted.png"
                        alt="Service Illustration"
                        width={1200}
                        height={900}
                    />

                </div>
            </section>

            {/* What We Do Section */}
            <section>
                <h2 className="text-2xl font-semibold text-center mb-8">What We Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="p-6 border rounded text-center shadow-sm">
                        <MonitorSmartphone size={32} className="mx-auto mb-4 text-blue-600" />
                        <h4 className="text-lg font-bold mb-1">Web Applications</h4>
                        <p className="text-sm text-gray-500">Custom scalable web apps using modern tech.</p>
                    </div>
                    <div className="p-6 border rounded text-center shadow-sm">
                        <Smartphone size={32} className="mx-auto mb-4 text-purple-600" />
                        <h4 className="text-lg font-bold mb-1">Mobile Apps</h4>
                        <p className="text-sm text-gray-500">Android and iOS solutions for any use case.</p>
                    </div>
                    <div className="p-6 border rounded text-center shadow-sm">
                        <UserCog size={32} className="mx-auto mb-4 text-green-600" />
                        <h4 className="text-lg font-bold mb-1">Consulting</h4>
                        <p className="text-sm text-gray-500">Tech strategy, audit, and optimization support.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
