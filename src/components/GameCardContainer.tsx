import { Box, Center } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Center>
      <Box
        borderRadius='.5rem'
        overflow='hidden'
        width='100%'
        maxWidth='450px'
        boxShadow='lg'>
        {children}
      </Box>
    </Center>
  )
}

export default GameCardContainer
