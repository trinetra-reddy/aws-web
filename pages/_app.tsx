import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from '../context/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ananthawebsolutions.com/" />
      </Head>

      {/* Global Layout and Page */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
