'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AEMAnimation() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // CMS panel slide in
      gsap.from('.cms-panel', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      // Content blocks appearing
      gsap.from('.content-block', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      })

      // Adobe logo pulse
      gsap.to('.adobe-logo', {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Content flow animation
      gsap.to('.flow-arrow', {
        x: 10,
        opacity: 0.3,
        duration: 1.5,
        stagger: 0.3,
        repeat: -1,
        ease: 'power1.inOut'
      })

      // Page elements building
      gsap.from('.page-element', {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      })

      // Component library pulse
      gsap.to('.component', {
        scale: 1.05,
        duration: 1.2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Drag and drop animation
      gsap.to('.draggable', {
        y: -5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Publishing animation
      gsap.to('.publish-icon', {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: 'none'
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
      {/* CMS Dashboard Panel */}
      <g className="cms-panel">
        <rect x="20" y="30" width="160" height="140" fill="white" rx="8" opacity="0.95" />
        <rect x="20" y="30" width="160" height="25" fill="url(#aemGradient)" rx="8" />
        
        {/* Adobe AEM Logo representation */}
        <g className="adobe-logo" transform="translate(30, 42)">
          <rect x="0" y="0" width="8" height="8" fill="white" rx="1" />
          <text x="1" y="7" fill="#eb1000" fontSize="7" fontWeight="bold">A</text>
        </g>
        
        <text x="45" y="48" fill="white" fontSize="10" fontWeight="bold">AEM CMS</text>
      </g>

      {/* Sidebar - Component Library */}
      <g transform="translate(25, 65)">
        <rect x="0" y="0" width="35" height="100" fill="#f3f4f6" rx="4" />
        
        <g className="component draggable" transform="translate(5, 8)">
          <rect x="0" y="0" width="25" height="15" fill="#eb1000" opacity="0.2" rx="2" />
          <rect x="3" y="3" width="19" height="3" fill="#eb1000" rx="1" />
          <rect x="3" y="8" width="14" height="2" fill="#eb1000" opacity="0.6" rx="1" />
        </g>
        
        <g className="component draggable" transform="translate(5, 30)">
          <rect x="0" y="0" width="25" height="15" fill="#f97316" opacity="0.2" rx="2" />
          <rect x="3" y="3" width="8" height="8" fill="#f97316" rx="1" />
          <rect x="13" y="3" width="9" height="3" fill="#f97316" opacity="0.6" rx="1" />
          <rect x="13" y="8" width="7" height="2" fill="#f97316" opacity="0.6" rx="1" />
        </g>
        
        <g className="component draggable" transform="translate(5, 52)">
          <rect x="0" y="0" width="25" height="15" fill="#3b82f6" opacity="0.2" rx="2" />
          <line x1="3" y1="7" x2="22" y2="7" stroke="#3b82f6" strokeWidth="2" />
          <line x1="3" y1="11" x2="18" y2="11" stroke="#3b82f6" strokeWidth="2" />
        </g>

        <g className="component" transform="translate(5, 74)">
          <rect x="0" y="0" width="25" height="15" fill="#10b981" opacity="0.2" rx="2" />
          <circle cx="7" cy="7" r="3" fill="#10b981" />
          <rect x="12" y="4" width="10" height="2" fill="#10b981" opacity="0.6" rx="1" />
          <rect x="12" y="8" width="8" height="2" fill="#10b981" opacity="0.6" rx="1" />
        </g>
      </g>

      {/* Main Content Area - Page Builder */}
      <g transform="translate(70, 65)">
        <rect x="0" y="0" width="105" height="100" fill="#fafafa" rx="4" />

        {/* Page elements being built */}
        <g className="page-element content-block" transform="translate(5, 5)">
          <rect x="0" y="0" width="95" height="12" fill="#eb1000" opacity="0.3" rx="2" />
          <rect x="3" y="3" width="60" height="3" fill="#eb1000" rx="1" />
        </g>

        <g className="page-element content-block" transform="translate(5, 22)">
          <rect x="0" y="0" width="45" height="30" fill="#f97316" opacity="0.2" rx="2" />
          <rect x="3" y="3" width="15" height="15" fill="#f97316" rx="1" />
          <rect x="20" y="3" width="22" height="3" fill="#f97316" opacity="0.6" rx="1" />
          <rect x="20" y="8" width="18" height="2" fill="#f97316" opacity="0.6" rx="1" />
        </g>

        <g className="page-element content-block" transform="translate(55, 22)">
          <rect x="0" y="0" width="45" height="30" fill="#3b82f6" opacity="0.2" rx="2" />
          <rect x="3" y="3" width="15" height="15" fill="#3b82f6" rx="1" />
          <rect x="20" y="3" width="22" height="3" fill="#3b82f6" opacity="0.6" rx="1" />
          <rect x="20" y="8" width="18" height="2" fill="#3b82f6" opacity="0.6" rx="1" />
        </g>

        <g className="page-element content-block" transform="translate(5, 57)">
          <rect x="0" y="0" width="95" height="18" fill="#10b981" opacity="0.2" rx="2" />
          <line x1="5" y1="6" x2="85" y2="6" stroke="#10b981" strokeWidth="2" />
          <line x1="5" y1="11" x2="70" y2="11" stroke="#10b981" strokeWidth="2" />
        </g>

        <g className="page-element content-block" transform="translate(5, 80)">
          <rect x="0" y="0" width="95" height="15" fill="#8b5cf6" opacity="0.2" rx="2" />
          <rect x="3" y="3" width="25" height="8" fill="#8b5cf6" opacity="0.6" rx="1" />
          <rect x="30" y="3" width="25" height="8" fill="#8b5cf6" opacity="0.6" rx="1" />
          <rect x="57" y="3" width="25" height="8" fill="#8b5cf6" opacity="0.6" rx="1" />
        </g>
      </g>

      {/* Flow Arrows */}
      <g className="flow-arrow" transform="translate(55, 100)">
        <path d="M 0 0 L 8 0 L 8 -3 L 12 3 L 8 9 L 8 6 L 0 6 Z" fill="#eb1000" opacity="0.5" />
      </g>

      {/* Publish Icon */}
      <g className="publish-icon" transform="translate(165, 180)">
        <circle cx="0" cy="0" r="12" fill="#10b981" />
        <path d="M -4 2 L 0 -4 L 4 2 M 0 -4 L 0 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Version control indicator */}
      <g transform="translate(25, 180)">
        <circle cx="0" cy="0" r="3" fill="#eb1000" />
        <circle cx="10" cy="0" r="3" fill="#f97316" />
        <circle cx="20" cy="0" r="3" fill="#10b981" />
        <line x1="3" y1="0" x2="7" y2="0" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="13" y1="0" x2="17" y2="0" stroke="#9ca3af" strokeWidth="1.5" />
      </g>

      {/* Decorative elements */}
      <circle cx="185" cy="25" r="3" fill="#eb1000" opacity="0.3" />
      <circle cx="15" cy="180" r="4" fill="#f97316" opacity="0.3" />

      {/* Gradients */}
      <defs>
        <linearGradient id="aemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#eb1000" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>
  )
}

