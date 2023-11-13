import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder: string
  searchText: string
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        md: '200px 1fr',
        lg: '250px 1fr'
      }}>
      <GridItem area='nav'>
        <NavBar onSearch={searchText => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show above='md'>
        <GridItem area='aside' paddingX={3}>
          <GenreList
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genreId: genre.id })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area='main' px='0.5rem'>
        <GameHeading gameQuery={gameQuery} />
        <HStack spacing={5} mb={3}>
          <PlatformSelector
            onSelectPlatform={platform =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
            selectedPlatformId={gameQuery.platformId}
          />
          <SortSelector
            onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder })}
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
