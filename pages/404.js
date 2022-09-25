import Image from 'next/image'
import Button from '../components/button'
import Container from '../components/container'
import Content from '../components/content'
import Heading from '../components/heading'
import Layout from '../components/layout'
import Link from '../components/link'

const NotFound = () => {
  return (
    <Layout title='404'>
      <Container>
        <Content>
          <div className='flex mx-auto justify-center relative w-full h-96 mt-12'>
            <Image src='/images/location_search.svg' layout='fill' objectFit='contain' priority={true}/>
          </div>
          <Heading>
            404 - Page Not Found
          </Heading>
          <div className='mt-[-2rem] mb-8'>This page could not be found.</div>
          <Link href='/'>
            <Button className='py-2 px-3 bg-teal-400 mx-auto hover:bg-teal-500 transition-colors'>
              Return to Home
            </Button>
          </Link>
        </Content>
      </Container>
    </Layout>
  )
}

export default NotFound