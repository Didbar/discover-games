import { Box, Card, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius='.5rem' overflow='hidden' width='100%'>
      {children}
    </Box>
  )
}

export default GameCardContainer
