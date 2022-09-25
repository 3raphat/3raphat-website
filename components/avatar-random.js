import Image from 'next/image'

const AvatarRandom = () => {

  const images = require('./avatar.json')
  const number = Math.floor(Math.random() * images.length)
  const avatar = images[number].src

  return (
    <div className='w-24'>
      <img src={avatar} alt='avatar'/>
    </div>
  )
}

export default AvatarRandom