'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function EcommerceAnimation() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Shopping cart animation
      gsap.from('.cart', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      })

      // Products falling into cart
      gsap.from('.product', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'bounce.out'
      })

      // Cart bounce
      gsap.to('.cart', {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Money/coins animation
      gsap.to('.coin', {
        y: 10,
        rotation: 360,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Credit card swipe
      gsap.to('.card', {
        x: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Shopping bag pulse
      gsap.to('.bag', {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Price tags
      gsap.to('.price-tag', {
        rotation: 5,
        duration: 1,
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shopping Cart */}
      <g className="cart" transform="translate(80, 90)">
        <path d="M 0 0 L 5 0 L 8 20 L 32 20 L 35 5 L 10 5"
              stroke="#059669" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="25" r="2" fill="#059669" />
        <circle cx="28" cy="25" r="2" fill="#059669" />
        <rect x="10" y="8" width="22" height="10" fill="#059669" opacity="0.2" rx="2" />
      </g>

      {/* Products in cart */}
      <g className="product" transform="translate(90, 95)">
        <rect x="0" y="0" width="8" height="8" fill="#10b981" rx="1" />
      </g>
      <g className="product" transform="translate(100, 95)">
        <rect x="0" y="0" width="8" height="8" fill="#34d399" rx="1" />
      </g>
      <g className="product" transform="translate(95, 87)">
        <rect x="0" y="0" width="8" height="8" fill="#6ee7b7" rx="1" />
      </g>

      {/* Shopping Bag */}
      <g className="bag" transform="translate(40, 60)">
        <rect x="0" y="5" width="25" height="30" fill="#059669" opacity="0.3" rx="2" />
        <path d="M 5 5 Q 12.5 0 20 5" stroke="#059669" strokeWidth="2" fill="none" />
        <line x1="8" y1="12" x2="8" y2="28" stroke="#10b981" strokeWidth="2" />
        <line x1="17" y1="12" x2="17" y2="28" stroke="#10b981" strokeWidth="2" />
      </g>

      {/* Credit Card */}
      <g className="card" transform="translate(130, 60)">
        <rect x="0" y="0" width="35" height="22" fill="#059669" rx="3" />
        <rect x="0" y="5" width="35" height="5" fill="#047857" />
        <rect x="5" y="14" width="15" height="3" fill="white" opacity="0.8" rx="1" />
        <circle cx="28" cy="15" r="3" fill="#fbbf24" opacity="0.8" />
      </g>

      {/* Coins */}
      <g className="coin" transform="translate(50, 120)">
        <circle cx="0" cy="0" r="6" fill="#fbbf24" />
        <text x="-3" y="3" fill="#f59e0b" fontSize="8" fontWeight="bold">$</text>
      </g>
      <g className="coin" transform="translate(150, 130)">
        <circle cx="0" cy="0" r="6" fill="#fbbf24" />
        <text x="-3" y="3" fill="#f59e0b" fontSize="8" fontWeight="bold">$</text>
      </g>

      {/* Price Tags */}
      <g className="price-tag" transform="translate(30, 30)">
        <path d="M 0 0 L 15 0 L 20 7.5 L 15 15 L 0 15 Z" fill="#10b981" />
        <circle cx="5" cy="7.5" r="2" fill="white" />
        <text x="8" y="10" fill="white" fontSize="6" fontWeight="bold">%</text>
      </g>
      <g className="price-tag" transform="translate(155, 35)">
        <path d="M 0 0 L 15 0 L 20 7.5 L 15 15 L 0 15 Z" fill="#34d399" />
        <circle cx="5" cy="7.5" r="2" fill="white" />
        <text x="8" y="10" fill="white" fontSize="6" fontWeight="bold">%</text>
      </g>

      {/* Decorative elements */}
      <circle cx="170" cy="150" r="3" fill="#10b981" opacity="0.4" />
      <circle cx="30" cy="160" r="4" fill="#34d399" opacity="0.4" />
      <circle cx="180" cy="40" r="3" fill="#6ee7b7" opacity="0.4" />
    </svg>
  )
}

