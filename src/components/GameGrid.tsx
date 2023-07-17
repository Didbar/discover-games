import { Flex, List, ListItem, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
  const { isLoading, error, games } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]

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
        {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
