'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function UIUXAnimation() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Design tools animation
      gsap.from('.design-tool', {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      })

      // Pen tool drawing
      gsap.to('.pen-tool', {
        rotation: 15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Color palette animation
      gsap.to('.color-circle', {
        scale: 1.2,
        duration: 1,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Wireframe drawing
      gsap.from('.wireframe-line', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.5,
        stagger: 0.2,
        ease: 'power2.out'
      })

      // Cursor movement
      gsap.to('.cursor', {
        x: 20,
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Grid animation
      gsap.to('.grid-dot', {
        opacity: 0.3,
        duration: 1.5,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Artboard pulse
      gsap.to('.artboard', {
        scale: 1.02,
        duration: 2,
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
      {/* Artboard/Canvas */}
      <g className="artboard">
        <rect x="50" y="40" width="100" height="120" fill="white" rx="4" opacity="0.9" />
        <rect x="50" y="40" width="100" height="15" fill="url(#designGradient)" rx="4" />
      </g>

      {/* Grid dots background */}
      {[...Array(8)].map((_, i) => (
        [...Array(10)].map((_, j) => (
          <circle
            key={`${i}-${j}`}
            className="grid-dot"
            cx={55 + i * 12}
            cy={60 + j * 10}
            r="0.5"
            fill="#ec4899"
            opacity="0.2"
          />
        ))
      ))}

      {/* Wireframe elements */}
      <g transform="translate(60, 70)">
        <rect className="wireframe-line" x="0" y="0" width="80" height="8" fill="#ec4899" opacity="0.3" rx="2" />
        <rect className="wireframe-line" x="0" y="15" width="60" height="6" fill="#ec4899" opacity="0.3" rx="2" />
        <rect className="wireframe-line" x="0" y="25" width="70" height="6" fill="#ec4899" opacity="0.3" rx="2" />

        <rect className="wireframe-line" x="0" y="40" width="35" height="25" fill="#ec4899" opacity="0.2" rx="2" />
        <rect className="wireframe-line" x="40" y="40" width="35" height="25" fill="#ec4899" opacity="0.2" rx="2" />

        <rect className="wireframe-line" x="0" y="72" width="80" height="4" fill="#ec4899" opacity="0.3" rx="2" />
        <rect className="wireframe-line" x="0" y="80" width="65" height="4" fill="#ec4899" opacity="0.3" rx="2" />
      </g>

      {/* Design Tools */}
      <g className="design-tool pen-tool" transform="translate(25, 80)">
        <path d="M 0 15 L 5 0 L 10 5 L 5 20 Z" fill="#ec4899" />
        <circle cx="5" cy="10" r="2" fill="white" />
      </g>

      {/* Color Palette */}
      <g transform="translate(160, 60)">
        <circle className="color-circle" cx="0" cy="0" r="6" fill="#ec4899" />
        <circle className="color-circle" cx="0" cy="15" r="6" fill="#f472b6" />
        <circle className="color-circle" cx="0" cy="30" r="6" fill="#fbcfe8" />
        <circle className="color-circle" cx="0" cy="45" r="6" fill="#fce7f3" />
      </g>

      {/* Ruler/Guides */}
      <g className="design-tool">
        <rect x="48" y="35" width="104" height="3" fill="#ec4899" opacity="0.3" />
        <rect x="47" y="38" width="3" height="124" fill="#ec4899" opacity="0.3" />
        {[...Array(10)].map((_, i) => (
          <line
            key={i}
            x1={58 + i * 10}
            y1="35"
            x2={58 + i * 10}
            y2="38"
            stroke="#ec4899"
            strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Cursor */}
      <g className="cursor" transform="translate(100, 100)">
        <path d="M 0 0 L 0 12 L 4 9 L 6 13 L 8 12 L 6 8 L 10 8 Z" fill="#ec4899" />
      </g>

      {/* Selection box */}
      <g className="design-tool">
        <rect x="85" y="95" width="40" height="30" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6" />
        <circle cx="85" cy="95" r="2" fill="#ec4899" />
        <circle cx="125" cy="95" r="2" fill="#ec4899" />
        <circle cx="85" cy="125" r="2" fill="#ec4899" />
        <circle cx="125" cy="125" r="2" fill="#ec4899" />
      </g>

      {/* Floating UI elements */}
      <g className="design-tool" transform="translate(170, 130)">
        <rect x="0" y="0" width="20" height="20" fill="#ec4899" opacity="0.2" rx="2" />
        <path d="M 5 10 L 8 13 L 15 6" stroke="#ec4899" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

