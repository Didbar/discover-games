import { HStack, ListItem, Skeleton, SkeletonText, Stack } from '@chakra-ui/react'

const GenreSkeleton = () => {
  return (
    <>
      <Skeleton height='32px' />
      <SkeletonText />
    </>
  )
}

export default GenreSkeleton
