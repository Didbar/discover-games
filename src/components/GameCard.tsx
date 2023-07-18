import { Card, CardBody, HStack, Heading, Image, Stack, Tooltip } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          borderRadius='1rem'
          transition='all ease-in 0.03s'
          boxShadow='xs'
          _hover={{
            transform: 'scale(1.05)'
          }}
        />
        <Stack mt='3' spacing='3'>
          <HStack justifyContent='space-between' marginBottom={1}>
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
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
              {game.name}
            </Heading>
          </Tooltip>
          <Emoji rating={game.rating_top} />
        </Stack>
      </CardBody>
    </Card>
  )
}

export default GameCard
