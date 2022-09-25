import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Button from './button'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ToggleThemeButton = () => {
  
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      return (
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={currentTheme}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Button className='bg-[#FBD38D] text-black' onClick={() => setTheme('light')}><SunIcon /></Button>
          </motion.div>
        </AnimatePresence>
      )
    } else {
      return (
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={currentTheme}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Button className='bg-[#805AD5] text-white' onClick={() => setTheme('dark')}><MoonIcon /></Button>
          </motion.div>
        </AnimatePresence>
      )
    }
  }

  return (
    renderThemeChanger()
  )
}

export default ToggleThemeButton