import {
  Box,
  Card,
  CardBody,
  Link as ChakraLink,
  HStack,
  Heading,
  Image,
  Stack,
  Tooltip
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow='hidden'>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        transition='all ease-in 0.03s'
        boxShadow='xs'
        style={{
          filter: 'brightness(75%)'
        }}
      />
      <Box position='absolute' top='1rem' left='1rem' _hover={{ cursor: 'help' }}>
        <Emoji rating={game.rating_top} />
      </Box>
      <CardBody position='relative'>
        <Stack mt='3' spacing='3'>
          <HStack justifyContent='space-between' marginBottom={1}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Tooltip label={game.name} aria-label='A tooltip' p='0.5rem' borderRadius='8px'>
            <Heading
              noOfLines={1}
              fontSize={{
                base: 'lg',
                lg: 'md'
              }}
              as='kbd'>
              <ChakraLink as={Link} to={`/games/${game.slug}`}>
                {game.name}
              </ChakraLink>
            </Heading>
          </Tooltip>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default GameCard
