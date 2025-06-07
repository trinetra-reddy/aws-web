import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global Metadata (applies to all routes if individual pages lack <Head>) */}
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
        <html lang="en" />
      </Head>

      {/* Global Layout and Page */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
