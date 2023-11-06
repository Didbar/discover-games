import { BsGlobe } from 'react-icons/bs'
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiAtari, SiCommodore, SiD3Dotjs, SiNintendo, SiSega } from 'react-icons/si'

import { HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { Platform } from '../hooks/usePlatforms'

interface Props {
  platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    atari: SiAtari,
    'commodore-amiga': SiCommodore,
    sega: SiSega,
    '3do': SiD3Dotjs,
    'neo-geo': SiAtari,
    web: BsGlobe
  }
  const color = useColorModeValue('gray.500', 'teal.400')

  return (
    <HStack marginY={1}>
      {platforms.map(platform => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={color}
          boxSize={{
            base: '1.5rem',
            lg: platforms.length > 7 ? '.7rem' : platforms.length > 5 ? '.8rem' : 4
          }}
        />
      ))}
    </HStack>
  )
}

export default PlatformIconList
