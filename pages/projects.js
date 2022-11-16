import Box from '../components/box'
import Heading from '../components/heading'
import Layout from '../components/layout'

const Projects = () => {
  return (
    <Layout title='Projects'>
        <Heading>
          /projects
        </Heading>
        <div className='gap-8 grid grid-cols-2'>
          <Box title='Discord Music Bot' href='https://sanabot.ml' target='_blank' src='/images/projects/sana_01.png'>
            A Discord bot that plays music from YouTube, Spotify, etc.
          </Box>
          <Box title='Todos' href='https://todos-web.netlify.app' target='_blank' src='/images/projects/todos_01.png'>
            A To-Do List website with Local Storage
          </Box>
          <Box title='Loop YouTube' href='https://loop-yt.vercel.app' target='_blank' src='/images/projects/loop_yt_01.png'>
            Loop any YouTube videos
          </Box>          
          <Box title='QR Code Generator' href='https://qr-generator-3raphat.vercel.app' target='_blank' src='/images/projects/qr_01.png'>
            Create and Read your QR Code
          </Box>
          <Box title='Quote Generator' href='https://quote-generator-3raphat.vercel.app' target='_blank' src='/images/projects/quote_01.png'>
            Quote Generator using API
          </Box>           
          <Box title='Virtual Otamatone' href='https://virtual-otamatone.vercel.app' target='_blank' src='/images/projects/vir_ota_01.png'>
            Play an Otamatone with your Numpad
          </Box>
        </div>
    </Layout>
  )
}

export default Projects
