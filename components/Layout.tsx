'use client'

import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Ubuntu } from 'next/font/google'

const HeaderModern = dynamic(() => import('../components/HeaderModern'), { ssr: false })
const HeroModern = dynamic(() => import('../components/HeroModern'), { ssr: false })
const FooterModern = dynamic(() => import('../components/FooterModern'), { ssr: false })
const ChatbotWidget = dynamic(() => import('../components/ChatbotWidget'), { ssr: false })
const CookieBanner = dynamic(() => import('../components/CookieBanner'), { ssr: false })

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-ubuntu' })

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className={`${ubuntu.variable} font-sans text-slate-900`}>
      <HeaderModern />

      {pathname === '/' && <HeroModern />}

      <main id="main-content" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        {children}
      </main>

      {/* Footer */}
      <FooterModern />

      {/* Chatbot Widget */}
      <ChatbotWidget />

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  )
}
