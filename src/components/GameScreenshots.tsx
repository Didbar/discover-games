import { Image, SimpleGrid } from '@chakra-ui/react'
import useScreenshots from '../hooks/useScreenshots'

const GameScreenshots = ({ gameId }: { gameId: number }) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId)

  if (isLoading) return null
  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={2}>
      {screenshots?.results.map(file => (
        <Image key={file.id} src={file.image} borderRadius='0.5rem' />
      ))}
    </SimpleGrid>
  )
}

export default GameScreenshots
