import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'

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
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid
  }
  const color = useColorModeValue('gray.500', 'teal.400')

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
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
