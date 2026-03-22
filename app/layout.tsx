'use client'
import { ThemeProvider } from '../context/ThemeContext'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Anantha Web Solutions - Premium</title>
        <meta name="description" content="Premium digital experiences that drive results" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
