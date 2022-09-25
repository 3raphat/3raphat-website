import Image from 'next/image'

const AvatarRandom = () => {

  const images = require('./avatar.json')
  const number = Math.floor(Math.random() * images.length)
  const avatar = images[number].src

  return (
    <div className='relative w-24 h-24'>
      <Image src={avatar} layout='fill' objectFit='contain' alt='avatar' />
    </div>
  )
}

export default AvatarRandom