'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function WebDevelopmentAnimation() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Browser window slide in
      gsap.from('.browser-window', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      })

      // Code lines typing effect
      gsap.from('.code-line', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      })

      // Cursor blink
      gsap.to('.cursor', {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'steps(1)'
      })

      // Code brackets animation
      gsap.to('.bracket', {
        x: 3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Floating elements
      gsap.to('.float-element', {
        y: -10,
        duration: 2,
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Responsive device indicators
      gsap.to('.device-indicator', {
        scale: 1.2,
        opacity: 0.6,
        duration: 1.5,
        stagger: 0.4,
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
      {/* Browser Window */}
      <g className="browser-window">
        {/* Window frame */}
        <rect x="30" y="40" width="140" height="120" rx="8" fill="white" opacity="0.95" />
        
        {/* Browser top bar */}
        <rect x="30" y="40" width="140" height="20" rx="8" fill="url(#browserGradient)" />
        <circle cx="42" cy="50" r="3" fill="white" opacity="0.8" />
        <circle cx="52" cy="50" r="3" fill="white" opacity="0.8" />
        <circle cx="62" cy="50" r="3" fill="white" opacity="0.8" />
        
        {/* Code content */}
        <g transform="translate(40, 75)">
          {/* HTML/Code lines */}
          <rect className="code-line" x="0" y="0" width="50" height="4" rx="2" fill="#2563eb" opacity="0.7" />
          <rect className="code-line bracket" x="8" y="10" width="60" height="4" rx="2" fill="#7c3aed" opacity="0.7" />
          <rect className="code-line bracket" x="16" y="20" width="45" height="4" rx="2" fill="#059669" opacity="0.7" />
          <rect className="code-line bracket" x="16" y="30" width="55" height="4" rx="2" fill="#dc2626" opacity="0.7" />
          <rect className="code-line bracket" x="8" y="40" width="40" height="4" rx="2" fill="#7c3aed" opacity="0.7" />
          <rect className="code-line" x="0" y="50" width="35" height="4" rx="2" fill="#2563eb" opacity="0.7" />
          
          {/* Blinking cursor */}
          <rect className="cursor" x="72" y="20" width="2" height="6" fill="#2563eb" />
        </g>
      </g>
      
      {/* Floating HTML tags */}
      <g className="float-element" opacity="0.6">
        <text x="15" y="30" fill="white" fontSize="12" fontWeight="bold">&lt;/&gt;</text>
      </g>
      
      <g className="float-element" opacity="0.6">
        <text x="170" y="170" fill="white" fontSize="12" fontWeight="bold">{'{}'}</text>
      </g>
      
      {/* Responsive device indicators */}
      <g className="device-indicator" transform="translate(20, 100)">
        {/* Mobile icon */}
        <rect x="0" y="0" width="12" height="20" rx="2" fill="white" opacity="0.5" stroke="white" strokeWidth="1" />
        <circle cx="6" cy="17" r="1" fill="white" />
      </g>
      
      <g className="device-indicator" transform="translate(175, 90)">
        {/* Desktop icon */}
        <rect x="0" y="0" width="20" height="14" rx="2" fill="white" opacity="0.5" stroke="white" strokeWidth="1" />
        <rect x="6" y="14" width="8" height="2" fill="white" opacity="0.5" />
        <rect x="3" y="16" width="14" height="1" fill="white" opacity="0.5" />
      </g>
      
      {/* Connection lines showing responsiveness */}
      <path d="M 32 110 Q 50 100 60 80" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="3,3" />
      <path d="M 180 100 Q 160 90 140 80" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="3,3" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="browserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

