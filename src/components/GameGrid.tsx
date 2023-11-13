import { SimpleGrid, Text } from '@chakra-ui/react'
import { GameQuery } from '../App'
import { gamesSkeleton } from '../constants'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
  const { isLoading, error, data } = useGames(gameQuery)

  if (error) return <Text color='red.300'>{error.message}</Text>
  if (data?.results.length === 0 && !isLoading)
    return (
      <Text mt={5} fontSize='xl'>
        No games found
      </Text>
    )

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        lg: 3,
        xl: 4
      }}
      spacing={3}>
      {isLoading &&
        gamesSkeleton.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map(game => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}

export default GameGrid
