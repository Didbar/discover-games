import { Box, Center } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Center>
      <Box
        borderRadius='0.5rem'
        overflow='hidden'
        width='100%'
        maxWidth='450px'
        _hover={{ transform: 'scale(1.03)', transition: 'transform .15s ease-in' }}
        boxShadow='lg'>
        {children}
      </Box>
    </Center>
  )
}

export default GameCardContainer
