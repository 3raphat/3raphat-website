import { useRouter } from 'next/router'
import Link from './link'
import ToggleThemeButton from './toggle-theme-button'

const LinkItem = ({ children, href, target }) => {
  const router = useRouter()
  const currentRouter = router.pathname
  const active = currentRouter === href

  return (
    <Link href={href} target={target} className={`py-2 px-3 rounded ${active ? 'bg-teal-400 ' : undefined}`}>
      {children}
    </Link>
  )
}

const Navbar = () => {
  return (
    <nav className='z-[1] fixed w-full backdrop-blur-lg p-2 flex items-center justify-around bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-20'>
      <div className='flex gap-4'>
        <NavItem>
          <LinkItem href='/'>Home</LinkItem>
        </NavItem>
        <NavItem>
          <LinkItem href='/projects'>Projects</LinkItem>
        </NavItem>
      </div>
      <ToggleThemeButton />
    </nav>
  )
}

const NavItem = ({ children }) => {
  return (
    <div className='hover:underline hover:underline-offset-4'>
      {children}
    </div>
  )
}

export default Navbar