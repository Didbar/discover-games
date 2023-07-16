import { Card, CardBody, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import useGames, { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import { easeIn } from 'framer-motion'
import CriticScore from './CriticScore'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius='.5rem' overflow='hidden' maxW='sm'>
      <CardBody>
        <Image
          src={game.background_image}
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
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default GameCard
