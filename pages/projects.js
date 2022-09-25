import Box from '../components/box'
import Container from '../components/container'
import Content from '../components/content'
import Heading from '../components/heading'
import Layout from '../components/layout'

const Projects = () => {
  return (
    <Layout title='Projects'>
      <Container>
        <Content>
          <Heading>
            /projects
          </Heading>
          <div className='gap-8 grid grid-cols-2'>
            <Box title='Discord Music Bot' href='https://sana-bot.netlify.app' target='_blank' src='/images/sana_01.png'>
              A Discord bot that plays music from YouTube, Spotify, etc.
            </Box>
            <Box title='Todos' href='https://todos-web.netlify.app' target='_blank' src='/images/todos_01.png'>
              A To-Do List website with Local Storage.
            </Box>
            <Box title='Virtual Otamatone' href='https://virtual-otamatone.vercel.app' target='_blank' src='/images/vir_ota_01.png'>
              Play an Otamatone with your Numpad.
            </Box>
            <Box title='QR Code Generator' href='https://qr-generator-3raphat.vercel.app' target='_blank' src='/images/qr_01.png'>
              Create your QR Code for free.
            </Box>
            <Box title='Quote Generator' href='http://quote-generator-3raphat.vercel.app' target='_blank' src='/images/quote_01.png'>
              Quote Generator using API
            </Box>           
            <Box title='Quiz App' href='https://quiz-app-3raphat.vercel.app' target='_blank' src='/images/quiz_01.png'>
              Quiz about K-POP 
            </Box>          
          </div>
        </Content>
      </Container>
    </Layout>
  )
}

export default Projects