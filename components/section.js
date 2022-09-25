const Section = ({ title, children }) => {
  return (
    <div className='mt-8'>
      <div className='font-quick text-lg font-bold underline underline-offset-[6px] decoration-[3px] decoration-[#ff1493] mb-2'>
        {title}
      </div>
      <div className='indent-[1em] text-justify'>
        {children}
      </div>
    </div>
  )
}

export default Section