import { Button, HStack, Heading, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreSkeleton from './GenreSkeleton'
import { genresSkeleton } from '../constants'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres()

  if (error) return <Text color='red.500'>genres not available</Text>
  return (
    <>
      <Heading as='h3' fontSize='xl' mb={3}>
        Genres
      </Heading>
      <List>
        {isLoading && genresSkeleton.map((skeleton) => <GenreSkeleton key={skeleton} />)}
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY='.3rem'>
            <HStack spacing='3'>
              <Image
                objectFit='cover'
                boxSize='32px'
                borderRadius='50%'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'light'}
                onClick={() => onSelectGenre(genre)}
                fontSize='md'
                variant='link'>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
