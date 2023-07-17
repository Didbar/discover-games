import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import GenreSkeleton from './GenreSkeleton'

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  if (error) return <Text color='red.500'>genres not available</Text>
  return (
    <List>
      {isLoading && skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='.3rem'>
          <HStack spacing='3' _hover={{ cursor: 'pointer' }}>
            <Image
              boxSize='32px'
              borderRadius='50%'
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize='md'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
