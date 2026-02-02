'use client'
import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917013594249?text=Hello! I would like to inquire about your services.', '_blank')
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={() => setIsOpen(true)}
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Pulse ring animation */}
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
              
              {/* Icon */}
              <MessageCircle size={32} className="relative z-10" />
              
              {/* Notification badge */}
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                1
              </span>
              
              {/* Tooltip */}
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Chat with us! 💬
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-slate-100"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Image 
                        src="/assets/whatsapp.svg" 
                        alt="WhatsApp" 
                        width={28} 
                        height={28}
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Chat with us</h3>
                    <p className="text-xs text-green-100">We typically reply instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-6 bg-gradient-to-b from-slate-50 to-white min-h-[300px] max-h-[400px] overflow-y-auto">
                {/* Welcome Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-md border border-slate-100">
                    <p className="text-slate-700 text-sm leading-relaxed mb-2">
                      👋 <strong>Hello! Welcome to Anantha Web Solutions</strong>
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      How can we help you today? Click below to start a conversation on WhatsApp!
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 ml-2">Just now</p>
                </motion.div>

                {/* Quick Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <p className="text-xs font-semibold text-slate-500 mb-3">Quick options:</p>
                  {[
                    '💼 Discuss a project',
                    '💰 Get a quote',
                    '🤝 Partnership inquiry',
                    '❓ General question'
                  ].map((option, index) => (
                    <button
                      key={index}
                      onClick={handleWhatsAppClick}
                      className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-green-50 border border-slate-200 hover:border-green-300 rounded-xl text-sm text-slate-700 hover:text-green-700 transition-all duration-200 transform hover:scale-105"
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Image src="/assets/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                  Start WhatsApp Chat
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

