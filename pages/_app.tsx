import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from '../context/ThemeContext';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {/* Google Analytics */}
      <GoogleAnalytics />

      <Head>
        <title>Anantha Web Solutions</title>
        <meta
          name="description"
          content="Anantha Web Solutions – Custom web and mobile platforms for digital growth."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="LpZpuBwVkH1bHfCemeao3pK_amyJEzWQ81f0tQmB7zc" />

        {/* Favicons */}
        <link rel="icon" href="/assets/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />

        <link rel="canonical" href="https://ananthadigital.com/" />

        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/assets/logos/ananthaweb.png" as="image" />
      </Head>

      {/* Global Layout and Page */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
