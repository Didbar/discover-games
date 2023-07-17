import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { gamesSkeleton } from '../constants'
import { Genre } from '../hooks/useGenres'
import { Platform } from '../hooks/usePlatforms'

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { isLoading, error, data: games } = useGames(selectedGenre, selectedPlatform)

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
        spacing={3}
        mt='3'>
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
