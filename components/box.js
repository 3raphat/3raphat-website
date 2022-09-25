import Image from 'next/image'
import Link from './link'

const Box = ({ className, children, title, src, href, target }) => {
  return (
    <div className={`cursor-pointer ${className}`}>
      <Link href={href} target={target}>
        <div className='relative w-full h-48 rounded-lg overflow-hidden mx-auto'>
          <Image
            src={src}
            layout='fill'
            objectFit='cover'
            />
        </div>
        <div className='text-xl mt-4'>
          {title}
        </div>
        <div className='opacity-50 mt-2'>
          {children}
        </div>
      </Link>
    </div>
  )
}

export default Box