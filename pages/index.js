import Image from 'next/image'
import AvatarRandom from '../components/avatar-random'
import Container from '../components/container'
import Content from '../components/content'
import Heading from '../components/heading'
import Layout from '../components/layout'
import Link from '../components/link'
import Section from '../components/section'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import Button from '../components/button'

const Home = () => {
  return (
    <Layout title='Home'>
      <Container>
        <Content>
          <Heading>/home</Heading>
          <div className='flex mx-auto justify-center mb-8 relative w-full h-96'>
            <Image src='/images/lost_in_space.svg' layout='fill' objectFit='contain' priority={true}/>
          </div>
          <div className='flex justify-center items-center bg-whiteAlpha500 dark:bg-whiteAlpha200 p-3 rounded-lg mb-8'>
            Thanks for exploring my website!
          </div>
          <div className='flex gap-6 items-center justify-center'>
            <AvatarRandom />
            <div>
              <div className='text-4xl font-bold font-quick flex'>
                Hello, I&apos;m Theeraphat
                <img className='ml-4' src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="32px" />
              </div>
              <div>( Student / Gamer )</div>
              <div className='opacity-50 mt-2'>
                Fun fact: The avatar is random! Reload the page to get a new one.
              </div>
            </div>
          </div>
          <Section title='Who am I ?'>My name is Theeraphat. I&apos;m a normal person that enjoys everything about computers.</Section>
          <Section title='What I fav.'>Music, K-POP, Playing Games, Computers, Learning New Things, I&apos;m a Cat Lover 😺</Section>
          <Section title='Contact'>
            <ul className='flex mt-4'>
              <li className='flex flex-col items-center'>
                <Link href='https://github.com/3raphat' target='_blank'>
                  <Button className='py-2 px-3 gap-2 hover:bg-teal-400/50'>
                    <FaGithub />
                    @3raphat
                  </Button>
                </Link>
              </li>
              <li className='flex flex-col items-center'>
                <Link href='https://discord.com/users/556060331252776972' target='_blank'>
                  <Button className='py-2 px-3 gap-2 hover:bg-teal-400/50'>
                    <FaDiscord />
                    Ah#8492
                  </Button>
                </Link>
              </li>
            </ul>
          </Section>
        </Content>
      </Container>
    </Layout>
  )
}

export default Home