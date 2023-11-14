import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { gamesSkeleton } from '../constants'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
  const { isLoading, error, data, fetchNextPage, hasNextPage } = useGames()

  if (error) return <Text color='red.300'>{error.message}</Text>
  if (data?.pages.length === 0 && !isLoading)
    return (
      <Text mt={5} fontSize='xl'>
        No games found
      </Text>
    )

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}>
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
    </InfiniteScroll>
  )
}

export default GameGrid
