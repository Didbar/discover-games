import { Card, CardBody, Flex, HStack, Heading, Image, Stack } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Flex key={game.id} align='center' justify='center'>
      <Card borderRadius='.5rem' overflow='hidden' maxW='sm'>
        <CardBody>
          <Image
            src={getCroppedImageUrl(game.background_image)}
            borderRadius='1rem'
            transition='all ease-in 0.03s'
            _hover={{
              transform: 'scale(1.05)'
            }}
          />
          <Stack mt='5' spacing='3'>
            <Heading fontSize='lg' as='kbd'>
              {game.name}
            </Heading>
            <HStack justifyContent='space-between'>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default GameCard
