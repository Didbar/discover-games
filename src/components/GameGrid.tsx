import { Center, SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { gamesSkeleton } from '../constants'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
  const { isLoading, error, data: games } = useGames(gameQuery)

  return (
    <>
      {error && <Text color='red.300'>{error}</Text>}
      {games.length === 0 && !isLoading && (
        <Text mt={5} fontSize='xl'>
          No games found
        </Text>
      )}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4
        }}
        spacing={3}>
        {isLoading &&
          gamesSkeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
