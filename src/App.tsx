import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

function App() {
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
        <NavBar />
      </GridItem>
      <Show above='md'>
        <GridItem area='aside' paddingX={3}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main' px='0.5rem'>
        <GameHeading />
        <HStack spacing={5} mb={3}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
