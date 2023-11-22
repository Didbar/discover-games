import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' p='.5rem'>
      <Link to='/'>
        <Image
          src={logo}
          boxSize='70px'
          objectFit='contain'
          _hover={{ cursor: 'pointer' }}
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
