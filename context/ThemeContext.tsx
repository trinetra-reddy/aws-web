'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Theme = 'sunset' | 'forest'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  colors: {
    primary: string
    secondary: string
    accent: string
    dark: string
    light: string
    gradient: string
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const themes = {
  sunset: {
    primary: '#FF6B6B',
    secondary: '#FFA07A',
    accent: '#FFD93D',
    dark: '#2D3142',
    light: '#FAF3E0',
    gradient: 'from-coral-red to-sunset-orange',
  },
  forest: {
    primary: '#2D6A4F',
    secondary: '#40916C',
    accent: '#F4A261',
    dark: '#1B263B',
    light: '#E9F5DB',
    gradient: 'from-forest-green to-emerald',
  },
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('forest') // Changed default to forest

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && (savedTheme === 'sunset' || savedTheme === 'forest')) {
      setTheme(savedTheme)
    } else {
      // Set default to forest if no saved theme
      setTheme('forest')
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme', theme)
    
    // Update CSS variables
    const root = document.documentElement
    const colors = themes[theme]
    
    root.style.setProperty('--color-primary', colors.primary)
    root.style.setProperty('--color-secondary', colors.secondary)
    root.style.setProperty('--color-accent', colors.accent)
    root.style.setProperty('--color-dark', colors.dark)
    root.style.setProperty('--color-light', colors.light)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'sunset' ? 'forest' : 'sunset')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

