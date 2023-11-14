import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' p='.5rem'>
      <Image
        src={logo}
        boxSize='60px'
        onClick={() => window.location.reload()}
        _hover={{ cursor: 'pointer' }}
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
