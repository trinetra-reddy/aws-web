'use client'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useRef, useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { industriesData } from '../data/IndustriesData'

export default function IndustryGrid({ items, className = '' }: any) {
  const [activeIndex, setActiveIndex] = useState(0)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="py-14 bg-blue-50 relative font-sans container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#1d3a70]">Industries We Serve</h2>

      <div className="relative  mx-auto  md:px-10 overflow-hidden">
        {/* Navigation Buttons */}
        <button
          ref={prevRef as any}
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-blue-100 w-10 h-10 flex items-center justify-center"
        >
          <ChevronLeft className="text-[#1d3a70]" />
        </button>
        <button
          ref={nextRef as any}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-blue-100 w-10 h-10 flex items-center justify-center"
        >
          <ChevronRight className="text-[#1d3a70]" />
        </button>
        <Swiper
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          speed={600}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Autoplay]}
          className="!overflow-visible"
        >
          {industriesData.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <motion.div
                animate={{
                  scale: activeIndex === idx ? 1 : 0.97,
                  boxShadow: activeIndex === idx
                    ? '0 8px 30px rgba(29, 58, 112, 0.15)'
                    : '0 1px 6px rgba(0, 0, 0, 0.05)',
                  zIndex: activeIndex === idx ? 10 : 1
                }}
                transition={{ duration: 0.4 }}
                className={`bg-white rounded-2xl text-center px-6 py-8 md:p-10 transition-all duration-300 cursor-pointer
                    border ${activeIndex === idx ? 'border-[#2f63b4] ring-2 ring-[#c6dbf9]' : 'border-blue-100'}
                    flex flex-col justify-between h-full`}>
                <div className="mb-6 flex justify-center h-[200px] overflow-hidden">
                  {/* {item.icon} */}
                  <Image src={item.image ?? ''} alt={item.alt ?? ''} width={600} height={400} className={item.className ?? ''} />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <h3 className="text-xl font-bold mb-2 text-[#1d3a70]">{item.label}</h3>
                  <p className="text-[16px] text-black leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
