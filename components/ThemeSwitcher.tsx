'use client'
import { useTheme } from '../context/ThemeContext'
import { Palette } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 group"
      aria-label="Toggle theme"
    >
      <div className={`relative w-16 h-16 rounded-full shadow-xl transition-all duration-500 ${
        theme === 'sunset' 
          ? 'bg-gradient-to-br from-coral-red to-sunset-orange hover:shadow-glow-coral' 
          : 'bg-gradient-to-br from-forest-green to-emerald hover:shadow-glow-green'
      }`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Palette className="w-7 h-7 text-white group-hover:rotate-180 transition-transform duration-500" />
        </div>
        
        {/* Theme indicator */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
            theme === 'sunset' ? 'bg-coral-red' : 'bg-forest-green'
          }`}>
            {theme === 'sunset' ? '🌅 Sunset' : '🌲 Forest'}
          </div>
        </div>
      </div>
    </motion.button>
  )
}

