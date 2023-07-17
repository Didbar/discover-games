import { Box, Card, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Flex align='center' justify='center'>
      <Box borderRadius='.5rem' overflow='hidden' width='100%'>
        {children}
      </Box>
    </Flex>
  )
}

export default GameCardContainer
