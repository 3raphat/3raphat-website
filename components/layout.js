import Head from 'next/head'
import Container from './container'
import Content from './content'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children, title }) => {
  const t = `3raphat - ${title}`
  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="3raphat's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen flex flex-col bg-light dark:bg-dark text-textDark dark:text-textLight transition-colors'>
        <Navbar />
        <Container>
          <Content>
            {children}
          </Content>
        </Container>
        <Footer />
      </main>
    </>
  )
}

export default Layout