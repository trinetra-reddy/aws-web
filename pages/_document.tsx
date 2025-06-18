// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global Meta */}
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="canonical" href="https://ananthadigital.com/" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />

        {/* Preload key image */}
        <link rel="preload" as="image" href="/assets/digital-transformation.webp" type="image/webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
