import Head from 'next/head'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children, title }) => {
  const t = `3raphat - ${title}`
  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="3raphat's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen flex flex-col bg-light dark:bg-dark transition-colors'>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout