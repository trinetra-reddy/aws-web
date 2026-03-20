'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function MobileAppAnimation() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Phone entrance
      gsap.from('.phone-body', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      })

      // Screen content slide up
      gsap.from('.screen-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      })

      // App icons bounce
      gsap.to('.app-icon', {
        y: -5,
        duration: 1,
        stagger: 0.15,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Notification badge pulse
      gsap.to('.notification-badge', {
        scale: 1.3,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Touch ripple effect
      gsap.to('.touch-ripple', {
        scale: 2,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: 'power1.out'
      })

      // Signal waves
      gsap.to('.signal-wave', {
        scaleX: 1.5,
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        repeat: -1,
        ease: 'power1.out',
        transformOrigin: 'left center'
      })

      // Loading bar
      gsap.to('.loading-bar', {
        scaleX: 1,
        duration: 2,
        repeat: -1,
        ease: 'power1.inOut',
        transformOrigin: 'left'
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
      {/* Mobile Phone */}
      <g className="phone-body">
        {/* Phone frame */}
        <rect x="60" y="30" width="80" height="140" rx="12" fill="white" opacity="0.95" stroke="white" strokeWidth="3" />
        
        {/* Screen */}
        <rect x="65" y="40" width="70" height="120" rx="6" fill="url(#screenGradient)" />
        
        {/* Notch */}
        <rect x="85" y="40" width="30" height="6" rx="3" fill="white" opacity="0.3" />
        
        {/* Home button/indicator */}
        <rect x="95" y="163" width="10" height="3" rx="1.5" fill="white" opacity="0.5" />
        
        {/* Screen Content - App Icons Grid */}
        <g className="screen-content">
          {/* Row 1 */}
          <rect className="app-icon" x="72" y="55" width="16" height="16" rx="4" fill="white" opacity="0.8" />
          <rect className="app-icon" x="92" y="55" width="16" height="16" rx="4" fill="white" opacity="0.8" />
          <rect className="app-icon" x="112" y="55" width="16" height="16" rx="4" fill="white" opacity="0.8" />
          
          {/* Row 2 */}
          <rect className="app-icon" x="72" y="76" width="16" height="16" rx="4" fill="white" opacity="0.8" />
          <rect className="app-icon" x="92" y="76" width="16" height="16" rx="4" fill="white" opacity="0.8" />
          <rect className="app-icon" x="112" y="76" width="16" height="16" rx="4" fill="white" opacity="0.8" />
          
          {/* Row 3 */}
          <rect className="app-icon" x="72" y="97" width="16" height="16" rx="4" fill="white" opacity="0.8" />
          <rect className="app-icon" x="92" y="97" width="16" height="16" rx="4" fill="white" opacity="0.8" />
          <rect className="app-icon" x="112" y="97" width="16" height="16" rx="4" fill="white" opacity="0.8" />
        </g>
        
        {/* Notification badge */}
        <circle className="notification-badge" cx="126" cy="57" r="3" fill="#ef4444" />
        
        {/* Loading bar at bottom */}
        <rect x="72" y="145" width="56" height="3" rx="1.5" fill="white" opacity="0.2" />
        <rect className="loading-bar" x="72" y="145" width="56" height="3" rx="1.5" fill="white" opacity="0.8" style={{ transform: 'scaleX(0)', transformOrigin: 'left' }} />
      </g>
      
      {/* Touch interaction ripple */}
      <circle className="touch-ripple" cx="100" cy="85" r="8" fill="white" opacity="0.4" />
      
      {/* Signal/connectivity waves */}
      <path className="signal-wave" d="M 25 100 Q 40 100 45 100" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
      <path className="signal-wave" d="M 20 100 Q 40 100 50 100" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
      <path className="signal-wave" d="M 15 100 Q 40 100 55 100" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
      
      {/* Data transfer arrows */}
      <g opacity="0.5">
        <path d="M 150 100 L 165 100 L 160 95" stroke="white" strokeWidth="2" fill="none" />
        <path d="M 165 110 L 150 110 L 155 115" stroke="white" strokeWidth="2" fill="none" />
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
    </svg>
  )
}

