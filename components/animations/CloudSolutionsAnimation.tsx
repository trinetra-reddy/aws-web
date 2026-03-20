'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CloudSolutionsAnimation() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Cloud floating
      gsap.to('.cloud', {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Data upload animation
      gsap.to('.upload-arrow', {
        y: -30,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
        repeat: -1,
        ease: 'power1.in'
      })

      // Data download animation
      gsap.to('.download-arrow', {
        y: 30,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
        repeat: -1,
        ease: 'power1.in'
      })

      // Server lights blinking
      gsap.to('.server-light', {
        opacity: 0.3,
        duration: 1,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Data flow particles
      gsap.to('.data-flow', {
        y: -50,
        opacity: 0,
        duration: 2.5,
        stagger: 0.3,
        repeat: -1,
        ease: 'power1.in'
      })

      // Cloud storage expansion
      gsap.to('.cloud-storage', {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        transformOrigin: 'center'
      })

      // Network connections pulse
      gsap.to('.network-line', {
        strokeDashoffset: 0,
        duration: 2,
        repeat: -1,
        ease: 'none'
      })

      // Database rotation
      gsap.to('.database', {
        rotationY: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center'
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
      {/* Main Cloud */}
      <g className="cloud cloud-storage">
        {/* Cloud shape */}
        <ellipse cx="100" cy="80" rx="35" ry="25" fill="white" opacity="0.9" />
        <ellipse cx="80" cy="85" rx="25" ry="20" fill="white" opacity="0.9" />
        <ellipse cx="120" cy="85" rx="25" ry="20" fill="white" opacity="0.9" />
        <rect x="65" y="80" width="70" height="20" fill="white" opacity="0.9" />
        
        {/* Cloud icon/symbol */}
        <circle cx="100" cy="85" r="8" fill="url(#cloudGradient)" opacity="0.8" />
      </g>
      
      {/* Server/Database at bottom */}
      <g className="database" transform="translate(100, 150)">
        {/* Server rack */}
        <rect x="-25" y="-15" width="50" height="30" rx="3" fill="white" opacity="0.8" stroke="white" strokeWidth="1" />
        
        {/* Server segments */}
        <line x1="-25" y1="-5" x2="25" y2="-5" stroke="white" strokeWidth="1" opacity="0.5" />
        <line x1="-25" y1="5" x2="25" y2="5" stroke="white" strokeWidth="1" opacity="0.5" />
        
        {/* Server indicator lights */}
        <circle className="server-light" cx="-15" cy="-10" r="2" fill="#10b981" />
        <circle className="server-light" cx="-8" cy="-10" r="2" fill="#10b981" />
        <circle className="server-light" cx="-15" cy="0" r="2" fill="#f59e0b" />
        <circle className="server-light" cx="-8" cy="0" r="2" fill="#f59e0b" />
        <circle className="server-light" cx="-15" cy="10" r="2" fill="#ef4444" />
        <circle className="server-light" cx="-8" cy="10" r="2" fill="#ef4444" />
      </g>
      
      {/* Upload arrows (data going to cloud) */}
      <g>
        <path className="upload-arrow" d="M 100 130 L 100 110 M 95 115 L 100 110 L 105 115" stroke="white" strokeWidth="2.5" fill="none" opacity="0.7" />
        <path className="upload-arrow" d="M 85 135 L 90 115 M 85 120 L 90 115 L 95 118" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
        <path className="upload-arrow" d="M 115 135 L 110 115 M 105 118 L 110 115 L 115 120" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
      </g>
      
      {/* Download arrows (data from cloud) */}
      <g>
        <path className="download-arrow" d="M 70 90 L 70 110 M 65 105 L 70 110 L 75 105" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
        <path className="download-arrow" d="M 130 90 L 130 110 M 125 105 L 130 110 L 135 105" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
      </g>
      
      {/* Data flow particles */}
      <circle className="data-flow" cx="100" cy="140" r="2.5" fill="white" opacity="0.8" />
      <circle className="data-flow" cx="90" cy="145" r="2" fill="white" opacity="0.7" />
      <circle className="data-flow" cx="110" cy="145" r="2" fill="white" opacity="0.7" />
      
      {/* Network connection lines */}
      <line className="network-line" x1="50" y1="150" x2="75" y2="150" stroke="white" strokeWidth="1.5" opacity="0.4" strokeDasharray="40" strokeDashoffset="40" />
      <line className="network-line" x1="125" y1="150" x2="150" y2="150" stroke="white" strokeWidth="1.5" opacity="0.4" strokeDasharray="40" strokeDashoffset="40" />
      
      {/* Connected devices */}
      <g opacity="0.6">
        {/* Left device */}
        <rect x="35" y="145" width="12" height="10" rx="1" fill="white" stroke="white" strokeWidth="1" />
        
        {/* Right device */}
        <rect x="153" y="145" width="12" height="10" rx="1" fill="white" stroke="white" strokeWidth="1" />
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
    </svg>
  )
}

