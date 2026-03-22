'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function SupportAnimation() {
  const containerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Headset animation
      gsap.from('.headset', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      })

      // Chat bubbles appearing
      gsap.from('.chat-bubble', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'back.out(1.7)'
      })

      // Headset pulse
      gsap.to('.headset', {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Notification bell ring
      gsap.to('.bell', {
        rotation: 15,
        transformOrigin: 'top center',
        duration: 0.3,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        ease: 'power2.inOut'
      })

      // Checkmarks appearing
      gsap.from('.checkmark', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.4,
        ease: 'back.out(2)'
      })

      // Tools rotation
      gsap.to('.tool', {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'none'
      })

      // Signal waves
      gsap.to('.signal-wave', {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
        repeat: -1,
        ease: 'power1.out'
      })

      // Clock ticking
      gsap.to('.clock-hand', {
        rotation: 360,
        transformOrigin: 'center',
        duration: 4,
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
      {/* Support Headset */}
      <g className="headset" transform="translate(100, 90)">
        <path d="M -25 0 Q -25 -20 0 -20 Q 25 -20 25 0"
              stroke="#6366f1" strokeWidth="4" fill="none" strokeLinecap="round" />
        <rect x="-30" y="-5" width="12" height="18" fill="#6366f1" rx="3" />
        <rect x="18" y="-5" width="12" height="18" fill="#6366f1" rx="3" />
        <path d="M -18 13 Q -10 18 0 18" stroke="#6366f1" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="18" r="4" fill="#6366f1" />
      </g>

      {/* Chat Bubbles */}
      <g className="chat-bubble" transform="translate(50, 50)">
        <rect x="0" y="0" width="35" height="25" fill="#818cf8" rx="8" />
        <path d="M 5 25 L 10 30 L 10 25" fill="#818cf8" />
        <line x1="8" y1="10" x2="27" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="16" x2="20" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g className="chat-bubble" transform="translate(115, 130)">
        <rect x="0" y="0" width="40" height="28" fill="#a5b4fc" rx="8" />
        <path d="M 35 28 L 30 33 L 30 28" fill="#a5b4fc" />
        <line x1="8" y1="11" x2="32" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="18" x2="25" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* 24/7 Badge */}
      <g transform="translate(155, 50)">
        <circle cx="0" cy="0" r="18" fill="#6366f1" />
        <text x="-10" y="-3" fill="white" fontSize="10" fontWeight="bold">24</text>
        <line x1="-8" y1="2" x2="8" y2="2" stroke="white" strokeWidth="1" />
        <text x="-6" y="10" fill="white" fontSize="10" fontWeight="bold">7</text>
      </g>

      {/* Notification Bell */}
      <g className="bell" transform="translate(40, 130)">
        <path d="M -6 -8 L -6 -10 Q -6 -13 -3 -13 Q 0 -13 0 -13 Q 3 -13 3 -13 Q 6 -13 6 -10 L 6 -8 Q 6 0 10 4 L -10 4 Q -6 0 -6 -8 Z"
              fill="#6366f1" />
        <path d="M -3 4 Q -3 7 0 7 Q 3 7 3 4" fill="#6366f1" />
        <circle cx="6" cy="-8" r="3" fill="#ef4444" />
      </g>

      {/* Checkmarks (resolved tickets) */}
      <g className="checkmark" transform="translate(160, 140)">
        <circle cx="0" cy="0" r="8" fill="#10b981" />
        <path d="M -3 0 L -1 3 L 4 -3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className="checkmark" transform="translate(175, 120)">
        <circle cx="0" cy="0" r="6" fill="#34d399" />
        <path d="M -2 0 L 0 2 L 3 -2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Tools (wrench/gear) */}
      <g className="tool" transform="translate(30, 60)">
        <circle cx="0" cy="0" r="8" fill="none" stroke="#6366f1" strokeWidth="2" />
        <circle cx="0" cy="0" r="4" fill="#6366f1" />
        <rect x="-2" y="-10" width="4" height="4" fill="#6366f1" />
        <rect x="-2" y="6" width="4" height="4" fill="#6366f1" />
        <rect x="-10" y="-2" width="4" height="4" fill="#6366f1" />
        <rect x="6" y="-2" width="4" height="4" fill="#6366f1" />
      </g>

      {/* Signal Waves */}
      <g transform="translate(100, 50)">
        <circle className="signal-wave" cx="0" cy="0" r="8" fill="none" stroke="#818cf8" strokeWidth="2" />
        <circle className="signal-wave" cx="0" cy="0" r="8" fill="none" stroke="#818cf8" strokeWidth="2" />
        <circle className="signal-wave" cx="0" cy="0" r="8" fill="none" stroke="#818cf8" strokeWidth="2" />
      </g>

      {/* Clock (24/7 support) */}
      <g transform="translate(170, 90)">
        <circle cx="0" cy="0" r="12" fill="none" stroke="#6366f1" strokeWidth="2" />
        <line className="clock-hand" x1="0" y1="0" x2="0" y2="-8" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="0" x2="5" y2="0" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="0" cy="0" r="1.5" fill="#6366f1" />
      </g>

      {/* Decorative dots */}
      <circle cx="25" cy="170" r="3" fill="#818cf8" opacity="0.4" />
      <circle cx="180" cy="170" r="4" fill="#a5b4fc" opacity="0.4" />
      <circle cx="185" cy="30" r="3" fill="#c7d2fe" opacity="0.4" />
    </svg>
  )
}

