import NextLink from 'next/link'

const Link = ({ children, href, target, className }) => {
  return (
    <NextLink href={href}>
      <a target={target} className={className}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link