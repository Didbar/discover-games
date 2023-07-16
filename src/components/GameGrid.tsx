import { Flex, List, ListItem, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

const GameGrid = () => {
  const { isLoading, error, games } = useGames()

  if (isLoading) return <Spinner color='teal.500' />
  return (
    <>
      {error && <Text color='red.300'>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5
        }}
        spacing={10}
        p='.5rem'>
        {games.map((game) => (
          <Flex key={game.id} align='center' justify='center'>
            <GameCard key={game.id} game={game} />
          </Flex>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
