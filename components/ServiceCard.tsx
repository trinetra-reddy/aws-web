'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCardProps {
  service: {
    title: string
    image: string
    desc: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      className="text-center"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Image
        src={service.image}
        alt={service.title}
        width={400}
        height={250}
        className="rounded-lg mx-auto mb-4 object-cover"
      />
      <h3 className="text-[20px] text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-[16px] leading-relaxed max-w-[90%] mx-auto text-black">
        {service.desc}
      </p>
    </motion.div>
  )
}
