import { Button, SimpleGrid, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
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
  const { isLoading, error, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGames(gameQuery)

  if (error) return <Text color='red.300'>{error.message}</Text>
  if (data?.pages.length === 0 && !isLoading)
    return (
      <Text mt={5} fontSize='xl'>
        No games found
      </Text>
    )

  return (
    <Fragment>
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
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map(game => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button my={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </Fragment>
  )
}

export default GameGrid
