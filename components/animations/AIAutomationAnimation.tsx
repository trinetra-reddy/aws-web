'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AIAutomationAnimation() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Brain pulse animation
      gsap.to('.brain-pulse', {
        scale: 1.1,
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Neural connections animation
      gsap.to('.neural-line', {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        ease: 'none'
      })

      // Data particles flowing
      gsap.to('.data-particle', {
        y: -100,
        opacity: 0,
        duration: 3,
        stagger: 0.3,
        repeat: -1,
        ease: 'power1.in'
      })

      // Gear rotation
      gsap.to('.gear', {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center'
      })

      // AI nodes pulsing
      gsap.to('.ai-node', {
        scale: 1.3,
        opacity: 0.8,
        duration: 1.5,
        stagger: 0.2,
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
      {/* Background glow */}
      <circle className="brain-pulse" cx="100" cy="100" r="80" fill="url(#brainGradient)" opacity="0.2" />
      
      {/* Central brain/AI core */}
      <circle cx="100" cy="100" r="30" fill="url(#coreGradient)" />
      
      {/* AI Neural Network Nodes */}
      <circle className="ai-node" cx="100" cy="50" r="6" fill="white" opacity="0.9" />
      <circle className="ai-node" cx="150" cy="100" r="6" fill="white" opacity="0.9" />
      <circle className="ai-node" cx="100" cy="150" r="6" fill="white" opacity="0.9" />
      <circle className="ai-node" cx="50" cy="100" r="6" fill="white" opacity="0.9" />
      <circle className="ai-node" cx="130" cy="70" r="5" fill="white" opacity="0.8" />
      <circle className="ai-node" cx="130" cy="130" r="5" fill="white" opacity="0.8" />
      <circle className="ai-node" cx="70" cy="130" r="5" fill="white" opacity="0.8" />
      <circle className="ai-node" cx="70" cy="70" r="5" fill="white" opacity="0.8" />
      
      {/* Neural connection lines */}
      <line className="neural-line" x1="100" y1="100" x2="100" y2="50" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="50" strokeDashoffset="50" />
      <line className="neural-line" x1="100" y1="100" x2="150" y2="100" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="50" strokeDashoffset="50" />
      <line className="neural-line" x1="100" y1="100" x2="100" y2="150" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="50" strokeDashoffset="50" />
      <line className="neural-line" x1="100" y1="100" x2="50" y2="100" stroke="white" strokeWidth="2" opacity="0.6" strokeDasharray="50" strokeDashoffset="50" />
      <line className="neural-line" x1="100" y1="100" x2="130" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5" strokeDasharray="40" strokeDashoffset="40" />
      <line className="neural-line" x1="100" y1="100" x2="130" y2="130" stroke="white" strokeWidth="1.5" opacity="0.5" strokeDasharray="40" strokeDashoffset="40" />
      <line className="neural-line" x1="100" y1="100" x2="70" y2="130" stroke="white" strokeWidth="1.5" opacity="0.5" strokeDasharray="40" strokeDashoffset="40" />
      <line className="neural-line" x1="100" y1="100" x2="70" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5" strokeDasharray="40" strokeDashoffset="40" />
      
      {/* Rotating gears (automation) */}
      <g className="gear" transform="translate(160, 40)">
        <circle cx="0" cy="0" r="12" fill="white" opacity="0.3" />
        <rect x="-2" y="-15" width="4" height="30" fill="white" opacity="0.5" rx="1" />
        <rect x="-15" y="-2" width="30" height="4" fill="white" opacity="0.5" rx="1" />
      </g>
      
      <g className="gear" transform="translate(40, 160)">
        <circle cx="0" cy="0" r="10" fill="white" opacity="0.3" />
        <rect x="-1.5" y="-12" width="3" height="24" fill="white" opacity="0.5" rx="1" />
        <rect x="-12" y="-1.5" width="24" height="3" fill="white" opacity="0.5" rx="1" />
      </g>
      
      {/* Data particles flowing */}
      <circle className="data-particle" cx="100" cy="180" r="3" fill="white" opacity="0.8" />
      <circle className="data-particle" cx="180" cy="100" r="3" fill="white" opacity="0.8" />
      <circle className="data-particle" cx="20" cy="100" r="3" fill="white" opacity="0.8" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

